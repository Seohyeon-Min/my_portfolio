# Korean translation of build_activision_resume.py (Activision 2027 Summer Internship - Tech Art).
# Same layout as the English version: reuses styles()/project()/section()/linked_label() from
# build_resumes.py, swapping Helvetica for Malgun Gothic since Helvetica has no Hangul glyphs.
# Header name, section titles, and the education line are hardcoded in English inside
# build_resumes.build()/header(), so they're re-implemented here in Korean.
from reportlab.lib.units import inch
from reportlab.lib.pagesizes import letter
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.fonts import addMapping
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle

import build_resumes as br

pdfmetrics.registerFont(TTFont("Malgun", "C:/Windows/Fonts/malgun.ttf"))
pdfmetrics.registerFont(TTFont("Malgun-Bold", "C:/Windows/Fonts/malgunbd.ttf"))
addMapping("Malgun", 0, 0, "Malgun")
addMapping("Malgun", 1, 0, "Malgun-Bold")
addMapping("Malgun", 0, 1, "Malgun")
addMapping("Malgun", 1, 1, "Malgun-Bold")
addMapping("Malgun-Bold", 0, 0, "Malgun-Bold")
addMapping("Malgun-Bold", 1, 0, "Malgun-Bold")
addMapping("Malgun-Bold", 0, 1, "Malgun-Bold")
addMapping("Malgun-Bold", 1, 1, "Malgun-Bold")

FONT_MAP = {"Helvetica": "Malgun", "Helvetica-Oblique": "Malgun", "Helvetica-Bold": "Malgun-Bold"}


def styles_ko(accent, **kwargs):
    s = br.styles(accent, **kwargs)
    for style in s.values():
        style.fontName = FONT_MAP.get(style.fontName, style.fontName)
    return s


def header_ko(s, role, content_width):
    left = [Paragraph("민서현", s["name"]), Paragraph(role, s["role"])]
    right = Paragraph(
        '<link href="mailto:weare1842@gmail.com">weare1842@gmail.com</link><br/>'
        '<link href="https://github.com/Seohyeon-Min">github.com/Seohyeon-Min</link> | '
        '<link href="https://seohyeon-min.github.io/my_portfolio/">seohyeon-min.github.io/my_portfolio</link><br/>'
        '<link href="https://www.linkedin.com/in/seohyeon-min-781362250/">linkedin.com/in/seohyeon-min</link>', s["contact"])
    t = Table([[left, right]], colWidths=[content_width - 2.45*inch, 2.45*inch])
    t.setStyle(TableStyle([("VALIGN", (0,0), (-1,-1), "TOP"), ("ALIGN", (1,0), (1,0), "RIGHT"), ("LEFTPADDING",(0,0),(-1,-1),0), ("RIGHTPADDING",(0,0),(-1,-1),0)]))
    return t


def build_ko(path, role, summary, selected, additional, skill_rows, accent,
             bullet_size=7.35, project_gap=0, skill_pad=1.5, top_margin=.3*inch, bottom_margin=.1*inch):
    s = styles_ko(accent, bullet_size=bullet_size)
    content_width = 6.6*inch
    doc = SimpleDocTemplate(str(path), pagesize=letter, rightMargin=.55*inch, leftMargin=.55*inch, topMargin=top_margin, bottomMargin=bottom_margin,
                            title="민서현 - 테크니컬 아티스트 이력서", author="Min Seohyeon")
    story = [header_ko(s, role, content_width), Spacer(1, 3), br.rule(accent, content_width), Paragraph(summary, s["summary"])]
    story += br.section("기술", s, accent)
    data = [[Paragraph(f"<b>{k}</b>", s["skill"]), Paragraph(v, s["skill"])] for k, v in skill_rows]
    label_w = 1.18*inch
    st = Table(data, colWidths=[label_w, content_width - label_w], hAlign="LEFT")
    st.setStyle(TableStyle([("VALIGN",(0,0),(-1,-1),"TOP"), ("BACKGROUND",(0,0),(0,-1),br.PALE), ("LEFTPADDING",(0,0),(-1,-1),4), ("RIGHTPADDING",(0,0),(-1,-1),4), ("TOPPADDING",(0,0),(-1,-1),skill_pad), ("BOTTOMPADDING",(0,0),(-1,-1),skill_pad), ("LINEBELOW",(0,0),(-1,-2),.35,br.LINE)]))
    story.append(st)
    story += br.section("경력", s, accent)
    for p in selected:
        title, date, bullets, url, role_stack, emphasis = (*p, False)[:6]
        story += [br.project(title, date, bullets, url, role_stack, s, accent, content_width, emphasis), Spacer(1, project_gap)]
    story += br.section("추가 프로젝트", s, accent)
    for title, text, url in additional:
        story.append(Paragraph(f"<b>{br.linked_label(title, url, accent, size=6.2)}</b> - {text}", s["small"]))
    story += br.section("학력", s, accent)
    story.append(Paragraph("<b>컴퓨터과학 학사 (실시간 인터랙티브 시뮬레이션)</b> | 2028년 5월 졸업 예정<br/>계명대학교 / DigiPen Institute of Technology | GPA 3.958/4.0", s["small"]))
    doc.build(story)


