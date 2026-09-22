// Bilingual UI. English is the default; the visitor's explicit choice persists.
const supportedLanguages = ['en', 'ko'];
const savedLanguage = localStorage.getItem('portfolio-language');
let currentLanguage = supportedLanguages.includes(savedLanguage) ? savedLanguage : 'en';

const portfolioTracks = {
  graphics: {
    role: 'TECHNICAL ARTIST · GRAPHICS',
    title: 'Min Seohyeon — Graphics Portfolio',
    statement: {
      en: 'I make visuals through code.',
      ko: '코드로 비주얼을 만듭니다.'
    },
    evidence: ['SHADERS · VFX', 'C++ · OPENGL', 'ART DIRECTION'],
    proofTitle: 'VISUALS, CODE, ENGINE.',
    proofSummary: {
      en: 'Four representative projects across shaders, rendering, VFX, and technical art.',
      ko: '셰이더, 렌더링, VFX, 테크니컬 아트에 걸친 네 개의 대표 프로젝트입니다.'
    },
    proofProjects: [
      { key: 'poseidon', title: 'POSEIDON SKATE', lead: 'TECHNICAL ART / SHADER', meta: 'UNITY URP · HLSL · BLENDER · TEAM PROJECT', href: 'portfolio_game/08_PoseidonSkate.html', image: 'img/WaveSimulator/img1.png' },
      { key: 'manzo', title: 'MANZO · CUSTOM RENDERER', lead: 'GRAPHICS / ENGINE PROGRAMMER', meta: 'OPENGL · PING-PONG FBO · POST-PROCESSING', href: 'portfolio_game/01_Manzo.html', image: 'img/portfolio_thumbnails/Manzo.png' },
      { key: 'toohot', title: 'TOO HOT!', lead: 'PROJECT LEAD', meta: 'UNITY · SHADOW SHADER · REAL-TIME VFX', href: 'portfolio_game/07_TooHot.html', image: 'img/portfolio_thumbnails/TooHot.png' },
      { key: 'street', title: 'STREET TYPER', lead: 'PROJECT LEAD', meta: 'UI SHADERS · VFX · GAME FEEL', href: 'portfolio_game/06_StreetTyper.html', image: 'img/StreetTyper/title2.png' }
    ]
  },
  software: {
    role: 'GAMEPLAY PROGRAMMER',
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
    proofProjects: [
      { key: 'newmanzo', title: 'NEW MANZO', lead: 'PRIMARY C# CONTRIBUTOR', meta: 'UNITY · C# · GAMEPLAY / SYSTEMS', href: 'portfolio_game/00_NewManzo.html', image: 'img/portfolio_thumbnails/NewManzo.png' },
      { key: 'manzo', title: 'MANZO · CUSTOM RENDERER', lead: 'GRAPHICS / ENGINE PROGRAMMER', meta: 'OPENGL · PING-PONG FBO · MULTI-PASS', href: 'portfolio_game/01_Manzo.html', image: 'img/portfolio_thumbnails/Manzo.png' },
      { key: 'doublehit', title: 'DOUBLE HIT · CUSTOM ENGINE', lead: 'ENGINE PROGRAMMER', meta: 'GAMEOBJECT · COMPONENTS · COLLISION', href: 'portfolio_game/03_DoubleHit.html', image: 'img/portfolio_thumbnails/DoubleHit.png' }
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
    url.searchParams.set('from', link.closest('[data-scene="proof"]') ? 'proof' : 'archive');
    link.setAttribute('href', `${url.pathname.split('/').slice(-2).join('/')}${url.search}${url.hash}`);
  });
}

