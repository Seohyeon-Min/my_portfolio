const navToggle = document.querySelector(".nav-toggle")
const navLinks = document.querySelectorAll(".nav__link")

navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
})

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        document.body.classList.remove('nav-open')
    })
})


/**
 * 파티클 컨테이너 생성 → 일정 간격으로 파티클 생성
 */
function showRisingParticles() {
  // 중복 방지
  let container = document.querySelector(".rising-particle-container");
  if (container) container.remove();

  // 새 컨테이너
  container = document.createElement("div");
  container.className = "rising-particle-container";
  document.body.appendChild(container);

  // 파티클 계속 생성 (900ms 간격 예시)
  const spawnInterval = setInterval(() => {
    createOneParticle(container);
  }, 900);

  // 스크롤 제거 대비
  container.dataset.spawnInterval = spawnInterval;
}

/**
 * 파티클 1개 생성: 아래->위, JS로 크기/속도/좌우흔들 조절
 */
function createOneParticle(container) {
  const particle = document.createElement("div");
  particle.className = "rising-particle";

  // (A) 무작위 크기 (5~15px)
  const size = 1 + Math.random() * 8;
  particle.style.width = size + "px";
  particle.style.height = size + "px";

  // (B) 시작 x 위치 (화면 가로폭 내)
  const startX = Math.random() * window.innerWidth;
  particle.style.left = startX + "px";

  // (C) 좌우 흔들 정도 (예: -200~+200 px) 
  //     y이동은 -100~-150vh 등으로
  const randomX = (Math.random() - 0.5) * 200;
  const randomYvh = 100 + Math.random() * 50; // 100~150vh
  // CSS 변수로 넘기기
  particle.style.setProperty("--particle-x", randomX + "px");
  particle.style.setProperty("--particle-y", `-${randomYvh}vh`);

  // (D) 총 지속시간 (예: 4~12초)
  const duration = 4 + Math.random() * 8;
  particle.style.setProperty("--duration", duration + "s");

  // (E) 컨테이너에 삽입
  container.appendChild(particle);

  // 애니메이션 끝나면 제거
  particle.addEventListener("animationend", () => {
    particle.remove();
  });
}



