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

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".oldTV-container");
  const overlay = document.querySelector(".color_overlay");

  let mouseX = 0, mouseY = 0;

  // (1) 마우스 이동 시 clip-path 갱신 (컨테이너 내부 좌표)
  container.addEventListener("mousemove", (e) => {
    const rect = container.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
    overlay.style.clipPath = `circle(50px at ${mouseX}px ${mouseY}px)`;
  });

  // (2) 클릭 시 파티클 폭발, 메뉴 팝업 & oldTV 사라짐
  container.addEventListener("click", (e) => {
    // 오버레이 확장 애니메이션
    overlay.style.transition = "clip-path 0.6s ease-out";
    overlay.style.clipPath = `circle(3000px at ${mouseX}px ${mouseY}px)`;

    // 메뉴 팝업 효과: 동그란 메뉴들을 생성하여 표시
    showMenuBubbles();

    // 파티클 폭발 효과 (전체 화면 기준)
    createParticles(e.clientX, e.clientY);

    // 물결 상승 효과 추가
    showWaterRise();

    // 일정 시간 후 oldTV 컨테이너 사라지게 (fade out 후 display none)
    setTimeout(() => {
      container.style.transition = "opacity 0.5s ease-out";
      container.style.opacity = "0";
    });

    // 완전히 사라지게 하기 위해 1초 후 display none 적용
    setTimeout(() => {
      container.style.display = "none";
    }, 150);
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
      const size = Math.random() * 20 + 10;
      particle.style.width = size + "px";
      particle.style.height = size + "px";
      
      // 랜덤한 방향과 거리 계산
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 1100 + 100; // 50 ~ 250px 범위
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
      { label: "Overview", href: "#overview", size: 180, finalLeft: "12%", finalBottom: "20%" },
      { label: "Portfolio: Game", href: "#portfolio", size: 200, finalLeft: "20%", finalBottom: "50%" },
      { label: "Tech", href: "#tech", size: 150, finalLeft: "60%", finalBottom: "45%" },
      { label: "Education", href: "#education", size: 90, finalLeft: "80%", finalBottom: "55%" },
      { label: "Contact", href: "#contact", size: 65, finalLeft: "50%", finalBottom: "60%" }
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
        bubble.style.transition = "all 0.8s ease-out";
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
    
    // 일정 시간 후 제거 (예: 2초 후)

  }
});



/////////////////////////////////////////////////////////////////////////////////

  const sections = document.querySelectorAll("section");
  const portfolioContainer = document.querySelector(".portfolio"); // 내부 스크롤 예외 처리할 요소
  let currentIndex = 0;
  let isScrolling = false;
  
  document.addEventListener("DOMContentLoaded", () => {
      const sections = document.querySelectorAll("section");
      let currentIndex = 0;
      let isScrolling = false;

      window.addEventListener("scroll", () => {
        const bubbleMenu = document.querySelector(".bubble-menu");
        const waterRise = document.querySelector(".water-rise");
        if (bubbleMenu && bubbleMenu.classList.contains("show")) {
          bubbleMenu.classList.remove("show");
        }
        if (waterRise && waterRise.classList.contains("show")) {
          waterRise.classList.remove("show");
        }
        if (window.scrollY > 500) {
          const container = document.querySelector(".oldTV-container");
          if (container) {
            container.style.display = "block";
            container.style.opacity = "1";
            // 필요하다면 transition도 다시 설정
            container.style.transition = "opacity 0.5s ease-out";
          }
        }
      });

      window.addEventListener("wheel", (event) => {
        const bubbleMenu = document.querySelector(".bubble-menu");
  if (bubbleMenu) {
    const bubbles = bubbleMenu.querySelectorAll(".bubble");
    bubbles.forEach(bubble => {
      // 각 버블을 랜덤한 방향으로 던집니다.
      const angle = Math.random() * Math.PI * 2;
      // 화면 크기의 1.5배 정도의 거리를 이동하면 확실히 화면 밖으로 나감
      const distance = Math.max(window.innerWidth, window.innerHeight) * 1.5;
      const dx = Math.cos(angle) * distance;
      const dy = Math.sin(angle) * distance;
      
      // 0.8초 동안 버블을 이동시키고 크기를 줄이며 투명하게 만듭니다.
      bubble.style.transition = "transform 0.8s ease-out, opacity 0.8s ease-out";
      bubble.style.transform = `translate(${dx}px, ${dy}px) scale(0)`;
      bubble.style.opacity = "0";
    });
    // 애니메이션이 끝난 후 bubbleMenu 자체도 제거
    setTimeout(() => {
      bubbleMenu.remove();
    }, 800);
  }
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