// Decorative background "vine" ribbons, one per home scene — same construction as the
// prototypes/vine-effect.html prototype (a smoothly-tapered filled ribbon revealed via a
// dash-animated mask, not a flat stroke), grown in once when the page loads and then left
// settled as a static background accent behind that scene's real content.
function initSceneVines() {
  const svgs = document.querySelectorAll('[data-vine-variant]');
  if (!svgs.length) return;
  const svgNS = 'http://www.w3.org/2000/svg';

  const VINE_PATHS = {
    1: ['M 780,-60 C 940,30 1000,170 900,300 C 800,430 960,450 880,570 C 790,700 580,660 440,610 C 300,560 330,450 190,470 C 40,490 20,630 -80,560 C -170,500 -100,370 30,330 C 160,290 110,160 40,80 C -20,10 -100,-30 -190,-100'],
    // Entry scene only, portrait viewBox (see applyResponsiveVineVariant below): variant "1"
    // is drawn for a 1000x700 landscape frame, so on a phone-width viewport `slice` zooms so far
    // into it that only a near-straight sliver of the curve was ever visible. Two short strands —
    // one hugging the top, one hugging the bottom of a 500x900 frame — read better on a tall,
    // narrow screen than one curve stretched down the whole thing, and leave the middle (where the
    // hero text sits) clear.
    '1m': [
      'M 480,-60 C 560,40 420,120 300,160 C 160,200 220,270 100,250 C 20,235 -30,150 -90,190',
      'M -90,720 C -10,680 30,770 150,750 C 290,725 250,650 390,675 C 480,690 520,770 590,810'
    ],
    2: ['M -150,-100 C 40,-30 -20,150 160,180 C 340,210 280,30 450,0 C 580,-22 560,110 690,90 C 780,76 760,-40 620,-90'],
    3: ['M 1150,-100 C 960,-10 1040,180 860,190 C 700,198 760,40 590,60 C 460,76 500,190 360,150 C 260,120 300,10 200,-60 C 140,-100 70,-90 -40,-120'],
    4: ['M -100,530 C 60,470 10,620 150,600 C 280,580 260,500 380,490 C 460,483 430,560 500,640'],
    5: [
      'M -100,110 C 40,80 30,160 170,140 C 320,118 300,-60 460,-90 C 620,-115 700,20 780,10 C 860,0 900,-40 1000,-60',
      'M 0,700 C 120,680 140,560 280,540 C 400,525 460,660 550,690 C 650,715 720,560 850,520 C 950,500 1050,460 1150,430'
    ]
  };

  const WIDTH_PROFILE = [3, 22, 6, 26, 4, 20, 3, 16];
  const STRANDS = [
    { dx: 0, dy: 0, opacity: 1, color: '#7c5cff', scale: 1 },
    { dx: 9, dy: 7, opacity: 0.6, color: '#8a6ef0', scale: 0.45 },
    { dx: -7, dy: -9, opacity: 0.4, color: '#a394f5', scale: 0.25 }
  ];
  const SAMPLE_COUNT = 90;
  const MASK_STROKE_WIDTH = 70;

  const smoothstep = t => t * t * (3 - 2 * t);
  const widthAt = t => {
    const kf = WIDTH_PROFILE;
    const kt = t * (kf.length - 1);
    const k0 = Math.floor(kt);
    const k1 = Math.min(kf.length - 1, k0 + 1);
    const w = kf[k0] + (kf[k1] - kf[k0]) * smoothstep(kt - k0);
    const edgeTaper = Math.min(1, t / 0.035, (1 - t) / 0.035);
    return Math.max(0, w) * Math.max(0, edgeTaper);
  };
  const buildRibbonPath = (centerPts, dx, dy, widthScale) => {
    const left = [];
    const right = [];
    centerPts.forEach(p => {
      const half = (p.w * widthScale) / 2;
      left.push((p.x + dx + p.nx * half).toFixed(2) + ',' + (p.y + dy + p.ny * half).toFixed(2));
      right.push((p.x + dx - p.nx * half).toFixed(2) + ',' + (p.y + dy - p.ny * half).toFixed(2));
    });
    right.reverse();
    const path = document.createElementNS(svgNS, 'path');
    path.setAttribute('d', 'M ' + left.join(' L ') + ' L ' + right.join(' L ') + ' Z');
    return path;
  };

  // Entry scene ("first page") only: below the desktop breakpoint it uses the portrait "1m"
  // variant/viewBox instead of "1". dataset.vineBaseVariant keeps the original number around so
  // this can be recomputed on every resize (a phone rotated, or a desktop window dragged narrow)
  // instead of only ever being decided once at page load.
  svgs.forEach(svg => {
    if (!svg.dataset.vineBaseVariant) svg.dataset.vineBaseVariant = svg.dataset.vineVariant;
  });
  const effectiveVariant = svg => {
    const base = svg.dataset.vineBaseVariant;
    const isMobileViewport = window.matchMedia('(max-width: 768px)').matches;
    return (isMobileViewport && base === '1') ? '1m' : base;
  };

  const buildVine = (svg, variant) => {
    const paths = VINE_PATHS[variant];
    if (!paths) return;
    svg.setAttribute('viewBox', variant === '1m' ? '0 0 500 900' : '0 0 1000 700');
    svg.innerHTML = '';
    svg.dataset.vineVariant = variant;
    svg.dataset.vineBuiltFor = variant;
    const defs = document.createElementNS(svgNS, 'defs');
    svg.appendChild(defs);
    const maskPaths = [];

    paths.forEach((d, groupIndex) => {
      const measure = document.createElementNS(svgNS, 'path');
      measure.setAttribute('d', d);
      measure.style.visibility = 'hidden';
      svg.appendChild(measure);
      const totalLength = measure.getTotalLength();
      const centerPts = [];
      for (let i = 0; i <= SAMPLE_COUNT; i++) {
        const t = i / SAMPLE_COUNT;
        const pt = measure.getPointAtLength(t * totalLength);
        centerPts.push({ x: pt.x, y: pt.y, t });
      }
      for (let i = 0; i <= SAMPLE_COUNT; i++) {
        const prev = centerPts[Math.max(0, i - 1)];
        const next = centerPts[Math.min(SAMPLE_COUNT, i + 1)];
        const tx = next.x - prev.x;
        const ty = next.y - prev.y;
        const tl = Math.hypot(tx, ty) || 1;
        centerPts[i].nx = -ty / tl;
        centerPts[i].ny = tx / tl;
        centerPts[i].w = widthAt(centerPts[i].t);
      }
      svg.removeChild(measure);

      const maskId = `scene-vine-mask-${svg.dataset.vineVariant}-${groupIndex}-${Math.random().toString(36).slice(2, 8)}`;
      const mask = document.createElementNS(svgNS, 'mask');
      mask.setAttribute('id', maskId);
      mask.setAttribute('maskUnits', 'userSpaceOnUse');
      const maskPath = document.createElementNS(svgNS, 'path');
      maskPath.setAttribute('d', d);
      maskPath.setAttribute('fill', 'none');
      maskPath.setAttribute('stroke', '#fff');
      maskPath.setAttribute('stroke-width', String(MASK_STROKE_WIDTH));
      maskPath.setAttribute('stroke-linecap', 'round');
      maskPath.setAttribute('stroke-linejoin', 'round');
      mask.appendChild(maskPath);
      defs.appendChild(mask);

      const g = document.createElementNS(svgNS, 'g');
      g.setAttribute('mask', `url(#${maskId})`);
      svg.appendChild(g);

      STRANDS.forEach(strand => {
        const ribbon = buildRibbonPath(centerPts, strand.dx, strand.dy, strand.scale);
        ribbon.setAttribute('fill', strand.color);
        ribbon.setAttribute('stroke', 'none');
        ribbon.setAttribute('opacity', String(strand.opacity));
        g.appendChild(ribbon);
      });

      maskPath.style.strokeDasharray = String(totalLength);
      maskPath.style.transition = 'none';
      maskPath.style.strokeDashoffset = String(totalLength);
      maskPaths.push({ el: maskPath, delay: groupIndex * 500, length: totalLength });
    });

    // Built hidden (full dashoffset) and left that way — playSceneVine() is what
    // actually grows it in, called from activateScene() the moment this scene
    // becomes active, not here. That's what makes the reveal start exactly when
    // the page is switched to, instead of everything growing in at page load
    // while only the entry scene is visible.
    svg._playVine = () => {
      maskPaths.forEach(({ el, delay, length }) => {
        // Snap back to fully hidden first (no transition) so revisiting this
        // scene always redraws the vine from scratch, even mid-animation.
        window.clearTimeout(el._vineTimer);
        el.style.transition = 'none';
        el.style.strokeDashoffset = String(length);
        el.getBoundingClientRect();
        el._vineTimer = window.setTimeout(() => {
          requestAnimationFrame(() => {
            el.style.transition = 'stroke-dashoffset 2.4s cubic-bezier(0.65, 0, 0.35, 1)';
            el.style.strokeDashoffset = '0';
          });
        }, delay);
      });
    };
  };

  svgs.forEach(svg => buildVine(svg, effectiveVariant(svg)));

  // Re-check on resize (window dragged narrower/wider, phone rotated) instead of only ever
  // deciding once at page load — a scene left mid-viewport-change would otherwise keep whichever
  // variant happened to be active when the page first opened.
  let resizeVineTimer;
  window.addEventListener('resize', () => {
    window.clearTimeout(resizeVineTimer);
    resizeVineTimer = window.setTimeout(() => {
      svgs.forEach(svg => {
        const next = effectiveVariant(svg);
        if (svg.dataset.vineBuiltFor === next) return;
        buildVine(svg, next);
        // Rebuilding replaces the SVG's content, so a scene that's on screen right now needs its
        // vine grown back in immediately rather than sitting empty until its next activation.
        const scene = svg.closest('.link-scene');
        if (scene && scene.classList.contains('is-active')) svg._playVine();
      });
    }, 150);
  }, { passive: true });
}

