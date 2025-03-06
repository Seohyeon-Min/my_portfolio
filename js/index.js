// WebGL을 초기화하고 GLSL 셰이더를 로드하여 텍스처 적용

const vertexShaderSource = `
    attribute vec2 a_position;
    attribute vec2 a_texCoord;
    varying vec2 vTexCoord;
    void main() {
        vTexCoord = a_texCoord;
        gl_Position = vec4(a_position, 0.0, 1.0);
    }
`;

const fragmentShaderSource = `
    precision mediump float;
    varying vec2 vTexCoord;
    uniform sampler2D uTexture;
    uniform vec2 iResolution;
    uniform float iTime;

    const mat2 myt = mat2(.12121212, .13131313, -.13131313, .12121212);
    const vec2 mys = vec2(1e4, 1e6);

    vec2 rhash(vec2 uv) {
        uv *= myt;
        uv *= mys;
        return fract(fract(uv / mys) * uv);
    }

    float voronoi2d(const in vec2 point) {
        vec2 p = floor(point);
        vec2 f = fract(point);
        float res = 0.0;
        for (int j = -1; j <= 1; j++) {
            for (int i = -1; i <= 1; i++) {
                vec2 b = vec2(i, j);
                vec2 r = vec2(b) - f + rhash(p + b);
                res += 1.0 / pow(dot(r, r), 8.0);
            }
        }
        return pow(1.0 / res, 0.0625);
    }

    vec2 cart2polar(vec2 uv) {
        float phi = atan(uv.y, uv.x);
        float r = length(uv);
        return vec2(phi, r);
    }

    void main() {
        vec2 uv = vTexCoord;

        // UV 변환
        vec2 p = uv;
        p.x *= iResolution.x / iResolution.y;

        uv = (uv - 0.7) * 2.0;
        uv.x *= iResolution.x / iResolution.y;

        uv.y -= 2.0;
        uv /= 50.0;
        uv = cart2polar(uv);

        // Voronoi 효과
        float n1 = voronoi2d((vec2(uv.x, 0.0) + 0.04 * iTime) * 1.0);
        float n2 = voronoi2d((vec2(0.1, uv.x) + 0.04 * iTime * 1.5) * 4.0);
        float n3 = min(n1, n2);

        // Alpha 마스크
        float mask = smoothstep(.05, .96, p.y);
        float brightness = n3 * mask * 0.4;     
        float alpha = n3 * mask * 1.;           

        // 기본 텍스처 로드
        vec3 baseColor = texture2D(uTexture, vTexCoord).rgb;
        vec3 glowColor = vec3(1.0, 0.9, 0.8) * brightness;

        // 최종 색상 적용
        gl_FragColor = vec4(baseColor + glowColor, 1.0);
    }
`;

window.addEventListener("load", () => {
    const canvas = document.getElementById("glCanvas");
    const gl = canvas.getContext("webgl");

    if (!gl) {
        alert("WebGL not supported!");
        return;
    }

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        gl.viewport(0, 0, canvas.width, canvas.height);
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    function createShader(gl, type, source) {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.error("Shader compile error:", gl.getShaderInfoLog(shader));
            gl.deleteShader(shader);
            return null;
        }
        return shader;
    }

    function createProgram(gl, vsSource, fsSource) {
        const vShader = createShader(gl, gl.VERTEX_SHADER, vsSource);
        const fShader = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
        const prog = gl.createProgram();
        gl.attachShader(prog, vShader);
        gl.attachShader(prog, fShader);
        gl.linkProgram(prog);
        if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
            console.error("Program link error:", gl.getProgramInfoLog(prog));
            return null;
        }
        return prog;
    }

    const program = createProgram(gl, vertexShaderSource, fragmentShaderSource);

    const quadVerts = new Float32Array([
        -1, -1,  0, 0,
         1, -1,  1, 0,
        -1,  1,  0, 1,
         1,  1,  1, 1
    ]);

    const vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, quadVerts, gl.STATIC_DRAW);

    const aPosition = gl.getAttribLocation(program, "a_position");
    const aTexCoord = gl.getAttribLocation(program, "a_texCoord");

    gl.enableVertexAttribArray(aPosition);
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 4 * 4, 0);
    
    gl.enableVertexAttribArray(aTexCoord);
    gl.vertexAttribPointer(aTexCoord, 2, gl.FLOAT, false, 4 * 4, 2 * 4);

    const uTexture = gl.getUniformLocation(program, "uTexture");

    const texture = gl.createTexture();
    const bgImage = new Image();
    bgImage.src = "img/skills-bg.jpg"; // **배경 이미지 경로**
    bgImage.onload = () => {
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, bgImage);
        gl.generateMipmap(gl.TEXTURE_2D);
    };

    function render(time) {
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.useProgram(program);
        gl.uniform1i(uTexture, 0);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        requestAnimationFrame(render);
    }

    render();
});
