// for_fun.js
// - underwater.jpg 이미지를 WebGL 텍스처로 로드
// - Voronoi(언더워터 갓레이) 효과를 겹쳐서 표현

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

// 📌 프래그먼트 셰이더:
// 1. underwater.jpg -> baseColor
// 2. Voronoi(갓레이) -> glowColor
// 3. 최종 baseColor + glowColor
const fragmentShaderSource = `
precision mediump float;

varying vec2 vTexCoord; // 0~1 범위 텍스처좌표

uniform sampler2D uTexture; // underwater.jpg
uniform vec2 iResolution;   // 화면 크기 (width,height)
uniform float iTime;        // 시간(초)

const mat2 myt = mat2(0.12121212, 0.13131313,
                     -0.13131313, 0.12121212);
const vec2 mys = vec2(1e4, 1e6);

// 해시
vec2 rhash(vec2 uv) {
    uv *= myt;
    uv *= mys;
    return fract(fract(uv / mys) * uv);
}

// Voronoi
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

// 극좌표 변환
vec2 cart2polar(vec2 uv) {
    float phi = atan(uv.y, uv.x);
    float r = length(uv);
    return vec2(phi, r);
}

void main() {
    // 화면 좌표 (0~1)
    vec2 uv = vTexCoord;

    // p는 화면비에 맞춰서
    vec2 p = uv;
    p.x *= iResolution.x / iResolution.y;

    // 중심부에서 아래로 떨어져있는 듯한 변환
    vec2 tmp = (uv - 0.7) * 2.0;
    tmp.x *= iResolution.x / iResolution.y;
    tmp.y -= 2.0;
    tmp /= 50.0;
    tmp = cart2polar(tmp);

    // Voronoi
    float n1 = voronoi2d( (vec2(tmp.x, 0.0) + 0.04 * iTime) * 1.0 );
    float n2 = voronoi2d( (vec2(0.1, tmp.x) + 0.04 * iTime * 1.5 ) * 4.0 );
    float n3 = min(n1, n2);

    // 윗부분만 빛 보이게
    float mask = smoothstep(0.05, 0.96, p.y);
    float brightness = n3 * mask * 0.4;

    // 베이스: underwater.jpg
    vec3 baseColor = texture2D(uTexture, uv).rgb;

    // glow: 약간 주황/흰색
    vec3 glowColor = vec3(1.0, 0.9, 0.8) * brightness;

    // 합성
    gl_FragColor = vec4(baseColor + glowColor, 1.0);
}
`;

//--------------------------------------------------
// 2) WebGL 초기화
//--------------------------------------------------
window.addEventListener("load", () => {
  const canvas = document.getElementById("glCanvas");
  const gl = canvas.getContext("webgl");
  if (!gl) {
    alert("WebGL not supported or disabled!");
    return;
  }

  // 창 크기 설정
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    gl.viewport(0, 0, canvas.width, canvas.height);
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  // 셰이더 컴파일
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

  // 프로그램 만들기
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

  // 화면 전체(-1~1) 사각형 정점: pos + texCoord
  const quadVerts = new Float32Array([
    //   posX   posY   texX  texY
    -1, -1,    0,     0,
     1, -1,    1,     0,
    -1,  1,    0,     1,
     1,  1,    1,     1
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

  // uniform
  const uTextureLoc = gl.getUniformLocation(program, "uTexture");
  const uResLoc = gl.getUniformLocation(program, "iResolution");
  const uTimeLoc = gl.getUniformLocation(program, "iTime");

  // 텍스처 생성
  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);

  // 웹GL Non-power-of-two 텍스처 대비
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

  // 이미지 로드
  const bgImage = new Image();
  bgImage.src = "../img/water_back.png"; // 📌 이미지 경로
  bgImage.onload = () => {
    gl.bindTexture(gl.TEXTURE_2D, texture);
    // 이미지 로드 후 텍스처에 업로드
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, bgImage);
    // mipmap (파워-오브-투가 아니어도 LINEAR 사용 가능하도록 wrap -> CLAMP_TO_EDGE)
    gl.generateMipmap(gl.TEXTURE_2D);
    console.log("🔹 underwater.jpg loaded!");
  };

  let startTime = performance.now();
  
  function render() {
    // 혹시 창 크기 바뀌었나 확인
    if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
      resizeCanvas();
    }

    let now = performance.now();
    let elapsed = (now - startTime) / 1000.0; // 초단위

    gl.clearColor(0,0,0,1);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.useProgram(program);
    // 해상도, 시간 uniform
    gl.uniform2f(uResLoc, canvas.width, canvas.height);
    gl.uniform1f(uTimeLoc, elapsed);

    // 텍스처 유닛 0 번에 바인딩
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.uniform1i(uTextureLoc, 0);

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

    requestAnimationFrame(render);
  }

  render();
});