// Called from activateScene() whenever a scene becomes the active one — grows that
// scene's vine in from scratch every time, including revisits, not just the first time.
function playSceneVine(scene) {
  scene?.querySelector('[data-vine-variant]')?._playVine?.();
}

function refreshArchiveLayout(track) {
  const archiveGrid = document.querySelector('.link-archive-grid');
  if (!archiveGrid) return;
  // Keep the original project nodes: filtering a category must never discard
  // its third and fourth projects on the next track or language refresh.
  const existingCards = archiveGrid._projectCards || [...archiveGrid.querySelectorAll(':scope > a')];
  archiveGrid._projectCards = existingCards;
  archiveGrid.closest('.archive-panel')?.classList.remove('has-expanded-category');
  if (track !== 'graphics') {
    archiveGrid.querySelectorAll('.archive-category').forEach(section => section.remove());
    archiveGrid.innerHTML = '';
    const productionKeys = ['Dangling.html', 'PlushProduction.html'];
    if (track === 'product') {
      const groups = [
        ['PRODUCTION', productionKeys, 'archive-category--production'],
        ['LEADERSHIP', ['07_TooHot.html', '06_StreetTyper.html', '01_Manzo.html', '00_NewManzo.html'], 'archive-category--leadership'],
        ['OTHER PROJECTS', [], 'archive-category--other']
      ];
      const assigned = new Set();
      groups.forEach(([label, keys, extraClass]) => {
        const cards = keys.length
          ? existingCards.filter(card => keys.some(key => card.getAttribute('href')?.includes(key)))
          : existingCards.filter(card => !assigned.has(card));
        cards.forEach(card => assigned.add(card));
        if (!cards.length) return;
        const section = document.createElement('section');
        section.className = `archive-category ${extraClass}`;
        section.innerHTML = `<h3>${label}</h3><div class="archive-category__grid"></div>`;
        cards.forEach(card => section.querySelector('.archive-category__grid').appendChild(card));
        archiveGrid.appendChild(section);
      });
      return;
    }
    existingCards.filter(card => !productionKeys.some(key => card.getAttribute('href')?.includes(key))).forEach(card => archiveGrid.appendChild(card));
    const productionCards = existingCards.filter(card => productionKeys.some(key => card.getAttribute('href')?.includes(key)));
    if (productionCards.length) {
      const section = document.createElement('section');
      section.className = 'archive-category archive-category--production';
      section.innerHTML = '<h3>PRODUCTION</h3><div class="archive-category__grid"></div>';
      productionCards.forEach(card => section.querySelector('.archive-category__grid').appendChild(card));
      archiveGrid.appendChild(section);
    }
    return;
  }
  // The graphics / technical-art track gets its own overview: category cards
  // mirror the portfolio's disciplines while the other tracks retain their
  // existing, project-first archive layout above.
  // No separate icon box — the category's own first letter is set oversized inline at the start of
  // its own title (see .archive-category__cap), so the "icon" is just typography, not a second mark.
  const groups = [
    ['SHADERS', 'Shaders and real-time rendering effects.', '셰이더를 활용한 그래픽 효과와 렌더링 실험들입니다.', ['07_TooHot.html', 'PoseidonSkate']],
    ['RENDERING', 'Rendering pipelines and custom renderer experiments.', '렌더링 파이프라인과 커스텀 렌더러, 최적화 관련 프로젝트입니다.', ['01_Manzo.html']],
    ['VISUALS', 'Art, UI, and VFX for interactive experiences.', '아트, UI/UX, 이펙트 등 비주얼 중심의 작업물입니다.', ['06_StreetTyper.html', '00_NewManzo.html', 'ArtGallery.html']],
    ['GAME PROGRAMMING', 'Gameplay, systems, and engine development.', '게임플레이, 시스템, 엔진 개발 등 프로그래밍 기반의 프로젝트입니다.', ['04_BirdStrike.html', '03_DoubleHit.html', '05_ThinkThink.html', '02_EdgeDirve.html']],
    ['PRODUCTION', 'Planning, collaboration, and creative delivery.', '기획, 협업 등 제작 과정 전반의 프로젝트입니다.', ['PlushProduction.html', 'Dangling.html']]
  ];
  archiveGrid.innerHTML = '';
  groups.forEach(([label, descriptionEn, descriptionKo, keys]) => {
    const cards = existingCards.filter(card => keys.some(key => card.getAttribute('href')?.includes(key)));
    if (!cards.length) return;
    const section = document.createElement('section');
    section.className = `archive-category archive-category--overview${label === 'PRODUCTION' ? ' archive-category--production' : ''}`;
    // SHADERS' fundamentals button is separate navigation (the 8 GLSL/rendering studies), not part of
    // the count-based card layout below, so it always renders regardless of card count.
    const isShaders = label === 'SHADERS';
    const footer = isShaders
      ? `<button type="button" class="archive-category__all archive-category__all--fundamentals" data-graphics-open><span data-en="GRAPHICS FUNDAMENTALS" data-ko="그래픽스 펀더맨탈">${currentLanguage === 'ko' ? '그래픽스 펀더맨탈' : 'GRAPHICS FUNDAMENTALS'}</span><b>↗</b></button>`
      : '';
    section.innerHTML = `<header class="archive-category__header"><h3><span class="archive-category__cap" aria-hidden="true">${label.charAt(0)}</span>${label.slice(1)}</h3></header><p data-en="${descriptionEn}" data-ko="${descriptionKo}">${currentLanguage === 'ko' ? descriptionKo : descriptionEn}</p><div class="archive-category__grid"></div>${footer}`;
    const target = section.querySelector('.archive-category__grid');
    target.tabIndex = 0;
    target.setAttribute('aria-label', `${label} projects`);
    // No more "show 3, hide the rest behind VIEW ALL" — every card in a category is always on screen.
    // Instead the grid's own arrangement adapts to how many cards there are (see the [data-count] rules
    // in style.css): 1 big card, 2 stacked, 3 = big top + 2 below, 2x2 for 4, big top + 2x2 for 5, and a
    // generic "big top + wrapping grid" fallback for anything larger.
    target.dataset.count = cards.length <= 5 ? String(cards.length) : 'many';
    cards.forEach(card => target.appendChild(card));
    archiveGrid.appendChild(section);
  });
}

