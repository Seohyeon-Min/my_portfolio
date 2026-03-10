// 프로젝트 템플릿 렌더러
// URL 파라미터에서 프로젝트 ID를 가져와서 해당 프로젝트를 렌더링합니다

(function() {
  'use strict';

  // URL에서 프로젝트 ID 추출
  function getProjectId() {
    const path = window.location.pathname;
    const filename = path.split('/').pop().replace('.html', '');
    return filename;
  }

  // 프로젝트 데이터 가져오기
  function getProjectData(projectId) {
    if (!projectsData || !projectsData[projectId]) {
      console.error('프로젝트 데이터를 찾을 수 없습니다:', projectId);
      return null;
    }
    return projectsData[projectId];
  }

  // 헤더 렌더링
  function renderHeader(project) {
    // 페이지 타이틀 설정
    if (project.pageTitle) {
      document.title = project.pageTitle;
    }

    // Navbar는 이미 HTML에 있으므로 그대로 둡니다
  }

  // 게임/기획 프로젝트용 Hero 섹션 렌더링
  function renderGameHero(project) {
    const heroSection = document.querySelector('.video-hero');
    if (!heroSection) return;

    // 타이틀 섹션 ID 추가
    heroSection.id = 'title';

    // Hero 미디어 설정 - 기존 내용을 완전히 교체
    if (project.heroType === 'video') {
      heroSection.innerHTML = `
        <video src="${project.heroMedia}" autoplay muted loop></video>
        <div class="video-overlay">
          <h1 class="${project.heroTitleClass || 'game-title'}">${project.title}</h1>
          <p class="${project.heroSubtitleClass || 'game-subtitle'}">${project.subtitle}</p>
        </div>
      `;
    } else if (project.heroType === 'image') {
      heroSection.innerHTML = `
        <img src="${project.heroMedia}" alt="${project.title} Poster" class="bird-image">
        <div class="video-overlay">
          <h1 class="${project.heroTitleClass || 'game-title'}">${project.title}</h1>
          <p class="${project.heroSubtitleClass || 'game-subtitle'}">${project.subtitle}</p>
        </div>
      `;
    }
  }

  // Overview & Features 렌더링
  function renderOverview(project) {
    if (!project.overview && !project.features) return;

    const mainContent = document.querySelector('.main-content');
    if (!mainContent) return;

    let overviewHTML = '';

    // Overview 섹션
    if (project.overview) {
      // overviewImage가 있으면 Overview/Features 옆에 표시
      const overviewImage = project.overviewImage || project.characterImage;
      
      if (overviewImage) {
        overviewHTML += `
          <section class="main-background-section">
            <div class="info-section">
              <div class="left-image">
                <img src="${overviewImage}" alt="Overview Image">
              </div>
              <div class="right-text">
                <h2>Overview</h2>
                <p>${project.overview}</p>
                ${project.features ? `
                  <h2>Features</h2>
                  <ul>
                    ${project.features.map(f => `<li>${f}</li>`).join('')}
                  </ul>
                ` : ''}
              </div>
            </div>
          </section>
        `;
      } else {
        // 이미지가 없는 경우
        overviewHTML += `
          <section class="main-background-section">
            <div class="bottom-text">
              <h2>Overview</h2>
              <p>${project.overview}</p>
              ${project.features ? `
                <h2>Features</h2>
                <ul>
                  ${project.features.map(f => `<li>${f}</li>`).join('')}
                </ul>
              ` : ''}
            </div>
          </section>
        `;
      }
    }

    // 기존 main-background-section이 있으면 교체, 없으면 추가
    const existingSection = mainContent.querySelector('.main-background-section');
    if (existingSection && overviewHTML) {
      existingSection.outerHTML = overviewHTML;
    } else if (overviewHTML) {
      mainContent.insertAdjacentHTML('afterbegin', overviewHTML);
    }
  }

  // My Role 섹션 렌더링 (강조)
  function renderMyRole(project) {
    const myRole = project.myRole || project.experience;
    if (!myRole) return;

    const roundedSection = document.querySelector('.rounded-section');
    if (!roundedSection) return;

    const myRoleHTML = `
      <section class="my-role-section">
        <h2 class="highlighted-title">My Role</h2>
        <div class="my-role-card">
          <div class="my-role-header">
            <h3 class="my-role-title">${myRole.role}</h3>
            <span class="my-role-period">${myRole.period}</span>
          </div>
          <p class="my-role-description">${myRole.description}</p>
        </div>
      </section>
    `;

    roundedSection.insertAdjacentHTML('afterbegin', myRoleHTML);
  }

  // Experience 섹션 렌더링 (총 요약용 - 항상 표시)
  function renderExperience(project) {
    if (!project.experience) return;

    const roundedSection = document.querySelector('.rounded-section');
    if (!roundedSection) return;

    const experienceHTML = `
      <section class="experience-section">
        <h2 class="highlighted-title">Experience</h2>
        <div class="timeline-item2">
          <div class="timeline-icon2"></div>
          <div class="timeline-content2">
            <h3>
              직책: ${project.experience.role}
              <strong>(${project.experience.period})</strong>
            </h3>
            <p>${project.experience.description}</p>
          </div>
        </div>
      </section>
    `;

    roundedSection.insertAdjacentHTML('afterbegin', experienceHTML);
  }

  // 트레일러 섹션 렌더링 (Experience 바로 밑, 첫 번째 트레일러만)
  function renderTrailer(project) {
    const roundedSection = document.querySelector('.rounded-section');
    if (!roundedSection) return;

    const experienceSection = roundedSection.querySelector('.experience-section');
    if (!experienceSection) return;

    // 첫 번째 트레일러만 표시
    if (project.trailers && project.trailers.length > 0) {
      const firstTrailer = project.trailers[0];
      const trailerHTML = `
        <section class="trailer-section" id="trailer">
          <h2 class="highlighted-title">트레일러</h2>
          <div class="trailer-container">
            <video class="responsive-video" controls ${firstTrailer.poster ? `poster="${firstTrailer.poster}"` : ''}>
              <source src="${firstTrailer.src}" type="video/mp4">
              브라우저가 video 태그를 지원하지 않습니다.
            </video>
          </div>
          ${firstTrailer.label ? `<p>${firstTrailer.label}</p>` : ''}
        </section>
      `;

      experienceSection.insertAdjacentHTML('afterend', trailerHTML);
    }
  }

  // 갤러리 섹션 렌더링 (이미지와 비디오 모두 포함)
  function renderVideoGallery(project) {
    const roundedSection = document.querySelector('.rounded-section');
    if (!roundedSection) return;

    const trailerSection = roundedSection.querySelector('.trailer-section');
    const insertAfter = trailerSection || roundedSection.querySelector('.experience-section');
    if (!insertAfter) return;

    // 나머지 트레일러와 모든 비디오 수집
    const remainingTrailers = project.trailers && project.trailers.length > 1 ? project.trailers.slice(1) : [];
    const allVideos = [...remainingTrailers, ...(project.videos || [])];
    
    // 이미지 수집 (gallery가 있으면)
    const allImages = project.gallery && project.gallery.images ? project.gallery.images : [];
    
    // 모든 미디어 아이템 수집
    const allMedia = [];
    let mediaIndex = 1;
    
    // 비디오 추가
    allVideos.forEach(video => {
      allMedia.push({
        type: 'video',
        src: video.src || video,
        poster: video.poster || null,
        title: video.title || video.label || '',
        index: mediaIndex++
      });
    });
    
    // 이미지 추가
    allImages.forEach(img => {
      allMedia.push({
        type: 'image',
        src: img.src,
        alt: img.alt || '',
        title: img.title || '',
        index: mediaIndex++
      });
    });

    if (allMedia.length === 0) return;

    let galleryHTML = `
      <section class="gallery-wrapper">
        <h3 class="gallery-title">${project.gallery && project.gallery.title ? project.gallery.title : '갤러리'}</h3>
        ${project.gallery && project.gallery.subtitle ? `<p class="gallery-subtitle">${project.gallery.subtitle}</p>` : ''}
        <div class="gallery">
    `;

    // 최대 4개만 표시, 4개 초과시 마지막에 겹쳐진 이미지 표시
    const displayMedia = allMedia.length <= 4 ? allMedia : allMedia.slice(0, 3);
    const remainingCount = allMedia.length > 4 ? allMedia.length - 3 : 0;

    displayMedia.forEach((media) => {
      if (media.type === 'video') {
        galleryHTML += `
          <a href="#media${media.index}" data-title="${media.title}">
            <video ${media.poster ? `poster="${media.poster}"` : ''} muted>
              <source src="${media.src}" type="video/mp4">
            </video>
          </a>
        `;
      } else if (media.type === 'image') {
        galleryHTML += `
          <a href="#media${media.index}" data-title="${media.title}">
            <img src="${media.src}" alt="${media.alt}">
          </a>
        `;
      }
    });

    // 4개 초과시 마지막 이미지에 남은 이미지 수 표시
    if (remainingCount > 0) {
      const stackedMedia = allMedia.slice(3); // 4번째부터 끝까지
      const firstStacked = stackedMedia[0]; // 첫 번째 겹쳐진 이미지
      
      if (firstStacked.type === 'image') {
        galleryHTML += `
          <a href="#media${firstStacked.index}" data-title="${firstStacked.title}" class="gallery-stacked">
            <img src="${firstStacked.src}" alt="${firstStacked.alt}" class="stacked-main-img">
            <div class="stacked-overlay">
              <span class="stacked-count">+${remainingCount}</span>
            </div>
          </a>
        `;
      } else if (firstStacked.type === 'video') {
        galleryHTML += `
          <a href="#media${firstStacked.index}" data-title="${firstStacked.title}" class="gallery-stacked">
            <video ${firstStacked.poster ? `poster="${firstStacked.poster}"` : ''} muted>
              <source src="${firstStacked.src}" type="video/mp4">
            </video>
            <div class="stacked-overlay">
              <span class="stacked-count">+${remainingCount}</span>
            </div>
          </a>
        `;
      }
    }

    galleryHTML += `
        </div>
      </section>
      <hr class="gallery-divider">
    `;

    // Lightbox 생성 (비디오와 이미지 모두)
    allMedia.forEach((media) => {
      const prevIndex = media.index === 1 ? allMedia.length : media.index - 1;
      const nextIndex = media.index === allMedia.length ? 1 : media.index + 1;
      
      if (media.type === 'video') {
        galleryHTML += `
          <div class="lightbox" id="media${media.index}">
            <a href="#close" class="lightbox-background"></a>
            <a href="#media${prevIndex}" class="prev">&#10094;</a>
            <div class="lightbox-content">
              <video controls ${media.poster ? `poster="${media.poster}"` : ''}>
                <source src="${media.src}" type="video/mp4">
              </video>
            </div>
            <a href="#media${nextIndex}" class="next">&#10095;</a>
          </div>
        `;
      } else if (media.type === 'image') {
        galleryHTML += `
          <div class="lightbox" id="media${media.index}">
            <a href="#close" class="lightbox-background"></a>
            <a href="#media${prevIndex}" class="prev">&#10094;</a>
            <div class="lightbox-content">
              <img src="${media.src}" alt="${media.alt}">
            </div>
            <a href="#media${nextIndex}" class="next">&#10095;</a>
          </div>
        `;
      }
    });

    insertAfter.insertAdjacentHTML('afterend', galleryHTML);
  }

  // 게임소개 섹션 렌더링 (텍스트, 이미지) - 갤러리 밑, 컨트리뷰션 위
  function renderGameIntro(project) {
    const roundedSection = document.querySelector('.rounded-section');
    if (!roundedSection) return;

    // 갤러리 divider 찾기 (갤러리 밑에 배치)
    const galleryDivider = roundedSection.querySelector('.gallery-divider');
    const gallerySection = roundedSection.querySelector('.gallery-wrapper');
    const insertAfter = galleryDivider || gallerySection || roundedSection.querySelector('.trailer-section') || roundedSection.querySelector('.experience-section');
    if (!insertAfter) return;

    // 게임소개 제목 (게임이 아니면 '설명')
    const introLabel = project.type === 'game' ? '게임소개' : '설명';
    const hasContent = project.gameIntro || (project.gameIntroMedia && project.gameIntroMedia.length > 0);

    if (!hasContent) return;

    let gameIntroHTML = `<section class="game-intro-section" id="game-intro">`;
    gameIntroHTML += `<h2 class="highlighted-title">${introLabel}</h2>`;

    // 게임 소개 텍스트
    if (project.gameIntro) {
      gameIntroHTML += `
        <div class="game-intro-text">
          ${project.gameIntro}
        </div>
      `;
    }

    // 게임소개 미디어 (이미지, 동영상)
    if (project.gameIntroMedia && project.gameIntroMedia.length > 0) {
      project.gameIntroMedia.forEach(media => {
        if (media.type === 'image') {
          gameIntroHTML += `
            <div class="game-intro-media">
              <img src="${media.src}" alt="${media.alt || ''}" />
              ${media.caption ? `<p>${media.caption}</p>` : ''}
            </div>
          `;
        } else if (media.type === 'video') {
          gameIntroHTML += `
            <div class="game-intro-media">
              <video class="responsive-video" controls ${media.poster ? `poster="${media.poster}"` : ''}>
                <source src="${media.src}" type="video/mp4">
                브라우저가 video 태그를 지원하지 않습니다.
              </video>
              ${media.caption ? `<p>${media.caption}</p>` : ''}
            </div>
          `;
        }
      });
    }

    // AI Highlight
    if (project.aiHighlight) {
      gameIntroHTML += `
        <div class="ai-highlight">
          <p>
            💡 <strong>AI 활용</strong><br>
            코드 초안과 반복적인 구현 작업에 AI를 적극적으로 활용하고, 
            이를 수정·통합하여 프로젝트에 적용했습니다.
          </p>
        </div>
      `;
    }

    gameIntroHTML += '</section>';
    insertAfter.insertAdjacentHTML('afterend', gameIntroHTML);
  }

  // Trailers 섹션 렌더링 (하위 호환성 유지)
  function renderTrailers(project) {
    // renderGameIntro에서 처리하므로 여기서는 아무것도 하지 않음
  }

  // Videos 섹션 렌더링 (하위 호환성 유지)
  function renderVideos(project) {
    // renderGameIntro에서 처리하므로 여기서는 아무것도 하지 않음
  }

  // AI Highlight 렌더링 (하위 호환성 유지)
  function renderAIHighlight(project) {
    // renderGameIntro에서 처리하므로 여기서는 아무것도 하지 않음
  }

  // Contributions 섹션 렌더링 (탭 방식)
  function renderContributions(project) {
    const roundedSection = document.querySelector('.rounded-section');
    if (!roundedSection) return;

    // contributions가 없으면 빈 탭 섹션만 표시
    if (!project.contributions || project.contributions.sections.length === 0) {
      const emptyContributionsHTML = `
        <section class="contributions-tabs-section">
          <h2 class="highlighted-title">Contributions</h2>
          <div class="contributions-tabs">
            <button class="contribution-tab contribution-tab-main active" data-category="main">
              <span class="crown-icon">👑</span>
              <span>추가 예정</span>
            </button>
          </div>
          <div class="contribution-tab-content active" data-category="main">
            <p>추가 예정입니다.</p>
          </div>
        </section>
      `;

      roundedSection.insertAdjacentHTML('beforeend', emptyContributionsHTML);
      return;
    }

    // 첫 번째 섹션을 주요기여로 사용
    const mainSection = project.contributions.sections[0];
    const remainingSections = project.contributions.sections.slice(1);

    // 사용 가능한 카테고리 추출 (첫 번째 섹션 제외)
    const allCategories = ['Planning', 'Technical', 'Art', 'Audio'];
    const categoryLabels = {
      'Planning': '기획',
      'Technical': '기술',
      'Art': '아트',
      'Audio': '음악',
      'Project Lead': 'Project Lead'
    };
    const usedCategories = [...new Set(
      remainingSections
        .map(s => s.category)
        .filter(c => c && allCategories.includes(c))
    )];

    // 탭 방식으로 렌더링
    let contributionsHTML = `
      <section class="contributions-tabs-section">
        <h2 class="highlighted-title">Contributions</h2>
        <div class="contributions-tabs">
    `;

    // 첫 번째 탭: 주요기여 (첫 번째 섹션) - categoryLabels에 있으면 해당 라벨 사용
    const firstTabLabel = categoryLabels[mainSection.category] || mainSection.title;
    contributionsHTML += `
      <button class="contribution-tab contribution-tab-main active" data-category="main">
        <span class="crown-icon">👑</span>
        <span>${firstTabLabel}</span>
      </button>
    `;

    // 나머지 카테고리 탭들
    if (usedCategories.length > 0) {
      usedCategories.forEach((category) => {
        const categoryLabel = categoryLabels[category] || category;
        contributionsHTML += `
          <button class="contribution-tab" data-category="${category}">
            ${categoryLabel}
          </button>
        `;
      });
    }

    contributionsHTML += `</div>`;

    // 첫 번째 탭(주요기여)에 첫 번째 섹션만 표시
    let mainContentHTML = `
      <div class="contribution-tab-content active" data-category="main">
    `;

    // HTML 콘텐츠가 있으면 제목을 추가하지 않음 (이미 포함되어 있을 수 있음)
    if (!mainSection.htmlContent) {
      mainContentHTML += `<h4>${mainSection.title}</h4>`;
      
      if (mainSection.description) {
        mainContentHTML += `<h5>${mainSection.description}</h5>`;
      }
    }

    // HTML 콘텐츠가 있으면 우선 사용
    if (mainSection.htmlContent) {
      mainContentHTML += mainSection.htmlContent;
    } else if (mainSection.subsections) {
      mainSection.subsections.forEach(subsection => {
        mainContentHTML += `<h5>${subsection.title}</h5>`;
        const items = subsection.items || [];
        const images = subsection.images || [];
        const maxLength = Math.max(items.length, images.length);
        
        for (let i = 0; i < maxLength; i++) {
          // 설명 먼저
          if (i < items.length) {
            mainContentHTML += `<p>${items[i]}</p>`;
          }
          // 그 다음 이미지
          if (i < images.length) {
            const img = images[i];
            mainContentHTML += `<div class="contribution-image"><img src="${img.src}" alt="${img.alt || ''}" title="${img.title || ''}" /></div>`;
          }
        }
      });
    } else if (mainSection.items) {
      mainContentHTML += '<ul>';
      mainSection.items.forEach(item => {
        mainContentHTML += `<li>${item}</li>`;
      });
      mainContentHTML += '</ul>';
    }

    mainContentHTML += `</div>`;
    contributionsHTML += mainContentHTML;

    // 나머지 카테고리별 콘텐츠 생성 (첫 번째 섹션 제외)
    if (usedCategories.length > 0) {
      usedCategories.forEach((category) => {
        const categorySections = remainingSections.filter(
          s => s.category === category
        );

        let contentHTML = `
          <div class="contribution-tab-content" data-category="${category}">
        `;

        categorySections.forEach((section, secIndex) => {
          if (secIndex > 0) {
            contentHTML += '<hr>';
          }

          // HTML 콘텐츠가 있으면 제목을 추가하지 않음 (이미 포함되어 있을 수 있음)
          if (!section.htmlContent) {
            contentHTML += `<h4>${section.title}</h4>`;

            if (section.description) {
              contentHTML += `<h5>${section.description}</h5>`;
            }
          }

          // HTML 콘텐츠가 있으면 우선 사용
          if (section.htmlContent) {
            contentHTML += section.htmlContent;
          } else if (section.subsections) {
            section.subsections.forEach(subsection => {
              contentHTML += `<h5>${subsection.title}</h5>`;
              const items = subsection.items || [];
              const images = subsection.images || [];
              const maxLength = Math.max(items.length, images.length);
              
              for (let i = 0; i < maxLength; i++) {
                // 설명 먼저
                if (i < items.length) {
                  contentHTML += `<p>${items[i]}</p>`;
                }
                // 그 다음 이미지
                if (i < images.length) {
                  const img = images[i];
                  contentHTML += `<div class="contribution-image"><img src="${img.src}" alt="${img.alt || ''}" title="${img.title || ''}" /></div>`;
                }
              }
            });
          } else if (section.items) {
            contentHTML += '<ul>';
            section.items.forEach(item => {
              contentHTML += `<li>${item}</li>`;
            });
            contentHTML += '</ul>';
          }
        });

        contentHTML += `</div>`;
        contributionsHTML += contentHTML;
      });
    }

    contributionsHTML += `</section>`;

    roundedSection.insertAdjacentHTML('beforeend', contributionsHTML);

    // 탭 클릭 이벤트 리스너 추가
    setTimeout(() => {
      const tabs = roundedSection.querySelectorAll('.contribution-tab');
      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          const category = tab.dataset.category;

          // 모든 탭 비활성화
          tabs.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');

          // 모든 콘텐츠 숨기기
          const contents = roundedSection.querySelectorAll('.contribution-tab-content');
          contents.forEach(c => c.classList.remove('active'));

          // 선택한 카테고리만 보이기
          const targetContent = roundedSection.querySelector(
            `.contribution-tab-content[data-category="${category}"]`
          );
          if (targetContent) {
            targetContent.classList.add('active');
          }
        });
      });
    }, 100);
  }

  // Project Details 섹션 렌더링
  function renderProjectDetails(project) {
    if (!project.projectDetails) return;

    const roundedSection = document.querySelector('.rounded-section');
    if (!roundedSection) return;

    let detailsHTML = `
      <section class="project-details">
        <h2 class="highlighted-title">프로젝트 세부사항</h2>
    `;

    if (project.projectDetails.tool) {
      detailsHTML += `<h4>사용 툴: ${project.projectDetails.tool}</h4>`;
    }

    if (project.projectDetails.problems && project.projectDetails.problems.length > 0) {
      detailsHTML += '<h4>문제 및 해결</h4><ul>';
      project.projectDetails.problems.forEach(problem => {
        detailsHTML += `<li>${problem}</li>`;
      });
      detailsHTML += '</ul>';
    }

    detailsHTML += '</section>';

    roundedSection.insertAdjacentHTML('beforeend', detailsHTML);
  }

  // Source 섹션 렌더링
  function renderSource(project) {
    if (!project.source) return;

    const roundedSection = document.querySelector('.rounded-section');
    if (!roundedSection) return;

    const sourceHTML = `
      <section class="source-section">
        <h2>${project.source.label ? 'Link' : 'SOURCE'}</h2>
        <p>
          ${project.source.text}
          <a href="${project.source.url}" target="_blank">${project.source.label}</a>.
        </p>
      </section>
    `;

    roundedSection.insertAdjacentHTML('beforeend', sourceHTML);
  }

  // Gallery 렌더링 (기획 프로젝트용 - renderVideoGallery에서 이미 처리되므로 비활성화)
  function renderGallery(project) {
    // renderVideoGallery에서 이미지와 비디오를 모두 처리하므로 여기서는 아무것도 하지 않음
    // 기획 프로젝트의 경우 renderVideoGallery에서 gallery.images를 포함하여 처리됨
    return;
  }

  // 기술 프로젝트용 렌더링
  function renderTechProject(project) {
    // Intro 섹션
    const introSection = document.querySelector('.intro');
    if (introSection) {
      const titleEl = introSection.querySelector('.section__title--intro');
      const subtitleEl = introSection.querySelector('.section__subtitle--intro');
      const imgEl = introSection.querySelector('.intro__img');

      if (titleEl) {
        titleEl.innerHTML = `Project <strong>${project.title}</strong>`;
      }
      if (subtitleEl) {
        subtitleEl.textContent = project.title;
      }
      if (imgEl && project.thumbnail) {
        imgEl.src = project.thumbnail;
        imgEl.alt = project.title;
      }
    }

    // Overview 섹션
    const portfolioSection = document.querySelector('.portfolio-item-individual');
    if (portfolioSection && project.overview) {
      let contentHTML = `
        <h2>Project Overview</h2>
        <p>${project.overview}</p>
      `;

      if (project.tasks && project.tasks.length > 0) {
        contentHTML += `
          <h2>Tasks Completed</h2>
          <ul>
            ${project.tasks.map(task => `<li>${task}</li>`).join('')}
          </ul>
        `;
      }

      if (project.reflection) {
        contentHTML += `
          <h2>Reflection</h2>
          <p>${project.reflection}</p>
        `;
      }

      portfolioSection.innerHTML = contentHTML;
    }

    // Demo 섹션
    if (project.demo) {
      const demoSection = document.querySelector('.portfolio-item-individual:last-of-type');
      if (demoSection) {
        const startParam = project.demo.start ? `?start=${project.demo.start}` : '';
        demoSection.innerHTML = `
          <h2>Demo</h2>
          <iframe id="demo" src="${project.demo.src}${startParam}" tabindex="-1"></iframe>
        `;
      }
    }
  }

  // 이정표 네비게이션 렌더링
  function renderWaypointNavigation(project) {
    const body = document.body;
    
    // 프로젝트 타입에 따라 라벨 변경
    const introLabel = project && project.type === 'game' ? '게임소개' : '설명';
    
    // 먼저 섹션에 ID를 설정 (클래스 선택자로 찾아서)
    // 타이틀은 renderGameHero에서 이미 설정됨
    const titleSection = document.getElementById('title') || document.querySelector('.video-hero');
    if (titleSection && !titleSection.id) {
      titleSection.id = 'title';
    }
    
    // 익스피리언스
    const experienceSection = document.querySelector('.experience-section');
    if (experienceSection && !experienceSection.id) {
      experienceSection.id = 'experience';
    }

    // 트레일러
    const trailerSection = document.querySelector('.trailer-section');
    if (trailerSection && !trailerSection.id) {
      trailerSection.id = 'trailer';
    }

    // 게임소개
    const gameIntroSection = document.getElementById('game-intro') || document.querySelector('.game-intro-section');
    if (gameIntroSection && !gameIntroSection.id) {
      gameIntroSection.id = 'game-intro';
    }
    
    // 컨트리뷰션
    const contributionsSection = document.querySelector('.contributions-tabs-section');
    if (contributionsSection && !contributionsSection.id) {
      contributionsSection.id = 'contributions';
    }
    
    // 이제 ID로 다시 확인하여 실제로 존재하는 섹션만 표시
    const titleSectionEl = document.getElementById('title');
    const experienceSectionEl = document.getElementById('experience');
    const trailerSectionEl = document.getElementById('trailer');
    const gameIntroSectionEl = document.getElementById('game-intro');
    const contributionsSectionEl = document.getElementById('contributions');
    
    let waypointHTML = '<nav class="waypoint-navigation">';
    
    // 타이틀은 항상 존재
    if (titleSectionEl) {
      waypointHTML += `
        <a href="#title" class="waypoint" data-section="title">
          <span class="waypoint-dot"></span>
          <span class="waypoint-label">타이틀</span>
        </a>
      `;
    }
    
    // 익스피리언스
    if (experienceSectionEl) {
      waypointHTML += `
        <a href="#experience" class="waypoint" data-section="experience">
          <span class="waypoint-dot"></span>
          <span class="waypoint-label">익스피리언스</span>
        </a>
      `;
    }
    
    // 트레일러
    if (trailerSectionEl) {
      waypointHTML += `
        <a href="#trailer" class="waypoint" data-section="trailer">
          <span class="waypoint-dot"></span>
          <span class="waypoint-label">트레일러</span>
        </a>
      `;
    }
    
    // 게임소개/설명
    if (gameIntroSectionEl) {
      waypointHTML += `
        <a href="#game-intro" class="waypoint" data-section="game-intro">
          <span class="waypoint-dot"></span>
          <span class="waypoint-label">${introLabel}</span>
        </a>
      `;
    }
    
    // 컨트리뷰션
    if (contributionsSectionEl) {
      waypointHTML += `
        <a href="#contributions" class="waypoint" data-section="contributions">
          <span class="waypoint-dot"></span>
          <span class="waypoint-label">컨트리뷰션</span>
        </a>
      `;
    }
    
    // 뒤로가기는 항상 표시
    waypointHTML += `
      <button class="waypoint waypoint-return" onclick="window.history.back()">
        <span class="waypoint-dot waypoint-dot-return"></span>
        <span class="waypoint-label">뒤로가기</span>
      </button>
    </nav>
    `;

    body.insertAdjacentHTML('beforeend', waypointHTML);

    // 스크롤 감지 및 활성화
    const waypoints = document.querySelectorAll('.waypoint');
    
    function updateActiveWaypoint() {
      const scrollPos = window.scrollY + 150; // 화면 상단에서 150px 아래 지점
      
      // 모든 섹션의 위치를 계산하고 정렬
      const sections = [];
      waypoints.forEach(waypoint => {
        const sectionId = waypoint.dataset.section;
        const section = document.getElementById(sectionId);
        
        if (section) {
          // 제목이 있으면 제목 위치를 기준으로, 없으면 섹션 시작 위치
          const titleElement = section.querySelector('h2.highlighted-title');
          let sectionTop;
          
          if (titleElement) {
            const titleRect = titleElement.getBoundingClientRect();
            sectionTop = titleRect.top + window.scrollY;
          } else {
            sectionTop = section.offsetTop;
          }
          
          sections.push({
            waypoint: waypoint,
            sectionId: sectionId,
            top: sectionTop,
            bottom: sectionTop + section.offsetHeight
          });
        }
      });
      
      // 상단부터 정렬
      sections.sort((a, b) => a.top - b.top);
      
      // 현재 스크롤 위치에 해당하는 섹션 찾기 (위에서부터 확인)
      let activeSection = null;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (scrollPos >= section.top) {
          activeSection = section;
          break;
        }
      }
      
      // 타이틀 섹션은 특별 처리 (맨 위에 있을 때만 활성화)
      const titleSection = sections.find(s => s.sectionId === 'title');
      if (titleSection && scrollPos < titleSection.bottom && scrollPos < (sections[1]?.top || Infinity)) {
        activeSection = titleSection;
      }
      
      // 활성화 상태 업데이트
      sections.forEach(section => {
        if (section === activeSection) {
          section.waypoint.classList.add('active');
        } else {
          section.waypoint.classList.remove('active');
        }
      });
    }

    // 스크롤 이벤트
    window.addEventListener('scroll', updateActiveWaypoint);
    updateActiveWaypoint();

    // 클릭 이벤트 - 부드러운 스크롤
    waypoints.forEach(waypoint => {
      waypoint.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = waypoint.dataset.section;
        const section = document.getElementById(sectionId);
        
        if (section) {
          let offsetTop;
          
          // 타이틀은 맨 위로
          if (sectionId === 'title') {
            offsetTop = 0;
          } else if (sectionId === 'trailer') {
            // 트레일러는 제목에 맞춤
            const titleElement = section.querySelector('h2.highlighted-title');
            if (titleElement) {
              const titleRect = titleElement.getBoundingClientRect();
              const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
              offsetTop = titleRect.top + currentScroll - 100;
            } else {
              const rect = section.getBoundingClientRect();
              const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
              offsetTop = rect.top + scrollTop - 100;
            }
          } else if (sectionId === 'contributions') {
            // 컨트리뷰션은 제목에 맞춤
            const titleElement = section.querySelector('h2.highlighted-title');
            if (titleElement) {
              // 제목의 정확한 위치 계산
              const titleRect = titleElement.getBoundingClientRect();
              const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
              offsetTop = titleRect.top + currentScroll - 100; // 제목이 화면 상단에서 100px 아래에 오도록
            } else {
              // 제목을 찾을 수 없으면 섹션 시작 부분
              const rect = section.getBoundingClientRect();
              const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
              offsetTop = rect.top + scrollTop - 100;
            }
          } else if (sectionId === 'experience') {
            // 익스피리언스는 제목에 맞춤
            const titleElement = section.querySelector('h2.highlighted-title');
            if (titleElement) {
              const titleRect = titleElement.getBoundingClientRect();
              const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
              offsetTop = titleRect.top + currentScroll - 100; // 제목이 화면 상단에서 100px 아래에 오도록
            } else {
              const rect = section.getBoundingClientRect();
              const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
              offsetTop = rect.top + scrollTop - 100;
            }
          } else if (sectionId === 'game-intro') {
            // 게임소개는 제목에 맞춤
            const titleElement = section.querySelector('h2.highlighted-title');
            if (titleElement) {
              const titleRect = titleElement.getBoundingClientRect();
              const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
              offsetTop = titleRect.top + currentScroll - 100; // 제목이 화면 상단에서 100px 아래에 오도록
            } else {
              const rect = section.getBoundingClientRect();
              const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
              offsetTop = rect.top + scrollTop - 100;
            }
          } else {
            // 섹션의 실제 위치 계산 (더 정확하게)
            const rect = section.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            offsetTop = rect.top + scrollTop - 20; // 작은 여백만
          }
          
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // 메인 렌더링 함수
  function renderProject() {
    const projectId = getProjectId();
    if (!projectId) {
      console.error('프로젝트 ID를 찾을 수 없습니다.');
      return;
    }

    const project = getProjectData(projectId);
    if (!project) {
      console.error('프로젝트 데이터를 찾을 수 없습니다:', projectId);
      return;
    }

    // 공통 헤더 렌더링
    renderHeader(project);

    // 프로젝트 타입에 따라 렌더링
    if (project.type === 'tech') {
      renderTechProject(project);
    } else {
      // 게임/기획 프로젝트
      renderGameHero(project);
      renderOverview(project);
      renderExperience(project);  // 총 요약용
      renderTrailer(project);      // 트레일러 (첫 번째만)
      renderVideoGallery(project); // 갤러리 (이미지 + 비디오)
      renderGameIntro(project);    // 게임소개/설명 (텍스트 + 이미지) - 갤러리 밑, 컨트리뷰션 위
      renderContributions(project);  // 탭 방식으로 렌더링
      renderProjectDetails(project);
      renderSource(project);
      renderWaypointNavigation(project);  // 이정표 네비게이션
      renderContributionButton();   // 컨트리뷰션 보기 버튼
    }
  }

  // 컨트리뷰션 보기 버튼 렌더링
  function renderContributionButton() {
    const body = document.body;
    
    const buttonHTML = `
      <button class="contribution-cta-button" id="contribution-cta">
        <span class="cta-text">기여 보기</span>
      </button>
    `;

    body.insertAdjacentHTML('beforeend', buttonHTML);

    const button = document.getElementById('contribution-cta');
    const contributionsSection = document.getElementById('contributions');

    if (!button || !contributionsSection) {
      // contributions 섹션이 없으면 버튼 제거
      const btn = document.getElementById('contribution-cta');
      if (btn) btn.remove();
      return;
    }

    // 초기에는 숨김
    button.style.display = 'none';

    // 스크롤 감지 함수
    function checkButtonVisibility() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // 컨트리뷰션 섹션의 제목 위치 확인
      const titleElement = contributionsSection.querySelector('h2.highlighted-title');
      if (!titleElement) {
        button.style.display = 'none';
        return;
      }
      
      const titleRect = titleElement.getBoundingClientRect();
      const contributionsTitleTop = titleRect.top + scrollTop;
      
      // 타이틀 섹션 확인 (맨 위)
      const titleSection = document.getElementById('title');
      let titleSectionBottom = 0;
      if (titleSection) {
        const titleRect = titleSection.getBoundingClientRect();
        titleSectionBottom = titleRect.bottom + scrollTop;
      }
      
      // 버튼 표시 조건:
      // 1. 타이틀 섹션을 벗어났고
      // 2. 컨트리뷰션 제목이 아직 화면 상단에 도달하지 않았을 때
      const isPastTitle = scrollTop > titleSectionBottom + 50;
      const isBeforeContributions = scrollTop < contributionsTitleTop - 150;
      
      if (isPastTitle && isBeforeContributions) {
        button.style.display = 'flex';
      } else {
        button.style.display = 'none';
      }
    }

    // 스크롤 이벤트
    window.addEventListener('scroll', checkButtonVisibility);
    checkButtonVisibility(); // 초기 체크

    // 클릭 이벤트 - 컨트리뷰션으로 스크롤 (제목에 맞춤)
    button.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      const titleElement = contributionsSection.querySelector('h2.highlighted-title');
      let offsetTop;
      
      if (titleElement) {
        // 제목의 정확한 위치 계산
        const titleRect = titleElement.getBoundingClientRect();
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        offsetTop = titleRect.top + currentScroll - 100; // 제목이 화면 상단에서 100px 아래에 오도록
      } else {
        // 제목을 찾을 수 없으면 섹션 시작 부분
        const rect = contributionsSection.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        offsetTop = rect.top + scrollTop - 100;
      }
      
      window.scrollTo({
        top: Math.max(0, offsetTop),
        behavior: 'smooth'
      });
    });

    // Lightbox가 열릴 때 이정표 숨기기
    function updateWaypointVisibility() {
      const waypointNav = document.querySelector('.waypoint-navigation');
      if (!waypointNav) return;
      
      // hash가 media로 시작하면 lightbox가 열린 것
      if (window.location.hash && window.location.hash.startsWith('#media')) {
        waypointNav.style.opacity = '0';
        waypointNav.style.visibility = 'hidden';
        waypointNav.style.pointerEvents = 'none';
      } else {
        waypointNav.style.opacity = '1';
        waypointNav.style.visibility = 'visible';
        waypointNav.style.pointerEvents = 'auto';
      }
    }

    // hashchange 이벤트 감지
    window.addEventListener('hashchange', updateWaypointVisibility);
    
    // 초기 상태 확인
    updateWaypointVisibility();
  }

  // DOM 로드 완료 시 렌더링
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderProject);
  } else {
    renderProject();
  }
})();
