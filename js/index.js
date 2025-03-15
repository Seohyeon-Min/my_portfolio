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

// Help iframe of webgl demos get access to the keyboard by giving them focus when clicked
document.addEventListener("DOMContentLoaded", function () {
    const iframe = document.getElementById("demo");
    if (!iframe) {
        return;
    }
    iframe.addEventListener("load", function () {
        try {
            const iframeDoc = iframe.contentWindow.document;
            iframeDoc.addEventListener("mousedown", function () {
                iframe.contentWindow.Module.canvas.focus();
            });
        } catch (e) {
            console.error(e);
        }
    });
});


const spotlight = document.querySelector(".spotlight_container");

document.addEventListener("mousemove", (e) => {
    const { clientX: x, clientY: y } = e;

    spotlight.style.setProperty("--x", `${x}px`);
    spotlight.style.setProperty("--y", `${y}px`);
    spotlight.style.background = `
      radial-gradient(
        circle 150px at ${x}px ${y}px,
        rgba(255, 255, 255, 0.2),
        rgba(0, 0, 0, 0.95)
      )
    `;

    // 화면 크기의 절반을 빼서 중심점 보정
    spotlight.style.setProperty("--light-x", `${x - (window.innerWidth / 3)}px`);
    spotlight.style.setProperty("--light-y", `${y - (window.innerHeight / 2)}px`);
});


document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const portfolioItems = document.querySelectorAll(".portfolio__item");
  
    // 초기 상태: game 태그만 표시
    filterItems("game");
  
    // 버튼 클릭 이벤트
    filterButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        // 모든 버튼의 active 클래스 제거
        filterButtons.forEach(b => b.classList.remove("active"));
        // 현재 클릭된 버튼만 active
        btn.classList.add("active");
  
        // data-filter 값 가져오기
        const filterValue = btn.getAttribute("data-filter");
        // 필터링
        filterItems(filterValue);
      });
    });
  
    function filterItems(tag) {
      portfolioItems.forEach(item => {
        // item에 해당 태그 클래스가 있으면 표시, 없으면 숨김
        if (item.classList.contains(tag)) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
    }
  });