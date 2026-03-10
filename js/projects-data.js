// 프로젝트 데이터 - 여기서 모든 프로젝트 정보를 관리합니다
const projectsData = {
  // ========== 게임 프로젝트 ==========
  "00_NewManzo": {
    type: "game",
    pinned: true,
    title: "New MANZO",
    subtitle: "Hear the Ocean's Call",
    pageTitle: "NEWMANZO - MSH PORTFOILO",
    heroType: "video", // "video" or "image"
    heroMedia: "../img/NEWMANZO/hunting_mode.mp4",
    overview: "Manzo는 <strong>심해 리듬 어드벤처 게임</strong>으로, 심리적 공포와 탐험 요소가 결합된 작품입니다. 플레이어는 수수께끼의 모스 부호 신호를 따라 바다 깊숙이 숨겨진 비밀을 밝혀나갑니다.",
    features: [
      "리듬 기반 이동",
      "탐험 중심 스토리텔링",
      "역동적인 해저 세계",
      "독특한 보스 전투"
    ],
    experience: {
      role: "Project Lead",
      period: "2025년 8월 – 현재",
      description: "프로젝트 관리, 팀 내 커뮤니케이션, 그래픽스 파이프라인의 기술적 지원을 담당합니다."
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
          title: "Project Lead",
          category: "Project Lead",
          items: [
            "프로젝트 관리, 팀 내 커뮤니케이션, 그래픽스 파이프라인의 기술적 지원"
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
    heroMedia: "../img/THINKTHINK/1.png",
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
    overviewImage: "../img/THINKTHINK/9.png",
    gallery: {
      title: "갤러리",
      subtitle: "게임 스크린샷",
      images: [
        {
          src: "../img/THINKTHINK/2.jpg",
          alt: "게임 스크린샷 2",
          title: "게임 스크린샷 2"
        },
        {
          src: "../img/THINKTHINK/3.jpg",
          alt: "게임 스크린샷 3",
          title: "게임 스크린샷 3"
        },
        {
          src: "../img/THINKTHINK/5.jpg",
          alt: "게임 스크린샷 4",
          title: "게임 스크린샷 4"
        },
        {
          src: "../img/THINKTHINK/7.jpg",
          alt: "게임 스크린샷 5",
          title: "게임 스크린샷 5"
        },
        {
          src: "../img/THINKTHINK/6.jpg",
          alt: "게임 스크린샷 6",
          title: "게임 스크린샷 6"
        },
        {
          src: "../img/THINKTHINK/4.jpg",
          alt: "게임 스크린샷 7",
          title: "게임 스크린샷 7"
        },
        {
          src: "../img/THINKTHINK/8.jpg",
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
      description: "기획 및 예산 관리, 홍보와 진행, 포스터 제작을 맡았습니다."
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
      sections: [
        {
          title: "게임잼 운영",
          category: "Planning",
          subsections: [
            {
              title: "행사 규모",
              items: [
                "총 6팀 24명 참가",
                "4개 전공이 협업한 다학과 연합 프로젝트"
              ]
            },
            {
              title: "커뮤니케이션 및 협력",
              items: [
                "타 학과 학생회와 협업하여 기획안을 공유하고 정기 회의 진행",
                "교수님들과의 협의를 통해 예산 후원 유치 및 행사 승인 설득"
              ]
            },
            {
              title: "성과 및 피드백",
              items: [
                "모든 팀이 36시간 내에 게임을 완성하여 제출",
                "후속 설문에서 만족도 5점 만점에 4.88점 기록",
                "<a href=\"https://docs.google.com/spreadsheets/d/1RMTcImV8HwVklQ0N8yaaPeCMkzDjs6SSY0_QK_7fKPs/edit?usp=sharing\" target=\"_blank\">피드백 폼 보기</a>"
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