function applyPortfolioTrack(requestedTrack, updateUrl = true) {
  const track = Object.prototype.hasOwnProperty.call(portfolioTracks, requestedTrack) ? requestedTrack : 'graphics';
  const profile = portfolioTracks[track];
      const app = document.querySelector('.link-start-app');
    if (!app) return;
  app.dataset.track = track;
  refreshArchiveLayout(track);
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
  profile.proofProjects.forEach((project, index) => {
    const card = document.querySelector(`[data-proof-project="${index}"]`);
    if (!card) return;
    const image = card.querySelector('[data-proof-project-image]');
    const title = card.querySelector('[data-proof-project-title]');
    const meta = card.querySelector('[data-proof-project-meta]');
    const projectUrl = new URL(project.href, window.location.href);
    if (projectUrl.origin === window.location.origin) {
      projectUrl.searchParams.set('track', track);
      card.href = `${projectUrl.pathname.split('/').slice(-2).join('/')}${projectUrl.search}${projectUrl.hash}`;
    } else {
      card.href = project.href;
    }
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
  document.querySelectorAll('[data-proof-project]').forEach(card => {
    card.hidden = Number(card.dataset.proofProject) >= profile.proofProjects.length;
  });
  const proofProjectsGrid = document.querySelector('.proof-reel__projects');
  proofProjectsGrid?.classList.toggle('is-four', profile.proofProjects.length === 4);
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
  // index.html already has a static .language-toggle in its markup (unlike the project-detail
  // pages, which get theirs inserted here) — grab that existing one instead of bailing out, or
  // the intro/resting timing below would never run on the homepage at all.
  let toggle = document.querySelector('.language-toggle');
  if (!toggle) {
    document.body.insertAdjacentHTML('afterbegin', `
      <div class="language-toggle" role="group" aria-label="Language">
        <button type="button" data-lang="en">EN</button>
        <span aria-hidden="true">/</span>
        <button type="button" data-lang="ko">KR</button>
      </div>
    `);
    toggle = document.querySelector('.language-toggle');
  }
  // Only ever start this timer once per page load, no matter how many times this function
  // gets called (e.g. on every track switch) — a second timer would restart the fade-out.
  if (toggle.dataset.introTimed) return;
  toggle.dataset.introTimed = 'true';
  if (document.body.classList.contains('project-detail-page') || document.body.classList.contains('link-start-home') || /\/(portfolio_game|portfolio_planning|portfolio)\//.test(location.pathname)) {
    toggle.classList.add('language-toggle--intro');
    window.setTimeout(() => {
      toggle.classList.remove('language-toggle--intro');
      toggle.classList.add('language-toggle--resting');
      // Home only: once it's settled into "resting" (hidden until hovered), it stays that
      // way for the rest of the visit — scene navigation (entry → proof reel, etc.) never
      // rebuilds this toggle or re-runs this timer, so switching scenes can't bring it back.
    }, 1800);
  }
}

const RESUME_BY_TRACK = {
  graphics: { file: 'Resume_TA_Graphics.pdf', label: 'TA / GRAPHICS RESUME ↗' },
  software: { file: 'Resume_Gameplay_Engineer.pdf', label: 'GAMEPLAY ENGINEER RESUME ↗' },
  product: { file: 'Resume_Production.pdf', label: 'PRODUCTION RESUME ↗' }
};

function updateResumeLinks() {
  const activeTrack = document.querySelector('.link-start-app')?.dataset.track || localStorage.getItem('portfolio-track') || 'graphics';
  const primary = RESUME_BY_TRACK[activeTrack] || RESUME_BY_TRACK.graphics;
  const alternate = activeTrack === 'product' ? RESUME_BY_TRACK.graphics : RESUME_BY_TRACK.product;
  const resumeSelector = 'a[href$="Resume.pdf"], a[href$="Resume_KR.pdf"], a[href$="Resume_TA_Graphics.pdf"], a[href$="Resume_Production.pdf"], a[href$="Resume_Gameplay_Engineer.pdf"]';
  document.querySelectorAll(resumeSelector).forEach(link => {
    const currentHref = link.getAttribute('href') || '';
    const prefix = currentHref.startsWith('../') ? '../docs/' : 'docs/';
    const isAlternate = link.hasAttribute('data-resume-alternate');

    link.classList.remove('is-hidden');
    const target = isAlternate ? alternate : primary;
    link.setAttribute('href', `${prefix}${target.file}`);
    link.textContent = target.label;
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
    const archiveGrid = document.querySelector('.link-archive-grid');
    const activeTrack = new URLSearchParams(window.location.search).get('track') || localStorage.getItem('portfolio-track') || 'graphics';
    if (false && archiveGrid && activeTrack === 'graphics') {
    const groups = [
      ['SHADERS', ['07_TooHot.html', 'PoseidonSkate']],
      ['RENDERING', ['01_Manzo.html']],
      ['VISUALS', ['00_NewManzo.html', '06_StreetTyper.html', 'ArtGallery.html']],
      ['GAME PROGRAMMING', ['04_BirdStrike.html', '03_DoubleHit.html', '05_ThinkThink.html', '02_EdgeDirve.html']],
      ['PRODUCTION', ['Dangling.html', 'PlushProduction.html']]
    ];
    const cards = [...archiveGrid.children].filter(node => node.tagName === 'A');
    archiveGrid.innerHTML = '';
  groups.forEach(([label, keys]) => {
    const section = document.createElement('section');
    section.className = `archive-category${label === 'PRODUCTION' ? ' archive-category--production' : ''}`;
      section.innerHTML = `<h3>${label}</h3><div class="archive-category__grid"></div>`;
      const target = section.querySelector('.archive-category__grid');
      cards.filter(card => keys.some(key => card.getAttribute('href')?.includes(key))).forEach(card => target.appendChild(card));
      if (target.children.length) archiveGrid.appendChild(section);
    });
  }
  refreshArchiveLayout(activeTrack);
  ensureLanguageToggle();
  initSceneVines();
  const techStrip = document.querySelector('.tech-stack-strip');
  if (techStrip) {
    const skills = [...techStrip.querySelectorAll('.tech-stack-strip__track > span:not(.tech-stack-strip__dup)')];
    // Descendant (not direct child): refreshArchiveLayout() nests the cards inside .archive-category__grid,
    // so a `>` selector matches nothing on the graphics/product tracks and the skill keys go dead.
    const cards = [...document.querySelectorAll('.link-archive-grid a, .portfolio__item[href]')];
    const projectTools = {
      '02_EdgeDirve.html': 'Unreal Engine',
      '00_NewManzo.html': 'C# FMOD HLSL Clip Studio Paint Aseprite GitHub', '01_Manzo.html': 'C++ OpenGL GLSL Custom Engine Clip Studio Paint GitHub',
      '03_DoubleHit.html': 'C++ GLSL OpenGL Spriter Pro Clip Studio Paint GitHub', '04_BirdStrike.html': 'C++ Clip Studio Paint Cakewalk raylib GitHub',
      '05_ThinkThink.html': 'Unity HLSL C# GitHub', '06_StreetTyper.html': 'C# Unity Spriter Pro 2D Rigging Animation HLSL Clip Studio Paint GitHub',
      '07_TooHot.html': 'C# Unity HLSL Clip Studio Paint GitHub', '08_PoseidonSkate.html': 'Unity HLSL C# Blender Clip Studio Paint Perforce Jira', 'Dangling.html': 'Clip Studio Paint', 'PlushProduction.html': 'Clip Studio Paint Notion',
      '01_hello.html': 'WebGL JavaScript GLSL GitHub', '02_meshes.html': 'WebGL JavaScript GLSL GitHub', '03_fog.html': 'WebGL JavaScript GLSL GitHub',
      '04_toon.html': 'WebGL JavaScript GLSL GitHub', '05_shadow.html': 'WebGL JavaScript GLSL GitHub', '06_value.html': 'WebGL JavaScript GLSL GitHub',
      '07_gradient.html': 'WebGL JavaScript GLSL GitHub', '08_demo_fun.html': 'WebGL JavaScript GLSL GitHub'
    };
    const cardTools = card => projectTools[card.getAttribute('href').split('/').pop().split('?')[0]] || card.textContent;
    // Every card in a category is always visible now (no more "VIEW ALL" hiding extras), so a skill
    // match/dim pass is all that's needed — nothing extra to flag as hidden.
    const applySkillFilter = value => {
      cards.forEach(card => {
        const matches = cardTools(card).toLowerCase().includes(value);
        card.classList.toggle('skill-match', matches);
        card.classList.toggle('skill-dim', !matches);
      });
    };
    const clearSkillFilter = () => {
      cards.forEach(card => card.classList.remove('skill-match', 'skill-dim'));
    };
    // Hovering (or focusing) a chip previews its matches; clicking pins them. Leaving a hovered chip falls
    // back to the pinned chip if there is one, so a preview never wipes out a deliberate selection.
    const restoreSkillFilter = () => {
      const pinned = skills.find(item => item.classList.contains('is-selected'));
      if (pinned) applySkillFilter(pinned.textContent.trim().toLowerCase());
      else clearSkillFilter();
    };
    skills.forEach(skill => {
      skill.setAttribute('role', 'button');
      skill.tabIndex = 0;
      const value = () => skill.textContent.trim().toLowerCase();
      const activate = () => {
        if (skill.classList.contains('is-selected')) {
          skills.forEach(item => item.classList.remove('is-selected'));
          clearSkillFilter();
          return;
        }
        skills.forEach(item => item.classList.toggle('is-selected', item === skill));
        applySkillFilter(value());
      };
      skill.addEventListener('click', activate);
      skill.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); activate(); } });
      skill.addEventListener('mouseenter', () => applySkillFilter(value()));
      skill.addEventListener('mouseleave', restoreSkillFilter);
      skill.addEventListener('focus', () => applySkillFilter(value()));
      skill.addEventListener('blur', restoreSkillFilter);
    });
    // The aria-hidden marquee duplicates are on screen in the narrow software/product layout, so they get the
    // same hover preview (they stay non-clickable, as before).
    techStrip.querySelectorAll('.tech-stack-strip__dup').forEach(dup => {
      dup.addEventListener('mouseenter', () => applySkillFilter(dup.textContent.trim().toLowerCase()));
      dup.addEventListener('mouseleave', restoreSkillFilter);
    });
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        const text = cardTools(card).toLowerCase();
        skills.forEach(skill => skill.classList.toggle('is-hover-match', text.includes(skill.textContent.trim().toLowerCase())));
      });
      card.addEventListener('mouseleave', () => skills.forEach(skill => skill.classList.remove('is-hover-match')));
    });
    const fundamentals = document.querySelector('[data-graphics-open]');
    if (fundamentals) {
      const highlightFundamentals = () => {
        const wanted = ['opengl', 'glsl', 'c++', 'github'];
        skills.forEach(skill => skill.classList.toggle('is-hover-match', wanted.includes(skill.textContent.trim().toLowerCase())));
      };
      fundamentals.addEventListener('mouseenter', highlightFundamentals);
      fundamentals.addEventListener('mouseleave', () => skills.forEach(skill => skill.classList.remove('is-hover-match')));
    }
  }
  if (/\/(portfolio_game|portfolio_planning|portfolio)\//.test(location.pathname)) {
    const params = new URLSearchParams(location.search);
    const from = params.get('from') === 'proof' ? 'proof' : 'archive';
    const track = params.get('track') || localStorage.getItem('portfolio-track') || 'graphics';
    const destination = `../index.html?track=${encodeURIComponent(track)}#${from}`;
    let back = document.querySelector('.return-button');
    if (!back) {
      back = document.createElement('button');
      back.className = 'return-button';
    }
    back.type = 'button';
    back.classList.add('project-back-button');
    back.removeAttribute('onclick');
    back.innerHTML = `<span aria-hidden="true">←</span><span>${currentLanguage === 'ko' ? '뒤로가기' : 'Back'}</span>`;
    back.onclick = () => location.assign(destination);
    document.body.appendChild(back);
    // Follows the ALL PROJECTS grid order for the active track, so ‹ › walks the projects in the
    // same order the archive shows them. Keep in sync with refreshArchiveLayout().
    const projectTitles = {
      'portfolio_game/06_StreetTyper.html': 'STREET TYPER',
      'portfolio_game/07_TooHot.html': 'TOO HOT!',
      'portfolio_game/08_PoseidonSkate.html': 'POSEIDON SKATE',
      'portfolio_game/01_Manzo.html': 'MANZO',
      'portfolio_game/04_BirdStrike.html': 'BIRD STRIKE',
      'portfolio_game/00_NewManzo.html': 'NEW MANZO',
      'portfolio_game/03_DoubleHit.html': 'DOUBLE HIT',
      'portfolio_game/05_ThinkThink.html': 'THINK THINK',
      'portfolio_game/02_EdgeDirve.html': 'EDGE DRIVE',
      'portfolio_planning/Dangling.html': 'DANGLING*',
      'portfolio_planning/PlushProduction.html': 'PLUSH PRODUCTION'
    };
    const archiveOrder = {
      graphics: ['07_TooHot', '08_PoseidonSkate', '01_Manzo', '06_StreetTyper', '00_NewManzo', '04_BirdStrike', '03_DoubleHit', '05_ThinkThink', '02_EdgeDirve', 'PlushProduction', 'Dangling'],
      software: ['06_StreetTyper', '07_TooHot', '08_PoseidonSkate', '01_Manzo', '04_BirdStrike', '00_NewManzo', '03_DoubleHit', '05_ThinkThink', '02_EdgeDirve', 'PlushProduction', 'Dangling'],
      product: ['PlushProduction', 'Dangling', '06_StreetTyper', '07_TooHot', '01_Manzo', '00_NewManzo', '08_PoseidonSkate', '04_BirdStrike', '03_DoubleHit', '05_ThinkThink', '02_EdgeDirve']
    };
    const allProjects = (archiveOrder[track] || archiveOrder.graphics).map(key => {
      const href = Object.keys(projectTitles).find(path => path.includes(key));
      return [href, projectTitles[href]];
    });
    const graphicsStudies = [
      ['portfolio/01_hello.html', 'HELLO GRAPHICS'],
      ['portfolio/02_meshes.html', 'PROCEDURAL MESHES'],
      ['portfolio/03_fog.html', 'FOG'],
      ['portfolio/04_toon.html', 'TOON SHADING'],
      ['portfolio/05_shadow.html', 'SHADOW MAPPING'],
      ['portfolio/06_value.html', 'VALUE NOISE'],
      ['portfolio/07_gradient.html', 'GRADIENT NOISE'],
      ['portfolio/08_demo_fun.html', 'FLIGHT SIMULATION']
    ];
    const proofProjects = (portfolioTracks[track] || portfolioTracks.graphics).proofProjects.map(project => [project.href, project.title]);
    const matchesCurrent = project => location.pathname.endsWith('/' + project[0]);
    const sequence = from === 'proof' && proofProjects.some(matchesCurrent)
      ? proofProjects
      : (allProjects.some(matchesCurrent) ? allProjects : graphicsStudies);
    const currentIndex = sequence.findIndex(matchesCurrent);
    if (currentIndex !== -1) {
      [-1, 1].forEach(direction => {
        const [href, title] = sequence[(currentIndex + direction + sequence.length) % sequence.length];
        const link = document.createElement('a');
        const label = currentLanguage === 'ko'
          ? (direction < 0 ? '이전 프로젝트' : '다음 프로젝트')
          : (direction < 0 ? 'Previous project' : 'Next project');
        link.className = `project-step project-step--${direction < 0 ? 'prev' : 'next'}`;
        link.href = `../${href}?track=${encodeURIComponent(track)}&from=${from}`;
        link.setAttribute('aria-label', `${label}: ${title}`);
        link.title = `${label}: ${title}`;
        link.innerHTML = `<span aria-hidden="true">${direction < 0 ? '‹' : '›'}</span>`;
        document.body.appendChild(link);
      });
    }
    document.querySelectorAll('a[href]').forEach(link => {
      const url = new URL(link.href, location.href);
      if (url.origin !== location.origin || !/\/(portfolio_game|portfolio_planning|portfolio)\//.test(url.pathname) || url.pathname === location.pathname) return;
      url.searchParams.set('from', from);
      url.searchParams.set('track', track);
      link.href = url.href;
    });
    document.querySelectorAll('.waypoint-return').forEach(button => {
      button.removeAttribute('onclick');
      button.onclick = () => location.assign(destination);
    });
  }
  const techDetail = document.querySelector('.portfolio-item-individual');
  if (techDetail && !document.querySelector('.link-start-app')) {
    document.body.classList.add('project-detail-page', 'tech-project-page');
    const track = localStorage.getItem('portfolio-track') || 'graphics';
    const { file: resumeFile, label: resumeLabel } = RESUME_BY_TRACK[track] || RESUME_BY_TRACK.graphics;
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
      const languageUrl = new URL(window.location.href);
      const activeContributionTab = document.querySelector('.contribution-tab.active');
      if (activeContributionTab) {
        const contributionCategory = activeContributionTab.dataset.sourceCategory || activeContributionTab.dataset.category || 'main';
        sessionStorage.setItem('portfolio-contribution-tab', contributionCategory);
        localStorage.setItem('portfolio-contribution-tab-once', contributionCategory);
        languageUrl.searchParams.set('contributionTab', contributionCategory);
      }
      sessionStorage.setItem('portfolio-language-scroll', String(window.scrollY));
      applyLanguage(requestedLanguage);
      if (document.querySelector('.main-content') && document.querySelector('.video-hero')) {
        window.location.assign(languageUrl.href);
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
const workWrappers = [...gameWrappers, ...techWrappers];
const graphicsSubfilters = document.querySelector('[data-graphics-subfilters]');
const graphicsCategoryByProject = {
  '00_NewManzo.html': ['visual', 'programming'],
  '01_Manzo.html': ['renderer', 'programming', 'shader'],
  '03_DoubleHit.html': ['renderer', 'programming'],
  '04_BirdStrike.html': ['programming'],
  '05_ThinkThink.html': ['shader', 'visual'],
  '06_StreetTyper.html': ['shader', 'visual'],
  '07_TooHot.html': ['shader', 'visual'],
  '08_demo_fun.html': ['shader', 'visual', 'renderer']
};

window.addEventListener('DOMContentLoaded', () => {
  setActiveFilter('work'); // 초기 활성 필터
  sortPortfolioItems('work'); // 초기 정렬
});

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    setActiveFilter(filter);
  });
});