document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".oldTV-container");
  const overlay = document.querySelector(".color_overlay");
  const TV = document.querySelector(".oldTV__img");

  let mouseX = 0, mouseY = 0;

  // (1) 오버레이 초기화
  overlay.style.position = "absolute";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.clipPath = "circle(50px at 50% 50%)";
  overlay.style.opacity = "1";
  overlay.style.transition = "clip-path 0.1s ease-out, opacity 0.3s ease-in-out";

  // (2) 마우스 이동 감지를 전체 화면에서 하지만, 클립 원은 컨테이너 안에서만 표시
  function updateMaskPosition(e) {
    const rect = container.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;

    overlay.style.clipPath = `circle(50px at ${mouseX}px ${mouseY}px)`;
  }

  // 전체 화면에서 마우스 이벤트 감지
  window.addEventListener("mousemove", updateMaskPosition);
  // (2) 클릭 시 확장 효과 (점진적 확장)
  container.addEventListener("click", (e) => {
    const clickX = e.clientX;
    const clickY = e.clientY;

    // `.color_overlay`를 `body`로 이동하여 전체화면 덮을 수 있도록 변경
    document.body.appendChild(overlay);
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100vw";
    overlay.style.height = "100vh";

    let radius = 50;  // 초기 반경
    const maxRadius = Math.max(window.innerWidth, window.innerHeight) * 1.0; // 화면 전체 크기

    function expandOverlay() {
      if (radius < maxRadius) {
        radius += (maxRadius - radius) * 0.009; // 점진적 확대 (가속 효과)
        overlay.style.clipPath = `circle(${radius}px at ${clickX}px ${clickY}px)`;
        requestAnimationFrame(expandOverlay); // 다음 프레임에서 계속 증가
      } else {
        overlay.style.clipPath = `circle(${maxRadius}px at ${clickX}px ${clickY}px)`;
      }
    }

    expandOverlay(); // 애니메이션 시작
    // 메뉴 팝업 효과: 동그란 메뉴들을 생성하여 표시
    showMenuBubbles();

    // 파티클 폭발 효과 (전체 화면 기준)
    createParticles(e.clientX, e.clientY);

    // 물결 상승 효과 추가
    showWaterRise();

    // (새로 추가)
  showRisingParticles();

    // ✅ TV 페이드아웃 효과 적용
    container.style.transition = "opacity 0.3s ease-out"; // 4.5초 동안 페이드 아웃
    container.style.opacity = "0";

    // ✅ opacity 애니메이션 이후 `display: none` 적용 (5초 뒤)
    setTimeout(() => {
      container.style.display = "none";
    }, 4500); // opacity 애니메이션이 끝난 뒤 제거

    // ✅ oldTV-container는 따로 숨김 (너무 빨리 사라지지 않도록 딜레이 추가)
    setTimeout(() => {
      container.style.display = "none";
    }, 5000); // TV보다 0.5초 뒤에 숨김
  });

  // 파티클 폭발 효과 함수 (문서 전체에 생성)
  function createParticles(x, y) {
    const numParticles = 50;
    for (let i = 0; i < numParticles; i++) {
      const particle = document.createElement("div");
      particle.classList.add("particle");
      // 파티클을 화면 전체에 표시하도록 fixed로 배치
      particle.style.position = "fixed";
      particle.style.left = x + "px";
      particle.style.top = y + "px";
      const size = Math.random() * 180 + 10;
      particle.style.width = size + "px";
      particle.style.height = size + "px";
      
      // 랜덤한 방향과 거리 계산
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 2100 + 100; // 50 ~ 250px 범위
      const dx = Math.cos(angle) * distance;
      const dy = Math.sin(angle) * distance;
      particle.style.setProperty('--dx', dx + 'px');
      particle.style.setProperty('--dy', dy + 'px');
      document.body.appendChild(particle);
    }
    setTimeout(() => {
      document.querySelectorAll(".particle").forEach(p => p.remove());
    }, 800);
  }

  // 메뉴 팝업 효과 함수: 동그란 메뉴들을 생성 후 슬라이드 애니메이션 적용
  function showMenuBubbles() {
    // 메뉴 아이템 설정 (원하는 대로 수정 가능)
    const menuItems = [
      { label: "Overview", href: "#about", size: 240, finalLeft: "6%", finalBottom: "10%" },
      { label: "Skills", href: "#skills", size: 180, finalLeft: "1%", finalBottom: "55%" },
      { label: "Portfolio: Game", href: "#G_projects", size: 420, finalLeft: "20%", finalBottom: "58%" },
      { label: "Portfolio: Tech", href: "#T_projects", size: 340, finalLeft: "60%", finalBottom: "10%" },
      { label: "Resume", href: "#resume", size: 145, finalLeft: "75%", finalBottom: "80%" },
      { label: "Education", href: "#resume", size: 220, finalLeft: "85%", finalBottom: "50%" },
      { label: "Contact", href: "#contact", size: 200, finalLeft: "83%", finalBottom: "-3%" }
    ];

    // 메뉴 컨테이너 생성 (없으면 새로 생성)
    let bubbleMenu = document.querySelector(".bubble-menu");
    if (!bubbleMenu) {
      bubbleMenu = document.createElement("div");
      bubbleMenu.className = "bubble-menu";
      document.body.appendChild(bubbleMenu);
    }
    // 메뉴 컨테이너 초기 상태
    bubbleMenu.innerHTML = "";
    bubbleMenu.style.pointerEvents = "auto"; // 메뉴 클릭 가능

    // 각 메뉴 아이템(풍선) 생성
    menuItems.forEach(item => {
      const bubble = document.createElement("a");
      bubble.className = "bubble";
      bubble.href = item.href;
      bubble.textContent = item.label;
      bubble.style.width = item.size + "px";
      bubble.style.height = item.size + "px";
      bubble.style.lineHeight = item.size + "px";
      bubble.style.position = "fixed";
      // 초기 위치: 화면 중앙 아래 (보이지 않는 위치)
      bubble.style.left = "50%";
      bubble.style.bottom = "-100px";
      bubble.style.opacity = "0";
      bubbleMenu.appendChild(bubble);
      
      // 애니메이션: 약간의 딜레이 후 최종 위치로 이동
      setTimeout(() => {
        bubble.style.transition = "all 0.4s ease-out";
        bubble.style.left = item.finalLeft;       // 커스텀 최종 좌측 위치
        bubble.style.bottom = item.finalBottom;     // 커스텀 최종 하단 위치
        bubble.style.opacity = "1";
      }, 0 + Math.random() * 200);  // 각 메뉴가 약간씩 다른 딜레이로 나타남
    });
  }
  
  // 물결 상승 효과 함수
  function showWaterRise() {
    // 기존 water-rise 요소가 있다면 제거
    let waterRise = document.querySelector(".water-rise");
    if (waterRise) waterRise.remove();
    
    waterRise = document.createElement("div");
    waterRise.className = "water-rise";
    document.body.appendChild(waterRise);
    
    // 약간의 딜레이 후 상승 효과 시작
    setTimeout(() => {
      waterRise.classList.add("show");
    }, 50);
  }
});



