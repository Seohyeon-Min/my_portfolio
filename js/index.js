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
            var(--clr-intro)
      )
    `;

    // 화면 크기의 절반을 빼서 중심점 보정
    spotlight.style.setProperty("--light-x", `${x - (window.innerWidth / 3)}px`);
    spotlight.style.setProperty("--light-y", `${y - (window.innerHeight / 2)}px`);
});


const filterBtns = document.querySelectorAll('.filter-btn');
const gameWrappers = document.querySelectorAll('.portfolio-wrapper.game');
const techWrappers = document.querySelectorAll('.portfolio-wrapper.tech');

window.addEventListener('DOMContentLoaded', () => {
  setActiveFilter('game');
});

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    setActiveFilter(filter);
  });
});

function setActiveFilter(filter) {
  filterBtns.forEach(b => {
    b.classList.toggle('active', b.dataset.filter === filter);
  });

  gameWrappers.forEach(wrapper => {
    wrapper.style.display = (filter === 'game') ? 'flex' : 'none';
  });

  techWrappers.forEach(wrapper => {
    wrapper.style.display = (filter === 'tech') ? 'flex' : 'none';
  });
}