document.querySelectorAll('[data-subfilter]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-subfilter]').forEach(b => b.classList.toggle('active', b === btn));
    setActiveFilter('tech', btn.dataset.subfilter);
  });
});

document.querySelectorAll('[data-portfolio-filter]').forEach(link => {
  link.addEventListener('click', () => {
    setActiveFilter(link.dataset.portfolioFilter);
  });
});

function setActiveFilter(filter, subfilter = 'all') {
  filterBtns.forEach(b => {
    b.classList.toggle('active', b.dataset.filter === filter);
  });

  // 필터에 맞는 래퍼 선택
  let wrappers;
  if (filter === 'work') {
    wrappers = Array.from(workWrappers);
  } else if (filter === 'game') {
    wrappers = Array.from(gameWrappers);
  } else if (filter === 'tech') {
    wrappers = Array.from(techWrappers);
  } else {
    wrappers = Array.from(planningWrappers);
  }

  if (graphicsSubfilters) graphicsSubfilters.hidden = filter !== 'work';
  if (filter === 'work') {
    workWrappers.forEach(wrapper => {
      const file = wrapper.querySelector('a')?.getAttribute('href')?.split('/').pop();
      const matches = wrapper.classList.contains('tech') && (subfilter === 'all' || (graphicsCategoryByProject[file] || []).includes(subfilter));
      wrapper.style.display = subfilter === 'all' ? 'flex' : (matches ? 'flex' : 'none');
    });
  }

  // 표시/숨김 처리
  wrappers.forEach(wrapper => {
    wrapper.style.display = 'flex';
  });

  // 다른 필터의 래퍼는 숨김
  if (filter !== 'game' && filter !== 'work') {
    gameWrappers.forEach(wrapper => wrapper.style.display = 'none');
  }
  if (filter !== 'tech' && filter !== 'work') {
    techWrappers.forEach(wrapper => wrapper.style.display = 'none');
  }
  if (filter !== 'planning') {
    planningWrappers.forEach(wrapper => wrapper.style.display = 'none');
  }

  // 정렬: 핀된 것끼리, 안된 것끼리 최신순
  sortPortfolioItems(filter, subfilter);
}

