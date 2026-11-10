from pathlib import Path

from docx import Document
from docx.enum.section import WD_SECTION
from docx.enum.table import WD_CELL_VERTICAL_ALIGNMENT, WD_TABLE_ALIGNMENT
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.shared import Cm, Pt, RGBColor
from pypdf import PdfReader


ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "docs" / "kr"
OUT_PATH = OUT_DIR / "Resume_Engine_Programmer_KR.docx"
PORTRAIT_PATH = ROOT / "tmp" / "kr_resume_portrait.jpg"
REFERENCE_PDF = Path(r"C:\Users\gtg06\Desktop\ㅤ\레쥬메\Resume_KR.pdf")

NAVY = "172033"
BLUE = "315CF4"
MID = "536078"
LIGHT = "E9EDF5"
RULE = "C8CEDA"
WHITE = "FFFFFF"


def set_cell_shading(cell, fill):
    tc_pr = cell._tc.get_or_add_tcPr()
    shd = tc_pr.find(qn("w:shd"))
    if shd is None:
        shd = OxmlElement("w:shd")
        tc_pr.append(shd)
    shd.set(qn("w:fill"), fill)


def set_cell_margins(cell, top=70, start=90, bottom=70, end=90):
    tc = cell._tc
    tc_pr = tc.get_or_add_tcPr()
    tc_mar = tc_pr.first_child_found_in("w:tcMar")
    if tc_mar is None:
        tc_mar = OxmlElement("w:tcMar")
        tc_pr.append(tc_mar)
    for margin, value in (("top", top), ("start", start), ("bottom", bottom), ("end", end)):
        node = tc_mar.find(qn(f"w:{margin}"))
        if node is None:
            node = OxmlElement(f"w:{margin}")
            tc_mar.append(node)
        node.set(qn("w:w"), str(value))
        node.set(qn("w:type"), "dxa")


def set_table_borders(table, color=RULE, size="5"):
    tbl_pr = table._tbl.tblPr
    borders = tbl_pr.first_child_found_in("w:tblBorders")
    if borders is None:
        borders = OxmlElement("w:tblBorders")
        tbl_pr.append(borders)
    for edge in ("top", "left", "bottom", "right", "insideH", "insideV"):
        tag = borders.find(qn(f"w:{edge}"))
        if tag is None:
            tag = OxmlElement(f"w:{edge}")
            borders.append(tag)
        tag.set(qn("w:val"), "single")
        tag.set(qn("w:sz"), size)
        tag.set(qn("w:color"), color)


def set_repeat_table_header(row):
    tr_pr = row._tr.get_or_add_trPr()
    tbl_header = OxmlElement("w:tblHeader")
    tbl_header.set(qn("w:val"), "true")
    tr_pr.append(tbl_header)


def set_run_font(run, name="Malgun Gothic", size=None, bold=None, color=None, italic=None):
    run.font.name = name
    run._element.get_or_add_rPr().rFonts.set(qn("w:ascii"), name)
    run._element.get_or_add_rPr().rFonts.set(qn("w:hAnsi"), name)
    run._element.get_or_add_rPr().rFonts.set(qn("w:eastAsia"), name)
    if size is not None:
        run.font.size = Pt(size)
    if bold is not None:
        run.bold = bold
    if color:
        run.font.color.rgb = RGBColor.from_string(color)
    if italic is not None:
        run.italic = italic


def style_paragraph(p, before=0, after=0, line=1.0, keep=False):
    pf = p.paragraph_format
    pf.space_before = Pt(before)
    pf.space_after = Pt(after)
    pf.line_spacing = line
    pf.keep_with_next = keep


def add_text(p, text, size=9, bold=False, color=NAVY, italic=False):
    r = p.add_run(text)
    set_run_font(r, size=size, bold=bold, color=color, italic=italic)
    return r


def add_section_heading(doc, text):
    p = doc.add_paragraph(style="Heading 1")
    style_paragraph(p, before=4, after=2, keep=True)
    add_text(p, text, size=11.2, bold=True, color=BLUE)
    p_pr = p._p.get_or_add_pPr()
    pbdr = OxmlElement("w:pBdr")
    bottom = OxmlElement("w:bottom")
    bottom.set(qn("w:val"), "single")
    bottom.set(qn("w:sz"), "8")
    bottom.set(qn("w:space"), "3")
    bottom.set(qn("w:color"), BLUE)
    pbdr.append(bottom)
    p_pr.append(pbdr)
    return p


def add_bullet(container, text, size=8.35, after=0.6):
    p = container.add_paragraph(style="List Bullet")
    style_paragraph(p, after=after, line=1.04)
    p.paragraph_format.left_indent = Cm(0.42)
    p.paragraph_format.first_line_indent = Cm(-0.24)
    add_text(p, text, size=size)
    return p


