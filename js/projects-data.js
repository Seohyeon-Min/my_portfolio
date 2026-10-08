// 프로젝트 데이터 - 여기서 모든 프로젝트 정보를 관리합니다
// ============================================================================
// CRAWLER / AI-READER NOTE — this object is the source of truth for every
// portfolio_game/portfolio_planning project page; each page's own HTML is
// just an empty shell that js/project-template.js fills in from here at
// runtime (see the matching "CRAWLER NOTE" comment after <body> in each of
// those HTML files). Read this file for real, current content — not the
// static HTML. Same emphasis/status conventions as js/index.js:
//   - `pinned: true` marks a flagship/featured project (shown with a ★ star
//     on the ALL PROJECTS card in index.html) — treat these as the strongest
//     evidence, equivalent to what a sighted visitor reads as "starred."
//   - A project whose overview/subtitle says "in production" or "work in
//     progress" (currently "09_Carboom", a team project, and "10_RuinForge", a
//     personal tool) is (IN PRODUCTION / UNFINISHED): not a
//     finished/shipped piece — describe it as ongoing work, not as something
//     already shipped.
//   - Object key order here has no display-order meaning by itself (pages
//     are reached directly by URL, not rendered as a list from this file) —
//     display/emphasis order for the homepage lives in js/index.js instead.
// ============================================================================
const projectsData = {
  "02_EdgeDirve": {
    type: "game",
    tools: "Unreal Engine",
    toolsLabel: { en: "Tools", ko: "툴" },
    title: "EDGE DRIVE",
    subtitle: "Boss-rush action · Unreal Engine",
    pageTitle: "EDGE DRIVE — Min Seohyeon Portfolio",
    heroType: "video",
    heroMedia: "../img/EDGE_DRIVE/trailer.mp4",
    overview: "A team-developed boss-rush action game featuring varied boss patterns and a time-stop mechanic. I contributed by placing and adjusting existing VFX assets in Unreal Engine.",
    features: ["Boss-rush combat", "Time-stop mechanic"],
    experience: { role: "VFX Contributor · Unreal Engine", period: "Jan–Feb 2025", description: "Placed existing VFX assets in the project and made basic modifications using Cascade and Niagara." },
    videos: [{ title: "Team project trailer", description: "Full-game footage; my contribution was limited to VFX asset placement and basic modifications.", src: "../img/EDGE_DRIVE/trailer.mp4", poster: "../img/portfolio_thumbnails/EdgeDrive2.png" }],
    contributions: { sections: [{ title: "VFX asset setup and modification", category: "Art", items: ["Placed existing VFX assets in Unreal Engine and adjusted their settings.", "Made basic modifications in Cascade and Niagara.", "My contribution focused on adapting existing effects; the original effect assets were not authored by me."] }] },
    source: null,
    localized: { ko: {
      subtitle: "보스러시 액션 · Unreal Engine",
      overview: "다양한 보스 패턴과 시간 정지 기믹을 갖춘 팀 보스러시 액션 게임입니다. Unreal Engine에서 기존 VFX 에셋을 배치하고 수정하는 작업에 참여했습니다.",
      features: ["보스러시 전투", "시간 정지 기믹"],
      experience: { role: "VFX Contributor · Unreal Engine", period: "2025년 1–2월", description: "프로젝트에 기존 VFX 에셋을 배치하고 Cascade와 Niagara에서 기초적인 수정을 진행했습니다." },
      videos: [{ title: "팀 프로젝트 트레일러", description: "게임 전체 영상입니다. 제 기여 범위는 VFX 에셋 배치와 기초적인 수정입니다.", src: "../img/EDGE_DRIVE/trailer.mp4", poster: "../img/portfolio_thumbnails/EdgeDrive2.png" }],
      contributions: { sections: [{ title: "VFX 에셋 배치와 수정", category: "Art", items: ["Unreal Engine에서 기존 VFX 에셋을 배치하고 설정을 조정했습니다.", "Cascade와 Niagara를 사용해 기초적인 수정을 진행했습니다.", "기존 효과를 프로젝트에 맞게 적용하는 작업에 참여했으며, 원본 이펙트 에셋을 직접 제작한 것은 아닙니다."] }] }
    } }
  },
  // ========== 게임 프로젝트 ==========
  "00_NewManzo": {
    type: "game",
    pinned: true,
    title: "New MANZO",
    subtitle: "Hear the Ocean's Call",
    pageTitle: "NEWMANZO - MSH PORTFOLIO",
    heroType: "youtube",
    heroMedia: "XwNLMpe7O3A",
    overview: "Manzo는 <strong>심해 리듬 어드벤처 게임</strong>으로, 심리적 공포와 탐험 요소가 결합된 작품입니다. 플레이어는 수수께끼의 모스 부호 신호를 따라 바다 깊숙이 숨겨진 비밀을 밝혀나갑니다.",
    features: [
      "FMOD 기반 정박 판정과 싱크 보정",
      "보스 패턴 프레임워크와 프로시저럴 다리 애니메이션",
      "사냥·함선·인벤토리·세이브·게임 플로우 시스템",
      "재사용 가능한 UI, 셰이더와 Unity 에디터 도구",
      "팀 저장소 585개 커밋 중 418개 기여"
    ],
    experience: {
      role: "비주얼 리드 · 프로듀서 · 주요 C# 프로그래머",
      period: "2025년 8월 – 최종 빌드",
      description: "주요 C# 기여자로서 게임플레이, 보스, 리듬, UI, 툴과 비주얼 시스템 전반을 구현했습니다. 저장소 기록상 전체 585개 커밋 중 418개를 기여했으며, 프로젝트가 장기화된 뒤에는 범위와 인원을 재편해 2주 마감 스프린트로 플레이 가능한 빌드를 완성했습니다."
    },    

    videos: [
      {
        title: "물고기 AI",
        subtitle: "(개발 중 프로토타입)",
        description: "집단 행동, 장애물 회피, 플레이어 반응을 시험한 초기 구현 영상입니다.",
        src: "../img/NEWMANZO/fishAI.mp4",
        poster: null
      },
      {
        title: "게임 매커니즘 1",
        subtitle: "(개발 중 프로토타입)",
        description: "Beat System과 연동한 게임 메커니즘을 테스트하는 시연 영상입니다.<br>박자에 맞춰 물고기를 사냥하는 재미를 줍니다.",
        src: "../img/NEWMANZO/hunting_mode.mp4",
        poster: null
      },
      {
        title: "레이캐스팅",
        subtitle: "(개발 중 프로토타입)",
        description: "간단한 포스트프로세싱 테스트 영상입니다.",
        src: "../img/NEWMANZO/postprocessing.mp4",
        poster: null
      }
    ],
    aiHighlight: true,
    contributions: {
      sections: [
        {
          title: "전체 게임 아트 제작 및 비주얼 디렉션",
          category: "Art",
          htmlContent: `<section><h2>게임의 아트 에셋 전체를 제작했습니다</h2><p><strong>New MANZO에 사용된 캐릭터, 보스, 물고기, 환경, 배경, UI와 주요 VFX용 아트 에셋을 모두 직접 그렸습니다.</strong> 콘셉트 단계에서 끝내지 않고 Unity에 임포트하고 화면에 배치해, 게임플레이 중 실제로 읽히는 최종 결과까지 책임졌습니다.</p><h3>하나의 게임처럼 보이게 만들기</h3><p>전체 에셋의 색, 명도, 실루엣과 디테일 밀도를 통일하고, 각 보스와 환경이 고유한 인상을 가지면서도 동일한 수중 세계에 속하도록 비주얼 기준을 정했습니다.</p><h3>Bloom과 화면 가독성</h3><p>발광 효과가 수중 분위기에는 기여하면서도 공격 예고와 플레이어 정보를 덮지 않도록 Bloom의 임계값과 강도, 주변 색의 대비를 함께 다듬었습니다.</p></section>`
        },
        {
          title: "게임플레이 및 기반 시스템",
          category: "Technical",
          htmlContent: `<section><h2>Unity/C# 시스템 오너십</h2><p><strong>저장소 기록:</strong> 전체 585개 커밋 중 418개를 기여했고, 플러그인을 제외한 주요 C#·셰이더·에디터 코드 367개 파일 중 328개에 작업 기록이 있습니다. 단순 통합이 아니라 게임의 주요 런타임 시스템 대부분을 직접 설계·구현·수정했습니다.</p><h3>게임플레이와 전투</h3><p>함선 이동과 모듈, 사냥 모드, 콤보·차지, 대미지 처리, 보스 상태와 재사용 가능한 패턴 구조를 구현했습니다. 투사체와 텔레그래프, 여러 보스 패턴을 데이터 중심으로 조합할 수 있도록 구성했습니다.</p><h3>FMOD 리듬 동기화</h3><p>FMOD 타임라인을 기준으로 박자 이벤트와 판정 창을 만들고, 플레이 환경별 체감 오차를 조정하는 캘리브레이션과 디버그 UI까지 연결했습니다.</p><h3>보스와 프로시저럴 애니메이션</h3><p>게 보스의 다리 IK와 절차적 보행, 껍질 파괴와 단계 전환, 거대화 연출을 구현해 패턴 로직과 시각적 상태가 함께 움직이도록 구성했습니다.</p><h3>게임 플로우·데이터·UI</h3><p>챕터와 시퀀스, 세이브·인벤토리·상점, 대사와 말풍선, HUD와 모니터형 UI를 연결했습니다. 반복 제작을 줄이기 위해 씬 빌더, 범위 편집기, UI 스타일 프리셋 등 Unity 에디터 도구도 제작했습니다.</p></section>`
        },
        {
          title: "프로듀싱",
          category: "Producing",
          items: [
            "프로젝트 관리, 팀 내 커뮤니케이션, 그래픽스 파이프라인의 기술적 지원",
            "여러 차례 바뀐 기획과 팀의 실제 개발 상태, 구성원별 가용 시간, 남은 일정을 함께 검토해 기존 범위로는 완수가 어렵다고 판단",
            "핵심 재미를 보스 전투에 집중시키고 탐험·부가 기능을 줄여 프로젝트를 완결 가능한 보스러시 구조로 재정의",
            "팀 규모가 커지고 구성원들의 우선순위가 분산되면서 일정과 책임이 불명확해진 문제를 진단",
            "계속 참여할 수 있는 구성원을 다시 확인하고 핵심 인원 중심으로 역할과 범위를 재편",
            "완료 조건을 정한 2주 마감 스프린트를 선언하고, 남은 작업을 우선순위화해 최종 빌드까지 완수"
          ]
        }
      ]
    },
    projectDetails: null,
    source: null
  },

  "01_Manzo": {
    type: "game",
    pinned: true,
    title: "MANZO",
    subtitle: "Hear the Ocean's Call",
    pageTitle: "MANZO - MSH PORTFOLIO",
    heroType: "video",
    heroMedia: "../img/MANZO/MANZO_trailer.mp4",
    overview: "리듬 기반 대시 이동으로 심해를 탐험하고 모스 부호를 해독하며 바다의 비밀을 밝혀나가는 Rhythm Metroidvania Psychological Horror 게임입니다. 해양 드론 \"Dal\"을 조종해 박자에 맞춰 대시하고, 물고기를 포획해 모듈·스킬을 강화하며, 보스가 보내는 모스 부호를 청각으로 추적해 전투를 벌입니다. 탐험 방식과 선택에 따라 서로 다른 결말에 도달합니다.",
    features: [
      "리듬 기반 이동: 박자에 맞춰 대시하며 탐험",
      "사운드 기반 보스 트래킹: 모스 부호를 청각으로 탐지해 보스 위치 추적",
      "메트로배니아 탐험: 모듈과 스킬로 더 깊은 심해까지 진출",
      "딥씨 사이코 호러: 심해로 갈수록 어둡고 불안해지는 분위기"
    ],
    experience: {
      role: "Project Lead & 그래픽스 기술 프로그래머",
      period: "2024년 9월 – 현재",
      tools: "C++ · OpenGL · GLSL · Custom Engine",
      description: "프로젝트 관리, 팀 내 커뮤니케이션, 그래픽스 파이프라인의 기술적 지원을 담당했습니다."
    },
    trailers: [
      {
        src: "../img/MANZO/final_trailer1.mp4",
        poster: "../img/MANZO/title_image.png",
        label: "1차 트레일러"
      },
      {
        src: "../img/MANZO/final_trailer2.mp4",
        poster: "../img/MANZO/trailer_cover.png",
        label: "2차 트레일러"
      }
    ],
    videos: [
      {
        title: "보스전 프로토타입",
        src: "../img/MANZO/boss.mp4",
        poster: null
      },
      {
        title: "개발중 인게임 촬영",
        src: "../img/MANZO/play1.mp4",
        poster: null
      }
    ],
    overviewImage: "../img/MANZO/Character.png",  // Overview/Features 옆에 표시될 이미지
    contributions: {
      sections: [
        {
          title: "Project Lead",
          category: "Project Lead",
          htmlContent: `<section class="project-lead">

  <h2>Project Leadership</h2>

  <div class="lead-section">
    <h3>Vision & Direction</h3>
    <p>
      프로젝트의 전체 방향성과 핵심 경험을 정의하고 팀이 동일한 목표를 공유하도록 조율했습니다.
    </p>

    <p>
      초기 단계에서 게임의 핵심 콘셉트를 
      <strong>"Rhythm-based Deep Sea Exploration Horror"</strong>로 설정하고,
      컨셉 아트와 디자인 문서를 통해 팀원들이 동일한 플레이 경험을 상상할 수 있도록 정리했습니다.
    </p>

    <p>
      이를 통해 기획, 아트, 프로그래밍이 동일한 방향으로 진행될 수 있는 기반을 구축했습니다.
    </p>
  </div>


  <div class="lead-section">
    <h3>Scope Management</h3>

    <p>
      개발 과정에서 프로젝트의 범위를 지속적으로 조정하여 
      <strong>핵심 경험을 유지하면서 완성 가능한 프로젝트 구조</strong>를 관리했습니다.
    </p>

    <p>
      초기에는 스토리 중심의 대규모 구조와 여러 시스템을 계획했으나,
      개발 과정에서 기술 난이도와 일정 제약을 고려하여 범위를 재정리했습니다.
    </p>

    <ul>
      <li>스토리 중심 구조 축소</li>
      <li><strong>핵심 플레이 루프 강화</strong> (Rhythm Movement + Exploration + Boss Fights)</li>
      <li>보스 전투와 탐험 경험에 개발 리소스 집중</li>
    </ul>

    <p>
      이를 통해 과도한 기능 확장을 방지하고 프로젝트를 안정적으로 완성 가능한 형태로 유지했습니다.
    </p>
  </div>


  <div class="lead-section">
    <h3>Team Coordination</h3>

    <p>
      프로듀서 역할로서 팀원 간 작업 충돌을 방지하기 위해 협업 구조와 작업 흐름을 관리했습니다.
    </p>

    <ul>
      <li>작업 우선순위 정리 및 일정 관리</li>
      <li>기능 단위 기반 작업 분배</li>
      <li>Git merge 및 기능 통합 관리</li>
      <li>시스템 간 의존성 조율</li>
    </ul>

    <p>
      각 팀원이 담당한 시스템을 중심으로 개발이 진행되도록 구조를 설계하여
      <strong>충돌 및 중복 작업을 최소화</strong>했습니다.
    </p>
  </div>


  <div class="lead-section">
    <h3>Problem Solving & Integration</h3>

    <p>
      개발 후반에는 여러 시스템이 동시에 작동하면서 발생하는 문제를 해결하고
      게임을 하나의 완성된 경험으로 통합했습니다.
    </p>

    <ul>
      <li>Scenario 시스템과 Dialog 시스템 구조를 분석하여 <strong>엔진 레벨 시스템으로 재구성</strong></li>
      <li>보스 전투의 시각적 피드백을 강화하기 위해 <strong>Shader 및 Particle 기반 연출 추가</strong></li>
      <li>충돌 연산 구조를 개선하여 <strong>보스 전투 성능 문제 해결</strong></li>
    </ul>

    <p>
      이를 통해 게임의 안정성과 플레이 경험을 동시에 개선했습니다.
    </p>
  </div>


  <div class="lead-section">
    <h3>Production Leadership</h3>

    <p>
      개발 후반 팀의 집중도가 떨어지는 상황에서 직접 작업을 수행하며 프로젝트 완성을 이끌었습니다.
    </p>

    <ul>
      <li>디버깅</li>
      <li>시스템 수정</li>
      <li>시각 효과 작업</li>
      <li>기능 통합</li>
    </ul>

    <p>
      여러 영역의 작업을 병행하며 프로젝트를 <strong>실제 플레이 가능한 상태로 완성</strong>시키는 데 핵심 역할을 수행했습니다.
    </p>
  </div>

</section>`
        },
        {
          title: "Technical Leadership & Engine Systems",
          category: "Technical",
          htmlContent: `<section class="project-lead">

  <h2>Technical Leadership & Engine Systems</h2>

  <div class="lead-section">
    <h3>Gameplay Synchronization System (Rhythm Core)</h3>
    <p>
      리듬 게임의 핵심인 Beat System 기반 게임플레이 동기화를 설계하고 게임 시스템과 연결했습니다.
    </p>

    <ul>
      <li>BPM 기반 Beat Detection 시스템 구현</li>
      <li>On-beat 판정 윈도우 설계</li>
      <li>Beat / Bar 카운팅 시스템 구현</li>
      <li>오디오와 게임 로직 동기화</li>
      <li>Ship 이동 로직을 Beat 시스템과 연결</li>
    </ul>

    <p>
      결과적으로 플레이어 이동이 음악의 리듬에 정확히 동기화되고, 
      보스 전투 패턴도 리듬에 맞춰 작동하도록 설계하여 
      <strong>리듬 기반 게임플레이의 핵심 메커니즘을 완성</strong>했습니다.
    </p>
  </div>


  <div class="lead-section">
    <h3>Rendering Pipeline & Visual Effects</h3>

    <p>
      게임의 시각적 완성도를 높이기 위해 Draw Call 기반 렌더링 파이프라인과 
      다양한 셰이더 기반 연출을 구현했습니다.
    </p>

    <p>
      <strong>Draw Call Rendering Pipeline:</strong>
    </p>
    <ul>
      <li>Layer 기반 Draw Call 정렬</li>
      <li>Render Queue 구조 (Background / Object / Late Rendering 분리)</li>
      <li>draw_background_calls, draw_first_calls, draw_calls, draw_late_calls 구성</li>
    </ul>
    <p>
      이를 통해 렌더 순서 제어, UI / 월드 오브젝트 분리, 렌더링 구조 확장성을 확보했습니다.
    </p>

    <p>
      <strong>Shader & Post Processing Effects:</strong>
    </p>
    <ul>
      <li>Bloom</li>
      <li>Underwater distortion</li>
      <li>God Ray</li>
      <li>Title ripple effect</li>
      <li>Wave transition</li>
      <li>Screen transition shaders</li>
    </ul>
    <p>
      Framebuffer 기반 multi-pass rendering과 Post-processing pipeline을 구성하여 
      환경 변화에 따른 시각 효과를 적용했습니다. 
      결과적으로 얕은 바다 → 심해로 갈수록 분위기가 변화하고, 
      보스 전투에서 강한 시각적 피드백을 제공합니다.
    </p>
  </div>


  <div class="lead-section">
    <h3>Particle Effects System Integration</h3>

    <p>
      보스 전투의 몰입감을 높이기 위해 Particle 시스템을 활용한 시각 효과 설계 및 구현을 담당했습니다.
    </p>

    <ul>
      <li>Lifetime 기반 파티클 시스템</li>
      <li>다양한 movement 타입 지원 (LINEAR, CURVE, RANDOM, TOTHEPLAYER)</li>
      <li>방향성 파티클 생성</li>
      <li>원형 분산 파티클</li>
      <li>랜덤 스프레이 파티클 기능</li>
    </ul>

    <p>
      보스 전투에서는 공격 패턴, 충돌 효과, 환경 연출 등을 파티클 기반으로 구현했습니다.
    </p>
  </div>


  <div class="lead-section">
    <h3>Scenario & Dialog System Refactoring</h3>

    <p>
      개발 후반부에 Scenario 시스템 구조 문제를 발견하고 엔진 레벨로 재설계했습니다.
    </p>

    <p>
      <strong>기존 문제:</strong>
    </p>
    <ul>
      <li>ScenarioComponent가 GameMode에 종속</li>
      <li>Dialog 시스템과 연결 시 dangling pointer 발생</li>
      <li>이벤트 관리가 불안정</li>
    </ul>

    <p>
      <strong>해결 방법:</strong>
    </p>
    <ul>
      <li>ScenarioSystem을 엔진 글로벌 시스템으로 분리</li>
      <li>DialogSystem을 별도의 글로벌 시스템으로 구현</li>
      <li>이벤트와 대화 시스템 연결 안정화</li>
    </ul>

    <p>
      결과적으로 GameState 변경 시에도 이벤트가 안정적으로 유지되고, 
      스토리 이벤트 관리 구조가 개선되었으며, 시스템 모듈성이 향상되었습니다.
    </p>
  </div>


  <div class="lead-section">
    <h3>Performance Optimization</h3>

    <p>
      보스 전투에서 발생하던 심각한 프레임 드랍 문제를 해결했습니다.
    </p>

    <p>
      <strong>문제 원인:</strong> 충돌 검사에서 brute-force collision checks로 인한 불필요한 반복 연산 발생.
    </p>

    <p>
      <strong>해결 방법:</strong>
    </p>
    <ul>
      <li>중복 충돌 검사 제거</li>
      <li>충돌 처리 로직 최적화</li>
    </ul>

    <p>
      결과적으로 보스 전투 시 발생하던 심각한 랙을 완전히 해결하고 
      전체 게임 성능을 안정화했습니다.
    </p>
  </div>


  <div class="lead-section">
    <h3>System Integration & Debugging</h3>

    <p>
      프로젝트 후반부에는 다양한 시스템을 통합하고 안정화하는 작업을 담당했습니다.
    </p>

    <ul>
      <li>Scenario / Dialog 시스템 통합</li>
      <li>보스 전투 시각 효과 구현</li>
      <li>시스템 간 충돌 문제 디버깅</li>
      <li>게임 플레이 흐름 안정화</li>
    </ul>

    <p>
      특히 여러 시스템이 동시에 작동하는 상황에서 발생하는 
      pointer 오류, 상태 충돌, 이벤트 실행 문제 등을 해결하며 
      프로젝트를 <strong>실제 플레이 가능한 상태로 완성</strong>했습니다.
    </p>
  </div>


  <div class="lead-section">
    <h3>핵심 기술 기여 요약</h3>

    <ul>
      <li><strong>Gameplay Systems:</strong> Rhythm Beat System, Player movement synchronization</li>
      <li><strong>Rendering & Visual:</strong> Draw Call rendering pipeline, Shader-based post processing, Particle effect system</li>
      <li><strong>Engine Architecture:</strong> Scenario system refactor, Dialog system restructuring, Global event handling</li>
      <li><strong>Optimization:</strong> Collision system performance optimization</li>
    </ul>
  </div>

</section>`
        },
        {
          title: "그래픽 & 아트",
          category: "Art",
          subsections: [
            {
              title: "게임 아트",
              items: [
                "캐릭터 초상화 일러스트 제작",
                "캐릭터 초상화 일러스트 제작",
                "물고기 픽셀 아트 제작",
                "보스 픽셀 아트 제작",
                "캐릭터 집 내부 아트 제작"
              ],
              images: [
                {
                  src: "../img/MANZO/1.png",
                  alt: "캐릭터 초상화 일러스트 1",
                  title: "캐릭터 초상화 일러스트 1"
                },
                {
                  src: "../img/MANZO/2.png",
                  alt: "캐릭터 초상화 일러스트 2",
                  title: "캐릭터 초상화 일러스트 2"
                },
                {
                  src: "../img/MANZO/4.jpg",
                  alt: "물고기 픽셀 아트",
                  title: "물고기 픽셀 아트"
                },
                {
                  src: "../img/MANZO/5.png",
                  alt: "보스 픽셀 아트",
                  title: "캐보스 픽셀 아트"
                },
                {
                  src: "../img/MANZO/6.png",
                  alt: "캐릭터 집 내부 아트",
                  title: "캐릭터 집 내부 아트"
                }
              ]
            },
            {
              title: "UI/UX 디자인",
              items: [
                "FuelUI 및 기타 UI 요소 디자인"
              ]
            },
            {
              title: "셰이더 개발",
              items: [
                "다양한 셰이더 제작",
                "후처리(Post-processing) 구현 및 설계"
              ]
            }
          ]
        }
      ]
    },
    projectDetails: null,
    source: {
      text: "프로젝트 소스는 다음에서 확인할 수 있습니다",
      url: "https://github.com/Seohyeon-Min/manzo",
      label: "GitHub"
    }
  },

  "03_DoubleHit": {
    type: "game",
    title: "DOUBLE HIT",
    subtitle: "2인용 액션게임",
    pageTitle: "DOUBLE HIT - MSH PORTFOLIO",
    heroType: "image",
    heroMedia: "../img/DOUBLE_HIT/back.png",
    overview: "두명이 하나! 서로 스킬을 조합하며 협동해 오래 살아남자!",
    features: [
      "2인용",
      "협동",
      "스킬 조합",
      "보스전"
    ],
    experience: {
      role: "Project Lead",
      period: "2024년 3월 ~ 7월",
      description: "컨셉아트 제작, 에셋 제작, 오디오 제작, 프로그래밍 및 일정분배를 맡았습니다"
    },
    videos: [
      {
        title: null,
        src: "../img/DOUBLE_HIT/video.mp4",
        poster: null
      }
    ],
    contributions: {
      sections: [
        {
          title: "Project Lead",
          category: "Project Lead",
          items: [
            "컨셉아트 제작, 에셋 제작, 오디오 제작, 프로그래밍 및 일정분배"
          ]
        },
        {
          title: "자체제작 엔진",
          category: "Technical",
          description: "해당 프로젝트는 엔진 개발에 초점을 맞춰 진행되었습니다.",
          items: [
            "Texture 핸들링 및 SpriteManager 구현",
            "Collision system 구현",
            "GameObject, GameComponent 구조 구현",
            "싱글톤 엔진 구현"
          ]
        }
      ]
    },
    source: {
      text: "프로젝트 소스는 다음에서 확인할 수 있습니다",
      url: "https://github.com/Seohyeon-Min/DoubleHit",
      label: "GitHub"
    }
  },

  "04_BirdStrike": {
    type: "game",
    pinned: true,
    title: "BIRD STRIKE",
    subtitle: "리듬 액션 게임",
    pageTitle: "BIRD STRIKE - MSH PORTFOLIO",
    heroType: "image",
    heroMedia: "../img/BIRD_STRIKE/back.jpg",
    heroTitleClass: "game-title-bird",
    heroSubtitleClass: "game-subtitle-bird",
    overview: "해가 떨어지기 전에 까마귀들을 최대한 해치우자!<p></p>버드스트라이크는 박자에 맞춰 랜덤한 방향으로 날아다니는 까마귀들을 클릭해 점수를 따내는 리듬액션게임입니다.",
    features: [
      "박자에 기반한 입력",
      "간단한 조작법",
      "찰진 효과음",
      "오락실 게임 like"
    ],
    experience: {
      role: "Project Lead",
      period: "2023년 11월 ~ 12월",
      description: "게임의 기획과 디자인, 컨셉아트 제작, 오디오 제작, 프로그래밍을 맡았습니다"
    },    
    trailers: [
      {
        src: "../img/BIRD_STRIKE/video.mp4",
        label: "게임 플레이 영상"
      }
    ],
    gameIntro: "대학교 1학년 때 처음으로 개발한 게임으로, 개인적으로 애정이 깊은 프로젝트입니다. 약 두 달 동안 상용 엔진을 사용하지 않고 직접 구현했다는 점에서 특히 의미가 있습니다.<p></p>이 게임은 박자에 맞춰 플레이하는 캐주얼 리듬 액션 게임입니다. 랜덤한 방향에서 날아오는 까마귀를 리듬에 맞춰 터뜨리며 콤보를 이어가는 것이 핵심 플레이입니다. 단순한 조작과 리듬에 맞는 타격감에서 오는 손맛을 중심으로 설계했습니다.<p></p>화면에는 동시에 최대 20마리의 까마귀가 존재할 수 있으며, 이 상태가 3초 이상 유지되면 게임이 종료됩니다. 플레이어는 리듬에 맞춰 까마귀를 빠르게 처리하며 화면을 관리해야 합니다.<p></p>화면에 크게 보이는 태양은 게임의 타이머 역할을 합니다. 태양이 지평선에 닿으면 1스테이지가 종료되며, 이 시점에 일정 점수에 도달한 경우 2스테이지로 진입할 수 있습니다.<p></p>2스테이지에서는 전체 박자가 더 빨라지고, 새로운 장애물인 '뿅까마귀'가 등장해 플레이어의 리듬 플레이를 방해하도록 설계했습니다.<p></p>또한 리더보드 시스템을 통해 다른 플레이어와 점수를 경쟁할 수 있으며, 다양한 도전과제를 통해 반복 플레이의 동기를 제공하도록 구성했습니다.",
    contributions: {
      sections: [
        {
          title: "Project Lead",
          category: "Project Lead",
          htmlContent: `<section class="project-lead">
            <h2>Project Leadership</h2>
            <div class="lead-section">
              <h3>Scope Management</h3>
              <p>
                이 프로젝트에서는 제한된 개발 기간과 인력을 고려하여, 최소한의 개발 리소스로 최대한의 플레이 경험을 만들기 위한 스코프 조정에 집중했습니다.
              </p>
              <p>
                일반적인 리듬 게임처럼 곡마다 노트를 제작하는 방식 대신, 랜덤하게 등장하는 적을 리듬에 맞춰 처리하는 구조를 설계하여 콘텐츠 제작 비용 없이도 반복 플레이가 가능하도록 했습니다.
              </p>
              <p>
                또한 두 개의 페이즈 구조를 통해 시스템 복잡도를 크게 늘리지 않으면서도 음악 템포 변화와 새로운 적을 추가하여 난이도와 플레이 감각의 변화를 만들었습니다.
              </p>
            </div>
            <div class="lead-section">
              <h3>프로젝트 방향 설정</h3>
              <p>
                프로젝트 관리 측면에서는 팀원 모두가 동일한 목표와 게임 방향을 공유하도록 하는 데 집중했습니다. 이를 위해 개발을 시작하기 전에 게임 플레이가 한눈에 이해될 수 있는 컨셉 아트를 직접 제작해 팀의 공통 기준으로 삼았습니다.
              </p>
            </div>
            <div class="lead-section">
              <h3>팀 목표 정렬</h3>
              <p>
                초기 단계에서 시각적인 방향과 플레이 흐름을 명확히 정의함으로써 팀원들이 같은 목표를 기반으로 작업할 수 있도록 했고, 이후 기획과 구현 과정에서도 방향이 흔들리지 않도록 하는 데 도움을 주었습니다.
              </p>
            </div>
          </section>`
        },
        {
          title: "게임 디자인",
          category: "Planning",
          htmlContent: `<section class="design">
            <h2>Game Design</h2>
            <h3>Rhythm-Action Core</h3>
            <p>
              리듬과 액션을 결합한 핵심 플레이 구조를 설계했습니다. 플레이어는 랜덤한 방향에서 등장하는 까마귀들을 드래그로 연결해 공격하며, 박자에 맞춰 입력할 때 가장 효율적으로 적을 처리할 수 있도록 설계했습니다. 이를 통해 단순한 클릭 액션이 아닌 리듬을 의식한 플레이가 자연스럽게 이루어지도록 했습니다.
            </p>
            <h3>Random Spawn & Replayability</h3>
            <p>
              일반적인 리듬 게임의 고정된 노트 패턴 대신 랜덤하게 등장하는 적 구조를 사용했습니다. 이를 통해 같은 음악에서도 플레이 상황이 매번 달라지며 반복 플레이가 가능하도록 설계했습니다.
            </p>
            <h3>Combo & Speed Feedback</h3>
            <p>
              많은 까마귀를 한 번에 연결할수록 플레이어의 공격 속도가 점점 빨라지도록 설계했습니다. 이 시스템을 통해 플레이어가 더 많은 적을 연결하려는 위험-보상 구조가 자연스럽게 형성되도록 했습니다.
            </p>
            <h3>Input Control & Rhythm Emphasis</h3>
            <p>
              플레이어가 공격 애니메이션 중에는 추가 입력을 할 수 없도록 제한했습니다. 이 제한을 통해 무작위 입력이 아닌 타이밍을 고려한 리듬 플레이가 중요하도록 만들었습니다.
            </p>
            <h3>Screen Pressure System</h3>
            <p>
              화면에 까마귀가 최대 20마리까지 쌓일 수 있으며, 이 상태가 3초 이상 유지되면 게임이 종료됩니다. 플레이어가 지속적으로 화면을 정리해야 하는 압박형 플레이 구조를 만들기 위해 설계했습니다.
            </p>
            <h3>Stage Progression</h3>
            <p>
              게임은 두 개의 페이즈로 구성되어 있습니다. 태양이 타이머 역할을 하며 태양이 지평선에 닿으면 1페이즈가 종료됩니다. 일정 점수 달성 시 2페이즈로 진입할 수 있습니다. 이를 통해 플레이어가 점수를 목표로 플레이하도록 동기를 제공합니다.
            </p>
            <h3>Difficulty Escalation</h3>
            <p>
              2페이즈에서는 다음 요소가 추가됩니다: 음악 템포 증가, 새로운 적 '뿅까마귀' 등장. 이를 통해 후반부에서 리듬 집중도와 난이도가 동시에 상승하도록 설계했습니다.
            </p>
            <h3>Long-term Motivation</h3>
            <p>
              플레이어의 반복 플레이를 유도하기 위해 다음 시스템을 추가했습니다: Leaderboard, Achievement 시스템. 이를 통해 점수 경쟁과 도전 목표를 제공했습니다.
            </p>
          </section>`
        },
        {
          title: "개발",
          category: "Technical",
          htmlContent: `<section class="project-lead">
            <h2>Technical Development</h2>
            <div class="lead-section">
              <h3>리듬 게임 메커니즘 구현 능력</h3>
              <p>
                리듬 기반 게임플레이 시스템 개발: 음악 재생 시간과 동기화된 비트 감지 알고리즘을 구현하고, 연결된 까마귀 수에 따라 비트 간격을 동적으로 조정하는 시스템을 개발했습니다. 4개 이상 연결 시 2배, 6개 이상 3배, 8개 이상 4배 속도로 비트가 분할되어 플레이어의 공격 속도가 증가하도록 설계했습니다.
              </p>
            </div>
            <div class="lead-section">
              <h3>C++ 게임 프로그래밍 역량</h3>
              <p>
                객체지향 설계를 활용한 게임 시스템 구현: C++ 클래스 기반 구조로 플레이어 이동, 까마귀 생성 및 관리 시스템을 구현했습니다. 목적지 기반 이동 알고리즘에서 거리/시간 비율을 이용한 동적 속도 계산과 atan2를 활용한 방향 계산을 구현했습니다.
              </p>
            </div>
            <div class="lead-section">
              <h3>게임 시스템 설계 및 구현</h3>
              <p>
                게임플레이 핵심 시스템 설계: 플레이어 이동, 비트 동기화 스폰, 동적 비트 분할 시스템을 설계하고 구현했습니다. 각 시스템이 서로 연동되어 리듬 게임의 핵심 메커니즘을 형성하도록 모듈화하여 개발했습니다.
              </p>
            </div>
          </section>`
        },
        {
          title: "아트",
          category: "Art",
          htmlContent: `<section class="design">
            <h2>Art</h2>
            <h3>컨셉아트 그리기</h3>
            <div class="contribution-image"><img src="../img/BIRD_STRIKE/1.jpg" alt="컨셉아트 1" title="컨셉아트 1" /></div>
            <div class="contribution-image"><img src="../img/BIRD_STRIKE/2.jpg" alt="컨셉아트 2" title="컨셉아트 2" /></div>
            <h3>캐릭터 디자인</h3>
            <div class="contribution-image"><img src="../img/BIRD_STRIKE/3.jpg" alt="캐릭터 디자인" title="캐릭터 디자인 3" /></div>
            <h3>로고 디자인</h3>
            <div class="contribution-image"><img src="../img/BIRD_STRIKE/4.png" alt="로고 디자인" title="로고 디자인 4" /></div>
          </section>`
        }
      ]
    },
    source: {
      text: "프로젝트 소스는 다음에서 확인할 수 있습니다",
      url: "https://github.com/Seohyeon-Min/bird_sprite_2",
      label: "GitHub"
    }
  },

  "05_ThinkThink": {
    type: "game",
    pinned: true,
    title: "",
    subtitle: "",
    pageTitle: "ThinkThink! 리듬챌린지 - MSH PORTFOLIO",
    heroType: "image",
    heroMedia: "../img/ThinkThink/1.png",
    heroTitleClass: "game-title-bird",
    heroSubtitleClass: "game-subtitle-bird",
    overview: "리듬에 맞춰 단어 카드를 선택하세요!",
    features: [
      "리듬 기반 플레이",
      "챌린지 모드",
      "Easy to learn, hard to master"
    ],
    experience: {
      role: "Project Lead",
      period: "2026년",
      description: "프로젝트 관리 및 UI디자인"
    },
    trailers: [],
    videos: [],
    overviewImage: "../img/ThinkThink/9.png",
    gallery: {
      title: "갤러리",
      subtitle: "게임 스크린샷",
      images: [
        {
          src: "../img/ThinkThink/2.jpg",
          alt: "게임 스크린샷 2",
          title: "게임 스크린샷 2"
        },
        {
          src: "../img/ThinkThink/3.jpg",
          alt: "게임 스크린샷 3",
          title: "게임 스크린샷 3"
        },
        {
          src: "../img/ThinkThink/5.jpg",
          alt: "게임 스크린샷 4",
          title: "게임 스크린샷 4"
        },
        {
          src: "../img/ThinkThink/7.jpg",
          alt: "게임 스크린샷 5",
          title: "게임 스크린샷 5"
        },
        {
          src: "../img/ThinkThink/6.jpg",
          alt: "게임 스크린샷 6",
          title: "게임 스크린샷 6"
        },
        {
          src: "../img/ThinkThink/4.jpg",
          alt: "게임 스크린샷 7",
          title: "게임 스크린샷 7"
        },
        {
          src: "../img/ThinkThink/8.jpg",
          alt: "게임 스크린샷 8",
          title: "게임 스크린샷 8"
        }
      ]
    },
    gameIntro: "<p>Rhythm Challenge는 릴스에서 유행하는 리듬 챌린지 형식을 기반으로 제작된 모바일 리듬 퍼즐 게임입니다.</p><p>플레이어는 박자에 맞춰 화면에 나타나는 보기 카드와 답변 카드를 빠르게 매칭해야 합니다. 게임은 음악의 리듬을 기반으로 진행되며, BPM이 점점 상승하면서 반응 속도와 기억력을 동시에 요구하는 구조를 제공합니다.</p><p>화면에는 항상 8개의 보기 카드와 4개의 답변 카드가 유지되며, 플레이어는 제한된 시간 안에 올바른 답을 선택해야 합니다.</p><p>한 번이라도 틀리면 게임이 종료되며, 플레이어는 최대 레벨과 기록을 갱신하는 것을 목표로 반복 플레이하게 됩니다.</p>",
    contributions: {
      sections: [
        {
          title: "Project Lead",
          category: "Project Lead",
          htmlContent: `<section class="project-lead">
            <h2>Project Leadership</h2>
            <div class="lead-section">
              <h3>Game Design</h3>
              <p>
                리듬 기반 카드 매칭 구조를 중심으로 게임 기획서를 작성하고 핵심 게임 규칙, 카드 시스템, BPM 기반 난이도 구조 등 전체 플레이 흐름을 설계했습니다.
              </p>
            </div>
            <div class="lead-section">
              <h3>Production Coordination</h3>
              <p>
                개발 과정에서 필요한 기능을 정리하고 개발자에게 작업 요청 및 우선순위를 전달하여 구현이 기획 의도에 맞게 진행되도록 조율했습니다.
              </p>
            </div>
            <div class="lead-section">
              <h3>Release & Deployment</h3>
              <p>
                모바일 출시를 위해 Google Developer 계정을 생성하고 <strong>Google Play Console</strong>에 프로젝트를 등록하여 빌드 업로드, 스토어 등록, 검수 제출 등 출시 준비 과정을 진행했습니다.
              </p>
            </div>
          </section>`
        },
        {
          title: "기획",
          category: "Planning",
          htmlContent: `<section class="design">
            <h2>Game Design</h2>
            <h3>Core Concept</h3>
            <p>
              릴스에서 유행하는 리듬 챌린지 형식을 기반으로 
              리듬 입력과 패턴 인식을 결합한 모바일 캐주얼 게임을 기획했습니다.
            </p>
            <p>
              플레이어는 음악의 박자에 맞춰 화면에 등장하는 카드 정보를 인식하고 
              정답 카드를 빠르게 선택해야 합니다. 
              단순한 규칙을 유지하면서도 리듬과 난이도 상승을 통해 반복 플레이를 유도하도록 설계했습니다.
            </p>
            <h3>Core Gameplay System</h3>
            <h4>Card Matching Structure</h4>
            <p>
              화면에는 항상 <strong>8개의 보기 카드와 4개의 답변 카드</strong>가 유지됩니다.
              보기 카드는 그림 형태로 제공되며 플레이어는 해당 이미지에 대응하는 
              정답 카드를 선택해야 합니다.
            </p>
            <h4>Rhythm Interaction</h4>
            <ul>
              <li>카드 표시 : 리듬에 맞춰 등장</li>
              <li>플레이어 입력 : 박자 타이밍에 맞춰 선택</li>
              <li>사운드 피드백 : 입력 성공 시 리듬 사운드 제공</li>
            </ul>
            <h3>Difficulty Design</h3>
            <p>
              난이도는 플레이어가 게임 규칙을 자연스럽게 학습하면서도 
              점진적으로 도전 난이도가 증가하도록 설계했습니다.
            </p>
            <ul>
              <li><strong>Progressive BPM Increase</strong> : 레벨이 올라갈수록 BPM이 점진적으로 상승하여 반응 속도를 요구합니다.</li>
              <li><strong>Selective Card Update</strong> : 다음 레벨로 넘어갈 때 답변 카드 중 <strong>랜덤한 3개 중 1개만 변경</strong>됩니다.</li>
            </ul>
            <p>
              이를 통해 플레이어가 기존 카드의 위치를 기억하며 플레이할 수 있도록 설계하여 
              단순한 반응 게임이 아니라 <strong>리듬과 기억 기반 플레이가 결합된 난이도 구조</strong>를 만들었습니다.
            </p>
            <h3>Game Loop</h3>
            <ol>
              <li>초기 리듬 카운트 제공</li>
              <li>리듬에 맞춰 카드 표시</li>
              <li>플레이어 입력</li>
              <li>정답 시 다음 라운드 진행</li>
              <li>오답 시 게임 종료 및 기록 저장</li>
            </ol>
          </section>`
        },
        {
          title: "UI 셰이더 시스템",
          category: "Technical",
          htmlContent: `<section class="development" id="ui-style-origin"><span class="case-label">최초 개발</span><h2>UI 셰이더 시스템은 여기서 시작됐습니다</h2><p class="case-study-lede">버튼, 게이지, 카드를 하나부터 열까지 전부 똑같은 그림체로 손으로 그리려면 시간이 너무 오래 걸렸습니다. 그래서 하나의 Unity <strong>URP UI 셰이더</strong>(<code>UIStyle.shader</code>)를 컴포넌트 하나(<code>UIStyle.cs</code>)로 제어하도록 만들어서, 어떤 <code>Image</code>든 Inspector에서 값만 조절하면 원하는 모양으로 스타일링되게 했습니다. 완성한 스타일은 <code>UIStylePreset</code> 에셋으로 저장해뒀다가 다른 UI에도 바로 불러와 재사용할 수 있습니다.</p><div class="engineering-summary" aria-label="시스템 규모"><article><span class="engineering-icon" aria-hidden="true">◆</span><strong>4</strong><small>셰이더·컴포넌트·에디터·프리셋 스크립트</small></article><article><span class="engineering-icon" aria-hidden="true">▦</span><strong>9</strong><small>Inspector에 노출된 스타일 그룹</small></article><article><span class="engineering-icon" aria-hidden="true">✦</span><strong>실시간</strong><small>OnValidate로 플레이 모드 없이 즉시 미리보기</small></article><article><span class="engineering-icon" aria-hidden="true">↗</span><strong>재사용</strong><small>.unitypackage로 패키징해 스트리트 타이퍼로 이식</small></article></div><h3>Inspector 필드 (ThinkThink 기준)</h3><div class="decision-table-wrap"><table class="decision-table"><thead><tr><th>그룹</th><th>주요 필드</th><th>기능</th></tr></thead><tbody><tr><th scope="row">모서리 둥글기</th><td>Corner Radius, Capsule/Pill 토글</td><td>SDF 기반 라운딩, 해상도 독립적</td></tr><tr><th scope="row">드롭 섀도우</th><td>Offset, Color, Blur, Size</td><td>별도 스프라이트 없이 외부 그림자 표현</td></tr><tr><th scope="row">인사이드 섀도우</th><td>Offset, Color, Blur</td><td>눌린/파인 느낌의 내부 그림자</td></tr><tr><th scope="row">그래디언트</th><td>기본 색상; Color Gradient(시작/끝/방향/블렌드); Light Gradient(강도/방향); Hue Shift(웜/쿨)</td><td>색상과 명암 그래디언트를 한 패스에서 겹겹이 표현</td></tr><tr><th scope="row">엣지 하이라이트</th><td>Strength, Size</td><td>림 라이트 느낌의 가장자리 발광</td></tr><tr><th scope="row">Material</th><td>Material Type(Plastic / Metal / Glass / Paper)</td><td>표면 질감 프리셋 전환</td></tr><tr><th scope="row">노이즈</th><td>Enable, Strength</td><td>단색이 밴딩되지 않도록 미세 노이즈 추가</td></tr><tr><th scope="row">Bottom Edge Line</th><td>Thickness, Intensity, Color, Sharpness</td><td>그림자와 별개로 정의하는 아래쪽 엣지 라인</td></tr><tr><th scope="row">Preset</th><td><code>UIStylePreset</code> 에셋</td><td>스타일 전체를 에셋 하나로 저장·재적용</td></tr></tbody></table></div><h3>패키지 안의 셰이더 모듈</h3><ul><li><strong>UIStyle.shader</strong>: 위의 통합 스타일링 셰이더</li><li><strong>UIBlur.shader</strong>: 9-Tap 최적화 블러</li><li><strong>SimpleGradient.shader</strong>: 경량 UI 그라디언트</li><li><strong>UIColorTint.shader</strong>: 텍스처 알파 기반 컬러 틴트</li><li><strong>WaveNoise.shader</strong>: 다중 레이어 애니메이션 노이즈</li></ul><div class="system-map"><h3>스트리트 타이퍼에서 확장된 부분</h3><ol><li><span>01</span><strong>모서리 개별 둥글기</strong><small>하나의 값 대신 네 모서리를 각각 독립적으로 조절</small></li><li><span>02</span><strong>다이아몬드 모양</strong><small>변의 곡률과 기울기(skew)까지 조절 가능한 새 도형</small></li><li><span>03</span><strong>방사형 그래디언트</strong><small>방향성 그래디언트 옆에 중심→가장자리 방식 추가</small></li><li><span>04</span><strong>윤곽선(Outline)</strong><small>엣지 라인과 별도로 안쪽을 따라가는 전용 윤곽선</small></li><li><span>05</span><strong>게이지 Fill</strong><small>HP바·타이머용 Fill Amount 추가, 줄어들어도 모서리 유지</small></li></ol></div><p>핵심 셰이더와 컴포넌트는 그대로 가져갔고, 스트리트 타이퍼의 카드 전투 UI에 필요했던 모양과 테두리 표현만 새로 늘렸습니다.</p><a class="evidence-link" href="06_StreetTyper.html?contributionTab=Art#ui-style-extended">스트리트 타이퍼에서 확장된 모습 보기 ↗</a><h3>Editor Tooling</h3><p><strong>UIStyle.cs</strong> 스크립트를 제작하여 Inspector에서 셰이더 파라미터를 직관적으로 제어하고 UI 스타일 프리셋을 저장 및 적용할 수 있는 시스템을 구현했습니다.</p><h3>Technical Stack</h3><ul><li>Unity Universal Render Pipeline (URP)</li><li>HLSL Shader Programming</li><li>Signed Distance Field (SDF) Rendering</li><li>C# Editor Tooling</li></ul><h3>Development Notes</h3><p>셰이더 구조 설계와 시스템 통합 과정에서 AI 기반 개발 도구를 적극 활용하여 반복 작업과 실험 속도를 높였습니다. 이를 통해 약 <strong>1,000+ lines 규모의 셰이더 코드</strong>와 재사용 가능한 UI 스타일 시스템을 구축했습니다.</p></section>`
        }
      ]
    },
    source: null
  },

  // ========== 기획 프로젝트 ==========
  "Dangling": {
    type: "planning",
    title: "Dangling*",
    subtitle: "Dangling* : The First GameJam",
    pageTitle: "Dangling* - MSH PORTFOLIO",
    heroType: "image",
    heroMedia: "../img/portfolio_thumbnails/Dangling.jpg",
    experience: {
      role: "게임잼 주최 & 기획",
      period: "2025년 6월 28일~29일",
      description: "행사를 처음 제안하고 교수진을 직접 설득해 약 80만 원의 예산과 승인을 확보한 뒤, 홍보·현장 운영·포스터 제작까지 총괄했습니다."
    },
    gallery: {
      title: "게임잼 현장 스냅샷",
      subtitle: "기획 발표부터 개발까지",
      images: [
        {
          src: "../img/Dangling/1.jpg",
          alt: "회의 1",
          title: "기획 발표"
        },
        {
          src: "../img/Dangling/2.jpg",
          alt: "회의 2",
          title: "팀별 개발 세션"
        },
        {
          src: "../img/Dangling/3.jpg",
          alt: "회의 3",
          title: "팀별 개발 세션"
        },
        {
          src: "../img/portfolio_thumbnails/Dangling.jpg",
          alt: "포스터",
          title: "포스터 디자인"
        }
      ]
    },
    contributions: {
      layout: "stacked",
      sections: [
        {
          title: "행사를 성립시킨 제안과 예산 유치",
          category: "Production",
          subsections: [
            {
              title: "아이디어를 승인된 행사로 전환",
              items: [
                "교내 첫 학과 연합 게임잼을 직접 제안하고, 교수진에게 행사의 목적과 실행 계획을 설명",
                "필요한 비용과 사용 계획을 구체화해 약 80만 원의 지원금과 개최 승인을 직접 확보",
                "확보한 자원으로 장소·식사·운영 물품을 준비하고, 모집부터 36시간 현장 운영과 결과물 제출까지 책임"
              ]
            }
          ]
        },
        {
          title: "게임잼 운영",
          category: "Planning",
          htmlContent: `<section class="survey-case"><h2>행사 운영과 결과</h2><p>예산과 승인, 홍보, 참가자 소통, 현장 운영을 맡아 24명·6팀 규모의 36시간 게임잼을 진행했습니다. 여섯 팀 모두 플레이 가능한 게임을 완성해 제출했습니다.</p><div class="survey-scoreboard"><article><strong>4.87<small>/ 5</small></strong><span>참가자 만족도</span></article><article><strong>23</strong><span>설문 응답</span></article><article><strong>20</strong><span>5점 응답</span></article><article><strong>3</strong><span>4점 응답</span></article></div><div class="survey-distribution"><span>응답 분포</span><div><i style="--score-width:86.96%">5점 · 20명</i><i style="--score-width:13.04%">4점 · 3명</i></div></div><h3>참가자 후기 · 원문과 영어 번역</h3><div class="survey-quotes"><blockquote><p>“평소에 하던 것과 다른 직무를 경험해볼 수 있어서 좋았습니다.”</p><footer>“I enjoyed getting to experience a role different from the one I usually work in.”</footer></blockquote><blockquote><p>“아무 걱정 없이 개발에만 집중할 수 있는 시간이나 공간이 잘 없는데 제공해줘서 오랜만에 재밌게 잘 즐겼습니다.”</p><footer>“It is rare to have time and space where I can focus only on development without worrying about anything else. I had a genuinely enjoyable experience.”</footer></blockquote><blockquote><p>“이전에 참여했던 게임잼보다 더욱 체계적인 준비와 세밀한 일정 관리가 이루어져 만족스러웠다.”</p><footer>“I was satisfied with the more systematic preparation and detailed schedule management compared with game jams I had joined before.”</footer></blockquote><blockquote><p>“게임잼 참여는 처음이었는데 저의 실력을 체크할 수 있었을 뿐만 아니라 협업의 재미를 알아가는 의미 있는 시간이었습니다.”</p><footer>“It was my first game jam; it helped me assess my skills and discover how rewarding collaboration can be.”</footer></blockquote></div><h3>다음 행사에 반영할 점</h3><div class="survey-lessons"><span>제작 시간과 휴식 확대</span><span>물·멀티탭 추가 확보</span><span>휴식 및 작업 공간 다양화</span></div><p class="survey-note">2025년 6월 29일 익명 사후 설문 23개 응답 기준. 개인 식별 정보와 원본 타임스탬프는 공개하지 않았습니다.</p></section>`
        },
        {
          title: "포스터와 비주얼 아이덴티티",
          category: "Visual Design",
          subsections: [
            {
              title: "직접 제작한 행사 비주얼",
              items: [
                "게임잼의 이름과 분위기를 시각적으로 전달할 메인 포스터를 직접 드로잉하고 디자인",
                "강렬한 핑크 포인트 컬러와 거친 인쇄 질감을 사용해 짧은 제작 기간의 긴장감과 에너지를 표현",
                "완성한 키 비주얼을 행사 홍보물과 온라인 채널에 일관되게 적용"
              ],
              images: [
                {
                  src: "../img/portfolio_thumbnails/Dangling.jpg",
                  alt: "직접 드로잉하고 디자인한 Dangling 게임잼 메인 포스터",
                  title: "Dangling 게임잼 포스터"
                }
              ]
            }
          ]
        }
      ]
    },
    source: {
      text: "완성작은 아래 인스타그램에서 확인하실 수 있습니다.",
      url: "https://www.instagram.com/dangling.kmu/",
      label: "dangling.kmu"
    }
  },

  "PlushProduction": {
    type: "planning",
    title: "Plush Production",
    subtitle: "From character artwork to customer delivery",
    pageTitle: "Plush Production — Min Seohyeon Portfolio",
    heroType: "image",
    heroMedia: "../img/Plush/real1.jpg",
    overview: "An independent merchandise project that I built from production artwork through overseas manufacturing and customer delivery. I opened a prepaid preorder form through Witchform and based production quantities on confirmed orders, minimizing upfront inventory and unsold-stock risk. I sourced a manufacturer through Taobao, negotiated pricing and schedule, reviewed samples against the intended design, and connected the factory, freight forwarder, inspection service, and domestic carrier into a fulfillment workflow that delivered directly to buyers without the products passing through my hands. I also managed buyer Q&A through Peing throughout the project.",
    features: [
      "Production-ready character artwork adapted for a round plush form",
      "Prepaid, made-to-order sales managed through Witchform",
      "Factory sourcing, price and schedule negotiation, and sample review",
      "Hands-off international forwarding, defect inspection, and domestic fulfillment",
      "Centralized buyer Q&A and delivery support through Peing"
    ],
    experience: {
      role: "Product Designer · Vendor & Fulfillment Coordinator",
      period: "Independent project",
      description: "Built and managed the operational chain from factory sourcing and sample approval to inspection, direct fulfillment, and centralized buyer Q&A through Peing."
    },
    experiencePlacement: "afterHero",
    hideOverview: true,
    gallery: {
      title: "Design to Physical Product",
      subtitle: "Production artwork and completed plushes",
      images: [
        { src: "../img/Plush/pattern1.jpg", alt: "First set of plush production artwork", title: "Production artwork · Set 01" },
        { src: "../img/Plush/pattern2.jpg", alt: "Second set of plush production artwork", title: "Production artwork · Set 02" },
        { src: "../img/Plush/pattern3.jpg", alt: "Third set of plush production artwork", title: "Production artwork · Set 03" },
        { src: "../img/Plush/pattern4.jpg", alt: "Fourth set of plush production artwork", title: "Production artwork · Set 04" },
        { src: "../img/Plush/real1.jpg", alt: "Four completed custom plush products", title: "Completed production set" },
        { src: "../img/Plush/real2.jpg", alt: "Close-up of a completed custom plush", title: "Finished product detail" }
      ]
    },
    contributions: {
      sections: [
        {
          title: "Product & Production",
          category: "Design · Operations",
          htmlContent: `<section><div class="impact-metrics" aria-label="Project outcomes"><div class="impact-metric"><span class="impact-metric-icon" aria-hidden="true">▣</span><strong>541</strong><span>Orders fulfilled</span></div><div class="impact-metric"><span class="impact-metric-icon" aria-hidden="true">●</span><strong>235</strong><span>Account followers</span></div><div class="impact-metric"><span class="impact-metric-icon" aria-hidden="true">↻</span><strong>1,000+</strong><span>Cumulative reposts</span></div></div><p class="metric-source-note">Account figures as of August 24, 2026.</p><h2>From artwork to a manufacturable product</h2><p>Adapted each character to a consistent round-plush format and prepared production artwork that preserved readable silhouettes, expressions, costume details, and colors at a small physical scale.</p><h3>Preorders through Witchform</h3><p>Opened a prepaid purchase form through Witchform and finalized the production quantity from confirmed orders. Producing against validated demand minimized excess inventory, upfront investment, and the financial risk of unsold products.</p><h3>Factory sourcing and negotiation</h3><p>Contacted a manufacturer through Taobao and negotiated the production schedule and unit price directly. I commissioned samples, compared the physical results with the intended designs, and communicated revisions before approving mass production, achieving the expected quality at a reasonable cost.</p><h3>End-to-end fulfillment workflow</h3><div class="fulfillment-flow" role="list" aria-label="Fulfillment process"><div class="fulfillment-step" role="listitem"><span class="fulfillment-icon" aria-hidden="true">✎</span><strong>01</strong><span>Production<br>artwork</span></div><div class="fulfillment-step" role="listitem"><span class="fulfillment-icon" aria-hidden="true">⚙</span><strong>02</strong><span>Factory<br>order</span></div><div class="fulfillment-step" role="listitem"><span class="fulfillment-icon" aria-hidden="true">▣</span><strong>03</strong><span>Freight<br>forwarder</span></div><div class="fulfillment-step" role="listitem"><span class="fulfillment-icon" aria-hidden="true">✓</span><strong>04</strong><span>Inspection<br>& delivery</span></div><div class="fulfillment-step" role="listitem"><span class="fulfillment-icon" aria-hidden="true">⌂</span><strong>05</strong><span>Buyer</span></div></div><p>Designed a direct flow from production artwork to factory order, international freight forwarder, defect inspection and domestic delivery service, and finally the buyer. Products could move from the factory to customers without passing through my hands, while I remained responsible for status tracking and exception handling.</p><h3>Buyer Q&A through Peing</h3><p>Used Peing as the project's centralized Q&A channel, responding to order, production, and delivery questions and keeping buyer communication organized throughout fulfillment.</p><h3>What I learned</h3><p>I learned how to turn a creative concept into a repeatable operation: validate demand before production, define requirements clearly, negotiate cost and schedule, verify quality through samples, connect multiple external partners, and maintain a clear customer communication channel.</p><p class="case-study-note"><strong>Authorship note:</strong> The featured characters are fan merchandise based on existing intellectual property, and the project was run as a non-profit fan project with no profit taken. My work shown here is the plush-format visual adaptation, production preparation, vendor coordination, logistics, and customer support.</p></section>`
        }
      ]
    },
    source: {
      text: "View the public project account and product archive on X.",
      url: "https://x.com/mallang707",
      label: "@mallang707"
    },
    localized: {
      ko: {
        title: "인형 제작 프로젝트",
        subtitle: "캐릭터 도안에서 구매자 배송까지",
        overview: "생산용 도안부터 해외 제조와 구매자 배송까지 전체 과정을 설계한 독립 굿즈 프로젝트입니다. Witchform에서 선입금 구매폼을 열고 확정 주문량에 맞춰 제작해 선투자와 미판매 재고 위험을 최소화했습니다. 타오바오에서 제조업체를 직접 찾고 가격과 일정을 협상했으며, 샘플 검수와 수정을 거쳐 합리적인 단가로 원하는 품질을 확보했습니다. 이후 공장, 배대지, 불량 검수 및 배송대행사를 연결해 제품을 직접 취급하지 않고도 구매자에게 배송되는 운영 흐름을 구축하고, Peing을 통해 구매자 Q&A를 일원화해 관리했습니다.",
        features: ["둥근 인형 형태에 맞춘 생산용 캐릭터 도안", "Witchform 선입금 구매폼을 활용한 주문제작 판매", "공장 발굴, 가격·일정 협상과 샘플 검수", "배대지, 불량 검수와 국내 배송을 연결한 직접배송 프로세스", "Peing을 활용한 구매자 Q&A와 배송 지원"],
        experience: {
          role: "제품 디자이너 · 생산 및 배송 코디네이터",
          period: "개인 프로젝트",
          description: "공장 발굴과 샘플 승인부터 검수, 구매자 직접배송과 Peing Q&A까지 전체 운영 흐름을 설계하고 관리했습니다."
        },
        gallery: {
          title: "도안에서 실물 제품까지",
          subtitle: "생산용 도안과 완성된 인형",
          images: [
            { src: "../img/Plush/pattern1.jpg", alt: "첫 번째 인형 생산용 도안 세트", title: "생산용 도안 · 세트 01" },
            { src: "../img/Plush/pattern2.jpg", alt: "두 번째 인형 생산용 도안 세트", title: "생산용 도안 · 세트 02" },
            { src: "../img/Plush/pattern3.jpg", alt: "세 번째 인형 생산용 도안 세트", title: "생산용 도안 · 세트 03" },
            { src: "../img/Plush/pattern4.jpg", alt: "네 번째 인형 생산용 도안 세트", title: "생산용 도안 · 세트 04" },
            { src: "../img/Plush/real1.jpg", alt: "완성된 맞춤형 인형 네 개", title: "완성 제품 세트" },
            { src: "../img/Plush/real2.jpg", alt: "완성된 맞춤형 인형 클로즈업", title: "완성 제품 디테일" }
          ]
        },
        contributions: {
          sections: [
            {
              title: "제품과 생산",
              category: "디자인 · 운영",
              htmlContent: `<section><div class="impact-metrics" aria-label="프로젝트 성과"><div class="impact-metric"><span class="impact-metric-icon" aria-hidden="true">▣</span><strong>541건</strong><span>주문 처리</span></div><div class="impact-metric"><span class="impact-metric-icon" aria-hidden="true">●</span><strong>235명</strong><span>계정 팔로워</span></div><div class="impact-metric"><span class="impact-metric-icon" aria-hidden="true">↻</span><strong>1,000회+</strong><span>누적 리포스트</span></div></div><p class="metric-source-note">계정 수치는 2026년 8월 24일 기준입니다.</p><h2>도안에서 생산 가능한 제품까지</h2><p>캐릭터를 일관된 둥근 인형 형태로 각색하고, 작은 실물에서도 형태와 표정, 의상 특징과 색상이 명확하게 보이도록 생산용 도안을 준비했습니다.</p><h3>Witchform을 활용한 선주문 판매</h3><p>Witchform에서 선입금 구매폼을 열고 결제가 완료된 주문량을 기준으로 최종 생산 수량을 확정했습니다. 실제 수요를 먼저 검증한 뒤 주문제작하는 방식으로 불필요한 선투자와 미판매 재고를 줄이고, 금전적 손실 위험을 최소화했습니다.</p><h3>공장 발굴과 가격·일정 협상</h3><p>타오바오에서 중국 제조업체를 직접 찾아 생산 일정과 단가를 협상했습니다. 실물 샘플을 발주해 도안과 비교하고, 형태와 자수, 색상 등의 수정 사항을 전달한 뒤 양산을 승인함으로써 예상한 품질을 합리적인 가격에 확보했습니다.</p><h3>직접 취급 없이 작동하는 배송 프로세스</h3><div class="fulfillment-flow" role="list" aria-label="배송 프로세스"><div class="fulfillment-step" role="listitem"><span class="fulfillment-icon" aria-hidden="true">✎</span><strong>01</strong><span>생산용<br>도안 제작</span></div><div class="fulfillment-step" role="listitem"><span class="fulfillment-icon" aria-hidden="true">⚙</span><strong>02</strong><span>공장<br>발주</span></div><div class="fulfillment-step" role="listitem"><span class="fulfillment-icon" aria-hidden="true">▣</span><strong>03</strong><span>해외<br>배대지</span></div><div class="fulfillment-step" role="listitem"><span class="fulfillment-icon" aria-hidden="true">✓</span><strong>04</strong><span>불량 검수<br>배송대행</span></div><div class="fulfillment-step" role="listitem"><span class="fulfillment-icon" aria-hidden="true">⌂</span><strong>05</strong><span>구매자<br>수령</span></div></div><p>도안 제작 → 공장 발주 → 배대지 → 불량 검수 및 배송대행사 → 구매자로 이어지는 전체 흐름을 설계했습니다. 완제품이 제 손을 거치지 않아도 검수와 최종 배송까지 진행되도록 각 업체를 연결했고, 저는 진행 상황 추적과 예외 상황 대응을 맡았습니다.</p><h3>Peing을 활용한 구매자 Q&A</h3><p>Peing을 프로젝트의 통합 문의 창구로 활용해 주문, 제작 진행 상황과 배송 관련 질문에 답변했습니다. 구매자 커뮤니케이션을 한곳에 모아 전체 이행 과정에서 문의와 안내가 누락되지 않도록 관리했습니다.</p><h3>배운 점</h3><p>창작물을 실제 제품으로 만드는 일은 디자인만의 문제가 아니었습니다. 수요를 먼저 검증하고, 요구사항을 명확히 정의하며, 가격과 일정을 협상하고, 샘플로 품질을 확인하고, 여러 외부 업체와 고객 소통 채널을 하나의 운영 구조로 연결하는 일까지 모두 제품 경험의 일부라는 점을 배웠습니다.</p><p class="case-study-note"><strong>기여 범위:</strong> 등장 캐릭터의 원저작권은 각 권리자에게 있으며, 이 프로젝트는 수익을 남기지 않은 비영리 팬 프로젝트입니다. 여기서 소개하는 제 작업은 인형 형태에 맞춘 시각적 각색, 생산 자료 준비, 공장 조율, 물류와 구매자 지원입니다.</p></section>`
            }
          ]
        },
        source: { text: "X에서 공개 프로젝트 계정과 제품 기록을 확인할 수 있습니다.", url: "https://x.com/mallang707", label: "@mallang707" }
      }
    }
  },

  "06_StreetTyper": {
    type: "game",
    pinned: true,
    title: "STREET TYPER",
    subtitle: "Type a combo. Finish with an action. Hit back.",
    pageTitle: "Street Typer — Min Seohyeon Portfolio",
    heroType: "video",
    heroMedia: "../img/StreetTyper/STTrailer_ko1.mp4",
    heroPoster: "../img/StreetTyper/hero.png",
    heroLink: "https://handalhandal.itch.io/streettyper",
    steamLink: "https://store.steampowered.com/app/5129590/StreetTyper/",
    overviewImage: "../img/StreetTyper/concept.png",
    overview: "Type and fight! A deck-building typing-action roguelite about a girl fighting to earn her dragon mother's approval.",
    features: [
      "Fight by typing the words that appear on screen, quickly and accurately",
      "Collect cards through combat and build your own deck",
      "Your card choices shape how you play — find a build that fits you and take on tougher enemies"
    ],
    experience: {
      role: "Art · Technical Art · Producer (Team Project)",
      period: "2026 · 10-day scope",
      description: "I had the idea for a typing card game built around physical, reflex-based skill, and built the initial prototype myself using Codex to validate it. The team's game designer then took over level design and design polish on top of that foundation. I produced the 10-day scope and directly owned the visual direction, art integration, UI, VFX, and moment-to-moment feedback through the playable build."
    },
    trailers: [],
    videos: [],
    conceptComparison: {
      eyebrow: "CONCEPT → PLAYABLE BUILD",
      title: "The concept survived contact with the engine.",
      description: "I carried the concept's composition, palette, silhouettes, foreground framing, and comic-book rhythm into the playable Unity scene instead of treating the concept as disposable mood art.",
      concept: { src: "../img/StreetTyper/concept.png", alt: "Original Street Typer combat concept art", label: "Original combat concept" },
      build: { src: "../img/StreetTyper/ingame_typing.png", alt: "Street Typer playable combat scene in Unity", label: "Playable Unity build" },
      proof: "The final build preserves the same opposing character placement, cyan forest depth, violet arena, card fan, speech-bubble information, and hot-pink/mint accents—then adds live typing state, health, timing, animation, VFX, and hit feedback."
    },
    gallery: {
      title: "Gallery",
      subtitle: "Art and presentation assets from the project repository",
      images: [
        { src: "../img/StreetTyper/title.png", alt: "Street Typer title screen", title: "Title screen" },
        { src: "../img/StreetTyper/ingame_gamestart.png", alt: "Street Typer stage start", title: "Stage start" },
        { src: "../img/StreetTyper/ingame_typing.png", alt: "Street Typer typing combat", title: "Typing combat" },
        { src: "../img/StreetTyper/ingame_typing2.png", alt: "Street Typer bilingual typing combat", title: "Bilingual input" },
        { src: "../img/StreetTyper/ingame_attacking.png", alt: "Street Typer attack impact", title: "Attack impact" },
        { src: "../img/StreetTyper/ingame_selectcard.png", alt: "Street Typer card selection", title: "Card selection" },
        { src: "../img/StreetTyper/ingame_mom.png", alt: "Street Typer narrative scene", title: "Narrative beat" },
        { src: "../img/StreetTyper/clear.png", alt: "Street Typer clear screen", title: "Stage clear" },
        { src: "../img/StreetTyper/option.png", alt: "Street Typer options", title: "Options" },
        { src: "../img/StreetTyper/intro.png", alt: "Street Typer intro", title: "Intro" }
      ]
    },
    contributions: {
      sections: [
        {
          title: "Art & Animation",
          category: "Art",
          htmlContent: `<section><h2>Rigged in Spriter, Baked for Unity</h2><p>I drew every character, background, card, and UI icon in Street Typer myself. Combat characters were rigged with 2D skeletal (bone-based) animation in Spriter Pro, then baked and exported as sprite frame sheets for Unity, where an Animator state machine plays them back. That pipeline let me animate idle, punch, guard, and hit-react poses quickly and reuse motion across states inside a 10-day production window.</p><div class="engineering-summary" aria-label="Art coverage"><article><span class="engineering-icon" aria-hidden="true">🎨</span><strong>2D</strong><small>Characters · backgrounds · cards</small></article><article><span class="engineering-icon" aria-hidden="true">🦴</span><strong>Skeletal</strong><small>Rigged in Spriter Pro, baked to sprite sheets</small></article><article><span class="engineering-icon" aria-hidden="true">✨</span><strong>VFX</strong><small>Impact, particles, camera shake</small></article><article><span class="engineering-icon" aria-hidden="true">🧩</span><strong>UI</strong><small>Shader-driven styling</small></article></div><div class="asset-portrait-grid" aria-label="Character portraits from the project's asset folder"><figure><div><img src="../img/StreetTyper/assets/character-demi.png" alt="Demi character portrait, the player character" /></div><figcaption><span>Raw asset</span><strong>Demi — player character</strong></figcaption></figure><figure><div><img src="../img/StreetTyper/assets/character-dragon1.png" alt="Dragon 1 enemy character portrait" /></div><figcaption><span>Raw asset</span><strong>Dragon 1 — enemy</strong></figcaption></figure><figure><div><img src="../img/StreetTyper/assets/character-mom.png" alt="Mother Dragon character portrait" /></div><figcaption><span>Raw asset</span><strong>Mother Dragon</strong></figcaption></figure></div><div class="asset-frame-strips" aria-label="Animation clips"><figure class="asset-frame-strip"><div><video src="../img/StreetTyper/vd1.mp4" controls muted loop playsinline preload="metadata"></video></div><figcaption><span>Raw capture</span><strong>Attack animation</strong><small>Baked playback of the Spriter Pro skeletal rig, in-engine</small></figcaption></figure><figure class="asset-frame-strip"><div><video src="../img/StreetTyper/vd2-Skeleton.mp4" controls muted loop playsinline preload="metadata"></video></div><figcaption><span>Raw capture</span><strong>Skeletal idle</strong><small>The bone rig itself, visible and moving in Spriter Pro</small></figcaption></figure></div><p class="art-count-note">Pulled directly from the project's asset folder (Demi, Dragon 1, and Mother Dragon) — images are downscaled for the web but otherwise unedited.</p><h3 id="ui-style-extended">UI styling workflow</h3><p>I designed the UI through a custom-built UI Style shader. This shader started in <strong>ThinkThink!</strong> — a reusable Unity UI shader with per-corner rounding, gradients, shadows, blur, presets, and inspector controls. For Street Typer's card-combat UI I extended it with per-corner radii, a diamond shape, a radial gradient option, and a dedicated outline.</p><a class="evidence-link" href="05_ThinkThink.html?contributionTab=Technical#ui-style-origin">Where this shader system started (ThinkThink!) ↗</a><h3>Color direction</h3><p>I built the palette around a <span class="tone-blue">blue</span>-and-<span class="tone-pink">pink</span> pairing and kept it consistent across characters, cards, and UI so the accent color would read as one deliberate identity rather than scattered choices. The goal was a funky, casual tone—playful and a little loud, but still cohesive enough to feel art-directed rather than random.</p></section>`
        },
        {
          title: "Production",
          category: "Producing",
          htmlContent: `<section><h2>Owned the 10-Day Scope End to End</h2><p>Beyond originating the core concept, I ran production for the 10-day jam window: splitting the scope into a schedule the team could actually hit, assigning and confirming ownership per system, and signing off on scope changes as they came up.</p><div class="system-map"><h3>10-day schedule</h3><ol><li><span>01</span><strong>Prototype</strong><small>Validate the typing-combat loop</small></li><li><span>02</span><strong>Scope lock</strong><small>Cut features to fit 10 days</small></li><li><span>03</span><strong>Production</strong><small>Art, systems, and UI in parallel</small></li><li><span>04</span><strong>Integration</strong><small>Merge systems into one playable build</small></li><li><span>05</span><strong>Polish & ship</strong><small>Bug pass, feel tuning, submission</small></li></ol></div><div class="production-evidence"><div><strong>Scope allocation</strong><span>Broke the concept into a 10-day plan and cut anything that couldn't be finished cleanly in that window.</span></div><div><strong>Role distribution</strong><span>Assigned ownership per system (design, art, engineering) and confirmed each teammate's scope before production started.</span></div><div><strong>Confirmations</strong><span>Reviewed and signed off on scope or design changes mid-sprint so the team kept building toward the same target.</span></div><div><strong>Steam release prep</strong><span>Currently preparing the Steam release paperwork and store materials — store page copy, key art, build packaging, and content/ratings documentation.</span></div></div></section>`
        }
      ]
    },
    source: {
      text: "Play the game on itch.io or inspect the team project on GitHub.",
      url: "https://github.com/Seohyeon-Min/StreetTyper",
      label: "GitHub",
      links: [
        { label: "PLAY ON ITCH.IO ↗", url: "https://handalhandal.itch.io/streettyper" },
        { label: "GITHUB ↗", url: "https://github.com/Seohyeon-Min/StreetTyper" }
      ]
    },
    localized: {
      ko: {
        subtitle: "단어를 이어 기술을 만들고, 마지막 입력으로 공격하세요.",
        overview: "타이핑하고 싸워라! 드래곤 엄마에게 인정받기 위해 싸우는 소녀의 이야기를 담은 덱빌딩 타이핑 액션 로그라이트.",
        features: [
          "화면에 나타나는 단어를 빠르고 정확하게 입력해 적을 공격하세요",
          "전투를 거듭하며 카드를 획득하고 나만의 덱을 완성하세요",
          "어떤 카드를 선택하느냐에 따라 플레이 방식이 달라집니다 — 자신에게 맞는 조합을 찾아 더 강력한 적에게 도전하세요"
        ],
        gameIntro: `<p>'피지컬을 쓰는 타이핑 카드게임이면 어떨까?'라는 아이디어에서 출발한 10일 게임잼 프로젝트입니다. 코덱스(Codex)를 활용해 이 아이디어를 검증하는 초기 프로토타입을 직접 만들었습니다.</p><p>이후 팀의 게임 디자이너가 이 기반 위에서 레벨 디자인과 디자인 폴리싱을 맡았습니다.</p>`,
        experience: {
          role: "아트 · 테크니컬 아트 · 프로듀서 (팀 프로젝트)",
          period: "2026 · 10일 제작",
      description: "게임의 중심이 된 타이핑 전투 아이디어를 제안하고, 실제로 플레이 가능한 초기 프로토타입을 만들어 핵심 루프를 정했습니다. 팀의 게임 디자이너는 이후 레벨 디자인과 디자인 폴리싱을 담당했습니다. 저는 프로듀서로서 10일 제작 범위와 역할을 조율하는 동시에 비주얼 디렉션, 아트 적용, UI, VFX와 타격 피드백을 직접 맡아 플레이 가능한 빌드까지 완성했습니다."
    },
    tools: "C# · Unity · Spriter Pro · 2D Rigging · Animation · HLSL · Clip Studio Paint",
        conceptComparison: {
          eyebrow: "CONCEPT → PLAYABLE BUILD",
          title: "콘셉트의 핵심을 실제 플레이 화면까지 유지했습니다.",
          description: "분위기 참고용 그림으로 끝내지 않고, 콘셉트의 화면 구도와 색, 실루엣, 전경 프레이밍, 코믹북 리듬을 Unity 플레이 화면에 그대로 옮겼습니다.",
          concept: { src: "../img/StreetTyper/concept.png", alt: "Street Typer 전투 콘셉트 아트", label: "초기 전투 콘셉트" },
          build: { src: "../img/StreetTyper/ingame_typing.png", alt: "Unity에서 구현된 Street Typer 전투 화면", label: "실제 Unity 플레이 화면" },
          proof: "최종 빌드에서도 양쪽 캐릭터 배치, 청록색 숲의 깊이, 보랏빛 전투 공간, 부채꼴 카드, 말풍선 정보 구조와 핫핑크·민트 포인트를 유지했습니다. 여기에 실시간 입력 상태와 체력, 타이밍, 애니메이션, VFX, 타격 피드백을 더했습니다."
        },
        gallery: {
          title: "비주얼 디렉션",
          subtitle: "직접 제작하고 게임에 적용한 주요 비주얼",
          images: [
            { src: "../img/StreetTyper/title.png", alt: "Street Typer 타이틀 화면", title: "타이틀 화면" },
            { src: "../img/StreetTyper/ingame_gamestart.png", alt: "Street Typer 스테이지 시작", title: "스테이지 시작" },
            { src: "../img/StreetTyper/ingame_typing.png", alt: "Street Typer 타이핑 전투", title: "타이핑 전투" },
            { src: "../img/StreetTyper/ingame_typing2.png", alt: "Street Typer 한영 입력", title: "한영 입력" },
            { src: "../img/StreetTyper/ingame_attacking.png", alt: "Street Typer 공격 이펙트", title: "공격 타격감" },
            { src: "../img/StreetTyper/ingame_selectcard.png", alt: "Street Typer 카드 선택", title: "카드 선택" },
            { src: "../img/StreetTyper/ingame_mom.png", alt: "Street Typer 내러티브 화면", title: "내러티브" },
            { src: "../img/StreetTyper/clear.png", alt: "Street Typer 클리어 화면", title: "클리어" },
            { src: "../img/StreetTyper/option.png", alt: "Street Typer 옵션", title: "옵션" },
            { src: "../img/StreetTyper/intro.png", alt: "Street Typer 인트로", title: "인트로" }
          ]
        },
        contributions: {
          sections: [
            {
              title: "아트 · 애니메이션",
              category: "Art",
              htmlContent: `<section><h2>Spriter로 리깅하고, Unity용으로 구워냈습니다</h2><p>캐릭터, 배경, 카드, UI 아이콘까지 게임에 나오는 그림은 전부 제가 그렸습니다. 전투 캐릭터는 Spriter Pro에서 2D 스켈레톤(뼈대) 애니메이션으로 리깅한 뒤, 이를 스프라이트 프레임 시트로 구워 Unity로 내보내고 Animator 상태 머신으로 재생합니다. 이 파이프라인 덕분에 대기·펀치·가드·피격 같은 포즈를 빠르게 만들고 상태 간 모션을 재사용할 수 있었고, 10일이라는 짧은 제작 기간 안에서도 애니메이션을 빠르게 완성할 수 있었습니다.</p><div class="engineering-summary" aria-label="아트 제작 범위"><article><span class="engineering-icon" aria-hidden="true">🎨</span><strong>2D</strong><small>캐릭터 · 배경 · 카드</small></article><article><span class="engineering-icon" aria-hidden="true">🦴</span><strong>스켈레톤</strong><small>Spriter Pro로 리깅, 스프라이트 시트로 익스포트</small></article><article><span class="engineering-icon" aria-hidden="true">✨</span><strong>VFX</strong><small>타격 이펙트 · 파티클 · 카메라 셰이크</small></article><article><span class="engineering-icon" aria-hidden="true">🧩</span><strong>UI</strong><small>셰이더 기반 스타일링</small></article></div><div class="asset-portrait-grid" aria-label="프로젝트 에셋 폴더의 캐릭터 원화"><figure><div><img src="../img/StreetTyper/assets/character-demi.png" alt="플레이어 캐릭터 데미 원화" /></div><figcaption><span>원본 에셋</span><strong>데미 — 플레이어 캐릭터</strong></figcaption></figure><figure><div><img src="../img/StreetTyper/assets/character-dragon1.png" alt="적 캐릭터 드래곤1 원화" /></div><figcaption><span>원본 에셋</span><strong>드래곤1 — 적 캐릭터</strong></figcaption></figure><figure><div><img src="../img/StreetTyper/assets/character-mom.png" alt="마더 드래곤 원화" /></div><figcaption><span>원본 에셋</span><strong>마더 드래곤</strong></figcaption></figure></div><div class="asset-frame-strips" aria-label="애니메이션 영상"><figure class="asset-frame-strip"><div><video src="../img/StreetTyper/vd1.mp4" controls muted loop playsinline preload="metadata"></video></div><figcaption><span>원본 캡처</span><strong>공격 애니메이션</strong><small>Spriter Pro 스켈레톤 리그를 구워 인게임에서 재생한 모습</small></figcaption></figure><figure class="asset-frame-strip"><div><video src="../img/StreetTyper/vd2-Skeleton.mp4" controls muted loop playsinline preload="metadata"></video></div><figcaption><span>원본 캡처</span><strong>스켈레톤 idle</strong><small>Spriter Pro에서 뼈대가 그대로 보이는 상태로 움직이는 모습</small></figcaption></figure></div><p class="art-count-note">프로젝트의 에셋 폴더(데미, 드래곤1, 마미용)에서 직접 가져온 원본 파일입니다 — 웹용으로 크기만 줄였을 뿐 그 외에는 수정하지 않았습니다.</p><h3 id="ui-style-extended">UI 스타일 제작</h3><p>직접 제작한 UI Style 셰이더를 통해 UI를 디자인했습니다. 이 셰이더는 <strong>ThinkThink!</strong>에서 처음 만든 것으로, 모서리 둥글기·그라디언트·그림자·블러·프리셋과 인스펙터 조작까지 갖춘 재사용 가능한 Unity UI 셰이더입니다. 스트리트 타이퍼의 카드 전투 UI에 맞춰 모서리 개별 둥글기, 다이아몬드 모양, 방사형 그래디언트, 전용 윤곽선(Outline)을 새로 추가해 확장했습니다.</p><a class="evidence-link" href="05_ThinkThink.html?contributionTab=Technical#ui-style-origin">이 셰이더 시스템이 시작된 곳 (ThinkThink!) ↗</a><h3>색감 디렉션</h3><p><span class="tone-blue">블루</span>와 <span class="tone-pink">핑크</span>를 메인 포인트 컬러로 잡고, 캐릭터·카드·UI 전반에 같은 색 조합을 일관되게 써서 흩어진 선택이 아니라 하나의 정체성으로 읽히게 신경 썼습니다. 펑키하면서도 캐주얼한 분위기 — 통통 튀고 살짝 시끄럽지만, 그래도 일관되게 아트 디렉팅된 느낌을 목표로 했습니다.</p></section>`
            },
            {
              title: "프로듀싱",
              category: "Producing",
              htmlContent: `<section><h2>10일 스코프를 처음부터 끝까지 운영했습니다</h2><p>핵심 콘셉트를 제안한 것에서 그치지 않고, 10일짜리 게임잼 일정의 프로듀싱도 맡았습니다. 실제로 끝낼 수 있는 범위로 스코프를 나누고, 시스템별 담당을 배정·확인했으며, 중간에 생기는 스코프 변경 사항을 컨펌했습니다.</p><div class="system-map"><h3>10일 일정</h3><ol><li><span>01</span><strong>프로토타입</strong><small>타이핑 전투 루프 검증</small></li><li><span>02</span><strong>스코프 확정</strong><small>10일 안에 끝낼 수 있는 범위로 정리</small></li><li><span>03</span><strong>제작</strong><small>아트 · 시스템 · UI 병행 제작</small></li><li><span>04</span><strong>통합</strong><small>각 시스템을 하나의 플레이 가능한 빌드로 병합</small></li><li><span>05</span><strong>폴리싱 · 제출</strong><small>버그 수정, 손맛 조절, 제출</small></li></ol></div><div class="production-evidence"><div><strong>스코프 할당</strong><span>핵심 콘셉트를 10일 일정으로 쪼개고, 그 안에서 깔끔히 끝내기 어려운 부분은 과감히 덜어냈습니다.</span></div><div><strong>역할 배분</strong><span>기획 · 아트 · 개발 등 시스템별 담당을 배정하고, 제작 시작 전에 각자의 범위를 서로 확인했습니다.</span></div><div><strong>컨펌</strong><span>중간에 나오는 스코프·디자인 변경 사항을 검토하고 승인해, 팀이 같은 목표를 보고 계속 만들 수 있게 했습니다.</span></div><div><strong>스팀 출시 준비</strong><span>현재 스팀 출시를 위한 서류와 스토어 자료(스토어 페이지 문구, 키아트, 빌드 패키징, 등급·콘텐츠 서류)를 준비하고 있습니다.</span></div></div></section>`
            }
          ]
        },
        source: {
          text: "itch.io에서 직접 플레이하거나 GitHub에서 팀 프로젝트와 구현을 확인할 수 있습니다.",
          url: "https://github.com/Seohyeon-Min/StreetTyper",
          label: "GitHub",
          links: [
            { label: "ITCH.IO에서 플레이 ↗", url: "https://handalhandal.itch.io/streettyper" },
            { label: "GITHUB ↗", url: "https://github.com/Seohyeon-Min/StreetTyper" }
          ]
        }
      }
    }
  },

  "08_PoseidonSkate": {
    type: "game",
    title: "POSEIDON SKATE",
    subtitle: "A rideable procedural ocean, shaders, and effects built in a three-week team production",
    pageTitle: "Poseidon Skate — Min Seohyeon Portfolio",
    heroType: "video",
    heroMedia: "../img/PoseidonSkate/PlayVid.mp4?v=20260921",
    heroPoster: "../img/WaveSimulator/img1.png",
    overview: "Poseidon Skate is a three-week Unity URP team project by PassionDiff, played on a rideable ocean wave. I built the ocean, wave, and tornado shaders, the effects and camera work behind the combat feel, and a low-poly Poseidon modeled and rigged in Blender, while managing the schedule and priorities in Jira.",
    features: [
      "Ocean, wave, and tornado shaders written in HLSL and structured to be reused",
      "A rideable wave built as generated mesh geometry with a collider, separate from the GPU water shader",
      "VFX, camera effects, and action presentation tuned for combat feel",
      "A low-poly Poseidon character modeled and rigged in Blender",
      "Schedule and priorities managed in Jira, with source control through Perforce"
    ],
    experience: {
      role: "Technical Art · Shader Development · Production",
      period: "September 2026 · 3-week team project",
      description: "Technical artist on PassionDiff's three-week Unity URP team project. I wrote the ocean, wave, and tornado shaders and structured them to be reusable, built the VFX and camera effects behind the combat feel, and modeled and rigged the low-poly Poseidon in Blender. I also managed the schedule and priorities in Jira and assigned tasks by teammates' strengths. Because the team finished core gameplay first, there was time left for art and polish."
    },
    tools: "Unity URP · HLSL · C# · Blender · Perforce · Jira",
    trailers: [],
    videos: [],
    contributions: {
      sections: [
        {
          title: "Schedule, Priorities & Pipeline",
          category: "Producing",
          htmlContent: `<section><h2>Keeping a Three-Week Team on Track</h2><p class="case-study-lede">I used Jira to organize the schedule and priorities so everyone knew what to work on next, and assigned tasks according to each teammate's strengths and interests.</p><div class="direction-case-grid"><article><span class="case-label">Scheduling</span><h3>Jira for priorities</h3><p>Organized the three-week schedule and priorities in Jira so every teammate could see what to work on next.</p></article><article><span class="case-label">Team Fit</span><h3>Tasks matched to strengths</h3><p>Assigned work by each teammate's strengths and interests. For example, audio went to a teammate with a strong interest in music and games.</p></article><article><span class="case-label">Pipeline</span><h3>Learning Perforce</h3><p>I had mostly used GitHub before, so I adapted to a Perforce workflow. Teammates flagged checkout issues early, which made problems quick to identify and resolve.</p></article><article><span class="case-label">Prioritization</span><h3>Core gameplay first</h3><p>The team finished core gameplay first and spent the remaining time on art and polish. That order is what left room for the shaders and effects.</p></article></div><p class="case-study-note"><strong>What I took from it:</strong> knowing what to prioritize is one of the most important skills in a short project.</p></section>`
        }
      ]
    },
    source: {
      text: "Review the Wave Simulator source on GitHub.",
      url: "https://github.com/Seohyeon-Min/WaveSimulator",
      label: "GitHub"
    },
    localized: {
      ko: {
        subtitle: "3주 팀 제작에서 만든 탈 수 있는 절차적 바다와 셰이더, 이펙트",
        overview: "Poseidon Skate는 PassionDiff 팀이 3주 동안 만든 Unity URP 프로젝트로, 탈 수 있는 바다 위 파도가 무대입니다. 오션·웨이브·토네이도 셰이더와 전투 손맛을 만드는 이펙트·카메라 연출, Blender로 모델링·리깅한 로우폴리 포세이돈을 제작했고, Jira로 일정과 우선순위를 관리했습니다.",
        features: [
          "재사용할 수 있게 구조화한 HLSL 오션·웨이브·토네이도 셰이더",
          "GPU 물 셰이더와 분리해 메시 지오메트리와 콜라이더로 생성한 탈 수 있는 파도",
          "전투 손맛을 위해 다듬은 VFX와 카메라 효과, 액션 연출",
          "Blender로 모델링·리깅한 로우폴리 포세이돈 캐릭터",
          "Jira로 일정과 우선순위를 관리하고 Perforce로 소스를 관리"
        ],
        experience: {
          role: "테크니컬 아트 · 셰이더 개발 · 프로덕션",
          period: "2026년 9월 · 3주 팀 프로젝트",
          description: "PassionDiff의 3주짜리 Unity URP 팀 프로젝트에서 테크니컬 아티스트를 맡았습니다. 오션·웨이브·토네이도 셰이더를 작성해 재사용 가능하게 구조화하고, 전투 손맛을 만드는 VFX와 카메라 효과를 제작했으며, 로우폴리 포세이돈을 Blender로 모델링·리깅했습니다. 또한 Jira로 일정과 우선순위를 관리하고 팀원의 강점에 맞춰 작업을 배정했습니다. 팀이 핵심 게임플레이를 먼저 완성한 덕분에 남은 시간을 아트와 폴리싱에 쓸 수 있었습니다."
        },
        contributions: {
          sections: [
            {
              title: "일정, 우선순위, 파이프라인",
              category: "Producing",
              htmlContent: `<section><h2>3주 팀의 일정을 이끌기</h2><p class="case-study-lede">Jira로 일정과 우선순위를 정리해 모두가 다음에 할 일을 알 수 있게 했고, 팀원 각자의 강점과 관심사에 맞춰 작업을 배정했습니다.</p><div class="direction-case-grid"><article><span class="case-label">일정 관리</span><h3>Jira로 우선순위 정리</h3><p>3주 일정과 우선순위를 Jira에 정리해 모든 팀원이 다음에 할 일을 볼 수 있게 했습니다.</p></article><article><span class="case-label">팀 적합도</span><h3>강점에 맞춘 작업 배정</h3><p>팀원의 강점과 관심사에 맞춰 작업을 배정했습니다. 예를 들어 음악과 게임에 관심이 큰 팀원에게 오디오 작업을 맡겼습니다.</p></article><article><span class="case-label">파이프라인</span><h3>Perforce 적응</h3><p>주로 GitHub를 써 왔기 때문에 Perforce 워크플로에 적응해야 했습니다. 팀원들이 체크아웃 문제를 빠르게 알려준 덕분에 원인을 쉽게 찾고 해결할 수 있었습니다.</p></article><article><span class="case-label">우선순위</span><h3>핵심 게임플레이 먼저</h3><p>팀은 핵심 게임플레이를 먼저 완성하고 남은 시간을 아트와 폴리싱에 썼습니다. 이 순서 덕분에 셰이더와 이펙트에 쓸 시간이 남았습니다.</p></article></div><p class="case-study-note"><strong>배운 점:</strong> 짧은 프로젝트에서는 무엇을 우선할지 아는 것이 가장 중요한 역량 중 하나입니다.</p></section>`
            }
          ]
        },
        source: {
          text: "웨이브 시뮬레이터의 소스 코드는 GitHub에서 볼 수 있습니다.",
          url: "https://github.com/Seohyeon-Min/WaveSimulator",
          label: "GitHub"
        }
      }
    }
  },
  // (IN PRODUCTION / UNFINISHED) team project, still being built — see the
  // top-of-file crawler note above. Describe as ongoing work, not a finished/shipped project.
  "09_Carboom": {
    type: "game",
    title: "Carboom",
    subtitle: "Space action — in production",
    pageTitle: "Carboom — Min Seohyeon Portfolio",
    heroType: "video",
    heroMedia: "../img/Carboom/TempHero.mp4",
    prioritizeContributions: false,
    overview: "A team project built in Unreal Engine, currently in production. I own gameplay core and technical art, building an artist-facing editor tool — a DataAsset-driven procedural space-background placement tool — for the two artists I collaborate with to use directly, without touching code.",
    features: [
      "Artist-facing editor tool that procedurally places background planets — count, distance, scale, and spread all exposed as an artist-editable DataAsset, no Python required",
      "One-click generate/clear workflow so artists can re-roll and iterate on the sky composition themselves",
      "Gameplay core systems",
      "Built in Unreal Engine with a 2-artist collaboration"
    ],
    experience: {
      role: "Gameplay Programmer / Technical Art — Tools",
      period: "2026 · Team project (in production)",
      description: "Own gameplay core and technical art on a team Unreal Engine project, building an artist-facing editor tool — a DataAsset-driven procedural space-background placement tool — so the two artists I collaborate with can tune and iterate on the game's look themselves, without touching code."
    },
    tools: "Unreal Engine · Python (Unreal Editor scripting) · C++ · Perforce · Jira",
    trailers: [],
    videos: [{
      title: "Planet Lock Workflow",
      src: "../img/Carboom/planet-lock-workflow.mp4"
    }, {
      title: "Gameplay — Usage Example",
      src: "../img/Carboom/GamePlay.mp4"
    }],
    gallery: {
      title: "Planet Lock Workflow & Gameplay — Work in Progress",
      subtitle: "The Planet Lock video shows an artist preserving a selected planet while re-generating the rest of the background. The gameplay video is a usage example: the generated space background as it appears in the game. The project is still in production; this is an in-editor workflow recording, not final game art.",
      images: []
    },
    contributions: {
      sections: [
        {
          title: "Procedural Space Background Tool",
          category: "Technical",
          htmlContent: `<section><h2>An Editor Tool That Places Planets by How They Look, Not Just Where They Are</h2><p class="case-study-lede">Built for the two artists on the team, not just for me &mdash; every knob (count, scale, distance, clustering) lives in a plain DataAsset they edit directly, with a one-click generate/clear loop to re-roll the sky themselves. The space background is only ever seen from one fixed point (the arena), so I built the placement tool around apparent size and on-screen spacing instead of raw 3D coordinates &mdash; then iterated the composition and clustering rules with the artists after reviewing early passes in-editor together.</p>${renderEngineeringCaseStudy({metrics:[{icon:"◉",value:"View-space",label:"composition, not 3D distance"},{icon:"⌘",value:"DataAsset",label:"artist-tunable zones"},{icon:"◈",value:"Leader/follower",label:"cluster size hierarchy"},{icon:"↻",value:"Idempotent",label:"generate/clear, re-runnable"}],architecture:[{title:"Settings DataAsset",detail:"Artist-tunable zones, cluster, and accessory parameters"},{title:"Zone + cluster planning",detail:"Decide counts/sizes, pre-build clusters as one “disc” each"},{title:"View-space composition",detail:"Place largest-apparent-size first, spacing/density checked as angles from the arena"},{title:"Accessory pass",detail:"Ring-constrained moons attached to qualifying parents"},{title:"Spawn / clear",detail:"Idempotent actor spawn, label-prefixed for one-click cleanup"}],cases:[{label:"Composition",title:"Placing by apparent size instead of real distance",problem:"The background is only ever seen from one fixed arena viewpoint, so real 3D distance doesn't match what actually reads on screen — a far big planet and a near small one can look the same size, and naive random placement produced uneven, unbalanced skies.",decision:"Compute everything — apparent size, spacing, and local density — as angles and solid angle from the arena, not 3D position.",implementation:"to_view() converts a planet's location/radius into an apparent angular radius; fits_composition() enforces a geometric-mean spacing rule (big+big far apart, small+small can sit close) and a probabilistic density budget so already-crowded areas rarely accept more, without a hard cutoff that would leave visible gaps.",verification:"Iterated visually with the tool's own generate/clear cycle in-editor until the sky read as evenly weighted instead of clumping on one side."},{label:"Iteration",title:"A curve couldn't express what the composition needed",problem:"The first version sampled size from a ScaleDistribution curve, but curves can't express “this many planets of this size around this distance,” and splitting total distance into ratios (like gradient stops) doesn't work in a Blueprint DataAsset — editing one entry doesn't renormalize the others back to summing to 1.",decision:"Replace the curve with an explicit ScaleZones array: each zone gets its own count, scale range, and distance range, and zones are allowed to overlap instead of being forced to partition the whole range.",implementation:"Also hit Blueprint struct members getting mangled internal names (e.g. “Count_2_ABCD…”); get_struct_value() falls back to parsing export_text() when get_editor_property() fails on the mangled name.",verification:"Zone ranges and counts are logged to the Output Log on every run so an artist tuning the DataAsset can confirm what actually got read."},{label:"Clustering",title:"Fixing “rich-get-richer” clumping and same-size clusters",problem:"The first clustering approach dropped small planets near whichever small planet was already placed, which snowballed into one dense clump versus scattered big planets instead of an even mix — and even after that was fixed, same-sized members scattered evenly inside a disc looked uniform and unnatural, like a pile of eggs.",decision:"Pre-build clusters sized with 1/n weighting (many small clusters, occasional big ones) and place each cluster as its own disc under the same spacing/density rules as a single big planet; then force a leader-plus-followers size hierarchy inside each cluster instead of same-sized members.",implementation:"build_clusters() picks a leader (largest) and smallest member and enforces a minimum leader/smallest scale ratio; cluster_offset() scatters members with a Gaussian (dense center, sparse edge) instead of a uniform disc fill, plus a slight elliptical stretch per cluster so shapes don't all read as perfect circles.",verification:"Max cluster size was tuned down from 12 to 7 members after an in-editor visual pass looked too densely packed."},{label:"Locking",title:"Letting artists lock the planets they like mid-iteration",problem:"Every regenerate replaced the whole sky, so an artist happy with 90% of a layout still had to re-roll everything just to fix the rest — there was no way to keep specific planets in place while reshuffling around them.",decision:"Add a per-planet Locked flag: locked planets are skipped by Clear and fed back into the next Generate as already-placed, so new planets are placed around them instead of overwriting them.",implementation:"Newer planets store Locked as a Blueprint instance-editable bool (a checkbox in Details); older planets were plain StaticMeshActors with no such property, so is_locked()/set_locked() fall back to a BG_Locked actor tag when the property lookup fails. Locked planets also carry a BG_Zone_N tag so a later Generate knows which zone’s Count to subtract them from — a planet locked before zones existed has none, so guess_zone() infers it from whichever zone’s scale/distance range it fits best.",verification:"Lock/Unlock run as a single undoable editor transaction and log how many planets were (un)locked; Clear logs how many locked planets it kept, so an artist can confirm nothing they locked got swept away."}],decisions:[{system:"Background placement",choice:"View-space composition (angle/solid-angle math)",reason:"Matches what's actually seen from the one fixed camera point.",tradeoff:"More math than naive 3D scatter; O(n²) composition checks per placement."},{system:"Size/count control",choice:"ScaleZones DataAsset array",reason:"Artist-tunable per zone without touching Python.",tradeoff:"Zones can overlap instead of neatly partitioning distance."},{system:"Small planets",choice:"Pre-built leader/follower clusters",reason:"Reads as a natural, uneven grouping instead of a uniform scatter.",tradeoff:"Extra clustering pass before the main placement loop."},{system:"Accessory moons",choice:"Ring-constrained direction (not a full cone)",reason:"Keeps them visibly offset from the parent instead of hiding or overlapping it.",tradeoff:"Narrower valid placement area, more re-rolls when space is tight."}],note:"Result: hand-placing this many planets with real compositional judgment — checking apparent size and spacing from one fixed viewpoint, by eye, every time — would take hours per pass; the tool collapses that to one generate/clear click. (No source link is included here — the case study above is described directly from the implementation and its in-code design notes.)"})}<details class="technical-deep-dive full-source"><summary><span>Code</span><strong>Show full source — space_background.py</strong></summary><div class="technical-deep-dive-body"><p>Pasted in full from the private Perforce depot (no public repo to link to) — the exact, current version of the script discussed above.</p><pre><code>import unreal
import random
import math

SETTINGS_PATH = "/Game/Editor/DA_SpaceBackgroundSettings"

# /Engine/BasicShapes/Sphere 의 반지름 (스케일 1 기준)
# Radius of /Engine/BasicShapes/Sphere at scale 1.
SPHERE_RADIUS = 50.0

# 정수리(바로 위)에서 이 각도 안쪽은 비워둠.
# 아레나에서 시선이 주로 수평~비스듬히 가니까 머리 위에 있는 행성은 거의 안 보임.
# 0이면 반구 전체, 30이면 머리 위 30도 원은 비움
# Leave this angle around the zenith (straight up) empty.
# From the arena the view is mostly horizontal to diagonal, so planets overhead are rarely seen.
# 0 = whole hemisphere, 30 = keep a 30-degree circle overhead empty.
ZENITH_EXCLUDE_ANGLE = 30.0

# 스폰 가능한 방향의 z 최대값 (ZENITH_EXCLUDE_ANGLE에서 계산)
# Max z of a spawn direction (derived from ZENITH_EXCLUDE_ANGLE).
MAX_Z_DIR = math.cos(math.radians(ZENITH_EXCLUDE_ANGLE))

# 최소거리/컴포지션 못 맞출 때 위치 다시 뽑는 횟수
# How many times to re-roll a position when spacing/composition checks fail.
MAX_PLACE_ATTEMPTS = 50

# 밀도 계산할 때 "주변"으로 보는 범위 (아레나에서 본 각도)
# Neighborhood size for the density check (angle as seen from the arena).
NEIGHBOR_ANGLE = 20.0

# 평균 밀도의 몇 배까지 여유를 줄지. 낮추면 더 균등, 높이면 더 뭉침 허용
# How far above average density a spot may go. Lower = more even, higher = allows more clumping.
DENSITY_TOLERANCE = 1.5

# 무리 하나에 들어가는 작은 행성 수 범위 (작은 무리가 더 자주 나옴)
# 12까지 뒀더니 알 무더기처럼 빽빽해서 징그러움 -&gt; 7로 줄임
# Range of small planets per cluster (small clusters appear more often).
# Up to 12 looked packed and creepy, like a pile of eggs -&gt; reduced to 7.
CLUSTER_SIZE_MIN = 2
CLUSTER_SIZE_MAX = 7

# 무리가 퍼지는 범위 = 이 값 × √멤버수 (아레나에서 본 각도)
# 2개면 약 3.5도, 7개면 약 6.6도
# Cluster spread = this value x sqrt(member count) (angle as seen from the arena).
# About 3.5 degrees for 2 members, about 6.6 degrees for 7.
CLUSTER_SPREAD_PER_MEMBER = 2.5

# 무리 안에서 대장(가장 큰 것) / 가장 작은 것 스케일 비율 최소값
# 크기가 다 비슷하면 징그러워서 크기 계층을 강제함
# Minimum scale ratio between the leader (largest) and the smallest member of a cluster.
# Same-sized members look creepy, so a size hierarchy is enforced.
CLUSTER_MIN_SIZE_RATIO = 3.0

# 무리 멤버 거리를 대장 거리의 ±몇 %로 맞출지.
# 거리가 제각각이면 멀어서 작아 보이는 게 섞여서 크기 계층이 화면에서 흐려짐
# Keep cluster members within +/- this fraction of the leader's distance.
# With random distances, far members look smaller and the size hierarchy gets blurred on screen.
CLUSTER_DEPTH_JITTER = 0.1

# 무리 모양을 최대 몇 배까지 길쭉하게 늘릴지 (1 = 원형)
# 원형이면 격자처럼 고르게 보여서 살짝 타원으로 찌그러뜨림
# Max stretch of a cluster's shape (1 = circle).
# A perfect circle looks grid-like and even, so clusters are squashed into slight ellipses.
CLUSTER_MAX_STRETCH = 1.8

# 악세사리 행성이 붙는 링의 각도 범위 (기준 행성 -&gt; 아레나 방향 기준)
# 기존엔 원뿔(0~30도)이었는데 아레나-악세-기준 행성이 일자로 서서 못생겨서
# 가운데를 뺀 링으로 바꿈
# MIN을 키우면 옆으로 더 벌어지고, MAX가 90에 가까우면 기준 행성 옆면까지 감
# Angle range of the ring where accessory planets attach (around the parent -&gt; arena direction).
# It used to be a cone (0-30 degrees), but arena, accessory and parent lined up and looked ugly,
# so the center was cut out, making it a ring.
# Raising MIN pushes accessories further to the side; MAX near 90 reaches the parent's side.
ACCESSORY_RING_MIN_ANGLE = 45.0
ACCESSORY_RING_MAX_ANGLE = 75.0

# 이 라벨로 시작하는 액터만 배경 행성으로 봄
# Only actors whose label starts with this count as background planets.
PLANET_LABEL_PREFIX = "BG_Planet_"
ACCESSORY_LABEL_PREFIX = "BG_Planet_Acc_"

# 행성 액터 BP. StaticMeshActor를 부모로 하고 Instance Editable bool 변수 "Locked"를 가짐
# -&gt; 행성 클릭하면 Details에 Locked 체크박스가 뜸
# Planet actor BP. Parent is StaticMeshActor, with an Instance Editable bool variable "Locked"
# -&gt; clicking a planet shows a Locked checkbox in Details.
PLANET_BP_PATH = "/Game/Editor/BP_BGPlanet"
LOCK_PROPERTY = "Locked"

# 락 걸린 행성은 clear에서 안 지워지고, 다음 generate에 "이미 놓인 행성"으로 들어감
# BG_Locked 태그는 BP 전에 StaticMeshActor로 만든 행성용 (체크박스가 없으니 태그로 락)
# Zone 태그는 락 걸린 행성이 어느 구간 Count를 차지하는지 알려줌 (BG_Zone_1, BG_Zone_2 ...)
# Locked planets survive clear and join the next generate as "already placed planets".
# The BG_Locked tag is for planets made as StaticMeshActors before the BP (no checkbox, so a tag locks them).
# The zone tag tells which zone's Count a locked planet uses up (BG_Zone_1, BG_Zone_2 ...).
LOCK_TAG = "BG_Locked"
ACCESSORY_TAG = "BG_Accessory"
ZONE_TAG_PREFIX = "BG_Zone_"


def get_settings():
    settings = unreal.load_asset(SETTINGS_PATH)

    if not settings:
        raise RuntimeError(
            f"Could not load settings asset: {SETTINGS_PATH}"
        )

    return settings


def get_struct_value(struct, name):
    # BP 스트럭쳐는 내부 이름이 "Count_2_ABCD..." 식으로 붙어서
    # get_editor_property가 실패하면 export_text에서 직접 찾음
    # Blueprint struct members get internal names like "Count_2_ABCD...",
    # so if get_editor_property fails, look the value up in export_text.
    try:
        return struct.get_editor_property(name)
    except Exception:
        pass

    text = struct.export_text().strip("()")

    for pair in text.split(","):
        key, _, value = pair.partition("=")

        if key == name or key.startswith(name + "_"):
            return float(value)

    raise RuntimeError(f"Could not find '{name}' in {text}")


# 처음엔 MinDistance~MaxDistance 전체에 랜덤 배치하고,
# 크기는 ScaleDistribution 커브를 가중치로 샘플링해서 비율을 정했음.
# 근데 커브로는 "이 크기대는 몇 개, 어느 거리쯤" 같은 커스텀이 너무 어려워서
# ScaleZones 배열로 구간을 나누는 방식으로 바꿈.
# 각 구간마다 개수(Count), 스케일 범위(MinScale~MaxScale),
# 거리 범위(MinDistance~MaxDistance)를 직접 지정.
# (중간에 전체 거리를 그래디언트 스톱처럼 비율(0~1)로 나누려고 했는데,
#  블루프린트 DataAsset에선 한 칸 바꿀 때 나머지가 자동으로 조정돼서
#  총합이 1로 맞춰지게 할 수가 없었음.
#  그래서 그냥 구간마다 최소~최대 거리를 직접 두는 걸로 바꿈. 구간끼리 겹쳐도 됨.)
# Originally planets were placed randomly across MinDistance-MaxDistance,
# and sizes were sampled using the ScaleDistribution curve as weights.
# But a curve made it too hard to control things like "this many of this size, at about this distance",
# so it was replaced with a ScaleZones array.
# Each zone sets its own count (Count), scale range (MinScale-MaxScale)
# and distance range (MinDistance-MaxDistance).
# (In between, we tried splitting the total distance by ratios (0-1) like gradient stops,
#  but a Blueprint DataAsset can't auto-adjust the other entries when one changes,
#  so the ratios couldn't be kept summing to 1.
#  So each zone just gets its own min-max distance instead. Zones may overlap.)
def read_zones(settings):
    zones = []

    for zone in settings.get_editor_property("ScaleZones"):
        zones.append({
            "count": int(get_struct_value(zone, "Count")),
            "min_scale": get_struct_value(zone, "MinScale"),
            "max_scale": get_struct_value(zone, "MaxScale"),
            "min_distance": get_struct_value(zone, "MinDistance"),
            "max_distance": get_struct_value(zone, "MaxDistance"),
        })

    if not zones:
        raise RuntimeError("ScaleZones is empty")

    return zones


def read_accessory_settings(settings):
    return {
        "parent_min_scale": settings.get_editor_property("AccessoryParentMinScale"),
        "min_scale": settings.get_editor_property("AccessoryMinScale"),
        "max_scale": settings.get_editor_property("AccessoryMaxScale"),
        "gap": settings.get_editor_property("AccessoryGap"),
        "chance": settings.get_editor_property("AccessoryChance"),
    }


def vec_length(v):
    return math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2])


def vec_distance(a, b):
    return vec_length((a[0] - b[0], a[1] - b[1], a[2] - b[2]))


def planet_radius(scale):
    return SPHERE_RADIUS * scale


def has_space(location, radius, placed, min_gap, ignore=None):
    # 모든 행성과 표면끼리 min_gap 이상 떨어져 있는지
    # 주의! 배치할 때마다 이미 놓인 행성 전부와 비교해서 전체 O(n²).
    # 지금 개수에선 문제없지만, 개수가 확 늘어나면 그리드/공간분할로 바꿔야 함.
    # Checks that the surface is at least min_gap away from every planet.
    # Careful! Each placement compares against every placed planet, so O(n^2) overall.
    # Fine at the current count, but switch to a grid/spatial partition if the count grows a lot.
    for other in placed:
        if other is ignore:
            continue

        needed = radius + other["radius"] + min_gap

        if vec_distance(location, other["location"]) &lt; needed:
            return False

    return True


def random_direction_in_ring(axis, min_angle_deg, max_angle_deg):
    # axis 기준 min~max 각도 사이 링 안에서 균등하게 방향 하나 뽑기
    # (기존엔 0~max 원뿔이었는데 가운데로 뽑히면 일자로 겹쳐 보여서 min을 추가함)
    # (구면 띠에서 cos을 균등하게 뽑으면 면적 기준 균등)
    # Pick a uniformly distributed direction inside the ring between min and max angles from axis.
    # (It used to be a 0-max cone, but picks near the center lined up and overlapped, so min was added.)
    # (Sampling cos uniformly on a spherical band gives an area-uniform distribution.)
    cos_min = math.cos(math.radians(max_angle_deg))
    cos_max = math.cos(math.radians(min_angle_deg))
    cos_t = random.uniform(cos_min, cos_max)
    phi = random.uniform(0.0, 2.0 * math.pi)

    return direction_from_axis(axis, math.acos(cos_t), phi)


def direction_from_axis(axis, angle, phi):
    # axis에서 angle(라디안)만큼 기울이고, axis 둘레로 phi만큼 돌린 방향
    # Direction tilted \`angle\` (radians) away from axis, then rotated \`phi\` around axis.
    cos_t = math.cos(angle)
    sin_t = math.sin(angle)

    # axis에 수직인 두 축 만들기
    # Build two axes perpendicular to axis.
    helper = (0.0, 0.0, 1.0) if abs(axis[2]) &lt; 0.9 else (1.0, 0.0, 0.0)

    u = (
        axis[1] * helper[2] - axis[2] * helper[1],
        axis[2] * helper[0] - axis[0] * helper[2],
        axis[0] * helper[1] - axis[1] * helper[0],
    )
    u_len = vec_length(u)
    u = (u[0] / u_len, u[1] / u_len, u[2] / u_len)

    w = (
        axis[1] * u[2] - axis[2] * u[1],
        axis[2] * u[0] - axis[0] * u[2],
        axis[0] * u[1] - axis[1] * u[0],
    )

    return tuple(
        axis[i] * cos_t
        + (u[i] * math.cos(phi) + w[i] * math.sin(phi)) * sin_t
        for i in range(3)
    )


def random_location(min_distance, max_distance):
    # 구면좌표계로 균등하게. hash처럼..sin(phi)를 변수로 씀. 균등하다!
    # Uniform on the sphere using spherical coordinates. Like a hash, sin(phi) is the random variable. Uniform!
    theta = random.uniform(
        0.0,
        2.0 * math.pi
    )

    # 아래는 안 내려다보니까 위쪽 반구만 (z &gt;= 0)
    # 정수리 쪽도 안 보이니까 MAX_Z_DIR 위로는 안 감
    # Nobody looks down, so only the upper hemisphere (z &gt;= 0).
    # The zenith isn't seen either, so never go above MAX_Z_DIR.
    z_dir = random.uniform(
        0.0,
        MAX_Z_DIR
    )

    #요게 sin(phi)
    # This is sin(phi).
    xy_radius = math.sqrt(
        1.0 - z_dir * z_dir
    )

    x_dir = xy_radius * math.cos(theta)
    y_dir = xy_radius * math.sin(theta)

    # 중심으로부터 거리
    # Distance from the center.
    distance = random.uniform(
        min_distance,
        max_distance
    )

    return (
        x_dir * distance,
        y_dir * distance,
        z_dir * distance
    )


# ---------------------------------------------------------------------------
# 컴포지션 (아레나에서 본 각도 기준)
#
# 배경은 아레나(원점)에서만 보니까, 실제 3D 거리보다 "화면에서 어떻게 보이냐"가 중요함.
# 멀리 있는 큰 행성이랑 가까운 작은 행성은 화면에선 크기가 비슷하게 보이니까
# 크기/간격/밀도를 전부 아레나 기준 각도로 계산함.
#   - 겉보기 크기(alpha) = 아레나에서 본 행성의 각반지름
#   - 각거리(theta)      = 아레나에서 본 두 행성 방향 사이 각도
#   - 시각적 질량(mass)  = 화면에서 차지하는 면적 (입체각 ≈ π·alpha²)
#
# 규칙 3개:
#   1. 크기별 간격: 겉보기에 큰 행성끼리는 멀리, 작은 행성끼리는 촘촘하게
#   2. 밀도 예산: 주변이 이미 무거우면(큰 행성 근처) 잘 못 들어옴 -&gt; 전체 무게감이 균등
#   3. 군집: 작은 행성 일부를 무리로 묶고, 무리 하나를 "중간 크기 행성 하나"처럼 배치
#
# 군집 변경 이력:
#   - 처음 로직: 작은 행성을 놓을 때 확률적으로 "이미 놓인 작은 행성 근처"에 떨굼
#   - 문제: 먼저 생긴 무리에 계속 붙어서(부익부) 한쪽은 큰 무리 덩어리, 한쪽은 큰 행성
#           이렇게 화면이 2분할만 됨. 원하는 건 무리/큰 거/중간 거가 골고루 섞인 것.
#   - 그래서: 무리를 미리 크기별(1/n 가중치 -&gt; 작은 무리 많고 큰 무리 가끔)로 나눠 만들고,
#             무리 하나를 원판으로 보고 큰 행성들과 같은 간격/밀도 규칙으로 같이 배치함.
#             멤버는 그 원판 안에 흩뿌림.
#   - 문제 2: 무리 안이 알 무더기처럼 징그러움.
#             (멤버 크기가 다 비슷 + 원판에 균등하게 뿌려서 간격이 고름 + 멤버가 너무 많음)
#   - 그래서: 대장 1개 + 졸개 구조로 크기 계층을 강제 (대장/최소 ≥ CLUSTER_MIN_SIZE_RATIO),
#             멤버 거리를 대장 근처로 맞춰서 계층이 화면에서도 보이게,
#             가우시안으로 중심은 촘촘/가장자리는 듬성 + 살짝 타원형,
#             최대 멤버 수 12 -&gt; 7.
#
# Composition (based on angles as seen from the arena)
#
# The background is only ever seen from the arena (origin), so how it looks on screen
# matters more than real 3D distance. A far big planet and a near small one can look
# the same size, so size, spacing and density are all computed as angles from the arena.
#   - Apparent size (alpha) = angular radius of a planet seen from the arena
#   - Angular distance (theta) = angle between two planet directions seen from the arena
#   - Visual mass (mass) = screen area taken up (solid angle ~ pi * alpha^2)
#
# Three rules:
#   1. Size-based spacing: apparently big planets stay far apart, small ones can sit close
#   2. Density budget: already-heavy areas (near big planets) rarely accept more -&gt; even visual weight
#   3. Clusters: group some small planets and place each group like one medium planet
#
# Cluster history:
#   - First logic: when placing a small planet, randomly drop it near an already placed small planet
#   - Problem: planets kept joining the earliest cluster (rich get richer), so the screen split in two:
#              one side a big clump of clusters, the other big planets. The goal is an even mix.
#   - So: build clusters up front with sizes weighted 1/n (many small clusters, a few big ones),
#         treat each cluster as a disc and place it with the same spacing/density rules as big planets.
#         Members are scattered inside that disc.
#   - Problem 2: clusters looked creepy, like a pile of eggs
#                (similar member sizes + uniform scatter giving even gaps + too many members).
#   - So: enforce a leader + followers size hierarchy (leader/smallest &gt;= CLUSTER_MIN_SIZE_RATIO),
#         keep member distances near the leader so the hierarchy shows on screen,
#         Gaussian scatter (dense center, sparse edge) + slight ellipse,
#         max members 12 -&gt; 7.
# ---------------------------------------------------------------------------


def to_view(location, radius):
    # 아레나에서 본 방향(단위벡터)과 겉보기 각반지름
    # Direction (unit vector) and apparent angular radius as seen from the arena.
    distance = vec_length(location)
    direction = tuple(value / distance for value in location)
    alpha = math.asin(min(1.0, radius / distance))

    return direction, alpha


def view_mass(alpha):
    return math.pi * alpha * alpha


def angle_between(dir_a, dir_b):
    dot = dir_a[0] * dir_b[0] + dir_a[1] * dir_b[1] + dir_a[2] * dir_b[2]
    return math.acos(max(-1.0, min(1.0, dot)))


def in_spawn_area(direction):
    # 반구 위쪽이면서 정수리는 아닌 띠 안에 있는지
    # Whether the direction is in the band: upper hemisphere but not the zenith.
    return 0.0 &lt;= direction[2] &lt;= MAX_Z_DIR


def estimate_view_density(layout_items, locked_layout):
    # 전체 배치 단위(행성 + 무리)의 시각적 질량 합 / 스폰 영역 입체각 = 평균 밀도
    # 스폰 영역(z 0 ~ MAX_Z_DIR 띠)의 입체각 = 2π·MAX_Z_DIR
    # 배치 전이라 거리는 구간 중간값으로 추정.
    # 이걸 기준으로 삼으니 Count나 스케일을 바꿔도 자동으로 "전체 1"에 맞춰짐.
    # Average density = total visual mass of all layout items (planets + clusters) / spawn area solid angle.
    # Solid angle of the spawn band (z from 0 to MAX_Z_DIR) = 2 * pi * MAX_Z_DIR.
    # Placement hasn't happened yet, so distance is estimated as the zone's midpoint.
    # Using this as the baseline keeps the whole thing normalized even when Count or scales change.
    # 락 걸린 행성은 이미 놓여 있으니 실제 겉보기 크기로 더함
    # Locked planets are already placed, so their actual apparent size is added.
    total_mass = sum(view_mass(item["alpha_est"]) for item in layout_items)
    total_mass += sum(item["mass"] for item in locked_layout)

    return total_mass / (2.0 * math.pi * MAX_Z_DIR)


def fits_composition(direction, alpha, layout, size_spacing, density_budget):
    # layout = 이미 놓인 배치 단위 (행성 + 무리 원판)
    # 주의! has_space처럼 이미 놓인 것 전부와 비교해서 전체 O(n²).
    # layout = layout items already placed (planets + cluster discs).
    # Careful! Like has_space, this compares against everything placed, so O(n^2) overall.
    neighbor_angle = math.radians(NEIGHBOR_ANGLE)
    local_mass = 0.0

    for other in layout:
        theta = angle_between(direction, other["direction"])

        # 1. 크기별 간격: 화면에서 겹치지 않게 + 둘 다 클수록 더 벌림
        # 기하평균이라 큰+큰은 넓게, 큰+작은은 중간, 작은+작은은 거의 붙어도 됨
        # 1. Size-based spacing: no overlap on screen + more space the bigger both are.
        # Geometric mean: big+big far apart, big+small medium, small+small can almost touch.
        needed = (
            alpha + other["alpha"]
            + size_spacing * math.sqrt(alpha * other["alpha"])
        )

        if theta &lt; needed:
            return False

        # 2. 밀도 예산용: 가까울수록 무게를 많이 쳐줌 (선형 감쇠)
        # 2. For the density budget: closer neighbors weigh more (linear falloff).
        if theta &lt; neighbor_angle:
            local_mass += other["mass"] * (1.0 - theta / neighbor_angle)

    if local_mass &lt;= 0.0:
        return True

    # 선형 감쇠 커널의 면적 = π·R²/3
    # Area of the linear falloff kernel = pi * R^2 / 3.
    kernel_area = math.pi * neighbor_angle * neighbor_angle / 3.0
    local_density = local_mass / kernel_area

    # 주변이 평균보다 무거울수록 들어올 확률이 낮아짐.
    # 딱 잘라 막으면 큰 행성 근처가 텅 비니까 확률로 "조금만" 들어오게 함.
    # The heavier the neighborhood compared to average, the lower the chance to accept.
    # A hard cutoff would leave big planets' surroundings empty, so a chance lets "a few" in.
    accept_chance = density_budget / local_density

    return random.random() &lt; accept_chance


def view_clear(direction, alpha, placed):
    # 실제 행성끼리 화면에서 겹치지 않는지만 확인 (무리 멤버용)
    # Only checks that real planets don't overlap on screen (used for cluster members).
    for other in placed:
        theta = angle_between(direction, other["direction"])

        if theta &lt; alpha + other["alpha"]:
            return False

    return True


def random_cluster_size():
    # 무리 크기를 1/n 가중치로 뽑음 -&gt; 작은 무리는 많고 큰 무리는 가끔.
    # 그래야 "약간 / 엄청 / 엄청 약간" 무리가 섞여서 나옴
    # Cluster size is picked with 1/n weights -&gt; many small clusters, occasional big ones.
    # That gives a mix of slight, heavy and very slight clusters.
    sizes = list(range(CLUSTER_SIZE_MIN, CLUSTER_SIZE_MAX + 1))
    weights = [1.0 / size for size in sizes]

    return random.choices(sizes, weights=weights, k=1)[0]


def build_clusters(small_items, cluster_chance):
    # 3. 군집
    # 처음엔 "이미 놓인 작은 행성 근처에 떨구기"였는데, 먼저 생긴 무리 쪽으로
    # 계속 몰려서(부익부) 큰 무리 하나 + 큰 행성 쪽으로 2분할만 됐음.
    # 그래서 무리를 미리 크기별로 나눠 만들고, 무리 하나를 원판(중간 크기 행성 하나)처럼
    # 큰 행성들과 같은 규칙으로 배치함 -&gt; 무리/큰 거/중간 거가 골고루 섞임.
    #
    # 그 다음엔 멤버를 랜덤으로 묶었더니 크기가 다 비슷해서 알 무더기처럼 징그러웠음.
    # 그래서 무리마다 대장(남은 것 중 제일 큰 것) 1개 + 제일 작은 것 1개 + 나머지 랜덤으로
    # 묶어서 크기 계층을 만들고, 대장/최소 비율이 CLUSTER_MIN_SIZE_RATIO 이상이 되게 강제함.
    #
    # 3. Clusters
    # At first small planets were dropped near already placed small planets, but they kept
    # piling onto the earliest cluster (rich get richer), splitting the screen into one big clump + big planets.
    # So clusters are built up front by size, and each cluster is placed like a disc (one medium planet)
    # with the same rules as big planets -&gt; clusters, big and medium planets mix evenly.
    #
    # Next, grouping members at random gave similar sizes and looked creepy, like a pile of eggs.
    # So each cluster takes a leader (largest remaining) + the smallest remaining + random others,
    # building a size hierarchy, and leader/smallest is forced to be at least CLUSTER_MIN_SIZE_RATIO.
    clustered = []
    scattered = []

    for item in small_items:
        if random.random() &lt; cluster_chance:
            clustered.append(item)
        else:
            scattered.append(item)

    # 큰 것부터 정렬해두고 앞에서 대장, 뒤에서 제일 작은 것을 뽑음
    # Sort largest first: take the leader from the front and the smallest from the back.
    clustered.sort(key=lambda item: item["scale"], reverse=True)

    clusters = []

    while clustered:
        size = random_cluster_size()

        leader = clustered.pop(0)

        # 1개짜리는 무리가 아니니까 그냥 흩어진 행성으로
        # A single planet isn't a cluster, so it becomes a scattered planet.
        if not clustered:
            scattered.append(leader)
            break

        smallest = clustered.pop()

        others = random.sample(
            clustered,
            min(size - 2, len(clustered))
        )
        for item in others:
            clustered.remove(item)

        # 대장/최소 비율이 부족하면 제일 작은 것을 더 줄임.
        # 이 경우 구간의 MinScale보다 작아질 수 있음 (무리 안 계층이 우선)
        # If leader/smallest ratio is too low, shrink the smallest further.
        # It may end up below the zone's MinScale (the in-cluster hierarchy wins).
        if leader["scale"] / smallest["scale"] &lt; CLUSTER_MIN_SIZE_RATIO:
            smallest["scale"] = leader["scale"] / CLUSTER_MIN_SIZE_RATIO
            smallest["radius"] = planet_radius(smallest["scale"])

        members = [leader] + others + [smallest]

        # 멤버 수가 많을수록 넓게 퍼짐 (면적이 멤버 수에 비례하도록 sqrt)
        # More members spread wider (sqrt so the area scales with member count).
        spread = math.radians(
            CLUSTER_SPREAD_PER_MEMBER * math.sqrt(len(members))
        )

        # 살짝 타원형으로. 방향도 무리마다 랜덤
        # Slightly elliptical, with a random orientation per cluster.
        stretch = random.uniform(1.0, CLUSTER_MAX_STRETCH)

        clusters.append({
            "kind": "cluster",
            "members": members,
            "spread": spread,
            "stretch": stretch,
            "orient": random.uniform(0.0, math.pi),
            # 배치할 땐 긴 쪽 기준 원판으로 봄
            # For layout, treat it as a disc sized by the long axis.
            "alpha_est": spread * stretch,
        })

    return clusters, scattered


def cluster_offset(cluster, center, sigma):
    # 무리 중심에서 가우시안으로 떨어진 방향 하나.
    # 원판에 균등하게 뿌리면 간격이 고르게 꽉 차서 격자처럼 보임 -&gt;
    # 가우시안이면 중심은 촘촘하고 가장자리는 듬성해서 자연스러움
    # One direction offset from the cluster center with a Gaussian.
    # Uniform scatter in a disc fills it with even gaps and looks grid-like -&gt;
    # a Gaussian is dense in the center and sparse at the edge, which looks natural.
    stretch = cluster["stretch"]
    limit = cluster["alpha_est"]

    x = random.gauss(0.0, sigma) * stretch
    y = random.gauss(0.0, sigma)
    angle = math.hypot(x, y)

    # 너무 멀리 튄 건 버림 (원판 밖으로 나가면 다른 행성이랑 부딪힘)
    # Discard samples that land too far (outside the disc they'd hit other planets).
    if angle &gt; limit:
        return None

    phi = math.atan2(y, x) + cluster["orient"]

    return direction_from_axis(center, angle, phi)


def place_planet(item, placed, layout, min_gap, size_spacing, density_budget):
    zone = item["zone"]
    radius = item["radius"]

    for _ in range(MAX_PLACE_ATTEMPTS):
        location = random_location(
            zone["min_distance"],
            zone["max_distance"]
        )

        # 실제 3D로 겹치지 않는지 (물리적 최소거리)
        # No overlap in real 3D (physical minimum distance).
        if not has_space(location, radius, placed, min_gap):
            continue

        direction, alpha = to_view(location, radius)

        # 아레나에서 봤을 때 컴포지션이 괜찮은지 + 무리 멤버랑 안 겹치는지
        # Composition looks right from the arena + no overlap with cluster members.
        if not fits_composition(
            direction, alpha, layout, size_spacing, density_budget
        ):
            continue

        if not view_clear(direction, alpha, placed):
            continue

        planet = {
            "location": location,
            "scale": item["scale"],
            "radius": radius,
            "zone": item["zone_index"],
            "direction": direction,
            "alpha": alpha,
            "mass": view_mass(alpha),
        }
        placed.append(planet)
        layout.append(planet)

        return True

    unreal.log_warning(
        f"Zone {item['zone_index']}: no space for planet "
        f"(scale {item['scale']:.2f}), skipped"
    )

    return False


def place_cluster(cluster, placed, layout, min_gap, size_spacing, density_budget):
    disc = cluster["alpha_est"]
    spread = cluster["spread"]

    # 무리 중심을 먼저 잡음. 무리 전체를 원판 하나로 보고 배치
    # Pick the cluster center first, treating the whole cluster as one disc.
    for _ in range(MAX_PLACE_ATTEMPTS):
        center = random_location(1.0, 1.0)

        if fits_composition(
            center, disc, layout, size_spacing, density_budget
        ):
            break
    else:
        unreal.log_warning(
            f"No space for cluster ({len(cluster['members'])} planets), skipped"
        )
        return 0

    layout.append({
        "direction": center,
        "alpha": disc,
        "mass": view_mass(disc),
    })

    # 대장이 기준 거리. 대장 구간 중간값으로 시작해서 대장이 놓이면 그 거리로 바뀜
    # The leader sets the reference distance. Starts at the leader zone's midpoint,
    # then switches to the leader's actual distance once it's placed.
    leader_zone = cluster["members"][0]["zone"]
    cluster_distance = (
        leader_zone["min_distance"] + leader_zone["max_distance"]
    ) * 0.5

    placed_count = 0

    for member_index, item in enumerate(cluster["members"]):
        zone = item["zone"]
        radius = item["radius"]
        is_leader = member_index == 0

        # 대장은 중심 근처에, 나머지는 가우시안으로 퍼뜨림
        # Leader near the center, the rest spread out with a Gaussian.
        sigma = spread * (0.25 if is_leader else 0.5)

        for _ in range(MAX_PLACE_ATTEMPTS):
            direction = cluster_offset(cluster, center, sigma)

            if direction is None or not in_spawn_area(direction):
                continue

            # 대장은 자기 구간 거리, 나머지는 대장 거리 근처.
            # 거리가 제각각이면 멀어서 작아 보이는 게 섞여서 크기 계층이 흐려짐
            # Leader uses its own zone distance, the rest stay near the leader's distance.
            # With random distances, far members look smaller and blur the size hierarchy.
            if is_leader:
                distance = random.uniform(
                    zone["min_distance"],
                    zone["max_distance"]
                )
            else:
                distance = cluster_distance * random.uniform(
                    1.0 - CLUSTER_DEPTH_JITTER,
                    1.0 + CLUSTER_DEPTH_JITTER
                )

            location = tuple(value * distance for value in direction)

            if not has_space(location, radius, placed, min_gap):
                continue

            _, alpha = to_view(location, radius)

            if not view_clear(direction, alpha, placed):
                continue

            placed.append({
                "location": location,
                "scale": item["scale"],
                "radius": radius,
                "zone": item["zone_index"],
                "direction": direction,
                "alpha": alpha,
                "mass": view_mass(alpha),
            })
            placed_count += 1

            if is_leader:
                cluster_distance = distance

            break

    return placed_count


def place_main_planets(zones, min_gap, size_spacing, cluster_chance, locked):
    # 락 걸린 행성은 자기 구간 Count를 차지함 -&gt; Count 5에 락 1개면 4개만 새로 뽑음
    # Locked planets use up their zone's Count -&gt; Count 5 with 1 locked spawns only 4 new.
    locked_main = [planet for planet in locked if not planet["accessory"]]
    pending = []

    for zone_index, zone in enumerate(zones, start=1):
        locked_count = sum(
            1 for planet in locked_main if planet["zone"] == zone_index
        )
        count = max(0, zone["count"] - locked_count)

        unreal.log(
            f"Zone {zone_index}: distance "
            f"{zone['min_distance']:.0f} ~ {zone['max_distance']:.0f}, "
            f"scale {zone['min_scale']} ~ {zone['max_scale']}, "
            f"count {count} (+{locked_count} locked)"
        )

        mid_distance = (zone["min_distance"] + zone["max_distance"]) * 0.5

        for _ in range(count):
            scale = random.uniform(
                zone["min_scale"],
                zone["max_scale"]
            )
            radius = planet_radius(scale)

            pending.append({
                "kind": "planet",
                "scale": scale,
                "radius": radius,
                "alpha_est": math.asin(min(1.0, radius / mid_distance)),
                "zone_index": zone_index,
                "zone": zone,
            })

    if not pending:
        return list(locked)

    pending.sort(key=lambda item: item["alpha_est"], reverse=True)

    # 겉보기 크기가 하위 절반이면 "작은 행성" (군집 대상)
    # The bottom half by apparent size counts as "small planets" (cluster candidates).
    half = len(pending) // 2
    big_items = pending[:half]
    small_items = pending[half:]

    clusters, scattered = build_clusters(small_items, cluster_chance)

    unreal.log(
        f"Clusters: {len(clusters)} "
        f"(sizes {[len(c['members']) for c in clusters]})"
    )

    # 행성이랑 무리를 한 줄로 세워서 겉보기로 큰 것부터 배치.
    # 큰 게 먼저 자리를 넓게 잡아야 자리 못 찾는 경우가 줄어듦
    # Line up planets and clusters together and place them from apparently largest down.
    # Letting big items claim space first means fewer items fail to find a spot.
    layout_items = big_items + scattered + clusters
    layout_items.sort(key=lambda item: item["alpha_est"], reverse=True)

    density_budget = (
        estimate_view_density(layout_items, locked_main) * DENSITY_TOLERANCE
    )

    # 락 걸린 행성을 먼저 넣어두면 간격/밀도/겹침 규칙이 걔들까지 포함해서 적용됨.
    # 악세사리는 컴포지션 단위가 아니라서 placed(3D 간격, 화면 겹침)에만 넣음
    # Seeding locked planets first makes the spacing/density/overlap rules include them.
    # Accessories aren't composition items, so they only go into placed (3D spacing, on-screen overlap).
    placed = list(locked)       # 실제 행성 (3D 간격, 화면 겹침 검사용) / Real planets (3D spacing, on-screen overlap checks)
    layout = list(locked_main)  # 배치 단위 = 행성 + 무리 원판 (컴포지션 검사용) / Layout items = planets + cluster discs (composition checks)

    for item in layout_items:
        if item["kind"] == "cluster":
            place_cluster(
                item, placed, layout, min_gap, size_spacing, density_budget
            )
        else:
            place_planet(
                item, placed, layout, min_gap, size_spacing, density_budget
            )

    unreal.log(
        f"Main planets: {len(placed) - len(locked)} / {len(pending)} placed "
        f"(+{len(locked)} locked)"
    )

    return placed


def place_accessory_planets(placed, accessory, min_gap):
    # 아레나(원점)에서 봤을 때 악세사리 행성이 보여야 하니까
    # 기준 행성 -&gt; 아레나 방향을 축으로 한 범위 안에만 붙임.
    # 아무 방향에나 붙이면 기준 행성 뒤쪽에 숨어서 아레나에선 안 보일 수 있음.
    # 처음엔 원뿔(0~30도)이었는데, 가운데 쪽에 붙으면 아레나-악세-기준 행성이
    # 일직선이 돼서 악세가 기준 행성 정면에 겹쳐 보여서 못생김.
    # 그래서 가운데를 뺀 링(45~75도)으로 바꿈 -&gt; 앞쪽이라 보이면서 옆으로 비껴 보임.
    # Accessory planets must be visible from the arena (origin),
    # so they only attach within a range around the parent -&gt; arena direction.
    # Attached in any direction, they could hide behind the parent and never be seen from the arena.
    # At first this was a cone (0-30 degrees), but near the center arena, accessory and parent
    # lined up, so the accessory overlapped the parent's front and looked ugly.
    # So it became a ring with the center cut out (45-75 degrees) -&gt; still in front, but offset to the side.
    # 락 걸린 행성은 지금 모습 그대로 두려고 새 악세사리를 안 붙임
    # Locked planets stay exactly as they are, so they get no new accessory.
    parents = [
        planet for planet in placed
        if not planet.get("locked")
        and planet["scale"] &gt;= accessory["parent_min_scale"]
    ]

    accessories = []

    for parent in parents:
        if random.random() &gt;= accessory["chance"]:
            continue

        scale = random.uniform(
            accessory["min_scale"],
            accessory["max_scale"]
        )
        radius = planet_radius(scale)

        # 기준 행성 표면에서 gap만큼 띄워서 붙임
        # Attach \`gap\` away from the parent's surface.
        offset = parent["radius"] + accessory["gap"] + radius

        parent_distance = vec_length(parent["location"])
        to_arena = tuple(
            -value / parent_distance for value in parent["location"]
        )

        for _ in range(MAX_PLACE_ATTEMPTS):
            direction = random_direction_in_ring(
                to_arena,
                ACCESSORY_RING_MIN_ANGLE,
                ACCESSORY_RING_MAX_ANGLE
            )

            location = tuple(
                parent["location"][i] + direction[i] * offset
                for i in range(3)
            )

            # 반구 아래나 정수리로 가면 안 보이니까 다시 뽑기
            # Below the hemisphere or at the zenith it won't be seen, so re-roll.
            location_length = vec_length(location)

            if not in_spawn_area(
                tuple(value / location_length for value in location)
            ):
                continue

            # 기준 행성은 gap으로 이미 띄웠으니 검사에서 제외
            # The parent is already spaced by \`gap\`, so skip it in the check.
            if has_space(
                location, radius, placed + accessories, min_gap,
                ignore=parent
            ):
                accessories.append({
                    "location": location,
                    "scale": scale,
                    "radius": radius,
                })
                break
        else:
            unreal.log_warning(
                f"No space for accessory next to planet "
                f"(scale {parent['scale']:.2f}), skipped"
            )

    unreal.log(
        f"Accessory: {len(accessories)} spawned "
        f"({len(parents)} parent candidates)"
    )

    return accessories


def next_free_label(prefix, used_labels):
    # 락 걸린 행성이 BG_Planet_3 같은 라벨을 이미 쓰고 있을 수 있어서 빈 번호를 찾음
    # A locked planet may already use a label like BG_Planet_3, so find a free number.
    index = 0

    while f"{prefix}{index}" in used_labels:
        index += 1

    label = f"{prefix}{index}"
    used_labels.add(label)

    return label


def load_planet_class():
    planet_class = unreal.EditorAssetLibrary.load_blueprint_class(
        PLANET_BP_PATH
    )

    if not planet_class:
        raise RuntimeError(
            f"Could not load planet BP: {PLANET_BP_PATH} "
            f"(StaticMeshActor parent + Instance Editable bool '{LOCK_PROPERTY}')"
        )

    return planet_class


def spawn_planet(actor_subsystem, planet_class, mesh, location, scale, label, tags):
    planet = actor_subsystem.spawn_actor_from_class(
        planet_class,
        unreal.Vector(*location),
        unreal.Rotator()
    )

    planet.static_mesh_component.set_static_mesh(mesh)

    planet.set_actor_scale3d(
        unreal.Vector(
            scale,
            scale,
            scale
        )
    )

    planet.set_actor_label(label)
    planet.set_editor_property("tags", [unreal.Name(tag) for tag in tags])


def actor_tags(actor):
    return [str(tag) for tag in actor.get_editor_property("tags")]


def is_planet_actor(actor):
    return actor.get_actor_label().startswith(PLANET_LABEL_PREFIX)


def is_locked(actor):
    # BP 행성은 Details의 Locked 체크박스, 예전 StaticMeshActor 행성은 BG_Locked 태그
    # BP planets use the Locked checkbox in Details, old StaticMeshActor planets use the BG_Locked tag.
    try:
        if actor.get_editor_property(LOCK_PROPERTY):
            return True
    except Exception:
        pass

    return LOCK_TAG in actor_tags(actor)


def set_locked(actor, locked):
    # 체크박스가 있으면 체크박스로, 없으면 태그로. 풀 때는 둘 다 지움
    # Use the checkbox if there is one, otherwise the tag. Unlocking clears both.
    tags = [tag for tag in actor_tags(actor) if tag != LOCK_TAG]

    try:
        actor.set_editor_property(LOCK_PROPERTY, locked)
    except Exception:
        if locked:
            tags.append(LOCK_TAG)

    return tags


def is_accessory_actor(actor):
    return (
        ACCESSORY_TAG in actor_tags(actor)
        or actor.get_actor_label().startswith(ACCESSORY_LABEL_PREFIX)
    )


def guess_zone(zones, location, scale):
    # Zone 태그가 없는 행성(락 기능 전에 만든 것)은 스케일/거리가 제일 잘 맞는 구간으로 침.
    # 무리의 제일 작은 멤버는 MinScale 밑으로 줄어들 수 있어서 딱 맞는 구간이 없을 수도 있음
    # Planets without a zone tag (made before locking existed) get the zone their scale/distance fits best.
    # A cluster's smallest member may be shrunk below MinScale, so an exact match may not exist.
    distance = vec_length(location)

    def miss(value, low, high):
        if value &lt; low:
            return (low - value) / max(low, 1e-6)
        if value &gt; high:
            return (value - high) / max(high, 1e-6)
        return 0.0

    scores = [
        miss(scale, zone["min_scale"], zone["max_scale"])
        + miss(distance, zone["min_distance"], zone["max_distance"])
        for zone in zones
    ]

    return scores.index(min(scores)) + 1


def actor_zone(actor, zones, location, scale):
    for tag in actor_tags(actor):
        if tag.startswith(ZONE_TAG_PREFIX):
            try:
                return int(tag[len(ZONE_TAG_PREFIX):])
            except ValueError:
                pass

    return guess_zone(zones, location, scale)


def collect_locked_planets(zones):
    # 락 걸린 행성을 배치 로직에서 쓰는 형태로 읽어옴
    # Read locked planets into the shape the placement logic uses.
    actor_subsystem = unreal.get_editor_subsystem(
        unreal.EditorActorSubsystem
    )

    locked = []

    for actor in actor_subsystem.get_all_level_actors():
        if not is_planet_actor(actor) or not is_locked(actor):
            continue

        loc = actor.get_actor_location()
        location = (loc.x, loc.y, loc.z)
        scale = actor.get_actor_scale3d().x
        radius = planet_radius(scale)
        direction, alpha = to_view(location, radius)
        accessory = is_accessory_actor(actor)

        locked.append({
            "location": location,
            "scale": scale,
            "radius": radius,
            "zone": None if accessory else actor_zone(
                actor, zones, location, scale
            ),
            "direction": direction,
            "alpha": alpha,
            "mass": view_mass(alpha),
            "locked": True,
            "accessory": accessory,
        })

    return locked


def generate_planets():
    settings = get_settings()

    zones = read_zones(settings)
    accessory = read_accessory_settings(settings)
    min_gap = settings.get_editor_property("MinGap")
    size_spacing = settings.get_editor_property("SizeSpacing")
    cluster_chance = settings.get_editor_property("ClusterChance")

    locked = collect_locked_planets(zones)

    placed = place_main_planets(
        zones, min_gap, size_spacing, cluster_chance, locked
    )
    accessories = place_accessory_planets(placed, accessory, min_gap)

    actor_subsystem = unreal.get_editor_subsystem(
        unreal.EditorActorSubsystem
    )

    planet_class = load_planet_class()
    mesh = unreal.load_asset("/Engine/BasicShapes/Sphere")

    used_labels = {
        actor.get_actor_label()
        for actor in actor_subsystem.get_all_level_actors()
        if is_planet_actor(actor)
    }

    # 락 걸린 행성은 이미 레벨에 있으니 새로 뽑힌 것만 스폰
    # Locked planets are already in the level, so only spawn the new ones.
    for planet in placed:
        if planet.get("locked"):
            continue

        label = next_free_label(PLANET_LABEL_PREFIX, used_labels)

        spawn_planet(
            actor_subsystem, planet_class, mesh,
            planet["location"], planet["scale"],
            label,
            [f"{ZONE_TAG_PREFIX}{planet['zone']}"]
        )

        unreal.log(
            f"{label} (zone {planet['zone']}): "
            f"scale = {planet['scale']}"
        )

    # 라벨이 BG_Planet_로 시작해야 clear_planets에서 같이 지워짐
    # Labels must start with BG_Planet_ so clear_planets removes them too.
    for planet in accessories:
        spawn_planet(
            actor_subsystem, planet_class, mesh,
            planet["location"], planet["scale"],
            next_free_label(ACCESSORY_LABEL_PREFIX, used_labels),
            [ACCESSORY_TAG]
        )


def clear_planets():
    # 락 걸린 행성은 남김
    # Locked planets are kept.
    actor_subsystem = unreal.get_editor_subsystem(
        unreal.EditorActorSubsystem
    )

    kept = 0

    for actor in actor_subsystem.get_all_level_actors():
        if not is_planet_actor(actor):
            continue

        if is_locked(actor):
            kept += 1
            continue

        actor_subsystem.destroy_actor(actor)

    if kept:
        unreal.log(f"Clear: kept {kept} locked planets")


def set_selected_locked(locked):
    # 아웃라이너/뷰포트에서 선택한 행성에 락을 걸거나 풂.
    # 락 걸 때 Zone 태그가 없으면(예전에 만든 행성) 추정한 구간을 태그로 박아둠
    # Lock or unlock the planets selected in the outliner/viewport.
    # When locking a planet with no zone tag (made earlier), the guessed zone is written as a tag.
    actor_subsystem = unreal.get_editor_subsystem(
        unreal.EditorActorSubsystem
    )

    actors = [
        actor for actor in actor_subsystem.get_selected_level_actors()
        if is_planet_actor(actor)
    ]

    if not actors:
        unreal.log_warning("No BG_Planet_ actors selected")
        return

    zones = read_zones(get_settings()) if locked else None

    with unreal.ScopedEditorTransaction(
        "Lock Planets" if locked else "Unlock Planets"
    ):
        for actor in actors:
            actor.modify()

            tags = set_locked(actor, locked)

            if locked:
                has_zone = any(tag.startswith(ZONE_TAG_PREFIX) for tag in tags)

                if not has_zone and not is_accessory_actor(actor):
                    loc = actor.get_actor_location()
                    zone = guess_zone(
                        zones,
                        (loc.x, loc.y, loc.z),
                        actor.get_actor_scale3d().x
                    )
                    tags.append(f"{ZONE_TAG_PREFIX}{zone}")

            actor.set_editor_property(
                "tags", [unreal.Name(tag) for tag in tags]
            )

    unreal.log(
        f"{'Locked' if locked else 'Unlocked'} {len(actors)} planets"
    )


def lock_selected():
    set_selected_locked(True)


def unlock_selected():
    set_selected_locked(False)</code></pre></div></details></section>`
        }
      ]
    },
    source: null,
    localized: {
      ko: {
        subtitle: "우주 액션 — 제작 중",
        overview: "Unreal Engine으로 만드는 팀 프로젝트로, 현재 제작 중입니다. 게임플레이 코어와 테크니컬 아트를 맡아, 코드를 몰라도 아티스트가 직접 다룰 수 있는 에디터 툴 — DataAsset 기반 우주 배경 자동 배치 툴 — 을 만들고 있고, 함께 작업하는 아티스트 2명이 실제로 쓰는 걸 목표로 하고 있습니다.",
        features: [
          "개수·거리·스케일·클러스터링까지 아티스트가 편집 가능한 DataAsset으로 노출한, 배경 행성을 절차적으로 배치하는 아티스트용 에디터 툴 (파이썬 코드 접근 불필요)",
          "아티스트가 직접 하늘 구성을 재생성/초기화하며 반복 작업할 수 있는 원클릭 generate/clear 워크플로우",
          "게임플레이 코어 시스템",
          "Unreal Engine 기반, 아티스트 2명과 협업"
        ],
        experience: {
          role: "게임플레이 프로그래머 / 테크니컬 아트 — 툴",
          period: "2026년 · 팀 프로젝트 (제작 중)",
          description: "Unreal Engine 팀 프로젝트에서 게임플레이 코어와 테크니컬 아트를 담당하며, 함께 작업하는 아티스트 2명이 코드 없이 직접 쓸 수 있는 에디터 툴 — 아레나 시점의 화면 구도를 고려한 우주 배경 자동 배치 시스템 — 을 제작하고 있습니다."
        },
        gallery: {
          title: "Planet Lock 워크플로우 & 게임플레이 — 작업 중",
          subtitle: "Planet Lock 영상은 아티스트가 선택한 행성을 고정한 채 나머지 배경만 다시 생성하는 흐름을 보여줍니다. 게임플레이 영상은 사용 예시로, 툴로 생성한 우주 배경이 실제 게임 안에서 보이는 모습입니다. 게임은 아직 제작 중이며, 이 영상은 최종 게임 아트가 아닌 에디터 워크플로우 기록입니다.",
          images: []
        },
        contributions: {
          sections: [
            {
              title: "우주 배경 자동 배치 툴",
              category: "Technical",
              htmlContent: `<section><h2>위치가 아니라 "어떻게 보이는가"를 기준으로 행성을 배치하는 에디터 툴</h2><p class="case-study-lede">저를 위해서가 아니라 함께 작업하는 아티스트 2명을 위해 만든 툴입니다 — 개수·스케일·거리·군집 같은 모든 조절값이 아티스트가 직접 편집하는 DataAsset 하나에 들어있고, 원클릭 generate/clear로 하늘 구성을 스스로 재생성해볼 수 있습니다. 우주 배경은 항상 아레나라는 고정된 한 지점에서만 보이기 때문에, 실제 3D 좌표 대신 겉보기 크기와 화면상 간격을 기준으로 배치 로직을 설계했고, 아티스트들과 함께 에디터에서 결과를 보며 구도와 군집 규칙을 반복적으로 다듬었습니다.</p>${renderEngineeringCaseStudy({labels:{systemMap:"시스템 구조",problem:"문제",decision:"결정",implementation:"구현",verification:"검증",keyDecisions:"핵심 결정",decisionLog:"결정 로그",decisionTitle:"왜 이렇게 구조화했는가",system:"시스템",choice:"선택",why:"이유",tradeoff:"트레이드오프",codeEvidence:"코드 근거",viewSource:"소스 보기 ↗"},metrics:[{icon:"◉",value:"뷰 공간",label:"구도 계산 (3D 거리 아님)"},{icon:"⌘",value:"DataAsset",label:"아티스트가 직접 튜닝"},{icon:"◈",value:"대장/졸개",label:"군집 크기 계층"},{icon:"↻",value:"멱등성",label:"재생성/정리, 반복 실행 가능"}],architecture:[{title:"설정 DataAsset",detail:"아티스트가 조절 가능한 구간·군집·악세서리 파라미터"},{title:"구간·군집 계획",detail:"개수/크기를 먼저 정하고 군집을 하나의 '원판'으로 미리 구성"},{title:"뷰 공간 구도 배치",detail:"겉보기 크기가 큰 것부터, 간격/밀도는 아레나 기준 각도로 검사"},{title:"악세서리 배치",detail:"조건을 만족하는 기준 행성에 링 제한을 걸어 위성 부착"},{title:"스폰 / 정리",detail:"라벨 프리픽스 기반으로 멱등적으로 스폰·정리"}],cases:[{label:"구도",title:"실제 거리 대신 겉보기 크기로 배치하기",problem:"배경은 항상 고정된 아레나 시점에서만 보이기 때문에 실제 3D 거리는 화면에 실제로 보이는 것과 일치하지 않습니다 — 멀리 있는 큰 행성과 가까운 작은 행성이 화면에선 같은 크기로 보일 수 있고, 단순 랜덤 배치는 균형이 안 맞는 하늘을 만들었습니다.",decision:"겉보기 크기, 간격, 주변 밀도를 전부 3D 위치가 아니라 아레나 기준 각도·입체각으로 계산합니다.",implementation:"to_view()가 행성의 위치·반지름을 겉보기 각반지름으로 변환하고, fits_composition()이 기하평균 기반 간격 규칙(큰 것끼리는 멀리, 작은 것끼리는 가까이 가능)과 확률적 밀도 예산(이미 붐비는 영역은 잘 안 들어오되, 딱 막지는 않아 빈 공간이 생기지 않게)을 적용합니다.",verification:"툴 자체의 재생성/정리 기능으로 에디터에서 직접 반복 확인하며, 하늘이 한쪽으로 쏠리지 않고 고르게 느껴질 때까지 다듬었습니다."},{label:"반복 개선",title:"커브로는 표현할 수 없었던 구도 요구사항",problem:"처음엔 ScaleDistribution 커브로 크기를 샘플링했는데, 커브로는 '이 크기대는 몇 개, 이 거리쯤'을 표현하기 어려웠고, 전체 거리를 그래디언트 스톱처럼 비율로 나누는 것도 블루프린트 DataAsset에서는 한 칸을 바꿀 때 나머지가 자동으로 재정규화되지 않아 합이 1로 안 맞았습니다.",decision:"커브 대신 명시적인 ScaleZones 배열로 바꿨습니다 — 각 구간마다 개수·스케일 범위·거리 범위를 직접 지정하고, 전체 범위를 나누는 대신 구간끼리 겹치는 것도 허용했습니다.",implementation:"블루프린트 스트럭트 멤버 이름이 'Count_2_ABCD...'처럼 맹글링되는 문제도 만나서, get_struct_value()가 get_editor_property() 실패 시 export_text()를 직접 파싱하는 폴백을 추가했습니다.",verification:"매 실행마다 구간별 범위와 개수를 Output Log에 남겨서, DataAsset을 튜닝하는 아티스트가 실제로 뭐가 읽혔는지 바로 확인할 수 있게 했습니다."},{label:"군집화",title:"'부익부' 뭉침과 균일한 군집 문제 해결",problem:"처음 군집 로직은 작은 행성을 이미 놓인 작은 행성 근처에 확률적으로 떨어뜨렸는데, 이게 한쪽으로 계속 몰려서(부익부) 큰 덩어리 하나와 흩어진 큰 행성들로만 나뉘었습니다. 이걸 고친 뒤에도, 크기가 비슷한 멤버들을 원판 안에 고르게 뿌리니 알 무더기처럼 부자연스러워 보였습니다.",decision:"군집을 1/n 가중치로 미리 크기별로 만들어(작은 군집은 많고 큰 군집은 가끔) 각 군집을 큰 행성 하나와 같은 간격/밀도 규칙을 적용받는 원판으로 배치합니다. 그리고 군집 안에서는 멤버 크기를 똑같이 두지 않고 대장+졸개 크기 계층을 강제합니다.",implementation:"build_clusters()가 대장(가장 큰 것)과 가장 작은 멤버를 뽑아 최소 크기 비율을 강제하고, cluster_offset()이 원판에 균등하게 뿌리는 대신 가우시안(중심은 촘촘, 가장자리는 듬성)으로 멤버를 흩뿌리며 군집마다 살짝 타원형으로 늘립니다.",verification:"에디터에서 시각적으로 확인한 뒤 군집 최대 인원을 12명에서 7명으로 줄였습니다(너무 빽빽해 보여서)."},{label:"락",title:"반복 작업 중 마음에 드는 행성을 락으로 고정하기",problem:"재생성할 때마다 하늘 전체가 바뀐어서, 배치 결과의 90%가 마음에 들어도 나머지 10%를 고쿄오려면 전부 다시 굴려야 했습니다 — 특정 행성만 그대로 두고 나머지만 다시 섞을 방법이 없었습니다.",decision:"행성별 Locked 플래그를 추가했습니다. 락 걸린 행성은 Clear에서 지워지지 않고, 다음 Generate에 이미 배치된 행성으로 다시 들어가서 새 행성들이 그 자리를 피해 배치됩니다.",implementation:"최근에 만든 행성은 Blueprint의 Instance Editable bool(Details 패널의 체크박스)로 Locked를 저장하지만, 그 전에 StaticMeshActor로 만든 예전 행성은 해당 프로퍼티가 없어서 is_locked()/set_locked()가 프로퍼티 조회 실패 시 BG_Locked 태그로 대체합니다. 락 걸린 행성은 BG_Zone_N 태그도 같이 가지고 있어서, 나중에 Generate할 때 어느 구간(Zone)의 Count에서 뼼야 할지 알 수 있습니다 — Zone 기능이 생기기 전에 락 걸린 행성은 태그가 없으므로, guess_zone()이 스케일/거리 범위가 가장 잘 맞는 구간을 추정합니다.",verification:"Lock/Unlock은 되돌릴 수 있는 에디터 트랜잭션 하나로 실행되며 몇 개를 (언)락했는지 로그로 남기고, Clear도 몇 개의 락 걸린 행성을 유지했는지 로그로 남겨서 아티스트가 락 걸은 행성이 사라지지 않았는지 확인할 수 있습니다."}],decisions:[{system:"배경 배치",choice:"뷰 공간 구도(각도/입체각) 계산",reason:"고정된 카메라 한 지점에서 실제로 보이는 것과 일치시키기 위해.",tradeoff:"단순 3D 스캐터보다 계산이 복잡함 — 배치마다 O(n²) 구도 검사."},{system:"크기/개수 제어",choice:"ScaleZones DataAsset 배열",reason:"Python 코드를 건드리지 않고 구간별로 아티스트가 직접 튜닝 가능.",tradeoff:"구간끼리 거리를 깔끔하게 나누지 않고 겹칠 수 있음."},{system:"작은 행성",choice:"미리 구성한 대장/졸개 군집",reason:"균일한 산포 대신 자연스럽고 불균일한 그룹으로 보임.",tradeoff:"메인 배치 루프 전에 별도 군집화 단계가 추가됨."},{system:"악세서리 위성",choice:"전체 원뿔이 아닌 링 제한 방향",reason:"기준 행성에 숨거나 겹치지 않고 항상 옆으로 보이게 하기 위해.",tradeoff:"배치 가능 영역이 좁아져 자리 재시도가 늘어남."}],note:"결과: 이 정도 구도 판단(아레나라는 고정 시점에서 겉보기 크기와 간격을 매번 눈으로 확인)까지 신경 써서 행성을 손으로 배치하려면 한 번 배치할 때마다 몇 시간씩 걸립니다 — 이 툴을 쓰면 generate/clear 한 번 클릭으로 끝납니다. (비공개 Perforce 저장소라 링크할 수 있는 공개 저장소가 없어서, 위 케이스 스터디는 실제 구현과 코드 내 설계 노트를 바탕으로 직접 설명한 것입니다.)"})}<details class="technical-deep-dive full-source"><summary><span>코드</span><strong>전체 소스 보기 — space_background.py</strong></summary><div class="technical-deep-dive-body"><p>비공개 Perforce 저장소에서 그대로 붙여넣은 코드입니다 (링크할 수 있는 공개 저장소가 없음) — 위에서 설명한 스크립트의 현재 버전 그대로입니다.</p><pre><code>import unreal
import random
import math

SETTINGS_PATH = "/Game/Editor/DA_SpaceBackgroundSettings"

# /Engine/BasicShapes/Sphere 의 반지름 (스케일 1 기준)
# Radius of /Engine/BasicShapes/Sphere at scale 1.
SPHERE_RADIUS = 50.0

# 정수리(바로 위)에서 이 각도 안쪽은 비워둠.
# 아레나에서 시선이 주로 수평~비스듬히 가니까 머리 위에 있는 행성은 거의 안 보임.
# 0이면 반구 전체, 30이면 머리 위 30도 원은 비움
# Leave this angle around the zenith (straight up) empty.
# From the arena the view is mostly horizontal to diagonal, so planets overhead are rarely seen.
# 0 = whole hemisphere, 30 = keep a 30-degree circle overhead empty.
ZENITH_EXCLUDE_ANGLE = 30.0

# 스폰 가능한 방향의 z 최대값 (ZENITH_EXCLUDE_ANGLE에서 계산)
# Max z of a spawn direction (derived from ZENITH_EXCLUDE_ANGLE).
MAX_Z_DIR = math.cos(math.radians(ZENITH_EXCLUDE_ANGLE))

# 최소거리/컴포지션 못 맞출 때 위치 다시 뽑는 횟수
# How many times to re-roll a position when spacing/composition checks fail.
MAX_PLACE_ATTEMPTS = 50

# 밀도 계산할 때 "주변"으로 보는 범위 (아레나에서 본 각도)
# Neighborhood size for the density check (angle as seen from the arena).
NEIGHBOR_ANGLE = 20.0

# 평균 밀도의 몇 배까지 여유를 줄지. 낮추면 더 균등, 높이면 더 뭉침 허용
# How far above average density a spot may go. Lower = more even, higher = allows more clumping.
DENSITY_TOLERANCE = 1.5

# 무리 하나에 들어가는 작은 행성 수 범위 (작은 무리가 더 자주 나옴)
# 12까지 뒀더니 알 무더기처럼 빽빽해서 징그러움 -&gt; 7로 줄임
# Range of small planets per cluster (small clusters appear more often).
# Up to 12 looked packed and creepy, like a pile of eggs -&gt; reduced to 7.
CLUSTER_SIZE_MIN = 2
CLUSTER_SIZE_MAX = 7

# 무리가 퍼지는 범위 = 이 값 × √멤버수 (아레나에서 본 각도)
# 2개면 약 3.5도, 7개면 약 6.6도
# Cluster spread = this value x sqrt(member count) (angle as seen from the arena).
# About 3.5 degrees for 2 members, about 6.6 degrees for 7.
CLUSTER_SPREAD_PER_MEMBER = 2.5

# 무리 안에서 대장(가장 큰 것) / 가장 작은 것 스케일 비율 최소값
# 크기가 다 비슷하면 징그러워서 크기 계층을 강제함
# Minimum scale ratio between the leader (largest) and the smallest member of a cluster.
# Same-sized members look creepy, so a size hierarchy is enforced.
CLUSTER_MIN_SIZE_RATIO = 3.0

# 무리 멤버 거리를 대장 거리의 ±몇 %로 맞출지.
# 거리가 제각각이면 멀어서 작아 보이는 게 섞여서 크기 계층이 화면에서 흐려짐
# Keep cluster members within +/- this fraction of the leader's distance.
# With random distances, far members look smaller and the size hierarchy gets blurred on screen.
CLUSTER_DEPTH_JITTER = 0.1

# 무리 모양을 최대 몇 배까지 길쭉하게 늘릴지 (1 = 원형)
# 원형이면 격자처럼 고르게 보여서 살짝 타원으로 찌그러뜨림
# Max stretch of a cluster's shape (1 = circle).
# A perfect circle looks grid-like and even, so clusters are squashed into slight ellipses.
CLUSTER_MAX_STRETCH = 1.8

# 악세사리 행성이 붙는 링의 각도 범위 (기준 행성 -&gt; 아레나 방향 기준)
# 기존엔 원뿔(0~30도)이었는데 아레나-악세-기준 행성이 일자로 서서 못생겨서
# 가운데를 뺀 링으로 바꿈
# MIN을 키우면 옆으로 더 벌어지고, MAX가 90에 가까우면 기준 행성 옆면까지 감
# Angle range of the ring where accessory planets attach (around the parent -&gt; arena direction).
# It used to be a cone (0-30 degrees), but arena, accessory and parent lined up and looked ugly,
# so the center was cut out, making it a ring.
# Raising MIN pushes accessories further to the side; MAX near 90 reaches the parent's side.
ACCESSORY_RING_MIN_ANGLE = 45.0
ACCESSORY_RING_MAX_ANGLE = 75.0

# 이 라벨로 시작하는 액터만 배경 행성으로 봄
# Only actors whose label starts with this count as background planets.
PLANET_LABEL_PREFIX = "BG_Planet_"
ACCESSORY_LABEL_PREFIX = "BG_Planet_Acc_"

# 행성 액터 BP. StaticMeshActor를 부모로 하고 Instance Editable bool 변수 "Locked"를 가짐
# -&gt; 행성 클릭하면 Details에 Locked 체크박스가 뜸
# Planet actor BP. Parent is StaticMeshActor, with an Instance Editable bool variable "Locked"
# -&gt; clicking a planet shows a Locked checkbox in Details.
PLANET_BP_PATH = "/Game/Editor/BP_BGPlanet"
LOCK_PROPERTY = "Locked"

# 락 걸린 행성은 clear에서 안 지워지고, 다음 generate에 "이미 놓인 행성"으로 들어감
# BG_Locked 태그는 BP 전에 StaticMeshActor로 만든 행성용 (체크박스가 없으니 태그로 락)
# Zone 태그는 락 걸린 행성이 어느 구간 Count를 차지하는지 알려줌 (BG_Zone_1, BG_Zone_2 ...)
# Locked planets survive clear and join the next generate as "already placed planets".
# The BG_Locked tag is for planets made as StaticMeshActors before the BP (no checkbox, so a tag locks them).
# The zone tag tells which zone's Count a locked planet uses up (BG_Zone_1, BG_Zone_2 ...).
LOCK_TAG = "BG_Locked"
ACCESSORY_TAG = "BG_Accessory"
ZONE_TAG_PREFIX = "BG_Zone_"


def get_settings():
    settings = unreal.load_asset(SETTINGS_PATH)

    if not settings:
        raise RuntimeError(
            f"Could not load settings asset: {SETTINGS_PATH}"
        )

    return settings


def get_struct_value(struct, name):
    # BP 스트럭쳐는 내부 이름이 "Count_2_ABCD..." 식으로 붙어서
    # get_editor_property가 실패하면 export_text에서 직접 찾음
    # Blueprint struct members get internal names like "Count_2_ABCD...",
    # so if get_editor_property fails, look the value up in export_text.
    try:
        return struct.get_editor_property(name)
    except Exception:
        pass

    text = struct.export_text().strip("()")

    for pair in text.split(","):
        key, _, value = pair.partition("=")

        if key == name or key.startswith(name + "_"):
            return float(value)

    raise RuntimeError(f"Could not find '{name}' in {text}")


# 처음엔 MinDistance~MaxDistance 전체에 랜덤 배치하고,
# 크기는 ScaleDistribution 커브를 가중치로 샘플링해서 비율을 정했음.
# 근데 커브로는 "이 크기대는 몇 개, 어느 거리쯤" 같은 커스텀이 너무 어려워서
# ScaleZones 배열로 구간을 나누는 방식으로 바꿈.
# 각 구간마다 개수(Count), 스케일 범위(MinScale~MaxScale),
# 거리 범위(MinDistance~MaxDistance)를 직접 지정.
# (중간에 전체 거리를 그래디언트 스톱처럼 비율(0~1)로 나누려고 했는데,
#  블루프린트 DataAsset에선 한 칸 바꿀 때 나머지가 자동으로 조정돼서
#  총합이 1로 맞춰지게 할 수가 없었음.
#  그래서 그냥 구간마다 최소~최대 거리를 직접 두는 걸로 바꿈. 구간끼리 겹쳐도 됨.)
# Originally planets were placed randomly across MinDistance-MaxDistance,
# and sizes were sampled using the ScaleDistribution curve as weights.
# But a curve made it too hard to control things like "this many of this size, at about this distance",
# so it was replaced with a ScaleZones array.
# Each zone sets its own count (Count), scale range (MinScale-MaxScale)
# and distance range (MinDistance-MaxDistance).
# (In between, we tried splitting the total distance by ratios (0-1) like gradient stops,
#  but a Blueprint DataAsset can't auto-adjust the other entries when one changes,
#  so the ratios couldn't be kept summing to 1.
#  So each zone just gets its own min-max distance instead. Zones may overlap.)
def read_zones(settings):
    zones = []

    for zone in settings.get_editor_property("ScaleZones"):
        zones.append({
            "count": int(get_struct_value(zone, "Count")),
            "min_scale": get_struct_value(zone, "MinScale"),
            "max_scale": get_struct_value(zone, "MaxScale"),
            "min_distance": get_struct_value(zone, "MinDistance"),
            "max_distance": get_struct_value(zone, "MaxDistance"),
        })

    if not zones:
        raise RuntimeError("ScaleZones is empty")

    return zones


def read_accessory_settings(settings):
    return {
        "parent_min_scale": settings.get_editor_property("AccessoryParentMinScale"),
        "min_scale": settings.get_editor_property("AccessoryMinScale"),
        "max_scale": settings.get_editor_property("AccessoryMaxScale"),
        "gap": settings.get_editor_property("AccessoryGap"),
        "chance": settings.get_editor_property("AccessoryChance"),
    }


def vec_length(v):
    return math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2])


def vec_distance(a, b):
    return vec_length((a[0] - b[0], a[1] - b[1], a[2] - b[2]))


def planet_radius(scale):
    return SPHERE_RADIUS * scale


def has_space(location, radius, placed, min_gap, ignore=None):
    # 모든 행성과 표면끼리 min_gap 이상 떨어져 있는지
    # 주의! 배치할 때마다 이미 놓인 행성 전부와 비교해서 전체 O(n²).
    # 지금 개수에선 문제없지만, 개수가 확 늘어나면 그리드/공간분할로 바꿔야 함.
    # Checks that the surface is at least min_gap away from every planet.
    # Careful! Each placement compares against every placed planet, so O(n^2) overall.
    # Fine at the current count, but switch to a grid/spatial partition if the count grows a lot.
    for other in placed:
        if other is ignore:
            continue

        needed = radius + other["radius"] + min_gap

        if vec_distance(location, other["location"]) &lt; needed:
            return False

    return True


def random_direction_in_ring(axis, min_angle_deg, max_angle_deg):
    # axis 기준 min~max 각도 사이 링 안에서 균등하게 방향 하나 뽑기
    # (기존엔 0~max 원뿔이었는데 가운데로 뽑히면 일자로 겹쳐 보여서 min을 추가함)
    # (구면 띠에서 cos을 균등하게 뽑으면 면적 기준 균등)
    # Pick a uniformly distributed direction inside the ring between min and max angles from axis.
    # (It used to be a 0-max cone, but picks near the center lined up and overlapped, so min was added.)
    # (Sampling cos uniformly on a spherical band gives an area-uniform distribution.)
    cos_min = math.cos(math.radians(max_angle_deg))
    cos_max = math.cos(math.radians(min_angle_deg))
    cos_t = random.uniform(cos_min, cos_max)
    phi = random.uniform(0.0, 2.0 * math.pi)

    return direction_from_axis(axis, math.acos(cos_t), phi)


def direction_from_axis(axis, angle, phi):
    # axis에서 angle(라디안)만큼 기울이고, axis 둘레로 phi만큼 돌린 방향
    # Direction tilted \`angle\` (radians) away from axis, then rotated \`phi\` around axis.
    cos_t = math.cos(angle)
    sin_t = math.sin(angle)

    # axis에 수직인 두 축 만들기
    # Build two axes perpendicular to axis.
    helper = (0.0, 0.0, 1.0) if abs(axis[2]) &lt; 0.9 else (1.0, 0.0, 0.0)

    u = (
        axis[1] * helper[2] - axis[2] * helper[1],
        axis[2] * helper[0] - axis[0] * helper[2],
        axis[0] * helper[1] - axis[1] * helper[0],
    )
    u_len = vec_length(u)
    u = (u[0] / u_len, u[1] / u_len, u[2] / u_len)

    w = (
        axis[1] * u[2] - axis[2] * u[1],
        axis[2] * u[0] - axis[0] * u[2],
        axis[0] * u[1] - axis[1] * u[0],
    )

    return tuple(
        axis[i] * cos_t
        + (u[i] * math.cos(phi) + w[i] * math.sin(phi)) * sin_t
        for i in range(3)
    )


def random_location(min_distance, max_distance):
    # 구면좌표계로 균등하게. hash처럼..sin(phi)를 변수로 씀. 균등하다!
    # Uniform on the sphere using spherical coordinates. Like a hash, sin(phi) is the random variable. Uniform!
    theta = random.uniform(
        0.0,
        2.0 * math.pi
    )

    # 아래는 안 내려다보니까 위쪽 반구만 (z &gt;= 0)
    # 정수리 쪽도 안 보이니까 MAX_Z_DIR 위로는 안 감
    # Nobody looks down, so only the upper hemisphere (z &gt;= 0).
    # The zenith isn't seen either, so never go above MAX_Z_DIR.
    z_dir = random.uniform(
        0.0,
        MAX_Z_DIR
    )

    #요게 sin(phi)
    # This is sin(phi).
    xy_radius = math.sqrt(
        1.0 - z_dir * z_dir
    )

    x_dir = xy_radius * math.cos(theta)
    y_dir = xy_radius * math.sin(theta)

    # 중심으로부터 거리
    # Distance from the center.
    distance = random.uniform(
        min_distance,
        max_distance
    )

    return (
        x_dir * distance,
        y_dir * distance,
        z_dir * distance
    )


# ---------------------------------------------------------------------------
# 컴포지션 (아레나에서 본 각도 기준)
#
# 배경은 아레나(원점)에서만 보니까, 실제 3D 거리보다 "화면에서 어떻게 보이냐"가 중요함.
# 멀리 있는 큰 행성이랑 가까운 작은 행성은 화면에선 크기가 비슷하게 보이니까
# 크기/간격/밀도를 전부 아레나 기준 각도로 계산함.
#   - 겉보기 크기(alpha) = 아레나에서 본 행성의 각반지름
#   - 각거리(theta)      = 아레나에서 본 두 행성 방향 사이 각도
#   - 시각적 질량(mass)  = 화면에서 차지하는 면적 (입체각 ≈ π·alpha²)
#
# 규칙 3개:
#   1. 크기별 간격: 겉보기에 큰 행성끼리는 멀리, 작은 행성끼리는 촘촘하게
#   2. 밀도 예산: 주변이 이미 무거우면(큰 행성 근처) 잘 못 들어옴 -&gt; 전체 무게감이 균등
#   3. 군집: 작은 행성 일부를 무리로 묶고, 무리 하나를 "중간 크기 행성 하나"처럼 배치
#
# 군집 변경 이력:
#   - 처음 로직: 작은 행성을 놓을 때 확률적으로 "이미 놓인 작은 행성 근처"에 떨굼
#   - 문제: 먼저 생긴 무리에 계속 붙어서(부익부) 한쪽은 큰 무리 덩어리, 한쪽은 큰 행성
#           이렇게 화면이 2분할만 됨. 원하는 건 무리/큰 거/중간 거가 골고루 섞인 것.
#   - 그래서: 무리를 미리 크기별(1/n 가중치 -&gt; 작은 무리 많고 큰 무리 가끔)로 나눠 만들고,
#             무리 하나를 원판으로 보고 큰 행성들과 같은 간격/밀도 규칙으로 같이 배치함.
#             멤버는 그 원판 안에 흩뿌림.
#   - 문제 2: 무리 안이 알 무더기처럼 징그러움.
#             (멤버 크기가 다 비슷 + 원판에 균등하게 뿌려서 간격이 고름 + 멤버가 너무 많음)
#   - 그래서: 대장 1개 + 졸개 구조로 크기 계층을 강제 (대장/최소 ≥ CLUSTER_MIN_SIZE_RATIO),
#             멤버 거리를 대장 근처로 맞춰서 계층이 화면에서도 보이게,
#             가우시안으로 중심은 촘촘/가장자리는 듬성 + 살짝 타원형,
#             최대 멤버 수 12 -&gt; 7.
#
# Composition (based on angles as seen from the arena)
#
# The background is only ever seen from the arena (origin), so how it looks on screen
# matters more than real 3D distance. A far big planet and a near small one can look
# the same size, so size, spacing and density are all computed as angles from the arena.
#   - Apparent size (alpha) = angular radius of a planet seen from the arena
#   - Angular distance (theta) = angle between two planet directions seen from the arena
#   - Visual mass (mass) = screen area taken up (solid angle ~ pi * alpha^2)
#
# Three rules:
#   1. Size-based spacing: apparently big planets stay far apart, small ones can sit close
#   2. Density budget: already-heavy areas (near big planets) rarely accept more -&gt; even visual weight
#   3. Clusters: group some small planets and place each group like one medium planet
#
# Cluster history:
#   - First logic: when placing a small planet, randomly drop it near an already placed small planet
#   - Problem: planets kept joining the earliest cluster (rich get richer), so the screen split in two:
#              one side a big clump of clusters, the other big planets. The goal is an even mix.
#   - So: build clusters up front with sizes weighted 1/n (many small clusters, a few big ones),
#         treat each cluster as a disc and place it with the same spacing/density rules as big planets.
#         Members are scattered inside that disc.
#   - Problem 2: clusters looked creepy, like a pile of eggs
#                (similar member sizes + uniform scatter giving even gaps + too many members).
#   - So: enforce a leader + followers size hierarchy (leader/smallest &gt;= CLUSTER_MIN_SIZE_RATIO),
#         keep member distances near the leader so the hierarchy shows on screen,
#         Gaussian scatter (dense center, sparse edge) + slight ellipse,
#         max members 12 -&gt; 7.
# ---------------------------------------------------------------------------


def to_view(location, radius):
    # 아레나에서 본 방향(단위벡터)과 겉보기 각반지름
    # Direction (unit vector) and apparent angular radius as seen from the arena.
    distance = vec_length(location)
    direction = tuple(value / distance for value in location)
    alpha = math.asin(min(1.0, radius / distance))

    return direction, alpha


def view_mass(alpha):
    return math.pi * alpha * alpha


def angle_between(dir_a, dir_b):
    dot = dir_a[0] * dir_b[0] + dir_a[1] * dir_b[1] + dir_a[2] * dir_b[2]
    return math.acos(max(-1.0, min(1.0, dot)))


def in_spawn_area(direction):
    # 반구 위쪽이면서 정수리는 아닌 띠 안에 있는지
    # Whether the direction is in the band: upper hemisphere but not the zenith.
    return 0.0 &lt;= direction[2] &lt;= MAX_Z_DIR


def estimate_view_density(layout_items, locked_layout):
    # 전체 배치 단위(행성 + 무리)의 시각적 질량 합 / 스폰 영역 입체각 = 평균 밀도
    # 스폰 영역(z 0 ~ MAX_Z_DIR 띠)의 입체각 = 2π·MAX_Z_DIR
    # 배치 전이라 거리는 구간 중간값으로 추정.
    # 이걸 기준으로 삼으니 Count나 스케일을 바꿔도 자동으로 "전체 1"에 맞춰짐.
    # Average density = total visual mass of all layout items (planets + clusters) / spawn area solid angle.
    # Solid angle of the spawn band (z from 0 to MAX_Z_DIR) = 2 * pi * MAX_Z_DIR.
    # Placement hasn't happened yet, so distance is estimated as the zone's midpoint.
    # Using this as the baseline keeps the whole thing normalized even when Count or scales change.
    # 락 걸린 행성은 이미 놓여 있으니 실제 겉보기 크기로 더함
    # Locked planets are already placed, so their actual apparent size is added.
    total_mass = sum(view_mass(item["alpha_est"]) for item in layout_items)
    total_mass += sum(item["mass"] for item in locked_layout)

    return total_mass / (2.0 * math.pi * MAX_Z_DIR)


def fits_composition(direction, alpha, layout, size_spacing, density_budget):
    # layout = 이미 놓인 배치 단위 (행성 + 무리 원판)
    # 주의! has_space처럼 이미 놓인 것 전부와 비교해서 전체 O(n²).
    # layout = layout items already placed (planets + cluster discs).
    # Careful! Like has_space, this compares against everything placed, so O(n^2) overall.
    neighbor_angle = math.radians(NEIGHBOR_ANGLE)
    local_mass = 0.0

    for other in layout:
        theta = angle_between(direction, other["direction"])

        # 1. 크기별 간격: 화면에서 겹치지 않게 + 둘 다 클수록 더 벌림
        # 기하평균이라 큰+큰은 넓게, 큰+작은은 중간, 작은+작은은 거의 붙어도 됨
        # 1. Size-based spacing: no overlap on screen + more space the bigger both are.
        # Geometric mean: big+big far apart, big+small medium, small+small can almost touch.
        needed = (
            alpha + other["alpha"]
            + size_spacing * math.sqrt(alpha * other["alpha"])
        )

        if theta &lt; needed:
            return False

        # 2. 밀도 예산용: 가까울수록 무게를 많이 쳐줌 (선형 감쇠)
        # 2. For the density budget: closer neighbors weigh more (linear falloff).
        if theta &lt; neighbor_angle:
            local_mass += other["mass"] * (1.0 - theta / neighbor_angle)

    if local_mass &lt;= 0.0:
        return True

    # 선형 감쇠 커널의 면적 = π·R²/3
    # Area of the linear falloff kernel = pi * R^2 / 3.
    kernel_area = math.pi * neighbor_angle * neighbor_angle / 3.0
    local_density = local_mass / kernel_area

    # 주변이 평균보다 무거울수록 들어올 확률이 낮아짐.
    # 딱 잘라 막으면 큰 행성 근처가 텅 비니까 확률로 "조금만" 들어오게 함.
    # The heavier the neighborhood compared to average, the lower the chance to accept.
    # A hard cutoff would leave big planets' surroundings empty, so a chance lets "a few" in.
    accept_chance = density_budget / local_density

    return random.random() &lt; accept_chance


def view_clear(direction, alpha, placed):
    # 실제 행성끼리 화면에서 겹치지 않는지만 확인 (무리 멤버용)
    # Only checks that real planets don't overlap on screen (used for cluster members).
    for other in placed:
        theta = angle_between(direction, other["direction"])

        if theta &lt; alpha + other["alpha"]:
            return False

    return True


def random_cluster_size():
    # 무리 크기를 1/n 가중치로 뽑음 -&gt; 작은 무리는 많고 큰 무리는 가끔.
    # 그래야 "약간 / 엄청 / 엄청 약간" 무리가 섞여서 나옴
    # Cluster size is picked with 1/n weights -&gt; many small clusters, occasional big ones.
    # That gives a mix of slight, heavy and very slight clusters.
    sizes = list(range(CLUSTER_SIZE_MIN, CLUSTER_SIZE_MAX + 1))
    weights = [1.0 / size for size in sizes]

    return random.choices(sizes, weights=weights, k=1)[0]


def build_clusters(small_items, cluster_chance):
    # 3. 군집
    # 처음엔 "이미 놓인 작은 행성 근처에 떨구기"였는데, 먼저 생긴 무리 쪽으로
    # 계속 몰려서(부익부) 큰 무리 하나 + 큰 행성 쪽으로 2분할만 됐음.
    # 그래서 무리를 미리 크기별로 나눠 만들고, 무리 하나를 원판(중간 크기 행성 하나)처럼
    # 큰 행성들과 같은 규칙으로 배치함 -&gt; 무리/큰 거/중간 거가 골고루 섞임.
    #
    # 그 다음엔 멤버를 랜덤으로 묶었더니 크기가 다 비슷해서 알 무더기처럼 징그러웠음.
    # 그래서 무리마다 대장(남은 것 중 제일 큰 것) 1개 + 제일 작은 것 1개 + 나머지 랜덤으로
    # 묶어서 크기 계층을 만들고, 대장/최소 비율이 CLUSTER_MIN_SIZE_RATIO 이상이 되게 강제함.
    #
    # 3. Clusters
    # At first small planets were dropped near already placed small planets, but they kept
    # piling onto the earliest cluster (rich get richer), splitting the screen into one big clump + big planets.
    # So clusters are built up front by size, and each cluster is placed like a disc (one medium planet)
    # with the same rules as big planets -&gt; clusters, big and medium planets mix evenly.
    #
    # Next, grouping members at random gave similar sizes and looked creepy, like a pile of eggs.
    # So each cluster takes a leader (largest remaining) + the smallest remaining + random others,
    # building a size hierarchy, and leader/smallest is forced to be at least CLUSTER_MIN_SIZE_RATIO.
    clustered = []
    scattered = []

    for item in small_items:
        if random.random() &lt; cluster_chance:
            clustered.append(item)
        else:
            scattered.append(item)

    # 큰 것부터 정렬해두고 앞에서 대장, 뒤에서 제일 작은 것을 뽑음
    # Sort largest first: take the leader from the front and the smallest from the back.
    clustered.sort(key=lambda item: item["scale"], reverse=True)

    clusters = []

    while clustered:
        size = random_cluster_size()

        leader = clustered.pop(0)

        # 1개짜리는 무리가 아니니까 그냥 흩어진 행성으로
        # A single planet isn't a cluster, so it becomes a scattered planet.
        if not clustered:
            scattered.append(leader)
            break

        smallest = clustered.pop()

        others = random.sample(
            clustered,
            min(size - 2, len(clustered))
        )
        for item in others:
            clustered.remove(item)

        # 대장/최소 비율이 부족하면 제일 작은 것을 더 줄임.
        # 이 경우 구간의 MinScale보다 작아질 수 있음 (무리 안 계층이 우선)
        # If leader/smallest ratio is too low, shrink the smallest further.
        # It may end up below the zone's MinScale (the in-cluster hierarchy wins).
        if leader["scale"] / smallest["scale"] &lt; CLUSTER_MIN_SIZE_RATIO:
            smallest["scale"] = leader["scale"] / CLUSTER_MIN_SIZE_RATIO
            smallest["radius"] = planet_radius(smallest["scale"])

        members = [leader] + others + [smallest]

        # 멤버 수가 많을수록 넓게 퍼짐 (면적이 멤버 수에 비례하도록 sqrt)
        # More members spread wider (sqrt so the area scales with member count).
        spread = math.radians(
            CLUSTER_SPREAD_PER_MEMBER * math.sqrt(len(members))
        )

        # 살짝 타원형으로. 방향도 무리마다 랜덤
        # Slightly elliptical, with a random orientation per cluster.
        stretch = random.uniform(1.0, CLUSTER_MAX_STRETCH)

        clusters.append({
            "kind": "cluster",
            "members": members,
            "spread": spread,
            "stretch": stretch,
            "orient": random.uniform(0.0, math.pi),
            # 배치할 땐 긴 쪽 기준 원판으로 봄
            # For layout, treat it as a disc sized by the long axis.
            "alpha_est": spread * stretch,
        })

    return clusters, scattered


def cluster_offset(cluster, center, sigma):
    # 무리 중심에서 가우시안으로 떨어진 방향 하나.
    # 원판에 균등하게 뿌리면 간격이 고르게 꽉 차서 격자처럼 보임 -&gt;
    # 가우시안이면 중심은 촘촘하고 가장자리는 듬성해서 자연스러움
    # One direction offset from the cluster center with a Gaussian.
    # Uniform scatter in a disc fills it with even gaps and looks grid-like -&gt;
    # a Gaussian is dense in the center and sparse at the edge, which looks natural.
    stretch = cluster["stretch"]
    limit = cluster["alpha_est"]

    x = random.gauss(0.0, sigma) * stretch
    y = random.gauss(0.0, sigma)
    angle = math.hypot(x, y)

    # 너무 멀리 튄 건 버림 (원판 밖으로 나가면 다른 행성이랑 부딪힘)
    # Discard samples that land too far (outside the disc they'd hit other planets).
    if angle &gt; limit:
        return None

    phi = math.atan2(y, x) + cluster["orient"]

    return direction_from_axis(center, angle, phi)


def place_planet(item, placed, layout, min_gap, size_spacing, density_budget):
    zone = item["zone"]
    radius = item["radius"]

    for _ in range(MAX_PLACE_ATTEMPTS):
        location = random_location(
            zone["min_distance"],
            zone["max_distance"]
        )

        # 실제 3D로 겹치지 않는지 (물리적 최소거리)
        # No overlap in real 3D (physical minimum distance).
        if not has_space(location, radius, placed, min_gap):
            continue

        direction, alpha = to_view(location, radius)

        # 아레나에서 봤을 때 컴포지션이 괜찮은지 + 무리 멤버랑 안 겹치는지
        # Composition looks right from the arena + no overlap with cluster members.
        if not fits_composition(
            direction, alpha, layout, size_spacing, density_budget
        ):
            continue

        if not view_clear(direction, alpha, placed):
            continue

        planet = {
            "location": location,
            "scale": item["scale"],
            "radius": radius,
            "zone": item["zone_index"],
            "direction": direction,
            "alpha": alpha,
            "mass": view_mass(alpha),
        }
        placed.append(planet)
        layout.append(planet)

        return True

    unreal.log_warning(
        f"Zone {item['zone_index']}: no space for planet "
        f"(scale {item['scale']:.2f}), skipped"
    )

    return False


def place_cluster(cluster, placed, layout, min_gap, size_spacing, density_budget):
    disc = cluster["alpha_est"]
    spread = cluster["spread"]

    # 무리 중심을 먼저 잡음. 무리 전체를 원판 하나로 보고 배치
    # Pick the cluster center first, treating the whole cluster as one disc.
    for _ in range(MAX_PLACE_ATTEMPTS):
        center = random_location(1.0, 1.0)

        if fits_composition(
            center, disc, layout, size_spacing, density_budget
        ):
            break
    else:
        unreal.log_warning(
            f"No space for cluster ({len(cluster['members'])} planets), skipped"
        )
        return 0

    layout.append({
        "direction": center,
        "alpha": disc,
        "mass": view_mass(disc),
    })

    # 대장이 기준 거리. 대장 구간 중간값으로 시작해서 대장이 놓이면 그 거리로 바뀜
    # The leader sets the reference distance. Starts at the leader zone's midpoint,
    # then switches to the leader's actual distance once it's placed.
    leader_zone = cluster["members"][0]["zone"]
    cluster_distance = (
        leader_zone["min_distance"] + leader_zone["max_distance"]
    ) * 0.5

    placed_count = 0

    for member_index, item in enumerate(cluster["members"]):
        zone = item["zone"]
        radius = item["radius"]
        is_leader = member_index == 0

        # 대장은 중심 근처에, 나머지는 가우시안으로 퍼뜨림
        # Leader near the center, the rest spread out with a Gaussian.
        sigma = spread * (0.25 if is_leader else 0.5)

        for _ in range(MAX_PLACE_ATTEMPTS):
            direction = cluster_offset(cluster, center, sigma)

            if direction is None or not in_spawn_area(direction):
                continue

            # 대장은 자기 구간 거리, 나머지는 대장 거리 근처.
            # 거리가 제각각이면 멀어서 작아 보이는 게 섞여서 크기 계층이 흐려짐
            # Leader uses its own zone distance, the rest stay near the leader's distance.
            # With random distances, far members look smaller and blur the size hierarchy.
            if is_leader:
                distance = random.uniform(
                    zone["min_distance"],
                    zone["max_distance"]
                )
            else:
                distance = cluster_distance * random.uniform(
                    1.0 - CLUSTER_DEPTH_JITTER,
                    1.0 + CLUSTER_DEPTH_JITTER
                )

            location = tuple(value * distance for value in direction)

            if not has_space(location, radius, placed, min_gap):
                continue

            _, alpha = to_view(location, radius)

            if not view_clear(direction, alpha, placed):
                continue

            placed.append({
                "location": location,
                "scale": item["scale"],
                "radius": radius,
                "zone": item["zone_index"],
                "direction": direction,
                "alpha": alpha,
                "mass": view_mass(alpha),
            })
            placed_count += 1

            if is_leader:
                cluster_distance = distance

            break

    return placed_count


def place_main_planets(zones, min_gap, size_spacing, cluster_chance, locked):
    # 락 걸린 행성은 자기 구간 Count를 차지함 -&gt; Count 5에 락 1개면 4개만 새로 뽑음
    # Locked planets use up their zone's Count -&gt; Count 5 with 1 locked spawns only 4 new.
    locked_main = [planet for planet in locked if not planet["accessory"]]
    pending = []

    for zone_index, zone in enumerate(zones, start=1):
        locked_count = sum(
            1 for planet in locked_main if planet["zone"] == zone_index
        )
        count = max(0, zone["count"] - locked_count)

        unreal.log(
            f"Zone {zone_index}: distance "
            f"{zone['min_distance']:.0f} ~ {zone['max_distance']:.0f}, "
            f"scale {zone['min_scale']} ~ {zone['max_scale']}, "
            f"count {count} (+{locked_count} locked)"
        )

        mid_distance = (zone["min_distance"] + zone["max_distance"]) * 0.5

        for _ in range(count):
            scale = random.uniform(
                zone["min_scale"],
                zone["max_scale"]
            )
            radius = planet_radius(scale)

            pending.append({
                "kind": "planet",
                "scale": scale,
                "radius": radius,
                "alpha_est": math.asin(min(1.0, radius / mid_distance)),
                "zone_index": zone_index,
                "zone": zone,
            })

    if not pending:
        return list(locked)

    pending.sort(key=lambda item: item["alpha_est"], reverse=True)

    # 겉보기 크기가 하위 절반이면 "작은 행성" (군집 대상)
    # The bottom half by apparent size counts as "small planets" (cluster candidates).
    half = len(pending) // 2
    big_items = pending[:half]
    small_items = pending[half:]

    clusters, scattered = build_clusters(small_items, cluster_chance)

    unreal.log(
        f"Clusters: {len(clusters)} "
        f"(sizes {[len(c['members']) for c in clusters]})"
    )

    # 행성이랑 무리를 한 줄로 세워서 겉보기로 큰 것부터 배치.
    # 큰 게 먼저 자리를 넓게 잡아야 자리 못 찾는 경우가 줄어듦
    # Line up planets and clusters together and place them from apparently largest down.
    # Letting big items claim space first means fewer items fail to find a spot.
    layout_items = big_items + scattered + clusters
    layout_items.sort(key=lambda item: item["alpha_est"], reverse=True)

    density_budget = (
        estimate_view_density(layout_items, locked_main) * DENSITY_TOLERANCE
    )

    # 락 걸린 행성을 먼저 넣어두면 간격/밀도/겹침 규칙이 걔들까지 포함해서 적용됨.
    # 악세사리는 컴포지션 단위가 아니라서 placed(3D 간격, 화면 겹침)에만 넣음
    # Seeding locked planets first makes the spacing/density/overlap rules include them.
    # Accessories aren't composition items, so they only go into placed (3D spacing, on-screen overlap).
    placed = list(locked)       # 실제 행성 (3D 간격, 화면 겹침 검사용) / Real planets (3D spacing, on-screen overlap checks)
    layout = list(locked_main)  # 배치 단위 = 행성 + 무리 원판 (컴포지션 검사용) / Layout items = planets + cluster discs (composition checks)

    for item in layout_items:
        if item["kind"] == "cluster":
            place_cluster(
                item, placed, layout, min_gap, size_spacing, density_budget
            )
        else:
            place_planet(
                item, placed, layout, min_gap, size_spacing, density_budget
            )

    unreal.log(
        f"Main planets: {len(placed) - len(locked)} / {len(pending)} placed "
        f"(+{len(locked)} locked)"
    )

    return placed


def place_accessory_planets(placed, accessory, min_gap):
    # 아레나(원점)에서 봤을 때 악세사리 행성이 보여야 하니까
    # 기준 행성 -&gt; 아레나 방향을 축으로 한 범위 안에만 붙임.
    # 아무 방향에나 붙이면 기준 행성 뒤쪽에 숨어서 아레나에선 안 보일 수 있음.
    # 처음엔 원뿔(0~30도)이었는데, 가운데 쪽에 붙으면 아레나-악세-기준 행성이
    # 일직선이 돼서 악세가 기준 행성 정면에 겹쳐 보여서 못생김.
    # 그래서 가운데를 뺀 링(45~75도)으로 바꿈 -&gt; 앞쪽이라 보이면서 옆으로 비껴 보임.
    # Accessory planets must be visible from the arena (origin),
    # so they only attach within a range around the parent -&gt; arena direction.
    # Attached in any direction, they could hide behind the parent and never be seen from the arena.
    # At first this was a cone (0-30 degrees), but near the center arena, accessory and parent
    # lined up, so the accessory overlapped the parent's front and looked ugly.
    # So it became a ring with the center cut out (45-75 degrees) -&gt; still in front, but offset to the side.
    # 락 걸린 행성은 지금 모습 그대로 두려고 새 악세사리를 안 붙임
    # Locked planets stay exactly as they are, so they get no new accessory.
    parents = [
        planet for planet in placed
        if not planet.get("locked")
        and planet["scale"] &gt;= accessory["parent_min_scale"]
    ]

    accessories = []

    for parent in parents:
        if random.random() &gt;= accessory["chance"]:
            continue

        scale = random.uniform(
            accessory["min_scale"],
            accessory["max_scale"]
        )
        radius = planet_radius(scale)

        # 기준 행성 표면에서 gap만큼 띄워서 붙임
        # Attach \`gap\` away from the parent's surface.
        offset = parent["radius"] + accessory["gap"] + radius

        parent_distance = vec_length(parent["location"])
        to_arena = tuple(
            -value / parent_distance for value in parent["location"]
        )

        for _ in range(MAX_PLACE_ATTEMPTS):
            direction = random_direction_in_ring(
                to_arena,
                ACCESSORY_RING_MIN_ANGLE,
                ACCESSORY_RING_MAX_ANGLE
            )

            location = tuple(
                parent["location"][i] + direction[i] * offset
                for i in range(3)
            )

            # 반구 아래나 정수리로 가면 안 보이니까 다시 뽑기
            # Below the hemisphere or at the zenith it won't be seen, so re-roll.
            location_length = vec_length(location)

            if not in_spawn_area(
                tuple(value / location_length for value in location)
            ):
                continue

            # 기준 행성은 gap으로 이미 띄웠으니 검사에서 제외
            # The parent is already spaced by \`gap\`, so skip it in the check.
            if has_space(
                location, radius, placed + accessories, min_gap,
                ignore=parent
            ):
                accessories.append({
                    "location": location,
                    "scale": scale,
                    "radius": radius,
                })
                break
        else:
            unreal.log_warning(
                f"No space for accessory next to planet "
                f"(scale {parent['scale']:.2f}), skipped"
            )

    unreal.log(
        f"Accessory: {len(accessories)} spawned "
        f"({len(parents)} parent candidates)"
    )

    return accessories


def next_free_label(prefix, used_labels):
    # 락 걸린 행성이 BG_Planet_3 같은 라벨을 이미 쓰고 있을 수 있어서 빈 번호를 찾음
    # A locked planet may already use a label like BG_Planet_3, so find a free number.
    index = 0

    while f"{prefix}{index}" in used_labels:
        index += 1

    label = f"{prefix}{index}"
    used_labels.add(label)

    return label


def load_planet_class():
    planet_class = unreal.EditorAssetLibrary.load_blueprint_class(
        PLANET_BP_PATH
    )

    if not planet_class:
        raise RuntimeError(
            f"Could not load planet BP: {PLANET_BP_PATH} "
            f"(StaticMeshActor parent + Instance Editable bool '{LOCK_PROPERTY}')"
        )

    return planet_class


def spawn_planet(actor_subsystem, planet_class, mesh, location, scale, label, tags):
    planet = actor_subsystem.spawn_actor_from_class(
        planet_class,
        unreal.Vector(*location),
        unreal.Rotator()
    )

    planet.static_mesh_component.set_static_mesh(mesh)

    planet.set_actor_scale3d(
        unreal.Vector(
            scale,
            scale,
            scale
        )
    )

    planet.set_actor_label(label)
    planet.set_editor_property("tags", [unreal.Name(tag) for tag in tags])


def actor_tags(actor):
    return [str(tag) for tag in actor.get_editor_property("tags")]


def is_planet_actor(actor):
    return actor.get_actor_label().startswith(PLANET_LABEL_PREFIX)


def is_locked(actor):
    # BP 행성은 Details의 Locked 체크박스, 예전 StaticMeshActor 행성은 BG_Locked 태그
    # BP planets use the Locked checkbox in Details, old StaticMeshActor planets use the BG_Locked tag.
    try:
        if actor.get_editor_property(LOCK_PROPERTY):
            return True
    except Exception:
        pass

    return LOCK_TAG in actor_tags(actor)


def set_locked(actor, locked):
    # 체크박스가 있으면 체크박스로, 없으면 태그로. 풀 때는 둘 다 지움
    # Use the checkbox if there is one, otherwise the tag. Unlocking clears both.
    tags = [tag for tag in actor_tags(actor) if tag != LOCK_TAG]

    try:
        actor.set_editor_property(LOCK_PROPERTY, locked)
    except Exception:
        if locked:
            tags.append(LOCK_TAG)

    return tags


def is_accessory_actor(actor):
    return (
        ACCESSORY_TAG in actor_tags(actor)
        or actor.get_actor_label().startswith(ACCESSORY_LABEL_PREFIX)
    )


def guess_zone(zones, location, scale):
    # Zone 태그가 없는 행성(락 기능 전에 만든 것)은 스케일/거리가 제일 잘 맞는 구간으로 침.
    # 무리의 제일 작은 멤버는 MinScale 밑으로 줄어들 수 있어서 딱 맞는 구간이 없을 수도 있음
    # Planets without a zone tag (made before locking existed) get the zone their scale/distance fits best.
    # A cluster's smallest member may be shrunk below MinScale, so an exact match may not exist.
    distance = vec_length(location)

    def miss(value, low, high):
        if value &lt; low:
            return (low - value) / max(low, 1e-6)
        if value &gt; high:
            return (value - high) / max(high, 1e-6)
        return 0.0

    scores = [
        miss(scale, zone["min_scale"], zone["max_scale"])
        + miss(distance, zone["min_distance"], zone["max_distance"])
        for zone in zones
    ]

    return scores.index(min(scores)) + 1


def actor_zone(actor, zones, location, scale):
    for tag in actor_tags(actor):
        if tag.startswith(ZONE_TAG_PREFIX):
            try:
                return int(tag[len(ZONE_TAG_PREFIX):])
            except ValueError:
                pass

    return guess_zone(zones, location, scale)


def collect_locked_planets(zones):
    # 락 걸린 행성을 배치 로직에서 쓰는 형태로 읽어옴
    # Read locked planets into the shape the placement logic uses.
    actor_subsystem = unreal.get_editor_subsystem(
        unreal.EditorActorSubsystem
    )

    locked = []

    for actor in actor_subsystem.get_all_level_actors():
        if not is_planet_actor(actor) or not is_locked(actor):
            continue

        loc = actor.get_actor_location()
        location = (loc.x, loc.y, loc.z)
        scale = actor.get_actor_scale3d().x
        radius = planet_radius(scale)
        direction, alpha = to_view(location, radius)
        accessory = is_accessory_actor(actor)

        locked.append({
            "location": location,
            "scale": scale,
            "radius": radius,
            "zone": None if accessory else actor_zone(
                actor, zones, location, scale
            ),
            "direction": direction,
            "alpha": alpha,
            "mass": view_mass(alpha),
            "locked": True,
            "accessory": accessory,
        })

    return locked


def generate_planets():
    settings = get_settings()

    zones = read_zones(settings)
    accessory = read_accessory_settings(settings)
    min_gap = settings.get_editor_property("MinGap")
    size_spacing = settings.get_editor_property("SizeSpacing")
    cluster_chance = settings.get_editor_property("ClusterChance")

    locked = collect_locked_planets(zones)

    placed = place_main_planets(
        zones, min_gap, size_spacing, cluster_chance, locked
    )
    accessories = place_accessory_planets(placed, accessory, min_gap)

    actor_subsystem = unreal.get_editor_subsystem(
        unreal.EditorActorSubsystem
    )

    planet_class = load_planet_class()
    mesh = unreal.load_asset("/Engine/BasicShapes/Sphere")

    used_labels = {
        actor.get_actor_label()
        for actor in actor_subsystem.get_all_level_actors()
        if is_planet_actor(actor)
    }

    # 락 걸린 행성은 이미 레벨에 있으니 새로 뽑힌 것만 스폰
    # Locked planets are already in the level, so only spawn the new ones.
    for planet in placed:
        if planet.get("locked"):
            continue

        label = next_free_label(PLANET_LABEL_PREFIX, used_labels)

        spawn_planet(
            actor_subsystem, planet_class, mesh,
            planet["location"], planet["scale"],
            label,
            [f"{ZONE_TAG_PREFIX}{planet['zone']}"]
        )

        unreal.log(
            f"{label} (zone {planet['zone']}): "
            f"scale = {planet['scale']}"
        )

    # 라벨이 BG_Planet_로 시작해야 clear_planets에서 같이 지워짐
    # Labels must start with BG_Planet_ so clear_planets removes them too.
    for planet in accessories:
        spawn_planet(
            actor_subsystem, planet_class, mesh,
            planet["location"], planet["scale"],
            next_free_label(ACCESSORY_LABEL_PREFIX, used_labels),
            [ACCESSORY_TAG]
        )


def clear_planets():
    # 락 걸린 행성은 남김
    # Locked planets are kept.
    actor_subsystem = unreal.get_editor_subsystem(
        unreal.EditorActorSubsystem
    )

    kept = 0

    for actor in actor_subsystem.get_all_level_actors():
        if not is_planet_actor(actor):
            continue

        if is_locked(actor):
            kept += 1
            continue

        actor_subsystem.destroy_actor(actor)

    if kept:
        unreal.log(f"Clear: kept {kept} locked planets")


def set_selected_locked(locked):
    # 아웃라이너/뷰포트에서 선택한 행성에 락을 걸거나 풂.
    # 락 걸 때 Zone 태그가 없으면(예전에 만든 행성) 추정한 구간을 태그로 박아둠
    # Lock or unlock the planets selected in the outliner/viewport.
    # When locking a planet with no zone tag (made earlier), the guessed zone is written as a tag.
    actor_subsystem = unreal.get_editor_subsystem(
        unreal.EditorActorSubsystem
    )

    actors = [
        actor for actor in actor_subsystem.get_selected_level_actors()
        if is_planet_actor(actor)
    ]

    if not actors:
        unreal.log_warning("No BG_Planet_ actors selected")
        return

    zones = read_zones(get_settings()) if locked else None

    with unreal.ScopedEditorTransaction(
        "Lock Planets" if locked else "Unlock Planets"
    ):
        for actor in actors:
            actor.modify()

            tags = set_locked(actor, locked)

            if locked:
                has_zone = any(tag.startswith(ZONE_TAG_PREFIX) for tag in tags)

                if not has_zone and not is_accessory_actor(actor):
                    loc = actor.get_actor_location()
                    zone = guess_zone(
                        zones,
                        (loc.x, loc.y, loc.z),
                        actor.get_actor_scale3d().x
                    )
                    tags.append(f"{ZONE_TAG_PREFIX}{zone}")

            actor.set_editor_property(
                "tags", [unreal.Name(tag) for tag in tags]
            )

    unreal.log(
        f"{'Locked' if locked else 'Unlocked'} {len(actors)} planets"
    )


def lock_selected():
    set_selected_locked(True)


def unlock_selected():
    set_selected_locked(False)</code></pre></div></details></section>`
            }
          ]
        }
      }
    }
  },

  // (IN PRODUCTION / UNFINISHED) Ruin Forge (working title) is a personal,
  // still-in-progress Blender Geometry Nodes tool. Only the "Implemented" parts below are built and
  // working; the "In progress" and "Planned" lists are NOT finished features — don't describe them
  // as done. Image slots are placeholders until their render files exist (see renderMediaSlots()).
  "10_RuinForge": {
    type: "game",
    title: "Ruin Forge",
    subtitle: "Procedural concrete damage tool · Blender Geometry Nodes — work in progress",
    pageTitle: "Ruin Forge — Min Seohyeon Portfolio",
    heroType: "image",
    heroMedia: "../img/portfolio_thumbnails/RuinForge_placeholder.svg",
    overview: "A personal, in-progress procedural tool built in Blender Geometry Nodes for environment artists: move a single control object and the concrete wall generates natural surface damage — the outer layer flaking away like an eggshell to reveal the wall underneath — plus cracks that grow out of the actual broken edge. The core rule: cracks must start from the boundary the Boolean cut really created, not from a hand-drawn line or a distance approximation.",
    features: [
      "Move one control object (DamageCtrl) and the damage follows — no hand-modeling per wall",
      "Two-layer wall: the outer shell breaks away to expose the inner wall",
      "Cracks seeded from the Boolean's real intersecting edges, only at sharply bent corners",
      "Randomized zigzag V-groove cracks, cleaned to 0 non-manifold edges"
    ],
    experience: {
      role: "Technical Art — Tools (solo)",
      period: "2026 · Personal project (work in progress)",
      description: "Built the node network myself in Blender 5.2 Geometry Nodes, aimed at environment artists who otherwise hand-model every broken wall and crack for ruins and battle-damaged scenes."
    },
    tools: "Blender 5.2 (Geometry Nodes) · Python",
    trailers: [],
    videos: [],
    contributions: {
      sections: [
        {
          title: "Procedural Concrete Damage Tool",
          category: "Technical",
          htmlContent: `<section><h2>Cracks That Start Where the Wall Actually Broke</h2><p class="case-study-lede">Ruined and battle-scarred walls usually mean hand-modeling every break and every crack, again and again. This tool lets an environment artist place one control object and get damage that reads like real concrete — a thin outer skin flaking away like an eggshell to expose the wall underneath, with no round holes or repeating patterns. Cracks start from the boundary the Boolean cut actually produced, extracted as data — not from a hand-drawn line or a distance approximation.</p><p class="metric-source-note"><strong>Work in progress:</strong> everything under the case studies below is built and working. The "In progress" and "Planned" sections at the end are not finished yet.</p>${renderMediaSlots([{src:"../img/RuinForge/01_full-wall.png",alt:"Full render of a concrete wall with surface damage and cracks generated by Ruin Forge",label:"Result",caption:"Full wall render"}])}${renderEngineeringCaseStudy({metrics:[{icon:"◇",value:"Intersecting Edges",label:"cracks start on the real Boolean cut"},{icon:"∠",value:"Dot product",label:"corner-only crack seeds"},{icon:"✓",value:"0",label:"non-manifold edges after cleanup"},{icon:"⌖",value:"1 control",label:"move DamageCtrl, damage follows"}],architecture:[{title:"DamageCtrl",detail:"Control object read through Object Info (Relative), so damage follows the wall when it moves or rotates"},{title:"Irregular cutter",detail:"Curve → noise-displaced points → Curve to Mesh → Mesh to Volume → Volume to Mesh"},{title:"Outer-wall Boolean",detail:"Mesh Boolean (Difference, Manifold) cuts WallOut and exposes WallIn"},{title:"Boundary extraction",detail:"Intersecting Edges → Mesh to Curve selection: only the edges the cut created"},{title:"Corner seeds",detail:"Resample, compare neighbor directions, keep sharp corners, randomly pick some"},{title:"Zigzag cracks",detail:"Instanced 12-segment template, alternating offsets, tapered diamond sweep, cut into the wall"}],architectureNote:"Two separate objects: WallOut (the outer concrete skin) and WallIn (the wall behind it). When WallOut is cut away, WallIn shows through.",cases:[{label:"Boundary",title:"Using the cut the Boolean really made, not an approximation",problem:"A crack drawn by hand, or placed by distance from the damage center, never quite lines up with the irregular edge the cut actually produced — the crack reads as pasted on instead of growing out of the break.",decision:"Treat the Boolean's own result as the source of truth: switch the Mesh Boolean solver to Manifold and use its Intersecting Edges output.",implementation:"Intersecting Edges is wired into the Selection input of Mesh to Curve, so only the boundary edges the Boolean created become a curve — that curve is what the crack logic reads from.",verification:"A wiring mistake once fed every wall edge into that selection and spawned 1,000+ cracks along the whole wall outline; tracing it back to the selection input and reconnecting Intersecting Edges brought crack seeds back to the cut boundary only."},{label:"Corners",title:"Starting cracks only where the boundary bends sharply",problem:"Spawning cracks along the entire boundary looks uniform and fake — real concrete tends to split from sharp turns in the break, not evenly everywhere.",decision:"Measure how sharply the boundary bends at each point, keep only the sharp ones as candidates, then pick just some of them at random.",implementation:"Resample the boundary curve densely, read each point's previous and next neighbor positions (Offset Point in Curve + Evaluate at Index), and compare the two directions with a Dot Product. Points bent past a threshold are stored as a \"corner\" attribute; a random probability then picks a subset of corners to grow cracks from.",verification:"Cracks appear at only some of the sharp turns instead of in a uniform ring around every break."},{label:"Shape",title:"Zigzag cracks that don't repeat",problem:"A single straight or regularly bent crack shape, repeated at every seed, reads as a stamp.",decision:"Instance one straight template per seed and break it up with alternating, randomized offsets, then sweep a tapered V-shaped profile along it.",implementation:"A 12-segment straight template is instanced at each seed and aligned outward using the cross product of the boundary tangent and the wall normal. Each point's Index parity (mod 2) pushes it left or right for a zigzag; bend size and segment spacing along the crack are randomized to remove repetition. A diamond cross-section (Curve Circle, resolution 4) is swept along it, thinning toward the tip, to carve a V-shaped groove.",verification:"Neighboring cracks no longer share the same rhythm or bend sizes."},{label:"Topology",title:"Fixing holes and broken faces from overlapping crack cutters",problem:"Crack cutters overlap and self-intersect; with the Float Boolean solver that produced holes and broken faces in the wall mesh.",decision:"Merge all crack cutters into one clean closed mesh before cutting, and cut with the Manifold solver.",implementation:"The crack cutters go through Mesh to Volume → Volume to Mesh, which rebuilds them as a single closed mesh, and that mesh is cut with the Manifold Boolean.",verification:"The result has 0 non-manifold edges."}],decisions:[{system:"Crack seeds",choice:"Boolean Intersecting Edges as data",reason:"Cracks start exactly on the break the cut produced, wherever DamageCtrl moves.",tradeoff:"Ties the crack logic to the Manifold solver's output."},{system:"Boolean solver",choice:"Manifold instead of Float",reason:"Exposes Intersecting Edges and gives clean results on closed input.",tradeoff:"Inputs need to be closed meshes, hence the volume rebuild of the cutters."},{system:"Cutter cleanup",choice:"Mesh to Volume → Volume to Mesh",reason:"Turns overlapping, self-intersecting pieces into one closed mesh.",tradeoff:"Voxel resolution trades fine detail against evaluation cost."},{system:"Wall structure",choice:"Separate WallOut / WallIn objects",reason:"The outer skin can break away while the inner wall stays as what's revealed.",tradeoff:"Two objects to keep aligned; the inner wall is still a plain surface for now."}]})}${renderMediaSlots([{src:"../img/RuinForge/02_boundary-curve.png",alt:"Debug view of the boundary curve extracted from the Boolean's intersecting edges",label:"Boundary",caption:"Boundary curve extracted from Intersecting Edges"},{src:"../img/RuinForge/03_corner-seeds.png",alt:"Debug view of boundary points flagged as corners, with cracks growing from some of them",label:"Corners",caption:"Corner points and the cracks picked from them"},{src:"../img/RuinForge/04_crack-closeup.png",alt:"Close-up render of zigzag V-groove cracks",label:"Shape",caption:"Crack close-up"},{src:"../img/RuinForge/05_manifold-fix.png",alt:"Before and after comparison of the wall mesh, broken faces versus a clean manifold result",label:"Topology",caption:"Float Boolean holes vs. Manifold result"}])}<h3>Moving the control object</h3><p>The same wall with DamageCtrl in different positions — the break, the exposed inner wall, and the cracks are all regenerated from the new cut.</p>${renderMediaSlots([{src:"../img/RuinForge/06_ctrl-compare.png",alt:"Comparison renders of the same wall with the damage control object in different positions",label:"Control",caption:"DamageCtrl moved to different positions"}])}<h3>In progress</h3><p>Exposing artist parameters on the modifier panel, so the tool can be tuned without opening the node tree. Not finished yet:</p><ul><li><strong>Damage Size</strong> — size of the break</li><li><strong>Edge Noise</strong> — how irregular the broken edge is</li><li><strong>Seed</strong> — random seed</li><li><strong>Crack Probability</strong> — chance a corner grows a crack</li><li><strong>Crack Length</strong> / <strong>Crack Width</strong></li></ul><h3>Planned (not built yet)</h3><ul><li><strong>Brick inner wall</strong> — build WallIn from real brick blocks (half-offset rows with mortar joints); only where the outer wall is badly broken do bricks fall out in chunks, with neighbors loosened and tilted into a stepped break. Inner damage stays smaller than outer damage.</li><li><strong>Concave corner check</strong> — use a Raycast to tell whether the inside of a bend is the hole, so cracks start only at concave corners where stress concentrates.</li><li><strong>Crack direction fix</strong> — some cracks currently grow toward the hole; flip them using the damage center as reference.</li><li><strong>Crack branches</strong></li></ul>${renderMediaSlots([{src:"../img/RuinForge/07_node-tree.png",alt:"Overview of the Geometry Nodes tree",label:"Nodes",caption:"Geometry Nodes tree overview"}])}<p class="engineering-note">Every render on this page is my own, from the tool itself.</p></section>`
        }
      ]
    },
    source: null,
    localized: {
      ko: {
        subtitle: "절차적 콘크리트 파손 툴 · Blender Geometry Nodes — 진행 중",
        overview: "환경/배경 아티스트를 위해 Blender Geometry Nodes로 만들고 있는 개인 프로젝트입니다. 컨트롤 오브젝트 하나를 옮기기만 하면 콘크리트 벽에 자연스러운 표면 파손 — 겉면이 계란 껍질처럼 얕게 벗겨지며 안쪽 벽이 드러나는 — 과, 실제로 깨진 경계에서 뻗어 나가는 크랙이 자동으로 생성됩니다. 핵심 원칙은 크랙이 손으로 그린 선이나 거리 근사가 아니라, Boolean이 실제로 만든 경계에서 시작해야 한다는 것입니다.",
        features: [
          "컨트롤 오브젝트(DamageCtrl) 하나만 옮기면 파손이 따라옴 — 벽마다 손으로 모델링할 필요 없음",
          "2겹 벽 구조: 겉벽이 벗겨지면 안쪽 벽이 드러남",
          "Boolean의 실제 교차 경계에서, 크게 꺾인 지점에서만 크랙 시작",
          "랜덤한 지그재그 V자 크랙, 비매니폴드 엣지 0개로 정리"
        ],
        experience: {
          role: "테크니컬 아트 — 툴 (개인)",
          period: "2026년 · 개인 프로젝트 (진행 중)",
          description: "Blender 5.2 Geometry Nodes로 노드를 직접 구성했습니다. 폐허나 전투 흔적 벽을 만들 때마다 파손 형상과 크랙을 손으로 모델링하는 환경 아티스트의 반복 작업을 줄이는 것이 목표입니다."
        },
        contributions: {
          sections: [
            {
              title: "절차적 콘크리트 파손 툴",
              category: "Technical",
              htmlContent: `<section><h2>실제로 깨진 자리에서 시작하는 크랙</h2><p class="case-study-lede">폐허나 전투 흔적이 남은 벽을 만들려면 보통 파손 형상과 크랙을 매번 손으로 모델링해야 합니다. 이 툴은 환경 아티스트가 컨트롤 오브젝트 하나만 놓으면 실제 콘크리트처럼 보이는 파손 — 얇은 겉면이 계란 껍질처럼 벗겨지며 안쪽 벽이 드러나는 — 을 만들어 줍니다. 원형 구멍이나 반복 패턴은 배제했습니다. 크랙은 수동으로 그린 선이나 거리 근사가 아니라, Boolean 연산이 실제로 만든 경계를 데이터로 추출해 그 지점에서 시작합니다.</p><p class="metric-source-note"><strong>진행 중인 프로젝트:</strong> 아래 케이스 스터디의 내용은 구현이 끝나 동작하는 부분입니다. 맨 아래 "진행 중"과 "계획" 항목은 아직 완성되지 않았습니다.</p>${renderMediaSlots([{src:"../img/RuinForge/01_full-wall.png",alt:"Ruin Forge로 표면 파손과 크랙을 생성한 콘크리트 벽 전체 렌더",label:"결과",caption:"벽 전체 렌더"}],"ko")}${renderEngineeringCaseStudy({labels:{systemMap:"시스템 구조",problem:"문제",decision:"결정",implementation:"구현",verification:"검증",keyDecisions:"핵심 결정",decisionLog:"결정 로그",decisionTitle:"왜 이렇게 구조화했는가",system:"시스템",choice:"선택",why:"이유",tradeoff:"트레이드오프",codeEvidence:"코드 근거",viewSource:"소스 보기 ↗"},metrics:[{icon:"◇",value:"Intersecting Edges",label:"실제 Boolean 경계에서 크랙 시작"},{icon:"∠",value:"내적",label:"꺾인 지점에서만 크랙 시작"},{icon:"✓",value:"0",label:"정리 후 비매니폴드 엣지"},{icon:"⌖",value:"컨트롤 1개",label:"DamageCtrl을 옮기면 파손이 따라옴"}],architecture:[{title:"DamageCtrl",detail:"Object Info(Relative)로 읽어서 벽을 이동·회전해도 파손이 따라감"},{title:"불규칙한 커터",detail:"커브 → 노이즈로 흔든 위치 → Curve to Mesh → Mesh to Volume → Volume to Mesh"},{title:"겉벽 Boolean",detail:"Mesh Boolean(Difference, Manifold)으로 WallOut을 깎아 WallIn 노출"},{title:"경계 추출",detail:"Intersecting Edges → Mesh to Curve Selection: 커팅이 만든 엣지만"},{title:"꺾임 지점",detail:"리샘플 후 앞뒤 방향을 비교해 크게 꺾인 점만 남기고, 그중 일부를 랜덤 선택"},{title:"지그재그 크랙",detail:"12마디 템플릿 인스턴스, 좌우 교차 오프셋, 가늘어지는 마름모 스윕으로 벽을 깎음"}],architectureNote:"겉벽(WallOut)과 안벽(WallIn)은 별도 오브젝트입니다. WallOut이 깎여 나가면 그 자리에 WallIn이 드러납니다.",cases:[{label:"경계",title:"근사값이 아니라 Boolean이 실제로 만든 경계를 쓰기",problem:"손으로 그린 크랙이나 파손 중심으로부터의 거리로 배치한 크랙은, 커팅이 실제로 만든 불규칙한 경계와 정확히 맞지 않습니다 — 깨진 자리에서 뻗어 나온 게 아니라 위에 붙여 놓은 것처럼 보입니다.",decision:"Boolean의 결과 자체를 기준으로 삼았습니다. Mesh Boolean의 solver를 Manifold로 바꾸고, 그 출력인 Intersecting Edges를 사용합니다.",implementation:"Intersecting Edges를 Mesh to Curve의 Selection에 연결해서, Boolean이 만든 경계 엣지만 커브가 되게 했습니다. 크랙 로직은 이 커브를 읽습니다.",verification:"한 번은 연결 실수로 벽의 모든 엣지가 Selection에 들어가서 벽 전체 외곽을 따라 크랙이 1,000개 넘게 생겼습니다. Selection 입력까지 거슬러 올라가 Intersecting Edges를 다시 연결해, 크랙 시작점이 커팅 경계에만 생기도록 고쳤습니다."},{label:"꺾임",title:"경계가 크게 꺾인 곳에서만 크랙 시작하기",problem:"경계 전체를 따라 크랙을 만들면 균일해서 가짜처럼 보입니다 — 실제 콘크리트는 파손 경계의 날카롭게 꺾인 곳에서 갈라지는 경향이 있습니다.",decision:"경계의 각 점이 얼마나 꺾였는지 측정해서 크게 꺾인 점만 후보로 남기고, 그중 일부만 랜덤으로 고릅니다.",implementation:"경계 커브를 촘촘히 리샘플하고, 각 점의 앞뒤 이웃 점 위치를 읽어(Offset Point in Curve + Evaluate at Index) 두 방향을 내적(Dot Product)으로 비교합니다. 임계값보다 많이 꺾인 점은 \"corner\" 속성으로 저장하고, 랜덤 확률로 그중 일부에서만 크랙을 만듭니다.",verification:"모든 파손 주위에 고리처럼 균일하게 생기지 않고, 날카롭게 꺾인 지점 중 일부에서만 크랙이 생깁니다."},{label:"형상",title:"반복되지 않는 지그재그 크랙",problem:"똑같은 직선이나 규칙적으로 꺾인 크랙 모양이 시작점마다 반복되면 도장을 찍은 것처럼 보입니다.",decision:"시작점마다 직선 템플릿 하나를 배치하고 좌우 교차하는 랜덤 오프셋으로 흔든 뒤, 끝으로 갈수록 가늘어지는 V자 단면을 스윕합니다.",implementation:"12마디 직선 템플릿을 시작점마다 인스턴스로 배치하고, 경계 접선과 벽 노멀의 외적으로 바깥 방향을 향하게 정렬합니다. 각 점 Index의 홀짝(mod 2)으로 좌우를 번갈아 밀어 지그재그를 만들고, 꺾임 크기와 진행 방향 마디 간격을 랜덤으로 줘서 반복을 없앴습니다. 마름모 단면(Curve Circle, 해상도 4)을 끝으로 갈수록 가늘게 스윕해 V자 균열 홈을 표현합니다.",verification:"이웃한 크랙끼리 같은 리듬이나 같은 꺾임 크기를 공유하지 않습니다."},{label:"토폴로지",title:"겹치는 크랙 커터 때문에 생긴 구멍과 깨진 면 해결",problem:"크랙 커터들이 서로 겹치고 자기교차해서, Float Boolean으로 깎으면 벽 메시에 구멍과 깨진 면이 생겼습니다.",decision:"깎기 전에 모든 크랙 커터를 하나의 깔끔한 닫힌 메시로 합치고, Manifold solver로 깎습니다.",implementation:"크랙 커터를 Mesh to Volume → Volume to Mesh로 하나의 닫힌 메시로 다시 만든 뒤, Manifold Boolean으로 깎습니다.",verification:"비매니폴드 엣지 0개."}],decisions:[{system:"크랙 시작점",choice:"Boolean의 Intersecting Edges를 데이터로 사용",reason:"DamageCtrl을 어디로 옮겨도 크랙이 정확히 커팅 경계에서 시작함.",tradeoff:"크랙 로직이 Manifold solver의 출력에 묶임."},{system:"Boolean solver",choice:"Float 대신 Manifold",reason:"Intersecting Edges 출력을 제공하고, 닫힌 입력에서 깔끔한 결과를 냄.",tradeoff:"입력이 닫힌 메시여야 해서 커터를 볼륨으로 재구성하는 단계가 필요함."},{system:"커터 정리",choice:"Mesh to Volume → Volume to Mesh",reason:"겹치고 자기교차하는 조각들을 하나의 닫힌 메시로 바꿈.",tradeoff:"복셀 해상도에 따라 디테일과 계산 비용이 맞바뀜."},{system:"벽 구조",choice:"WallOut / WallIn 오브젝트 분리",reason:"겉면만 벗겨지고 안벽은 드러나는 면으로 남길 수 있음.",tradeoff:"두 오브젝트를 맞춰 관리해야 함. 안벽은 아직 단순한 면."}]})}${renderMediaSlots([{src:"../img/RuinForge/02_boundary-curve.png",alt:"Boolean의 Intersecting Edges에서 추출한 경계 커브 디버그 뷰",label:"경계",caption:"Intersecting Edges에서 추출한 경계 커브"},{src:"../img/RuinForge/03_corner-seeds.png",alt:"corner로 표시된 경계 점과 그중 일부에서 자란 크랙 디버그 뷰",label:"꺾임",caption:"corner 점과 그중 선택된 크랙"},{src:"../img/RuinForge/04_crack-closeup.png",alt:"지그재그 V자 크랙 클로즈업 렌더",label:"형상",caption:"크랙 클로즈업"},{src:"../img/RuinForge/05_manifold-fix.png",alt:"깨진 면이 있는 벽 메시와 깔끔한 매니폴드 결과 비교",label:"토폴로지",caption:"Float Boolean의 구멍 vs. Manifold 결과"}],"ko")}<h3>컨트롤 오브젝트 옮기기</h3><p>같은 벽에서 DamageCtrl 위치만 바꾼 결과입니다 — 파손 형상, 드러난 안벽, 크랙이 모두 새 커팅을 기준으로 다시 생성됩니다.</p>${renderMediaSlots([{src:"../img/RuinForge/06_ctrl-compare.png",alt:"파손 컨트롤 오브젝트 위치를 바꾼 같은 벽 비교 렌더",label:"컨트롤",caption:"DamageCtrl 위치 비교"}],"ko")}<h3>진행 중</h3><p>노드 트리를 열지 않고도 조절할 수 있도록 아티스트용 파라미터를 모디파이어 패널에 노출하는 작업입니다. 아직 완성되지 않았습니다:</p><ul><li><strong>Damage Size</strong> — 파손 크기</li><li><strong>Edge Noise</strong> — 가장자리 불규칙도</li><li><strong>Seed</strong> — 랜덤 시드</li><li><strong>Crack Probability</strong> — 꺾인 지점에서 크랙이 생길 확률</li><li><strong>Crack Length</strong> / <strong>Crack Width</strong> — 크랙 길이 / 굵기</li></ul><h3>계획 (아직 구현 전)</h3><ul><li><strong>벽돌 구조 안벽</strong> — 안벽 전체를 실제 벽돌 블록(줄마다 반 칸 엇갈림, 줄눈 포함)으로 구성. 겉벽이 크게 벗겨진 안쪽에서만 벽돌이 덩어리로 빠지고, 주변 벽돌은 헐거워져 기울어지는 계단식 파손. 안벽 손상 범위는 겉벽보다 작게.</li><li><strong>오목한 모서리 판별</strong> — Raycast로 꺾인 안쪽이 구멍인지 판단해, 응력이 집중되는 오목한 지점에서만 크랙 시작.</li><li><strong>크랙 방향 보정</strong> — 일부 크랙이 구멍 쪽으로 자라는 문제를 파손 중심 기준으로 뒤집어 해결.</li><li><strong>크랙 가지(branch) 생성</strong></li></ul>${renderMediaSlots([{src:"../img/RuinForge/07_node-tree.png",alt:"Geometry Nodes 트리 전체 모습",label:"노드",caption:"Geometry Nodes 트리 전체"}],"ko")}<p class="engineering-note">이 페이지의 모든 렌더는 툴로 직접 만든 제 결과물입니다.</p></section>`
            }
          ]
        }
      }
    }
  },

  "07_TooHot": {
    type: "game",
    pinned: true,
    title: "TOO HOT!",
    subtitle: "A custom shadow shader, real-time VFX, and technical direction built under a game-jam deadline",
    pageTitle: "Too Hot — Min Seohyeon Portfolio",
    heroType: "video",
    heroMedia: "../img/TooHot/트레일러1_low.mp4",
    heroPoster: "../img/TooHot/hero.png",
    overviewImage: "../img/TooHot/Boss1.png",
    overview: "A Unity game-jam boss-action project built around readable attack patterns, escalating encounters, and responsive visual feedback.",
    features: [
      "Replaced frame-by-frame character animation with separated body-part rigs driven by skeletal animation — the jam's 10-day timeline had no room for hand-drawn frames",
      "Built the character's fire effect as a shader instead of hand-drawn flame animation, so no frame of it was ever drawn by hand",
      "A custom shadow shader integrated and art-directed for a cohesive, grounded combat presentation",
      "Telegraphed straight, spiral, curved, bouncing, and beam attacks",
      "Boss encounters, hit zones, projectiles, player feedback, and VFX systems",
      "Customizable UI styling with gradients, rounded corners, shadows, presets, and URP blur",
      "A 130+ item cross-discipline backlog prioritized from launch-critical P0 work to deferred P3 polish"
    ],
    experience: {
      role: "Technical Art · Creative / Technical Direction · Producer",
      period: "2026 · Game Jam",
      description: "Owned the project's technical and production direction while directly creating and integrating art, VFX, UI, shaders, and animation. I defined system behavior and architecture requirements, translated them into a prioritized 130+ task backlog, assigned and reviewed implementation, tested results, and coordinated main-branch integration. Teammates authored the gameplay code; the specifications, priorities, review decisions, and visual implementation described here were mine."
    },
    tools: "C# · Unity · HLSL",
    trailers: [],
    videos: [],
    contributions: {
      sections: [
        {
          title: "Art & VFX",
          category: "Art",
          htmlContent: `<section><h2>Implemented by Me</h2><p>Created and integrated game art, composed the combat presentation, and added a custom shadow shader, pattern-specific VFX, UI styling, animation, and impact feedback. I tuned color, scale, timing, and hierarchy so players could read danger quickly while attacks still felt forceful.</p><div class="engineering-case-grid"><article class="engineering-case"><span class="case-label">Artist Problem</span><h3>No time for frame-by-frame animation</h3><p>The character needed full animation, including fire, but the jam's 10-day timeline left no time to hand-draw it frame by frame.</p></article><article class="engineering-case"><span class="case-label">Technical Solution</span><h3>Skeletal rig + a shader for the fire</h3><p>I switched the character to separated body parts driven by skeletal animation instead of drawn frames, and built the fire effect itself as a shader rather than flame artwork.</p></article><article class="engineering-case"><span class="case-label">Result</span><h3>A handful of frames instead of a full animation set</h3><p>The rig and the shader carried most of the motion and all of the fire, so the artist only had to hand-draw a handful of frames instead of a full frame-by-frame set — inside a 10-day jam.</p></article></div><div class="engineering-summary" aria-label="Art coverage"><article><span class="engineering-icon" aria-hidden="true">🌑</span><strong>Shader</strong><small>Custom shadow treatment</small></article><article><span class="engineering-icon" aria-hidden="true">✨</span><strong>VFX</strong><small>Telegraphs · projectiles · beams</small></article><article><span class="engineering-icon" aria-hidden="true">🧩</span><strong>UI</strong><small>Gradients · rounding · URP blur</small></article><article><span class="engineering-icon" aria-hidden="true">🎬</span><strong>Animation</strong><small>Boss + portrait feedback</small></article></div><figure style="margin:1rem 0"><img src="../img/TooHot/CardUI.png" alt="Too Hot card UI styled with the custom UI shader" style="max-width:100%;border-radius:.8rem" /></figure><figure style="margin:1rem 0"><video src="../img/TooHot/effect.mp4" controls muted loop playsinline preload="metadata" style="max-width:100%;border-radius:.8rem"></video><figcaption style="margin-top:.5rem;font-size:.72rem;opacity:.75">A handful of the VFX I built, composited together on one screen — not the full set, just a sample.</figcaption></figure><p style="font-size:.78rem;opacity:.8">The map artwork at the top of this page is also mine, hand-drawn for the project.</p><h3>Custom shadow shader</h3><p>I built and integrated the shadow treatment as part of the real-time visual pipeline, then tuned it against the characters, arena, and effects. It gives the 2D artwork a consistent sense of contact and depth inside Unity instead of relying on individually painted shadow assets.</p><h3>Visual systems in the build</h3><p>The shadow shader works alongside telegraphs, hit zones, projectile and beam effects, player feedback, portraits, boss animation, and shader-driven UI presentation. My focus was connecting those elements into a coherent player experience rather than treating them as isolated assets.</p><h3>Authorship note</h3><p>This was collaborative game-jam work. The shadow shader, art, composition, VFX, UI, animation, and integration described here are my direct contributions; gameplay systems written by teammates are credited as team output.</p></section>`
        },
        {
          title: "Producing",
          category: "Producing",
          htmlContent: `<section><h2>I Defined the Systems and Drove Their Delivery</h2><p>I owned the connection between design intent, technical structure, and production. I decided what the systems needed to do, documented implementation-ready requirements, set priorities and ownership, reviewed the resulting work, requested revisions, tested it in context, and coordinated integration. This was more than scheduling: the backlog encoded the product and technical decisions that guided the programmers' work.</p><div class="direction-case-grid"><article><span class="case-label">Architecture Direction</span><h3>Data-driven stage flow</h3><p>Directed the replacement of scene-specific dialogue loading with a centralized <code>GameplayManager</code> and per-stage <code>StageData</code> ScriptableObjects coordinating boss, dialogue, progression, and ending conditions.</p></article><article><span class="case-label">Reliability Direction</span><h3>Progression safeguards</h3><p>Identified final-stage out-of-range failure cases and defined validation and recovery requirements for corrupted or unexpected save values.</p></article><article><span class="case-label">Workflow Design</span><h3>Faster playtesting</h3><p>Specified editor-facing chapter selection and clean-state reset controls so stages and relic state could be tested directly without replaying from the title screen.</p></article><article><span class="case-label">Creative Prioritization</span><h3>Spent the remaining time on impact</h3><p>Rejected redundant damage numbers because the boss HP bar already communicated the result, then redirected the remaining effort to camera response for stronger hit feedback.</p></article></div><h3>From direction to delivery</h3><p>I maintained a cross-discipline backlog of more than 130 tasks spanning gameplay systems, content, art, UI, VFX, audio, and presentation.</p><div class="production-evidence"><div><strong>P0 · Must ship</strong><span>Dialogue, save/continue, boss phases, and critical boss patterns</span></div><div><strong>P1 · Should ship</strong><span>Stage warnings, transition presentation, and full-health HP-bar visibility</span></div><div><strong>P3 · Defer if needed</strong><span>Camera polish and optional interaction refinements after the playable core</span></div></div><ul><li>Assigned system ownership and let programmers dynamically claim remaining P0 work.</li><li>Tracked every item through implementation, review, rework, testing, and completion.</li><li>Ran a separate bug workflow with severity, reproduction steps, branch, reporter, and assignee.</li><li>Reviewed completed systems before main-branch integration, then scheduled the visual pass around finished boss patterns.</li></ul><p class="case-study-note"><strong>Authorship boundary:</strong> teammates wrote the gameplay code. I authored the system requirements and production plan, made the architecture and priority calls documented here, reviewed and tested the implementations, and directly created the visual work identified in the Art tab.</p></section>`
        }
      ]
    },
    source: {
      text: "Inspect the team project and implementation on GitHub.",
      url: "https://github.com/Seohyeon-Min/team17_gamejam",
      label: "GitHub"
    },
    localized: {
      ko: {
        subtitle: "게임잼 기간 안에 구현한 커스텀 그림자 셰이더와 실시간 VFX, 테크니컬 디렉팅",
        overview: "짧은 게임잼 기간 동안 보스 공격의 가독성과 손맛을 집중적으로 다듬은 Unity 액션 게임입니다. 플레이어가 위험 범위와 공격 방향을 즉시 알아보고, 피격과 반격의 결과도 확실하게 느낄 수 있도록 화면을 구성했습니다.",
        features: [
          "10일짜리 잼 일정상 프레임 단위 손그림 애니메이션을 그릴 시간이 없어, 캐릭터를 부위별로 분리해 스켈레탈 애니메이션으로 전환",
          "캐릭터에 들어가는 불 이펙트를 손그림 애니메이션이 아니라 셰이더로 제작해, 불 프레임을 따로 그릴 필요가 없게 함",
          "캐릭터와 전투 공간에 깊이와 접지감을 더하는 커스텀 그림자 셰이더 제작·적용",
          "직선·나선·곡선·반사 투사체와 빔의 방향을 미리 읽을 수 있는 공격 전조",
          "피격 범위와 투사체, 보스 패턴에 맞춘 플레이어 피드백과 VFX",
          "그라디언트와 둥근 모서리, 그림자, 프리셋과 URP 블러를 한곳에서 조절하는 UI 스타일 기능",
          "출시에 꼭 필요한 P0부터 후순위 P3까지 나눈 130개 이상의 직군 통합 작업 보드"
        ],
        experience: {
          role: "테크니컬 아트 · 크리에이티브/테크니컬 디렉팅 · 프로듀서",
          period: "2026 · 게임잼",
          description: "프로젝트의 기술 방향과 제작 전반을 책임지는 동시에 아트와 VFX, UI, 셰이더, 애니메이션을 직접 제작·적용했습니다. 시스템의 동작과 구조를 정하고 이를 130개 이상의 우선순위 작업으로 구체화한 뒤, 담당 배정부터 구현 리뷰와 테스트, 메인 브랜치 통합까지 이끌었습니다. 게임플레이 코드는 팀원이 작성했으며, 요구사항과 우선순위, 리뷰 판단, 비주얼 구현은 제가 맡았습니다."
        },
        contributions: {
          sections: [
            {
              title: "아트 · VFX",
              category: "Art",
              htmlContent: `<section><h2>제가 직접 구현한 작업</h2><p>게임 아트를 제작·적용하고 전투 화면을 구성했으며, 커스텀 그림자 셰이더와 패턴별 VFX, UI 스타일, 애니메이션, 타격 피드백을 추가했습니다. 플레이어가 위험을 빠르게 읽으면서도 공격은 강하게 느끼도록 색과 크기, 타이밍, 화면의 위계를 반복해서 조절했습니다.</p><div class="engineering-case-grid"><article class="engineering-case"><span class="case-label">아티스트의 문제</span><h3>프레임 단위 애니메이션을 그릴 시간이 없었음</h3><p>캐릭터에 불 이펙트까지 들어가는 애니메이션이 필요했지만, 10일짜리 잼 일정상 프레임을 하나하나 손으로 그릴 시간이 없었습니다.</p></article><article class="engineering-case"><span class="case-label">기술적 해결</span><h3>스켈레탈 리그 + 불은 셰이더로</h3><p>캐릭터를 부위별로 분리해 스켈레탈 애니메이션으로 움직이게 바꾸고, 불 이펙트 자체도 그림이 아니라 셰이더로 제작했습니다.</p></article><article class="engineering-case"><span class="case-label">결과</span><h3>전체 프레임 대신 몇 장만 직접 그림</h3><p>리그와 셰이더가 움직임과 불 이펙트를 대부분 대신해서, 아티스트는 전체 프레임을 다 그리는 대신 몇 장만 직접 그리면 됐습니다 — 10일 안에.</p></article></div><div class="engineering-summary" aria-label="아트 제작 범위"><article><span class="engineering-icon" aria-hidden="true">🌑</span><strong>셰이더</strong><small>커스텀 그림자 표현</small></article><article><span class="engineering-icon" aria-hidden="true">✨</span><strong>VFX</strong><small>전조 · 투사체 · 빔</small></article><article><span class="engineering-icon" aria-hidden="true">🧩</span><strong>UI</strong><small>그라디언트 · 라운딩 · URP 블러</small></article><article><span class="engineering-icon" aria-hidden="true">🎬</span><strong>애니메이션</strong><small>보스 · 포트레이트 피드백</small></article></div><figure style="margin:1rem 0"><img src="../img/TooHot/CardUI.png" alt="커스텀 UI 셰이더를 적용한 Too Hot 카드 UI" style="max-width:100%;border-radius:.8rem" /></figure><figure style="margin:1rem 0"><video src="../img/TooHot/effect.mp4" controls muted loop playsinline preload="metadata" style="max-width:100%;border-radius:.8rem"></video><figcaption style="margin-top:.5rem;font-size:.72rem;opacity:.75">제가 만든 이펙트 중 일부를 한 화면에 모아본 영상입니다 — 전부는 아니고 몇 개만 골랐습니다.</figcaption></figure><p style="font-size:.78rem;opacity:.8">페이지 맨 위의 맵 아트워크도 제가 직접 그렸습니다.</p><h3>커스텀 그림자 셰이더</h3><p>캐릭터와 전투 공간이 따로 떠 보이지 않도록 실시간 그림자 표현을 제작해 Unity에 적용했습니다. 에셋마다 그림자를 별도로 그려 넣는 대신, 캐릭터와 배경, 이펙트를 함께 보며 그림자 표현을 조절해 2D 화면에 일관된 접지감과 깊이를 만들었습니다.</p><h3>플레이 화면에 연결된 요소</h3><p>그림자 셰이더를 공격 전조와 피격 범위, 투사체·빔 이펙트, 플레이어 피드백, 포트레이트, 보스 애니메이션, 셰이더 기반 UI와 하나의 경험으로 연결했습니다. 개별 에셋보다 실제 플레이에서 함께 작동하는 화면을 만드는 데 집중했습니다.</p><h3>기여 범위</h3><p>이 프로젝트는 팀으로 만든 게임잼 작품입니다. 여기서 소개하는 그림자 셰이더와 아트, 화면 구성, VFX, UI, 애니메이션, 통합은 제가 직접 맡았으며, 팀원이 작성한 게임플레이 시스템은 팀 결과물로 구분합니다.</p></section>`
            },
            {
              title: "프로듀싱",
              category: "Producing",
              htmlContent: `<section><h2>시스템을 정의하고 완성까지 이끌었습니다</h2><p>기획 의도와 기술 구조, 실제 제작을 잇는 역할을 맡았습니다. 시스템이 어떻게 동작해야 하는지 결정하고 개발자가 바로 구현할 수 있는 요구사항으로 정리한 뒤, 우선순위와 담당자를 정하고 구현 결과를 리뷰했습니다. 수정 요청과 테스트, 통합까지 이어졌기 때문에 단순한 일정 관리가 아니라 개발 방향 자체를 작업 보드에 구체화한 일이었습니다.</p><div class="direction-case-grid"><article><span class="case-label">구조 디렉팅</span><h3>데이터 중심 스테이지 흐름</h3><p>씬마다 대화를 불러오던 구조를 <code>GameplayManager</code>와 스테이지별 <code>StageData</code> ScriptableObject 중심으로 바꾸도록 방향을 정했습니다. 보스와 대화, 진행 데이터, 마지막 챕터 이후 엔딩 조건을 한 흐름에서 관리하도록 요구사항을 제시했습니다.</p></article><article><span class="case-label">안정성 디렉팅</span><h3>진행 데이터 방어</h3><p>마지막 챕터 이후 인덱스가 범위를 벗어나는 문제를 먼저 발견하고, 손상되거나 예상 밖인 세이브 값을 검사·보정하는 조건을 정의했습니다.</p></article><article><span class="case-label">워크플로 설계</span><h3>빠른 스테이지 테스트</h3><p>타이틀부터 반복 플레이하지 않아도 되도록 챕터 선택과 유물 데이터까지 포함한 클린 상태 초기화를 에디터 디버그 기능으로 지정했습니다.</p></article><article><span class="case-label">크리에이티브 우선순위</span><h3>남은 시간은 타격감에 집중</h3><p>보스 HP바와 정보가 겹치는 대미지 숫자는 제외하고, 제한된 시간을 공격 적중 순간의 카메라 반응에 사용하도록 방향을 전환했습니다.</p></article></div><h3>방향 결정에서 완성까지</h3><p>게임플레이 시스템과 콘텐츠, 아트, UI, VFX, 사운드, 연출에 걸친 130개 이상의 작업을 하나의 우선순위 보드로 운영했습니다.</p><div class="production-evidence"><div><strong>P0 · 반드시 완성</strong><span>다이얼로그, 세이브·이어하기, 보스 페이즈와 핵심 패턴</span></div><div><strong>P1 · 중요</strong><span>스테이지 경고, 전환 연출과 풀피 몬스터 HP 표시 규칙</span></div><div><strong>P3 · 여유가 있을 때</strong><span>카메라 폴리시와 선택 조작 등 코어 이후의 개선</span></div></div><ul><li>시스템별 담당을 정하고 남은 P0 작업은 프로그래머가 유동적으로 가져가도록 운영했습니다.</li><li>모든 작업을 구현, 리뷰, 재작업, 테스트, 완료 단계로 나눠 추적했습니다.</li><li>심각도와 재현 방법, 브랜치, 작성자, 수정자를 기록하는 별도 버그 흐름을 운영했습니다.</li><li>완성된 시스템을 메인 브랜치에 합치기 전에 검토하고, 보스 패턴 구현 순서에 맞춰 후속 비주얼 작업을 배치했습니다.</li></ul><p class="case-study-note"><strong>기여 범위:</strong> 게임플레이 코드는 팀원이 작성했습니다. 저는 시스템 요구사항과 제작 계획을 작성하고, 여기 소개한 구조와 우선순위를 결정했으며, 구현 리뷰와 테스트를 맡았습니다. 아트 탭의 비주얼 작업은 제가 직접 구현했습니다.</p></section>`
            }
          ]
        },
        source: {
          text: "GitHub에서 팀 프로젝트와 구현을 확인할 수 있습니다.",
          url: "https://github.com/Seohyeon-Min/team17_gamejam",
          label: "GitHub"
        }
      }
    }
  },

  // ========== 기술 프로젝트 ==========
  "01_hello": {
    type: "tech",
    title: "Hello Quad",
    pageTitle: "TECH - MSH PORTFOLIO",
    thumbnail: "../img/portfolio_thumbnails/01_hello.jpg",
    overview: "이 프로젝트는 WebGL을 사용하여 단순한 사각형에 셰이더를 구현하는 과제였습니다. 주요 목표는 마우스 움직임에 따라 오브젝트의 변환을 적용하고 모델의 크기에 따라 변하는 부드러운 무지개 그라디언트 색상을 렌더링하는 것이었습니다.",
    tasks: [
      "<strong>버텍스 셰이더:</strong> 마우스 입력에 반응하는 변환 행렬을 적용해 회전 로직을 구현했습니다.",
      "<strong>프래그먼트 셰이더:</strong> 모델의 스케일에 따라 점진적으로 변화하는 무지개 색상 효과를 구현했으며, HSV를 RGB로 변환하여 생성했습니다.",
      "<strong>OpenGL 클래스 구현:</strong> 텍스처, 버텍스 버퍼, 인덱스 버퍼, 버텍스 배열 등의 OpenGL 리소스를 모듈화하여 재사용성과 코드의 명확성을 높였습니다."
    ],
    reflection: "가장 도전적이었던 부분은 웹 디버깅 환경을 설정하는 것이었습니다. CMake 설정과 환경 변수 관리가 꽤 어려웠지만 이러한 과정을 극복하면서 WebGL 개발을 위한 빌드 시스템과 프로젝트 설정에 대한 깊은 이해를 얻게 되었습니다.",
    demo: {
      src: "../webgl/D01HelloQuad/graphics_fun.html",
      start: null
    }
  },

  "02_meshes": {
    type: "tech",
    title: "Procedural Geometric Modeling",
    pageTitle: "TECH - MSH PORTFOLIO",
    thumbnail: "../img/portfolio_thumbnails/02_meshes.jpg",
    overview: "이 프로젝트는 OpenGL과 GLSL을 활용해 3D 기하학 모델을 프로시저 방식으로 생성하는 데 중점을 두었습니다. 주요 목표는 정육면체, 구, 원기둥, 원뿔, 토러스와 같은 다양한 도형을 파라메트릭 방정식을 이용해 생성하고 이를 렌더링하기 위한 인덱스 버퍼와 정점 속성을 구성하는 것이었습니다.",
    tasks: [
      "<strong>프로시저 메쉬 생성:</strong> 평면, 큐브, 구, 원기둥, 원뿔, 토러스의 기하 구조를 파라메트릭 수식과 삼각함수를 활용하여 생성하였습니다.",
      "<strong>정점 레이아웃 정의:</strong> 위치, 노멀, UV 속성을 포함한 사용자 정의 정점 구조체를 정의하고 이를 OpenGL의 버퍼 레이아웃에 매핑하였습니다.",
      "<strong>캡 생성 및 토폴로지 처리:</strong> 원기둥과 원뿔의 상단 및 하단 면(캡)을 구성하는 로직을 추가하여 기하 구조가 빈틈없이 연결되도록 처리했습니다."
    ],
    reflection: "이번 프로젝트에서 중요한 학습 포인트는 메쉬의 토폴로지 구성과 인덱스 버퍼 생성 방식이었습니다. 정점 연결 순서를 신중히 관리하고 인덱스가 정점에 어떻게 매핑되는지를 이해하는 것이 핵심이었습니다. 또한, 재사용 가능한 메쉬 생성 함수를 모듈화하면서 렌더링 파이프라인에서 메쉬 데이터가 흐르는 방식을 더 깊이 있게 이해할 수 있었습니다.",
    demo: {
      src: "../webgl/D02ProceduralMeshes/graphics_fun.html",
      start: "meshes"
    }
  }
};

// Older case studies were originally authored in Korean. Keep those originals
// for KR mode, while presenting concise, contribution-first English by default.
function applyEnglishProjectOverride(projectId, english) {
  const project = projectsData[projectId];
  if (!project) return;

  const korean = {};
  Object.keys(english).forEach(key => {
    if (project[key] !== undefined) korean[key] = project[key];
  });

  project.localized = project.localized || {};
  project.localized.ko = { ...(project.localized.ko || {}), ...korean };
  Object.assign(project, english);
}

// Ruin Forge portfolio update: renders and the inner-brick pass arrived after the first draft.
(() => {
  const p = projectsData["10_RuinForge"];
  if (!p) return;
  p.heroMedia = "../img/RuinForge/01_main.jpg";
  p.subtitle = "Procedural ruined-wall tool · Blender 5.2 Geometry Nodes · in progress";
  p.overview = "An artist-facing Geometry Nodes tool that generates concrete shell damage, boundary-driven cracks, and damaged brickwork from one control object. Artists can tune from an intact surface to a punched-through ruin without hand-modeling each result.";
  p.features = ["One DamageCtrl drives plaster damage, cracks, and exposed bricks", "Cracks originate from the Boolean boundary at qualifying concave corners", "Two-stage brick damage preserves chunks, then fractures boundary bricks", "Mortar cleanup and hidden-brick removal reduce geometry from about 116k to 30k vertices"];
  p.experience = { role: "Technical Artist — Procedural Tools (solo)", period: "2026 · Personal project", description: "Owned the tool behavior, parameter requirements, validation criteria, and final node integration. Collaborated with AI on parts of the node construction, then verified geometry, topology, and artist-facing controls." };
  const media = (lang, items) => renderMediaSlots(items.map(([src, label, caption, alt]) => ({ src: `../img/RuinForge/${src}`, label, caption, alt })), lang);
  const story = (lang) => {
    const ko = lang === "ko";
    const x = ko ? {
      title: "하나의 컨트롤로 만드는 절차적 폐허 벽", lead: "겉면의 콘크리트 파손·크랙과 그 안쪽의 벽돌 구조 붕괴를 하나의 컨트롤 오브젝트로 생성하는 아티스트용 툴입니다. 모든 결과는 모디파이어 파라미터로 조절됩니다.", result: "최종 결과", structure: "단방향 구조로 순환 참조 피하기", structureText: "겉벽(WallOut)과 안벽(WallIn)을 분리했습니다. 안벽은 겉벽의 결과만 메시 속성으로 전달받아 Attribute Statistic으로 읽습니다. 겉벽은 안벽을 알 필요가 없어 같은 파손 데이터를 공유하면서도 순환 참조가 생기지 않습니다.", cracks: "실제 파손 경계를 따르는 크랙", cracksText: "노이즈로 변형한 볼륨 커터를 Manifold Boolean으로 겉벽에 적용하고, Intersecting Edges로 실제 경계를 추출합니다. 이웃 방향의 내적과 Raycast를 함께 사용해 오목한 모서리만 시작점으로 고른 뒤, 인덱스 교차 오프셋·랜덤 진폭·방향 jitter로 반복되지 않는 지그재그 크랙을 만듭니다.", bricks: "벽돌을 두 단계로 파손", bricksText: "1차에서는 부드러운 파손 깊이와 벽돌별 랜덤 오프셋으로 벽돌을 통째로 제거해 덩어리를 유지합니다. 2차에서는 얕은 보로노이·노이즈 커터로 경계 벽돌만 깨뜨려 자연스러운 단면을 만듭니다. Influence와 Depth로 멀쩡함부터 부분 파손, 관통 파손까지 연속적으로 조절합니다.", compare: "파라미터 비교", compareText: "같은 벽에서 Inner Break Influence / Depth만 바꾼 결과입니다.", quality: "최적화와 품질 정리", qualityText: "보이지 않는 안쪽 벽돌을 생략하고 빠진 벽돌 주변의 줄눈을 제거해 약 11.6만 버텍스에서 3만으로 줄였습니다. 벽 끝 벽돌은 클리핑하고 벽돌·줄눈의 근접면을 정리해 z-fighting도 제거했습니다.", ai: "AI 협업 범위", aiText: "요구사항 정의, 파손 방향, 파라미터 설계, 검증과 최종 통합은 제가 맡았습니다. 보로노이 크랙 네트워크와 일부 노드 구성은 AI와 협업했습니다. 결과는 실제 렌더와 토폴로지·성능 수치로 검증했습니다.", next: "한계와 다음 단계", nextText: "현재 로컬 +X를 바라보는 평면 벽을 기준으로 합니다. 다음 단계는 고정 축을 표면 노멀 샘플링으로 일반화해 곡면과 옆면에도 대응하고, 참조 겉벽 오브젝트를 모디파이어 입력으로 노출해 여러 벽에 재사용하는 것입니다." } : {
      title: "Procedural ruin walls from one control object", lead: "An artist-facing tool that generates concrete shell damage, cracks, and collapsing interior brickwork from a single control object. Every result is exposed as modifier parameters.", result: "Final result", structure: "One-way data flow; no circular dependency", structureText: "WallOut and WallIn are separate objects. WallIn reads shared damage values from WallOut mesh attributes through Attribute Statistic; WallOut never reads WallIn, so both layers share the break without a circular reference.", cracks: "Cracks follow the real break boundary", cracksText: "A noise-deformed volume cutter damages the outer wall through a Manifold Boolean. Intersecting Edges extracts the resulting boundary. Neighbor-direction dot products and Raycast select concave corners, then alternating offsets and randomized jitter form non-repeating zigzag cracks.", bricks: "Two-stage brick damage", bricksText: "Stage one removes whole bricks with smooth damage depth and per-brick random offsets, preserving the sense of chunks. Stage two fractures only boundary bricks with shallow Voronoi/noise cutters for a convincing cross-section. Influence and Depth continuously move from intact to partial to punched-through damage.", compare: "Parameter comparison", compareText: "The same wall with only Inner Break Influence / Depth changed.", quality: "Optimization and cleanup", qualityText: "Skipping unseen interior bricks and removing mortar around missing bricks reduced geometry from about 116k to 30k vertices. End bricks are clipped, and near-coplanar brick/mortar faces are cleaned to remove z-fighting.", ai: "AI collaboration", aiText: "I owned requirements, damage direction, parameter design, verification, and final integration. I collaborated with AI on the Voronoi crack network and parts of node construction, then validated results with renders, topology checks, and performance counts.", next: "Limits and next steps", nextText: "The current tool assumes a planar wall facing local +X. Next, sampled surface normals will replace that fixed axis for curved and side-facing surfaces, and WallOut will become a modifier input for reuse across walls." };
    const final = media(lang, [["01_main.jpg", ko ? "메인 렌더" : "Hero render", ko ? "콘크리트 껍데기, 크랙, 안쪽 벽돌 구조" : "Concrete shell, cracks, and interior brick structure", ko ? "크랙과 노출된 벽돌 구조가 보이는 Ruin Forge 전체 렌더" : "Full Ruin Forge render with cracked concrete and exposed brick"], ["02_closeup_bricks.jpg", ko ? "벽돌 단면" : "Brick cross-section", ko ? "1차 제거 + 2차 경계 파손" : "Stage-one removal + stage-two edge fracture", ko ? "통째로 빠진 벽돌과 부분 파손 벽돌의 클로즈업" : "Close-up of removed and partially fractured bricks"], ["03_closeup_cracks.jpg", ko ? "크랙" : "Cracks", ko ? "경계에서 시작하는 불규칙한 균열" : "Irregular fractures growing from the boundary", ko ? "벽 표면의 절차적 크랙 클로즈업" : "Close-up of procedural cracks"]]);
    const compare = media(lang, [["04_compare_0_0.jpg", "0 / 0", ko ? "거의 멀쩡한 안벽" : "Mostly intact inner wall", ko ? "파손 영향도와 깊이 0의 벽" : "Wall at zero break influence and depth"], ["05_compare_05_05.jpg", "0.5 / 0.5", ko ? "부분 파손" : "Partial damage", ko ? "중간 파손 설정의 벽" : "Wall at a mid-level break setting"], ["06_compare_1_1.jpg", "1 / 1", ko ? "원뿔형 관통 파손" : "Conical punched-through damage", ko ? "파손 영향도와 깊이 1의 벽" : "Wall at full break influence and depth"]]);
    return `<section><h2>${x.title}</h2><p class="case-study-lede">${x.lead}</p><p class="metric-source-note"><strong>${ko ? "진행 중인 개인 프로젝트:" : "Personal work in progress:"}</strong> ${ko ? "이 페이지는 현재 구현·검증된 기능과 렌더를 기준으로 정리했습니다." : "This page documents features that are currently implemented and verified."}</p><h3>${x.result}</h3>${final}<h3>${x.structure}</h3><p>${x.structureText}</p><h3>${x.cracks}</h3><p>${x.cracksText}</p><h3>${x.bricks}</h3><p>${x.bricksText}</p><h3>${x.compare}</h3><p>${x.compareText}</p>${compare}<h3>${x.quality}</h3><p>${x.qualityText}</p><h3>${x.ai}</h3><p>${x.aiText}</p><h3>${x.next}</h3><p>${x.nextText}</p></section>`;
  };
  p.contributions.sections = [{ title: "Procedural Ruin-Wall Tool", category: "Technical", htmlContent: story("en") }];
  const ko = p.localized.ko;
  ko.subtitle = "절차적 폐허 벽 파손 툴 · Blender 5.2 Geometry Nodes · 진행 중";
  ko.overview = "콘크리트 껍데기 파손, 실제 파손 경계에서 자라는 크랙, 손상된 내부 벽돌 구조를 컨트롤 오브젝트 하나로 생성하는 아티스트용 Geometry Nodes 툴입니다. 겉벽과 안쪽 벽돌 벽을 분리해 멀쩡한 표면부터 관통된 폐허 벽까지 손으로 모델링하지 않고 조절할 수 있습니다.";
  ko.features = ["DamageCtrl 하나로 겉벽 파손·크랙·노출된 벽돌 구조를 함께 제어", "Boolean 경계와 오목한 모서리에서만 시작하는 크랙", "1차 벽돌 제거 + 2차 경계 파손으로 덩어리와 단면을 분리", "줄눈 정리와 보이지 않는 벽돌 생략으로 약 11.6만 → 3만 버텍스"];
  ko.experience = { role: "테크니컬 아티스트 — 절차적 툴 (개인)", period: "2026년 · 개인 프로젝트", description: "툴의 동작 방향, 파라미터 요구사항, 검증 기준과 최종 노드 통합을 설계했습니다. 노드 구성 일부는 AI와 협업했으며, 결과 지오메트리·토폴로지·아티스트용 제어를 직접 검증했습니다." };
  ko.contributions.sections = [{ title: "절차적 폐허 벽 파손 툴", category: "Technical", htmlContent: story("ko") }];
})();

// Expanded Ruin Forge case study: parameters, iteration evidence, node layout, and authorship.
(() => {
  const p = projectsData["10_RuinForge"];
  if (!p) return;
  const figures = (lang, list) => renderMediaSlots(list.map(([file, label, caption, alt]) => ({ src: `../img/RuinForge/${file}`, label, caption, alt })), lang);
  const makeCaseStudy = (lang) => {
    const ko = lang === "ko";
    const s = ko ? {
      heading: "툴을 어떻게 쓰는지까지 보여주는 절차적 파손 시스템",
      lede: "Ruin Forge는 ‘한 장의 결과물’을 만드는 노드가 아니라, 환경 아티스트가 DamageCtrl을 옮기고 몇 개의 값만 조절해 여러 상태의 폐허 벽을 만들 수 있도록 설계한 Geometry Nodes 툴입니다.",
      status: "진행 중인 개인 프로젝트", intro: "아래에는 현재 구현되어 렌더로 확인한 기능만 담았습니다. 곡면 대응, 여러 벽 재사용, 최종 재질 작업은 다음 단계입니다.",
      use: "아티스트 워크플로", useCopy: "작업자는 노드 트리를 열지 않고 DamageCtrl로 파손 위치를 정한 뒤, 모디파이어 패널에서 범위·깊이·시드·균열 성격을 조절합니다. 같은 셋업으로 멀쩡한 벽부터 깊게 관통된 벽까지 빠르게 반복할 수 있습니다.",
      controls: "모디파이어 파라미터", controlsCopy: "외벽과 안벽의 조절 범위를 분리해, 모양은 유지하면서 손상만 바꾸거나 반대로 내부 파손만 강조할 수 있습니다.",
      bricks: "두 단계 벽돌 파손", bricksCopy: "1차 단계는 벽돌 중심에서 파손 깊이를 샘플링하고, 벽돌별 랜덤 오프셋을 적용해 해당 벽돌 전체를 제거합니다. 2차 단계는 얕은 보로노이·노이즈 커터를 경계 벽돌에만 적용해 단면을 파손합니다. 두 단계를 분리해 벽돌 제거 범위와 경계 벽돌의 파손 정도를 독립적으로 조절합니다.",
      compare: "Influence / Depth 비교", compareCopy: "같은 벽에서 Inner Break Influence와 Depth만 바꾼 결과입니다. 0/0은 거의 멀쩡한 안벽, 0.5/0.5는 부분 파손, 1/1은 원뿔형 관통 파손입니다.",
      iteration: "크랙 결과 변형", iterationCopy: "V2와 V3는 해당 툴을 사용해 생성한 다양한 크랙 결과입니다.",
      nodes: "노드 구조", nodesCopy: "바깥쪽 파손과 안쪽 벽돌 파손을 분리했습니다. WallOut은 파손 데이터의 원천이고, WallIn은 그 결과를 메시 속성으로 전달받아 Attribute Statistic으로 읽습니다. 따라서 안벽이 겉벽을 되읽지 않아 순환 참조 없이 동일한 파손을 공유합니다.",
      quality: "검증·최적화", qualityCopy: "크랙 커터는 볼륨으로 정리한 뒤 Manifold Boolean으로 적용해 비매니폴드 엣지를 0개로 만들었습니다. 또한 보이지 않는 안쪽 벽돌을 생략하고 빠진 벽돌 주변의 줄눈을 제거해 약 11.6만에서 3만 버텍스로 줄였으며, 벽 끝 벽돌 클리핑과 근접면 정리로 z-fighting을 제거했습니다.",
      authorship: "AI 협업과 직접 구현 범위", ownTitle: "직접 설계·구현·검증", own: ["아티스트 문제 정의, 툴 동작 방향, 모디파이어 파라미터와 품질 기준 설계", "겉벽/안벽 단방향 데이터 구조, 실제 Boolean 경계 기반 크랙 시작점, 오목 모서리 판정의 요구사항 결정", "벽돌 2단계 파손, 줄눈 정리, 벽 끝 클리핑, z-fighting 해결과 버텍스 최적화", "렌더 결과·토폴로지·성능 수치를 확인하고 최종 노드 통합"], aiTitle: "AI와 협업한 부분", ai: ["보로노이 크랙 네트워크의 노드 구성: 포물면 리프트 + Convex Hull로 들로네를 만들고 Dual Mesh로 셀을 얻는 접근", "일부 반복적인 Geometry Nodes 연결과 초기 노드 조합 제안"], boundary: "AI가 제안한 노드 구성도 요구사항에 맞는지, 툴에서 실제로 어떤 결과가 나오는지, 토폴로지와 성능이 기준을 만족하는지는 제가 확인하고 수정했습니다. 따라서 결과 이미지가 아니라 문제 정의·선택·검증 과정을 함께 보여줍니다.",
      next: "현재 한계와 다음 단계", nextCopy: "현재 로컬 +X를 바라보는 평면 벽 기준입니다. 다음으로 고정 축을 표면 노멀 샘플링으로 일반화해 곡면·옆면에 대응하고, 참조 겉벽 오브젝트를 모디파이어 입력으로 노출해 여러 벽에서 재사용할 예정입니다. 깨진 면의 재질도 텍스처와 노멀맵으로 보강합니다." } : {
      heading: "A procedural damage system that shows how artists use it", lede: "Ruin Forge is not a node graph for one image. It is a Geometry Nodes tool designed so environment artists can move DamageCtrl and tune a few values to generate many ruined-wall states.", status: "Personal project in progress", intro: "This page covers only implemented features verified in renders. Curved-surface support, multi-wall reuse, and final materials remain next steps.", use: "Artist workflow", useCopy: "Without opening the node tree, an artist places DamageCtrl, then adjusts range, depth, seed, and crack character in the modifier panel. The same setup supports quick iteration from intact to deeply punched-through walls.", controls: "Modifier parameters", controlsCopy: "Outer and inner damage controls are separated, so artists can preserve a silhouette while changing damage, or emphasize interior destruction independently.", bricks: "Two-stage brick damage", bricksCopy: "Stage one reads damage depth at each brick center and removes whole bricks with randomized offsets, preserving chunks. Stage two applies shallow Voronoi/noise cutters only to boundary bricks for a broken cross-section. Separating these stages keeps chunk mass and fracture detail independently tunable.", compare: "Influence / Depth comparison", compareCopy: "Only Inner Break Influence and Depth change across this same wall: 0/0 stays mostly intact, 0.5/0.5 partially breaks, and 1/1 punches through in a cone.", iteration: "Crack design iteration", iterationCopy: "V2 and V3 are experiments in how the crack system can be used and extended. The core reads the real Boolean boundary from Intersecting Edges, selects concave turns with neighbor-direction dot products and Raycast, then layers alternating offsets, randomized amplitude, and directional jitter to avoid repeated zigzags.", nodes: "Node structure", nodesCopy: "Outer damage and interior brick damage are separate. WallOut is the source of damage data; WallIn receives it through mesh attributes and reads it with Attribute Statistic. The layers share damage without a circular reference.", quality: "Validation and optimization", qualityCopy: "Volume cleanup followed by a Manifold Boolean produces 0 non-manifold edges. Skipping unseen inner bricks and removing mortar around missing bricks reduced the mesh from about 116k to 30k vertices; end-brick clipping and near-face cleanup remove z-fighting.", authorship: "AI collaboration and individual ownership", ownTitle: "Designed, implemented, and validated by me", own: ["Artist problem definition, tool behavior, modifier parameters, and quality criteria", "The one-way WallOut/WallIn structure, boundary-driven crack requirement, and concave-corner rule", "Two-stage brick damage, mortar cleanup, end clipping, z-fighting fixes, and vertex optimization", "Render, topology, and performance checks plus final node integration"], aiTitle: "AI-assisted", ai: ["Node construction for the Voronoi crack network: paraboloid lift + Convex Hull for Delaunay, then Dual Mesh for cells", "Suggestions for repetitive Geometry Nodes wiring and initial node combinations"], boundary: "I reviewed and revised AI-suggested graphs against the requirements, final visual result, topology, and performance. The page therefore shows the decisions and validation—not only the final image.", next: "Current limits and next steps", nextCopy: "The current tool assumes a planar wall facing local +X. Next, fixed axes will become sampled surface normals for curved and side-facing surfaces; WallOut will become a modifier input for reuse across walls, and material textures/normal maps will strengthen broken surfaces." };
    const params = figures(lang, [["Parameter.png", ko ? "겉벽 파라미터" : "Outer-wall controls", ko ? "파손 크기·크랙·보로노이 조절" : "Damage, crack, and Voronoi controls", ko ? "Ruin Forge 외벽 모디파이어 파라미터" : "Ruin Forge outer-wall modifier parameters"], ["ParameterIn.png", ko ? "안벽 파라미터" : "Inner-wall controls", ko ? "Influence·Depth·Brick Jitter 조절" : "Influence, Depth, and Brick Jitter controls", ko ? "Ruin Forge 안벽 모디파이어 파라미터" : "Ruin Forge inner-wall modifier parameters"]]);
    const versions = figures(lang, [["crack_otherV2.png", "V2", ko ? "크랙 사용/확장 실험" : "Crack-use experiment", ko ? "Ruin Forge 크랙 V2 실험 이미지" : "Ruin Forge crack V2 experiment"], ["crack_otherV3.png", "V3", ko ? "크랙 사용/확장 실험" : "Crack-use experiment", ko ? "Ruin Forge 크랙 V3 실험 이미지" : "Ruin Forge crack V3 experiment"]]);
    const nodes = figures(lang, [["NodeOuter.png", ko ? "WallOut" : "WallOut", ko ? "겉벽 파손·크랙 노드 그룹" : "Outer-wall damage and crack group", ko ? "Ruin Forge 외벽 Geometry Nodes 그래프" : "Ruin Forge outer-wall Geometry Nodes graph"], ["NodeInner.png", ko ? "WallIn" : "WallIn", ko ? "안벽 벽돌 파손 노드 그룹" : "Interior brick-damage group", ko ? "Ruin Forge 안벽 Geometry Nodes 그래프" : "Ruin Forge interior-wall Geometry Nodes graph"]]);
    const result = figures(lang, [["01_main.jpg", ko ? "메인 렌더" : "Hero render", ko ? "콘크리트 껍데기·크랙·벽돌 구조" : "Concrete shell, cracks, and brick structure", ko ? "크랙과 노출된 벽돌 구조가 보이는 Ruin Forge 전체 렌더" : "Full Ruin Forge render"], ["02_closeup_bricks.jpg", ko ? "벽돌 단면" : "Brick cross-section", ko ? "통째로 빠진 벽돌 + 경계 파손" : "Whole-brick loss + boundary fracture", ko ? "부분 파손 벽돌 클로즈업" : "Partially fractured bricks"], ["03_closeup_cracks.jpg", ko ? "크랙" : "Cracks", ko ? "경계에서 시작하는 불규칙한 균열" : "Irregular boundary-driven fractures", ko ? "벽 표면 절차적 크랙" : "Procedural wall cracks"]]);
    const comparison = figures(lang, [["04_compare_0_0.jpg", "0 / 0", ko ? "거의 멀쩡한 안벽" : "Mostly intact", ko ? "파손 영향도와 깊이 0" : "Zero break influence and depth"], ["05_compare_05_05.jpg", "0.5 / 0.5", ko ? "부분 파손" : "Partial damage", ko ? "중간 파손 설정" : "Mid-level damage"], ["06_compare_1_1.jpg", "1 / 1", ko ? "원뿔형 관통 파손" : "Punched-through damage", ko ? "파손 영향도와 깊이 1" : "Full break influence and depth"]]);
    const list = (items) => `<ul>${items.map(item => `<li>${item}</li>`).join("")}</ul>`;
    return `<section><h2>${s.heading}</h2><p class="case-study-lede">${s.lede}</p><p class="metric-source-note"><strong>${s.status}:</strong> ${s.intro}</p><h3>${s.use}</h3><p>${s.useCopy}</p><h3>${s.controls}</h3><p>${s.controlsCopy}</p>${params}<h3>${s.bricks}</h3><p>${s.bricksCopy}</p><h3>${s.compare}</h3><p>${s.compareCopy}</p>${comparison}<h3>${s.iteration}</h3><p>${s.iterationCopy}</p>${versions}<h3>${s.nodes}</h3><p>${s.nodesCopy}</p>${nodes}<h3>${s.quality}</h3><p>${s.qualityCopy}</p><h3>${s.authorship}</h3><h4>${s.ownTitle}</h4>${list(s.own)}<h4>${s.aiTitle}</h4>${list(s.ai)}<p class="engineering-note">${s.boundary}</p><h3>${s.next}</h3><p>${s.nextCopy}</p><h3>${ko ? "최종 결과" : "Final results"}</h3>${result}</section>`;
  };
  p.contributions.sections = [{ title: "Procedural Ruin-Wall Tool", category: "Technical", htmlContent: makeCaseStudy("en") }];
  p.localized.ko.contributions.sections = [{ title: "절차적 폐허 벽 파손 툴", category: "Technical", htmlContent: makeCaseStudy("ko") }];
})();

// Authorship correction: feature implementation and verification were AI-executed; the project owner
// supplied the brief, iteration requests, and their own authored nodes. Keep this explicit for viewers.
(() => {
  const p = projectsData["10_RuinForge"];
  if (!p) return;
  p.experience.description = "Defined the project goal and gave iterative direction for the tool. I wrote some nodes myself; the broader feature implementation, renders, validation, and final integration were completed with AI assistance.";
  p.localized.ko.experience.description = "프로젝트 목표와 툴의 개선 방향을 정하고 반복적으로 요구사항을 전달했습니다. 일부 노드는 직접 작성했으며, 그 외 기능 구현·렌더·검증·최종 통합은 AI의 도움으로 진행했습니다.";
  const koOld = /<h3>AI 협업과 직접 구현 범위<\/h3>[\s\S]*?<h3>현재 한계와 다음 단계<\/h3>/;
  const koNew = `<h3>작업 범위와 AI 협업</h3><h4>제가 맡은 부분</h4><ul><li>프로젝트 목표와 “아티스트가 어떤 조절을 할 수 있어야 하는가”에 대한 요구사항 정의</li><li>파손 방향, 원하는 결과, 반복 개선 사항을 AI에 지시하고 결과를 검토</li><li>페이지에 포함된 일부 Geometry Nodes를 직접 작성</li></ul><h4>AI의 도움으로 구현한 부분</h4><ul><li>벽돌 2단계 파손, 줄눈 정리, 벽 끝 클리핑, z-fighting 해결과 버텍스 최적화</li><li>보로노이 크랙 네트워크와 다수의 Geometry Nodes 구성·연결</li><li>렌더 결과, 토폴로지, 성능 수치 확인과 최종 노드 통합</li></ul><p class="engineering-note">이 작업은 AI를 구현 파트너로 사용한 개인 프로젝트입니다. 제가 목표와 개선 방향을 정하고 반복 피드백을 제공했으며, 구현·검증 과정의 상당 부분은 AI 도움으로 진행했습니다.</p><h3>현재 한계와 다음 단계</h3>`;
  p.localized.ko.contributions.sections[0].htmlContent = p.localized.ko.contributions.sections[0].htmlContent.replace(koOld, koNew);
  const enOld = /<h3>AI collaboration and individual ownership<\/h3>[\s\S]*?<h3>Current limits and next steps<\/h3>/;
  const enNew = `<h3>Scope of work and AI collaboration</h3><h4>My contribution</h4><ul><li>Defined the project goal and what artist controls the tool should expose.</li><li>Directed damage behavior, target results, and iteration requests; reviewed the results.</li><li>Authored some Geometry Nodes included in the project.</li></ul><h4>Implemented with AI assistance</h4><ul><li>Two-stage brick damage, mortar cleanup, end-brick clipping, z-fighting fixes, and vertex optimization.</li><li>The Voronoi crack network and much of the Geometry Nodes construction and wiring.</li><li>Render, topology, and performance checks plus final node integration.</li></ul><p class="engineering-note">This personal project uses AI as an implementation partner. I set the goal and iteration direction, while AI assistance completed a substantial part of implementation and verification.</p><h3>Current limits and next steps</h3>`;
  p.contributions.sections[0].htmlContent = p.contributions.sections[0].htmlContent.replace(enOld, enNew);
})();

// Specific user-authored Geometry Nodes correction.
(() => {
  const p = projectsData["10_RuinForge"];
  if (!p) return;
  p.experience.description = "Defined the project goal and gave iterative direction for the tool. I directly authored the Boolean-based mesh subtraction that creates the crack space and the logic that generates surrounding cracks. Other feature implementation, renders, validation, and final integration were completed with AI assistance.";
  p.localized.ko.experience.description = "프로젝트 목표와 툴의 개선 방향을 정하고 반복적으로 요구사항을 전달했습니다. Boolean으로 메시를 빼서 균열 공간을 만드는 처리와 주변 크랙 생성 로직은 직접 작성했으며, 그 외 기능 구현·렌더·검증·최종 통합은 AI의 도움으로 진행했습니다.";
  const ko = p.localized.ko.contributions.sections[0];
  ko.htmlContent = ko.htmlContent
    .replace("<li>페이지에 포함된 일부 Geometry Nodes를 직접 작성</li>", "<li><strong>Boolean 기반 균열 공간 생성</strong> — Boolean으로 벽 메시를 빼 실제 크랙이 들어갈 공간을 만드는 처리</li><li><strong>주변 크랙 생성 로직</strong> — 파손 주변으로 크랙이 자라도록 하는 로직</li>")
    .replace("<li>보로노이 크랙 네트워크와 다수의 Geometry Nodes 구성·연결</li>", "<li>벽돌 파손·줄눈·클리핑을 포함한 나머지 Geometry Nodes 구성·연결</li>");
  const en = p.contributions.sections[0];
  en.htmlContent = en.htmlContent
    .replace("<li>Authored some Geometry Nodes included in the project.</li>", "<li><strong>Boolean-based crack-space generation</strong> — subtracting mesh volume with a Boolean to create real space for the cracks.</li><li><strong>Surrounding-crack generation logic</strong> — logic that grows cracks around the damaged area.</li>")
    .replace("<li>The Voronoi crack network and much of the Geometry Nodes construction and wiring.</li>", "<li>Remaining Geometry Nodes construction and wiring, including brick damage, mortar cleanup, and clipping.</li>");
})();

// Ruin Forge uses a game-page shell, but it is a tool case study rather than a game.
(() => {
  const p = projectsData["10_RuinForge"];
  if (!p) return;
  p.overviewLabel = "Tool overview";
  p.featuresLabel = "Tool highlights";
  p.overview = "An artist-facing Geometry Nodes tool for generating concrete shell damage, boundary-driven cracks, and damaged brickwork. DamageCtrl sets the damage location; modifier parameters then control the resulting damage range, depth, and variation.";
  p.features = [
    "DamageCtrl sets the damage location; modifier parameters tune damage range, depth, seed, and crack character",
    "User-authored: Boolean mesh subtraction creates real crack space, with logic for generating surrounding cracks",
    "Inner Break Influence / Depth move the same wall from mostly intact to partial and punched-through damage"
  ];
  p.localized.ko.overviewLabel = "툴 소개";
  p.localized.ko.featuresLabel = "핵심 기능";
  p.localized.ko.overview = "콘크리트 껍데기 파손, 실제 파손 경계에서 자라는 크랙, 손상된 내부 벽돌 구조를 만드는 Geometry Nodes 툴입니다. DamageCtrl은 파손 위치를 정하고, 모디파이어 파라미터가 파손 범위·깊이·변형을 조절합니다.";
  p.localized.ko.features = [
    "DamageCtrl로 파손 위치를 정하고, 모디파이어에서 범위·깊이·시드·크랙 성격을 조절",
    "직접 작성: Boolean으로 실제 크랙 공간을 만들고 파손 주변 크랙을 생성하는 로직",
    "Inner Break Influence / Depth로 거의 멀쩡한 벽부터 부분·관통 파손까지 조절"
  ];
})();

function renderEngineeringCaseStudy({ metrics = [], architecture = [], architectureNote = "", cases = [], decisions = [], code = null, note = "", labels = {} }) {
  const copy = { systemMap: "System map", problem: "Problem", decision: "Decision", implementation: "Implementation", verification: "Verification", keyDecisions: "Key decisions I made", decisionLog: "Decision log", decisionTitle: "Why the systems were structured this way", system: "System", choice: "Choice", why: "Why", tradeoff: "Tradeoff", codeEvidence: "Code evidence", viewSource: "View source file ↗", ...labels };
  const metricsHTML = metrics.map(metric => `<article><span class="engineering-icon" aria-hidden="true">${metric.icon}</span><strong>${metric.value}</strong><small>${metric.label}</small></article>`).join("");
  const architectureHTML = architecture.map((step, index) => `<li><span>${String(index + 1).padStart(2, "0")}</span><strong>${step.title}</strong><small>${step.detail}</small></li>`).join("");
  const casesHTML = cases.map(item => `<article><span class="case-label">${item.label}</span><h3>${item.title}</h3><dl><div><dt>${copy.problem}</dt><dd>${item.problem}</dd></div><div><dt>${copy.decision}</dt><dd>${item.decision}</dd></div><div><dt>${copy.implementation}</dt><dd>${item.implementation}</dd></div><div><dt>${copy.verification}</dt><dd>${item.verification}</dd></div></dl></article>`).join("");
  const decisionsHTML = decisions.map(item => `<tr><th scope="row">${item.system}</th><td>${item.choice}</td><td>${item.reason}</td><td>${item.tradeoff}</td></tr>`).join("");
  const decisionSpotlightHTML = decisions.length ? `<section class="decision-spotlight"><h3>${copy.keyDecisions}</h3><div>${decisions.slice(0, 4).map((item, index) => `<article><span>${String(index + 1).padStart(2, "0")}</span><span class="case-label">${item.system}</span>${item.problem ? `<p class="decision-problem">${item.problem}</p>` : ""}<strong>→ ${item.choice}</strong><p>${item.reason}</p><small>${copy.tradeoff}: ${item.tradeoff}</small></article>`).join("")}</div></section>` : "";
  const codeHTML = code ? `<details class="technical-deep-dive"><summary><span>${copy.codeEvidence}</span><strong>${code.title}</strong></summary><div class="technical-deep-dive-body"><p>${code.description}</p><pre><code>${code.snippet}</code></pre><a class="evidence-link" href="${code.url}" target="_blank" rel="noopener noreferrer">${copy.viewSource}</a></div></details>` : "";
  return `<div class="engine-evidence-group"><div class="engineering-summary" aria-label="Project evidence summary">${metricsHTML}</div><div class="system-map"><h3>${copy.systemMap}</h3>${architectureNote ? `<p class="system-map-note">${architectureNote}</p>` : ""}<ol style="--flow-steps:${architecture.length}">${architectureHTML}</ol></div></div><div class="engineering-case-grid">${casesHTML}</div>${decisions.length ? `<details class="technical-deep-dive"><summary><span>${copy.decisionLog}</span><strong>${copy.decisionTitle}</strong></summary><div class="technical-deep-dive-body"><div class="decision-table-wrap"><table class="decision-table"><thead><tr><th>${copy.system}</th><th>${copy.choice}</th><th>${copy.why}</th><th>${copy.tradeoff}</th></tr></thead><tbody>${decisionsHTML}</tbody></table></div></div></details>` : ""}${codeHTML}${note ? `<p class="engineering-note">${note}</p>` : ""}`;
}

// Image slots for pages whose renders aren't in yet (currently Ruin Forge). Each slot tries to load
// `src`; while that file doesn't exist the <img> removes itself on error and the dashed placeholder
// (showing the expected path) is left instead — so adding an image is just dropping the file at that
// path, no code change. Placeholder slots are empty on purpose, not missing content.
function renderMediaSlots(figures, lang = "en") {
  const label = lang === "ko" ? "이미지 준비 중" : "Image coming soon";
  return `<div class="media-slot-grid">${figures.map(fig => `<figure class="media-slot"><div class="media-slot__frame"><span class="media-slot__placeholder"><strong>${label}</strong><small>${fig.src.replace("../", "")}</small></span><img src="${fig.src}" alt="${fig.alt}" loading="lazy" onerror="this.remove()"></div><figcaption><span>${fig.label}</span><strong>${fig.caption}</strong></figcaption></figure>`).join("")}</div>`;
}

function renderNewManzoArtShowcase(lang = "en") {
  const ko = lang === "ko";
  return `<section class="newmanzo-art-case"><div class="art-case-intro"><div><span class="case-label">${ko ? "비주얼 디자인 · 아트" : "Visual Design · Art"}</span><h2>${ko ? "New MANZO의 비주얼을 담당했습니다" : "I was responsible for the visual side of New MANZO"}</h2><p>${ko ? "캐릭터와 환경부터 UI, VFX까지 직접 제작하고 Unity에서 최종 화면으로 완성했습니다." : "I created everything from characters and environments to UI and VFX, then brought it together in the final Unity build."}</p></div></div><div class="asset-frame-strips" aria-label="${ko ? "대표 비주얼 영상" : "Featured visual reels"}"><figure class="asset-frame-strip"><div><video src="../img/NEWMANZO/MarineVisual.mp4" autoplay controls muted loop playsinline preload="auto"></video></div><figcaption><span>${ko ? "원본 캡처" : "Raw capture"}</span><strong>${ko ? "마린 비주얼" : "Marine Visual"}</strong><small>${ko ? "물고기 무리와 심해 환경 연출" : "Schooling fish and the underwater environment in motion"}</small></figcaption></figure><figure class="asset-frame-strip"><div><video src="../img/NEWMANZO/CrabVisual.mp4" autoplay controls muted loop playsinline preload="auto"></video></div><figcaption><span>${ko ? "원본 캡처" : "Raw capture"}</span><strong>${ko ? "크랩 비주얼" : "Crab Visual"}</strong><small>${ko ? "게 보스의 절차적 다리 애니메이션" : "The crab boss's procedural leg animation"}</small></figcaption></figure></div><div class="art-coverage" aria-label="${ko ? "저장소 아트 카테고리별 PNG 수" : "PNG counts by repository art category"}"><article><strong>3</strong><span>${ko ? "보스" : "Boss"}</span></article><article><strong>5</strong><span>NPC</span></article><article><strong>11</strong><span>${ko ? "물고기" : "Fish"}</span></article><article><strong>17</strong><span>UI</span></article><article><strong>22</strong><span>${ko ? "환경" : "Environment"}</span></article><article><strong>18</strong><span>VFX</span></article></div><p class="art-count-note">${ko ? "Assets/1_Art 아래 PNG 파일 기준이며 애니메이션 프레임, PSD 및 기타 소스 파일은 제외한 보수적인 수치입니다." : "Conservative count of PNG files under Assets/1_Art; animation frames, PSDs, and other source formats are not included."}</p><div class="asset-showcase-grid"><figure class="asset-feature asset-tani"><div><img src="../img/NEWMANZO/art/Character.png" alt="Character portrait production asset" /></div><figcaption><span>${ko ? "캐릭터" : "Character"}</span><strong>${ko ? "캐릭터" : "Character"}</strong><small>${ko ? "포트레이트와 표정 변형" : "Portrait and expression variants"}</small></figcaption></figure><figure class="asset-feature asset-crab"><div><img src="../img/NEWMANZO/art/crab-boss.png" alt="Crab boss production sprite" /></div><figcaption><span>${ko ? "보스" : "Boss"}</span><strong>${ko ? "게 보스" : "Crab Boss"}</strong><small>${ko ? "절차적 다리 구조와 함께 사용" : "Built for the procedural leg system"}</small></figcaption></figure><figure class="asset-small asset-marlin"><div><img src="../img/NEWMANZO/art/blue-marlin.png" alt="Blue marlin boss sprite" /></div><figcaption><span>${ko ? "보스" : "Boss"}</span><strong>Blue Marlin</strong></figcaption></figure><figure class="asset-small asset-fish"><div><img src="../img/NEWMANZO/art/fish-03.png" alt="Schooling fish sprite" /></div><figcaption><span>${ko ? "생태계" : "Ecosystem"}</span><strong>${ko ? "군집 물고기" : "Schooling Fish"}</strong></figcaption></figure><figure class="asset-small asset-ui"><div><img src="../img/NEWMANZO/art/dialog-ui.png" alt="Dialogue interface production asset" /></div><figcaption><span>UI</span><strong>${ko ? "대화 프레임" : "Dialogue Frame"}</strong></figcaption></figure><figure class="asset-small asset-vfx"><div><img src="../img/NEWMANZO/art/attack-vfx.png" alt="Attack VFX sprite sheet" /></div><figcaption><span>VFX</span><strong>${ko ? "공격 스프라이트" : "Attack Sprite"}</strong></figcaption></figure></div><div class="visual-direction-notes"><article><span>01</span><div><h3>${ko ? "하나의 수중 세계" : "One underwater world"}</h3><p>${ko ? "색, 명도, 실루엣과 디테일 밀도를 통일하면서 보스와 구역별 개성을 분리했습니다." : "Unified color, value, silhouette, and detail density while keeping each boss and area distinct."}</p></div></article><article><span>02</span><div><h3>${ko ? "게임플레이 가독성" : "Gameplay readability"}</h3><p>${ko ? "작은 물고기와 공격 전조가 Bloom과 어두운 심해 배경에서도 읽히도록 대비와 발광 임계값을 함께 조절했습니다." : "Tuned contrast and bloom thresholds so small fish and attack telegraphs remain readable against the dark ocean."}</p></div></article><article><span>03</span><div><h3>${ko ? "에셋에서 최종 화면까지" : "Asset to final frame"}</h3><p>${ko ? "그림 제작에 그치지 않고 스프라이트 분할, 임포트, 애니메이션, 셰이더와 UI 통합까지 책임졌습니다." : "Owned sprite preparation, import, animation, shader treatment, and UI integration—not only illustration."}</p></div></article></div></section>`;
}

function renderManzoRendererFeature(lang = "en") {
  const ko = lang === "ko";
  return `<section class="renderer-feature" id="custom-renderer"><span class="renderer-eyebrow">C++ · OpenGL · GLSL</span><h2>CUSTOM<br>RENDERER<span>.</span></h2><p class="renderer-lede">${ko ? "더 멋진 비주얼을 만들려면 단순히 오브젝트를 그리는 것만으로는 부족했습니다 — 화면 효과(언더워터 왜곡, Bloom, God Ray 같은)를 입히려면 드로우 순서와 화면 효과를 직접 제어할 수 있는 구조가 필요했고, 그래서 레이어 기반 드로우 큐와 멀티패스 후처리 파이프라인을 설계·구현했습니다." : "Getting a more striking visual result meant more than just drawing objects — layering screen effects like underwater distortion, bloom, and god rays on top required direct control over draw order and screen effects, so I designed and implemented a layer-based draw queue and multi-pass post-processing pipeline to make that possible."}</p><div class="renderer-flow" aria-label="${ko ? "커스텀 렌더러 처리 순서" : "Custom renderer pipeline"}"><article><span>01</span><strong>${ko ? "드로우 큐" : "Draw queues"}</strong><small>${ko ? "배경 · 월드 · UI · Late" : "Background · World · UI · Late"}</small></article><i>→</i><article><span>02</span><strong>${ko ? "씬 FBO" : "Scene FBO"}</strong><small>${ko ? "한 프레임을 텍스처로 렌더" : "Render the frame to texture"}</small></article><i>→</i><article class="renderer-ping"><span>03</span><strong>Ping-Pong FBO</strong><small>${ko ? "두 버퍼를 번갈아 읽고 쓰기" : "Alternate read and write targets"}</small></article><i>→</i><article><span>04</span><strong>${ko ? "최종 합성" : "Final composite"}</strong><small>${ko ? "기본 프레임버퍼로 출력" : "Present to the default framebuffer"}</small></article></div><div class="renderer-explanation"><article><h3>${ko ? "왜 핑퐁 구조인가" : "Why ping-pong framebuffers"}</h3><p>${ko ? "하나의 텍스처를 동시에 읽고 쓰면 이전 패스의 결과를 안전하게 다음 패스로 전달할 수 없습니다. 두 개의 FBO를 만들고, 현재 패스는 한쪽 color attachment를 입력으로 읽으면서 반대쪽에 출력한 뒤 매 패스마다 역할을 교환했습니다." : "A texture cannot safely act as both the source and destination of the same pass. I created two FBOs so each pass reads the previous color attachment, writes to the opposite target, then swaps their roles."}</p></article><article><h3>${ko ? "패스를 데이터 흐름으로 이해하기" : "Thinking in render-pass data flow"}</h3><p>${ko ? "수중 왜곡 → Bloom → God Ray처럼 각 셰이더는 이전 패스의 완성된 화면을 입력으로 받습니다. 효과를 오브젝트마다 붙이는 대신 전체 화면 처리 단계로 분리해 순서, 입력과 출력을 명확하게 관리했습니다." : "Each shader receives the completed output of the previous pass—underwater distortion → bloom → god rays. Treating effects as full-screen stages made ordering, inputs, and outputs explicit."}</p></article><article><h3>${ko ? "회고: 남아있는 병목" : "Retrospective note"}</h3><p>${ko ? "이 렌더러는 스프라이트 1개당 draw call을 하나씩 발행하고, 배칭이나 인스턴싱이 없습니다. 드로우 콜 타입 분기도 dynamic_cast로 처리해 매 프레임 RTTI 비용이 들어갑니다. 당시 프로젝트 규모에서는 문제가 없었지만, 오브젝트 수가 늘어나면 명확한 병목이 됩니다. 지금 다시 만든다면 셰이더/텍스처 기준으로 배칭하고, dynamic_cast 대신 태그나 variant 기반 디스패치로 바꿀 것 같습니다." : "The renderer issues one draw call per sprite with no batching or instancing, and per-object type dispatch relies on dynamic_cast in the render loop, fine for the project's scope at the time, but a clear bottleneck at higher object counts. Looking back, I'd batch by shader/texture and replace the RTTI dispatch with a tagged/variant-based draw call system."}</p></article></div><pre class="renderer-code"><code>postProcessFramebuffer[horizontal].Bind();\nglBindTexture(GL_TEXTURE_2D,\n  postProcessFramebuffer[!horizontal].GetColorAttachment());\nRenderQuad();\nhorizontal = !horizontal;</code></pre><a class="renderer-source" href="https://github.com/Seohyeon-Min/manzo/blob/main/Manzo/Manzo/Engine/Render.cpp" target="_blank" rel="noopener noreferrer">Render.cpp ↗</a><a class="engine-foundation-link" href="03_DoubleHit.html?track=software#custom-engine-foundation"><span>${ko ? "이 렌더러의 기틀" : "Foundation of this renderer"}</span><strong>${ko ? "Double Hit에서 제작한 커스텀 엔진 →" : "The custom engine built for Double Hit →"}</strong></a></section>`;
}

function renderManzoDebuggingFeature(lang = "en") {
  const ko = lang === "ko";
  return `<section class="renderer-feature" id="boss-performance-debugging"><span class="renderer-eyebrow">C++ · Boss Encounter · Profiling</span><h2>PERFORMANCE<br>DEBUGGING<span>.</span></h2><p class="renderer-lede">${ko ? "보스전에서 심각한 프레임 드롭이 발생했을 때, 비주얼이나 게임플레이 스코프를 먼저 줄이는 대신 원인을 추적해 실제 병목을 제거했습니다." : "When the boss encounter dropped frames severely, I traced the actual bottleneck instead of cutting visuals or gameplay scope to compensate."}</p><div class="renderer-flow" aria-label="${ko ? "성능 디버깅 처리 순서" : "Performance debugging flow"}"><article><span>01</span><strong>${ko ? "프레임 드롭 발생" : "Severe frame drop"}</strong><small>${ko ? "공격·오브젝트가 몰리는 보스전" : "Boss fight, objects piling up"}</small></article><i>→</i><article><span>02</span><strong>${ko ? "원인 추적" : "Profiling / debugging"}</strong><small>${ko ? "비주얼을 줄이기 전에 먼저 검증" : "Verify before cutting scope"}</small></article><i>→</i><article class="renderer-ping"><span>03</span><strong>${ko ? "중복 충돌 검사 발견" : "Redundant collision checks found"}</strong><small>${ko ? "모든 쌍을 양방향으로 두 번 검사" : "Every pair tested twice, both directions"}</small></article><i>→</i><article><span>04</span><strong>${ko ? "제거 및 안정화" : "Removed & stabilized"}</strong><small>${ko ? "쌍당 한 번만 순회, 프레임 드롭 해소" : "Iterate each pair once, frame drop gone"}</small></article></div><div class="renderer-explanation"><article><h3>${ko ? "왜 스코프를 먼저 줄이지 않았는가" : "Why I audited before cutting scope"}</h3><p>${ko ? "BPM 기반 이동, 보스 패턴, 충돌 판정이 맞물려 돌아가는 상태에서 프레임이 떨어지면, 가장 쉬운 해결책은 이펙트나 오브젝트 수를 줄이는 것입니다. 대신 GameObjectManager::CollisionTest의 충돌 판정 경로부터 감사해, 실제 병목이 어디인지 먼저 확인했습니다." : "When frames drop inside a system where BPM-driven movement, boss patterns, and collision resolution are all interacting, the easy fix is to cut effects or object counts. Instead I audited GameObjectManager::CollisionTest's collision path first to confirm where the real bottleneck was."}</p></article><article><h3>${ko ? "실제로 무엇이 문제였는가" : "What the fix actually did"}</h3><p>${ko ? "기존 이중 루프는 오브젝트 쌍 (A, B)와 (B, A)를 각각 순회하며 사실상 같은 충돌을 두 번 검사하고 있었습니다. 반복자를 이용해 각 쌍을 한 번만 순회하도록 바꾸고, 필요한 두 방향의 ResolveCollision 호출은 그 안에서 유지했습니다. n개 오브젝트 기준 검사 횟수가 대략 절반으로 줄었습니다." : "The original double loop iterated every pair as both (A, B) and (B, A), effectively testing the same collision twice. I switched to an iterator pattern that visits each pair exactly once, while still calling ResolveCollision in both directions where needed. For n objects, the number of checks was roughly halved."}</p></article></div><pre class="renderer-code"><code>// Before: each pair tested twice\nfor (auto object_1 : objects)\n  for (auto object_2 : objects)\n    if (object_1 != object_2 && ...) { ... }\n\n// After: each pair tested once\nfor (auto it1 = objects.begin(); it1 != objects.end(); ++it1) {\n  auto it2 = it1; ++it2;\n  for (; it2 != objects.end(); ++it2) {\n    if (object_1->CanCollideWith(object_2->Type()) ||\n        object_2->CanCollideWith(object_1->Type())) {\n      if (object_1->IsCollidingWith(object_2)) {\n        object_1->ResolveCollision(object_2);\n        object_2->ResolveCollision(object_1);\n      }\n    }\n  }\n}</code></pre><a class="renderer-source" href="https://github.com/Seohyeon-Min/manzo/commit/ec2f36974cd422b9c531fcad82baa1a7ccb699c1" target="_blank" rel="noopener noreferrer">GameObjectManager.cpp ↗</a></section>`;
}

function renderManzoRenderDocFeature(lang = "en") {
  const ko = lang === "ko";
  return `<section class="renderer-feature" id="renderdoc-debugging"><span class="renderer-eyebrow">RenderDoc · OpenGL · Debugging</span><h2>RENDERDOC<br>DEBUGGING<span>.</span></h2><p class="renderer-lede">${ko ? "포스트프로세싱을 제작하던 중 기대한 요소가 최종 화면에 나타나지 않는 문제가 있었습니다. RenderDoc으로 프레임을 캡처하고 이벤트 리스트, 드로우 콜, 렌더 타깃과 프레임버퍼 내용을 단계별로 확인했습니다." : "While building the post-processing pipeline, some expected elements were not appearing in the final image. I captured frames in RenderDoc and inspected the event list, draw calls, render targets, and framebuffer contents step by step."}</p><div class="renderer-explanation"><article><h3>${ko ? "그려지지 않은 원인 추적" : "Tracing missing drawing"}</h3><p>${ko ? "최종 화면만 보지 않고 각 단계에서 실제로 어떤 드로우 콜이 실행됐고 어떤 텍스처가 만들어졌는지 확인했습니다. 이를 통해 문제가 드로우 순서, 패스 실행, 렌더 타깃 상태 중 어디에 있는지 좁혀 갔습니다." : "Instead of relying on the final image, I checked which draw calls actually executed and what each render target contained at every stage. This helped narrow the issue to draw order, pass execution, or render-target state."}</p></article><article><h3>${ko ? "프레임 드랍 조사" : "Investigating frame drops"}</h3><p>${ko ? "프레임 캡처로 드로우 콜 구조와 GPU 측 렌더 패스 비용을 확인했습니다. 이를 통해 렌더링 문제와 별도 프로파일링이 필요한 게임플레이·CPU 측 성능 문제를 구분했습니다." : "I used frame captures to inspect draw-call structure and GPU-side render-pass costs when investigating frame drops. This helped distinguish rendering-related issues from gameplay and CPU-side performance problems that required additional profiling."}</p></article></div></section>`;
}

function renderDoubleHitEngineFeature(lang = "en") {
  const ko = lang === "ko";
  return `<section class="engine-feature" id="custom-engine-foundation"><span class="renderer-eyebrow">C++ · raylib</span><h2>CUSTOM<br>ENGINE<span>.</span></h2><p class="renderer-lede">${ko ? "DigiPen CS230 코스가 제공하는 composition 기반 GameObject/Component 스켈레톤 위에서, 오브젝트가 실제로 로드되고 그려지고 충돌하게 만드는 시스템을 직접 구현했습니다: 커스텀 스프라이트 파일 파서, 중복 제거 텍스처 캐시, 그리고 매 프레임 충돌을 판정하는 오브젝트 매니저까지." : "Built on top of DigiPen CS230's composition-based GameObject/Component skeleton, I implemented the systems that make objects actually load, render, and collide: a custom sprite-file parser, a deduplicated texture cache, and the object manager driving per-frame collision dispatch."}</p><div class="engine-foundation-grid"><article><span>01</span><strong>${ko ? "스프라이트 파서" : "Sprite Parser"}</strong><p>${ko ? "커스텀 .spt 포맷에서 텍스처, 애니메이션 프레임, 핫스팟, 콜리전 형태를 로드" : "Loads a custom .spt format: textures, animation frames, hotspots, and collision shapes"}</p></article><article><span>02</span><strong>${ko ? "텍스처 매니저" : "Texture Manager"}</strong><p>${ko ? "파일명 기준 캐시·중복 제거, 오프스크린 렌더텍스처 모드" : "Filename-keyed cache with dedup, plus an offscreen render-texture mode"}</p></article><article><span>03</span><strong>GameObjectManager</strong><p>${ko ? "매 프레임 업데이트·드로우 루프, 모든 오브젝트 쌍의 충돌 디스패치" : "Per-frame update/draw loop and pairwise collision dispatch across all live objects"}</p></article><article><span>04</span><strong>${ko ? "콜리전 연결" : "Collision Wiring"}</strong><p>${ko ? "파싱된 스프라이트 데이터로부터 Rect/Circle 콜리전 컴포넌트를 오브젝트에 부착" : "Attaches Rect/Circle collision components onto objects from parsed sprite data"}</p></article></div><div class="renderer-explanation"><article><h3>${ko ? "왜 데이터 기반 스프라이트 파서인가" : "Why a data-driven sprite parser"}</h3><p>${ko ? "오브젝트 클래스마다 프레임 좌표와 콜리전 형태를 하드코딩하는 대신, Sprite::Load가 일반 텍스트 .spt 파일을 읽어 애니메이션과 핫스팟, 콜리전 컴포넌트를 구성합니다. 히트박스를 조정하거나 프레임을 추가할 때 C++를 다시 컴파일할 필요 없이 데이터 파일만 고치면 됩니다." : "Instead of hardcoding frame rects and collision shapes per object class, Sprite::Load reads a plain-text .spt file and builds animations, hotspots, and collision components from it. Adjusting a hitbox or adding a frame means editing a data file, not recompiling C++."}</p></article><article><h3>${ko ? "왜 페어와이즈 디스패치인가" : "Why pairwise dispatch"}</h3><p>${ko ? "GameObjectManager::CollisionTest가 매 프레임 살아있는 모든 오브젝트 쌍을 검사해 CanCollideWith / IsCollidingWith / ResolveCollision을 호출합니다. 각 GameObject는 특정 타입과 반응할지만 답하면 되고, 게임 속 다른 모든 타입을 알 필요가 없습니다." : "GameObjectManager::CollisionTest checks every live object pair each frame and calls CanCollideWith / IsCollidingWith / ResolveCollision. Each GameObject only has to answer whether it can react to a given type — it never needs to know about every other type in the game."}</p></article></div><pre class="renderer-code"><code>void CS230::GameObjectManager::CollisionTest() {\n  for (auto object_1 : objects) {\n    for (auto object_2 : objects) {\n      if (object_1 != object_2 &&\n          object_1->CanCollideWith(object_2->Type())) {\n        if (object_1->IsCollidingWith(object_2)) {\n          object_1->ResolveCollision(object_2);\n        }\n      }\n    }\n  }\n}</code></pre><a class="renderer-source" href="https://github.com/Seohyeon-Min/DoubleHit/blob/main/DoubleHit/DoubleHit/Engine/GameObjectManager.cpp" target="_blank" rel="noopener noreferrer">GameObjectManager.cpp ↗</a><p class="engine-evolution">${ko ? "이 구현은 MANZO에서 레이어 렌더 큐, 프레임버퍼 후처리, CCD, 리듬과 시나리오 시스템으로 확장됐습니다." : "This implementation later expanded in MANZO into layer-based rendering, framebuffer post-processing, CCD, rhythm, and scenario systems."}</p><a class="engine-foundation-link" href="01_Manzo.html?track=software#custom-renderer"><span>${ko ? "이 엔진이 확장된 곳" : "Where this engine grew"}</span><strong>${ko ? "MANZO의 커스텀 렌더러 →" : "The custom renderer built for MANZO →"}</strong></a></section>`;
}

function renderNewManzoPatternArchitectureFeature(lang = "en") {
  const ko = lang === "ko";
  return `<section class="renderer-feature" id="pattern-architecture"><span class="renderer-eyebrow">Unity · C# · ScriptableObject</span><h2>PATTERN<br>ARCHITECTURE<span>.</span></h2><p class="renderer-lede">${ko ? "보스 공격을 코드 복붙 없이 조합할 수 있도록, 공통 로직을 한 곳에 고정하는 Template Method 베이스와 여러 패턴을 순서대로 엮는 Composite 구조를 설계·구현했습니다." : "I designed and implemented a Template Method base that fixes shared logic in one place, plus a Composite layer that chains multiple patterns together — so boss attacks compose without copy-pasted code."}</p><div class="renderer-flow" aria-label="${ko ? "보스 패턴 아키텍처 처리 순서" : "Boss pattern architecture flow"}"><article><span>01</span><strong>MonsterPatternSO</strong><small>${ko ? "추상 베이스 · Template Method" : "Abstract base · Template Method"}</small></article><i>→</i><article><span>02</span><strong>${ko ? "21개 패턴 클래스" : "21 Pattern Classes"}</strong><small>DashLine · SpinLaser · BossBullet …</small></article><i>→</i><article class="renderer-ping"><span>03</span><strong>CombinePatternSO</strong><small>${ko ? "Composite 오케스트레이션" : "Composite orchestration"}</small></article><i>→</i><article><span>04</span><strong>${ko ? "인스펙터 조합" : "Inspector Assembly"}</strong><small>${ko ? "코드 없이 보스 제작" : "No-code boss authoring"}</small></article></div><div class="renderer-explanation"><article><h3>${ko ? "왜 Template Method인가" : "Why Template Method"}</h3><p>${ko ? "준비 단계(super armor, prepare damage), 쿨다운, 텔레그래프 스폰처럼 모든 패턴에 공통인 로직을 MonsterPatternSO 베이스 하나에 고정했습니다. 개별 패턴은 OnStart / OnTickUpdate / OnTickFixed / OnExit 훅만 오버라이드하면 되고, 21개 패턴을 늘리는 동안 이 공통 로직을 다시 짜거나 실수로 깨뜨릴 여지가 없었습니다." : "Shared logic — prepare phase (super armor, prepare damage), cooldown, telegraph spawning — lives once in the MonsterPatternSO base. Each concrete pattern only overrides OnStart / OnTickUpdate / OnTickFixed / OnExit, so growing the roster to 21 patterns never meant re-deriving or accidentally breaking the common logic."}</p></article><article><h3>${ko ? "왜 Composite인가" : "Why Composite"}</h3><p>${ko ? "보스가 여러 공격을 이어 붙인 콤보를 쓸 때, CombinePatternSO가 subPatterns[] 배열을 받아 서브패턴을 하나씩 Instantiate해서 실행하고 끝나면 다음으로 넘어갑니다. 콤보 자체도 MonsterPatternSO를 상속하기 때문에 콤보 안에 또 다른 콤보를 넣는 것도 별도 코드 없이 가능합니다." : "For bosses that chain multiple attacks into one combo, CombinePatternSO takes a subPatterns[] array, instantiates each sub-pattern in turn, runs it to completion, then advances. Because the combo itself also inherits MonsterPatternSO, nesting a combo inside another combo needs no extra code."}</p></article></div><pre class="renderer-code"><code>runningSubInstance = Instantiate(runningSubOriginal);\nrunningSubInstance.StartPattern(c);\n\n// OnTickUpdate\nrunningSubInstance.TickUpdate();\nif (runningSubInstance.IsFinished) {\n  StopCurrentSubPattern();\n  StartNextSubPattern();\n}</code></pre><p class="engine-evolution">${ko ? "발사체의 이동 로직(IBossBulletMotionConfigurable)과 소환 방식(IPrimableProjectile)은 별도 인터페이스로 분리해, 패턴 쪽 코드가 발사체의 구체 구현에 의존하지 않도록 했습니다. 팀 저장소는 비공개라 소스 링크는 제공하지 않습니다." : "Projectile motion (IBossBulletMotionConfigurable) and spawn behavior (IPrimableProjectile) are split into separate interfaces so pattern code never depends on a concrete projectile implementation. The team repository is private, so no source link is provided here."}</p></section>`;
}

applyEnglishProjectOverride("00_NewManzo", {
  pageTitle: "New MANZO — Min Seohyeon Portfolio",
  overview: "A completed playable build of a deep-sea rhythm adventure exploring beat-linked hunting, fish behavior, and atmospheric rendering.",
  features: [
    "FMOD-driven on-beat gameplay with adjustable sync offset",
    "Reusable boss-pattern framework and procedural leg animation",
    "Hunting, ship, inventory, save, and game-flow systems",
    "Reusable UI, shader, and Unity Editor tooling",
    "418 of 585 repository commits"
  ],
  experience: {
    role: "Visual Lead · Producer · Primary C# Programmer",
    period: "August 2025 – Final Build",
    description: "Served as the primary C# contributor across gameplay, bosses, rhythm, UI, tools, and visual systems. Repository history records 418 of 585 commits under my account; after the project lost momentum, I also reset scope and led a two-week closing sprint to a playable build."
  },
  videos: [
    {
      title: "Schooling Fish AI",
      subtitle: "Development prototype",
      description: "An early test of schooling behavior, obstacle avoidance, and player response.",
      src: "../img/NEWMANZO/fishAI.mp4",
      poster: null
    },
    {
      title: "Beat-linked Hunting",
      subtitle: "Development prototype",
      description: "A gameplay test connecting fish hunting to the project's beat system.",
      src: "../img/NEWMANZO/hunting_mode.mp4",
      poster: null
    },
    {
      title: "Raycasting & Post-processing",
      subtitle: "Development prototype",
      description: "An early presentation test for constrained underwater visibility.",
      src: "../img/NEWMANZO/postprocessing.mp4",
      poster: null
    }
  ],
  contributions: {
    sections: [
      {
        title: "Complete Game Art & Visual Direction",
        category: "Art",
        htmlContent: renderNewManzoArtShowcase("en")
      },
      {
        title: "Unity/C# Systems Ownership",
        category: "Technical",
        htmlContent: `<section><h2>Primary Unity/C# Contributor</h2><p class="case-study-lede">I owned the path from audio timing and gameplay architecture to boss behavior, tools, UI, and final integration. The evidence below separates decisions from implementation details so the scope stays scannable.</p>${renderEngineeringCaseStudy({metrics:[{icon:"↗",value:"418 / 585",label:"repository commits"},{icon:"{ }",value:"328 / 367",label:"first-party code files touched"},{icon:"◉",value:"Unity · C#",label:"runtime, tools & FMOD"},{icon:"✦",value:"100%",label:"in-game art authored"}],architecture:[{title:"FMOD timeline",detail:"Beat callbacks and song position"},{title:"Main-thread rhythm core",detail:"Safe snapshots, timing windows, calibration"},{title:"Gameplay systems",detail:"Ship, hunting, fish, damage, combo"},{title:"Data-driven encounters",detail:"Boss states, patterns, telegraphs, phases"},{title:"Player-facing output",detail:"Animation, VFX, UI, save flow, tools"}],cases:[{label:"Concurrency",title:"Audio-thread beats without unsafe Unity calls",problem:"FMOD callbacks can arrive off Unity's main thread, where scene and gameplay API calls are unsafe.",decision:"Capture callback data only, then consume the newest immutable snapshot during Update.",implementation:"Published beat, bar, and timeline data with an increasing sequence; Volatile.Read gates delivery to BeatSystem on the main thread.",verification:"Runtime offset controls and beat-debug UI expose missed, duplicated, or perceptually late events."},{label:"Gameplay AI",title:"Readable schooling instead of rigid paths",problem:"Fish needed to feel alive, remain huntable, and avoid obstacles without expensive authored routes.",decision:"Compose local steering behaviors and keep species/group parameters in reusable data.",implementation:"Built leader/follower roles, group spawning, zone constraints, player response, separation, cohesion, and avoidance around FishData.",verification:"A dedicated prototype scene validates schooling, avoidance, and player response before hunting-mode integration."},{label:"Procedural Motion",title:"Crab legs that follow combat movement",problem:"A large multi-legged boss looked detached when feet simply inherited the moving body transform.",decision:"Detach foot targets and move alternating leg groups only after planted distance crosses a threshold.",implementation:"Combined ground raycasts, velocity lead, step arcs, reach clamps, body alignment, and tunable step values.",verification:"Feet snap to valid ground at startup; inspector controls expose groups and thresholds for animation tuning."},{label:"Workflow",title:"Tools for repeatable content setup",problem:"Boss scenes, current zones, ranges, and UI styles required repeated manual setup that could drift or break.",decision:"Move common setup and validation into Editor utilities and reusable presets.",implementation:"Created scene builders, range visualizers, UI-style controls, and ocean-current setup tools beside runtime systems.",verification:"Design changes can be rebuilt from known settings instead of undocumented scene edits."}],decisions:[{system:"Rhythm",choice:"FMOD timeline source",reason:"Aligns gameplay to authored markers.",tradeoff:"Needs thread-safe handoff and calibration."},{system:"Boss attacks",choice:"Pattern ScriptableObjects",reason:"Reusable, tunable telegraphs and attacks.",tradeoff:"Data contracts require validation."},{system:"Fish",choice:"Local steering + shared data",reason:"Emergent schools without authored paths.",tradeoff:"Boundary and obstacle tuning."},{system:"Content",choice:"Editor tools and presets",reason:"Less repetition and configuration drift.",tradeoff:"Tools must evolve with runtime data."}],code:{title:"FMOD callback → Unity main thread",description:"The callback publishes a lightweight snapshot; Update consumes only a new sequence before touching gameplay systems.",snippet:`// Audio thread: publish data only\n_latestBeat = new BeatSnapshot(beat, bar, timelineMs);\nInterlocked.Increment(ref _latestBeatSeq);\n\n// Unity main thread\nint seq = Volatile.Read(ref _latestBeatSeq);\nif (seq == _handledBeatSeq) return;\n_handledBeatSeq = seq;\nBeatSystem.Instance?.OnFmodBeat(_latestBeat);`,url:"https://github.com/Seohyeon-Min/NewManzo/blob/main/Assets/4_Scripts/System/BeatSystem/FmodBeatDriver.cs"},note:"Repository counts exclude third-party plugins and are scope evidence, not a substitute for explaining the work."})}</section>`
      },
      {
        title: "Production",
        category: "Producing",
        items: [
          "Evaluated repeated design changes against the team's actual implementation state, member availability, and remaining schedule, then determined that the existing scope was not realistically finishable",
          "Preserved the strongest combat work and reframed the game as a focused boss rush, cutting exploration and secondary features to create a coherent, shippable scope",
          "Diagnosed stalled delivery as the team expanded and members' primary commitments reduced reliable availability",
          "Reconfirmed who could commit, reorganized ownership around a smaller active team, and cut nonessential scope",
          "Set a two-week finish window with explicit completion criteria, prioritized the remaining work, and drove the project to a playable final build",
          "Provided technical support for graphics integration and prototypes throughout the recovery sprint"
        ]
      }
    ]
  }
});

applyEnglishProjectOverride("01_Manzo", {
  pageTitle: "MANZO — Min Seohyeon Portfolio",
  overview: "MANZO is a rhythm Metroidvania psychological horror where you pilot the underwater drone Dal, dashing to the beat to hunt fish and dodge danger. Track bosses by ear through the Morse code they broadcast, decode what you find to uncover the ocean's buried secrets, and reach one of several different endings.",
  features: [
    "Rhythm-based movement: dash on the beat to explore",
    "Sound-driven boss tracking: detect Morse-code signals by ear to locate bosses",
    "Metroidvania exploration: unlock modules and skills to reach deeper waters",
    "Deep-sea psychological horror: the tone darkens the deeper you descend"
  ],
  experience: {
    role: "Graphics / Engine Programmer · Technical Artist · Production Lead",
    period: "September 2024 – 2025",
    tools: "C++ · OpenGL · GLSL · Custom Engine"
  },
  contributions: {
    sections: [
      {
        title: "Rendering & Engine Systems",
        category: "Technical",
        htmlContent: `<section><h2>Engine-wide Systems</h2><p class="case-study-lede">Beyond the renderer, the same C++/OpenGL engine covers collision, narrative flow, particles, and audio timing. Here's how they fit together.</p>${renderEngineeringCaseStudy({metrics:[{icon:"C++",value:"Custom",label:"engine architecture"},{icon:"▧",value:"Multi-pass",label:"OpenGL renderer"},{icon:"→|",value:"CCD",label:"time-of-impact collision"},{icon:"♫",value:"BPM",label:"rhythm-driven systems"}],architecture:[{title:"Audio & input",detail:"Song time, calibration, player intent"},{title:"Engine services",detail:"Beat, scenario, object, state managers"},{title:"Simulation",detail:"Components, CCD, particles, boss logic"},{title:"Layer queues",detail:"Background, world, UI, late draws"},{title:"Framebuffer chain",detail:"Bloom, distortion, rays, ripples"}],architectureNote:"This is the per-frame order data moves through: input becomes song-synced state, engine services turn it into simulated objects, and layered draws are composited into the final frame.",cases:[{label:"Collision",title:"Preventing fast-movement tunneling",problem:"Beat-driven dashes could cross thin geometry between discrete frames.",decision:"Test the swept next-frame state and resolve the earliest contact time instead of only the final position.",implementation:"Added next-frame collider tests and binary-searched normalized frame time until the time-of-impact interval reached a small threshold.",verification:"Movement stops at calculated contact; current-frame and next-frame early-outs keep the test bounded."},{label:"Rendering",title:"Effects without mixing scene concerns",problem:"World, UI, lighting, and screen effects required different ordering and render targets.",decision:"Queue draw calls by layer and make post-processing an explicit framebuffer pipeline.",implementation:"Separated background, world, UI, and late rendering; chained bloom, distortion, god rays, ripples, and transitions.",verification:"Effects can be enabled and tuned independently while preserving deterministic draw order."},{label:"Architecture",title:"Stable narrative events across state changes",problem:"Dialogue and scenario objects owned by a game mode became invalid during state changes.",decision:"Promote scenario and dialogue lifetime to engine-level services.",implementation:"Refactored ownership and event flow so transitions no longer destroy data still required by narrative systems.",verification:"Dialogue and scripted events continue reliably across scene and state transitions."},{label:"Performance",title:"Boss slowdown traced to repeated collision work",problem:"The boss encounter slowed severely as attacks and objects accumulated.",decision:"Audit repeated collision paths before reducing gameplay or visual scope.",implementation:"Located redundant brute-force checks and removed duplicate work from the encounter path.",verification:"The fight stabilized; because profiler figures were not retained, no unsupported percentage is claimed."}],decisions:[{system:"Movement collision",choice:"Binary-search TOI",reason:"Compact solution for dash tunneling.",tradeoff:"Iterative, not a general analytic solver."},{system:"Renderer",choice:"Layer queues + FBO passes",reason:"Explicit ordering and effects.",tradeoff:"More render-target state management."},{system:"Narrative",choice:"Engine-level lifetime",reason:"Survives game-mode transitions.",tradeoff:"Requires disciplined service ownership."},{system:"Particles",choice:"Shared lifetime + motion variants",reason:"One pipeline for attacks and ambience.",tradeoff:"Variants need clear defaults."}],code:{title:"Continuous collision with time of impact",description:"After current/next-frame early-outs, the solver narrows the first colliding moment inside the frame.",snippet:`float begin = 0.0f, end = 1.0f;\nwhile (end - begin > 0.001f) {\n  const float mid = (begin + end) * 0.5f;\n  Rect probe = start_rect;\n  probe.position += velocity * dt * mid;\n  if (probe.IsColliding(other_rect)) end = mid;\n  else begin = mid;\n}\ntoi = end;`,url:"https://github.com/Seohyeon-Min/manzo/blob/main/Manzo/Manzo/Engine/Collision.cpp"},note:"Verified implementation details are shown separately from performance figures that were not retained."})}</section>`
      },
      {
        title: "Art & Visual Direction",
        category: "Art",
        subsections: [
          {
            title: "Game Art",
            items: [
              "Character portrait illustrations",
              "Fish pixel art",
              "Boss pixel art",
              "Character's house interior art"
            ],
            images: [
              { src: "../img/MANZO/1.png", alt: "Character portrait illustration 1", title: "Character portrait illustration 1" },
              { src: "../img/MANZO/2.png", alt: "Character portrait illustration 2", title: "Character portrait illustration 2" },
              { src: "../img/MANZO/4.jpg", alt: "Fish pixel art", title: "Fish pixel art" },
              { src: "../img/MANZO/5.png", alt: "Boss pixel art", title: "Boss pixel art" },
              { src: "../img/MANZO/6.png", alt: "Character's house interior art", title: "Character's house interior art" }
            ]
          },
          {
            title: "UI/UX Design",
            items: [
              "Designed FuelUI and other UI elements"
            ]
          },
          {
            title: "Shader Development",
            items: [
              "Created a range of custom shaders",
              "Implemented and designed post-processing"
            ]
          }
        ]
      },
      {
        title: "Production Leadership",
        category: "Project Lead",
        htmlContent: `<section class="project-lead">

  <h2>Production Leadership</h2>

  <div class="lead-section">
    <h3>Vision &amp; Direction</h3>
    <p>
      Defined the project's overall direction and core experience, and aligned the team around a shared goal.
    </p>
    <p>
      Early on, I set the core concept as
      <strong>"Rhythm-based Deep Sea Exploration Horror"</strong>,
      then organized concept art and design documents so every teammate could picture the same play experience.
    </p>
    <p>
      This gave design, art, and programming a shared foundation to move in the same direction.
    </p>
  </div>

  <div class="lead-section">
    <h3>Scope Management</h3>
    <p>
      Continuously adjusted the project's scope throughout development to
      <strong>keep the core experience intact while keeping the project achievable</strong>.
    </p>
    <p>
      Early plans called for a large, story-driven structure with many systems; as development progressed, I re-scoped around technical difficulty and schedule constraints.
    </p>
    <ul>
      <li>Scaled back the story-driven structure</li>
      <li><strong>Strengthened the core play loop</strong> (Rhythm Movement + Exploration + Boss Fights)</li>
      <li>Concentrated development resources on boss combat and exploration</li>
    </ul>
    <p>
      This prevented feature creep and kept the project in a stable, completable shape.
    </p>
  </div>

  <div class="lead-section">
    <h3>Team Coordination</h3>
    <p>
      As producer, managed collaboration structure and workflow to prevent conflicts between teammates' work.
    </p>
    <ul>
      <li>Organized task priorities and the schedule</li>
      <li>Distributed work by feature</li>
      <li>Managed Git merges and feature integration</li>
      <li>Coordinated dependencies between systems</li>
    </ul>
    <p>
      Structured development around each teammate's owned systems, <strong>minimizing conflicts and duplicate work</strong>.
    </p>
  </div>

  <div class="lead-section">
    <h3>Problem Solving &amp; Integration</h3>
    <p>
      In the later stages, resolved issues from multiple systems running at once and integrated the game into one coherent experience.
    </p>
    <ul>
      <li>Analyzed the Scenario and Dialog system structure and <strong>restructured them as engine-level systems</strong></li>
      <li><strong>Added shader- and particle-based effects</strong> to strengthen visual feedback in boss combat</li>
      <li><strong>Fixed boss-combat performance issues</strong> by improving the collision computation structure</li>
    </ul>
    <p>
      This improved the game's stability and the play experience at the same time.
    </p>
  </div>

  <div class="lead-section">
    <h3>Production Leadership</h3>
    <p>
      When team focus dropped late in development, I picked up hands-on work myself to drive the project to completion.
    </p>
    <ul>
      <li>Debugging</li>
      <li>System fixes</li>
      <li>Visual effects work</li>
      <li>Feature integration</li>
    </ul>
    <p>
      Worked across multiple areas in parallel, playing a key role in <strong>bringing the project to an actually playable state</strong>.
    </p>
  </div>

</section>`
      }
    ]
  },
  projectDetails: null,
  source: {
    text: "Review the source and implementation on GitHub.",
    url: "https://github.com/Seohyeon-Min/manzo",
    label: "GitHub"
  }
});

applyEnglishProjectOverride("03_DoubleHit", {
  subtitle: "Custom Engine · Two-player cooperative action",
  pageTitle: "Double Hit — Min Seohyeon Portfolio",
  overview: "A C++ engine project built on DigiPen CS230's composition-based GameObject/Component skeleton, where I implemented the sprite parsing, texture caching, and collision-dispatch systems that later became the foundation MANZO expanded on.",
  features: ["Sprite-file parser (textures, animation, hotspots, collision wiring)", "Filename-keyed texture cache with dedup", "GameObjectManager update/draw/collision-dispatch loop", "Two-player cooperative gameplay"],
  experience: {
    role: "Systems Programmer · Art / Audio · Production Lead",
    period: "March – July 2024",
    description: "Implemented the sprite, texture, and object-manager systems within DigiPen's CS230 course engine, while also producing concept art, assets, audio, and the team schedule."
  },
  contributions: {
    sections: [
      {
        title: "Custom Engine Foundations",
        category: "Technical",
        htmlContent: `<section><h2>Custom Engine Foundations</h2><p class="case-study-lede">Working inside DigiPen CS230's composition-based GameObject/Component skeleton, I implemented the sprite, texture, and object-manager systems that I later expanded into MANZO.</p>${renderEngineeringCaseStudy({metrics:[{icon:"C++",value:"4",label:"core systems implemented"},{icon:"◇",value:"2P",label:"co-op gameplay"}],architecture:[{title:"Engine services",detail:"Course-provided shared access and lifetime"},{title:"Game objects",detail:"Course-provided identity and transforms"},{title:"Components",detail:"Course-provided composable behavior"},{title:"Sprite & collision",detail:"Implemented by me: parsing, caching, dispatch"}],cases:[{label:"Implementation",title:"Data-driven sprites over hardcoded per-object logic",problem:"Frame rects and collision shapes hardcoded per object class would mean recompiling C++ for every art or hitbox tweak.",decision:"Drive sprite, animation, and collision setup from a parsed .spt data file instead.",implementation:"Wrote Sprite::Load's file parser, TextureManager's dedup cache, and GameObjectManager's per-frame update/collision-dispatch loop within the course's GameObject/Component skeleton.",verification:"The same systems supported the co-op game and became the starting point I expanded into MANZO."},{label:"Tools",title:"Data-driven level layout instead of hardcoded coordinates",problem:"About 30 platform positions were hardcoded directly in Mode1::Load(), so any layout change meant recompiling C++.",decision:"Move level geometry into a parsed level-data file instead of inline code.",implementation:"Built a PlatformManager that parses a custom .plf text format (Platform/ElitePlatform tokens) and instantiates platform objects from it, replacing the inline coordinate list in Mode1.",verification:"Level layout became an editable data asset — adjusting or adding platforms no longer required touching or recompiling C++."}],decisions:[],note:"The later MANZO page shows how this foundation grew into rendering, CCD, rhythm, and narrative systems."})}</section>`
      },
      {
        title: "Cross-discipline Production",
        category: "Project Lead",
        items: ["Produced concept art, game assets, and audio", "Coordinated task ownership and the development schedule"]
      }
    ]
  },
  source: {
    text: "Review the project source on GitHub.",
    url: "https://github.com/Seohyeon-Min/DoubleHit",
    label: "GitHub"
  }
});

applyEnglishProjectOverride("04_BirdStrike", {
  subtitle: "Rhythm Action Game",
  pageTitle: "Bird Strike — Min Seohyeon Portfolio",
  overview: "A two-month C++ rhythm-action game built without a commercial engine. Players clear rhythm-synchronized crows before the screen becomes overwhelmed.",
  features: [
    "Audio-timeline beat detection and rhythm-synchronized spawning",
    "Dynamic attack-rate subdivision based on chained targets",
    "Two-stage difficulty escalation, leaderboard, and achievements",
    "Original concept art, character design, logo, and audio"
  ],
  experience: {
    role: "Gameplay Programmer · Game Designer · Artist · Production Lead",
    period: "November – December 2023",
    description: "Designed and implemented the rhythm-action loop, created the visual and audio direction, and coordinated the two-month team scope."
  },
  gameIntro: `<p>Bird Strike was my first university game project, created during my freshman year and built in C++ without a commercial engine. Crows enter from random directions in time with the music, and players connect targets to maintain control of the screen.</p><p>Chaining more targets increases attack speed through dynamic beat subdivision. A sun acts as the stage timer, while the second phase raises the tempo and introduces a disruptive enemy. The project also includes score competition and achievements for replayability.</p>`,
  contributions: {
    sections: [
      {
        title: "Rhythm Gameplay Implementation",
        category: "Technical",
        htmlContent: `<section><h2>Rhythm Gameplay Implementation</h2><p class="case-study-lede">My first university game project focused on turning a music timeline into escalating screen pressure without a commercial engine.</p>${renderEngineeringCaseStudy({metrics:[{icon:"♫",value:"4×",label:"maximum beat subdivision"},{icon:"C++",value:"0",label:"commercial engines used"}],architecture:[{title:"Music timeline",detail:"Beat timing source"},{title:"Subdivision rules",detail:"Chain thresholds change attack interval"},{title:"Spawn manager",detail:"Random direction and pacing"},{title:"Movement",detail:"Destination, velocity, atan2 heading"},{title:"Pressure loop",detail:"Clear targets before overflow"}],cases:[{label:"Game System",title:"Difficulty generated from player chaining",problem:"A fixed spawn rhythm would not reward skilled target selection or create a strong escalation curve.",decision:"Let longer chains subdivide the beat and increase attack frequency.",implementation:"At four, six, and eight connected targets, the interval increases to two, three, and four attacks per beat.",verification:"The mechanic connects score-seeking directly to tempo and screen control, while phase two adds another enemy and faster pacing."}],decisions:[],note:"Completed during my freshman year over a two-month team schedule."})}</section>`
      },
      {
        title: "Game Design",
        category: "Planning",
        htmlContent: `<section class="design">
          <h2>Game Design</h2>
          <h3>Rhythm-Action Core</h3>
          <p>
            Designed a core play structure combining rhythm and action. Players drag to connect crows entering from random directions, and inputting on the beat clears them most efficiently — making rhythm-aware play emerge naturally instead of plain clicking.
          </p>
          <h3>Random Spawn &amp; Replayability</h3>
          <p>
            Used randomly spawning enemies instead of the fixed note patterns typical of rhythm games, so play differs each run even on the same track, keeping repeat play viable.
          </p>
          <h3>Combo &amp; Speed Feedback</h3>
          <p>
            Chaining more crows at once increases the player's attack speed, naturally forming a risk-reward structure that pushes players to connect more targets.
          </p>
          <h3>Input Control &amp; Rhythm Emphasis</h3>
          <p>
            Blocked additional input during the attack animation, so timing-aware rhythm play matters instead of random button-mashing.
          </p>
          <h3>Screen Pressure System</h3>
          <p>
            Up to 20 crows can stack on screen; if that state holds for 3+ seconds, the game ends — designed to create pressure that forces players to keep clearing the screen.
          </p>
          <h3>Stage Progression</h3>
          <p>
            The game runs in two phases. The sun acts as a timer, and phase one ends when it touches the horizon. Reaching a score threshold unlocks phase two, giving players a score-based goal to play toward.
          </p>
          <h3>Difficulty Escalation</h3>
          <p>
            Phase two adds a faster music tempo and a new enemy, the "decoy crow," raising rhythm focus and difficulty together in the back half.
          </p>
          <h3>Long-term Motivation</h3>
          <p>
            Added a leaderboard and an achievement system to encourage repeat play, giving players score competition and challenge goals.
          </p>
        </section>`
      },
      {
        title: "Art",
        category: "Art",
        htmlContent: `<section class="design">
          <h2>Art</h2>
          <h3>Concept Art</h3>
          <div class="contribution-image"><img src="../img/BIRD_STRIKE/1.jpg" alt="Concept art 1" title="Concept art 1" /></div>
          <div class="contribution-image"><img src="../img/BIRD_STRIKE/2.jpg" alt="Concept art 2" title="Concept art 2" /></div>
          <h3>Character Design</h3>
          <div class="contribution-image"><img src="../img/BIRD_STRIKE/3.jpg" alt="Character design" title="Character design" /></div>
          <h3>Logo Design</h3>
          <div class="contribution-image"><img src="../img/BIRD_STRIKE/4.png" alt="Logo design" title="Logo design" /></div>
        </section>`
      },
      {
        title: "Production",
        category: "Project Lead",
        htmlContent: `<section class="project-lead">
          <h2>Project Leadership</h2>
          <div class="lead-section">
            <h3>Scope Management</h3>
            <p>
              Given the limited development time and team size, I focused on scoping the project to create the most play experience from the fewest resources.
            </p>
            <p>
              Instead of authoring notes per track like a typical rhythm game, I designed a structure where randomly spawning enemies are cleared to the beat, enabling repeat play with no per-track content cost.
            </p>
            <p>
              A two-phase structure also let me shift tempo and add a new enemy without a big jump in system complexity, creating variation in difficulty and feel.
            </p>
          </div>
          <div class="lead-section">
            <h3>Project Direction</h3>
            <p>
              On the production side, I focused on getting the whole team aligned around the same goal and direction. Before development started, I made concept art that captured the gameplay at a glance so it could serve as the team's shared reference.
            </p>
          </div>
          <div class="lead-section">
            <h3>Team Alignment</h3>
            <p>
              Clearly defining the visual direction and play flow early on let the team work from the same target, and kept that direction from drifting during later design and implementation.
            </p>
          </div>
        </section>`
      }
    ]
  },
  source: {
    text: "Review the project source on GitHub.",
    url: "https://github.com/Seohyeon-Min/bird_sprite_2",
    label: "GitHub"
  }
});

const koreanCaseLabels = { systemMap:"시스템 구조", problem:"문제", decision:"판단", implementation:"구현", verification:"검증", keyDecisions:"내가 내린 핵심 판단", decisionLog:"기술 결정", decisionTitle:"이 구조를 선택한 이유", system:"시스템", choice:"선택", why:"이유", tradeoff:"트레이드오프", codeEvidence:"코드 증거", viewSource:"원본 코드 보기 ↗" };

projectsData["01_Manzo"].localized.ko.overview = "리듬 기반 대시 이동으로 심해를 탐험하고 모스 부호를 해독하며 바다의 비밀을 밝혀나가는 Rhythm Metroidvania Psychological Horror 게임입니다. 해양 드론 \"Dal\"을 조종해 박자에 맞춰 대시하고, 물고기를 포획해 모듈·스킬을 강화하며, 보스가 보내는 모스 부호를 청각으로 추적해 전투를 벌입니다. 탐험 방식과 선택에 따라 서로 다른 결말에 도달합니다.";
projectsData["01_Manzo"].localized.ko.features = ["리듬 기반 이동: 박자에 맞춰 대시하며 탐험", "사운드 기반 보스 트래킹: 모스 부호를 청각으로 탐지해 보스 위치 추적", "메트로배니아 탐험: 모듈과 스킬로 더 깊은 심해까지 진출", "딥씨 사이코 호러: 심해로 갈수록 어둡고 불안해지는 분위기"];
projectsData["03_DoubleHit"].localized.ko.overview = "DigiPen CS230의 composition 기반 GameObject/Component 스켈레톤 위에서, 스프라이트 파싱·텍스처 캐싱·충돌 디스패치 시스템을 직접 구현한 C++ 엔진 프로젝트입니다. 이 구현이 이후 MANZO로 확장됐습니다.";
projectsData["03_DoubleHit"].localized.ko.features = ["스프라이트 파일 파서 (텍스처·애니메이션·핫스팟·콜리전 연결)", "파일명 기준 중복제거 텍스처 캐시", "GameObjectManager 업데이트·드로우·충돌 디스패치 루프", "2인 협동 게임플레이"];

projectsData["00_NewManzo"].localized.ko.contributions.sections[0].htmlContent = `<section><h2>Unity/C# 주요 시스템 오너십</h2><p class="case-study-lede">오디오 타이밍과 게임플레이 구조부터 보스 동작, 제작 도구, UI, 최종 통합까지 직접 담당했습니다. 작업 범위를 빠르게 읽을 수 있도록 판단과 구현 증거를 분리했습니다.</p>${renderEngineeringCaseStudy({labels:koreanCaseLabels,metrics:[{icon:"↗",value:"418 / 585",label:"저장소 커밋"},{icon:"{ }",value:"328 / 367",label:"주요 코드 파일 작업"},{icon:"◉",value:"Unity · C#",label:"런타임·툴·FMOD"},{icon:"✦",value:"100%",label:"인게임 아트 직접 제작"}],architecture:[{title:"FMOD 타임라인",detail:"비트 콜백과 곡 재생 위치"},{title:"메인 스레드 리듬 코어",detail:"안전한 스냅샷·판정 창·싱크 보정"},{title:"게임플레이 시스템",detail:"함선·사냥·물고기·대미지·콤보"},{title:"데이터 중심 전투",detail:"보스 상태·패턴·전조·페이즈"},{title:"플레이어 출력",detail:"애니메이션·VFX·UI·세이브·툴"}],cases:[{label:"동시성",title:"Unity API를 안전하게 호출하는 비트 전달",problem:"FMOD 타임라인 콜백은 Unity 메인 스레드 밖에서 들어올 수 있어 씬과 게임플레이 API를 직접 호출하면 안전하지 않습니다.",decision:"콜백에서는 데이터만 기록하고 Update에서 가장 최신의 불변 스냅샷을 소비하도록 했습니다.",implementation:"비트·마디·타임라인 값과 증가하는 시퀀스를 발행하고, Volatile.Read로 새 이벤트를 확인한 뒤 메인 스레드의 BeatSystem에 전달했습니다.",verification:"런타임 오프셋 조절과 비트 디버그 UI로 누락·중복·체감 지연을 확인할 수 있게 했습니다."},{label:"게임플레이 AI",title:"고정 경로 대신 읽기 쉬운 군집 행동",problem:"물고기가 살아 움직이면서도 사냥 가능해야 하고, 수작업 경로 없이 장애물을 피해야 했습니다.",decision:"지역 조향 행동을 조합하고 종과 무리별 설정을 재사용 가능한 데이터로 분리했습니다.",implementation:"FishData를 중심으로 리더·팔로워, 무리 스폰, 구역 제한, 플레이어 반응, 분리·응집·회피를 구현했습니다.",verification:"전용 프로토타입 씬에서 군집, 장애물 회피, 플레이어 반응을 먼저 확인한 뒤 사냥 모드에 통합했습니다."},{label:"절차적 모션",title:"전투 이동을 따라가는 게 보스 다리",problem:"발 타깃이 몸체 Transform을 그대로 따라가면 거대한 다관절 보스가 바닥에서 떠 보였습니다.",decision:"발 타깃을 몸체에서 분리하고, 고정된 발과 몸의 거리가 임계값을 넘을 때 교차 다리 그룹만 이동시켰습니다.",implementation:"지면 레이캐스트, 속도 예측, 스텝 곡선, 도달 거리 제한, 몸체 정렬과 조절 가능한 스텝 값을 결합했습니다.",verification:"시작 시 발이 유효한 지면에 스냅되며, 그룹과 임계값을 Inspector에서 조절할 수 있습니다."},{label:"워크플로",title:"반복 가능한 콘텐츠 제작 도구",problem:"보스 씬, 해류 구역, 범위와 UI 스타일을 매번 수동 설정하면 누락과 설정 차이가 생겼습니다.",decision:"공통 설정과 검증을 에디터 유틸리티와 프리셋으로 옮겼습니다.",implementation:"씬 빌더, 범위 시각화, UI 스타일 제어와 해류 설정 도구를 런타임 시스템과 함께 제작했습니다.",verification:"기록되지 않은 씬 수정에 의존하지 않고 동일한 설정으로 콘텐츠를 다시 구성할 수 있습니다."}],decisions:[{system:"리듬",choice:"FMOD 타임라인 기준",reason:"저작된 음악 마커와 게임플레이를 정렬합니다.",tradeoff:"스레드 안전 전달과 싱크 보정이 필요합니다."},{system:"보스 공격",choice:"패턴 ScriptableObject",reason:"공격과 전조를 재사용하고 조절하기 쉽습니다.",tradeoff:"데이터 유효성 검사가 필요합니다."},{system:"물고기",choice:"지역 조향 + 공유 데이터",reason:"수작업 경로 없이 자연스러운 무리를 만듭니다.",tradeoff:"경계와 장애물 근처 튜닝이 필요합니다."},{system:"콘텐츠",choice:"에디터 툴과 프리셋",reason:"반복 작업과 설정 편차를 줄입니다.",tradeoff:"런타임 데이터 변경에 맞춰 툴도 관리해야 합니다."}],code:{title:"FMOD 콜백 → Unity 메인 스레드",description:"콜백은 가벼운 스냅샷만 발행하고, Update가 새로운 시퀀스만 소비한 뒤 게임플레이 시스템을 호출합니다.",snippet:`// 오디오 스레드: 데이터만 발행\n_latestBeat = new BeatSnapshot(beat, bar, timelineMs);\nInterlocked.Increment(ref _latestBeatSeq);\n\n// Unity 메인 스레드\nint seq = Volatile.Read(ref _latestBeatSeq);\nif (seq == _handledBeatSeq) return;\n_handledBeatSeq = seq;\nBeatSystem.Instance?.OnFmodBeat(_latestBeat);`,url:"https://github.com/Seohyeon-Min/NewManzo/blob/main/Assets/4_Scripts/System/BeatSystem/FmodBeatDriver.cs"},note:"저장소 수치는 외부 플러그인을 제외했으며, 작업 설명을 대신하는 숫자가 아니라 범위를 확인하는 증거로 사용했습니다."})}</section>`;
projectsData["00_NewManzo"].localized.ko.contributions.sections[0].htmlContent = renderNewManzoArtShowcase("ko");

const koreanManzoTechnical = projectsData["01_Manzo"].localized.ko.contributions.sections.find(section => section.category === "Technical");
koreanManzoTechnical.htmlContent = `<section><h2>엔진 전반 시스템</h2><p class="case-study-lede">렌더러 외에도 같은 C++/OpenGL 엔진에서 충돌, 내러티브 흐름, 파티클, 오디오 타이밍을 함께 구현했습니다. 아래는 이 시스템들이 어떻게 맞물리는지입니다.</p>${renderEngineeringCaseStudy({labels:koreanCaseLabels,metrics:[{icon:"C++",value:"Custom",label:"엔진 아키텍처"},{icon:"▧",value:"Multi-pass",label:"OpenGL 렌더러"},{icon:"→|",value:"CCD",label:"충돌 시점 계산"},{icon:"♫",value:"BPM",label:"리듬 기반 시스템"}],architecture:[{title:"오디오와 입력",detail:"곡 시간·보정·플레이어 의도"},{title:"엔진 서비스",detail:"비트·시나리오·오브젝트·상태 관리자"},{title:"시뮬레이션",detail:"컴포넌트·CCD·파티클·보스 로직"},{title:"레이어 큐",detail:"배경·월드·UI·후순위 드로우"},{title:"프레임버퍼 체인",detail:"Bloom·왜곡·God ray·Ripple"}],architectureNote:"매 프레임 데이터가 흐르는 순서입니다: 입력이 곡 타이밍에 맞춰 상태가 되고, 엔진 서비스가 이를 시뮬레이션 오브젝트로 만들고, 레이어별 드로우가 최종 화면으로 합성됩니다.",cases:[{label:"충돌",title:"빠른 이동의 터널링 방지",problem:"박자에 맞춘 대시가 프레임 사이에서 얇은 지형을 통과할 수 있었습니다.",decision:"마지막 위치만 검사하지 않고 다음 프레임의 이동 구간에서 최초 충돌 시점을 계산했습니다.",implementation:"현재·다음 프레임의 조기 검사를 추가하고 정규화된 프레임 시간을 이진 탐색해 TOI 구간을 좁혔습니다.",verification:"이동체가 계산된 접촉 지점에서 멈추며, 조기 종료로 불필요한 반복을 줄였습니다."},{label:"렌더링",title:"씬 로직과 분리된 화면 효과",problem:"월드, UI, 조명과 화면 효과에 서로 다른 순서와 렌더 타깃이 필요했습니다.",decision:"드로우 콜을 레이어로 큐잉하고 후처리를 명시적인 프레임버퍼 파이프라인으로 구성했습니다.",implementation:"배경·월드·UI·Late Rendering을 분리하고 Bloom, 수중 왜곡, God ray, Ripple과 화면 전환 패스를 연결했습니다.",verification:"드로우 순서를 유지하면서 각 효과를 독립적으로 켜고 조절할 수 있습니다."},{label:"아키텍처",title:"상태 전환 후에도 안전한 내러티브 이벤트",problem:"게임 모드가 소유한 대화·시나리오 객체가 상태 전환 중 파괴되어 댕글링 포인터가 발생했습니다.",decision:"시나리오와 대화의 수명을 엔진 서비스 수준으로 올렸습니다.",implementation:"상태가 바뀌어도 내러티브 데이터가 먼저 파괴되지 않도록 소유권과 이벤트 흐름을 리팩터링했습니다.",verification:"씬과 상태가 전환된 뒤에도 대화와 스크립트 이벤트가 안정적으로 이어집니다."},{label:"성능",title:"중복 충돌 검사로 인한 보스전 저하 해결",problem:"공격과 오브젝트가 늘어나면서 보스전이 심하게 느려졌습니다.",decision:"비주얼이나 게임플레이를 줄이기 전에 반복되는 충돌 경로부터 추적했습니다.",implementation:"중복된 브루트포스 충돌 검사를 찾아 전투 경로에서 반복 작업을 제거했습니다.",verification:"수정 후 전투가 안정화됐지만 당시 프로파일 수치는 보관하지 않아 검증되지 않은 개선율은 표시하지 않았습니다."}],decisions:[{system:"이동 충돌",choice:"이진 탐색 TOI",reason:"대시 터널링을 해결하는 작고 이해하기 쉬운 방식입니다.",tradeoff:"범용 해석적 솔버보다 반복 비용이 있습니다."},{system:"렌더러",choice:"레이어 큐 + FBO 패스",reason:"순서와 효과 단계를 명확히 분리합니다.",tradeoff:"렌더 타깃 상태 관리가 늘어납니다."},{system:"내러티브",choice:"엔진 수준 수명",reason:"게임 모드 전환 후에도 유지됩니다.",tradeoff:"서비스 소유권 규칙이 필요합니다."},{system:"파티클",choice:"공통 수명 + 이동 변형",reason:"공격과 환경 효과가 한 파이프라인을 공유합니다.",tradeoff:"변형별 기본값을 명확히 해야 합니다."}],code:{title:"충돌 시점 기반 연속 충돌 검사",description:"현재와 다음 프레임의 조기 검사 후, 프레임 내부에서 최초로 충돌하는 시점을 좁힙니다.",snippet:`float begin = 0.0f, end = 1.0f;\nwhile (end - begin > 0.001f) {\n  const float mid = (begin + end) * 0.5f;\n  Rect probe = start_rect;\n  probe.position += velocity * dt * mid;\n  if (probe.IsColliding(other_rect)) end = mid;\n  else begin = mid;\n}\ntoi = end;`,url:"https://github.com/Seohyeon-Min/manzo/blob/main/Manzo/Manzo/Engine/Collision.cpp"},note:"확인 가능한 구현 내용과 보관되지 않은 성능 수치를 명확히 구분했습니다."})}</section>`;

projectsData["03_DoubleHit"].localized.ko.contributions.sections.find(section => section.category === "Technical").htmlContent = `<section><h2>커스텀 엔진 기반 구조</h2><p class="case-study-lede">이 프로젝트에서 만든 컴포넌트와 서비스 구조는 이후 MANZO 엔진의 출발점이 됐습니다.</p>${renderEngineeringCaseStudy({labels:koreanCaseLabels,metrics:[{icon:"C++",value:"4",label:"핵심 엔진 영역"},{icon:"◇",value:"2P",label:"협동 플레이"}],architecture:[{title:"엔진 서비스",detail:"공유 접근과 수명"},{title:"게임 오브젝트",detail:"식별자와 Transform"},{title:"컴포넌트",detail:"조합 가능한 동작"},{title:"스프라이트와 충돌",detail:"렌더링과 상호작용"}],cases:[{label:"아키텍처",title:"일회성 오브젝트 코드 대신 조합",problem:"플레이어, 스킬, 적과 보스가 각자 전용 로직을 가지면 결합도가 빠르게 높아집니다.",decision:"GameObject의 식별과 GameComponent의 재사용 가능한 동작을 분리했습니다.",implementation:"공유 서비스, SpriteManager와 텍스처 처리, 충돌 시스템을 컴포넌트 구조와 함께 구현했습니다.",verification:"같은 기반으로 협동 게임을 완성했고 이후 MANZO 엔진의 시작 구조로 확장했습니다."},{label:"툴",title:"하드코딩된 좌표 대신 데이터 기반 레벨 배치",problem:"약 30개의 플랫폼 좌표가 Mode1::Load()에 직접 하드코딩돼 있어, 레벨을 조금만 바꾸려 해도 C++를 다시 컴파일해야 했습니다.",decision:"레벨 지오메트리를 인라인 코드 대신 파싱 가능한 레벨 데이터 파일로 옮겼습니다.",implementation:"커스텀 .plf 텍스트 포맷(Platform/ElitePlatform 토큰)을 파싱해 플랫폼 오브젝트를 생성하는 PlatformManager를 만들어 Mode1의 인라인 좌표 목록을 대체했습니다.",verification:"레벨 배치가 수정 가능한 데이터 애셋이 되어, 플랫폼을 조정하거나 추가할 때 더 이상 C++ 코드를 건드리거나 재컴파일할 필요가 없어졌습니다."}],note:"MANZO 페이지에서 이 기반이 렌더링, CCD, 리듬과 내러티브 시스템으로 확장된 과정을 확인할 수 있습니다."})}</section>`;
(function() {
  const queryTrack = new URLSearchParams(window.location.search).get('track');
  const savedTrack = typeof localStorage !== 'undefined' ? localStorage.getItem('portfolio-track') : null;
  const validTracks = ['graphics', 'software', 'product'];
  const track = validTracks.includes(queryTrack) ? queryTrack : (validTracks.includes(savedTrack) ? savedTrack : 'graphics');
  const isSoftwareTrack = track === 'software';

  function removeCaseCard(html, caseLabel) {
    const marker = `<article><span class="case-label">${caseLabel}</span>`;
    const start = html.indexOf(marker);
    if (start === -1) return html;
    const end = html.indexOf("</article>", start) + "</article>".length;
    return html.slice(0, start) + html.slice(end);
  }

  const enManzoTechnical = projectsData["01_Manzo"].contributions.sections.find(section => section.category === "Technical");
  let enCaseStudySection = enManzoTechnical.htmlContent;
  const enDebuggingBlock = renderManzoDebuggingFeature("en");
  const enRenderDocBlock = renderManzoRenderDocFeature("en");
  const enRendererBlock = renderManzoRendererFeature("en");
  if (isSoftwareTrack) enCaseStudySection = removeCaseCard(enCaseStudySection, "Performance");
  enManzoTechnical.htmlContent = isSoftwareTrack
    ? enDebuggingBlock + enRendererBlock + enCaseStudySection
    : enRendererBlock + enCaseStudySection + enDebuggingBlock + enRenderDocBlock;

  let koCaseStudySection = koreanManzoTechnical.htmlContent;
  const koDebuggingBlock = renderManzoDebuggingFeature("ko");
  const koRenderDocBlock = renderManzoRenderDocFeature("ko");
  const koRendererBlock = renderManzoRendererFeature("ko");
  if (isSoftwareTrack) koCaseStudySection = removeCaseCard(koCaseStudySection, "성능");
  koreanManzoTechnical.htmlContent = isSoftwareTrack
    ? koDebuggingBlock + koRendererBlock + koCaseStudySection
    : koRendererBlock + koCaseStudySection + koDebuggingBlock + koRenderDocBlock;
})();
projectsData["03_DoubleHit"].contributions.sections.find(section => section.category === "Technical").htmlContent = renderDoubleHitEngineFeature("en") + projectsData["03_DoubleHit"].contributions.sections.find(section => section.category === "Technical").htmlContent;
projectsData["03_DoubleHit"].localized.ko.contributions.sections.find(section => section.category === "Technical").htmlContent = renderDoubleHitEngineFeature("ko") + projectsData["03_DoubleHit"].localized.ko.contributions.sections.find(section => section.category === "Technical").htmlContent;
projectsData["00_NewManzo"].contributions.sections.find(section => section.category === "Technical").htmlContent = renderNewManzoPatternArchitectureFeature("en") + projectsData["00_NewManzo"].contributions.sections.find(section => section.category === "Technical").htmlContent;
projectsData["00_NewManzo"].localized.ko.contributions.sections.find(section => section.category === "Technical").htmlContent = renderNewManzoPatternArchitectureFeature("ko") + projectsData["00_NewManzo"].localized.ko.contributions.sections.find(section => section.category === "Technical").htmlContent;

// New Manzo: merge the separate Art and Technical tabs into one "Technical Art" tab with a
// Contents jump-nav, same template as Poseidon Skate's psk-toc/psk-group (see enablePskToc in
// project-template.js, which is generic and already picks this up).
(function() {
  const svg = (d, w = 20, h = 20, vb = "0 0 24 24") => `<svg viewBox="${vb}" width="${w}" height="${h}" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
  const tocIcons = {
    art: svg('<path d="M12 3a9 9 0 1 0 0 18c1.4 0 2.1-.9 2.1-1.9 0-.5-.2-1-.5-1.4-.3-.4-.5-.9-.5-1.4 0-1 .8-1.8 1.8-1.8h2.1a4 4 0 0 0 4-4c0-4.4-4-7.5-9-7.5z"/><circle cx="7.5" cy="10.5" r="1"/><circle cx="12" cy="7.5" r="1"/><circle cx="16.5" cy="10.5" r="1"/>'),
    engineering: svg('<path d="M9 6 3 12l6 6M15 6l6 6-6 6"/>')
  };
  const pad2 = n => String(n).padStart(2, "0");
  const jump = (labels, hint) => {
    const keys = Object.keys(labels);
    const items = keys.map((k, i) => `<li><a href="#psk-g-${k}" data-psk-toc="psk-g-${k}"${i === 0 ? ' class="is-active" aria-current="true"' : ""}><span class="psk-toc-num">${pad2(i + 1)}</span><span class="psk-toc-icon">${tocIcons[k] || ""}</span><span class="psk-toc-label">${labels[k]}</span><span class="psk-toc-chev">${svg('<path d="M9 6l6 6-6 6"/>', 18, 18)}</span></a></li>`).join("");
    return `<nav class="psk-toc" aria-label="${hint.title}">`
      + `<header class="psk-toc-head"><span class="psk-toc-eyebrow">${hint.eyebrow}</span><p class="psk-toc-title" role="heading" aria-level="2">${hint.title}</p><p class="psk-toc-sub">${hint.sub}</p></header>`
      + `<ol class="psk-toc-list">${items}</ol>`
      + `<p class="psk-toc-hint"><span class="psk-toc-mouse">${svg('<rect x="3" y="2" width="18" height="30" rx="9"/><path d="M12 8v6"/>', 16, 22, "0 0 24 34")}</span>${hint.hint}</p>`
      + `</nav>`;
  };
  // group() wraps each side's ORIGINAL htmlContent as-is, <section> tags and all — Technical is
  // actually two concatenated <section>s (the dark PATTERN ARCHITECTURE panel + the case study),
  // so stripping "the outer section" isn't well-defined and previously tore the class off the
  // first one. Nested <section> inside this <div> is harmless; every rule here is a descendant
  // selector, so nesting depth doesn't matter.
  const group = (k, label, inner) => `<div class="psk-group" id="psk-g-${k}"><p class="psk-group-title">${label}</p>${inner}</div>`;

  const merge = (sections, labels, hint) => {
    const art = sections.find(s => s.category === "Art");
    const tech = sections.find(s => s.category === "Technical");
    if (!art || !tech) return sections;
    const merged = {
      title: hint.tabTitle,
      category: "Technical Art",
      htmlContent: `<section class="psk-tab">${jump(labels, hint)}${group("art", labels.art, art.htmlContent)}${group("engineering", labels.engineering, tech.htmlContent)}</section>`
    };
    const rest = sections.filter(s => s.category !== "Art" && s.category !== "Technical");
    return [merged, ...rest];
  };

  const en = projectsData["00_NewManzo"];
  en.contributions.sections = merge(en.contributions.sections,
    { art: "Art", engineering: "Engineering" },
    { tabTitle: "Technical Art", eyebrow: "On this page", title: "Contents", sub: "Jump to a section", hint: "Click to jump to a section" });

  const ko = en.localized && en.localized.ko;
  if (ko && ko.contributions) {
    ko.contributions.sections = merge(ko.contributions.sections,
      { art: "아트", engineering: "엔지니어링" },
      { tabTitle: "테크니컬 아트", eyebrow: "이 페이지", title: "콘텐츠", sub: "섹션으로 바로 이동", hint: "클릭하면 해당 섹션으로 이동해요" });
  }
})();

projectsData["04_BirdStrike"].localized.ko.contributions.sections.find(section => section.category === "Technical").htmlContent = `<section><h2>리듬 게임플레이 구현</h2><p class="case-study-lede">상용 엔진 없이 음악 타임라인을 점점 강해지는 화면 압박으로 바꾼 첫 대학 게임 프로젝트입니다.</p>${renderEngineeringCaseStudy({labels:koreanCaseLabels,metrics:[{icon:"♫",value:"4×",label:"최대 비트 세분화"},{icon:"C++",value:"0",label:"상용 엔진 사용"}],architecture:[{title:"음악 타임라인",detail:"비트 타이밍 기준"},{title:"세분화 규칙",detail:"연결 수에 따라 공격 간격 변화"},{title:"스폰 관리자",detail:"무작위 방향과 속도"},{title:"이동",detail:"목적지·속도·atan2 방향"},{title:"압박 루프",detail:"화면이 차기 전에 타깃 제거"}],cases:[{label:"게임 시스템",title:"플레이어의 연결 행동으로 난이도 생성",problem:"고정 스폰 리듬만으로는 숙련된 타깃 선택을 보상하거나 강한 상승 곡선을 만들기 어려웠습니다.",decision:"연결 수가 늘어날수록 비트를 더 잘게 나눠 공격 빈도를 높였습니다.",implementation:"4개, 6개, 8개 타깃 연결 시 한 비트의 공격 횟수가 각각 2회, 3회, 4회로 증가합니다.",verification:"점수 도전이 템포와 화면 관리에 직접 연결되며, 2페이즈에서는 추가 적과 더 빠른 진행으로 압박을 높였습니다."}],note:"프레시맨 시절 두 달 동안 팀 프로젝트로 완성했습니다."})}</section>`;

applyEnglishProjectOverride("05_ThinkThink", {
  pageTitle: "ThinkThink! Rhythm Challenge — Min Seohyeon Portfolio",
  overview: "Match the beat and pick the right word card!",
  features: [
    "Rhythm-based gameplay",
    "Challenge mode",
    "Easy to learn, hard to master"
  ],
  experience: {
    role: "Project Lead",
    period: "2026",
    description: "Project management and UI design"
  },
  gallery: {
    title: "Gallery",
    subtitle: "Gameplay screenshots",
    images: [
      { src: "../img/ThinkThink/2.jpg", alt: "Gameplay screenshot 2", title: "Gameplay screenshot 2" },
      { src: "../img/ThinkThink/3.jpg", alt: "Gameplay screenshot 3", title: "Gameplay screenshot 3" },
      { src: "../img/ThinkThink/5.jpg", alt: "Gameplay screenshot 4", title: "Gameplay screenshot 4" },
      { src: "../img/ThinkThink/7.jpg", alt: "Gameplay screenshot 5", title: "Gameplay screenshot 5" },
      { src: "../img/ThinkThink/6.jpg", alt: "Gameplay screenshot 6", title: "Gameplay screenshot 6" },
      { src: "../img/ThinkThink/4.jpg", alt: "Gameplay screenshot 7", title: "Gameplay screenshot 7" },
      { src: "../img/ThinkThink/8.jpg", alt: "Gameplay screenshot 8", title: "Gameplay screenshot 8" }
    ]
  },
  gameIntro: `<p>Rhythm Challenge is a mobile rhythm-puzzle game built on the short-form "rhythm challenge" format popular on Reels.</p><p>Players match on-screen prompt cards to answer cards in time with the beat. The game runs on the music's rhythm, and as the BPM climbs it demands both quick reactions and memory.</p><p>The screen always keeps 8 prompt cards and 4 answer cards on screen, and players must choose the correct answer within a limited window.</p><p>A single wrong answer ends the run, so players replay to push their max level and beat their best record.</p>`,
  contributions: {
    sections: [
      {
        title: "Project Lead",
        category: "Project Lead",
        htmlContent: `<section class="project-lead"><h2>Project Leadership</h2><div class="lead-section"><h3>Game Design</h3><p>Wrote the game design document around a rhythm-based card-matching structure, designing the core rules, card system, and BPM-driven difficulty curve that shape the full play flow.</p></div><div class="lead-section"><h3>Production Coordination</h3><p>Scoped the features needed during development and communicated task requests and priorities to the developer, keeping implementation aligned with the design intent.</p></div><div class="lead-section"><h3>Release &amp; Deployment</h3><p>Created a Google Developer account and registered the project on <strong>Google Play Console</strong> for mobile release, handling build uploads, store listing, and review submission.</p></div></section>`
      },
      {
        title: "Design",
        category: "Planning",
        htmlContent: `<section class="design"><h2>Game Design</h2><h3>Core Concept</h3><p>Designed a mobile casual game that combines rhythm input with pattern recognition, built on the short-form "rhythm challenge" format popular on Reels.</p><p>Players read the card information that appears on screen in time with the music's beat, then quickly pick the matching answer card. The rules stay simple, while rising rhythm and difficulty are what drive players to replay.</p><h3>Core Gameplay System</h3><h4>Card Matching Structure</h4><p>The screen always keeps <strong>8 prompt cards and 4 answer cards</strong> on screen. Prompt cards are shown as images, and the player picks the answer card that matches them.</p><h4>Rhythm Interaction</h4><ul><li>Card display: appears in time with the rhythm</li><li>Player input: selection timed to the beat</li><li>Sound feedback: a rhythm sound plays on a successful input</li></ul><h3>Difficulty Design</h3><p>Difficulty is designed to let players learn the rules naturally while the challenge ramps up gradually.</p><ul><li><strong>Progressive BPM increase</strong>: BPM rises gradually as levels increase, demanding faster reactions.</li><li><strong>Selective card update</strong>: moving to the next level swaps <strong>only 1 of 3 randomly chosen</strong> answer cards.</li></ul><p>This lets players keep playing by remembering existing card positions, creating a difficulty structure that combines rhythm with memory rather than pure reaction speed.</p><h3>Game Loop</h3><ol><li>Initial rhythm count-in</li><li>Cards appear in time with the rhythm</li><li>Player input</li><li>Correct answer advances to the next round</li><li>Wrong answer ends the run and saves the record</li></ol></section>`
      },
      {
        title: "UI Shader System",
        category: "Technical",
        htmlContent: `<section class="development" id="ui-style-origin"><span class="case-label">ORIGINAL SYSTEM</span><h2>The UI Shader System Started Here</h2><p class="case-study-lede">Hand-drawing every rounded button, gauge, and card in the same art style would have taken far too long. So I built a single Unity <strong>URP UI shader</strong> (<code>UIStyle.shader</code>) driven by one component (<code>UIStyle.cs</code>), so any <code>Image</code> could become a styled shape just by tuning parameters in the Inspector. Finished styles save as a <code>UIStylePreset</code> asset, so they can be pulled back up and reused on other UI later.</p><div class="engineering-summary" aria-label="System scope"><article><span class="engineering-icon" aria-hidden="true">◆</span><strong>4</strong><small>Runtime/editor scripts: shader, component, editor, preset</small></article><article><span class="engineering-icon" aria-hidden="true">▦</span><strong>9</strong><small>Style groups exposed in the Inspector</small></article><article><span class="engineering-icon" aria-hidden="true">✦</span><strong>Live</strong><small>Previews instantly via OnValidate, no Play mode needed</small></article><article><span class="engineering-icon" aria-hidden="true">↗</span><strong>Reused</strong><small>Packaged as a .unitypackage and carried into Street Typer</small></article></div><h3>Inspector fields (as built for ThinkThink)</h3><div class="decision-table-wrap"><table class="decision-table"><thead><tr><th>Group</th><th>Key fields</th><th>What it does</th></tr></thead><tbody><tr><th scope="row">Rounded Corners</th><td>Corner Radius, Capsule/Pill toggles</td><td>SDF-based rounding, resolution-independent</td></tr><tr><th scope="row">Drop Shadow</th><td>Offset, Color, Blur, Size</td><td>Outer shadow without a separate sprite</td></tr><tr><th scope="row">Inner Shadow</th><td>Offset, Color, Blur</td><td>Inset shadow for a pressed/recessed look</td></tr><tr><th scope="row">Gradient</th><td>Base Color; Color Gradient (Start/End/Direction/Blend); Light Gradient (Strength/Direction); Hue Shift (Warm/Cool)</td><td>Layered color + lighting gradient in one pass</td></tr><tr><th scope="row">Edge Highlight</th><td>Strength, Size</td><td>Rim-light style edge glow</td></tr><tr><th scope="row">Material</th><td>Material Type (Plastic / Metal / Glass / Paper)</td><td>Swaps the surface-response preset</td></tr><tr><th scope="row">Noise</th><td>Enable, Strength</td><td>Micro-noise so flat colors don't band</td></tr><tr><th scope="row">Bottom Edge Line</th><td>Thickness, Intensity, Color, Sharpness</td><td>A defined base edge line, independent of shadows</td></tr><tr><th scope="row">Preset</th><td><code>UIStylePreset</code> asset</td><td>Save and re-apply an entire style as one asset</td></tr></tbody></table></div><h3>Shader modules in the package</h3><ul><li><strong>UIStyle.shader</strong>: the unified styling shader above</li><li><strong>UIBlur.shader</strong>: 9-tap optimized blur</li><li><strong>SimpleGradient.shader</strong>: lightweight UI gradient</li><li><strong>UIColorTint.shader</strong>: texture-alpha-based color tint</li><li><strong>WaveNoise.shader</strong>: multi-layer animated noise</li></ul><div class="system-map"><h3>Extended in Street Typer</h3><ol><li><span>01</span><strong>Per-corner radius</strong><small>Each of the 4 corners rounds independently instead of sharing one value</small></li><li><span>02</span><strong>Diamond shape</strong><small>New primitive with adjustable edge curvature and skew</small></li><li><span>03</span><strong>Radial gradient</strong><small>Center-to-edge gradient option added next to the directional one</small></li><li><span>04</span><strong>Outline</strong><small>A dedicated inward-facing outline, separate from the edge line</small></li><li><span>05</span><strong>Gauge fill</strong><small>Fill-amount control added for HP/timer-style bars, corners preserved as it drains</small></li></ol></div><p>The core shader and component carried over unchanged; Street Typer's card-combat UI just needed shapes and edges the original button-and-card set didn't.</p><a class="evidence-link" href="06_StreetTyper.html?contributionTab=Art#ui-style-extended">See it extended in Street Typer's Art tab ↗</a><h3>Editor Tooling</h3><p>Built a <strong>UIStyle.cs</strong> script that lets shader parameters be controlled intuitively from the Inspector, with a system for saving and applying UI style presets.</p><h3>Technical Stack</h3><ul><li>Unity Universal Render Pipeline (URP)</li><li>HLSL shader programming</li><li>Signed Distance Field (SDF) rendering</li><li>C# editor tooling</li></ul><h3>Development Notes</h3><p>Used AI-assisted development tools throughout shader design and system integration to speed up iteration and experimentation, building roughly <strong>1,000+ lines of shader code</strong> and a reusable UI style system.</p></section>`
      }
    ]
  }
});

applyEnglishProjectOverride("Dangling", {
  pageTitle: "Dangling Game Jam — Min Seohyeon Portfolio",
  experience: {
    role: "Organizer · Producer · Visual Designer",
    period: "June 28–29, 2025",
    description: "Originated the event, secured approximately KRW 800,000 and faculty approval through direct outreach, then led promotion, on-site operations, and poster design."
  },
  gallery: {
    title: "Event Gallery",
    subtitle: "From kickoff to final submissions",
    images: [
      { src: "../img/Dangling/1.jpg", alt: "Game jam kickoff", title: "Kickoff" },
      { src: "../img/Dangling/2.jpg", alt: "Team development session", title: "Development session" },
      { src: "../img/Dangling/3.jpg", alt: "Team development session", title: "Development session" },
      { src: "../img/portfolio_thumbnails/Dangling.jpg", alt: "Event poster", title: "Poster design" }
    ]
  },
  contributions: {
    layout: "stacked",
    sections: [
      {
        title: "Proposal, Buy-In & Funding",
        category: "Production",
        subsections: [
          {
            title: "Turning an Idea into an Approved Event",
            items: [
              "Originated the university's first cross-department game jam and presented its purpose and execution plan directly to faculty stakeholders",
              "Defined the resource plan and secured approximately KRW 800,000 in funding together with institutional approval",
              "Converted the secured resources into venue, meals, and operating supplies, then owned recruitment, the 36-hour event, and final submissions"
            ]
          }
        ]
      },
      {
        title: "Event Production",
        category: "Planning",
        htmlContent: `<section class="survey-case"><h2>Event Production & Outcomes</h2><p>Owned budget, approvals, promotion, participant communication, and on-site operations for a 36-hour game jam with 24 participants across six teams. Every team completed and submitted a playable game.</p><div class="survey-scoreboard"><article><strong>4.87<small>/ 5</small></strong><span>participant satisfaction</span></article><article><strong>23</strong><span>survey responses</span></article><article><strong>20</strong><span>five-star ratings</span></article><article><strong>3</strong><span>four-star ratings</span></article></div><div class="survey-distribution"><span>Rating distribution</span><div><i style="--score-width:86.96%">5 stars · 20</i><i style="--score-width:13.04%">4 stars · 3</i></div></div><h3>Participant Feedback · Korean Original + English Translation</h3><div class="survey-quotes"><blockquote><p>“평소에 하던 것과 다른 직무를 경험해볼 수 있어서 좋았습니다.”</p><footer>“I enjoyed getting to experience a role different from the one I usually work in.”</footer></blockquote><blockquote><p>“아무 걱정 없이 개발에만 집중할 수 있는 시간이나 공간이 잘 없는데 제공해줘서 오랜만에 재밌게 잘 즐겼습니다.”</p><footer>“It is rare to have time and space where I can focus only on development without worrying about anything else. I had a genuinely enjoyable experience.”</footer></blockquote><blockquote><p>“이전에 참여했던 게임잼보다 더욱 체계적인 준비와 세밀한 일정 관리가 이루어져 만족스러웠다.”</p><footer>“I was satisfied with the more systematic preparation and detailed schedule management compared with game jams I had joined before.”</footer></blockquote><blockquote><p>“게임잼 참여는 처음이었는데 저의 실력을 체크할 수 있었을 뿐만 아니라 협업의 재미를 알아가는 의미 있는 시간이었습니다.”</p><footer>“It was my first game jam; it helped me assess my skills and discover how rewarding collaboration can be.”</footer></blockquote></div><h3>Improvements Identified</h3><div class="survey-lessons"><span>More production and rest time</span><span>More water and power strips</span><span>More varied work and rest spaces</span></div><p class="survey-note">Based on 23 anonymous post-event responses collected June 29, 2025. Names, timestamps, and raw response rows are intentionally not published.</p></section>`
      },
      {
        title: "Poster & Visual Identity",
        category: "Visual Design",
        subsections: [
          {
            title: "Original Event Artwork",
            items: [
              "Illustrated and designed the main poster to establish the game jam's visual identity",
              "Used a vivid pink accent and distressed print texture to convey the energy and time pressure of the event",
              "Extended the key visual consistently across promotional materials and online channels"
            ],
            images: [
              {
                src: "../img/portfolio_thumbnails/Dangling.jpg",
                alt: "Dangling game jam key art illustrated and designed by Min Seohyeon",
                title: "Dangling Game Jam Poster"
              }
            ]
          }
        ]
      }
    ]
  },
  source: {
    text: "See the completed entries and event record on Instagram.",
    url: "https://www.instagram.com/dangling.kmu/",
    label: "dangling.kmu"
  }
});

applyEnglishProjectOverride("01_hello", {
  pageTitle: "Hello Quad — Min Seohyeon Portfolio",
  overview: "A WebGL shader study that applies mouse-driven transforms and a scale-dependent rainbow gradient to a quad.",
  tasks: [
    "<strong>Vertex shader:</strong> Applied a transform matrix driven by mouse input.",
    "<strong>Fragment shader:</strong> Generated a smooth rainbow gradient by converting HSV to RGB.",
    "<strong>Graphics wrappers:</strong> Modularized textures, vertex buffers, index buffers, and vertex arrays."
  ],
  reflection: "The main challenge was configuring the WebGL debugging and build environment. Resolving CMake and environment issues gave me a clearer understanding of the toolchain surrounding graphics code."
});

applyEnglishProjectOverride("02_meshes", {
  pageTitle: "Procedural Meshes — Min Seohyeon Portfolio",
  overview: "An OpenGL and GLSL study in generating planes, cubes, spheres, cylinders, cones, and tori from parametric equations.",
  tasks: [
    "<strong>Procedural geometry:</strong> Generated mesh vertices and indices using parametric equations and trigonometry.",
    "<strong>Vertex layout:</strong> Defined and mapped position, normal, and UV attributes to OpenGL buffers.",
    "<strong>Topology:</strong> Built cylinder and cone caps with continuous indexed geometry."
  ],
  reflection: "This project clarified how topology, winding order, index buffers, and reusable generation functions shape data flow through the rendering pipeline."
});

// Poseidon Skate: each content block is written once per language, then assembled into tabs by portfolio track.
(function() {
  const entry = projectsData["08_PoseidonSkate"];
  if (!entry) return;

  const validTracks = ['graphics', 'software', 'product'];
  const queryTrack = new URLSearchParams(window.location.search).get('track');
  const savedTrack = typeof localStorage !== 'undefined' ? localStorage.getItem('portfolio-track') : null;
  const track = validTracks.includes(queryTrack) ? queryTrack : (validTracks.includes(savedTrack) ? savedTrack : 'graphics');

  const copy = {
    en: {
      jump: { gameplay: "Gameplay", shaders: "Shaders", blender: "Blender modeling", staging: "Staging" },
      toc: { eyebrow: "On this page", title: "Contents", sub: "Jump to a section", hint: "Click to jump to a section" },
      glance: {
        graphics: {
          role: "Technical artist on a three-week team game: ocean, wave, and tornado shaders, a low-poly Poseidon modeled and rigged in Blender, and the VFX and camera work behind the combat feel.",
          chips: ["HLSL", "Unity URP", "Blender", "C#", "VFX"],
          result: "A playable game with a rideable procedural ocean, a rigged character, and effects tuned for combat feel, made without a dedicated artist."
        },
        software: {
          role: "Shader and wave-geometry programming on a three-week team game: HLSL ocean, wave, and tornado shaders, plus a rideable wave built in C# as mesh geometry with a collider.",
          chips: ["HLSL", "C#", "Unity URP", "Perforce", "Jira"],
          result: "Visuals (GPU shader) and physics (collider mesh) are built separately so each can be tuned in real time."
        },
        product: {
          role: "Kept a three-week team on schedule: Jira for schedule and priorities, tasks assigned by teammates' strengths, and a Perforce workflow the team adapted to.",
          chips: ["Jira", "Perforce", "Prioritization", "Team coordination"],
          result: "The team finished core gameplay first and used the remaining time for art and polish."
        }
      },
      shaders: {
        title: "Ocean, wave &amp; tornado shaders",
        lead: "Three HLSL shaders structured so the same building blocks can be reused across effects. The ocean is fully procedural.",
        takeaways: [
          ["Flow noise", "instead of time-axis noise, so the motion reads as flow."],
          ["Domain warping", "to break up regular moiré patterns."],
          ["Height-field normals", "from finite differences, so lighting follows the surface."]
        ],
        deepLabel: "Deep dive", deepTitle: "Shader notes: what I learned",
        artistLabel: "Artist controls", artistTitle: "Ocean &amp; wave shader Inspector fields",
        artistIntro: "In the standalone study, the ocean shader exposes 39 Inspector fields and the wave shader 53, so the water can be restyled without opening any HLSL.",
        artistHead: ["Group", "Fields", "What an artist changes"],
        artistRows: [
          ["Shape &amp; motion", "Noise Scale, Flow Direction, Flow Speed, Morph Speed, Amplitude, Pull Strength", "How big the waves are, which way they travel, how fast the surface flows and morphs, how tall it rises, and how sharp the ridges get."],
          ["Warp", "Warp Scale, Warp Strength", "How much the pattern bends to hide repetition, from large lazy curves to tight, busy ones."],
          ["Caustic lines", "Color, Scale, Speed, Distortion 1 &amp; 2, Line Width, Intensity, Corner Width, Wall Brightness (the wave shader adds Flow Stretch and Fade Range)", "The size, thickness, wobble, and brightness of the light net, and how strongly the joints stand out."],
          ["Water color", "Color, Scatter Color / Power / Intensity", "The base water tint and how dark it looks when viewed from straight above."],
          ["Whitecaps", "Color, Grazing Power, Distance, Intensity, Threshold, Edge Softness", "How much white shows toward the horizon, and whether its edge is a hard toon cut or a soft blend."],
          ["Wave crest &amp; rim (wave shader)", "Rise T, Top Color / Sharpness, UV Edge Fade, Edge Color / T / Width / Grazing / Intensity, Edge Blue, Highlight Boost / Power", "How far the wave has risen, the white crest the player rides, the rim highlight along the edge, and how cleanly the tapered ends fade out."],
          ["Wake (trail)", "Distort Strength, Push Strength, Line Color / Threshold / Width / Noise Scale / Noise Strength / Intensity", "How the water bends and rises behind the player, and how the foam line looks."]
        ],
        cards: [
          ["Motion", "Flow noise over time-axis noise", "Instead of sampling time as a third noise axis, I rotate each 2D grid gradient continuously. This keeps the surface spatially coherent while making the motion feel like flow rather than a pattern being replaced."],
          ["Aliasing", "Domain warping for aliasing", "When the noise frequency became finer than the mesh, regular moiré patterns appeared. I warped the sampling domain with a lower-frequency noise layer to break that alignment without introducing discontinuities."],
          ["Lighting", "Normals from the height field", "I compared neighboring heights with finite differences and built the surface normal from the resulting gradient. This made lighting follow the procedural surface instead of relying on a faceted screen-space approximation."],
          ["Surface", "Layered surface response", "Voronoi caustics, edge highlights, scatter, whitecaps, and trail interaction are driven by exposed parameters and shared flow timing. The result is a material that can be tuned in-engine instead of a fixed animation."],
          ["Approach", "Why I dropped sine waves", "Stacking sine and Gerstner waves always ended in a visible repeating grid. I diagnosed that as a limit of the approach rather than a tuning problem, and moved the whole surface to a noise-based system (Perlin noise with FBM)."],
          ["Silhouette", "Ridges pulled from the slope", "Where the slope is steep, vertices are pulled sideways along the finite-difference gradient, so peaks read as sharp ridges and cliffs instead of round hills. The threshold is a plain linear saturate on purpose: smoothstep eases in, and I wanted the surface to kink abruptly."],
          ["Depth", "Transparency without transparency", "Alpha stays at 1. Instead I stack opaque colors with lerp (deep water, a lighter surface tint, then the caustic lines) and add a Fresnel term. This avoids sorting problems and keeps the skybox and distant objects from showing through the ocean."],
          ["Pattern", "A caustic network from Voronoi", "Each pixel finds its nearest cell seeds. The gap between the first and second distance draws the cell borders; the gap between the second and third marks the nodes where three cells meet, so lines stay dim and glow at the joints. Two rounds of domain warping make them wobble, and the pattern uses world XZ and the terrain's own flow time so it moves with the surface."],
          ["Camera", "Scatter and whitecaps from the view angle", "Looking straight down blends toward a dark underwater color, while grazing, distant angles blend toward white. A threshold with a tiny edge softness turns the whitecaps into a hard, toon-style cutoff."]
        ],
        codeLabel: "Code", codeTitle: "Ocean.shader, in full",
        codeIntro: "The complete HLSL source, cleaned up for readability — the original study version's line-by-line Korean learning notes are gone, but every line of actual shader logic is unchanged."
      },
      game: {
        title: "Play Poseidon Skate",
        lead: "WASD to move, arrow keys for QTE.",
        hint: "Large download (about 85 MB), so it loads only when you press play.",
        play: "▶ Play the game", fullscreen: "Open fullscreen ↗",
        alt: "Poseidon Skate gameplay", embedTitle: "Poseidon Skate playable web build"
      },
      blender: {
        title: "Low-poly Poseidon, modeled and rigged in Blender",
        figs: [
          ["blender-base-mesh.png", "Low-poly Poseidon base mesh in T-pose in Blender", "Low-poly base mesh (T-pose)"],
          ["blender-armature-wireframe.png", "Armature bones over the Poseidon wireframe mesh in Blender", "Armature over the wireframe"],
          ["blender-posed-rig.png", "Posed Poseidon rig with materials applied in Blender", "Posed rig with materials"]
        ],
        lead: "Modeled in a low-poly style, rigged with a 25-bone skeleton, and exported to Unity as FBX with a Generic rig.",
        deepLabel: "Deep dive", deepTitle: "Export and materials",
        body: "The head, hair, sunglasses, lenses, gun, and trident each use their own material, so every part can be adjusted independently in Unity. The screenshots above show the process: the T-pose base mesh, the armature over the wireframe, and a posed rig with materials applied."
      },
      vfx: {
        title: "VFX",
        lead: "I built the game's visual effects. The capture below loops the effects in action.",
        alt: "Looping capture of the Poseidon Skate visual effects",
        fallback: "The video couldn't load here. Open it in a new tab ↗",
        ringTitle: "The splash ring shader",
        ringLead: "The landing splash is one shader (SplashRing) drawn on a small piece of custom geometry.",
        ringPoints: [
          ["Geometry", "It isn't a flat quad. It's an open cylinder, like an upright paper roll with no lids, built in C# with 32 segments: narrow at the bottom, flaring out at the top. The shader draws the splash silhouette on its wall."],
          ["Animation", "One value, Expand T, runs from 0 to 1 (about 0.6 seconds) through a MaterialPropertyBlock, so the petals grow and then shrink away. The object then destroys itself, so gameplay only has to instantiate the prefab on landing."],
          ["Variation", "Every bump gets its own random grow speed, shrink speed, and height scale, and the bump spacing and height drift around the ring, so the splash never blooms in lockstep like a perfect sine wave."],
          ["Look", "A toon edge with a softness slider, white tips, a warped Voronoi facet pattern inside, and random holes cut into it."]
        ],
        artistLabel: "Artist controls", artistTitle: "Ring shader Inspector fields",
        artistHead: ["Group", "Fields", "What an artist changes"],
        artistRows: [
          ["Silhouette", "Base Height, Period, Amplitude, Phase, Period / Amplitude Variance (Frequency, Strength)", "Where the splash edge sits, how many bumps wrap around the ring, how tall they are, and how uneven they get."],
          ["Per-bump timing", "Min / Max Grow Speed, Min / Max Shrink Speed, Min / Max Height Scale", "How differently each petal grows and shrinks, so the splash blooms unevenly."],
          ["Look", "Color, Edge Softness, Tip Color, Tip Width", "The water color, a hard toon edge or a soft one, and how much of each tip turns white."],
          ["Water facets", "Voronoi Scale, Warp Frequency / Strength, Line Color / Width / Intensity", "The cracked-glass line pattern inside the splash."],
          ["Holes &amp; motion", "Hole Scale / Radius / Chance, Pattern Scroll Speed, Expand T", "How many gaps are cut into the splash, how fast the pattern scrolls, and the 0-to-1 timing that code drives."]
        ]
      },
      staging: {
        title: "Camera effects &amp; combat feel",
        lead: "I built the camera effects and tuned the final combat feel and action presentation.",
        body: "The goal was for the game's actions to read clearly and feel impactful."
      },
      note: {
        label: "Authorship note:",
        all: "The ocean, wave, and tornado shaders, the rideable wave geometry, the Poseidon model and rig, and the effects and camera work described here are my direct contributions to this three-week team project.",
        tech: "The ocean, wave, and tornado shaders, the effects, and the rideable wave geometry described here are my direct contributions to this three-week team project.",
        art: "The Poseidon model and rig and the camera work described here are my direct contributions to this three-week team project."
      },
      h2: { ta: "Technical Art", tech: "Shaders &amp; Wave Geometry", art: "Character, Effects &amp; Combat Feel" }
    },
    ko: {
      jump: { gameplay: "게임플레이", shaders: "셰이더", blender: "Blender 모델링", staging: "연출" },
      toc: { eyebrow: "이 페이지", title: "콘텐츠", sub: "섹션으로 바로 이동", hint: "클릭하면 해당 섹션으로 이동해요" },
      glance: {
        graphics: {
          role: "3주 팀 게임의 테크니컬 아티스트로서 오션·웨이브·토네이도 셰이더, Blender로 모델링·리깅한 로우폴리 포세이돈, 전투 손맛을 만드는 VFX와 카메라 연출을 맡았습니다.",
          chips: ["HLSL", "Unity URP", "Blender", "C#", "VFX"],
          result: "탈 수 있는 절차적 바다와 리깅된 캐릭터, 전투 손맛에 맞춘 이펙트를 갖춘 플레이 가능한 게임입니다. 전담 아티스트 없이 만들었습니다."
        },
        software: {
          role: "3주 팀 게임에서 셰이더와 웨이브 지오메트리 프로그래밍을 맡았습니다. HLSL 오션·웨이브·토네이도 셰이더와, C#에서 메시 지오메트리와 콜라이더로 생성한 탈 수 있는 파도입니다.",
          chips: ["HLSL", "C#", "Unity URP", "Perforce", "Jira"],
          result: "비주얼(GPU 셰이더)과 물리(콜라이더 메시)를 분리해 각각 실시간으로 조절할 수 있게 했습니다."
        },
        product: {
          role: "3주짜리 팀 프로젝트의 일정을 이끌었습니다. Jira로 일정과 우선순위를 관리하고, 팀원의 강점에 맞춰 작업을 배정했으며, 팀이 함께 Perforce 워크플로에 적응하며 진행했습니다.",
          chips: ["Jira", "Perforce", "우선순위 관리", "팀 조율"],
          result: "팀은 핵심 게임플레이를 먼저 완성하고 남은 시간을 아트와 폴리싱에 썼습니다."
        }
      },
      shaders: {
        title: "오션·웨이브·토네이도 셰이더",
        lead: "같은 구성 요소를 여러 이펙트에서 재사용할 수 있도록 구조화한 세 개의 HLSL 셰이더입니다. 오션은 완전한 절차적 표현입니다.",
        takeaways: [
          ["Flow Noise", "시간축 노이즈 대신 사용해 움직임이 흐름처럼 읽히게 했습니다."],
          ["도메인 워핑", "으로 규칙적인 무아레 무늬를 흐트러뜨렸습니다."],
          ["높이장 법선", "을 유한차분으로 계산해 조명이 표면을 따르게 했습니다."]
        ],
        deepLabel: "딥다이브", deepTitle: "셰이더 노트: 배운 점",
        artistLabel: "아트 조절 항목", artistTitle: "오션·웨이브 셰이더 인스펙터 필드",
        artistIntro: "독립 연구 프로젝트 기준으로 오션 셰이더는 인스펙터 필드 39개, 웨이브 셰이더는 53개를 노출해서, HLSL을 열지 않고도 물의 스타일을 바꿀 수 있습니다.",
        artistHead: ["그룹", "필드", "아티스트가 바꾸는 것"],
        artistRows: [
          ["형태와 움직임", "Noise Scale, Flow Direction, Flow Speed, Morph Speed, Amplitude, Pull Strength", "파도의 크기, 흘러가는 방향, 표면이 흐르고 변형되는 속도, 솟는 높이, 능선이 얼마나 날카로운지."],
          ["워핑", "Warp Scale, Warp Strength", "반복을 숨기려고 패턴을 얼마나 휘게 할지. 크고 느긋한 굽이부터 잘고 복잡한 굽이까지."],
          ["커스틱 선", "Color, Scale, Speed, Distortion 1 &amp; 2, Line Width, Intensity, Corner Width, Wall Brightness (웨이브 셰이더에는 Flow Stretch, Fade Range 추가)", "빛 그물망의 크기, 선 두께, 일렁임, 밝기, 그리고 마디가 얼마나 도드라지는지."],
          ["물 색", "Color, Scatter Color / Power / Intensity", "기본 물색, 그리고 정면에서 내려다볼 때 얼마나 어둡게 보일지."],
          ["흰 물결", "Color, Grazing Power, Distance, Intensity, Threshold, Edge Softness", "수평선 쪽에 흰색이 얼마나 나올지, 경계가 툰처럼 딱 끊길지 부드럽게 섞일지."],
          ["파도 꼭대기·테두리 (웨이브 셰이더)", "Rise T, Top Color / Sharpness, UV Edge Fade, Edge Color / T / Width / Grazing / Intensity, Edge Blue, Highlight Boost / Power", "파도가 얼마나 솟았는지, 플레이어가 타는 흰 꼭대기, 가장자리 림 하이라이트, 좁아지는 양 끝이 얼마나 깔끔하게 사라질지."],
          ["항적 (트레일)", "Distort Strength, Push Strength, Line Color / Threshold / Width / Noise Scale / Noise Strength / Intensity", "플레이어 뒤에서 물이 휘고 솟는 정도, 그리고 거품 선의 모양."]
        ],
        cards: [
          ["움직임", "시간축 노이즈에서 Flow Noise로", "시간을 노이즈의 세 번째 축으로 사용하는 대신, 2D 격자점의 그래디언트 방향을 연속적으로 회전시켰습니다. 표면의 공간적 연속성을 유지하면서 패턴이 교체되는 느낌보다 자연스럽게 흐르는 움직임을 만들고자 했습니다."],
          ["에일리어싱", "도메인 워핑으로 규칙적인 무늬 완화", "노이즈 패턴이 메시의 정점 간격보다 촘촘해지자 규칙적인 무아레 줄무늬가 나타났습니다. 낮은 주파수의 노이즈로 샘플링 좌표를 뒤틀어 격자의 규칙적인 정렬을 흐트러뜨렸습니다. 이 접근은 시각적 반복을 완화하기 위한 것이며, 메시 해상도에 따른 샘플링 한계 자체를 없애는 것은 아닙니다."],
          ["라이팅", "높이장의 경사로 법선 계산", "주변 지점의 높이 차이를 유한차분으로 비교하고, 얻어진 경사로 표면 법선을 구성했습니다. 화면 공간 미분에서 삼각형 단위로 각져 보이던 표현을 개선하고, 절차적으로 변하는 수면에 맞춰 조명이 반응하도록 했습니다."],
          ["표면", "조절 가능한 표면 표현 레이어", "Voronoi 기반의 코스틱 무늬, 모서리 강조, 산란을 흉내 낸 색상, 흰 물결과 이동 흔적을 여러 레이어로 구성했습니다. 노출한 파라미터와 공유하는 흐름 시간을 통해 엔진 안에서 움직임과 표면의 인상을 조절할 수 있도록 했습니다."],
          ["접근", "사인파를 버린 이유", "사인파와 Gerstner 파도를 겹칠수록 눈에 띄는 반복 격자 무늬가 계속 남았습니다. 이건 값을 튜닝해서 풀 문제가 아니라 방식 자체의 한계라고 진단하고, 표면 전체를 노이즈 기반(Perlin 노이즈 + FBM) 시스템으로 갈아탔습니다."],
          ["실루엣", "경사로 능선 당기기", "경사가 가파른 곳에서는 유한차분으로 구한 기울기 방향으로 정점을 옆으로 당겨, 봉우리가 둥근 언덕이 아니라 날카로운 능선과 절벽처럼 읽히게 했습니다. 문턱에는 일부러 선형 saturate만 썼습니다. smoothstep은 서서히 시작하는 곡선이라, 표면이 뚝 꺾이는 느낌을 원했던 의도와 맞지 않았습니다."],
          ["깊이", "투명도 없이 투명해 보이기", "알파는 항상 1로 두고, 불투명한 색을 lerp로 여러 겹(깊은 물색, 밝은 표면색, 커스틱 선) 쌓은 뒤 Fresnel을 더했습니다. 정렬 문제를 피하고, 스카이박스나 먼 오브젝트가 바다에 비쳐 보이는 현상도 막았습니다."],
          ["무늬", "Voronoi로 만든 커스틱 그물망", "각 픽셀에서 가장 가까운 씨앗 점들을 찾고, 1등과 2등의 거리 차로 셀 경계선을, 2등과 3등의 거리 차로 세 셀이 만나는 마디를 뽑았습니다. 그래서 선은 흐리게, 마디는 진하게 보입니다. 도메인 워핑을 두 번 걸어 선이 구불거리게 했고, 월드 XZ 좌표와 지형과 같은 흐름 시간을 써서 표면과 함께 움직이게 했습니다."],
          ["카메라", "시선 각도로 만드는 산란과 흰 물결", "정면으로 내려다볼수록 어두운 물속 색으로, 비스듬하고 먼 곳일수록 흰색으로 섞입니다. 문턱값과 아주 작은 경계 부드러움을 써서 흰 물결을 툰처럼 딱 끊기게 만들었습니다."]
        ],
        codeLabel: "코드", codeTitle: "Ocean.shader 전문",
        codeIntro: "HLSL 전체 소스코드입니다. 가독성을 위해 정리했습니다 — 원본에 있던 줄 단위 한국어 주석은 뺐지만, 실제 셰이더 로직은 한 줄도 바뀌지 않았습니다."
      },
      game: {
        title: "Poseidon Skate 플레이",
        lead: "WASD로 이동, 방향키로 QTE.",
        hint: "용량이 커서(약 85MB) 재생 버튼을 눌렀을 때만 불러옵니다.",
        play: "▶ 게임 플레이", fullscreen: "전체 화면으로 열기 ↗",
        alt: "Poseidon Skate 플레이 화면", embedTitle: "Poseidon Skate 웹 빌드"
      },
      blender: {
        title: "Blender로 모델링·리깅한 로우폴리 포세이돈",
        figs: [
          ["blender-base-mesh.png", "Blender에서 T-포즈로 본 로우폴리 포세이돈 기본 메시", "로우폴리 기본 메시 (T-포즈)"],
          ["blender-armature-wireframe.png", "Blender에서 와이어프레임 메시 위에 표시한 포세이돈 아마추어", "와이어프레임 위의 아마추어"],
          ["blender-posed-rig.png", "Blender에서 머티리얼을 적용해 포즈를 잡은 포세이돈 리그", "머티리얼을 적용한 포즈 리그"]
        ],
        lead: "로우폴리 스타일로 모델링하고 25개 본의 스켈레톤으로 리깅한 뒤, FBX로 내보내 Unity에서 Generic 리그로 사용했습니다.",
        deepLabel: "딥다이브", deepTitle: "내보내기와 머티리얼",
        body: "머리, 머리카락, 선글라스, 렌즈, 총, 삼지창이 각각 별도의 머티리얼을 사용해 Unity에서 부위별로 독립적으로 조절할 수 있습니다. 위 스크린샷은 작업 과정으로, T-포즈 기본 메시와 와이어프레임 위의 아마추어, 머티리얼을 적용한 포즈 리그를 보여줍니다."
      },
      vfx: {
        title: "VFX",
        lead: "게임의 시각 효과를 제작했습니다. 아래 영상은 이펙트가 실제로 움직이는 모습을 반복 재생합니다.",
        alt: "Poseidon Skate 시각 효과 반복 재생 영상",
        fallback: "영상을 불러오지 못했어요. 새 탭에서 열기 ↗",
        ringTitle: "스플래시 링 셰이더",
        ringLead: "착지 스플래시는 SplashRing 셰이더 하나를, 직접 만든 작은 지오메트리 위에 그려서 만들었습니다.",
        ringPoints: [
          ["지오메트리", "평평한 쿼드가 아닙니다. 위아래 뚜껑이 없는 열린 원통, 즉 종이를 말아 세운 휴지심 같은 모양을 C#에서 32각형으로 만들었고, 아래는 좁고 위로 갈수록 벌어집니다. 셰이더는 이 벽면에 스플래시 실루엣을 그립니다."],
          ["애니메이션", "Expand T라는 값 하나가 MaterialPropertyBlock을 통해 0에서 1로(약 0.6초) 움직이면서 꽃잎이 자랐다가 줄어듭니다. 끝나면 오브젝트가 스스로 파괴되므로, 게임플레이는 착지 순간에 프리팹을 생성하기만 하면 됩니다."],
          ["변주", "돌기마다 성장 속도, 수축 속도, 높이 배율이 랜덤이고, 돌기 간격과 높이도 둘레를 따라 조금씩 달라져서 완벽한 사인파처럼 일제히 피어나지 않습니다."],
          ["룩", "부드러움을 조절할 수 있는 툰 경계, 흰 끝부분, 안쪽의 휘어진 Voronoi 조각 무늬, 그리고 랜덤하게 뚫린 구멍."]
        ],
        artistLabel: "아트 조절 항목", artistTitle: "링 셰이더 인스펙터 필드",
        artistHead: ["그룹", "필드", "아티스트가 바꾸는 것"],
        artistRows: [
          ["실루엣", "Base Height, Period, Amplitude, Phase, Period / Amplitude Variance (Frequency, Strength)", "스플래시 가장자리의 기준 높이, 둘레에 돌기가 몇 개 도는지, 돌기 높이, 그리고 얼마나 불규칙하게 만들지."],
          ["돌기별 타이밍", "Min / Max Grow Speed, Min / Max Shrink Speed, Min / Max Height Scale", "꽃잎마다 자라고 줄어드는 속도가 얼마나 다른지. 스플래시가 얼마나 불균일하게 피어나는지."],
          ["룩", "Color, Edge Softness, Tip Color, Tip Width", "물 색, 툰처럼 딱 끊길지 부드러울지, 끝부분이 얼마나 하얗게 될지."],
          ["물 조각 무늬", "Voronoi Scale, Warp Frequency / Strength, Line Color / Width / Intensity", "스플래시 안쪽의 유리 금 같은 선 무늬."],
          ["구멍과 움직임", "Hole Scale / Radius / Chance, Pattern Scroll Speed, Expand T", "구멍이 얼마나 뚫릴지, 무늬가 얼마나 빨리 흐를지, 그리고 코드가 움직이는 0~1 타이밍."]
        ]
      },
      staging: {
        title: "카메라 효과, 전투 손맛",
        lead: "카메라 효과를 제작하고 최종 전투 손맛과 액션 연출을 다듬었습니다.",
        body: "게임의 액션이 또렷하게 읽히고 임팩트 있게 느껴지는 것이 목표였습니다."
      },
      note: {
        label: "참여 범위:",
        all: "여기서 설명한 오션·웨이브·토네이도 셰이더, 탈 수 있는 파도 지오메트리, 포세이돈 모델과 리그, 이펙트와 카메라 작업은 이 3주 팀 프로젝트에서 제가 직접 맡은 결과물입니다.",
        tech: "여기서 설명한 오션·웨이브·토네이도 셰이더, 이펙트, 탈 수 있는 파도 지오메트리는 이 3주 팀 프로젝트에서 제가 직접 맡은 결과물입니다.",
        art: "여기서 설명한 포세이돈 모델과 리그, 카메라 작업은 이 3주 팀 프로젝트에서 제가 직접 맡은 결과물입니다."
      },
      h2: { ta: "테크니컬 아트", tech: "셰이더와 웨이브 지오메트리", art: "캐릭터, 이펙트, 전투 손맛" }
    }
  };

  function build(lang, producing) {
    const c = copy[lang];
    const glance = key => {
      const g = c.glance[key];
      return `<div class="psk-glance"><p class="psk-glance-role">${g.role}</p><ul class="psk-chips">${g.chips.map(chip => `<li>${chip}</li>`).join("")}</ul><p class="psk-glance-result">${g.result}</p></div>`;
    };
    // "Contents" navigator: one vertical timeline list for every viewport (active item follows scroll, see enablePskToc).
    const svg = (d, w = 20, h = 20, vb = "0 0 24 24") => `<svg viewBox="${vb}" width="${w}" height="${h}" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
    const tocIcons = {
      gameplay: svg('<path d="M7 7h10a4 4 0 0 1 3.9 4.8l-.8 4a2.4 2.4 0 0 1-4.2 1L14.5 15h-5l-1.4 1.8a2.4 2.4 0 0 1-4.2-1l-.8-4A4 4 0 0 1 7 7z"/><path d="M8 9.5v3M6.5 11h3"/><circle cx="15.5" cy="10" r=".6"/><circle cx="17.5" cy="12" r=".6"/>'),
      shaders: svg('<path d="M2.5 12h4l2.5-7 4 14 3-9 1.5 2h4"/>'),
      blender: svg('<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><path d="M4 7.5l8 4.5 8-4.5M12 12v9"/>'),
      staging: svg('<path d="M3.5 8.5h3l1.6-2.5h7.8l1.6 2.5h3v10.5h-17z"/><circle cx="12" cy="13.5" r="3.4"/>')
    };
    const pad2 = n => String(n).padStart(2, "0");
    const jump = keys => {
      const t = c.toc;
      const items = keys.map((k, i) => `<li><a href="#psk-g-${k}" data-psk-toc="psk-g-${k}"${i === 0 ? ' class="is-active" aria-current="true"' : ""}><span class="psk-toc-num">${pad2(i + 1)}</span><span class="psk-toc-icon">${tocIcons[k] || ""}</span><span class="psk-toc-label">${c.jump[k]}</span><span class="psk-toc-chev">${svg('<path d="M9 6l6 6-6 6"/>', 18, 18)}</span></a></li>`).join("");
      return `<nav class="psk-toc" aria-label="${t.title}">`
        + `<header class="psk-toc-head"><span class="psk-toc-eyebrow">${t.eyebrow}</span><p class="psk-toc-title" role="heading" aria-level="2">${t.title}</p><p class="psk-toc-sub">${t.sub}</p></header>`
        + `<ol class="psk-toc-list">${items}</ol>`
        + `<p class="psk-toc-hint"><span class="psk-toc-mouse">${svg('<rect x="3" y="2" width="18" height="30" rx="9"/><path d="M12 8v6"/>', 16, 22, "0 0 24 34")}</span>${t.hint}</p>`
        + `</nav>`;
    };
    // Full HLSL source for Ocean.shader, cleaned of the original study file's line-by-line
    // Korean learning-diary comments (see PROOF_SUMMARY/'what I learned' content above for that
    // narrative instead) — kept as its own constant since it's large and not localized.
    const OCEAN_SHADER_SOURCE = `Shader "Custom/Ocean"
{
    Properties
    {
        _Color ("Color", Color) = (0.1, 0.4, 0.7, 1)
        _LightDirection ("Light Direction", Vector) = (0.5, 1, 0.3, 0)

        _NoiseScale ("Noise Scale", Range(0.1, 5)) = 1.5
        _FlowDirection ("Flow Direction (XZ)", Vector) = (1, 0, 0, 0)
        _FlowSpeed ("Flow Speed", Range(0, 5)) = 0.1
        _MorphSpeed ("Morph Speed (flow-noise gradient rotation rate)", Range(0, 5)) = 0.15
        _Amplitude ("Amplitude (peak height above/below zero)", Range(0, 4)) = 0.1
        _PullStrength ("Pull Strength (how hard slopes get pulled into ridges)", Range(0, 0.9)) = 0.5

        _WarpScale ("Warp Scale (domain-warp noise scale; smaller = broader bends)", Range(0.05, 2)) = 0.3
        _WarpStrength ("Warp Strength (how hard coordinates get bent, in noise cells)", Range(0, 2)) = 0.5

        _CausticColor ("Caustic Color", Color) = (1, 1, 1, 1)
        _CausticScale ("Caustic Scale (mesh size of the light-net pattern)", Range(0.1, 5)) = 1.0
        _CausticSpeed ("Caustic Speed (multiplier on the terrain's own flow speed)", Range(0, 2)) = 0.3
        _CausticDistortion ("Caustic Distortion (1st-pass domain warp, broad flow)", Range(0, 1)) = 0.4
        _CausticDistortion2 ("Caustic Distortion 2 (2nd-pass warp, fine detail)", Range(0, 1)) = 0.4
        _CausticLineWidth ("Caustic Line Width", Range(0.01, 0.5)) = 0.08
        _CausticIntensity ("Caustic Intensity", Range(0, 3)) = 1.0
        _CausticCornerWidth ("Caustic Corner Width (radius counted as a node)", Range(0.01, 0.5)) = 0.12
        _CausticWallBrightness ("Caustic Wall Brightness (min brightness far from a node)", Range(0, 1)) = 0.25

        // Fed from C# with the rideable wave's position, so the caustic net fades out near it
        // instead of the two patterns visually clashing.
        _WaveWorldPos ("Wave World Pos (XZ, set from HalfpipeWaveGenerator)", Vector) = (0, 0, 0, 0)
        _WaveFadeRadius ("Wave Fade Radius (world units)", Range(1, 100)) = 10.0
        _WaveFadeSharpness ("Wave Fade Sharpness (higher = sharper falloff)", Range(0.5, 8)) = 1.0

        _ScatterColor ("Scatter Color (dark underwater tone seen looking straight down)", Color) = (0.02, 0.1, 0.2, 1)
        _ScatterPower ("Scatter Power (higher = only the most direct angle darkens)", Range(0.5, 8)) = 2.0
        _ScatterIntensity ("Scatter Intensity", Range(0, 1)) = 0.6

        _WhitecapColor ("Whitecap Color", Color) = (1, 1, 1, 1)
        _WhitecapGrazingPower ("Whitecap Grazing Power (higher = only near-grazing angles react)", Range(0.5, 8)) = 3.0
        _WhitecapDistance ("Whitecap Distance (world units for full effect)", Range(1, 100)) = 20.0
        _WhitecapIntensity ("Whitecap Intensity", Range(0, 1)) = 0.8
        _WhitecapThreshold ("Whitecap Threshold (toon-style hard cutoff)", Range(0, 1)) = 0.5
        _WhitecapEdgeSoftness ("Whitecap Edge Softness (smaller = harder toon edge)", Range(0.001, 0.5)) = 0.1

        // Wake left behind a moving rider: rather than painting new color, this bends the
        // existing caustic (Voronoi) UVs along the rider's trail so the net looks dragged/rippled.
        // _OceanTrailTex is updated globally every frame from C# (OceanTrailPainter), so it is
        // declared only in the HLSL variables below, not here as a per-material Property.
        _OceanTrailDistortStrength ("Ocean Trail Distort Strength", Range(0, 10)) = 8.31
        _OceanTrailPushStrength ("Ocean Trail Push Strength", Range(0, 5)) = 1.0
        _OceanTrailLineColor ("Ocean Trail Line Color", Color) = (1, 1, 1, 1)
        _OceanTrailLineThreshold ("Ocean Trail Line Threshold", Range(0.01, 0.99)) = 0.279
        _OceanTrailLineWidth ("Ocean Trail Line Width", Range(0.001, 0.3)) = 0.077
        _OceanTrailLineNoiseScale ("Ocean Trail Line Noise Scale", Range(0.1, 5)) = 1.12
        _OceanTrailLineNoiseStrength ("Ocean Trail Line Noise Strength", Range(0, 1)) = 0.327
        _OceanTrailLineIntensity ("Ocean Trail Line Intensity", Range(0, 3)) = 1.69
    }
    SubShader
    {
        Tags { "RenderType" = "Opaque" "RenderPipeline" = "UniversalPipeline" }
        LOD 100

        Pass
        {
            HLSLPROGRAM
            #pragma vertex vert
            #pragma fragment frag

            // Needed or MainLightRealtimeShadow() compiles to a permanent "no shadow" path.
            #pragma multi_compile _ _MAIN_LIGHT_SHADOWS _MAIN_LIGHT_SHADOWS_CASCADE _MAIN_LIGHT_SHADOWS_SCREEN
            #pragma multi_compile _ _SHADOWS_SOFT

            #include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Core.hlsl"
            #include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Lighting.hlsl"

            struct Attributes
            {
                float4 positionOS : POSITION;
            };

            struct Varyings
            {
                float4 positionHCS : SV_POSITION;
                float3 positionWS : TEXCOORD0;
                float3 normalWS : TEXCOORD1;   // per-vertex normal from the slope, so shading stays smooth
                float4 shadowCoord : TEXCOORD2;
            };

            float4 _Color;
            float4 _LightDirection;

            float _NoiseScale;
            float4 _FlowDirection;
            float _FlowSpeed;
            float _MorphSpeed;
            float _Amplitude;
            float _PullStrength;
            float _WarpScale;
            float _WarpStrength;
            float4 _CausticColor;
            float _CausticScale;
            float _CausticSpeed;
            float _CausticDistortion;
            float _CausticDistortion2;
            float _CausticLineWidth;
            float _CausticIntensity;
            float _CausticCornerWidth;
            float _CausticWallBrightness;
            float4 _WaveWorldPos;
            float _WaveFadeRadius;
            float _WaveFadeSharpness;
            float4 _ScatterColor;
            float _ScatterPower;
            float _ScatterIntensity;
            float4 _WhitecapColor;
            float _WhitecapGrazingPower;
            float _WhitecapDistance;
            float _WhitecapIntensity;
            float _WhitecapThreshold;
            float _WhitecapEdgeSoftness;

            TEXTURE2D(_OceanTrailTex);
            SAMPLER(sampler_OceanTrailTex);
            float4 _OceanTrailCenter;
            float _OceanTrailAreaSize;
            float _OceanTrailDistortStrength;
            float _OceanTrailPushStrength;
            float4 _OceanTrailLineColor;
            float _OceanTrailLineThreshold;
            float _OceanTrailLineWidth;
            float _OceanTrailLineNoiseScale;
            float _OceanTrailLineNoiseStrength;
            float _OceanTrailLineIntensity;

            // Deterministic "position -&gt; pseudo-random 0..1" hash. GPUs have no real RNG, so this
            // stands in for one wherever the shader needs a fixed value per grid point.
            float Hash21(float2 p)
            {
                p = frac(p * float2(123.34, 456.21));
                p += dot(p, p + 45.32);
                return frac(p.x * p.y);
            }

            // Flow Noise (Perlin &amp; Neyret, 2001): instead of adding time as a 3rd noise axis
            // (which read as peaks popping in/out at new random spots), each grid point's
            // gradient is a unit vector whose *angle* rotates continuously over time. The
            // rotation is smooth, so neighboring points never go out of sync the way a
            // sudden value swap would.
            float2 RandomGradient2D(float2 p, float time)
            {
                float baseAngle = Hash21(p) * 2.0 * PI;
                float rotSpeed = Hash21(p + 7.7) * 2.0 - 1.0; // per-point speed/direction, so it doesn't rotate as one rigid sheet
                float angle = baseAngle + time * rotSpeed;
                return float2(cos(angle), sin(angle));
            }

            // Classic Perlin noise: find the 4 grid corners around p, take each corner's
            // gradient dotted with the vector to p, then blend the 4 results with a quintic
            // (6t^5-15t^4+10t^3) curve so both the value and its slope stay continuous.
            float PerlinNoise2D(float2 p, float time)
            {
                float2 cell = floor(p);
                float2 f = frac(p);

                float n00 = dot(RandomGradient2D(cell + float2(0,0), time), f - float2(0,0));
                float n10 = dot(RandomGradient2D(cell + float2(1,0), time), f - float2(1,0));
                float n01 = dot(RandomGradient2D(cell + float2(0,1), time), f - float2(0,1));
                float n11 = dot(RandomGradient2D(cell + float2(1,1), time), f - float2(1,1));

                float2 u = f*f*f*(f*(f*6.0-15.0)+10.0);
                float nx0 = lerp(n00, n10, u.x);
                float nx1 = lerp(n01, n11, u.x);
                float nxy = lerp(nx0, nx1, u.y);

                return nxy * 0.5 + 0.5; // roughly -0.71..0.71 -&gt; 0..1
            }

            float2 Hash22(float2 p)
            {
                return float2(Hash21(p + 17.0), Hash21(p + 43.0));
            }

            // Voronoi/cellular noise: one random seed point per cell; f1/f2/f3 are the
            // distances to the 1st/2nd/3rd closest seeds (checked across the 3x3 neighborhood,
            // since a nearer seed can sit in an adjacent cell). f2-f1 traces cell borders;
            // f3-f2 marks the nodes where three cells meet. Used only for the surface's white
            // net pattern, independent of the terrain height in GetHeight().
            float3 Voronoi2D(float2 p)
            {
                float2 cell = floor(p);
                float2 f = frac(p);

                float f1 = 8.0;
                float f2 = 8.0;
                float f3 = 8.0;

                for (int y = -1; y &lt;= 1; y++)
                {
                    for (int x = -1; x &lt;= 1; x++)
                    {
                        float2 neighbor = float2(x, y);
                        float2 seed = Hash22(cell + neighbor);
                        float dist = length(neighbor + seed - f);

                        if (dist &lt; f1) { f3 = f2; f2 = f1; f1 = dist; }
                        else if (dist &lt; f2) { f3 = f2; f2 = dist; }
                        else if (dist &lt; f3) { f3 = dist; }
                    }
                }
                return float3(f1, f2, f3);
            }

            // Scales posXZ and domain-warps it (bends the sampling coordinate with a second,
            // lower-frequency noise before feeding it to the grid) so the regular noise grid
            // doesn't read as a visible, regular tiling pattern. The terrain height and the
            // Voronoi seed grid both sample through this same warped space, so they stay aligned.
            float2 GetWarpedPos(float2 posXZ, float time)
            {
                float2 scaledPos = posXZ * _NoiseScale;
                float2 warp = float2(
                    PerlinNoise2D(scaledPos * _WarpScale + 17.0, time),
                    PerlinNoise2D(scaledPos * _WarpScale + 91.0, time)
                ) - 0.5;
                return scaledPos + warp * _WarpStrength;
            }

            // Samples the rider's trail mask at a world XZ position. Uses the explicit-LOD
            // variant because vert() has no screen-space derivatives to pick a mip level from.
            float SampleOceanTrailMask(float2 worldXZ)
            {
                float2 uv = (worldXZ - _OceanTrailCenter.xy) / _OceanTrailAreaSize + 0.5;
                if (uv.x &lt; 0.0 || uv.x &gt; 1.0 || uv.y &lt; 0.0 || uv.y &gt; 1.0) return 0.0;
                return SAMPLE_TEXTURE2D_LOD(_OceanTrailTex, sampler_OceanTrailTex, uv, 0).r;
            }

            // Height of the surface at posXZ, in [-_Amplitude, _Amplitude]. Also called at
            // neighboring offsets in vert() to approximate the slope by finite differences.
            float GetHeight(float2 posXZ, float time)
            {
                float2 warpedPos = GetWarpedPos(posXZ, time);
                float noise = PerlinNoise2D(warpedPos, time);
                return (noise * 2.0 - 1.0) * _Amplitude;
            }

            Varyings vert(Attributes IN)
            {
                Varyings OUT;
                float3 positionOS = IN.positionOS.xyz;

                // Grid-point gradients rotate over time instead of a 3rd noise axis (see
                // RandomGradient2D) — smooth and continuous, not a hard swap to a new shape.
                float flowT = _Time.y * _MorphSpeed;

                // Only the *sampling* coordinate moves with the flow, never the vertex itself —
                // that keeps the mesh in place while the pattern on it slides sideways. Sampling
                // in world space (not object space) also keeps the terrain seamless across tile
                // boundaries, since every tile mesh shares the same local coordinate range.
                float3 worldBasePos = TransformObjectToWorld(positionOS);
                float2 flowOffset = normalize(_FlowDirection.xz) * _FlowSpeed * _Time.y;
                float2 samplePos = worldBasePos.xz + flowOffset;
                float height = GetHeight(samplePos, flowT);

                // Steep slopes get pulled into sharp ridges, by slope magnitude rather than
                // height — so a low but steep hillside still ridges while a tall, gentle one
                // doesn't. The slope is a finite-difference approximation: sample height a small
                // eps to each side and divide by the true distance between those two samples (2*eps).
                float eps = 0.05;
                float hR = GetHeight(samplePos + float2(eps, 0), flowT);
                float hL = GetHeight(samplePos - float2(eps, 0), flowT);
                float hU = GetHeight(samplePos + float2(0, eps), flowT);
                float hD = GetHeight(samplePos - float2(0, eps), flowT);
                float2 gradient = float2(hR - hL, hU - hD) / (2.0 * eps);

                // Wake push: independent of the terrain noise, using the trail mask's own
                // gradient (a comet-tail shape, so its gradient naturally points sideways,
                // producing the two raised "wake" edges). A larger eps than the terrain's is
                // needed since the trail texture is coarser per-texel.
                float trailEps = 0.3;
                float tR = SampleOceanTrailMask(worldBasePos.xz + float2(trailEps, 0));
                float tL = SampleOceanTrailMask(worldBasePos.xz - float2(trailEps, 0));
                float tU = SampleOceanTrailMask(worldBasePos.xz + float2(0, trailEps));
                float tD = SampleOceanTrailMask(worldBasePos.xz - float2(0, trailEps));
                float2 trailGradWS = float2(tR - tL, tU - tD) / (2.0 * trailEps);
                float trailPushHeight = length(trailGradWS) * _OceanTrailPushStrength;
                gradient += trailGradWS * _OceanTrailPushStrength; // folds into shading too, so the pushed-up area isn't lit flat

                // Threshold is fixed at 0 (ridging starts the instant there's any slope), and the
                // falloff is linear (saturate), not a smoothed curve — so the fold-over reads as a
                // hard, toon-style crease rather than a soft bump.
                float slopeMag = length(gradient);
                float pullFactor = saturate(slopeMag) * _PullStrength;

                // Surface normal derived analytically from the slope rather than from screen-space
                // derivatives (ddx/ddy): for height field h(x,z), the tangents (1,dh/dx,0) and
                // (0,dh/dz,1) cross to (-dh/dx, 1, -dh/dz) — smooth per-vertex instead of flat
                // per-triangle.
                float3 normalOS = normalize(float3(-gradient.x, 1.0, -gradient.y));

                // pullFactor already includes the trail's contribution to gradient, so wake edges
                // automatically get pushed sideways as well as upward, with no extra code.
                positionOS.xz += gradient * pullFactor;
                positionOS.y += height + trailPushHeight;

                OUT.positionWS = TransformObjectToWorld(positionOS);
                OUT.positionHCS = TransformWorldToHClip(OUT.positionWS);
                OUT.normalWS = TransformObjectToWorldNormal(normalOS);
                OUT.shadowCoord = TransformWorldToShadowCoord(OUT.positionWS);

                return OUT;
            }

            float4 frag(Varyings IN) : SV_Target
            {
                float3 normalWS = normalize(IN.normalWS);

                float3 lightDir = normalize(_LightDirection.xyz);
                float diffuse = saturate(dot(normalWS, lightDir));

                float shadowAttenuation = MainLightRealtimeShadow(IN.shadowCoord);
                diffuse *= shadowAttenuation;

                // ambient + (1-ambient)*diffuse keeps the brightest point exactly at _Color
                // (diffuse=1 -&gt; ambient + (1-ambient) = 1.0), instead of overshooting past it.
                float ambient = 0.15;
                float3 litColor = _Color.rgb * (ambient + diffuse * (1.0 - ambient));

                // Scatter: looking straight down blends toward a dark underwater tone; off-axis
                // keeps the base color — a cheap stand-in for water's own Fresnel behavior.
                float3 viewDir = normalize(GetCameraPositionWS() - IN.positionWS);
                float viewDotNormal = saturate(dot(normalWS, viewDir));
                float scatterFactor = pow(viewDotNormal, _ScatterPower) * _ScatterIntensity;
                litColor = lerp(litColor, _ScatterColor.rgb, saturate(scatterFactor));

                // Whitecaps: the opposite condition from Scatter — grazing angle AND distance
                // both need to be high, mimicking how a distant, shallow-angle horizon blurs into
                // a hazy white band.
                float grazingFactor = pow(1.0 - viewDotNormal, _WhitecapGrazingPower);
                float camDist = length(GetCameraPositionWS() - IN.positionWS);
                float distanceFactor = saturate(camDist / max(_WhitecapDistance, 0.0001));
                float whitecapRaw = grazingFactor * distanceFactor;
                float whitecapMask = smoothstep(_WhitecapThreshold - _WhitecapEdgeSoftness,
                                                 _WhitecapThreshold + _WhitecapEdgeSoftness, whitecapRaw);
                float whitecapFactor = whitecapMask * _WhitecapIntensity;
                litColor = lerp(litColor, _WhitecapColor.rgb, saturate(whitecapFactor));

                // The caustic net shares the terrain's own flow (same flowOffset/flowT), so the
                // pattern rides the same current instead of drifting on its own.
                float flowT = _Time.y * _MorphSpeed;
                float2 flowOffset = normalize(_FlowDirection.xz) * _FlowSpeed * _Time.y;
                float2 worldXZ = (IN.positionWS.xz + flowOffset) * _CausticScale;

                // Trail: sample the rider's trail texture at this pixel's world XZ, then use its
                // screen-space gradient (ddx/ddy) as a bend direction for the caustic UVs below —
                // this warps the net along the trail's *edge* (where the mask changes fastest),
                // not inside the trail itself.
                float2 trailUV = (IN.positionWS.xz - _OceanTrailCenter.xy) / _OceanTrailAreaSize + 0.5;
                float trailMask = 0.0;
                if (trailUV.x &gt;= 0.0 &amp;&amp; trailUV.x &lt;= 1.0 &amp;&amp; trailUV.y &gt;= 0.0 &amp;&amp; trailUV.y &lt;= 1.0)
                {
                    trailMask = SAMPLE_TEXTURE2D(_OceanTrailTex, sampler_OceanTrailTex, trailUV).r;
                }
                float2 trailGrad = float2(ddx(trailMask), ddy(trailMask));

                // Wake outline: traces where trailMask crosses a threshold, with the threshold
                // itself jittered by noise so the line looks hand-drawn rather than a clean curve.
                float lineNoise = PerlinNoise2D(IN.positionWS.xz * _OceanTrailLineNoiseScale, _Time.y) - 0.5;
                float noisyTrailMask = trailMask + lineNoise * _OceanTrailLineNoiseStrength;
                float distFromLine = abs(noisyTrailMask - _OceanTrailLineThreshold);
                float trailLineMask = 1.0 - smoothstep(0.0, _OceanTrailLineWidth, distFromLine);
                litColor += _OceanTrailLineColor.rgb * trailLineMask * _OceanTrailLineIntensity;

                // Two passes of domain warping on the caustic UVs: a low-frequency pass for the
                // broad flow, then a second, higher-frequency pass on top of the already-warped
                // result for fine, organic wobble (a common "stacked domain warp" technique).
                float warpX = PerlinNoise2D(worldXZ * 0.5, flowT * _CausticSpeed) - 0.5;
                float warpY = PerlinNoise2D(worldXZ * 0.5 + 100.0, flowT * _CausticSpeed) - 0.5;
                float2 warpedUV = worldXZ + float2(warpX, warpY) * _CausticDistortion * 4.0;

                float warpX2 = PerlinNoise2D(warpedUV * 2.5 + 300.0, flowT * _CausticSpeed) - 0.5;
                float warpY2 = PerlinNoise2D(warpedUV * 2.5 + 400.0, flowT * _CausticSpeed) - 0.5;
                warpedUV += float2(warpX2, warpY2) * _CausticDistortion2 * 1.5;

                // Third warp pass, trail-only: bends the net further wherever a rider has passed,
                // on top of (not instead of) the two terrain-flow warps above.
                warpedUV += trailGrad * _OceanTrailDistortStrength;

                float3 f = Voronoi2D(warpedUV);
                float edge = f.y - f.x;   // near 0 = right on a cell border
                float lineMask = 1.0 - smoothstep(0.0, _CausticLineWidth, edge);

                float corner = f.z - f.y; // near 0 = a node where three cells meet
                float cornerMask = 1.0 - smoothstep(0.0, _CausticCornerWidth, corner);
                float wallStrength = lerp(_CausticWallBrightness, 1.0, cornerMask); // dimmer on plain walls, brighter at nodes

                // Caustic net fades out near the rideable wave, so the two patterns never overlap
                // and read as visual noise.
                float distToWave = length(IN.positionWS.xz - _WaveWorldPos.xz);
                float waveFadeFactor = pow(saturate(distToWave / max(_WaveFadeRadius, 0.0001)), _WaveFadeSharpness);

                // Added on top of the lit base color (not blended), the usual approach for a
                // foam/sparkle highlight layer.
                litColor += _CausticColor.rgb * lineMask * wallStrength * _CausticIntensity * waveFadeFactor;

                return float4(litColor, _Color.a);
            }

            ENDHLSL
        }
    }
}`;
    const deep = (label, title, body, openByDefault) => `<details class="technical-deep-dive"${openByDefault ? " open" : ""}><summary><span>${label}</span><strong>${title}</strong></summary><div class="technical-deep-dive-body">${body}</div></details>`;
    // Collapsible "what can an artist change" table: one row per Inspector field group.
    const fieldTable = (s, intro, openByDefault) => deep(s.artistLabel, s.artistTitle, `${intro ? `<p>${intro}</p>` : ""}<div class="decision-table-wrap"><table class="decision-table"><thead><tr>${s.artistHead.map(h => `<th>${h}</th>`).join("")}</tr></thead><tbody>${s.artistRows.map(([g, f, w]) => `<tr><th scope="row">${g}</th><td>${f}</td><td>${w}</td></tr>`).join("")}</tbody></table></div>`, openByDefault);
    const blocks = {
      // Ocean/wave/tornado shaders are the flagship work on this project, so unlike every other
      // deep-dive/artist-controls pair on the page, both start expanded (open) instead of
      // collapsed behind a "+" — the one section worth showing in full without a click.
      shaders: `<div class="psk-block" id="psk-shaders"><h3>${c.shaders.title}</h3><p class="psk-lead">${c.shaders.lead}</p><ul class="psk-takeaways">${c.shaders.takeaways.map(([b, rest]) => `<li><strong>${b}</strong> ${rest}</li>`).join("")}</ul>${deep(c.shaders.deepLabel, c.shaders.deepTitle, `<div class="direction-case-grid">${c.shaders.cards.map(([label, title, body]) => `<article><span class="case-label">${label}</span><h3>${title}</h3><p>${body}</p></article>`).join("")}</div>`, true)}${fieldTable(c.shaders, c.shaders.artistIntro, true)}${deep(c.shaders.codeLabel, c.shaders.codeTitle, `<p>${c.shaders.codeIntro}</p><pre><code>${OCEAN_SHADER_SOURCE}</code></pre>`)}</div>`,
      game: `<div class="psk-block" id="psk-game"><h3>${c.game.title}</h3><p class="psk-lead">${c.game.lead}</p><div class="psk-demo" data-lazy-embed data-src="../webgl/PoseidonSkate/index.html" data-title="${c.game.embedTitle}"><img src="../img/PoseidonSkate/game-poster.jpg" alt="${c.game.alt}" loading="lazy"><button type="button" class="psk-demo-play">${c.game.play}</button></div><p class="psk-links"><a href="../webgl/PoseidonSkate/index.html" target="_blank" rel="noopener">${c.game.fullscreen}</a> · <span class="psk-hint">${c.game.hint}</span></p></div>`,
      blender: `<div class="psk-block" id="psk-blender"><h3>${c.blender.title}</h3><div class="psk-figs">${c.blender.figs.map(([file, alt, cap]) => `<figure><img src="../img/PoseidonSkate/${file}" alt="${alt}" loading="lazy"><figcaption>${cap}</figcaption></figure>`).join("")}</div><p class="psk-lead">${c.blender.lead}</p>${deep(c.blender.deepLabel, c.blender.deepTitle, `<p>${c.blender.body}</p>`)}</div>`,
      vfx: `<div class="psk-block" id="psk-vfx"><h3>${c.vfx.title}</h3><p class="psk-lead">${c.vfx.lead}</p><div class="psk-vfx-video"><video src="../img/PoseidonSkate/VfxVid.mp4?v=20260921b" width="732" height="470" aria-label="${c.vfx.alt}" autoplay loop muted playsinline preload="auto"></video><a class="psk-vfx-fallback" href="../img/PoseidonSkate/VfxVid.mp4?v=20260921b" target="_blank" rel="noopener" hidden>${c.vfx.fallback}<small class="psk-vfx-diag"></small></a></div><h4>${c.vfx.ringTitle}</h4><p class="psk-lead">${c.vfx.ringLead}</p><ul class="psk-takeaways">${c.vfx.ringPoints.map(([b, rest]) => `<li><strong>${b}:</strong> ${rest}</li>`).join("")}</ul>${fieldTable(c.vfx)}</div>`,
      staging: `<div class="psk-block" id="psk-staging"><h3>${c.staging.title}</h3><p class="psk-lead">${c.staging.lead}</p><p>${c.staging.body}</p></div>`
    };
    const note = key => `<p class="case-study-note"><strong>${c.note.label}</strong> ${c.note[key]}</p>`;
    // Tab titles already name each section, so the tab content starts straight at the Contents navigator
    // (no repeated <h2> and no summary block above it). glance() is still used by the production tab.
    const wrap = inner => `<section class="psk-tab">${inner}</section>`;

    // One Technical Art view split into four Contents groups: Gameplay / Shaders (VFX lives here too) /
    // Blender modeling / Staging. The product track keeps the playable build in its Producing tab, so its
    // Gameplay group skips the embed (no duplicate #psk-game). The software track keeps its two tabs.
    const group = (k, inner) => `<div class="psk-group" id="psk-g-${k}"><p class="psk-group-title">${c.jump[k]}</p>${inner}</div>`;
    const groups = {
      gameplay: () => group("gameplay", blocks.game),
      shaders: () => group("shaders", blocks.shaders + blocks.vfx),
      blender: () => group("blender", blocks.blender),
      staging: () => group("staging", blocks.staging)
    };
    // Gameplay now holds only the playable build, so the product track (playable build lives in Producing)
    // drops the whole group and its Contents entry instead of showing an empty one.
    const technicalArtAll = (withGame = true) => jump(withGame ? ["gameplay", "shaders", "blender", "staging"] : ["shaders", "blender", "staging"]) + (withGame ? groups.gameplay() : "") + groups.shaders() + groups.blender() + groups.staging() + note("all");

    if (track === "software") {
      return [
        { title: c.h2.tech, category: "Technical", htmlContent: wrap(jump(["gameplay", "shaders"]) + groups.gameplay() + groups.shaders() + note("tech")) },
        { title: c.h2.art, category: "Art", htmlContent: wrap(jump(["blender", "staging"]) + groups.blender() + groups.staging() + note("art")) },
        producing
      ];
    }
    if (track === "product") {
      return [
        { title: producing.title, category: "Producing", htmlContent: producing.htmlContent.replace("</h2>", "</h2>" + glance("product") + blocks.game) },
        { title: c.h2.ta, category: "Technical Art", htmlContent: wrap(technicalArtAll(false)) }
      ];
    }
    return [
      { title: c.h2.ta, category: "Technical Art", htmlContent: wrap(technicalArtAll(true)) },
      producing
    ];
  }

  const findProducing = sections => sections.find(section => section.category === "Producing");
  entry.contributions.sections = build("en", findProducing(entry.contributions.sections));
  const ko = entry.localized && entry.localized.ko;
  if (ko && ko.contributions) {
    ko.contributions.sections = build("ko", findProducing(ko.contributions.sections));
  }
})();
