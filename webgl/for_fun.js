// WebGL Post Process Shader (for_fun.js)

//--------------------------------------------------
// 1) 셰이더 소스 (Vertex + Fragment)
//--------------------------------------------------
const vertexShaderSource = `
attribute vec2 a_position;
attribute vec2 a_texCoord;

varying vec2 vTexCoord;

void main() {
    vTexCoord = a_texCoord;
    gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

// 📌 Post Process Fragment Shader (Voronoi Glow + 배경)
const fragmentShaderSource = `
precision mediump float;

varying vec2 vTexCoord;
uniform vec2 iResolution;
uniform float iTime;
uniform sampler2D uTexture;  // 배경 텍스처

const mat2 myt = mat2(0.12121212, 0.13131313, -0.13131313, 0.12121212);
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
            vec2 b = vec2(float(i), float(j));
            vec2 r = b - f + rhash(p + b);
            res += 1.0 / pow(dot(r, r), 8.0);
        }
    }
    return pow(1.0 / res, 0.0625);
}

void main() {
    vec2 fragCoord = vTexCoord * iResolution;
    vec2 uv = fragCoord / iResolution;

    // 배경 이미지 불러오기
    vec3 bgColor = texture2D(uTexture, vTexCoord).rgb;

    // Voronoi Glow 효과
    float glow = voronoi2d(uv * 10.0 + iTime * 0.1);

    // 푸른 그라데이션과 합성
    vec3 gradientColor = mix(vec3(0.1, 0.2, 0.8), vec3(0.0, 0.0, 0.3), uv.y);
    vec3 finalColor = mix(bgColor, gradientColor, glow * 0.5);

    gl_FragColor = vec4(finalColor, 1.0);
}
`;

//--------------------------------------------------
// 2) WebGL 초기화 및 렌더링
//--------------------------------------------------
window.addEventListener("load", () => {
  const canvas = document.getElementById("glCanvas");
  const gl = canvas.getContext("webgl");
  if (!gl) {
    alert("WebGL not supported!");
    return;
  }

  // 캔버스 크기 설정
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    gl.viewport(0, 0, canvas.width, canvas.height);
  }

  // 셰이더 컴파일 함수
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

  // 프로그램 생성
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

  // 프로그램 생성
  const program = createProgram(gl, vertexShaderSource, fragmentShaderSource);

  // 정점 데이터 (풀 스크린 사각형)
  const quadVerts = new Float32Array([
    -1, -1,  0, 0,
     1, -1,  1, 0,
    -1,  1,  0, 1,
     1,  1,  1, 1
  ]);

  // VBO
  const vertexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, quadVerts, gl.STATIC_DRAW);

  const aPosition = gl.getAttribLocation(program, "a_position");
  const aTexCoord = gl.getAttribLocation(program, "a_texCoord");

  gl.enableVertexAttribArray(aPosition);
  gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 4 * 4, 0);

  gl.enableVertexAttribArray(aTexCoord);
  gl.vertexAttribPointer(aTexCoord, 2, gl.FLOAT, false, 4 * 4, 2 * 4);

  // 유니폼 위치
  const uResolution = gl.getUniformLocation(program, "iResolution");
  const uTime = gl.getUniformLocation(program, "iTime");
  const uTexture = gl.getUniformLocation(program, "uTexture");

  let startTime = performance.now();

  // 배경 텍스처 로드
  const texture = gl.createTexture();
  const bgImage = new Image();
  bgImage.src = "background.jpg"; // 🔹 여기에 배경 이미지 추가 (같은 폴더에 있어야 함)
  bgImage.onload = () => {
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, bgImage);
    gl.generateMipmap(gl.TEXTURE_2D);
  };

  function render() {
    if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
      resizeCanvas();
    }

    let now = performance.now();
    let elapsed = (now - startTime) / 1000.0;

    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.useProgram(program);

    // 유니폼 전달
    gl.uniform2f(uResolution, canvas.width, canvas.height);
    gl.uniform1f(uTime, elapsed);
    gl.uniform1i(uTexture, 0);

    // 텍스처 바인딩
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture);

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

    requestAnimationFrame(render);
  }

  render();
});
