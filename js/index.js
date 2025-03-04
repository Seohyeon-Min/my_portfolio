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
  
  // (2) 클릭 시 팝 이펙트 & 페이지 이동
  container.addEventListener("click", (e) => {
    // clip-path 확장 애니메이션 (기존 효과 유지)
    overlay.style.transition = "clip-path 0.6s ease-out";
    overlay.style.clipPath = `circle(3000px at ${mouseX}px ${mouseY}px)`;
    
    // 파티클 폭발 효과: 여기서 e.clientX, e.clientY를 사용해 전체 화면 기준 좌표로 파티클 생성
    createParticles(e.clientX, e.clientY);
    
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1000);
  });
  
  // 파티클 폭발 효과 함수 (수정된 부분: document.body에 파티클 추가, position: fixed)
  function createParticles(x, y) {
    const numParticles = 50;
    for (let i = 0; i < numParticles; i++) {
      const particle = document.createElement("div");
      particle.classList.add("particle");
      // 파티클을 화면 전체에 표시하도록 fixed로 배치
      particle.style.position = "fixed";
      particle.style.left = x + "px";
      particle.style.top = y + "px";
      const size = Math.random() * 10 + 10;
particle.style.width = size + "px";
particle.style.height = size + "px";
      
      // 랜덤한 방향과 거리 계산
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 1100 + 100; // 50 ~ 250px 범위
      const dx = Math.cos(angle) * distance;
      const dy = Math.sin(angle) * distance;
      
      // CSS 변수로 이동값 전달 (CSS 애니메이션에서 사용)
      particle.style.setProperty('--dx', dx + 'px');
      particle.style.setProperty('--dy', dy + 'px');
      
      // 문서 전체에 파티클 추가
      document.body.appendChild(particle);
    }
    
    // 애니메이션 후 파티클 삭제
    setTimeout(() => {
      document.querySelectorAll(".particle").forEach(p => p.remove());
    }, 1000);
  }
});



  const sections = document.querySelectorAll("section");
  const portfolioContainer = document.querySelector(".portfolio"); // 내부 스크롤 예외 처리할 요소
  let currentIndex = 0;
  let isScrolling = false;
  
  document.addEventListener("DOMContentLoaded", () => {
      const sections = document.querySelectorAll("section");
      let currentIndex = 0;
      let isScrolling = false;
  
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