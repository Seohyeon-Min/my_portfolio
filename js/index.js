// Bilingual UI. English is the default; the visitor's explicit choice persists.
const supportedLanguages = ['en', 'ko'];
const savedLanguage = localStorage.getItem('portfolio-language');
let currentLanguage = supportedLanguages.includes(savedLanguage) ? savedLanguage : 'en';

const portfolioTracks = {
  graphics: {
    role: 'TECHNICAL ARTIST · GRAPHICS',
    title: 'Min Seohyeon — Graphics Portfolio',
    statement: {
      en: 'I build real-time visuals, shaders, and performance-aware tools for playable experiences.',
      ko: '실시간 비주얼과 셰이더, 성능을 고려한 제작 도구로 플레이 경험을 만듭니다.'
    },
    evidence: ['SHADERS · VFX', 'C++ · OPENGL', 'REAL-TIME SYSTEMS'],
    proofTitle: 'VISUALS THAT\nSHIP IN ENGINE.',
    proofSummary: {
      en: 'Three projects. One through-line: visual intent translated into responsive, engine-ready systems.',
      ko: '서로 다른 세 프로젝트에서 시각적 의도를 실제로 작동하는 실시간 시스템으로 구현했습니다.'
    },
    proofFacts: [['BUILT', 'Shaders + real-time VFX'], ['SOLVED', 'Readability + feedback'], ['PROVEN IN', 'Unity + custom engine'], ['EVIDENCE', 'Profiling + captures']],
    proofProjects: [
      { key: 'street', title: 'STREET TYPER', lead: 'PROJECT LEAD', meta: 'UI SHADERS · VFX · GAME FEEL', href: 'portfolio_game/06_StreetTyper.html', image: 'img/StreetTyper/title2.png' },
      { key: 'toohot', title: 'TOO HOT!', lead: 'PROJECT LEAD', meta: 'UNITY · SHADOW SHADER · REAL-TIME VFX', href: 'portfolio_game/07_TooHot.html', image: 'img/portfolio_thumbnails/TooHot.png' },
      { key: 'manzo', title: 'MANZO', lead: 'PROJECT LEAD', meta: 'C++ · OPENGL · GLSL', href: 'portfolio_game/01_Manzo.html', image: 'img/portfolio_thumbnails/Manzo.png' }
    ]
  },
  software: {
    role: 'SOFTWARE ENGINEER · INTERACTIVE SYSTEMS',
    title: 'Min Seohyeon — Software Engineering Portfolio',
    statement: {
      en: 'I design interactive systems, debug production problems, and turn visual ideas into maintainable code.',
      ko: '인터랙티브 시스템을 설계하고 제작 과정의 문제를 해결해, 시각적 아이디어를 유지보수 가능한 코드로 구현합니다.'
    },
    evidence: ['C++ · C#', 'SYSTEM DESIGN', 'DEBUGGING · DELIVERY'],
    proofTitle: 'SYSTEMS THAT\nSURVIVE PRODUCTION.',
    proofSummary: {
      en: 'Working games that expose implementation, debugging, engine integration, and technical ownership.',
      ko: '실제로 작동하는 게임을 통해 구현과 디버깅, 엔진 통합, 기술적 오너십을 보여줍니다.'
    },
    proofFacts: [['BUILT WITH', 'C++ · C# · GLSL'], ['SYSTEMS', 'Rendering + gameplay'], ['DEBUGGED', 'Engine + data flow'], ['EVIDENCE', 'Repos + measured results']],
    proofProjects: [
      { key: 'manzo', title: 'MANZO', lead: 'PROJECT LEAD', meta: 'C++ · OPENGL · ENGINE SYSTEMS', href: 'portfolio_game/01_Manzo.html', image: 'img/portfolio_thumbnails/Manzo.png' },
      { key: 'doublehit', title: 'DOUBLE HIT', lead: 'PROJECT LEAD', meta: 'C++ · RAYLIB · GAMEPLAY SYSTEMS', href: 'portfolio_game/03_DoubleHit.html', image: 'img/portfolio_thumbnails/DoubleHit.png' },
      { key: 'birdstrike', title: 'BIRD STRIKE', lead: 'PROJECT LEAD', meta: 'C++ · RHYTHM SYSTEMS · DYNAMIC ATTACKS', href: 'portfolio_game/04_BirdStrike.html', image: 'img/portfolio_thumbnails/BirdStrike.png' }
    ]
  },
  product: {
    role: 'PRODUCTION · EXTERNAL COORDINATION',
    title: 'Min Seohyeon — Game Production Portfolio',
    statement: {
      en: 'I turn ideas into delivered experiences by aligning teams, vendors, logistics, and production decisions.',
      ko: '팀과 외부 업체, 물류와 제작 판단을 연결해 아이디어를 실제 결과물로 완성합니다.'
    },
    evidence: ['EVENT OPERATIONS', 'VENDOR COORDINATION', 'TEAM DELIVERY'],
    proofTitle: 'DECISIONS THAT\nMOVE TEAMS FORWARD.',
    proofSummary: {
      en: 'Events, physical products, and playable projects carried from planning through delivery.',
      ko: '행사와 실물 제품, 플레이 가능한 프로젝트를 기획부터 전달까지 완성한 경험입니다.'
    },
    proofFacts: [
      { en: ['LED', '24 people · 6 teams'], ko: ['리더십', '24명 · 6개 팀'] },
      { en: ['GENERATED', '₩10M total revenue'], ko: ['매출', '총매출 약 1,000만 원'] },
      { en: ['MANAGED', '130+ task backlog'], ko: ['작업 관리', '130개+ 작업 백로그'] },
      { en: ['BUILT', 'Factory-to-customer fulfillment'], ko: ['직접배송 구축', '공장 → 검수 → 구매자'] }
    ],
    proofProjects: [
      { key: 'dangling', title: 'DANGLING*', lead: { en: 'PROJECT LEAD', ko: '프로젝트 리드' }, meta: { en: 'GAME JAM · EVENT OPERATIONS', ko: '게임잼 · 행사 운영' }, href: 'portfolio_planning/Dangling.html', image: 'img/portfolio_thumbnails/Dangling.jpg' },
      { key: 'plush', title: 'PLUSH PRODUCTION', lead: { en: 'INDEPENDENT LEAD', ko: '개인 프로젝트 리드' }, meta: { en: 'DESIGN · VENDOR · FULFILLMENT', ko: '디자인 · 외부 업체 · 배송 운영' }, href: 'portfolio_planning/PlushProduction.html', image: 'img/Plush/real1.jpg' },
      { key: 'toohot', title: 'TOO HOT!', lead: { en: 'PROJECT LEAD', ko: '프로젝트 리드' }, meta: { en: 'TECHNICAL DIRECTION · 130+ TASK BACKLOG', ko: '테크니컬 디렉션 · 130개+ 작업 백로그' }, href: 'portfolio_game/07_TooHot.html', image: 'img/portfolio_thumbnails/TooHot.png' }
    ]
  }
};

