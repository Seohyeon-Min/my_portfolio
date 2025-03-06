// bubble_webgl.js

//--------------------------------------------------
// 1) 셰이더 소스: Vertex + Fragment
//--------------------------------------------------
const vertexShaderSource = `
attribute vec2 a_position;
varying vec2 vTexCoord;
void main() {
    // 풀스크린 사각형: -1~1 범위로 정점 전달
    vTexCoord = (a_position + 1.0) * 0.5; 
    // -1~1 → 0~1(텍스처 좌표)
    gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

// 버블(원형)들을 화면에 그리는 포스트프로세스 방식
const fragmentShaderSource = `
precision mediump float;

varying vec2 vTexCoord;

uniform vec2 iResolution;

/* 버블 메뉴 데이터:
   - 각 버블마다 (x, y, radius, colorIndex) 같이 저장해볼 수 있음
   - 여기서는 x,y,radius만 다루고, color는 임시 배열
*/

const int MAX_BUBBLES = 16;  // 최대 버블 개수 (상황 맞게 조절)

uniform int uBubbleCount;             
uniform vec4 uBubbles[MAX_BUBBLES];  
// (x, y, radius, 0 or 1...) 
// x,y: 화면비 0~1
// radius: 0~0.2 등
// w: colorIndex(0=하늘색,1=핑크...) 예시

// 임의로 색상표 2~3개
vec3 getColor(float cIndex) {
    // cIndex가 0→녹색, 1→핑크, 2→청록 ...
    if(cIndex < 0.5) return vec3(0.0, 1.0, 0.8); // #0: (민트)
    else if(cIndex < 1.5) return vec3(1.0, 0.6, 0.8); // #1: (핑크)
    else return vec3(0.8, 0.9, 1.0); // #2: (연한 파랑)
}

void main() {
    // vTexCoord: 0~1
    vec2 uv = vTexCoord;
    vec3 finalColor = vec3(0.0); // 배경은 검정
    float alpha = 1.0;

    // 여러 버블 중, 픽셀이 어느 버블 안에 들어가면 색칠
    for(int i = 0; i < MAX_BUBBLES; i++) {
        if(i >= uBubbleCount) break; 
        vec4 bub = uBubbles[i]; // (x, y, radius, colorIdx)
        float dist = distance(uv, bub.xy);
        if(dist < bub.z) {
            // 안쪽에 있으면 해당 색상
            float cIndex = bub.w;
            vec3 col = getColor(cIndex);
            // 가장 큰 원 위에 그리는 방식(단순 덮어쓰기)
            finalColor = col;
        }
    }
    gl_FragColor = vec4(finalColor, alpha);
}
`;

//--------------------------------------------------
// 2) WebGL 초기화 & 버블 데이터 전달
//--------------------------------------------------
window.addEventListener("load", () => {
  const canvas = document.getElementById("bubbleCanvas");
  const gl = canvas.getContext("webgl");
  if(!gl) {
    alert("WebGL not supported!");
    return;
  }

  // 캔버스 크기 설정
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    gl.viewport(0, 0, canvas.width, canvas.height);
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  // 셰이더 컴파일 함수
  function createShader(type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if(!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error("Shader compile error:", gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }

  // 프로그램 링크
  function createProgram(vsSource, fsSource) {
    const vs = createShader(gl.VERTEX_SHADER, vsSource);
    const fs = createShader(gl.FRAGMENT_SHADER, fsSource);
    const prog = gl.createProgram();
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if(!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.error("Program link error:", gl.getProgramInfoLog(prog));
      return null;
    }
    return prog;
  }

  const program = createProgram(vertexShaderSource, fragmentShaderSource);

  // 풀스크린 정점 데이터 (posX,posY in [-1,1])
  const quadVerts = new Float32Array([
    -1, -1,
     1, -1,
    -1,  1,
     1,  1
  ]);
  const vbo = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
  gl.bufferData(gl.ARRAY_BUFFER, quadVerts, gl.STATIC_DRAW);

  const aPositionLoc = gl.getAttribLocation(program, "a_position");
  gl.enableVertexAttribArray(aPositionLoc);
  gl.vertexAttribPointer(aPositionLoc, 2, gl.FLOAT, false, 0, 0);

  // 유니폼
  const uResLoc = gl.getUniformLocation(program, "iResolution");
  const uCountLoc = gl.getUniformLocation(program, "uBubbleCount");
  const uBubblesLoc = gl.getUniformLocation(program, "uBubbles");

  // ----------------------------------------
  // 예시: "메뉴 버블" 정보 (x,y,radius, colorIndex)
  // 화면 좌표를 [0..1]로 정규화
  // ex) left=10% => x=0.1, bottom=20% => y=0.2
  // radius=0.08 => 폭의8%
  // colorIndex=0,1,2
  const bubbleData = [
    [0.1, 0.2, 0.08, 0.0],  // (x=0.1, y=0.2, radius=0.08, color=0)
    [0.2, 0.5, 0.15, 1.0],  // color=1
    [0.4, 0.7, 0.1, 2.0],
    [0.8, 0.2, 0.09, 0.0],
  ];
  // bubbleData에서 vec4[]로 변환
  let bubbleVec4 = [];
  for(let i=0; i<bubbleData.length; i++){
    bubbleVec4.push(bubbleData[i][0]);
    bubbleVec4.push(bubbleData[i][1]);
    bubbleVec4.push(bubbleData[i][2]);
    bubbleVec4.push(bubbleData[i][3]);
  }
  // Float32Array로 변환
  const bubbleArray = new Float32Array(bubbleVec4);

  function render(){
    gl.clearColor(0,0,0,1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.useProgram(program);

    // 화면 해상도
    gl.uniform2f(uResLoc, canvas.width, canvas.height);

    // 버블 데이터 전달
    gl.uniform1i(uCountLoc, bubbleData.length);
    // 이름이 uBubbles[MAX_BUBBLES], index-based uniform
    // glUniform4fv(uBubbles[0]) → WebGL에선 gl.uniform4fv(uBubblesLoc, float32array, offset)
    gl.uniform4fv(uBubblesLoc, bubbleArray);

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

    requestAnimationFrame(render);
  }
  render();
});
