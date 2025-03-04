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
  
    // 마우스 좌표를 저장할 변수
    let mouseX = 0, mouseY = 0;
  
    // (1) 마우스 이동 시 clip-path 갱신
    container.addEventListener("mousemove", (e) => {
      const rect = container.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      overlay.style.clipPath = `circle(80px at ${mouseX}px ${mouseY}px)`;
    });
  
    // (2) 클릭 시 팝 이펙트 & 페이지 이동
    container.addEventListener("click", () => {
      // clip-path를 크게 확장하여 터지는 듯한 애니메이션
      overlay.style.transition = "clip-path 0.6s ease-out";
      overlay.style.clipPath = `circle(3000px at ${mouseX}px ${mouseY}px)`;
  
      // 애니메이션 후 페이지 이동
      setTimeout(() => {
        window.location.href = "index.html";
      }, 600);
    });
  });


  // 마우스 휠 이벤트 감지하여 섹션 변경
window.addEventListener("wheel", (event) => {
    // 🟢 포트폴리오 내부에서는 한 페이지 넘김 적용 안 함
    if (event.target.closest(".portfolio")) return; // 전체 포트폴리오 내부에서는 한 페이지 넘김 X

    if (isScrolling) return;

    if (event.deltaY > 0) { 
        // 아래로 스크롤 → 다음 섹션
        currentIndex = Math.min(currentIndex + 1, sections.length - 1);
    } else {
        // 위로 스크롤 → 이전 섹션
        currentIndex = Math.max(currentIndex - 1, 0);
    }

    // 섹션으로 부드럽게 스크롤 이동
    sections[currentIndex].scrollIntoView({ behavior: "smooth" });

    // 중복 실행 방지 (애니메이션 중 추가 휠 이벤트 방지)
    isScrolling = true;
    setTimeout(() => {
        isScrolling = false;
    }, 1000);
});