SITE = "https://seohyeon-min.github.io/my_portfolio/"

selected = [
    ("RUIN FORGE", "2026 – 현재 (진행 중)", [
        "환경 아티스트가 컨트롤 오브젝트 하나의 위치만 바꾸면 2겹 콘크리트 파손, 드러난 안쪽 면, 크랙 배치가 다시 생성되는 Blender Geometry Nodes 툴 제작 중. 변형마다 직접 모델링하는 작업을 대체."
    ], SITE + "portfolio_game/10_RuinForge.html",
       "테크니컬 아티스트 - 절차적 툴 (개인 프로젝트) | Blender Geometry Nodes / Python", True),
    ("CARBOOM", "2026 – 2026년 10월", [
        "아티스트가 편집하는 DataAsset 파라미터로 우주 배경 행성을 절차적으로 배치하는 Unreal Engine Python 툴을 콘텐츠 제작 파이프라인용으로 제작. 아티스트가 코드 수정 없이 구도를 반복 조정 가능.",
        "겉보기 크기, 밀도, 군집 같은 구도 의도를 재사용 가능한 배치 컨트롤로 변환해 환경 아트 디렉션과 절차적 콘텐츠 생성을 연결.",
        "팀 아티스트 2명과 협업하며 에디터 내 크리틱을 바탕으로 배치 규칙을 개선. Jira와 Perforce로 작업 관리."
    ], SITE + "portfolio_game/09_Carboom.html",
       "게임플레이 프로그래머 / 테크니컬 아트 - 툴 | Unreal Engine / Python / C++ / Perforce / Jira", True),
    ("POSEIDON SKATE", "2026년 9월", [
        "플로우 노이즈, 도메인 워핑, 보로노이 커스틱을 활용한 바다·파도·토네이도 HLSL 셰이더로 플레이어가 탈 수 있는 절차적 수면 구현.",
        "로우폴리 포세이돈 캐릭터를 Blender에서 모델링·리깅(본 25개)하고 FBX로 Unity에 통합.",
        "착지 임팩트용 VFX 스플래시 링 셰이더 제작. 범프마다 랜덤 타이밍과 보로노이 면 디테일 적용."
    ], SITE + "portfolio_game/08_PoseidonSkate.html",
       "테크니컬 아트 / 셰이더 개발 · 캐릭터 모델링 &amp; 리깅 | Unity URP / HLSL / C# / Blender / Jira / Perforce", True),
    ("STREET TYPER", "2026년 8월", [
        "출시된 2개 국어 타이핑 전투 게임의 오리지널 2D 아트, UI 구성, 파티클, 아웃라인, 카메라 셰이크, 히트 VFX, 애니메이션 피드백 담당.",
        "둥근 형태, 그라디언트, 드롭/이너 섀도, 블러, 프리셋, 인스펙터 반복 작업을 지원하는 AI 보조 재사용 UI 셰이더 워크플로우를 명세·평가·디버깅·통합."
    ], SITE + "portfolio_game/06_StreetTyper.html",
       "테크니컬 아트 / UI / 아트 | Unity URP / C# / ShaderLab / Notion", True),
    ("TOO HOT!", "2026년 7월", [
        "게임의 2D 그림자 표현, 패턴별 VFX, UI, 애니메이션, 히트 피드백, 시각적 위계를 제작·통합. 전투 공간 전반에서 그림자가 잘 읽히도록 폭·길이 컨트롤 조정.",
        "GameplayManager와 스테이지별 ScriptableObject 데이터 흐름, 세이브 범위 안전장치, 챕터 선택, 클린 상태 디버그 컨트롤을 명세하고 팀원이 작성한 게임플레이 구현을 리뷰.",
        "130개 이상의 P0-P3 백로그로 프로그래머 2명을 조율하며 우선순위를 전달하고 코드 리뷰, 머지, 최종 비주얼 통합 진행."
    ], SITE + "portfolio_game/07_TooHot.html",
       "테크니컬 아트 / 비주얼 통합 | Unity / ShaderLab / VFX / Notion", True),
    ("NEW MANZO", "2025년 8월 – 2026년 9월", [
        "지면 레이캐스트와 스텝 아크 모션으로 다리가 여러 개인 보스의 절차적 다리 애니메이션 구현.",
        "레이캐스팅 기반 수중 시야와 포스트 프로세싱으로 분위기 있는 렌더링 구현."
    ], SITE + "portfolio_game/00_NewManzo.html",
       "C# 프로그래머 / 테크니컬 아트 | Unity / C# / Notion", True),
    ("MANZO", "2024년 9월 – 2025년 12월", [
        "레이어 정렬 드로우 큐와 프레임버퍼 기반 포스트 프로세싱 파이프라인(블룸, 수중 왜곡, 갓 레이, 물결, 화면 전환)을 갖춘 커스텀 C++/OpenGL 렌더러 제작.",
        "재사용 가능한 파티클 모션 타입을 구현하고 셰이더·렌더러 기반 시각 효과를 게임플레이 씬에 통합.",
        "심각한 프레임 드롭을 프로파일링해 프레임마다 중복되는 충돌 검사가 원인임을 찾아내고, 반복 작업을 제거해 성능 안정화. 저장소 최다 기여자: 커밋 366개."
    ], SITE + "portfolio_game/01_Manzo.html",
       "그래픽스 / 엔진 프로그래머 | C++ / OpenGL / GLSL / Notion", True),
    ("조교 - 게임 개발 프로젝트 I", "2025년 봄학기", [
        "DigiPen Korea 학생 약 30명의 C++ 구현과 디버깅을 지원하고, 팀 프로젝트에 실행 가능한 기술 피드백으로 문제와 해결책을 전달."
    ], None, None),
]

