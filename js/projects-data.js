// 프로젝트 데이터 - 여기서 모든 프로젝트 정보를 관리합니다
const projectsData = {
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
      role: "Project Lead · Primary C# Programmer · Game Artist / Visual Direction",
      period: "2025년 8월 – 최종 빌드",
      description: "주요 C# 기여자로서 게임플레이, 보스, 리듬, UI, 툴과 비주얼 시스템 전반을 구현했습니다. 저장소 기록상 전체 585개 커밋 중 418개를 기여했으며, 프로젝트가 장기화된 뒤에는 범위와 인원을 재편해 2주 마감 스프린트로 플레이 가능한 빌드를 완성했습니다."
    },    

    videos: [
      {
        title: "최종 빌드 · 보스 전투",
        subtitle: "인게임 플레이",
        description: "리듬 타이밍에 맞춰 공격을 피하고 물고기를 사냥하는 보스 전투 장면입니다.",
        src: "../img/NEWMANZO/ingame.mp4",
        poster: null
      },
      {
        title: "최종 빌드 · 심해 탐험",
        subtitle: "인게임 플레이",
        description: "제한된 시야와 탐지 UI를 활용해 심해 환경을 탐색하는 실제 플레이 장면입니다.",
        src: "../img/NEWMANZO/ingmae.mp4",
        poster: null
      },
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
          title: "게임플레이 및 기반 시스템",
          category: "Technical",
          htmlContent: `<section><h2>Unity/C# 시스템 오너십</h2><p><strong>저장소 기록:</strong> 전체 585개 커밋 중 418개를 기여했고, 플러그인을 제외한 주요 C#·셰이더·에디터 코드 367개 파일 중 328개에 작업 기록이 있습니다. 단순 통합이 아니라 게임의 주요 런타임 시스템 대부분을 직접 설계·구현·수정했습니다.</p><h3>게임플레이와 전투</h3><p>함선 이동과 모듈, 사냥 모드, 콤보·차지, 대미지 처리, 보스 상태와 재사용 가능한 패턴 구조를 구현했습니다. 투사체와 텔레그래프, 여러 보스 패턴을 데이터 중심으로 조합할 수 있도록 구성했습니다.</p><h3>FMOD 리듬 동기화</h3><p>FMOD 타임라인을 기준으로 박자 이벤트와 판정 창을 만들고, 플레이 환경별 체감 오차를 조정하는 캘리브레이션과 디버그 UI까지 연결했습니다.</p><h3>보스와 프로시저럴 애니메이션</h3><p>게 보스의 다리 IK와 절차적 보행, 껍질 파괴와 단계 전환, 거대화 연출을 구현해 패턴 로직과 시각적 상태가 함께 움직이도록 구성했습니다.</p><h3>게임 플로우·데이터·UI</h3><p>챕터와 시퀀스, 세이브·인벤토리·상점, 대사와 말풍선, HUD와 모니터형 UI를 연결했습니다. 반복 제작을 줄이기 위해 씬 빌더, 범위 편집기, UI 스타일 프리셋 등 Unity 에디터 도구도 제작했습니다.</p></section>`
        },
        {
          title: "전체 게임 아트 제작 및 비주얼 디렉션",
          category: "Art",
          htmlContent: `<section><h2>게임의 아트 에셋 전체를 제작했습니다</h2><p><strong>New MANZO에 사용된 캐릭터, 보스, 물고기, 환경, 배경, UI와 주요 VFX용 아트 에셋을 모두 직접 그렸습니다.</strong> 콘셉트 단계에서 끝내지 않고 Unity에 임포트하고 화면에 배치해, 게임플레이 중 실제로 읽히는 최종 결과까지 책임졌습니다.</p><h3>하나의 게임처럼 보이게 만들기</h3><p>전체 에셋의 색, 명도, 실루엣과 디테일 밀도를 통일하고, 각 보스와 환경이 고유한 인상을 가지면서도 동일한 수중 세계에 속하도록 비주얼 기준을 정했습니다.</p><h3>Bloom과 화면 가독성</h3><p>발광 효과가 수중 분위기에는 기여하면서도 공격 예고와 플레이어 정보를 덮지 않도록 Bloom의 임계값과 강도, 주변 색의 대비를 함께 다듬었습니다.</p></section>`
        },
        {
          title: "Project Lead",
          category: "Project Lead",
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
    projectDetails: {
      tool: "Notion",
      problems: [
        "두 장르의 균형 잡기: 리듬게임과 매트로베니아 두 장르의 밸런스를 잡는것이 어려웠습니다. 리듬적 제약이 강하면 이동이 답답해질 수 있기 때문에 자유 이동과 리듬 기반 대시를 모두 허용하여 유연한 플레이와 리듬 몰입을 동시에 만족시켰습니다."
      ]
    },
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
          htmlContent: `<section class="development" id="ui-style-origin"><span class="case-label">최초 개발</span><h2>UI 셰이더 시스템은 여기서 시작됐습니다</h2><p class="case-study-lede">둥근 버튼, 게이지, 카드마다 그림을 새로 그리는 대신, 하나의 Unity <strong>URP UI 셰이더</strong>(<code>UIStyle.shader</code>)를 컴포넌트 하나(<code>UIStyle.cs</code>)로 제어하도록 만들어서, 어떤 <code>Image</code>든 Inspector에서 값만 조절하면 원하는 모양으로 스타일링되게 했습니다.</p><div class="engineering-summary" aria-label="시스템 규모"><article><span class="engineering-icon" aria-hidden="true">◆</span><strong>4</strong><small>셰이더·컴포넌트·에디터·프리셋 스크립트</small></article><article><span class="engineering-icon" aria-hidden="true">▦</span><strong>9</strong><small>Inspector에 노출된 스타일 그룹</small></article><article><span class="engineering-icon" aria-hidden="true">✦</span><strong>실시간</strong><small>OnValidate로 플레이 모드 없이 즉시 미리보기</small></article><article><span class="engineering-icon" aria-hidden="true">↗</span><strong>재사용</strong><small>.unitypackage로 패키징해 스트리트 타이퍼로 이식</small></article></div><h3>Inspector 필드 (ThinkThink 기준)</h3><div class="decision-table-wrap"><table class="decision-table"><thead><tr><th>그룹</th><th>주요 필드</th><th>기능</th></tr></thead><tbody><tr><th scope="row">모서리 둥글기</th><td>Corner Radius, Capsule/Pill 토글</td><td>SDF 기반 라운딩, 해상도 독립적</td></tr><tr><th scope="row">드롭 섀도우</th><td>Offset, Color, Blur, Size</td><td>별도 스프라이트 없이 외부 그림자 표현</td></tr><tr><th scope="row">인사이드 섀도우</th><td>Offset, Color, Blur</td><td>눌린/파인 느낌의 내부 그림자</td></tr><tr><th scope="row">그래디언트</th><td>기본 색상; Color Gradient(시작/끝/방향/블렌드); Light Gradient(강도/방향); Hue Shift(웜/쿨)</td><td>색상과 명암 그래디언트를 한 패스에서 겹겹이 표현</td></tr><tr><th scope="row">엣지 하이라이트</th><td>Strength, Size</td><td>림 라이트 느낌의 가장자리 발광</td></tr><tr><th scope="row">Material</th><td>Material Type(Plastic / Metal / Glass / Paper)</td><td>표면 질감 프리셋 전환</td></tr><tr><th scope="row">노이즈</th><td>Enable, Strength</td><td>단색이 밴딩되지 않도록 미세 노이즈 추가</td></tr><tr><th scope="row">Bottom Edge Line</th><td>Thickness, Intensity, Color, Sharpness</td><td>그림자와 별개로 정의하는 아래쪽 엣지 라인</td></tr><tr><th scope="row">Preset</th><td><code>UIStylePreset</code> 에셋</td><td>스타일 전체를 에셋 하나로 저장·재적용</td></tr></tbody></table></div><h3>패키지 안의 셰이더 모듈</h3><ul><li><strong>UIStyle.shader</strong>: 위의 통합 스타일링 셰이더</li><li><strong>UIBlur.shader</strong>: 9-Tap 최적화 블러</li><li><strong>SimpleGradient.shader</strong>: 경량 UI 그라디언트</li><li><strong>UIColorTint.shader</strong>: 텍스처 알파 기반 컬러 틴트</li><li><strong>WaveNoise.shader</strong>: 다중 레이어 애니메이션 노이즈</li></ul><div class="system-map"><h3>스트리트 타이퍼에서 확장된 부분</h3><ol><li><span>01</span><strong>모서리 개별 둥글기</strong><small>하나의 값 대신 네 모서리를 각각 독립적으로 조절</small></li><li><span>02</span><strong>다이아몬드 모양</strong><small>변의 곡률과 기울기(skew)까지 조절 가능한 새 도형</small></li><li><span>03</span><strong>방사형 그래디언트</strong><small>방향성 그래디언트 옆에 중심→가장자리 방식 추가</small></li><li><span>04</span><strong>윤곽선(Outline)</strong><small>엣지 라인과 별도로 안쪽을 따라가는 전용 윤곽선</small></li><li><span>05</span><strong>게이지 Fill</strong><small>HP바·타이머용 Fill Amount 추가, 줄어들어도 모서리 유지</small></li></ol></div><p>핵심 셰이더와 컴포넌트는 그대로 가져갔고, 스트리트 타이퍼의 카드 전투 UI에 필요했던 모양과 테두리 표현만 새로 늘렸습니다.</p><a class="evidence-link" href="06_StreetTyper.html?contributionTab=Art#ui-style-extended">스트리트 타이퍼에서 확장된 모습 보기 ↗</a><h3>Editor Tooling</h3><p><strong>UIStyle.cs</strong> 스크립트를 제작하여 Inspector에서 셰이더 파라미터를 직관적으로 제어하고 UI 스타일 프리셋을 저장 및 적용할 수 있는 시스템을 구현했습니다.</p><h3>Technical Stack</h3><ul><li>Unity Universal Render Pipeline (URP)</li><li>HLSL Shader Programming</li><li>Signed Distance Field (SDF) Rendering</li><li>C# Editor Tooling</li></ul><h3>Development Notes</h3><p>셰이더 구조 설계와 시스템 통합 과정에서 AI 기반 개발 도구를 적극 활용하여 반복 작업과 실험 속도를 높였습니다. 이를 통해 약 <strong>1,000+ lines 규모의 셰이더 코드</strong>와 재사용 가능한 UI 스타일 시스템을 구축했습니다.</p></section>`
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
          htmlContent: `<section><div class="impact-metrics" aria-label="Project outcomes"><div class="impact-metric"><span class="impact-metric-icon" aria-hidden="true">₩</span><strong>₩10M</strong><span>Total revenue</span></div><div class="impact-metric"><span class="impact-metric-icon" aria-hidden="true">●</span><strong>235</strong><span>Account followers</span></div><div class="impact-metric"><span class="impact-metric-icon" aria-hidden="true">↻</span><strong>1,000+</strong><span>Cumulative reposts</span></div></div><p class="metric-source-note">Account figures as of August 24, 2026.</p><h2>From artwork to a manufacturable product</h2><p>Adapted each character to a consistent round-plush format and prepared production artwork that preserved readable silhouettes, expressions, costume details, and colors at a small physical scale.</p><h3>Preorders through Witchform</h3><p>Opened a prepaid purchase form through Witchform and finalized the production quantity from confirmed orders. Producing against validated demand minimized excess inventory, upfront investment, and the financial risk of unsold products.</p><h3>Factory sourcing and negotiation</h3><p>Contacted a manufacturer through Taobao and negotiated the production schedule and unit price directly. I commissioned samples, compared the physical results with the intended designs, and communicated revisions before approving mass production, achieving the expected quality at a reasonable cost.</p><h3>End-to-end fulfillment workflow</h3><div class="fulfillment-flow" role="list" aria-label="Fulfillment process"><div class="fulfillment-step" role="listitem"><span class="fulfillment-icon" aria-hidden="true">✎</span><strong>01</strong><span>Production<br>artwork</span></div><div class="fulfillment-step" role="listitem"><span class="fulfillment-icon" aria-hidden="true">⚙</span><strong>02</strong><span>Factory<br>order</span></div><div class="fulfillment-step" role="listitem"><span class="fulfillment-icon" aria-hidden="true">▣</span><strong>03</strong><span>Freight<br>forwarder</span></div><div class="fulfillment-step" role="listitem"><span class="fulfillment-icon" aria-hidden="true">✓</span><strong>04</strong><span>Inspection<br>& delivery</span></div><div class="fulfillment-step" role="listitem"><span class="fulfillment-icon" aria-hidden="true">⌂</span><strong>05</strong><span>Buyer</span></div></div><p>Designed a direct flow from production artwork to factory order, international freight forwarder, defect inspection and domestic delivery service, and finally the buyer. Products could move from the factory to customers without passing through my hands, while I remained responsible for status tracking and exception handling.</p><h3>Buyer Q&A through Peing</h3><p>Used Peing as the project's centralized Q&A channel, responding to order, production, and delivery questions and keeping buyer communication organized throughout fulfillment.</p><h3>What I learned</h3><p>I learned how to turn a creative concept into a repeatable operation: validate demand before production, define requirements clearly, negotiate cost and schedule, verify quality through samples, connect multiple external partners, and maintain a clear customer communication channel.</p><p class="case-study-note"><strong>Authorship note:</strong> The featured characters are fan merchandise based on existing intellectual property. My work shown here is the plush-format visual adaptation, production preparation, vendor coordination, logistics, and customer support.</p></section>`
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
              htmlContent: `<section><div class="impact-metrics" aria-label="프로젝트 성과"><div class="impact-metric"><span class="impact-metric-icon" aria-hidden="true">₩</span><strong>약 1,000만 원</strong><span>총매출</span></div><div class="impact-metric"><span class="impact-metric-icon" aria-hidden="true">●</span><strong>235명</strong><span>계정 팔로워</span></div><div class="impact-metric"><span class="impact-metric-icon" aria-hidden="true">↻</span><strong>1,000회+</strong><span>누적 리포스트</span></div></div><p class="metric-source-note">계정 수치는 2026년 8월 24일 기준입니다.</p><h2>도안에서 생산 가능한 제품까지</h2><p>캐릭터를 일관된 둥근 인형 형태로 각색하고, 작은 실물에서도 형태와 표정, 의상 특징과 색상이 명확하게 보이도록 생산용 도안을 준비했습니다.</p><h3>Witchform을 활용한 선주문 판매</h3><p>Witchform에서 선입금 구매폼을 열고 결제가 완료된 주문량을 기준으로 최종 생산 수량을 확정했습니다. 실제 수요를 먼저 검증한 뒤 주문제작하는 방식으로 불필요한 선투자와 미판매 재고를 줄이고, 금전적 손실 위험을 최소화했습니다.</p><h3>공장 발굴과 가격·일정 협상</h3><p>타오바오에서 중국 제조업체를 직접 찾아 생산 일정과 단가를 협상했습니다. 실물 샘플을 발주해 도안과 비교하고, 형태와 자수, 색상 등의 수정 사항을 전달한 뒤 양산을 승인함으로써 예상한 품질을 합리적인 가격에 확보했습니다.</p><h3>직접 취급 없이 작동하는 배송 프로세스</h3><div class="fulfillment-flow" role="list" aria-label="배송 프로세스"><div class="fulfillment-step" role="listitem"><span class="fulfillment-icon" aria-hidden="true">✎</span><strong>01</strong><span>생산용<br>도안 제작</span></div><div class="fulfillment-step" role="listitem"><span class="fulfillment-icon" aria-hidden="true">⚙</span><strong>02</strong><span>공장<br>발주</span></div><div class="fulfillment-step" role="listitem"><span class="fulfillment-icon" aria-hidden="true">▣</span><strong>03</strong><span>해외<br>배대지</span></div><div class="fulfillment-step" role="listitem"><span class="fulfillment-icon" aria-hidden="true">✓</span><strong>04</strong><span>불량 검수<br>배송대행</span></div><div class="fulfillment-step" role="listitem"><span class="fulfillment-icon" aria-hidden="true">⌂</span><strong>05</strong><span>구매자<br>수령</span></div></div><p>도안 제작 → 공장 발주 → 배대지 → 불량 검수 및 배송대행사 → 구매자로 이어지는 전체 흐름을 설계했습니다. 완제품이 제 손을 거치지 않아도 검수와 최종 배송까지 진행되도록 각 업체를 연결했고, 저는 진행 상황 추적과 예외 상황 대응을 맡았습니다.</p><h3>Peing을 활용한 구매자 Q&A</h3><p>Peing을 프로젝트의 통합 문의 창구로 활용해 주문, 제작 진행 상황과 배송 관련 질문에 답변했습니다. 구매자 커뮤니케이션을 한곳에 모아 전체 이행 과정에서 문의와 안내가 누락되지 않도록 관리했습니다.</p><h3>배운 점</h3><p>창작물을 실제 제품으로 만드는 일은 디자인만의 문제가 아니었습니다. 수요를 먼저 검증하고, 요구사항을 명확히 정의하며, 가격과 일정을 협상하고, 샘플로 품질을 확인하고, 여러 외부 업체와 고객 소통 채널을 하나의 운영 구조로 연결하는 일까지 모두 제품 경험의 일부라는 점을 배웠습니다.</p><p class="case-study-note"><strong>기여 범위:</strong> 등장 캐릭터의 원저작권은 각 권리자에게 있습니다. 여기서 소개하는 제 작업은 인형 형태에 맞춘 시각적 각색, 생산 자료 준비, 공장 조율, 물류와 구매자 지원입니다.</p></section>`
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
    heroType: "image",
    heroMedia: "../img/StreetTyper/title2.png",
    heroLink: "https://handalhandal.itch.io/streettyper",
    heroImageContainsTitle: true,
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
      title: "Visual Direction",
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
    trailers: [],
    videos: [],
    gallery: {
      title: "Visual Development",
      subtitle: "UI presentation integrated into the playable build",
      images: [
        { src: "../img/TooHot/CardUI.png", alt: "Too Hot card UI in the Unity game", title: "Card UI presentation" }
      ]
    },
    contributions: {
      sections: [
        {
          title: "Art & VFX",
          category: "Art",
          htmlContent: `<section><h2>Implemented by Me</h2><p>Created and integrated game art, composed the combat presentation, and added a custom shadow shader, pattern-specific VFX, UI styling, animation, and impact feedback. I tuned color, scale, timing, and hierarchy so players could read danger quickly while attacks still felt forceful.</p><div class="engineering-summary" aria-label="Art coverage"><article><span class="engineering-icon" aria-hidden="true">🌑</span><strong>Shader</strong><small>Custom shadow treatment</small></article><article><span class="engineering-icon" aria-hidden="true">✨</span><strong>VFX</strong><small>Telegraphs · projectiles · beams</small></article><article><span class="engineering-icon" aria-hidden="true">🧩</span><strong>UI</strong><small>Gradients · rounding · URP blur</small></article><article><span class="engineering-icon" aria-hidden="true">🎬</span><strong>Animation</strong><small>Boss + portrait feedback</small></article></div><figure style="margin:1rem 0"><img src="../img/TooHot/CardUI.png" alt="Too Hot card UI styled with the custom UI shader" style="max-width:100%;border-radius:.8rem" /></figure><figure style="margin:1rem 0"><video src="../img/TooHot/effect.mp4" controls muted loop playsinline preload="metadata" style="max-width:100%;border-radius:.8rem"></video><figcaption style="margin-top:.5rem;font-size:.72rem;opacity:.75">A handful of the VFX I built, composited together on one screen — not the full set, just a sample.</figcaption></figure><p style="font-size:.78rem;opacity:.8">The map artwork at the top of this page is also mine, hand-drawn for the project.</p><h3>Custom shadow shader</h3><p>I built and integrated the shadow treatment as part of the real-time visual pipeline, then tuned it against the characters, arena, and effects. It gives the 2D artwork a consistent sense of contact and depth inside Unity instead of relying on individually painted shadow assets.</p><h3>Visual systems in the build</h3><p>The shadow shader works alongside telegraphs, hit zones, projectile and beam effects, player feedback, portraits, boss animation, and shader-driven UI presentation. My focus was connecting those elements into a coherent player experience rather than treating them as isolated assets.</p><h3>Authorship note</h3><p>This was collaborative game-jam work. The shadow shader, art, composition, VFX, UI, animation, and integration described here are my direct contributions; gameplay systems written by teammates are credited as team output.</p></section>`
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
        gallery: {
          title: "비주얼 제작 과정",
          subtitle: "실제 플레이 빌드에 적용한 UI 화면",
          images: [
            { src: "../img/TooHot/CardUI.png", alt: "Too Hot 게임에 적용된 카드 UI", title: "카드 UI 화면" }
          ]
        },
        contributions: {
          sections: [
            {
              title: "아트 · VFX",
              category: "Art",
              htmlContent: `<section><h2>제가 직접 구현한 작업</h2><p>게임 아트를 제작·적용하고 전투 화면을 구성했으며, 커스텀 그림자 셰이더와 패턴별 VFX, UI 스타일, 애니메이션, 타격 피드백을 추가했습니다. 플레이어가 위험을 빠르게 읽으면서도 공격은 강하게 느끼도록 색과 크기, 타이밍, 화면의 위계를 반복해서 조절했습니다.</p><div class="engineering-summary" aria-label="아트 제작 범위"><article><span class="engineering-icon" aria-hidden="true">🌑</span><strong>셰이더</strong><small>커스텀 그림자 표현</small></article><article><span class="engineering-icon" aria-hidden="true">✨</span><strong>VFX</strong><small>전조 · 투사체 · 빔</small></article><article><span class="engineering-icon" aria-hidden="true">🧩</span><strong>UI</strong><small>그라디언트 · 라운딩 · URP 블러</small></article><article><span class="engineering-icon" aria-hidden="true">🎬</span><strong>애니메이션</strong><small>보스 · 포트레이트 피드백</small></article></div><figure style="margin:1rem 0"><img src="../img/TooHot/CardUI.png" alt="커스텀 UI 셰이더를 적용한 Too Hot 카드 UI" style="max-width:100%;border-radius:.8rem" /></figure><figure style="margin:1rem 0"><video src="../img/TooHot/effect.mp4" controls muted loop playsinline preload="metadata" style="max-width:100%;border-radius:.8rem"></video><figcaption style="margin-top:.5rem;font-size:.72rem;opacity:.75">제가 만든 이펙트 중 일부를 한 화면에 모아본 영상입니다 — 전부는 아니고 몇 개만 골랐습니다.</figcaption></figure><p style="font-size:.78rem;opacity:.8">페이지 맨 위의 맵 아트워크도 제가 직접 그렸습니다.</p><h3>커스텀 그림자 셰이더</h3><p>캐릭터와 전투 공간이 따로 떠 보이지 않도록 실시간 그림자 표현을 제작해 Unity에 적용했습니다. 에셋마다 그림자를 별도로 그려 넣는 대신, 캐릭터와 배경, 이펙트를 함께 보며 그림자 표현을 조절해 2D 화면에 일관된 접지감과 깊이를 만들었습니다.</p><h3>플레이 화면에 연결된 요소</h3><p>그림자 셰이더를 공격 전조와 피격 범위, 투사체·빔 이펙트, 플레이어 피드백, 포트레이트, 보스 애니메이션, 셰이더 기반 UI와 하나의 경험으로 연결했습니다. 개별 에셋보다 실제 플레이에서 함께 작동하는 화면을 만드는 데 집중했습니다.</p><h3>기여 범위</h3><p>이 프로젝트는 팀으로 만든 게임잼 작품입니다. 여기서 소개하는 그림자 셰이더와 아트, 화면 구성, VFX, UI, 애니메이션, 통합은 제가 직접 맡았으며, 팀원이 작성한 게임플레이 시스템은 팀 결과물로 구분합니다.</p></section>`
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

function renderEngineeringCaseStudy({ metrics = [], architecture = [], cases = [], decisions = [], code = null, note = "", labels = {} }) {
  const copy = { systemMap: "System map", problem: "Problem", decision: "Decision", implementation: "Implementation", verification: "Verification", keyDecisions: "Key decisions I made", decisionLog: "Decision log", decisionTitle: "Why the systems were structured this way", system: "System", choice: "Choice", why: "Why", tradeoff: "Tradeoff", codeEvidence: "Code evidence", viewSource: "View source file ↗", ...labels };
  const metricsHTML = metrics.map(metric => `<article><span class="engineering-icon" aria-hidden="true">${metric.icon}</span><strong>${metric.value}</strong><small>${metric.label}</small></article>`).join("");
  const architectureHTML = architecture.map((step, index) => `<li><span>${String(index + 1).padStart(2, "0")}</span><strong>${step.title}</strong><small>${step.detail}</small></li>`).join("");
  const casesHTML = cases.map(item => `<article><span class="case-label">${item.label}</span><h3>${item.title}</h3><dl><div><dt>${copy.problem}</dt><dd>${item.problem}</dd></div><div><dt>${copy.decision}</dt><dd>${item.decision}</dd></div><div><dt>${copy.implementation}</dt><dd>${item.implementation}</dd></div><div><dt>${copy.verification}</dt><dd>${item.verification}</dd></div></dl></article>`).join("");
  const decisionsHTML = decisions.map(item => `<tr><th scope="row">${item.system}</th><td>${item.choice}</td><td>${item.reason}</td><td>${item.tradeoff}</td></tr>`).join("");
  const decisionSpotlightHTML = decisions.length ? `<section class="decision-spotlight"><h3>${copy.keyDecisions}</h3><div>${decisions.slice(0, 4).map((item, index) => `<article><span>${String(index + 1).padStart(2, "0")}</span><strong>${item.choice}</strong><p>${item.reason}</p><small>${copy.tradeoff}: ${item.tradeoff}</small></article>`).join("")}</div></section>` : "";
  const codeHTML = code ? `<details class="technical-deep-dive"><summary><span>${copy.codeEvidence}</span><strong>${code.title}</strong></summary><div class="technical-deep-dive-body"><p>${code.description}</p><pre><code>${code.snippet}</code></pre><a class="evidence-link" href="${code.url}" target="_blank" rel="noopener noreferrer">${copy.viewSource}</a></div></details>` : "";
  return `<div class="engineering-summary" aria-label="Project evidence summary">${metricsHTML}</div>${decisionSpotlightHTML}<div class="system-map"><h3>${copy.systemMap}</h3><ol>${architectureHTML}</ol></div><div class="engineering-case-grid">${casesHTML}</div>${decisions.length ? `<details class="technical-deep-dive"><summary><span>${copy.decisionLog}</span><strong>${copy.decisionTitle}</strong></summary><div class="technical-deep-dive-body"><div class="decision-table-wrap"><table class="decision-table"><thead><tr><th>${copy.system}</th><th>${copy.choice}</th><th>${copy.why}</th><th>${copy.tradeoff}</th></tr></thead><tbody>${decisionsHTML}</tbody></table></div></div></details>` : ""}${codeHTML}${note ? `<p class="engineering-note">${note}</p>` : ""}`;
}

function renderNewManzoArtShowcase(lang = "en") {
  const ko = lang === "ko";
  return `<section class="newmanzo-art-case"><div class="art-case-intro"><div><span class="case-label">${ko ? "비주얼 디자인 · 아트" : "Visual Design · Art"}</span><h2>${ko ? "New MANZO의 모든 비주얼을 제작했습니다" : "I created every visual in New MANZO"}</h2><p>${ko ? "캐릭터와 환경부터 UI, VFX까지 직접 제작하고 Unity에서 최종 화면으로 완성했습니다." : "I created everything from characters and environments to UI and VFX, then brought it together in the final Unity build."}</p></div><img src="../img/NEWMANZO/art/manzo-mark.png" alt="MANZO game mark" /></div><div class="art-coverage" aria-label="${ko ? "저장소 아트 카테고리별 PNG 수" : "PNG counts by repository art category"}"><article><strong>21</strong><span>${ko ? "보스" : "Boss"}</span></article><article><strong>17</strong><span>NPC</span></article><article><strong>11</strong><span>${ko ? "물고기" : "Fish"}</span></article><article><strong>17</strong><span>UI</span></article><article><strong>22</strong><span>${ko ? "환경" : "Environment"}</span></article><article><strong>5</strong><span>VFX</span></article></div><p class="art-count-note">${ko ? "Assets/1_Art 아래 PNG 파일 기준이며 애니메이션 프레임, PSD 및 기타 소스 파일은 제외한 보수적인 수치입니다." : "Conservative count of PNG files under Assets/1_Art; animation frames, PSDs, and other source formats are not included."}</p><div class="asset-showcase-grid"><figure class="asset-feature asset-tani"><div><img src="../img/NEWMANZO/art/tani-portrait.png" alt="Tani character portrait production asset" /></div><figcaption><span>${ko ? "캐릭터" : "Character"}</span><strong>Tani</strong><small>${ko ? "포트레이트와 표정 변형" : "Portrait and expression variants"}</small></figcaption></figure><figure class="asset-feature asset-crab"><div><img src="../img/NEWMANZO/art/crab-boss.png" alt="Crab boss production sprite" /></div><figcaption><span>${ko ? "보스" : "Boss"}</span><strong>${ko ? "게 보스" : "Crab Boss"}</strong><small>${ko ? "절차적 다리 구조와 함께 사용" : "Built for the procedural leg system"}</small></figcaption></figure><figure class="asset-small asset-marlin"><div><img src="../img/NEWMANZO/art/blue-marlin.png" alt="Blue marlin boss sprite" /></div><figcaption><span>${ko ? "보스" : "Boss"}</span><strong>Blue Marlin</strong></figcaption></figure><figure class="asset-small asset-fish"><div><img src="../img/NEWMANZO/art/fish-03.png" alt="Schooling fish sprite" /></div><figcaption><span>${ko ? "생태계" : "Ecosystem"}</span><strong>${ko ? "군집 물고기" : "Schooling Fish"}</strong></figcaption></figure><figure class="asset-small asset-ui"><div><img src="../img/NEWMANZO/art/dialog-ui.png" alt="Dialogue interface production asset" /></div><figcaption><span>UI</span><strong>${ko ? "대화 프레임" : "Dialogue Frame"}</strong></figcaption></figure><figure class="asset-small asset-vfx"><div><img src="../img/NEWMANZO/art/attack-vfx.png" alt="Attack VFX sprite sheet" /></div><figcaption><span>VFX</span><strong>${ko ? "공격 스프라이트" : "Attack Sprite"}</strong></figcaption></figure></div><div class="visual-direction-notes"><article><span>01</span><div><h3>${ko ? "하나의 수중 세계" : "One underwater world"}</h3><p>${ko ? "색, 명도, 실루엣과 디테일 밀도를 통일하면서 보스와 구역별 개성을 분리했습니다." : "Unified color, value, silhouette, and detail density while keeping each boss and area distinct."}</p></div></article><article><span>02</span><div><h3>${ko ? "게임플레이 가독성" : "Gameplay readability"}</h3><p>${ko ? "작은 물고기와 공격 전조가 Bloom과 어두운 심해 배경에서도 읽히도록 대비와 발광 임계값을 함께 조절했습니다." : "Tuned contrast and bloom thresholds so small fish and attack telegraphs remain readable against the dark ocean."}</p></div></article><article><span>03</span><div><h3>${ko ? "에셋에서 최종 화면까지" : "Asset to final frame"}</h3><p>${ko ? "그림 제작에 그치지 않고 스프라이트 분할, 임포트, 애니메이션, 셰이더와 UI 통합까지 책임졌습니다." : "Owned sprite preparation, import, animation, shader treatment, and UI integration—not only illustration."}</p></div></article></div></section>`;
}

function renderManzoRendererFeature(lang = "en") {
  const ko = lang === "ko";
  return `<section class="renderer-feature" id="custom-renderer"><span class="renderer-eyebrow">C++ · OpenGL · GLSL</span><h2>CUSTOM<br>RENDERER<span>.</span></h2><p class="renderer-lede">${ko ? "게임의 드로우 순서와 화면 효과를 직접 제어하기 위해 레이어 기반 드로우 큐와 멀티패스 후처리 파이프라인을 설계·구현했습니다." : "I designed and implemented a layer-based draw queue and multi-pass post-processing pipeline to control draw order and screen effects directly."}</p><div class="renderer-flow" aria-label="${ko ? "커스텀 렌더러 처리 순서" : "Custom renderer pipeline"}"><article><span>01</span><strong>${ko ? "드로우 큐" : "Draw queues"}</strong><small>${ko ? "배경 · 월드 · UI · Late" : "Background · World · UI · Late"}</small></article><i>→</i><article><span>02</span><strong>${ko ? "씬 FBO" : "Scene FBO"}</strong><small>${ko ? "한 프레임을 텍스처로 렌더" : "Render the frame to texture"}</small></article><i>→</i><article class="renderer-ping"><span>03</span><strong>Ping-Pong FBO</strong><small>${ko ? "두 버퍼를 번갈아 읽고 쓰기" : "Alternate read and write targets"}</small></article><i>→</i><article><span>04</span><strong>${ko ? "최종 합성" : "Final composite"}</strong><small>${ko ? "기본 프레임버퍼로 출력" : "Present to the default framebuffer"}</small></article></div><div class="renderer-explanation"><article><h3>${ko ? "왜 핑퐁 구조인가" : "Why ping-pong framebuffers"}</h3><p>${ko ? "하나의 텍스처를 동시에 읽고 쓰면 이전 패스의 결과를 안전하게 다음 패스로 전달할 수 없습니다. 두 개의 FBO를 만들고, 현재 패스는 한쪽 color attachment를 입력으로 읽으면서 반대쪽에 출력한 뒤 매 패스마다 역할을 교환했습니다." : "A texture cannot safely act as both the source and destination of the same pass. I created two FBOs so each pass reads the previous color attachment, writes to the opposite target, then swaps their roles."}</p></article><article><h3>${ko ? "패스를 데이터 흐름으로 이해하기" : "Thinking in render-pass data flow"}</h3><p>${ko ? "수중 왜곡 → Bloom → God Ray처럼 각 셰이더는 이전 패스의 완성된 화면을 입력으로 받습니다. 효과를 오브젝트마다 붙이는 대신 전체 화면 처리 단계로 분리해 순서, 입력과 출력을 명확하게 관리했습니다." : "Each shader receives the completed output of the previous pass—underwater distortion → bloom → god rays. Treating effects as full-screen stages made ordering, inputs, and outputs explicit."}</p></article></div><pre class="renderer-code"><code>postProcessFramebuffer[horizontal].Bind();\nglBindTexture(GL_TEXTURE_2D,\n  postProcessFramebuffer[!horizontal].GetColorAttachment());\nRenderQuad();\nhorizontal = !horizontal;</code></pre><a class="renderer-source" href="https://github.com/Seohyeon-Min/manzo/blob/main/Manzo/Manzo/Engine/Render.cpp" target="_blank" rel="noopener noreferrer">Render.cpp ↗</a><a class="engine-foundation-link" href="03_DoubleHit.html?track=software#custom-engine-foundation"><span>${ko ? "이 렌더러의 기틀" : "Foundation of this renderer"}</span><strong>${ko ? "Double Hit에서 제작한 커스텀 엔진 →" : "The custom engine built for Double Hit →"}</strong></a></section>`;
}

function renderDoubleHitEngineFeature(lang = "en") {
  const ko = lang === "ko";
  return `<section class="engine-feature" id="custom-engine-foundation"><span class="renderer-eyebrow">C++ · raylib</span><h2>CUSTOM<br>ENGINE<span>.</span></h2><p class="renderer-lede">${ko ? "게임 하나에 종속된 기능을 나열하는 대신, 이후 프로젝트에서도 확장할 수 있는 오브젝트·컴포넌트·서비스 기반을 직접 만들었습니다." : "Rather than building isolated game-specific features, I created an object, component, and service foundation that could evolve into later projects."}</p><div class="engine-foundation-grid"><article><span>01</span><strong>GameObject</strong><p>${ko ? "식별자, Transform과 객체 수명을 담당하는 공통 단위" : "A common unit for identity, transforms, and object lifetime"}</p></article><article><span>02</span><strong>GameComponent</strong><p>${ko ? "행동을 상속 계층이 아닌 조합으로 추가" : "Behavior added through composition instead of a deep hierarchy"}</p></article><article><span>03</span><strong>Engine Services</strong><p>${ko ? "렌더링·충돌 등 공유 시스템의 접근과 수명을 통제" : "Controlled access and lifetime for rendering, collision, and shared systems"}</p></article><article><span>04</span><strong>Sprite + Collision</strong><p>${ko ? "텍스처·스프라이트 관리와 상호작용의 실행 기반" : "Runtime foundation for textures, sprites, and interaction"}</p></article></div><p class="engine-evolution">${ko ? "이 구조는 MANZO에서 레이어 렌더 큐, 프레임버퍼 후처리, CCD, 리듬과 시나리오 시스템으로 확장됐습니다." : "This architecture later expanded in MANZO into layer-based rendering, framebuffer post-processing, CCD, rhythm, and scenario systems."}</p></section>`;
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
    role: "Primary C# Programmer · Game Artist / Visual Director · Production Lead",
    period: "August 2025 – Final Build",
    description: "Served as the primary C# contributor across gameplay, bosses, rhythm, UI, tools, and visual systems. Repository history records 418 of 585 commits under my account; after the project lost momentum, I also reset scope and led a two-week closing sprint to a playable build."
  },
  videos: [
    {
      title: "Final Build · Boss Encounter",
      subtitle: "In-game footage",
      description: "A playable boss sequence combining rhythm-timed evasion, fish hunting, and attack telegraphs.",
      src: "../img/NEWMANZO/ingame.mp4",
      poster: null
    },
    {
      title: "Final Build · Deep-Sea Exploration",
      subtitle: "In-game footage",
      description: "Playable exploration footage using limited visibility and detection UI to navigate the underwater environment.",
      src: "../img/NEWMANZO/ingmae.mp4",
      poster: null
    },
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
        title: "Unity/C# Systems Ownership",
        category: "Technical",
        htmlContent: `<section><h2>Primary Unity/C# Contributor</h2><p class="case-study-lede">I owned the path from audio timing and gameplay architecture to boss behavior, tools, UI, and final integration. The evidence below separates decisions from implementation details so the scope stays scannable.</p>${renderEngineeringCaseStudy({metrics:[{icon:"↗",value:"418 / 585",label:"repository commits"},{icon:"{ }",value:"328 / 367",label:"first-party code files touched"},{icon:"◉",value:"Unity · C#",label:"runtime, tools & FMOD"},{icon:"✦",value:"100%",label:"in-game art authored"}],architecture:[{title:"FMOD timeline",detail:"Beat callbacks and song position"},{title:"Main-thread rhythm core",detail:"Safe snapshots, timing windows, calibration"},{title:"Gameplay systems",detail:"Ship, hunting, fish, damage, combo"},{title:"Data-driven encounters",detail:"Boss states, patterns, telegraphs, phases"},{title:"Player-facing output",detail:"Animation, VFX, UI, save flow, tools"}],cases:[{label:"Concurrency",title:"Audio-thread beats without unsafe Unity calls",problem:"FMOD callbacks can arrive off Unity's main thread, where scene and gameplay API calls are unsafe.",decision:"Capture callback data only, then consume the newest immutable snapshot during Update.",implementation:"Published beat, bar, and timeline data with an increasing sequence; Volatile.Read gates delivery to BeatSystem on the main thread.",verification:"Runtime offset controls and beat-debug UI expose missed, duplicated, or perceptually late events."},{label:"Gameplay AI",title:"Readable schooling instead of rigid paths",problem:"Fish needed to feel alive, remain huntable, and avoid obstacles without expensive authored routes.",decision:"Compose local steering behaviors and keep species/group parameters in reusable data.",implementation:"Built leader/follower roles, group spawning, zone constraints, player response, separation, cohesion, and avoidance around FishData.",verification:"A dedicated prototype scene validates schooling, avoidance, and player response before hunting-mode integration."},{label:"Procedural Motion",title:"Crab legs that follow combat movement",problem:"A large multi-legged boss looked detached when feet simply inherited the moving body transform.",decision:"Detach foot targets and move alternating leg groups only after planted distance crosses a threshold.",implementation:"Combined ground raycasts, velocity lead, step arcs, reach clamps, body alignment, and tunable step values.",verification:"Feet snap to valid ground at startup; inspector controls expose groups and thresholds for animation tuning."},{label:"Workflow",title:"Tools for repeatable content setup",problem:"Boss scenes, current zones, ranges, and UI styles required repeated manual setup that could drift or break.",decision:"Move common setup and validation into Editor utilities and reusable presets.",implementation:"Created scene builders, range visualizers, UI-style controls, and ocean-current setup tools beside runtime systems.",verification:"Design changes can be rebuilt from known settings instead of undocumented scene edits."}],decisions:[{system:"Rhythm",choice:"FMOD timeline source",reason:"Aligns gameplay to authored markers.",tradeoff:"Needs thread-safe handoff and calibration."},{system:"Boss attacks",choice:"Pattern ScriptableObjects",reason:"Reusable, tunable telegraphs and attacks.",tradeoff:"Data contracts require validation."},{system:"Fish",choice:"Local steering + shared data",reason:"Emergent schools without authored paths.",tradeoff:"Boundary and obstacle tuning."},{system:"Content",choice:"Editor tools and presets",reason:"Less repetition and configuration drift.",tradeoff:"Tools must evolve with runtime data."}],code:{title:"FMOD callback → Unity main thread",description:"The callback publishes a lightweight snapshot; Update consumes only a new sequence before touching gameplay systems.",snippet:`// Audio thread: publish data only\n_latestBeat = new BeatSnapshot(beat, bar, timelineMs);\nInterlocked.Increment(ref _latestBeatSeq);\n\n// Unity main thread\nint seq = Volatile.Read(ref _latestBeatSeq);\nif (seq == _handledBeatSeq) return;\n_handledBeatSeq = seq;\nBeatSystem.Instance?.OnFmodBeat(_latestBeat);`,url:"https://github.com/Seohyeon-Min/NewManzo/blob/main/Assets/4_Scripts/System/BeatSystem/FmodBeatDriver.cs"},note:"Repository counts exclude third-party plugins and are scope evidence, not a substitute for explaining the work."})}</section>`
      },
      {
        title: "Complete Game Art & Visual Direction",
        category: "Art",
        htmlContent: renderNewManzoArtShowcase("en")
      },
      {
        title: "Production",
        category: "Project Lead",
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
    description: "Implemented rendering and rhythm systems, integrated visual effects, resolved engine-level stability and performance issues, and coordinated the project toward a playable build."
  },
  contributions: {
    sections: [
      {
        title: "Rendering & Engine Systems",
        category: "Technical",
        htmlContent: `<section><h2>Rendering & Engine Systems</h2><p class="case-study-lede">The component foundation built for Double Hit evolved into this fuller C++/OpenGL engine. I extended it across timing, collision, rendering, effects, narrative flow, and debugging.</p>${renderEngineeringCaseStudy({metrics:[{icon:"C++",value:"Custom",label:"engine architecture"},{icon:"▧",value:"Multi-pass",label:"OpenGL renderer"},{icon:"→|",value:"CCD",label:"time-of-impact collision"},{icon:"♫",value:"BPM",label:"rhythm-driven systems"}],architecture:[{title:"Audio & input",detail:"Song time, calibration, player intent"},{title:"Engine services",detail:"Beat, scenario, object, state managers"},{title:"Simulation",detail:"Components, CCD, particles, boss logic"},{title:"Layer queues",detail:"Background, world, UI, late draws"},{title:"Framebuffer chain",detail:"Bloom, distortion, rays, ripples"}],cases:[{label:"Collision",title:"Preventing fast-movement tunneling",problem:"Beat-driven dashes could cross thin geometry between discrete frames.",decision:"Test the swept next-frame state and resolve the earliest contact time instead of only the final position.",implementation:"Added next-frame collider tests and binary-searched normalized frame time until the time-of-impact interval reached a small threshold.",verification:"Movement stops at calculated contact; current-frame and next-frame early-outs keep the test bounded."},{label:"Rendering",title:"Effects without mixing scene concerns",problem:"World, UI, lighting, and screen effects required different ordering and render targets.",decision:"Queue draw calls by layer and make post-processing an explicit framebuffer pipeline.",implementation:"Separated background, world, UI, and late rendering; chained bloom, distortion, god rays, ripples, and transitions.",verification:"Effects can be enabled and tuned independently while preserving deterministic draw order."},{label:"Architecture",title:"Stable narrative events across state changes",problem:"Dialogue and scenario objects owned by a game mode became invalid during state changes.",decision:"Promote scenario and dialogue lifetime to engine-level services.",implementation:"Refactored ownership and event flow so transitions no longer destroy data still required by narrative systems.",verification:"Dialogue and scripted events continue reliably across scene and state transitions."},{label:"Performance",title:"Boss slowdown traced to repeated collision work",problem:"The boss encounter slowed severely as attacks and objects accumulated.",decision:"Audit repeated collision paths before reducing gameplay or visual scope.",implementation:"Located redundant brute-force checks and removed duplicate work from the encounter path.",verification:"The fight stabilized; because profiler figures were not retained, no unsupported percentage is claimed."}],decisions:[{system:"Movement collision",choice:"Binary-search TOI",reason:"Compact solution for dash tunneling.",tradeoff:"Iterative, not a general analytic solver."},{system:"Renderer",choice:"Layer queues + FBO passes",reason:"Explicit ordering and effects.",tradeoff:"More render-target state management."},{system:"Narrative",choice:"Engine-level lifetime",reason:"Survives game-mode transitions.",tradeoff:"Requires disciplined service ownership."},{system:"Particles",choice:"Shared lifetime + motion variants",reason:"One pipeline for attacks and ambience.",tradeoff:"Variants need clear defaults."}],code:{title:"Continuous collision with time of impact",description:"After current/next-frame early-outs, the solver narrows the first colliding moment inside the frame.",snippet:`float begin = 0.0f, end = 1.0f;\nwhile (end - begin > 0.001f) {\n  const float mid = (begin + end) * 0.5f;\n  Rect probe = start_rect;\n  probe.position += velocity * dt * mid;\n  if (probe.IsColliding(other_rect)) end = mid;\n  else begin = mid;\n}\ntoi = end;`,url:"https://github.com/Seohyeon-Min/manzo/blob/main/Manzo/Manzo/Engine/Collision.cpp"},note:"Verified implementation details are shown separately from performance figures that were not retained."})}</section>`
      },
      {
        title: "Art & Visual Direction",
        category: "Art",
        items: [
          "Created character portraits, fish and boss pixel art, environment art, and UI assets",
          "Designed and integrated shaders and post-processing for the underwater atmosphere"
        ]
      },
      {
        title: "Production Leadership",
        category: "Project Lead",
        items: [
          "Defined the rhythm-driven deep-sea direction and aligned design, art, and programming",
          "Reduced scope around the core loop and coordinated feature integration and Git merges",
          "Took ownership of debugging, effects, and system integration to reach a playable build"
        ]
      }
    ]
  },
  projectDetails: {
    tool: "C++ · OpenGL · GLSL · Custom Engine",
    problems: [
      "Balanced free movement with beat-driven dashing so rhythm created mastery without making exploration feel restrictive."
    ]
  },
  source: {
    text: "Review the source and implementation on GitHub.",
    url: "https://github.com/Seohyeon-Min/manzo",
    label: "GitHub"
  }
});

applyEnglishProjectOverride("03_DoubleHit", {
  subtitle: "Custom Engine · Two-player cooperative action",
  pageTitle: "Double Hit — Min Seohyeon Portfolio",
  overview: "A C++ custom-engine project that established my GameObject, GameComponent, shared-service, sprite, and collision architecture before it evolved into MANZO.",
  features: ["Custom GameObject and GameComponent architecture", "Shared engine services", "Sprite and texture management", "Collision system", "Two-player cooperative gameplay"],
  experience: {
    role: "Engine Programmer · Art / Audio · Production Lead",
    period: "March – July 2024",
    description: "Implemented core engine systems and gameplay while also producing concept art, assets, audio, and the team schedule."
  },
  contributions: {
    sections: [
      {
        title: "Custom Engine Foundations",
        category: "Technical",
        htmlContent: `<section><h2>Custom Engine Foundations</h2><p class="case-study-lede">This project established the reusable component and service model that I later expanded into MANZO.</p>${renderEngineeringCaseStudy({metrics:[{icon:"C++",value:"4",label:"core engine areas"},{icon:"◇",value:"2P",label:"co-op gameplay"}],architecture:[{title:"Engine services",detail:"Shared access and lifetime"},{title:"Game objects",detail:"Identity and transforms"},{title:"Components",detail:"Composable behavior"},{title:"Sprite & collision",detail:"Rendering and interaction"}],cases:[{label:"Architecture",title:"Composition over one-off object code",problem:"Player, skills, enemies, and boss behavior would become tightly coupled if every object owned bespoke logic.",decision:"Separate object identity from reusable behavior through GameObject and GameComponent.",implementation:"Built the component structure alongside shared services, SpriteManager/texture handling, and collision.",verification:"The same foundation supported the co-op game and became the starting architecture for MANZO."}],decisions:[],note:"The later MANZO page shows how this foundation grew into rendering, CCD, rhythm, and narrative systems."})}</section>`
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
        title: "Game Design & Art",
        category: "Art",
        items: [
          "Designed the random-spawn rhythm loop, screen-pressure loss condition, two-stage progression, and risk-reward chaining",
          "Created concept art, character designs, logo, and audio assets"
        ]
      },
      {
        title: "Production",
        category: "Project Lead",
        items: [
          "Scoped replayability around systemic spawning instead of authored note charts",
          "Aligned the team around a shared visual and gameplay target using concept art"
        ]
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
projectsData["03_DoubleHit"].localized.ko.overview = "MANZO로 확장된 GameObject, GameComponent, 공유 서비스, 스프라이트와 충돌 구조의 기틀을 직접 만든 C++ 커스텀 엔진 프로젝트입니다.";
projectsData["03_DoubleHit"].localized.ko.features = ["GameObject·GameComponent 아키텍처", "공유 엔진 서비스", "스프라이트·텍스처 관리", "충돌 시스템", "2인 협동 게임플레이"];

projectsData["00_NewManzo"].localized.ko.contributions.sections[0].htmlContent = `<section><h2>Unity/C# 주요 시스템 오너십</h2><p class="case-study-lede">오디오 타이밍과 게임플레이 구조부터 보스 동작, 제작 도구, UI, 최종 통합까지 직접 담당했습니다. 작업 범위를 빠르게 읽을 수 있도록 판단과 구현 증거를 분리했습니다.</p>${renderEngineeringCaseStudy({labels:koreanCaseLabels,metrics:[{icon:"↗",value:"418 / 585",label:"저장소 커밋"},{icon:"{ }",value:"328 / 367",label:"주요 코드 파일 작업"},{icon:"◉",value:"Unity · C#",label:"런타임·툴·FMOD"},{icon:"✦",value:"100%",label:"인게임 아트 직접 제작"}],architecture:[{title:"FMOD 타임라인",detail:"비트 콜백과 곡 재생 위치"},{title:"메인 스레드 리듬 코어",detail:"안전한 스냅샷·판정 창·싱크 보정"},{title:"게임플레이 시스템",detail:"함선·사냥·물고기·대미지·콤보"},{title:"데이터 중심 전투",detail:"보스 상태·패턴·전조·페이즈"},{title:"플레이어 출력",detail:"애니메이션·VFX·UI·세이브·툴"}],cases:[{label:"동시성",title:"Unity API를 안전하게 호출하는 비트 전달",problem:"FMOD 타임라인 콜백은 Unity 메인 스레드 밖에서 들어올 수 있어 씬과 게임플레이 API를 직접 호출하면 안전하지 않습니다.",decision:"콜백에서는 데이터만 기록하고 Update에서 가장 최신의 불변 스냅샷을 소비하도록 했습니다.",implementation:"비트·마디·타임라인 값과 증가하는 시퀀스를 발행하고, Volatile.Read로 새 이벤트를 확인한 뒤 메인 스레드의 BeatSystem에 전달했습니다.",verification:"런타임 오프셋 조절과 비트 디버그 UI로 누락·중복·체감 지연을 확인할 수 있게 했습니다."},{label:"게임플레이 AI",title:"고정 경로 대신 읽기 쉬운 군집 행동",problem:"물고기가 살아 움직이면서도 사냥 가능해야 하고, 수작업 경로 없이 장애물을 피해야 했습니다.",decision:"지역 조향 행동을 조합하고 종과 무리별 설정을 재사용 가능한 데이터로 분리했습니다.",implementation:"FishData를 중심으로 리더·팔로워, 무리 스폰, 구역 제한, 플레이어 반응, 분리·응집·회피를 구현했습니다.",verification:"전용 프로토타입 씬에서 군집, 장애물 회피, 플레이어 반응을 먼저 확인한 뒤 사냥 모드에 통합했습니다."},{label:"절차적 모션",title:"전투 이동을 따라가는 게 보스 다리",problem:"발 타깃이 몸체 Transform을 그대로 따라가면 거대한 다관절 보스가 바닥에서 떠 보였습니다.",decision:"발 타깃을 몸체에서 분리하고, 고정된 발과 몸의 거리가 임계값을 넘을 때 교차 다리 그룹만 이동시켰습니다.",implementation:"지면 레이캐스트, 속도 예측, 스텝 곡선, 도달 거리 제한, 몸체 정렬과 조절 가능한 스텝 값을 결합했습니다.",verification:"시작 시 발이 유효한 지면에 스냅되며, 그룹과 임계값을 Inspector에서 조절할 수 있습니다."},{label:"워크플로",title:"반복 가능한 콘텐츠 제작 도구",problem:"보스 씬, 해류 구역, 범위와 UI 스타일을 매번 수동 설정하면 누락과 설정 차이가 생겼습니다.",decision:"공통 설정과 검증을 에디터 유틸리티와 프리셋으로 옮겼습니다.",implementation:"씬 빌더, 범위 시각화, UI 스타일 제어와 해류 설정 도구를 런타임 시스템과 함께 제작했습니다.",verification:"기록되지 않은 씬 수정에 의존하지 않고 동일한 설정으로 콘텐츠를 다시 구성할 수 있습니다."}],decisions:[{system:"리듬",choice:"FMOD 타임라인 기준",reason:"저작된 음악 마커와 게임플레이를 정렬합니다.",tradeoff:"스레드 안전 전달과 싱크 보정이 필요합니다."},{system:"보스 공격",choice:"패턴 ScriptableObject",reason:"공격과 전조를 재사용하고 조절하기 쉽습니다.",tradeoff:"데이터 유효성 검사가 필요합니다."},{system:"물고기",choice:"지역 조향 + 공유 데이터",reason:"수작업 경로 없이 자연스러운 무리를 만듭니다.",tradeoff:"경계와 장애물 근처 튜닝이 필요합니다."},{system:"콘텐츠",choice:"에디터 툴과 프리셋",reason:"반복 작업과 설정 편차를 줄입니다.",tradeoff:"런타임 데이터 변경에 맞춰 툴도 관리해야 합니다."}],code:{title:"FMOD 콜백 → Unity 메인 스레드",description:"콜백은 가벼운 스냅샷만 발행하고, Update가 새로운 시퀀스만 소비한 뒤 게임플레이 시스템을 호출합니다.",snippet:`// 오디오 스레드: 데이터만 발행\n_latestBeat = new BeatSnapshot(beat, bar, timelineMs);\nInterlocked.Increment(ref _latestBeatSeq);\n\n// Unity 메인 스레드\nint seq = Volatile.Read(ref _latestBeatSeq);\nif (seq == _handledBeatSeq) return;\n_handledBeatSeq = seq;\nBeatSystem.Instance?.OnFmodBeat(_latestBeat);`,url:"https://github.com/Seohyeon-Min/NewManzo/blob/main/Assets/4_Scripts/System/BeatSystem/FmodBeatDriver.cs"},note:"저장소 수치는 외부 플러그인을 제외했으며, 작업 설명을 대신하는 숫자가 아니라 범위를 확인하는 증거로 사용했습니다."})}</section>`;
projectsData["00_NewManzo"].localized.ko.contributions.sections[1].htmlContent = renderNewManzoArtShowcase("ko");

const koreanManzoTechnical = projectsData["01_Manzo"].localized.ko.contributions.sections.find(section => section.category === "Technical");
koreanManzoTechnical.htmlContent = `<section><h2>렌더링 및 엔진 시스템</h2><p class="case-study-lede">Double Hit에서 만든 컴포넌트 기반을 더 완전한 C++/OpenGL 엔진으로 확장해 타이밍, 충돌, 렌더링, 이펙트, 내러티브 흐름과 디버깅을 구현했습니다.</p>${renderEngineeringCaseStudy({labels:koreanCaseLabels,metrics:[{icon:"C++",value:"Custom",label:"엔진 아키텍처"},{icon:"▧",value:"Multi-pass",label:"OpenGL 렌더러"},{icon:"→|",value:"CCD",label:"충돌 시점 계산"},{icon:"♫",value:"BPM",label:"리듬 기반 시스템"}],architecture:[{title:"오디오와 입력",detail:"곡 시간·보정·플레이어 의도"},{title:"엔진 서비스",detail:"비트·시나리오·오브젝트·상태 관리자"},{title:"시뮬레이션",detail:"컴포넌트·CCD·파티클·보스 로직"},{title:"레이어 큐",detail:"배경·월드·UI·후순위 드로우"},{title:"프레임버퍼 체인",detail:"Bloom·왜곡·God ray·Ripple"}],cases:[{label:"충돌",title:"빠른 이동의 터널링 방지",problem:"박자에 맞춘 대시가 프레임 사이에서 얇은 지형을 통과할 수 있었습니다.",decision:"마지막 위치만 검사하지 않고 다음 프레임의 이동 구간에서 최초 충돌 시점을 계산했습니다.",implementation:"현재·다음 프레임의 조기 검사를 추가하고 정규화된 프레임 시간을 이진 탐색해 TOI 구간을 좁혔습니다.",verification:"이동체가 계산된 접촉 지점에서 멈추며, 조기 종료로 불필요한 반복을 줄였습니다."},{label:"렌더링",title:"씬 로직과 분리된 화면 효과",problem:"월드, UI, 조명과 화면 효과에 서로 다른 순서와 렌더 타깃이 필요했습니다.",decision:"드로우 콜을 레이어로 큐잉하고 후처리를 명시적인 프레임버퍼 파이프라인으로 구성했습니다.",implementation:"배경·월드·UI·Late Rendering을 분리하고 Bloom, 수중 왜곡, God ray, Ripple과 화면 전환 패스를 연결했습니다.",verification:"드로우 순서를 유지하면서 각 효과를 독립적으로 켜고 조절할 수 있습니다."},{label:"아키텍처",title:"상태 전환 후에도 안전한 내러티브 이벤트",problem:"게임 모드가 소유한 대화·시나리오 객체가 상태 전환 중 파괴되어 댕글링 포인터가 발생했습니다.",decision:"시나리오와 대화의 수명을 엔진 서비스 수준으로 올렸습니다.",implementation:"상태가 바뀌어도 내러티브 데이터가 먼저 파괴되지 않도록 소유권과 이벤트 흐름을 리팩터링했습니다.",verification:"씬과 상태가 전환된 뒤에도 대화와 스크립트 이벤트가 안정적으로 이어집니다."},{label:"성능",title:"중복 충돌 검사로 인한 보스전 저하 해결",problem:"공격과 오브젝트가 늘어나면서 보스전이 심하게 느려졌습니다.",decision:"비주얼이나 게임플레이를 줄이기 전에 반복되는 충돌 경로부터 추적했습니다.",implementation:"중복된 브루트포스 충돌 검사를 찾아 전투 경로에서 반복 작업을 제거했습니다.",verification:"수정 후 전투가 안정화됐지만 당시 프로파일 수치는 보관하지 않아 검증되지 않은 개선율은 표시하지 않았습니다."}],decisions:[{system:"이동 충돌",choice:"이진 탐색 TOI",reason:"대시 터널링을 해결하는 작고 이해하기 쉬운 방식입니다.",tradeoff:"범용 해석적 솔버보다 반복 비용이 있습니다."},{system:"렌더러",choice:"레이어 큐 + FBO 패스",reason:"순서와 효과 단계를 명확히 분리합니다.",tradeoff:"렌더 타깃 상태 관리가 늘어납니다."},{system:"내러티브",choice:"엔진 수준 수명",reason:"게임 모드 전환 후에도 유지됩니다.",tradeoff:"서비스 소유권 규칙이 필요합니다."},{system:"파티클",choice:"공통 수명 + 이동 변형",reason:"공격과 환경 효과가 한 파이프라인을 공유합니다.",tradeoff:"변형별 기본값을 명확히 해야 합니다."}],code:{title:"충돌 시점 기반 연속 충돌 검사",description:"현재와 다음 프레임의 조기 검사 후, 프레임 내부에서 최초로 충돌하는 시점을 좁힙니다.",snippet:`float begin = 0.0f, end = 1.0f;\nwhile (end - begin > 0.001f) {\n  const float mid = (begin + end) * 0.5f;\n  Rect probe = start_rect;\n  probe.position += velocity * dt * mid;\n  if (probe.IsColliding(other_rect)) end = mid;\n  else begin = mid;\n}\ntoi = end;`,url:"https://github.com/Seohyeon-Min/manzo/blob/main/Manzo/Manzo/Engine/Collision.cpp"},note:"확인 가능한 구현 내용과 보관되지 않은 성능 수치를 명확히 구분했습니다."})}</section>`;

projectsData["03_DoubleHit"].localized.ko.contributions.sections.find(section => section.category === "Technical").htmlContent = `<section><h2>커스텀 엔진 기반 구조</h2><p class="case-study-lede">이 프로젝트에서 만든 컴포넌트와 서비스 구조는 이후 MANZO 엔진의 출발점이 됐습니다.</p>${renderEngineeringCaseStudy({labels:koreanCaseLabels,metrics:[{icon:"C++",value:"4",label:"핵심 엔진 영역"},{icon:"◇",value:"2P",label:"협동 플레이"}],architecture:[{title:"엔진 서비스",detail:"공유 접근과 수명"},{title:"게임 오브젝트",detail:"식별자와 Transform"},{title:"컴포넌트",detail:"조합 가능한 동작"},{title:"스프라이트와 충돌",detail:"렌더링과 상호작용"}],cases:[{label:"아키텍처",title:"일회성 오브젝트 코드 대신 조합",problem:"플레이어, 스킬, 적과 보스가 각자 전용 로직을 가지면 결합도가 빠르게 높아집니다.",decision:"GameObject의 식별과 GameComponent의 재사용 가능한 동작을 분리했습니다.",implementation:"공유 서비스, SpriteManager와 텍스처 처리, 충돌 시스템을 컴포넌트 구조와 함께 구현했습니다.",verification:"같은 기반으로 협동 게임을 완성했고 이후 MANZO 엔진의 시작 구조로 확장했습니다."}],note:"MANZO 페이지에서 이 기반이 렌더링, CCD, 리듬과 내러티브 시스템으로 확장된 과정을 확인할 수 있습니다."})}</section>`;
projectsData["01_Manzo"].contributions.sections.find(section => section.category === "Technical").htmlContent = renderManzoRendererFeature("en") + projectsData["01_Manzo"].contributions.sections.find(section => section.category === "Technical").htmlContent;
koreanManzoTechnical.htmlContent = renderManzoRendererFeature("ko") + koreanManzoTechnical.htmlContent;
projectsData["03_DoubleHit"].contributions.sections.find(section => section.category === "Technical").htmlContent = renderDoubleHitEngineFeature("en") + projectsData["03_DoubleHit"].contributions.sections.find(section => section.category === "Technical").htmlContent;
projectsData["03_DoubleHit"].localized.ko.contributions.sections.find(section => section.category === "Technical").htmlContent = renderDoubleHitEngineFeature("ko") + projectsData["03_DoubleHit"].localized.ko.contributions.sections.find(section => section.category === "Technical").htmlContent;
projectsData["00_NewManzo"].contributions.sections.find(section => section.category === "Technical").htmlContent = renderNewManzoPatternArchitectureFeature("en") + projectsData["00_NewManzo"].contributions.sections.find(section => section.category === "Technical").htmlContent;
projectsData["00_NewManzo"].localized.ko.contributions.sections.find(section => section.category === "Technical").htmlContent = renderNewManzoPatternArchitectureFeature("ko") + projectsData["00_NewManzo"].localized.ko.contributions.sections.find(section => section.category === "Technical").htmlContent;

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
        htmlContent: `<section class="development" id="ui-style-origin"><span class="case-label">ORIGINAL SYSTEM</span><h2>The UI Shader System Started Here</h2><p class="case-study-lede">Instead of hand-making art for every rounded button, gauge, and card, I built a single Unity <strong>URP UI shader</strong> (<code>UIStyle.shader</code>) driven by one component (<code>UIStyle.cs</code>), so any <code>Image</code> could become a styled shape just by tuning parameters in the Inspector.</p><div class="engineering-summary" aria-label="System scope"><article><span class="engineering-icon" aria-hidden="true">◆</span><strong>4</strong><small>Runtime/editor scripts: shader, component, editor, preset</small></article><article><span class="engineering-icon" aria-hidden="true">▦</span><strong>9</strong><small>Style groups exposed in the Inspector</small></article><article><span class="engineering-icon" aria-hidden="true">✦</span><strong>Live</strong><small>Previews instantly via OnValidate, no Play mode needed</small></article><article><span class="engineering-icon" aria-hidden="true">↗</span><strong>Reused</strong><small>Packaged as a .unitypackage and carried into Street Typer</small></article></div><h3>Inspector fields (as built for ThinkThink)</h3><div class="decision-table-wrap"><table class="decision-table"><thead><tr><th>Group</th><th>Key fields</th><th>What it does</th></tr></thead><tbody><tr><th scope="row">Rounded Corners</th><td>Corner Radius, Capsule/Pill toggles</td><td>SDF-based rounding, resolution-independent</td></tr><tr><th scope="row">Drop Shadow</th><td>Offset, Color, Blur, Size</td><td>Outer shadow without a separate sprite</td></tr><tr><th scope="row">Inner Shadow</th><td>Offset, Color, Blur</td><td>Inset shadow for a pressed/recessed look</td></tr><tr><th scope="row">Gradient</th><td>Base Color; Color Gradient (Start/End/Direction/Blend); Light Gradient (Strength/Direction); Hue Shift (Warm/Cool)</td><td>Layered color + lighting gradient in one pass</td></tr><tr><th scope="row">Edge Highlight</th><td>Strength, Size</td><td>Rim-light style edge glow</td></tr><tr><th scope="row">Material</th><td>Material Type (Plastic / Metal / Glass / Paper)</td><td>Swaps the surface-response preset</td></tr><tr><th scope="row">Noise</th><td>Enable, Strength</td><td>Micro-noise so flat colors don't band</td></tr><tr><th scope="row">Bottom Edge Line</th><td>Thickness, Intensity, Color, Sharpness</td><td>A defined base edge line, independent of shadows</td></tr><tr><th scope="row">Preset</th><td><code>UIStylePreset</code> asset</td><td>Save and re-apply an entire style as one asset</td></tr></tbody></table></div><h3>Shader modules in the package</h3><ul><li><strong>UIStyle.shader</strong>: the unified styling shader above</li><li><strong>UIBlur.shader</strong>: 9-tap optimized blur</li><li><strong>SimpleGradient.shader</strong>: lightweight UI gradient</li><li><strong>UIColorTint.shader</strong>: texture-alpha-based color tint</li><li><strong>WaveNoise.shader</strong>: multi-layer animated noise</li></ul><div class="system-map"><h3>Extended in Street Typer</h3><ol><li><span>01</span><strong>Per-corner radius</strong><small>Each of the 4 corners rounds independently instead of sharing one value</small></li><li><span>02</span><strong>Diamond shape</strong><small>New primitive with adjustable edge curvature and skew</small></li><li><span>03</span><strong>Radial gradient</strong><small>Center-to-edge gradient option added next to the directional one</small></li><li><span>04</span><strong>Outline</strong><small>A dedicated inward-facing outline, separate from the edge line</small></li><li><span>05</span><strong>Gauge fill</strong><small>Fill-amount control added for HP/timer-style bars, corners preserved as it drains</small></li></ol></div><p>The core shader and component carried over unchanged; Street Typer's card-combat UI just needed shapes and edges the original button-and-card set didn't.</p><a class="evidence-link" href="06_StreetTyper.html?contributionTab=Art#ui-style-extended">See it extended in Street Typer's Art tab ↗</a><h3>Editor Tooling</h3><p>Built a <strong>UIStyle.cs</strong> script that lets shader parameters be controlled intuitively from the Inspector, with a system for saving and applying UI style presets.</p><h3>Technical Stack</h3><ul><li>Unity Universal Render Pipeline (URP)</li><li>HLSL shader programming</li><li>Signed Distance Field (SDF) rendering</li><li>C# editor tooling</li></ul><h3>Development Notes</h3><p>Used AI-assisted development tools throughout shader design and system integration to speed up iteration and experimentation, building roughly <strong>1,000+ lines of shader code</strong> and a reusable UI style system.</p></section>`
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
