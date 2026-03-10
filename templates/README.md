# 프로젝트 페이지 템플릿 시스템 사용 가이드

## 개요

이 템플릿 시스템을 사용하면 모든 프로젝트 페이지의 내용을 한 곳에서 관리할 수 있습니다.

## 파일 구조

- `js/projects-data.js` - 모든 프로젝트 데이터가 저장된 파일
- `js/project-template.js` - 데이터를 HTML로 렌더링하는 스크립트
- `templates/template-game.html` - 게임/기획 프로젝트용 템플릿
- `templates/template-tech.html` - 기술 프로젝트용 템플릿

## 사용 방법

### 1. 프로젝트 정보 수정하기

`js/projects-data.js` 파일을 열어서 프로젝트 정보를 수정하세요.

예시:
```javascript
"00_NewManzo": {
  type: "game",
  title: "New MANZO",
  subtitle: "Hear the Ocean's Call",
  // ... 나머지 정보
}
```

### 2. 새 프로젝트 추가하기

1. `js/projects-data.js`에 새 프로젝트 데이터 추가
2. 적절한 템플릿 파일(`template-game.html` 또는 `template-tech.html`)을 복사
3. 파일명을 프로젝트 ID와 동일하게 저장 (예: `05_NewProject.html`)
4. 템플릿 파일의 `<title>` 태그만 수정

### 3. 공통 구조 변경하기

모든 프로젝트 페이지의 공통 부분(헤더, 푸터 등)을 변경하려면:
- 게임 프로젝트: `templates/template-game.html` 수정 후 모든 게임 프로젝트 파일에 적용
- 기술 프로젝트: `templates/template-tech.html` 수정 후 모든 기술 프로젝트 파일에 적용

## 프로젝트 데이터 구조

### 게임/기획 프로젝트 (type: "game" 또는 "planning")

```javascript
{
  type: "game",
  title: "프로젝트 제목",
  subtitle: "프로젝트 부제목",
  pageTitle: "페이지 타이틀",
  heroType: "video" | "image",  // Hero 섹션 타입
  heroMedia: "미디어 경로",
  overview: "개요 설명 (HTML 가능)",
  features: ["기능1", "기능2"],
  experience: {
    role: "역할",
    period: "기간",
    description: "설명"
  },
  videos: [...],  // 비디오 목록
  contributions: {...},  // 기여 내용
  source: {...}  // 소스 링크
}
```

### 기술 프로젝트 (type: "tech")

```javascript
{
  type: "tech",
  title: "프로젝트 제목",
  thumbnail: "썸네일 이미지 경로",
  overview: "개요",
  tasks: ["작업1", "작업2"],
  reflection: "회고",
  demo: {
    src: "데모 경로",
    start: "시작 파라미터 (선택)"
  }
}
```

## 주의사항

- 프로젝트 ID는 파일명과 일치해야 합니다 (확장자 제외)
- HTML 파일은 템플릿을 기반으로 하되, `<title>` 태그만 프로젝트별로 수정하면 됩니다
- 나머지 모든 내용은 `projects-data.js`에서 관리됩니다