def add_project(doc, name, period, role, tools, bullets):
    table = doc.add_table(rows=1, cols=2)
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    table.autofit = False
    table.columns[0].width = Cm(12.8)
    table.columns[1].width = Cm(4.3)
    table.rows[0].cells[0].width = Cm(12.8)
    table.rows[0].cells[1].width = Cm(4.3)
    for cell in table.rows[0].cells:
        set_cell_margins(cell, top=35, bottom=15, start=0, end=0)
        cell.vertical_alignment = WD_CELL_VERTICAL_ALIGNMENT.CENTER
    p = table.cell(0, 0).paragraphs[0]
    style_paragraph(p, after=0, keep=True)
    add_text(p, name, size=9.7, bold=True, color=NAVY)
    p = table.cell(0, 1).paragraphs[0]
    p.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    style_paragraph(p, after=0, keep=True)
    add_text(p, period, size=8.3, bold=True, color=BLUE)

    p = doc.add_paragraph()
    style_paragraph(p, after=1.0, line=1.0, keep=True)
    add_text(p, role, size=8.1, bold=True, color=MID)
    add_text(p, "  |  " + tools, size=8.0, color=MID)
    for bullet in bullets:
        add_bullet(doc, bullet)


def extract_portrait():
    PORTRAIT_PATH.parent.mkdir(parents=True, exist_ok=True)
    reader = PdfReader(str(REFERENCE_PDF))
    image = reader.pages[0].images[0]
    PORTRAIT_PATH.write_bytes(image.data)