additional = [
    ("아트 기초", "Dragon Head: 스타일라이즈드 3D 에셋을 베이스 메시부터 최종 렌더까지 모델링·스컬프팅·셰이딩·렌더링.",
     SITE + "portfolio_planning/ArtGallery.html"),
    ("UNREAL VFX", "Edge Drive: Unreal Engine에서 기존 VFX 에셋을 배치·조정하고 Cascade와 Niagara로 기본 수정.",
     SITE + "portfolio_game/02_EdgeDirve.html"),
    ("객체지향 엔진 코드", "Double Hit: C++ 텍스처/스프라이트 관리, 충돌, GameObject/GameComponent 구조.",
     SITE + "portfolio_game/03_DoubleHit.html"),
]

skills = [
    ("툴 &amp; 파이프라인", "Blender Geometry Nodes, Python, Unreal Engine 에디터 툴, DataAsset 워크플로우, C# 에디터 툴, 메시 Boolean / 볼륨 리메시"),
    ("3D / 게임 엔진", "Blender(모델링, 리깅), Unity URP, Unreal Engine(Cascade/Niagara VFX), 커스텀 C++/OpenGL 엔진"),
    ("실시간 그래픽스", "HLSL, ShaderLab, GLSL, OpenGL, UI 셰이더, 프레임버퍼 포스트 프로세싱, 절차적 애니메이션, RenderDoc"),
    ("프로그래밍", "C++, C#, Python, C, JavaScript; 객체지향 프로그래밍, 디버깅, 성능 프로파일링"),
    ("프로덕션 / 트래킹", "Jira, Perforce, Git 브랜치 및 머지 리뷰, GitHub Projects/Issues, Notion, CMake, Visual Studio"),
]

if __name__ == "__main__":
    build_ko(
        br.DOCS / "Resume_Activision_Tech_Art_KO.pdf",
        "테크니컬 아티스트 | 툴, 파이프라인 &amp; 실시간 비주얼",
        "아티스트를 위한 툴과 콘텐츠 제작 파이프라인을 만드는 테크니컬 아티스트입니다. Blender 절차적 파괴 툴, 아티스트용 Unreal Engine 에디터 툴, "
        "Unity와 C++/OpenGL 실시간 셰이더를 제작합니다. 아티스트·엔지니어와 협업하며 문제와 해결책을 명확히 전달하고, 크리틱을 다음 이터레이션으로 이어갑니다.",
        selected, additional, skills, br.BLUE,
    )