function syncProjectTrackLinks(root, track) {
  if (!root) return;
  root.querySelectorAll('a[href*="portfolio_game/"], a[href*="portfolio_planning/"], a[href*="portfolio/"]').forEach(link => {
    const rawHref = link.getAttribute('href');
    if (!rawHref || rawHref.startsWith('http') || rawHref.startsWith('#')) return;
    const url = new URL(rawHref, window.location.href);
    url.searchParams.set('track', track);
    link.setAttribute('href', `${url.pathname.split('/').slice(-2).join('/')}${url.search}${url.hash}`);
  });
}

function applyPortfolioTrack(requestedTrack, updateUrl = true) {
  const track = Object.prototype.hasOwnProperty.call(portfolioTracks, requestedTrack) ? requestedTrack : 'graphics';
  const profile = portfolioTracks[track];
  const app = document.querySelector('.link-start-app');
  if (!app) return;

  app.dataset.track = track;
  localStorage.setItem('portfolio-track', track);
  document.title = profile.title;
  document.querySelectorAll('[data-track-role]').forEach(element => { element.textContent = profile.role; });
  const statement = document.querySelector('[data-track-statement]');
  if (statement) {
    statement.dataset.en = profile.statement.en;
    statement.dataset.ko = profile.statement.ko;
    statement.textContent = profile.statement[currentLanguage];
  }
  document.querySelectorAll('[data-track-evidence]').forEach((element, index) => {
    element.textContent = profile.evidence[index] || '';
  });
  const proofTitle = document.querySelector('[data-proof-title]');
  if (proofTitle) proofTitle.innerHTML = profile.proofTitle.replace('\n', '<br>');
  const proofSummary = document.querySelector('[data-proof-summary]');
  if (proofSummary) {
    proofSummary.dataset.en = profile.proofSummary.en;
    proofSummary.dataset.ko = profile.proofSummary.ko;
    proofSummary.textContent = profile.proofSummary[currentLanguage];
  }
  profile.proofFacts.forEach((fact, index) => {
    const localizedFact = Array.isArray(fact) ? fact : (fact[currentLanguage] || fact.en);
    const label = document.querySelector(`[data-proof-fact-label="${index}"]`);
    const value = document.querySelector(`[data-proof-fact-value="${index}"]`);
    if (label) label.textContent = localizedFact[0];
    if (value) value.textContent = localizedFact[1];
  });
  profile.proofProjects.forEach((project, index) => {
    const card = document.querySelector(`[data-proof-project="${index}"]`);
    if (!card) return;
    const image = card.querySelector('[data-proof-project-image]');
    const title = card.querySelector('[data-proof-project-title]');
    const meta = card.querySelector('[data-proof-project-meta]');
    const projectUrl = new URL(project.href, window.location.href);
    projectUrl.searchParams.set('track', track);
    card.href = `${projectUrl.pathname.split('/').slice(-2).join('/')}${projectUrl.search}${projectUrl.hash}`;
    card.dataset.projectKey = project.key;
    if (title) title.textContent = project.title;
    if (meta) {
      const leadText = typeof project.lead === 'string' ? project.lead : (project.lead[currentLanguage] || project.lead.en);
      const metaText = typeof project.meta === 'string' ? project.meta : (project.meta[currentLanguage] || project.meta.en);
      meta.innerHTML = `<strong>${leadText}</strong><em>${metaText}</em>`;
    }
    if (image) {
      image.hidden = !project.image;
      if (project.image) image.src = project.image;
      image.alt = project.image ? project.title : '';
    }
  });
  syncProjectTrackLinks(document, track);
  document.querySelectorAll('[data-track-select]').forEach(button => {
    const selected = button.dataset.trackSelect === track;
    button.classList.toggle('is-active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });

  updateResumeLinks();

  if (updateUrl) {
    const url = new URL(window.location.href);
    url.searchParams.set('track', track);
    history.replaceState(null, '', `${url.pathname}${url.search}${url.hash || '#entry'}`);
  }
}

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

function updateResumeLinks() {
  const activeTrack = document.querySelector('.link-start-app')?.dataset.track || localStorage.getItem('portfolio-track') || 'graphics';
  const productionTrack = activeTrack === 'product';
  const resumeSelector = 'a[href$="Resume.pdf"], a[href$="Resume_KR.pdf"], a[href$="Resume_TA_Graphics.pdf"], a[href$="Resume_Production.pdf"]';
  document.querySelectorAll(resumeSelector).forEach(link => {
    const currentHref = link.getAttribute('href') || '';
    const prefix = currentHref.startsWith('../') ? '../docs/' : 'docs/';
    const isAlternate = link.hasAttribute('data-resume-alternate');

    link.classList.remove('is-hidden');
    const useProduction = isAlternate ? !productionTrack : productionTrack;
    link.setAttribute('href', `${prefix}${useProduction ? 'Resume_Production.pdf' : 'Resume_TA_Graphics.pdf'}`);
    link.textContent = useProduction ? 'PRODUCTION RESUME ↗' : 'TA / GRAPHICS RESUME ↗';
  });
}

function applyLanguage(language) {
  currentLanguage = supportedLanguages.includes(language) ? language : 'en';
  document.documentElement.lang = currentLanguage === 'ko' ? 'ko' : 'en';

  document.querySelectorAll('[data-en][data-ko]').forEach(element => {
    element.textContent = element.dataset[currentLanguage];
  });

  updateResumeLinks();

  document.querySelectorAll('.language-toggle button[data-lang]').forEach(button => {
    const isActive = button.dataset.lang === currentLanguage;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

  localStorage.setItem('portfolio-language', currentLanguage);

  const portfolioApp = document.querySelector('.link-start-app');
  if (portfolioApp) {
    applyPortfolioTrack(portfolioApp.dataset.track || localStorage.getItem('portfolio-track') || 'graphics', false);
  }

  document.dispatchEvent(new CustomEvent('portfolio-language-change', {
    detail: { language: currentLanguage }
  }));
}

document.addEventListener('DOMContentLoaded', () => {
  ensureLanguageToggle();
  const techDetail = document.querySelector('.portfolio-item-individual');
  if (techDetail && !document.querySelector('.link-start-app')) {
    document.body.classList.add('project-detail-page', 'tech-project-page');
    const track = localStorage.getItem('portfolio-track') || 'graphics';
    const resumeFile = track === 'product' ? 'Resume_Production.pdf' : 'Resume_TA_Graphics.pdf';
    const resumeLabel = track === 'product' ? 'PRODUCTION RESUME ↗' : 'TA / GRAPHICS RESUME ↗';
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      navbar.innerHTML = `
        <a class="project-brand" href="../index.html?track=${track}#archive"><i></i><span>MIN SEOHYEON</span></a>
        <nav class="navbar-menu">
          <a href="../index.html?track=${track}#proof">PROOF REEL</a>
          <a href="../index.html?track=${track}#archive">ALL PROJECTS</a>
          <a href="../docs/${resumeFile}" target="_blank" rel="noopener">${resumeLabel}</a>
        </nav>
      `;
    }
  }
  const requestedTrack = new URLSearchParams(window.location.search).get('track') || 'graphics';
  applyPortfolioTrack(requestedTrack, true);
  document.querySelectorAll('[data-track-select]').forEach(button => {
    button.addEventListener('click', () => applyPortfolioTrack(button.dataset.trackSelect, true));
  });
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

// Single-viewport depth navigation for the Link Start homepage.
// Temporarily disabled for layout review. Change to true to restore the Entry → Proof Reel warp.
const ENABLE_ENTRY_WARP = false;
document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('.link-start-app');
  if (!app) return;

  const scenes = Array.from(app.querySelectorAll('.link-scene'));
  const entryScene = app.querySelector('.link-scene--entry');
  const navButtons = Array.from(app.querySelectorAll('[data-scene-jump]'));
  const prevButton = app.querySelector('[data-scene-prev]');
  const nextButtons = Array.from(app.querySelectorAll('[data-scene-next]'));
  const parallaxItems = Array.from(app.querySelectorAll('[data-parallax]'));
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const warpCanvas = app.querySelector('.link-warp-canvas');
  const warpContext = warpCanvas?.getContext('2d', { alpha: true, desynchronized: true });
  const lightCursor = app.querySelector('.light-cursor');
  const cursorCore = lightCursor?.querySelector('.light-cursor__core');
  const cursorTrails = lightCursor ? Array.from(lightCursor.querySelectorAll('.light-cursor__trail-segment')) : [];
  const hobbyMap = app.querySelector('.hobby-map');
  const hobbyToggle = app.querySelector('[data-hobby-toggle]');
  const hobbyClose = app.querySelector('[data-hobby-close]');
  const hobbyGallery = app.querySelector('[data-hobby-gallery]');
  const hobbyGalleryTrack = app.querySelector('[data-hobby-gallery-track]');
  const hobbyGalleryTitle = app.querySelector('[data-hobby-gallery-title]');
  const hobbyGalleryClose = app.querySelector('[data-hobby-gallery-close]');
  const graphicsCollection = app.querySelector('.graphics-collection');
  const graphicsOpen = app.querySelector('[data-graphics-open]');
  const graphicsClose = app.querySelector('[data-graphics-close]');
  let activeIndex = 0;
  let locked = false;
  let wheelDelta = 0;
  let wheelReset;
  let dragStartY = null;
  let dragScroller = null;
  let warpFrame = null;

  const setHobbyGallery = (open, source = null) => {
    if (!hobbyGallery || !hobbyGalleryTrack) return;
    if (open && source) {
      hobbyGalleryTrack.innerHTML = '';
      source.querySelectorAll('img').forEach((image, index) => {
        const figure = document.createElement('figure');
        const clone = image.cloneNode();
        clone.loading = 'eager';
        figure.append(clone);
        const caption = document.createElement('figcaption');
        caption.textContent = String(index + 1).padStart(2, '0');
        figure.append(caption);
        hobbyGalleryTrack.append(figure);
      });
      if (hobbyGalleryTitle) hobbyGalleryTitle.textContent = source.dataset.galleryTitle || 'GALLERY';
      hobbyGalleryTrack.scrollLeft = 0;
    }
    hobbyGallery.classList.toggle('is-open', open);
    hobbyGallery.setAttribute('aria-hidden', String(!open));
  };

  const setHobbyMap = open => {
    if (!hobbyMap) return;
    if (!open) setHobbyGallery(false);
    hobbyMap.classList.toggle('is-open', open);
    hobbyMap.setAttribute('aria-hidden', String(!open));
    app.classList.toggle('is-hobby-open', open);
  };
  hobbyToggle?.addEventListener('click', event => { event.stopPropagation(); setHobbyMap(true); });
  hobbyClose?.addEventListener('click', event => { event.stopPropagation(); setHobbyMap(false); });
  hobbyGalleryClose?.addEventListener('click', event => { event.stopPropagation(); setHobbyGallery(false); });
  hobbyGalleryTrack?.addEventListener('wheel', event => {
    event.preventDefault();
    event.stopPropagation();
    hobbyGalleryTrack.scrollBy({ left: event.deltaX + event.deltaY, behavior: 'auto' });
  }, { passive: false });
  hobbyGalleryTrack?.addEventListener('keydown', event => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    event.stopPropagation();
    const direction = event.key === 'ArrowRight' ? 1 : -1;
    hobbyGalleryTrack.scrollBy({ left: direction * hobbyGalleryTrack.clientWidth * 0.82, behavior: 'smooth' });
  });
  app.querySelectorAll('[data-hobby-gallery-source]').forEach(source => {
    const openGallery = event => { event.preventDefault(); event.stopPropagation(); setHobbyGallery(true, source); };
    source.addEventListener('click', openGallery);
    source.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') openGallery(event);
    });
  });
  const setGraphicsCollection = open => {
    if (!graphicsCollection) return;
    graphicsCollection.classList.toggle('is-open', open);
    graphicsCollection.setAttribute('aria-hidden', String(!open));
    app.classList.toggle('is-graphics-collection-open', open);
  };
  graphicsOpen?.addEventListener('click', event => { event.stopPropagation(); setGraphicsCollection(true); });
  graphicsClose?.addEventListener('click', event => { event.stopPropagation(); setGraphicsCollection(false); });

  if (lightCursor && cursorCore && window.matchMedia('(pointer: fine)').matches && !reduceMotion.matches) {
    const cursorPoints = Array.from({ length: 5 }, () => ({ x: window.innerWidth / 2, y: window.innerHeight / 2 }));
    const cursorHistory = cursorPoints.map(point => ({ ...point }));
    const cursorTarget = { x: cursorPoints[0].x, y: cursorPoints[0].y };
    let cursorFrame = null;
    let cursorIdleTimer = null;

    let cursorActive = false;

    const animateCursor = () => {
      let remainingDistance = 0;
      cursorPoints.forEach((point, index) => {
        const leader = index === 0 ? cursorTarget : cursorHistory[index];
        if (index === 0) {
          point.x = leader.x;
          point.y = leader.y;
        } else {
          point.x += (leader.x - point.x) * 0.46;
          point.y += (leader.y - point.y) * 0.46;
        }
        remainingDistance += Math.abs(leader.x - point.x) + Math.abs(leader.y - point.y);
      });
      cursorCore.style.transform = `translate3d(${cursorPoints[0].x}px, ${cursorPoints[0].y}px, 0) translate(-50%, -50%)`;
      cursorTrails.forEach((trail, index) => {
        const from = cursorPoints[index];
        const to = cursorPoints[index + 1];
        let startX = from.x;
        let startY = from.y;
        if (index === 0) {
          const dx = to.x - from.x;
          const dy = to.y - from.y;
          const distance = Math.max(0.001, Math.hypot(dx, dy));
          const coreClearance = Math.min(7, distance);
          startX += (dx / distance) * coreClearance;
          startY += (dy / distance) * coreClearance;
        }
        trail.setAttribute('x1', startX.toFixed(1));
        trail.setAttribute('y1', startY.toFixed(1));
        trail.setAttribute('x2', to.x.toFixed(1));
        trail.setAttribute('y2', to.y.toFixed(1));
      });

      if (remainingDistance > 0.35) {
        cursorFrame = window.requestAnimationFrame(animateCursor);
      } else {
        cursorFrame = null;
        lightCursor.classList.add('is-idle');
      }
    };

    app.addEventListener('pointermove', event => {
      cursorTarget.x = event.clientX;
      cursorTarget.y = event.clientY;
      if (!cursorActive) {
        cursorPoints.forEach(point => { point.x = event.clientX; point.y = event.clientY; });
        cursorHistory.forEach(point => { point.x = event.clientX; point.y = event.clientY; });
      }
      const newest = cursorHistory[0];
      if (Math.hypot(event.clientX - newest.x, event.clientY - newest.y) >= 3) {
        cursorHistory.unshift({ x: event.clientX, y: event.clientY });
        cursorHistory.length = cursorPoints.length;
      }
      window.clearTimeout(cursorIdleTimer);
      cursorIdleTimer = window.setTimeout(() => {
        cursorHistory.forEach(point => {
          point.x = cursorTarget.x;
          point.y = cursorTarget.y;
        });
        if (!cursorFrame) cursorFrame = window.requestAnimationFrame(animateCursor);
      }, 90);
      lightCursor.classList.remove('is-idle');
      if (!cursorActive) {
        cursorActive = true;
        lightCursor.classList.add('is-visible');
      }
      lightCursor.classList.toggle('is-hovering', Boolean(event.target.closest('a, button')));
      if (!cursorFrame) cursorFrame = window.requestAnimationFrame(animateCursor);
    }, { passive: true });

    app.addEventListener('pointerleave', () => lightCursor.classList.remove('is-visible'));
    app.addEventListener('pointerenter', () => {
      if (cursorActive) lightCursor.classList.add('is-visible');
    });

    app.addEventListener('pointerdown', event => {
      if (event.pointerType && event.pointerType !== 'mouse') return;
      const burst = document.createElement('span');
      burst.className = 'cursor-click-burst';
      burst.style.left = `${event.clientX}px`;
      burst.style.top = `${event.clientY}px`;
      for (let index = 0; index < 6; index += 1) {
        const ray = document.createElement('i');
        ray.style.setProperty('--ray-angle', `${index * 60}deg`);
        burst.appendChild(ray);
      }
      app.appendChild(burst);
      burst.addEventListener('animationend', () => burst.remove(), { once: true });
    }, { passive: true });
  }

  const warpColors = ['#496fe8', '#8d7cf4', '#22c7d8', '#ff745f', '#f3b43f', '#5bd29a', '#ef5aa8'];
  const warpLines = Array.from({ length: 20 }, (_, index) => ({
    angle: Math.random() * Math.PI * 2,
    radius: 0.08 + Math.pow(Math.random(), 0.58) * 0.92,
    seed: Math.random() * 1000,
    z: 0.12 + Math.random() * 2.08,
    speed: 0.72 + Math.random() * 0.62,
    loopDepth: 1.25 + Math.random() * 0.95,
    length: 0.08 + Math.random() * 0.26,
    width: 1.4 + Math.random() * 2.2,
    curve: Math.random() * 2 - 1,
    revealAt: index * 0.006,
    revealDuration: 0.04 + Math.random() * 0.025,
    color: warpColors[index % warpColors.length]
  }));
  const warpHash = value => {
    const sine = Math.sin(value) * 43758.5453;
    return sine - Math.floor(sine);
  };

  function resizeWarpCanvas() {
    if (!warpCanvas || !warpContext) return;
    const density = 1;
    warpCanvas.width = Math.round(window.innerWidth * density);
    warpCanvas.height = Math.round(window.innerHeight * density);
    warpCanvas.style.width = `${window.innerWidth}px`;
    warpCanvas.style.height = `${window.innerHeight}px`;
    warpContext.setTransform(density, 0, 0, density, 0, 0);
  }

  function startWarpTunnel(direction, onSwitch, onComplete) {
    if (!warpCanvas || !warpContext || reduceMotion.matches) {
      onSwitch();
      onComplete();
      return;
    }

    resizeWarpCanvas();
    window.cancelAnimationFrame(warpFrame);
    app.classList.add('is-tunnel-warping');
    app.classList.add('is-warp-approach');
    app.classList.add('is-warp-lines');
    app.classList.remove('is-entry-consumed');
    document.body.classList.add('is-tunnel-warping');
    app.dataset.warpDirection = direction;
    const duration = 1600;
    const startTime = performance.now();
    let switched = false;

    function draw(now) {
      const raw = Math.min(1, (now - startTime) / duration);
      const travelRaw = raw;
      const travel = Math.pow(travelRaw, 2.2);
      const progress = direction === 'in' ? travel : 1 - travel;
      const width = window.innerWidth;
      const height = window.innerHeight;
      const cx = width * 0.5;
      const cy = height * 0.5;
      const focal = Math.min(width, height) * 0.34;
      const streakRaw = Math.max(0, Math.min(1, raw / 0.68));
      const streakGrowth = Math.pow(streakRaw, 1.8);
      const exitRaw = Math.max(0, Math.min(1, (raw - 0.82) / 0.18));
      const exitShrink = 1 - (exitRaw * exitRaw * (3 - 2 * exitRaw));
      const streakStretch = 0.002 + streakGrowth * 27.998 * exitShrink;

      warpContext.clearRect(0, 0, width, height);
      warpContext.globalCompositeOperation = 'source-over';

      warpLines.forEach(line => {
        const revealRaw = Math.max(0, Math.min(1, (raw - line.revealAt) / line.revealDuration));
        const revealAlpha = revealRaw * revealRaw * (3 - 2 * revealRaw);
        if (revealAlpha <= 0) return;

        let z = line.z - progress * 2.6 * line.speed;
        let cycle = 0;
        while (z <= 0.035) {
          z += line.loopDepth;
          cycle += 1;
        }
        const fogRaw = Math.max(0, Math.min(1, (1.5 - z) / 0.7));
        const depthFog = fogRaw * fogRaw * (3 - 2 * fogRaw);
        const perspectiveNear = Math.max(0, Math.min(1, (1.5 - z) / 1.4));
        const tailZ = z + line.length;
        const cycleSeed = line.seed + cycle * 91.733;
        const angle = cycle === 0 ? line.angle : warpHash(cycleSeed + 37.719) * Math.PI * 2;
        const radial = cycle === 0 ? line.radius : 0.08 + Math.pow(warpHash(cycleSeed + 75.438), 0.58) * 0.92;
        const headScale = focal / z;
        const tailScale = focal / tailZ;
        const hx = cx + Math.cos(angle) * radial * headScale;
        const hy = cy + Math.sin(angle) * radial * headScale;
        const tx = cx + Math.cos(angle) * radial * tailScale;
        const ty = cy + Math.sin(angle) * radial * tailScale;
        const stretchedHx = tx + (hx - tx) * streakStretch;
        const stretchedHy = ty + (hy - ty) * streakStretch;
        const dx = stretchedHx - tx;
        const dy = stretchedHy - ty;
        const projectedLength = Math.max(1, Math.hypot(dx, dy));
        const normalX = -dy / projectedLength;
        const normalY = dx / projectedLength;
        const bend = projectedLength * line.curve * (0.012 + streakRaw * 0.018);
        const controlX = tx + dx * 0.5 + normalX * bend;
        const controlY = ty + dy * 0.5 + normalY * bend;
        const flightFade = Math.max(0, Math.min(1, raw / 0.035));
        const arrivalFade = 1 - Math.max(0, Math.min(1, (raw - 0.95) / 0.05));
        const transitionAlpha = Math.pow(flightFade * arrivalFade, 0.72);
        const lineAlpha = 0.72 + streakGrowth * 0.28;

        const tailWidth = line.width * 0.38;
        const headWidth = line.width * (0.72 + Math.pow(perspectiveNear, 1.45) * 5);
        warpContext.globalAlpha = 0.82 * transitionAlpha * revealAlpha * depthFog * lineAlpha;
        warpContext.strokeStyle = line.color;
        warpContext.lineCap = 'round';

        let previousX = tx;
        let previousY = ty;
        for (let step = 1; step <= 3; step += 1) {
          const t = step / 3;
          const oneMinusT = 1 - t;
          const px = oneMinusT * oneMinusT * tx + 2 * oneMinusT * t * controlX + t * t * stretchedHx;
          const py = oneMinusT * oneMinusT * ty + 2 * oneMinusT * t * controlY + t * t * stretchedHy;
          const widthT = (step - 0.5) / 3;
          warpContext.lineWidth = tailWidth + (headWidth - tailWidth) * Math.pow(widthT, 1.35);
          warpContext.beginPath();
          warpContext.moveTo(previousX, previousY);
          warpContext.lineTo(px, py);
          warpContext.stroke();
          previousX = px;
          previousY = py;
        }
      });
      warpContext.globalAlpha = 1;
      warpContext.globalCompositeOperation = 'source-over';

      if (raw >= 0.62 && !app.classList.contains('is-warp-flight')) {
        if (direction === 'in') {
          app.classList.add('is-entry-consumed');
          if (entryScene) entryScene.hidden = true;
        }
        app.classList.add('is-warp-flight');
      }

      if (!switched && raw >= 0.82) {
        switched = true;
        onSwitch();
        app.classList.remove('is-warp-approach', 'is-warp-lines', 'is-warp-flight');
        app.classList.add('is-warp-arriving');
      }

      if (raw < 1) {
        warpFrame = window.requestAnimationFrame(draw);
      } else {
        if (!switched) onSwitch();
        warpContext.clearRect(0, 0, width, height);
        app.classList.remove('is-tunnel-warping');
        app.classList.remove('is-warp-approach', 'is-warp-lines', 'is-warp-flight', 'is-warp-arriving', 'is-entry-consumed');
        document.body.classList.remove('is-tunnel-warping');
        onComplete();
      }
    }

    warpFrame = window.requestAnimationFrame(draw);
  }

  parallaxItems.forEach(item => {
    item.style.setProperty('--parallax', item.dataset.parallax || '0.3');
  });

  function activateScene(index, immediate = false) {
    const nextIndex = Math.max(0, Math.min(scenes.length - 1, index));
    if (nextIndex === activeIndex && !immediate) return;
    const previousIndex = activeIndex;
    const isEntryTransition = ENABLE_ENTRY_WARP && !immediate && previousIndex === 0 && nextIndex === 1;

    if (isEntryTransition) {
      locked = true;
      startWarpTunnel(nextIndex > previousIndex ? 'in' : 'out', () => {
        activateScene(nextIndex, true);
      }, () => {
        locked = false;
      });
      return;
    }

    activeIndex = nextIndex;
    app.classList.toggle('has-left-entry', activeIndex > 0);

    scenes.forEach((scene, sceneIndex) => {
      scene.hidden = sceneIndex === 0 && activeIndex > 0;
      scene.classList.toggle('is-active', sceneIndex === activeIndex);
      scene.classList.toggle('is-past', sceneIndex < activeIndex);
      scene.classList.toggle('is-near-next', sceneIndex === activeIndex + 1);
      scene.setAttribute('aria-hidden', String(sceneIndex !== activeIndex));
    });

    navButtons.forEach(button => {
      const selected = Number(button.dataset.sceneJump) === activeIndex;
      button.classList.toggle('is-active', selected);
      button.setAttribute('aria-current', selected ? 'step' : 'false');
    });

    app.style.setProperty('--ls-depth', String(activeIndex));
    app.style.setProperty('--ls-progress', String(activeIndex / Math.max(1, scenes.length - 1)));
    if (prevButton) prevButton.disabled = activeIndex === 0;
    nextButtons.forEach(button => button.disabled = activeIndex === scenes.length - 1);

    const sceneName = scenes[activeIndex].dataset.scene || String(activeIndex);
    const sceneUrl = new URL(window.location.href);
    sceneUrl.hash = sceneName;
    history.replaceState(null, '', `${sceneUrl.pathname}${sceneUrl.search}${sceneUrl.hash}`);

    if (!immediate) {
      locked = true;
      window.setTimeout(() => { locked = false; }, reduceMotion.matches ? 80 : 820);
    }
  }

  function stepScene(direction) {
    if (locked) return;
    activateScene(activeIndex + direction);
  }

  app.addEventListener('wheel', event => {
    const galleryScroller = event.target.closest('.hobby-gallery__track');
    if (galleryScroller) {
      event.preventDefault();
      galleryScroller.scrollLeft += event.deltaY || event.deltaX;
      return;
    }

    const sceneScroller = event.target.closest('.archive-panel, .experience-board');
    if (sceneScroller && sceneScroller.scrollHeight > sceneScroller.clientHeight) {
      const atTop = sceneScroller.scrollTop <= 1;
      const atBottom = sceneScroller.scrollTop + sceneScroller.clientHeight >= sceneScroller.scrollHeight - 1;
      const canScroll = (event.deltaY < 0 && !atTop) || (event.deltaY > 0 && !atBottom);
      if (canScroll) {
        wheelDelta = 0;
        return;
      }
    }

    event.preventDefault();
    if (hobbyMap?.classList.contains('is-open') || graphicsCollection?.classList.contains('is-open')) return;
    if (locked) return;
    wheelDelta += event.deltaY;
    window.clearTimeout(wheelReset);
    wheelReset = window.setTimeout(() => { wheelDelta = 0; }, 180);
    if (Math.abs(wheelDelta) < 34) return;
    const direction = wheelDelta > 0 ? 1 : -1;
    wheelDelta = 0;
    stepScene(direction);
  }, { passive: false });

  window.addEventListener('keydown', event => {
    if (!document.body.classList.contains('link-start-home')) return;
    if (event.key === 'Escape' && hobbyMap?.classList.contains('is-open')) {
      event.preventDefault();
      if (hobbyGallery?.classList.contains('is-open')) {
        setHobbyGallery(false);
        return;
      }
      setHobbyMap(false);
      return;
    }
    if (event.key === 'Escape' && graphicsCollection?.classList.contains('is-open')) {
      event.preventDefault();
      setGraphicsCollection(false);
      return;
    }
    if (hobbyMap?.classList.contains('is-open') || graphicsCollection?.classList.contains('is-open')) return;

    const activeScroller = scenes[activeIndex]?.querySelector('.archive-panel, .experience-board');
    const scrollDownKey = ['ArrowDown', 'PageDown', ' '].includes(event.key);
    const scrollUpKey = ['ArrowUp', 'PageUp'].includes(event.key);
    if (activeScroller && (scrollDownKey || scrollUpKey)) {
      const atTop = activeScroller.scrollTop <= 1;
      const atBottom = activeScroller.scrollTop + activeScroller.clientHeight >= activeScroller.scrollHeight - 1;
      const canScroll = (scrollDownKey && !atBottom) || (scrollUpKey && !atTop);
      if (canScroll) {
        event.preventDefault();
        const distance = event.key.startsWith('Arrow') ? 90 : activeScroller.clientHeight * 0.82;
        activeScroller.scrollBy({ top: scrollDownKey ? distance : -distance, behavior: 'smooth' });
        return;
      }
    }

    if (['ArrowDown', 'ArrowRight', 'PageDown', ' '].includes(event.key)) {
      event.preventDefault();
      stepScene(1);
    } else if (['ArrowUp', 'ArrowLeft', 'PageUp'].includes(event.key)) {
      event.preventDefault();
      stepScene(-1);
    } else if (event.key === 'Home') {
      event.preventDefault();
      activateScene(0);
    } else if (event.key === 'End') {
      event.preventDefault();
      activateScene(scenes.length - 1);
    }
  });

  app.addEventListener('pointerdown', event => {
    if (event.target.closest('.hobby-gallery__track')) {
      dragStartY = null;
      dragScroller = null;
      return;
    }
    const sceneScroller = event.target.closest('.archive-panel, .experience-board');
    if (sceneScroller && sceneScroller.scrollHeight > sceneScroller.clientHeight) {
      dragStartY = event.pointerType !== 'mouse' ? event.clientY : null;
      dragScroller = event.pointerType !== 'mouse' ? sceneScroller : null;
      return;
    }
    dragScroller = null;
    if (event.pointerType !== 'mouse') dragStartY = event.clientY;
  }, { passive: true });
  app.addEventListener('pointerup', event => {
    if (dragStartY === null || event.pointerType === 'mouse') return;
    const travel = dragStartY - event.clientY;
    dragStartY = null;
    if (dragScroller) {
      const atTop = dragScroller.scrollTop <= 1;
      const atBottom = dragScroller.scrollTop + dragScroller.clientHeight >= dragScroller.scrollHeight - 1;
      dragScroller = null;
      if (Math.abs(travel) > 42 && ((travel > 0 && atBottom) || (travel < 0 && atTop))) {
        stepScene(travel > 0 ? 1 : -1);
      }
      return;
    }
    if (Math.abs(travel) > 42) stepScene(travel > 0 ? 1 : -1);
  }, { passive: true });
  app.addEventListener('pointercancel', () => { dragStartY = null; dragScroller = null; });

  app.addEventListener('pointermove', event => {
    if (reduceMotion.matches) return;
    const x = (event.clientX / window.innerWidth - 0.5) * 34;
    const y = (event.clientY / window.innerHeight - 0.5) * 26;
    app.style.setProperty('--ls-mx', `${x.toFixed(2)}px`);
    app.style.setProperty('--ls-my', `${y.toFixed(2)}px`);
  }, { passive: true });
  app.addEventListener('pointerleave', () => {
    app.style.setProperty('--ls-mx', '0px');
    app.style.setProperty('--ls-my', '0px');
  });

  window.addEventListener('resize', resizeWarpCanvas, { passive: true });

  navButtons.forEach(button => {
    button.addEventListener('click', event => {
      event.preventDefault();
      activateScene(Number(button.dataset.sceneJump));
    });
  });
  prevButton?.addEventListener('click', () => stepScene(-1));
  nextButtons.forEach(button => button.addEventListener('click', () => stepScene(1)));

  const hashScene = window.location.hash.replace('#', '');
  const hashIndex = scenes.findIndex(scene => scene.dataset.scene === hashScene);
  activateScene(hashIndex >= 0 ? hashIndex : 0, true);
});