def build():
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    extract_portrait()

    doc = Document()
    section = doc.sections[0]
    section.page_width = Cm(21)
    section.page_height = Cm(29.7)
    section.top_margin = Cm(0.95)
    section.bottom_margin = Cm(0.95)
    section.left_margin = Cm(1.45)
    section.right_margin = Cm(1.45)

    normal = doc.styles["Normal"]
    normal.font.name = "Malgun Gothic"
    normal._element.rPr.rFonts.set(qn("w:eastAsia"), "Malgun Gothic")
    normal.font.size = Pt(9)
    normal.font.color.rgb = RGBColor.from_string(NAVY)
    normal.paragraph_format.space_after = Pt(0)

    title_style = doc.styles["Title"]
    title_style.font.name = "Malgun Gothic"
    title_style._element.rPr.rFonts.set(qn("w:eastAsia"), "Malgun Gothic")
    title_style.font.color.rgb = RGBColor.from_string(NAVY)
    title_style.font.size = Pt(25)
    title_style.font.bold = True

    header = doc.add_table(rows=1, cols=3)
    header.alignment = WD_TABLE_ALIGNMENT.CENTER
    header.autofit = False
    widths = [Cm(3.1), Cm(8.8), Cm(5.2)]
    for cell, width in zip(header.rows[0].cells, widths):
        cell.width = width
        set_cell_margins(cell, top=0, bottom=0, start=70, end=70)
        cell.vertical_alignment = WD_CELL_VERTICAL_ALIGNMENT.CENTER
    set_cell_shading(header.cell(0, 1), NAVY)
    set_cell_shading(header.cell(0, 2), NAVY)

    photo_p = header.cell(0, 0).paragraphs[0]
    photo_p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    photo_p.add_run().add_picture(str(PORTRAIT_PATH), width=Cm(2.45), height=Cm(2.9))

    name_p = header.cell(0, 1).paragraphs[0]
    style_paragraph(name_p, after=1)
    add_text(name_p, "민서현", size=25, bold=True, color=WHITE)
    role_p = header.cell(0, 1).add_paragraph()
    style_paragraph(role_p, after=0)
    add_text(role_p, "게임 엔진 프로그래머", size=12.5, bold=True, color="AFC0FF")

    contact = header.cell(0, 2)
    for idx, line in enumerate([
        "010 8655 4365",
        "weare1842@gmail.com",
        "github.com/Seohyeon-Min",
        "seohyeon-min.github.io/my_portfolio",
        "linkedin.com/in/seohyeon-min",
    ]):
        p = contact.paragraphs[0] if idx == 0 else contact.add_paragraph()
        style_paragraph(p, after=1.1)
        add_text(p, line, size=7.8 if idx > 1 else 8.4, color=WHITE)

    p = doc.add_paragraph()
    style_paragraph(p, before=3, after=1, line=1.1)
    add_text(p, "C++ 기반 게임 엔진 및 툴셋과 Real Time Rendering 시스템을 개발해 온 엔진 프로그래머입니다. ", size=8.85, bold=True)
    add_text(p, "커스텀 C++/OpenGL 엔진에서 렌더링·충돌·오브젝트 시스템을 구현하고, 게임 개발 및 서비스 과정에서 발생하는 성능 저하와 플레이 안정성 문제를 분석·최적화했습니다. 수학·물리 기반 문제 해결과 협업 프로젝트 완성 경험을 갖추고 있습니다.", size=8.85)

    add_section_heading(doc, "핵심 역량")
    skills = doc.add_table(rows=4, cols=2)
    skills.alignment = WD_TABLE_ALIGNMENT.CENTER
    skills.autofit = False
    skills.columns[0].width = Cm(3.25)
    skills.columns[1].width = Cm(13.85)
    skill_rows = [
        ("C++ 프로그래밍", "C++, C#, C, Python | 객체지향 설계, 메모리·수명 관리, 디버깅, 성능 프로파일링"),
        ("게임 엔진 및 툴셋", "커스텀 엔진, 오브젝트·컴포넌트, 충돌, 데이터 기반 시스템, Unreal Editor Python, Unity Editor 툴"),
        ("Real Time Rendering", "OpenGL, GLSL, HLSL, Unity URP | 멀티패스 렌더링, 프레임버퍼, 포스트 프로세싱, 셰이더"),
        ("수학·물리 및 협업", "벡터·행렬·좌표 변환, 레이캐스트, 연속 충돌, 보간 | Git, Perforce, Jira, CMake, 기술 피드백"),
    ]
    for i, (label, value) in enumerate(skill_rows):
        set_cell_shading(skills.cell(i, 0), LIGHT)
        for cell in skills.rows[i].cells:
            set_cell_margins(cell, top=48, bottom=48, start=85, end=85)
            cell.vertical_alignment = WD_CELL_VERTICAL_ALIGNMENT.CENTER
        p = skills.cell(i, 0).paragraphs[0]
        add_text(p, label, size=8.3, bold=True)
        p = skills.cell(i, 1).paragraphs[0]
        add_text(p, value, size=8.15)
    set_table_borders(skills)

    def compact_project(cell, name, period, role, tools, bullets):
        p = cell.add_paragraph()
        style_paragraph(p, before=1.8, after=0.25, keep=True)
        add_text(p, name, size=8.7, bold=True)
        add_text(p, "  " + period, size=7.35, bold=True, color=BLUE)
        p = cell.add_paragraph()
        style_paragraph(p, after=0.3, line=1.0, keep=True)
        add_text(p, role, size=7.1, bold=True, color=MID)
        add_text(p, " | " + tools, size=6.9, color=MID)
        for bullet in bullets:
            p = cell.add_paragraph(style="List Bullet")
            style_paragraph(p, after=0.15, line=1.0)
            p.paragraph_format.left_indent = Cm(0.34)
            p.paragraph_format.first_line_indent = Cm(-0.2)
            add_text(p, bullet, size=7.25)

    add_section_heading(doc, "주요 프로젝트")
    projects = doc.add_table(rows=1, cols=2)
    projects.alignment = WD_TABLE_ALIGNMENT.CENTER
    projects.autofit = False
    projects.columns[0].width = Cm(9.0)
    projects.columns[1].width = Cm(8.1)
    left, right = projects.rows[0].cells
    for cell in (left, right):
        set_cell_margins(cell, top=0, bottom=0, start=80, end=80)
        cell.vertical_alignment = WD_CELL_VERTICAL_ALIGNMENT.TOP
        cell.paragraphs[0]._element.getparent().remove(cell.paragraphs[0]._element)
    set_table_borders(projects, color=RULE, size="4")

    compact_project(left, "NEW MANZO", "2025.08 - 2026.09", "주 C# 프로그래머 · 프로덕션 리드", "Unity / C# / FMOD", [
        "Template Method와 Composite로 21개 보스 패턴과 중첩 콤보를 확장 가능한 게임 시스템으로 개발했습니다.",
        "비트 동기화, AI·이동, 사냥·인벤토리·저장·게임 플로우를 구현하고 585개 중 418개 커밋을 담당해 협업 프로젝트를 완성했습니다.",
    ])
    compact_project(left, "MANZO", "2024.09 - 2025.12", "그래픽스·엔진 프로그래머", "C++ / OpenGL / GLSL", [
        "C++ 커스텀 엔진에 BPM 타이밍, 이동·보스 패턴, 이진 탐색 기반 연속 충돌을 구현해 플레이 안정성을 높였습니다.",
        "중복 충돌 검사를 프레임 저하 원인으로 추적·제거하고, OpenGL 멀티패스 렌더러를 개발·최적화했습니다. 최다 기여자 366커밋입니다.",
    ])
    compact_project(left, "DOUBLE HIT", "2024.03 - 2024.07", "시스템 프로그래머", "C++ / raylib", [
        "C++ 엔진의 스프라이트 파서, 텍스처 캐시, 오브젝트 업데이트·렌더링·충돌 디스패치 루프를 개발했습니다.",
        "약 30개 하드코딩 좌표를 .plf 데이터로 전환해 유지보수성을 개선했으며, 시스템은 이후 MANZO 엔진의 기반이 됐습니다.",
    ])

    compact_project(right, "BIRD STRIKE", "2023.11 - 2023.12", "게임플레이 프로그래머 · 1인 개발", "C++ / raylib", [
        "상용 엔진 없이 C++로 오디오 타임라인 비트 감지, 리듬 동기화 적 생성, 최대 4배 공격 분할을 구현했습니다.",
    ])
    compact_project(right, "CARBOOM", "2026.01 - 2026.10", "게임플레이 프로그래머 · 툴", "Unreal / C++ / Python", [
        "Unreal DataAsset과 Python으로 행성 생성·초기화 툴셋을 개발해 아티스트가 코드 없이 구도를 반복 조정하도록 했습니다.",
    ])
    compact_project(right, "TOO HOT · POSEIDON SKATE", "2026.07 - 2026.09", "게임 시스템 명세 · 테크니컬 아트", "Unity / C# / HLSL", [
        "GameplayManager와 ScriptableObject 흐름을 명세·리뷰하고 130개 이상의 P0-P3 백로그를 완성 빌드에 통합했습니다.",
        "C# 생성 메시·콜라이더로 물리 파도를 구현하고 GPU 수면 셰이더와 충돌 구조를 분리해 실시간 조정이 가능하게 했습니다.",
    ])
    compact_project(right, "조교  게임 개발 프로젝트 I", "2025년 봄", "DigiPen Korea", "C++ / 디버깅", [
        "학생 약 30명의 구현 문제를 재현·분석하고 실행 가능한 기술 피드백을 제공했습니다.",
    ])

    add_section_heading(doc, "엔진 및 렌더링 구현")
    evidence = doc.add_table(rows=4, cols=2)
    evidence.alignment = WD_TABLE_ALIGNMENT.CENTER
    evidence.autofit = False
    evidence.columns[0].width = Cm(3.15)
    evidence.columns[1].width = Cm(13.95)
    evidence_rows = [
        ("렌더링 파이프라인", "레이어 정렬 드로우 큐와 ping-pong 프레임버퍼 체인으로 블룸, 수중 왜곡, 갓레이, 물결, 화면 전환을 실시간 렌더링."),
        ("수학 및 물리", "벡터·행렬·좌표 공간, atan2 방향 계산, 레이캐스트, 이진 탐색 기반 time-of-impact 충돌, 메시·콜라이더 생성 경험."),
        ("그래픽스 연구", "파라메트릭 메시 생성, 지수 안개, 툰 셰이딩과 화면 공간 미분, 그림자 매핑, Value·Gradient Noise를 OpenGL/GLSL로 구현."),
        ("엔진 및 툴셋", "CMake·Visual Studio 기반 C++ 빌드, RenderDoc 디버깅, Unreal Editor Python·DataAsset, Unity Inspector·프리셋 툴 개발."),
    ]
    for i, (label, value) in enumerate(evidence_rows):
        set_cell_shading(evidence.cell(i, 0), LIGHT)
        for cell in evidence.rows[i].cells:
            set_cell_margins(cell, top=42, bottom=42, start=75, end=75)
            cell.vertical_alignment = WD_CELL_VERTICAL_ALIGNMENT.CENTER
        add_text(evidence.cell(i, 0).paragraphs[0], label, size=7.45, bold=True)
        add_text(evidence.cell(i, 1).paragraphs[0], value, size=7.15)
    set_table_borders(evidence)

    footer = section.footer
    fp = footer.paragraphs[0]
    fp.alignment = WD_ALIGN_PARAGRAPH.CENTER
    add_text(fp, "DigiPen Institute of Technology  컴퓨터과학 학사 실시간 인터랙티브 시뮬레이션  |  2028년 5월 졸업 예정  |  GPA 3.958/4.0  |  TOEIC 895", size=7.2, color=MID)

    core_props = doc.core_properties
    core_props.title = "민서현 게임 엔진 프로그래머 이력서"
    core_props.subject = "게임 엔진 및 툴셋 개발 지원용 한국어 이력서"
    core_props.author = "민서현"
    core_props.keywords = "게임 엔진 프로그래머, C++, Real Time Rendering, 게임 엔진 및 툴셋, OpenGL, 최적화"

    doc.save(OUT_PATH)
    print(OUT_PATH)


if __name__ == "__main__":
    build()
