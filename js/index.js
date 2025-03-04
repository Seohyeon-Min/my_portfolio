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

const sections = document.querySelectorAll("section");
const portfolioContainer = document.querySelector(".portfolio"); // 내부 스크롤 예외 처리할 요소
let currentIndex = 0;
let isScrolling = false;

// 마우스 휠 이벤트 감지하여 섹션 변경
window.addEventListener("wheel", (event) => {
    // 🟢 포트폴리오 내부에서는 한 페이지 넘김 적용 안 함
    if (event.target.closest(".portfolio")) return;

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


// 내비게이션 메뉴 클릭 시 해당 섹션으로 이동
document.querySelectorAll(".nav__link").forEach((link, index) => {
    link.addEventListener("click", (event) => {
        event.preventDefault(); // 기본 링크 동작 방지
        currentIndex = index; // 현재 인덱스 업데이트
        sections[currentIndex].scrollIntoView({ behavior: "smooth" });
    });
});
