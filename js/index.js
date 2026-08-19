// Bilingual UI. English is the default; the visitor's explicit choice persists.
const supportedLanguages = ['en', 'ko'];
const savedLanguage = localStorage.getItem('portfolio-language');
let currentLanguage = supportedLanguages.includes(savedLanguage) ? savedLanguage : 'en';

function ensureLanguageToggle() {
  if (document.querySelector('.language-toggle')) return;

  document.body.insertAdjacentHTML('afterbegin', `
    <div class="language-toggle" role="group" aria-label="Language">
      <button type="button" data-lang="en">EN</button>
      <span aria-hidden="true">/</span>
      <button type="button" data-lang="ko">KR</button>
    </div>
  `);
}

function applyLanguage(language) {
  currentLanguage = supportedLanguages.includes(language) ? language : 'en';
  document.documentElement.lang = currentLanguage === 'ko' ? 'ko' : 'en';

  document.querySelectorAll('[data-en][data-ko]').forEach(element => {
    element.textContent = element.dataset[currentLanguage];
  });

  document.querySelectorAll('.language-toggle button[data-lang]').forEach(button => {
    const isActive = button.dataset.lang === currentLanguage;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

  localStorage.setItem('portfolio-language', currentLanguage);
  document.dispatchEvent(new CustomEvent('portfolio-language-change', {
    detail: { language: currentLanguage }
  }));
}

document.addEventListener('DOMContentLoaded', () => {
  ensureLanguageToggle();
  document.querySelectorAll('.language-toggle button[data-lang]').forEach(button => {
    button.addEventListener('click', () => {
      const requestedLanguage = button.dataset.lang;
      if (requestedLanguage === currentLanguage) return;
      applyLanguage(requestedLanguage);
      if (document.querySelector('.main-content') && document.querySelector('.video-hero')) {
        window.location.reload();
      }
    });
  });
  applyLanguage(currentLanguage);
});

const navToggle = document.querySelector(".nav-toggle")
const navLinks = document.querySelectorAll(".nav__link")

if (navToggle) {
  navToggle.addEventListener("click", () => {
      document.body.classList.toggle("nav-open");
  })
}

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
    if (!spotlight) return;
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
const planningWrappers = document.querySelectorAll('.portfolio-wrapper.planning');

window.addEventListener('DOMContentLoaded', () => {
  setActiveFilter('game'); // 초기 활성 필터
  sortPortfolioItems('game'); // 초기 정렬
});

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    setActiveFilter(filter);
  });
});

document.querySelectorAll('[data-portfolio-filter]').forEach(link => {
  link.addEventListener('click', () => {
    setActiveFilter(link.dataset.portfolioFilter);
  });
});

function setActiveFilter(filter) {
  filterBtns.forEach(b => {
    b.classList.toggle('active', b.dataset.filter === filter);
  });

  // 필터에 맞는 래퍼 선택
  let wrappers;
  if (filter === 'game') {
    wrappers = Array.from(gameWrappers);
  } else if (filter === 'tech') {
    wrappers = Array.from(techWrappers);
  } else {
    wrappers = Array.from(planningWrappers);
  }

  // 표시/숨김 처리
  wrappers.forEach(wrapper => {
    wrapper.style.display = 'flex';
  });

  // 다른 필터의 래퍼는 숨김
  if (filter !== 'game') {
    gameWrappers.forEach(wrapper => wrapper.style.display = 'none');
  }
  if (filter !== 'tech') {
    techWrappers.forEach(wrapper => wrapper.style.display = 'none');
  }
  if (filter !== 'planning') {
    planningWrappers.forEach(wrapper => wrapper.style.display = 'none');
  }

  // 정렬: 핀된 것끼리, 안된 것끼리 최신순
  sortPortfolioItems(filter);
}

function sortPortfolioItems(filter) {
  const portfolioContainer = document.querySelector('.portfolio');
  if (!portfolioContainer) return;

  // 필터에 맞는 래퍼 선택
  let wrappers;
  if (filter === 'game') {
    wrappers = Array.from(gameWrappers);
  } else if (filter === 'tech') {
    wrappers = Array.from(techWrappers);
  } else {
    wrappers = Array.from(planningWrappers);
  }

  // 표시된 래퍼만 필터링
  const visibleWrappers = wrappers.filter(w => w.style.display !== 'none');

  // 각 래퍼의 연도 추출
  visibleWrappers.forEach(wrapper => {
    const yearTag = wrapper.querySelector('.tag.year');
    if (yearTag) {
      const yearText = yearTag.textContent.trim();
      // 연도 추출 (예: "2025", "2024~5" -> 첫 번째 숫자)
      const yearMatch = yearText.match(/(\d{4})/);
      wrapper._sortYear = yearMatch ? parseInt(yearMatch[1]) : 0;
    } else {
      wrapper._sortYear = 0;
    }
    wrapper._isPinned = wrapper.hasAttribute('data-pinned') && wrapper.getAttribute('data-pinned') === 'true';
  });

  // 정렬: 핀된 것 먼저 (최신순), 그 다음 안된 것 (최신순)
  visibleWrappers.sort((a, b) => {
    if (a._isPinned && !b._isPinned) return -1;
    if (!a._isPinned && b._isPinned) return 1;
    // 같은 그룹 내에서는 최신순 (큰 연도가 먼저)
    return b._sortYear - a._sortYear;
  });

  // DOM에서 제거 후 순서대로 다시 추가
  visibleWrappers.forEach(wrapper => {
    portfolioContainer.appendChild(wrapper);
  });
}