function sortPortfolioItems(filter, subfilter = 'all') {
  const portfolioContainer = document.querySelector('.portfolio');
  if (!portfolioContainer) return;

  // 필터에 맞는 래퍼 선택
  let wrappers;
  if (filter === 'work') {
    wrappers = Array.from(workWrappers);
  } else if (filter === 'game') {
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
// Full tunnel-warp transition (canvas flight effect) is disabled — kept here in case
// it's wanted again later. Only a lightweight title zoom plays now (see is-title-zoom-out below).
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
  const graphicsClose = app.querySelector('[data-graphics-close]');
  let activeIndex = 0;
  let entryHideTimer = 0;
    let locked = false;
    let wheelDelta = 0;
    let wheelReset;
    let innerScrollBoundaryReady = false;
    let innerBoundaryReset;
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
  // Delegated (not a one-time querySelector): the SHADERS overview card rebuilds its own
  // [data-graphics-open] trigger every time refreshArchiveLayout() runs (track switch, language
  // toggle), so a direct binding here would go stale after the first rebuild.
  app.addEventListener('click', event => {
    if (!event.target.closest('[data-graphics-open]')) return;
    event.stopPropagation();
    setGraphicsCollection(true);
  });
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

    // The entry scene is display:none while away (has-left-entry / [hidden]), and an
    // element coming out of display:none has no previous style to transition from,
    // so it would just snap in. Un-hide it and flush layout first, so it flies in
    // from its .is-past state like every other scene.
    if (activeIndex === 0 && !immediate && scenes[0]) {
      scenes[0].hidden = false;
      void scenes[0].offsetWidth;
    }

    scenes.forEach((scene, sceneIndex) => {
      const shouldHideEntry = sceneIndex === 0 && activeIndex > 0;
      // The entry title scene has its own scale/blur/fade transition (.is-past) that
      // is meant to play as it leaves — setting `hidden` (display:none) in the same
      // tick as the class change would skip that transition entirely. Let it finish
      // (matches the 950ms transform transition on .link-scene) before hiding for real.
      if (sceneIndex === 0) window.clearTimeout(entryHideTimer);
      if (shouldHideEntry && !immediate && scene.hidden !== shouldHideEntry) {
        // Re-check activeIndex: if the user scrolled back before this fires, the
        // entry scene is active again and must not be hidden.
        entryHideTimer = window.setTimeout(() => {
          if (activeIndex > 0) scene.hidden = true;
        }, reduceMotion.matches ? 0 : 950);
      } else {
        scene.hidden = shouldHideEntry;
      }
      scene.classList.toggle('is-active', sceneIndex === activeIndex);
      scene.classList.toggle('is-past', sceneIndex < activeIndex);
      scene.classList.toggle('is-near-next', sceneIndex === activeIndex + 1);
      scene.setAttribute('aria-hidden', String(sceneIndex !== activeIndex));
      // Grow this scene's background vine in from scratch right as it becomes active —
      // not before (so it doesn't finish growing off-screen while another scene is up),
      // and every time (so revisiting an earlier scene replays it too).
      if (sceneIndex === activeIndex) playSceneVine(scene);
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

  const isScrollablePanel = panel => panel && ['auto', 'scroll'].includes(getComputedStyle(panel).overflowY) && panel.scrollHeight > panel.clientHeight;

  app.addEventListener('wheel', event => {
    const projectRail = event.target.closest('.archive-category__grid');
    if (projectRail && projectRail.scrollWidth > projectRail.clientWidth && (Math.abs(event.deltaX) > Math.abs(event.deltaY) || event.shiftKey)) {
      event.preventDefault();
      projectRail.scrollLeft += event.deltaX || event.deltaY;
      return;
    }
    const galleryScroller = event.target.closest('.hobby-gallery__track');
    if (galleryScroller) {
      event.preventDefault();
      galleryScroller.scrollLeft += event.deltaY || event.deltaX;
      return;
    }

      const sceneScroller = event.target.closest('.archive-panel, .experience-board');
      if (isScrollablePanel(sceneScroller)) {
        const atTop = sceneScroller.scrollTop <= 1;
        const atBottom = sceneScroller.scrollTop + sceneScroller.clientHeight >= sceneScroller.scrollHeight - 1;
        const canScroll = (event.deltaY < 0 && !atTop) || (event.deltaY > 0 && !atBottom);
        if (canScroll) {
          event.preventDefault();
          sceneScroller.scrollBy({ top: event.deltaY, behavior: 'auto' });
          wheelDelta = 0;
          innerScrollBoundaryReady = false;
          window.clearTimeout(innerBoundaryReset);
          return;
        }
        // Keep consuming a continuous wheel stream at the edge. Only after the
        // input stops briefly may the next distinct wheel gesture change scenes.
        if (!innerScrollBoundaryReady) {
          event.preventDefault();
          wheelDelta = 0;
          window.clearTimeout(innerBoundaryReset);
          innerBoundaryReset = window.setTimeout(() => {
            innerScrollBoundaryReady = true;
          }, 260);
          return;
        }
        innerScrollBoundaryReady = false;
        window.clearTimeout(innerBoundaryReset);
      }

    event.preventDefault();
    if (hobbyMap?.classList.contains('is-open') || graphicsCollection?.classList.contains('is-open') || app.querySelector('.archive-category--overview.is-expanded')) return;
    if (locked) return;
    wheelDelta += event.deltaY;
    window.clearTimeout(wheelReset);
    wheelReset = window.setTimeout(() => { wheelDelta = 0; }, 180);
    if (Math.abs(wheelDelta) < 34) return;
    const direction = wheelDelta > 0 ? 1 : -1;
    wheelDelta = 0;
    stepScene(direction);
  }, { passive: false });

  // Touch devices never fire 'wheel', so the scene stepper above is silently
  // unreachable on mobile without this: swipe up/down pages between scenes,
  // same boundary rules as the wheel handler (inner panels scroll first,
  // the horizontal hobby-gallery track is left alone).
  let touchStartX = null;
  let touchStartY = null;
  app.addEventListener('touchstart', event => {
    if (event.touches.length !== 1) { touchStartX = null; touchStartY = null; return; }
    touchStartX = event.touches[0].clientX;
    touchStartY = event.touches[0].clientY;
  }, { passive: true });

  app.addEventListener('touchend', event => {
    if (touchStartY === null) return;
    const startX = touchStartX;
    const startY = touchStartY;
    touchStartX = null;
    touchStartY = null;

    if (event.target.closest('.hobby-gallery__track')) return;
    if (hobbyMap?.classList.contains('is-open') || graphicsCollection?.classList.contains('is-open') || app.querySelector('.archive-category--overview.is-expanded')) return;
    if (locked) return;

    const touch = event.changedTouches[0];
    const dy = startY - touch.clientY;
    const dx = startX - touch.clientX;
    if (Math.abs(dx) > Math.abs(dy) || Math.abs(dy) < 48) return;

    const wantsNext = dy > 0;
    const sceneScroller = event.target.closest('.archive-panel, .experience-board');
    if (isScrollablePanel(sceneScroller)) {
      const atTop = sceneScroller.scrollTop <= 1;
      const atBottom = sceneScroller.scrollTop + sceneScroller.clientHeight >= sceneScroller.scrollHeight - 1;
      const canScrollInner = (wantsNext && !atBottom) || (!wantsNext && !atTop);
      if (canScrollInner) return;
    }
    stepScene(wantsNext ? 1 : -1);
  }, { passive: true });

  window.addEventListener('keydown', event => {
    if (!document.body.classList.contains('link-start-home')) return;
    const focusedProjectRail = event.target.closest?.('.archive-category__grid');
    if (focusedProjectRail && ['ArrowLeft', 'ArrowRight'].includes(event.key) && focusedProjectRail.scrollWidth > focusedProjectRail.clientWidth) {
      event.preventDefault();
      focusedProjectRail.scrollBy({ left:(event.key === 'ArrowRight' ? 1 : -1) * focusedProjectRail.clientWidth * .75, behavior:'smooth' });
      return;
    }
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
    const expandedCategory = app.querySelector('.archive-category--overview.is-expanded');
    if (expandedCategory && event.key === 'Escape') {
      event.preventDefault();
      expandedCategory.querySelector('.archive-category__all')?.click();
      return;
    }
    if (expandedCategory) return;
    if (hobbyMap?.classList.contains('is-open') || graphicsCollection?.classList.contains('is-open')) return;

    const activeScroller = scenes[activeIndex]?.querySelector('.archive-panel, .experience-board');
    const scrollDownKey = ['ArrowDown', 'PageDown', ' '].includes(event.key);
    const scrollUpKey = ['ArrowUp', 'PageUp'].includes(event.key);
    if (isScrollablePanel(activeScroller) && (scrollDownKey || scrollUpKey)) {
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
    if (isScrollablePanel(sceneScroller)) {
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