/////////////////////////////////////////////////////////////////////////////////

const sections = document.querySelectorAll("section");
const portfolioContainer = document.querySelector(".portfolio"); 
let currentIndex = 0;
let isScrolling = false;

/* 스크롤에서 버블이 이미 던져졌는지 여부를 추적하는 변수 */
let bubbleThrown = false;

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  let currentIndex = 0;
  let isScrolling = false;

  window.addEventListener("scroll", () => {
    const bubbleMenu = document.querySelector(".bubble-menu");
    const waterRise = document.querySelector(".water-rise");
    const overlay = document.querySelector(".color_overlay");

    // bubbleMenu나 waterRise가 show 상태면 제거
    if (bubbleMenu && bubbleMenu.classList.contains("show")) {
      bubbleMenu.classList.remove("show");
    }
    if (waterRise && waterRise.classList.contains("show")) {
      waterRise.classList.remove("show");
    }
  // ✨ 아래처럼 remove() 대신 그냥 숨기기
  if (overlay&& overlay.classList.contains("show")) {
    // 투명도 0으로 천천히 숨기기
    overlay.style.transition = "opacity 0.5s ease-out";
    
    // 브라우저에 transition 적용을 인지시킴 (강제 Reflow)
    void overlay.offsetWidth;
  
    // 이제 opacity를 0으로
    overlay.style.opacity = "0";

    // 0.5초 뒤에 display: none
    setTimeout(() => {
      overlay.style.display = "none";

    }, 500);
  }
  const container = document.querySelector(".rising-particle-container");
  if (container) {
    const spawnInterval = container.dataset.spawnInterval;
    clearInterval(spawnInterval);
    container.remove();
  }
  


    // scrollY > 500일 때 oldTV-container 보여주기
    if (window.scrollY > 600) {
      const container = document.querySelector(".oldTV-container");
      bubbleThrown = false;
      if (container) {
        container.style.display = "block";
        container.style.opacity = "1";
        container.style.transition = "opacity 0.5s ease-out";
      }
  
      if (overlay) {
        // 다시 보여줄 때 display=block
        overlay.style.display = "block";
        // overlay를 oldTV-container 내부로 되돌리기
        if (!container.contains(overlay)) {
          container.appendChild(overlay);
        }
        overlay.style.position = "absolute";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
  
        // 강제 리렌더링으로 clip-path & opacity 복구
        overlay.style.clipPath = "circle(50px at 50% 50%)";
        overlay.style.opacity = "1";
        overlay.style.transition = "none"; 
        void overlay.offsetWidth; // Reflow
        overlay.style.transition = "clip-path 0.1s ease-out, opacity 0.3s ease-in-out";
        
      }
    }

    // **버블 던지기 로직을 한 번만 수행**하도록 조건문 추가
    if (bubbleMenu && !bubbleThrown) {
      bubbleThrown = true; // 딱 한 번만 수행하도록 플래그 true

      const bubbles = bubbleMenu.querySelectorAll(".bubble");
      bubbles.forEach(bubble => {
        // 각 버블을 랜덤한 방향으로 던집니다.
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.max(window.innerWidth, window.innerHeight) * 1.5;
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;

        // 0.8초 동안 버블 이동 & 크기 축소 + 투명화
        bubble.style.transition = "transform 0.8s ease-out, opacity 0.4s ease-out";
        bubble.style.transform = `translate(${dx}px, ${dy}px) scale(0)`;
        bubble.style.opacity = "0";
      });
      // 애니메이션이 끝난 후 bubbleMenu 자체 제거
      setTimeout(() => {
        bubbleMenu.remove();
      }, 800);
    }
  });



      window.addEventListener("wheel", (event) => {

          if (isScrolling) return;
  
          if (event.deltaY > 0) {
              currentIndex = Math.min(currentIndex + 1, sections.length - 1);
          } else {
              currentIndex = Math.max(currentIndex - 1, 0);
          }
  
          sections[currentIndex].scrollIntoView({ behavior: "smooth" });
  
          isScrolling = true;
          setTimeout(() => {
              isScrolling = false;
          }, 1000);
      });
  });
  
  
  
  // 내비게이션 메뉴 클릭 시 해당 섹션으로 이동
  document.querySelectorAll(".nav__link").forEach((link, index) => {
      link.addEventListener("click", (event) => {
          event.preventDefault(); // 기본 링크 동작 방지
          currentIndex = index; // 현재 인덱스 업데이트
          sections[currentIndex].scrollIntoView({ behavior: "smooth" });
      });
  });