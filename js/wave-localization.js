// Register translations before the shared language controller initializes.
(() => {
  const translations = [
    ['.wave-nav a', '← 전체 프로젝트로 돌아가기'],
    ['.wave-nav span', 'WAVE SIMULATOR · 테크니컬 아트'],
    ['.wave-hero small', 'UNITY URP · HLSL · 절차적 수면 표현'],
    ['.wave-hero p', '커스텀 HLSL과 절차적 정점 변위, 여러 겹의 노이즈, 상호작용 가능한 지오메트리 조절 기능을 결합한 실시간 수면 연구 프로젝트입니다.'],
    ['.wave-notes > small', '셰이더 개발 노트 · 배운 점'],
    ['.wave-notes > h2', '노이즈에서 형태가 읽히는 수면까지'],
    ['.wave-note-grid article:nth-child(1) b', '시간축 노이즈에서 Flow Noise로'],
    ['.wave-note-grid article:nth-child(1) p', '시간을 노이즈의 세 번째 축으로 사용하는 대신, 2D 격자점의 그래디언트 방향을 연속적으로 회전시켰습니다. 표면의 공간적 연속성을 유지하면서 패턴이 교체되는 느낌보다 자연스럽게 흐르는 움직임을 만들고자 했습니다.'],
    ['.wave-note-grid article:nth-child(2) b', '도메인 워핑으로 규칙적인 무늬 완화'],
    ['.wave-note-grid article:nth-child(2) p', '노이즈 패턴이 메시의 정점 간격보다 촘촘해지자 규칙적인 무아레 줄무늬가 나타났습니다. 낮은 주파수의 노이즈로 샘플링 좌표를 뒤틀어 격자의 규칙적인 정렬을 흐트러뜨렸습니다. 이 접근은 시각적 반복을 완화하기 위한 것이며, 메시 해상도에 따른 샘플링 한계 자체를 없애는 것은 아닙니다.'],
    ['.wave-note-grid article:nth-child(3) b', '높이장의 경사로 법선 계산'],
    ['.wave-note-grid article:nth-child(3) p', '주변 지점의 높이 차이를 유한차분으로 비교하고, 얻어진 경사로 표면 법선을 구성했습니다. 화면 공간 미분에서 삼각형 단위로 각져 보이던 표현을 개선하고, 절차적으로 변하는 수면에 맞춰 조명이 반응하도록 했습니다.'],
    ['.wave-note-grid article:nth-child(4) b', '조절 가능한 표면 표현 레이어'],
    ['.wave-note-grid article:nth-child(4) p', 'Voronoi 기반의 코스틱 무늬, 모서리 강조, 산란을 흉내 낸 색상, 흰 물결과 이동 흔적을 여러 레이어로 구성했습니다. 노출한 파라미터와 공유하는 흐름 시간을 통해 엔진 안에서 움직임과 표면의 인상을 조절할 수 있도록 했습니다.'],
    ['.wave-build h2', '웹 빌드 플레이'],
    ['.wave-build-head strong', 'WASD로 이동 · 마우스로 시점 조작'],
    ['.wave-actions a:first-child', '전체 화면으로 열기 ↗'],
    ['.wave-actions a:last-child', '소스 코드 보기 ↗'],
    ['.footer span', 'WAVE SIMULATOR · 테크니컬 아트']
  ];
  translations.forEach(([selector, ko]) => {
    const element = document.querySelector(selector);
    if (!element) return;
    element.dataset.en = element.textContent;
    element.dataset.ko = ko;
  });
  document.addEventListener('portfolio-language-change', ({ detail }) => {
    const ko = detail.language === 'ko';
    const back = document.querySelector('.project-back-button');
    if (back) back.lastElementChild.textContent = ko ? '뒤로가기' : 'Back';
    document.querySelector('.wave-hero img').alt = ko ? '웨이브 시뮬레이터 수면 표현' : 'Wave Simulator preview';
    document.querySelector('.wave-frame').title = ko ? '웨이브 시뮬레이터 웹 빌드' : 'Wave Simulator playable web build';
  });
})();
