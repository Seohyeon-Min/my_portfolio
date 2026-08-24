// 프로젝트 데이터 - 여기서 모든 프로젝트 정보를 관리합니다
const projectsData = {
  // ========== 게임 프로젝트 ==========
  "00_NewManzo": {
    type: "game",
    pinned: true,
    title: "New MANZO",
    subtitle: "Hear the Ocean's Call",
    pageTitle: "NEWMANZO - MSH PORTFOILO",
    heroType: "youtube",
    heroMedia: "XwNLMpe7O3A",
    overview: "Manzo는 <strong>심해 리듬 어드벤처 게임</strong>으로, 심리적 공포와 탐험 요소가 결합된 작품입니다. 플레이어는 수수께끼의 모스 부호 신호를 따라 바다 깊숙이 숨겨진 비밀을 밝혀나갑니다.",
    features: [
      "FMOD 기반 정박 판정과 싱크 보정",
      "프로시저럴 보스 다리 애니메이션",
      "세이브 및 이벤트 관리 시스템",
      "Bloom을 활용한 통일된 수중 비주얼",
      "완결 가능한 보스러시 구조"
    ],
    experience: {
      role: "Project Lead · Gameplay / Systems Programmer · Visual Direction",
      period: "2025년 8월 – 최종 빌드",
      description: "프로젝트가 장기화되며 참여가 느슨해졌을 때 팀의 가용 인원과 핵심 범위를 다시 정리하고, 2주 마감 스프린트로 재편해 플레이 가능한 빌드를 완성했습니다."
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
          htmlContent: `<section><h2>게임플레이 및 기반 시스템</h2><h3>프로시저럴 다리 애니메이션</h3><p>보스의 다리가 지면과 움직임에 반응하도록 절차적 애니메이션을 구현해, 수작업 애니메이션만으로는 만들기 어려운 유기적인 움직임을 구성했습니다.</p><h3>FMOD 리듬 동기화</h3><p>FMOD의 오디오 타임라인을 기준으로 정박 판정을 구성하고, 플레이 환경에서 발생하는 체감 오차를 보정할 수 있도록 싱크 조절 기능을 만들었습니다.</p><h3>세이브 및 이벤트 관리</h3><p>플레이 진행 상태를 유지하는 세이브 시스템과 게임 내 사건의 발생·진행을 관리하는 이벤트 시스템을 구현해 보스러시 흐름을 연결했습니다.</p></section>`
        },
        {
          title: "비주얼 디렉션",
          category: "Art",
          htmlContent: `<section><h2>하나의 게임처럼 보이게 만들기</h2><p>서로 다른 시기에 제작된 환경·캐릭터·이펙트가 한 화면에서 이질적으로 보이지 않도록 색, 밝기, 실루엣과 효과 강도를 반복해서 조정했습니다.</p><h3>Bloom과 화면 가독성</h3><p>발광 효과가 수중 분위기에는 기여하면서도 공격 예고와 플레이어 정보를 덮지 않도록 Bloom의 임계값과 강도, 주변 색의 대비를 함께 다듬었습니다.</p></section>`
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
    pageTitle: "MANZO - MSH PORTFOILO",
    heroType: "video",
    heroMedia: "../img/MANZO/MANZO_trailer.mp4",
    overview: "Manzo는 <strong>심해 리듬 어드벤처 게임</strong>으로, 심리적 공포와 탐험 요소가 결합된 작품입니다. 플레이어는 수수께끼의 모스 부호 신호를 따라 바다 깊숙이 숨겨진 비밀을 밝혀나갑니다.",
    features: [
      "리듬 기반 이동",
      "탐험 중심 스토리텔링",
      "역동적인 해저 세계",
      "독특한 보스 전투"
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
    gameIntro: `<section class="game-overview">

  <h2>Game Overview</h2>

  <p>
    <strong>리듬 기반 대시 이동으로 심해를 탐험하고 모스 부호를 해독하며 
    바다의 비밀을 밝혀나가는 Rhythm Metroidvania Psychological Horror 게임입니다.</strong>
  </p>

  <p>
    플레이어는 해양 드론 <strong>"Dal"</strong>을 조종하여 바닷속을 탐험합니다. 
    박자에 맞춰 대시 이동을 수행하며 물고기를 포획하고 위험을 회피합니다. 
    포획한 물고기는 상인에게 판매하여 자원을 획득할 수 있으며, 
    이를 통해 다양한 <strong>모듈과 스킬을 구매하여 탐험 능력을 강화합니다.</strong>
  </p>

  <p>
    탐험 과정에서는 <strong>모스 부호를 송신하는 보스의 신호</strong>를 소리로 탐지할 수 있습니다. 
    플레이어는 청각 정보를 단서로 보스의 위치를 추적하고 
    <strong>리듬 기반 패턴을 회피하며 전투를 진행합니다.</strong> 
    보스를 처치하면 스토리 진행에 필요한 <strong>모스 코드 단어</strong>를 획득하며, 
    이를 통해 심해에 숨겨진 비밀을 해독해 나갑니다.
  </p>

  <p>
    맵 곳곳에는 <strong>숨겨진 보물</strong>과 더 강력한 보스들이 존재하며, 
    플레이어의 탐험 방식과 선택에 따라 <strong>서로 다른 결말</strong>로 이어집니다.
  </p>


  <h2>Core Features</h2>

  <ul>
    <li>
      <strong>Rhythm-based Movement</strong><br>
      박자에 맞춰 대시하며 이동하는 리듬 기반 탐험 시스템을 제공합니다.
    </li>

    <li>
      <strong>Sound-driven Boss Tracking</strong><br>
      보스가 송신하는 모스 부호를 청각적으로 탐지하여 위치를 추적하는 탐험 구조를 구현합니다.
    </li>

    <li>
      <strong>Metroidvania Exploration</strong><br>
      모듈과 스킬을 통해 새로운 지역을 탐험하고 점진적으로 더 깊은 심해로 진입합니다.
    </li>

    <li>
      <strong>Deep Sea Psychological Horror</strong><br>
      얕은 바다에서 시작하여 심해로 갈수록 분위기와 시각적 연출이 점차 어둡고 불안하게 변화합니다.
    </li>
  </ul>

</section>`,
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

  "02_EdgeDirve": {
    type: "game",
    title: "EDGE DRIVE",
    subtitle: "보스러쉬",
    pageTitle: "EDGE DRIVE - MSH PORTFOILO",
    heroType: "video",
    heroMedia: "../img/EDGE_DRIVE/trailer.mp4",
    overview: "보스러쉬 액션게임",
    features: [
      "다양한 보스패턴",
      "시간 정지 기믹"
    ],
    experience: {
      role: "VFX 리드",
      period: "2025년 1월 ~ 2월",
      description: "각종 VFX의 제작을 맡았습니다."
    },
    videos: [
      {
        title: null,
        src: "../img/EDGE_DRIVE/trailer.mp4",
        poster: null
      }
    ],
    contributions: {
      sections: [
        {
          title: "언리얼 엔진",
          category: "Art",
          items: [
            "Cascade 파티클 효과, 트레일, 기타 다양한 시각 효과를 제작함."
          ]
        }
      ]
    },
    source: null
  },

  "03_DoubleHit": {
    type: "game",
    title: "DOUBLE HIT",
    subtitle: "2인용 액션게임",
    pageTitle: "DOUBLE HIT - MSH PORTFOILO",
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
    pageTitle: "BIRD STRIKE - MSH PORTFOILO",
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
    pageTitle: "ThinkThink! 리듬챌린지 - MSH PORTFOILO",
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
          title: "개발",
          category: "Technical",
          htmlContent: `<section class="development">
  <h3>Custom UI Shader System</h3>
  <p>
    Unity <strong>URP 기반 UI 셰이더 시스템</strong>을 제작하여 
    다양한 UI 스타일을 하나의 재사용 가능한 구조로 구현했습니다.
  </p>

  <ul>
    <li><strong>SDF 기반 UI 렌더링</strong> : Rounded Rectangle, Capsule 등 해상도 독립적인 도형 렌더링</li>
    <li><strong>UI 스타일 시스템</strong> : Gradient, Shadow, Edge Highlight, Material 표현(Plastic/Metal/Glass)</li>
    <li><strong>Micro Noise 및 색상 보정</strong> : HSV 변환 기반 색상 조정과 미세 노이즈 효과</li>
    <li><strong>실시간 파라미터 제어</strong> : Inspector에서 UI 스타일을 즉시 수정 가능</li>
  </ul>

  <h3>Shader Modules</h3>
  <ul>
    <li><strong>UIStyle.shader</strong> : 통합 UI 스타일링 셰이더</li>
    <li><strong>UIBlur.shader</strong> : 9-Tap 최적화 블러 효과</li>
    <li><strong>SimpleGradient.shader</strong> : 경량 UI 그라디언트 셰이더</li>
    <li><strong>UIColorTint.shader</strong> : 텍스처 알파 기반 컬러 틴트</li>
    <li><strong>WaveNoise.shader</strong> : 다중 레이어 애니메이션 노이즈</li>
  </ul>

  <h3>Editor Tooling</h3>
  <p>
    <strong>UIStyle.cs</strong> 스크립트를 제작하여 
    Inspector에서 셰이더 파라미터를 직관적으로 제어하고 
    UI 스타일 프리셋을 저장 및 적용할 수 있는 시스템을 구현했습니다.
  </p>

  <h3>Technical Stack</h3>
  <ul>
    <li>Unity Universal Render Pipeline (URP)</li>
    <li>HLSL Shader Programming</li>
    <li>Signed Distance Field (SDF) Rendering</li>
    <li>C# Editor Tooling</li>
  </ul>

  <h3>Development Notes</h3>
  <p>
    셰이더 구조 설계와 시스템 통합 과정에서 
    AI 기반 개발 도구를 적극 활용하여 반복 작업과 실험 속도를 높였습니다.
    이를 통해 약 <strong>1,000+ lines 규모의 셰이더 코드</strong>와 
    재사용 가능한 UI 스타일 시스템을 구축했습니다.
  </p>

</section>`
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
    pageTitle: "Dangling* - MSH PORTFOILO",
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
    gameIntro: `<div class="impact-metrics" aria-label="Project outcomes"><div class="impact-metric"><span class="impact-metric-icon" aria-hidden="true">₩</span><strong>₩10M</strong><span>Total revenue</span></div><div class="impact-metric"><span class="impact-metric-icon" aria-hidden="true">●</span><strong>235</strong><span>Account followers</span></div><div class="impact-metric"><span class="impact-metric-icon" aria-hidden="true">↻</span><strong>1,000+</strong><span>Cumulative reposts</span></div></div><p class="metric-source-note">Account figures as of August 24, 2026.</p><p>I opened a prepaid preorder form through Witchform and used confirmed order counts to determine the production quantity. This made-to-order structure let me secure demand before placing the factory order, reducing upfront capital exposure and the risk of unsold inventory.</p><p>I sourced a manufacturer through Taobao, negotiated a workable price and schedule, and reviewed physical samples to confirm that shapes, expressions, costume details, and colors matched the intended designs before approving production.</p><p>I then connected the factory, an international freight forwarder, a defect-inspection and delivery service, and the buyers into one fulfillment workflow. Finished products moved from production to inspection and final delivery without passing through my hands. I centralized buyer questions through Peing, using it to answer order and delivery inquiries while communicating status updates throughout fulfillment. This let me run the project efficiently while keeping quality, price, and customer communication under control.</p><p class="case-study-note"><strong>Authorship note:</strong> The featured characters are fan merchandise based on existing intellectual property. My work shown here is the plush-format visual adaptation, production preparation, vendor coordination, logistics, and customer support.</p>`,
    contributions: {
      sections: [
        {
          title: "Product & Production",
          category: "Design · Operations",
          htmlContent: `<section><h2>From artwork to a manufacturable product</h2><p>Adapted each character to a consistent round-plush format and prepared production artwork that preserved readable silhouettes, expressions, costume details, and colors at a small physical scale.</p><h3>Preorders through Witchform</h3><p>Opened a prepaid purchase form through Witchform and finalized the production quantity from confirmed orders. Producing against validated demand minimized excess inventory, upfront investment, and the financial risk of unsold products.</p><h3>Factory sourcing and negotiation</h3><p>Contacted a manufacturer through Taobao and negotiated the production schedule and unit price directly. I commissioned samples, compared the physical results with the intended designs, and communicated revisions before approving mass production, achieving the expected quality at a reasonable cost.</p><h3>End-to-end fulfillment workflow</h3><div class="fulfillment-flow" role="list" aria-label="Fulfillment process"><div class="fulfillment-step" role="listitem"><span class="fulfillment-icon" aria-hidden="true">✎</span><strong>01</strong><span>Production<br>artwork</span></div><div class="fulfillment-step" role="listitem"><span class="fulfillment-icon" aria-hidden="true">⚙</span><strong>02</strong><span>Factory<br>order</span></div><div class="fulfillment-step" role="listitem"><span class="fulfillment-icon" aria-hidden="true">▣</span><strong>03</strong><span>Freight<br>forwarder</span></div><div class="fulfillment-step" role="listitem"><span class="fulfillment-icon" aria-hidden="true">✓</span><strong>04</strong><span>Inspection<br>& delivery</span></div><div class="fulfillment-step" role="listitem"><span class="fulfillment-icon" aria-hidden="true">⌂</span><strong>05</strong><span>Buyer</span></div></div><p>Designed a direct flow from production artwork to factory order, international freight forwarder, defect inspection and domestic delivery service, and finally the buyer. Products could move from the factory to customers without passing through my hands, while I remained responsible for status tracking and exception handling.</p><h3>Buyer Q&A through Peing</h3><p>Used Peing as the project's centralized Q&A channel, responding to order, production, and delivery questions and keeping buyer communication organized throughout fulfillment.</p><h3>What I learned</h3><p>I learned how to turn a creative concept into a repeatable operation: validate demand before production, define requirements clearly, negotiate cost and schedule, verify quality through samples, connect multiple external partners, and maintain a clear customer communication channel.</p></section>`
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
        gameIntro: `<div class="impact-metrics" aria-label="프로젝트 성과"><div class="impact-metric"><span class="impact-metric-icon" aria-hidden="true">₩</span><strong>약 1,000만 원</strong><span>총매출</span></div><div class="impact-metric"><span class="impact-metric-icon" aria-hidden="true">●</span><strong>235명</strong><span>계정 팔로워</span></div><div class="impact-metric"><span class="impact-metric-icon" aria-hidden="true">↻</span><strong>1,000회+</strong><span>누적 리포스트</span></div></div><p class="metric-source-note">계정 수치는 2026년 8월 24일 기준입니다.</p><p>Witchform에서 선입금 구매폼을 열고, 결제가 완료된 확정 주문 수량을 기준으로 생산량을 결정했습니다. 수요를 먼저 확보한 뒤 공장에 발주하는 주문제작 구조를 통해 초기 자금 부담과 미판매 재고로 인한 손실 위험을 최소화했습니다.</p><p>타오바오에서 중국 제조업체를 직접 찾아 일정과 단가를 협상하고, 실물 샘플을 제작해 형태와 표정, 의상 디테일과 색상이 의도대로 구현됐는지 확인했습니다. 수정 사항을 공장에 전달한 뒤 양산을 승인해, 원하는 품질을 합리적인 가격으로 확보했습니다.</p><p>생산 이후에는 공장 → 배대지 → 불량 검수 및 배송대행사 → 구매자로 이어지는 직접배송 흐름을 구성했습니다. 완제품을 제가 직접 보관하거나 재포장하지 않아도 주문이 최종 수령까지 이어졌으며, Peing을 구매자 Q&A 창구로 활용해 주문·제작·배송 문의와 진행 상황 안내를 한곳에서 관리했습니다.</p><p class="case-study-note"><strong>기여 범위:</strong> 등장 캐릭터의 원저작권은 각 권리자에게 있습니다. 여기서 소개하는 제 작업은 인형 형태에 맞춘 시각적 각색, 생산 자료 준비, 공장 조율, 물류와 구매자 지원입니다.</p>`,
        contributions: {
          sections: [
            {
              title: "제품과 생산",
              category: "디자인 · 운영",
              htmlContent: `<section><h2>도안에서 생산 가능한 제품까지</h2><p>캐릭터를 일관된 둥근 인형 형태로 각색하고, 작은 실물에서도 형태와 표정, 의상 특징과 색상이 명확하게 보이도록 생산용 도안을 준비했습니다.</p><h3>Witchform을 활용한 선주문 판매</h3><p>Witchform에서 선입금 구매폼을 열고 결제가 완료된 주문량을 기준으로 최종 생산 수량을 확정했습니다. 실제 수요를 먼저 검증한 뒤 주문제작하는 방식으로 불필요한 선투자와 미판매 재고를 줄이고, 금전적 손실 위험을 최소화했습니다.</p><h3>공장 발굴과 가격·일정 협상</h3><p>타오바오에서 중국 제조업체를 직접 찾아 생산 일정과 단가를 협상했습니다. 실물 샘플을 발주해 도안과 비교하고, 형태와 자수, 색상 등의 수정 사항을 전달한 뒤 양산을 승인함으로써 예상한 품질을 합리적인 가격에 확보했습니다.</p><h3>직접 취급 없이 작동하는 배송 프로세스</h3><div class="fulfillment-flow" role="list" aria-label="배송 프로세스"><div class="fulfillment-step" role="listitem"><span class="fulfillment-icon" aria-hidden="true">✎</span><strong>01</strong><span>생산용<br>도안 제작</span></div><div class="fulfillment-step" role="listitem"><span class="fulfillment-icon" aria-hidden="true">⚙</span><strong>02</strong><span>공장<br>발주</span></div><div class="fulfillment-step" role="listitem"><span class="fulfillment-icon" aria-hidden="true">▣</span><strong>03</strong><span>해외<br>배대지</span></div><div class="fulfillment-step" role="listitem"><span class="fulfillment-icon" aria-hidden="true">✓</span><strong>04</strong><span>불량 검수<br>배송대행</span></div><div class="fulfillment-step" role="listitem"><span class="fulfillment-icon" aria-hidden="true">⌂</span><strong>05</strong><span>구매자<br>수령</span></div></div><p>도안 제작 → 공장 발주 → 배대지 → 불량 검수 및 배송대행사 → 구매자로 이어지는 전체 흐름을 설계했습니다. 완제품이 제 손을 거치지 않아도 검수와 최종 배송까지 진행되도록 각 업체를 연결했고, 저는 진행 상황 추적과 예외 상황 대응을 맡았습니다.</p><h3>Peing을 활용한 구매자 Q&A</h3><p>Peing을 프로젝트의 통합 문의 창구로 활용해 주문, 제작 진행 상황과 배송 관련 질문에 답변했습니다. 구매자 커뮤니케이션을 한곳에 모아 전체 이행 과정에서 문의와 안내가 누락되지 않도록 관리했습니다.</p><h3>배운 점</h3><p>창작물을 실제 제품으로 만드는 일은 디자인만의 문제가 아니었습니다. 수요를 먼저 검증하고, 요구사항을 명확히 정의하며, 가격과 일정을 협상하고, 샘플로 품질을 확인하고, 여러 외부 업체와 고객 소통 채널을 하나의 운영 구조로 연결하는 일까지 모두 제품 경험의 일부라는 점을 배웠습니다.</p></section>`
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
    overview: "I originated Street Typer's core concept and built the first gameplay prototype: bilingual typing becomes an action-RPG combat rule, where players chain five on-screen words and finish with an action word to resolve an attack. The team's game designer later developed level design and polished the design around that foundation.",
    features: [
      "Korean and English typing treated as gameplay rules, with custom IME-aware input handling",
      "Card-chain combat with command resolution, status effects, rewards, and enemy turns",
      "Original 2D art, impact shaders, particles, camera shake, hit feedback, and animated UI"
    ],
    experience: {
      role: "Art · Technical Art · Producer (Team Project)",
      period: "2026 · 10-day scope",
      description: "Originated the game's central typing-combat concept and built the initial prototype that established its playable loop. The team's game designer focused on level design and subsequent design polish. I then produced the 10-day scope and directly owned the visual direction, art integration, UI, VFX, and moment-to-moment feedback through the playable build."
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
          title: "Art to Engine",
          category: "Technical Art",
          htmlContent: `<section><h2>Core Concept to Playable Build</h2><p>I proposed the main idea and built the initial prototype: combine five typed words into a skill, then enter an action word to execute it. That prototype established the project's core loop before the team expanded it. Our game designer owned level design and helped polish the design; the originating concept and first playable proof were mine.</p><h3>Art to Engine</h3><p>Built the visual layer around that typing-combat loop: original 2D assets, screen composition, hit VFX, outlines, particles, camera shake, floating damage, and UI motion.</p><h3>UI styling workflow</h3><p>Defined the desired look and iterated with AI assistance on a Unity UI shader/tool for per-corner rounding, gradients, shadows, blur, reusable presets, and inspector controls. My contribution is the visual specification, art direction, evaluation, and project integration—not a claim that every generated code line was handwritten.</p><h3>Why it matters</h3><p>The work connects the original game idea to gameplay clarity: typed-word state, action resolution, impact timing, and bilingual input feedback remain legible during combat.</p></section>`
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
        overview: "제가 제안한 ‘타이핑 자체를 전투로 만들면 어떨까?’라는 핵심 아이디어와 초기 플레이 프로토타입에서 출발한 10일 게임잼 프로젝트입니다. 단어 다섯 개를 이어 기술을 만들고 마지막 행동 단어로 공격을 실행하는 기본 루프를 먼저 만들었고, 이후 팀의 게임 디자이너가 이 기반 위에서 레벨 디자인과 디자인 폴리싱을 맡았습니다.",
        features: [
          "IME 입력을 직접 처리해 한글과 영어 모두 자연스럽게 이어지는 타이핑 전투 구현",
          "단어 조합부터 행동 판정, 상태 효과, 보상과 적 턴까지 연결되는 카드 전투 구조",
          "직접 제작한 2D 아트에 셰이더, 파티클, 카메라 셰이크와 UI 모션을 더해 타격감 강화"
        ],
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
              title: "아트에서 엔진까지",
              category: "테크니컬 아트",
              htmlContent: `<section><h2>핵심 아이디어에서 플레이 가능한 빌드까지</h2><p>단어 다섯 개를 입력해 기술을 조합하고 마지막 행동 단어로 실행한다는 메인 아이디어를 제가 제안하고, 이 루프를 검증하는 초기 프로토타입도 직접 만들었습니다. 팀의 게임 디자이너는 이 기반 위에서 레벨 디자인과 이후 디자인 폴리싱을 맡았습니다. 따라서 게임 디자인 전체를 혼자 했다는 뜻은 아니지만, 프로젝트를 시작시킨 핵심 콘셉트와 최초의 플레이 증명은 제 작업입니다.</p><h3>아트에서 엔진까지</h3><p>캐릭터와 배경을 그리는 데서 끝내지 않고, 피격 이펙트와 외곽선, 파티클, 카메라 셰이크, 대미지 숫자와 UI 움직임까지 Unity 안에서 직접 맞췄습니다. 타이핑에 집중하는 동안에도 전투 상황과 공격 결과가 바로 읽히는 것이 목표였습니다.</p><h3>UI 스타일 제작</h3><p>버튼마다 이미지를 새로 만들지 않아도 원하는 분위기를 빠르게 맞출 수 있도록 UI 셰이더와 조절 도구를 구성했습니다. 모서리 둥글기, 그라디언트, 그림자와 블러를 인스펙터에서 조절하고 프리셋으로 재사용할 수 있습니다. 구현 과정에서는 AI의 도움을 받았으며, 저는 필요한 기능과 화면 기준을 정하고 결과를 검토해 실제 프로젝트에 맞게 수정·통합했습니다.</p><h3>플레이에 필요한 정보를 먼저</h3><p>현재 입력 중인 단어, 기술 완성 여부와 공격 타이밍이 화려한 효과에 묻히지 않도록 색과 움직임의 우선순위를 정했습니다. 보기 좋은 화면보다 플레이 중 바로 이해되는 화면을 만드는 데 집중했습니다.</p></section>`
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
    overviewImage: "../img/TooHot/hero.png",
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
          title: "Visual Polish",
          category: "Technical Art",
          htmlContent: `<section><h2>Implemented by Me</h2><p>Created and integrated game art, composed the combat presentation, and added a custom shadow shader, pattern-specific VFX, UI styling, animation, and impact feedback. I tuned color, scale, timing, and hierarchy so players could read danger quickly while attacks still felt forceful.</p><h3>Custom shadow shader</h3><p>I built and integrated the shadow treatment as part of the real-time visual pipeline, then tuned it against the characters, arena, and effects. It gives the 2D artwork a consistent sense of contact and depth inside Unity instead of relying on individually painted shadow assets.</p><h3>Visual systems in the build</h3><p>The shadow shader works alongside telegraphs, hit zones, projectile and beam effects, player feedback, portraits, boss animation, and shader-driven UI presentation. My focus was connecting those elements into a coherent player experience rather than treating them as isolated assets.</p><h3>Authorship note</h3><p>This was collaborative game-jam work. The shadow shader, art, composition, VFX, UI, animation, and integration described here are my direct contributions; gameplay systems written by teammates are credited as team output.</p></section>`
        },
        {
          title: "Technical Direction & Production Ownership",
          category: "Direction · Production",
          htmlContent: `<section><h2>I Defined the Systems and Drove Their Delivery</h2><p>I owned the connection between design intent, technical structure, and production. I decided what the systems needed to do, documented implementation-ready requirements, set priorities and ownership, reviewed the resulting work, requested revisions, tested it in context, and coordinated integration. This was more than scheduling: the backlog encoded the product and technical decisions that guided the programmers' work.</p><div class="direction-case-grid"><article><span class="case-label">Architecture Direction</span><h3>Data-driven stage flow</h3><p>Directed the replacement of scene-specific dialogue loading with a centralized <code>GameplayManager</code> and per-stage <code>StageData</code> ScriptableObjects coordinating boss, dialogue, progression, and ending conditions.</p></article><article><span class="case-label">Reliability Direction</span><h3>Progression safeguards</h3><p>Identified final-stage out-of-range failure cases and defined validation and recovery requirements for corrupted or unexpected save values.</p></article><article><span class="case-label">Workflow Design</span><h3>Faster playtesting</h3><p>Specified editor-facing chapter selection and clean-state reset controls so stages and relic state could be tested directly without replaying from the title screen.</p></article><article><span class="case-label">Creative Prioritization</span><h3>Spent the remaining time on impact</h3><p>Rejected redundant damage numbers because the boss HP bar already communicated the result, then redirected the remaining effort to camera response for stronger hit feedback.</p></article></div><h3>From direction to delivery</h3><p>I maintained a cross-discipline backlog of more than 130 tasks spanning gameplay systems, content, art, UI, VFX, audio, and presentation.</p><div class="production-evidence"><div><strong>P0 · Must ship</strong><span>Dialogue, save/continue, boss phases, and critical boss patterns</span></div><div><strong>P1 · Should ship</strong><span>Stage warnings, transition presentation, and full-health HP-bar visibility</span></div><div><strong>P3 · Defer if needed</strong><span>Camera polish and optional interaction refinements after the playable core</span></div></div><ul><li>Assigned system ownership and let programmers dynamically claim remaining P0 work.</li><li>Tracked every item through implementation, review, rework, testing, and completion.</li><li>Ran a separate bug workflow with severity, reproduction steps, branch, reporter, and assignee.</li><li>Reviewed completed systems before main-branch integration, then scheduled the visual pass around finished boss patterns.</li></ul><p class="case-study-note"><strong>Authorship boundary:</strong> teammates wrote the gameplay code. I authored the system requirements and production plan, made the architecture and priority calls documented here, reviewed and tested the implementations, and directly created the visual work identified in the Technical Art section.</p></section>`
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
              title: "비주얼 폴리시",
              category: "테크니컬 아트",
              htmlContent: `<section><h2>제가 직접 구현한 작업</h2><p>게임 아트를 제작·적용하고 전투 화면을 구성했으며, 커스텀 그림자 셰이더와 패턴별 VFX, UI 스타일, 애니메이션, 타격 피드백을 추가했습니다. 플레이어가 위험을 빠르게 읽으면서도 공격은 강하게 느끼도록 색과 크기, 타이밍, 화면의 위계를 반복해서 조절했습니다.</p><h3>커스텀 그림자 셰이더</h3><p>캐릭터와 전투 공간이 따로 떠 보이지 않도록 실시간 그림자 표현을 제작해 Unity에 적용했습니다. 에셋마다 그림자를 별도로 그려 넣는 대신, 캐릭터와 배경, 이펙트를 함께 보며 그림자 표현을 조절해 2D 화면에 일관된 접지감과 깊이를 만들었습니다.</p><h3>플레이 화면에 연결된 요소</h3><p>그림자 셰이더를 공격 전조와 피격 범위, 투사체·빔 이펙트, 플레이어 피드백, 포트레이트, 보스 애니메이션, 셰이더 기반 UI와 하나의 경험으로 연결했습니다. 개별 에셋보다 실제 플레이에서 함께 작동하는 화면을 만드는 데 집중했습니다.</p><h3>기여 범위</h3><p>이 프로젝트는 팀으로 만든 게임잼 작품입니다. 여기서 소개하는 그림자 셰이더와 아트, 화면 구성, VFX, UI, 애니메이션, 통합은 제가 직접 맡았으며, 팀원이 작성한 게임플레이 시스템은 팀 결과물로 구분합니다.</p></section>`
            },
            {
              title: "기술 디렉팅과 프로덕션 오너십",
              category: "디렉팅 · 프로덕션",
              htmlContent: `<section><h2>시스템을 정의하고 완성까지 이끌었습니다</h2><p>기획 의도와 기술 구조, 실제 제작을 잇는 역할을 맡았습니다. 시스템이 어떻게 동작해야 하는지 결정하고 개발자가 바로 구현할 수 있는 요구사항으로 정리한 뒤, 우선순위와 담당자를 정하고 구현 결과를 리뷰했습니다. 수정 요청과 테스트, 통합까지 이어졌기 때문에 단순한 일정 관리가 아니라 개발 방향 자체를 작업 보드에 구체화한 일이었습니다.</p><div class="direction-case-grid"><article><span class="case-label">구조 디렉팅</span><h3>데이터 중심 스테이지 흐름</h3><p>씬마다 대화를 불러오던 구조를 <code>GameplayManager</code>와 스테이지별 <code>StageData</code> ScriptableObject 중심으로 바꾸도록 방향을 정했습니다. 보스와 대화, 진행 데이터, 마지막 챕터 이후 엔딩 조건을 한 흐름에서 관리하도록 요구사항을 제시했습니다.</p></article><article><span class="case-label">안정성 디렉팅</span><h3>진행 데이터 방어</h3><p>마지막 챕터 이후 인덱스가 범위를 벗어나는 문제를 먼저 발견하고, 손상되거나 예상 밖인 세이브 값을 검사·보정하는 조건을 정의했습니다.</p></article><article><span class="case-label">워크플로 설계</span><h3>빠른 스테이지 테스트</h3><p>타이틀부터 반복 플레이하지 않아도 되도록 챕터 선택과 유물 데이터까지 포함한 클린 상태 초기화를 에디터 디버그 기능으로 지정했습니다.</p></article><article><span class="case-label">크리에이티브 우선순위</span><h3>남은 시간은 타격감에 집중</h3><p>보스 HP바와 정보가 겹치는 대미지 숫자는 제외하고, 제한된 시간을 공격 적중 순간의 카메라 반응에 사용하도록 방향을 전환했습니다.</p></article></div><h3>방향 결정에서 완성까지</h3><p>게임플레이 시스템과 콘텐츠, 아트, UI, VFX, 사운드, 연출에 걸친 130개 이상의 작업을 하나의 우선순위 보드로 운영했습니다.</p><div class="production-evidence"><div><strong>P0 · 반드시 완성</strong><span>다이얼로그, 세이브·이어하기, 보스 페이즈와 핵심 패턴</span></div><div><strong>P1 · 중요</strong><span>스테이지 경고, 전환 연출과 풀피 몬스터 HP 표시 규칙</span></div><div><strong>P3 · 여유가 있을 때</strong><span>카메라 폴리시와 선택 조작 등 코어 이후의 개선</span></div></div><ul><li>시스템별 담당을 정하고 남은 P0 작업은 프로그래머가 유동적으로 가져가도록 운영했습니다.</li><li>모든 작업을 구현, 리뷰, 재작업, 테스트, 완료 단계로 나눠 추적했습니다.</li><li>심각도와 재현 방법, 브랜치, 작성자, 수정자를 기록하는 별도 버그 흐름을 운영했습니다.</li><li>완성된 시스템을 메인 브랜치에 합치기 전에 검토하고, 보스 패턴 구현 순서에 맞춰 후속 비주얼 작업을 배치했습니다.</li></ul><p class="case-study-note"><strong>기여 범위:</strong> 게임플레이 코드는 팀원이 작성했습니다. 저는 시스템 요구사항과 제작 계획을 작성하고, 여기 소개한 구조와 우선순위를 결정했으며, 구현 리뷰와 테스트를 맡았습니다. 테크니컬 아트 탭의 비주얼 작업은 제가 직접 구현했습니다.</p></section>`
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
    pageTitle: "TECH - MSH PORTFOILO",
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
    pageTitle: "TECH - MSH PORTFOILO",
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

applyEnglishProjectOverride("00_NewManzo", {
  pageTitle: "New MANZO — Min Seohyeon Portfolio",
  overview: "A completed playable build of a deep-sea rhythm adventure exploring beat-linked hunting, fish behavior, and atmospheric rendering.",
  features: [
    "FMOD-driven on-beat gameplay with adjustable sync offset",
    "Procedural boss-leg animation",
    "Save and event-management systems",
    "Cohesive underwater visuals with readability-aware bloom",
    "A production-reset boss-rush scope carried to a playable build"
  ],
  experience: {
    role: "Gameplay / Systems Programmer · Visual Direction · Production Lead",
    period: "August 2025 – Final Build",
    description: "When the long-running secondary project lost momentum, I reset team commitment and scope, formed a smaller delivery-focused group, and led a two-week closing sprint to a playable build."
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
        title: "Graphics & Gameplay Prototypes",
        category: "Technical",
        htmlContent: `<section><h2>Gameplay & Foundation Systems</h2><h3>Procedural Leg Animation</h3><p>Built procedural animation for the boss's legs so they could respond organically to movement and the ground instead of relying entirely on authored animation clips.</p><h3>FMOD Rhythm Synchronization</h3><p>Used the FMOD audio timeline as the source of truth for on-beat gameplay and implemented a sync-offset control to compensate for perceived timing differences across play environments.</p><h3>Save & Event Management</h3><p>Implemented the save system for persistent progression and an event-management system that coordinates gameplay events across the boss-rush flow.</p><h3>Fish Behavior & Hunting</h3><p>Prototyped schooling, obstacle avoidance, and player response, then connected hunting interactions to the beat-driven gameplay loop.</p></section>`
      },
      {
        title: "Visual Direction",
        category: "Art",
        htmlContent: `<section><h2>A Cohesive Underwater Look</h2><p>Repeatedly adjusted color, value, silhouettes, and effect intensity so environments, characters, and VFX produced at different stages still read as one coherent game.</p><h3>Bloom with Gameplay Readability</h3><p>Tuned bloom threshold, intensity, and surrounding contrast so the glow supported the underwater atmosphere without obscuring attack telegraphs or essential player information.</p></section>`
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
  overview: "A custom-engine rhythm adventure set in the deep sea. Players move on the beat, follow Morse-code signals, and explore an increasingly unsettling underwater world.",
  features: [
    "BPM-driven movement and gameplay synchronization",
    "Custom draw-call pipeline and multi-pass post-processing",
    "Particle effects, underwater shaders, and screen transitions",
    "Engine-level scenario and dialogue system refactor"
  ],
  experience: {
    role: "Graphics / Engine Programmer · Technical Artist · Production Lead",
    period: "September 2024 – 2025",
    description: "Implemented rendering and rhythm systems, integrated visual effects, resolved engine-level stability and performance issues, and coordinated the project toward a playable build."
  },
  gameIntro: `<section class="game-overview"><h2>Game Overview</h2><p><strong>MANZO is a rhythm-driven deep-sea adventure built on a student custom engine.</strong> Players control an underwater drone, dash on the beat, hunt fish, follow Morse-code signals, and descend into a darker psychological-horror atmosphere.</p><p>The project combined rhythm synchronization, exploration, boss encounters, narrative events, custom rendering, and original game art. My primary contribution was turning those requirements into engine systems and real-time visual feedback.</p></section>`,
  contributions: {
    sections: [
      {
        title: "Rendering & Engine Systems",
        category: "Technical",
        htmlContent: `<section><h2>Rendering & Engine Systems</h2><h3>Rhythm Core</h3><p>Implemented BPM-based beat detection, timing windows, beat and bar counting, and synchronized player movement and boss patterns with the audio timeline.</p><h3>Rendering Pipeline</h3><p>Built layer-based draw-call queues for background, world, UI, and late rendering. Added framebuffer-based multi-pass processing for bloom, underwater distortion, god rays, ripple effects, and screen transitions.</p><h3>Particle Integration</h3><p>Integrated lifetime-based particles with linear, curved, random, player-targeted, radial, and spray motion for boss attacks, impacts, and environmental feedback.</p><h3>Architecture & Stability</h3><p>Refactored scenario and dialogue handling out of game-mode ownership into engine-level systems, removing dangling-pointer failures and stabilizing event flow across state changes.</p><h3>Performance</h3><p>Tracked a severe boss-fight slowdown to redundant brute-force collision checks, removed repeated work, and stabilized the encounter. Exact profiling figures were not retained, so the portfolio does not claim unverified measurements.</p></section>`
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
  subtitle: "Two-player cooperative action",
  pageTitle: "Double Hit — Min Seohyeon Portfolio",
  overview: "A two-player action project focused on cooperative skill combinations and survival, built while learning the foundations of a small custom engine.",
  features: ["Two-player cooperation", "Composable skills", "Boss encounter", "Custom engine architecture"],
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
        items: [
          "Implemented texture handling and a SpriteManager",
          "Built the collision system",
          "Created GameObject and GameComponent architecture",
          "Structured shared engine services for the game"
        ]
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
  gameIntro: `<p>Bird Strike was my first university game project and was built in C++ without a commercial engine. Crows enter from random directions in time with the music, and players connect targets to maintain control of the screen.</p><p>Chaining more targets increases attack speed through dynamic beat subdivision. A sun acts as the stage timer, while the second phase raises the tempo and introduces a disruptive enemy. The project also includes score competition and achievements for replayability.</p>`,
  contributions: {
    sections: [
      {
        title: "Rhythm Gameplay Implementation",
        category: "Technical",
        htmlContent: `<section><h2>Rhythm Gameplay Implementation</h2><p>Implemented beat detection against the music timeline and synchronized enemy spawning with the rhythm. The attack interval subdivides as the player connects more targets: two times at four targets, three times at six, and four times at eight.</p><p>Built C++ systems for player motion, crow spawning and management, destination-based movement, dynamic velocity, and direction calculation using <code>atan2</code>.</p></section>`
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
