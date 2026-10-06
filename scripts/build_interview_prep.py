"""
인터뷰 대비용 프로젝트 설명 PDF 생성 스크립트.

이력서(Resume_TA_Graphics.pdf)에 적힌 불릿 하나하나를, 면접에서 "이게 무슨 뜻이고
실제로 어떻게 만들었는지"를 막힘없이 설명할 수 있도록 풀어서 정리한 문서를 만든다.
설명 자체는 한국어로 쓰되, 나중에 영어로 같은 내용을 말해야 하는 상황을 가정해서
각 항목마다 실제로 쓸 법한 영어 핵심 표현(Key English phrasing)을 같이 넣는다.

추가 규칙:
  - 전문 용어(Gerstner wave, Voronoi 등)는 각주로 설명한다 (문서 끝 "용어 설명" 섹션).
  - "How"와 Q&A 답변에는 실제로 그 설명을 뒷받침하는 코드 일부(스니펫)를 같이 보여준다.
  - 코드 전문은 안 넣는다 (너무 길어진다는 피드백 반영) — 짧은 스니펫으로만 보여준다.

출력 위치: ignored/interview/  (깃헙에 안 올라가는 전용 폴더 — .gitignore 참고)

사용법: python scripts/build_interview_prep.py  (이력서 TA_Graphics 기준 프로젝트들을 한 번에 생성)
"""
from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable, PageBreak
)
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

ROOT = Path(__file__).resolve().parents[1]
# ignored/ is excluded from git (see .gitignore) — interview-prep notes and cover letters are
# personal prep material, not meant to be pushed to GitHub.
OUT_DIR = ROOT / "ignored" / "interview"
OUT_DIR.mkdir(parents=True, exist_ok=True)

# Windows 기본 한글 폰트(맑은 고딕) 등록 — reportlab 기본 Helvetica는 한글 글리프가 없음.
FONT_DIR = Path(r"C:\Windows\Fonts")
pdfmetrics.registerFont(TTFont("Malgun", str(FONT_DIR / "malgun.ttf")))
pdfmetrics.registerFont(TTFont("Malgun-Bold", str(FONT_DIR / "malgunbd.ttf")))

NAVY = colors.HexColor("#10172A")
BLUE = colors.HexColor("#4263EB")
MUTED = colors.HexColor("#536078")
LINE = colors.HexColor("#DDE3F0")
ENGLISH_BG = colors.HexColor("#EEF2FF")
CODE_BG = colors.HexColor("#0F172A")
CODE_FG = colors.HexColor("#E2E8F0")
CODE_ACCENT = colors.HexColor("#7DD3FC")


# ---------------------------------------------------------------------------
# Footnotes: 본문에 fn("용어", "설명")을 쓰면 "용어<sup>[n]</sup>"로 치환되고,
# 문서 끝 "용어 설명" 섹션에 번호 순서대로 쌓인다. 같은 용어를 또 쓰면 같은 번호를 재사용한다.
# ---------------------------------------------------------------------------
_FOOTNOTES = []
_FOOTNOTE_INDEX = {}


def fn(term, explanation=None):
    if term in _FOOTNOTE_INDEX:
        idx = _FOOTNOTE_INDEX[term]
    else:
        _FOOTNOTES.append((term, explanation))
        idx = len(_FOOTNOTES)
        _FOOTNOTE_INDEX[term] = idx
    return f'{term}<super size="6" rise="3">[{idx}]</super>'


def reset_footnotes():
    """문서(프로젝트)가 바뀔 때마다 호출 — 번호가 프로젝트별로 1부터 다시 시작한다."""
    _FOOTNOTES.clear()
    _FOOTNOTE_INDEX.clear()


def styles():
    return {
        "doc_title": ParagraphStyle("doc_title", fontName="Malgun-Bold", fontSize=18, leading=22, textColor=NAVY),
        "doc_sub": ParagraphStyle("doc_sub", fontName="Malgun", fontSize=9.5, leading=13, textColor=MUTED, spaceAfter=10),
        "bullet_num": ParagraphStyle("bullet_num", fontName="Malgun-Bold", fontSize=8, leading=10, textColor=colors.white),
        "resume_line": ParagraphStyle("resume_line", fontName="Malgun", fontSize=9, leading=12.5, textColor=NAVY),
        "label": ParagraphStyle("label", fontName="Malgun-Bold", fontSize=9, leading=12, textColor=NAVY, spaceBefore=6, spaceAfter=2),
        "body": ParagraphStyle("body", fontName="Malgun", fontSize=9.3, leading=14, textColor=NAVY, spaceAfter=3),
        "body_tight": ParagraphStyle("body_tight", fontName="Malgun", fontSize=9.3, leading=13.5, textColor=NAVY, leftIndent=10, bulletIndent=0, spaceAfter=2),
        "qa_q": ParagraphStyle("qa_q", fontName="Malgun-Bold", fontSize=9, leading=13, textColor=NAVY, spaceBefore=5),
        "qa_a": ParagraphStyle("qa_a", fontName="Malgun", fontSize=9, leading=13.5, textColor=NAVY, leftIndent=10, spaceAfter=2),
        "en_label": ParagraphStyle("en_label", fontName="Helvetica-Bold", fontSize=7.5, leading=9, textColor=BLUE),
        "en_body": ParagraphStyle("en_body", fontName="Helvetica", fontSize=8.6, leading=12.5, textColor=NAVY),
        "footer": ParagraphStyle("footer", fontName="Malgun", fontSize=7, leading=9, textColor=MUTED),
        "gloss_title": ParagraphStyle("gloss_title", fontName="Malgun-Bold", fontSize=14, leading=18, textColor=NAVY, spaceBefore=4, spaceAfter=8),
        "gloss_term": ParagraphStyle("gloss_term", fontName="Malgun-Bold", fontSize=9, leading=12, textColor=BLUE, spaceBefore=6),
        "gloss_def": ParagraphStyle("gloss_def", fontName="Malgun", fontSize=8.8, leading=13, textColor=NAVY, leftIndent=10),
        "code_title": ParagraphStyle("code_title", fontName="Malgun-Bold", fontSize=7.3, leading=9, textColor=CODE_ACCENT),
        "code_line": ParagraphStyle("code_line", fontName="Courier", fontSize=6.6, leading=8.4, textColor=CODE_FG),
        "code_note": ParagraphStyle("code_note", fontName="Malgun", fontSize=7.8, leading=10.8, textColor=NAVY, leftIndent=2),
    }


def english_box(s, lines):
    """영어로 말할 때 실제로 쓸 핵심 표현 박스. lines: list[str] (already English)."""
    body = "<br/>".join(lines)
    t = Table(
        [[Paragraph("ENGLISH — KEY PHRASING", s["en_label"])], [Paragraph(body, s["en_body"])]],
        colWidths=[6.4 * inch],
    )
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), ENGLISH_BG),
        ("BOX", (0, 0), (-1, -1), 0.6, colors.HexColor("#C7D2FE")),
        ("LEFTPADDING", (0, 0), (-1, -1), 9),
        ("RIGHTPADDING", (0, 0), (-1, -1), 9),
        ("TOPPADDING", (0, 0), (0, 0), 6),
        ("BOTTOMPADDING", (0, 0), (0, 0), 2),
        ("TOPPADDING", (0, 1), (0, 1), 2),
        ("BOTTOMPADDING", (0, 1), (0, 1), 8),
    ]))
    return t


def render_snippet(s, snippet):
    """snippet = (title, code_text) -> 기본 코드 박스, (title, line_pairs) -> 줄별 설명 박스."""
    title, payload = snippet
    if isinstance(payload, list):
        return code_box_annotated(s, title, payload)
    return code_box(s, title, payload)


def code_box_annotated(s, title, pairs):
    """코드를 한 줄(또는 몇 줄)씩 보여주고, 그 바로 아래에 한국어 설명을 붙이는 박스.
    pairs: list of (code_line_or_lines: str, explanation: str|None)."""
    esc = lambda t: t.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
    rows = [[Paragraph(title, s["code_title"])]]
    kinds = ["title"]
    for code, note in pairs:
        for line in code.strip("\n").split("\n"):
            html = esc(line).replace(" ", "&nbsp;") or "&nbsp;"
            rows.append([Paragraph(html, s["code_line"])])
            kinds.append("code")
        if note:
            rows.append([Paragraph(note, s["code_note"])])
            kinds.append("note")
    t = Table(rows, colWidths=[6.2 * inch])
    style = [
        ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ("RIGHTPADDING", (0, 0), (-1, -1), 10),
        ("TOPPADDING", (0, 0), (0, 0), 7),
        ("BOTTOMPADDING", (0, 0), (0, 0), 4),
        ("ROUNDEDCORNERS", [6, 6, 6, 6]),
        ("BOTTOMPADDING", (0, -1), (0, -1), 9),
    ]
    for i, kind in enumerate(kinds):
        if kind in ("title", "code"):
            style += [
                ("BACKGROUND", (0, i), (0, i), CODE_BG),
                ("TOPPADDING", (0, i), (0, i), 1 if kind == "code" else 7),
                ("BOTTOMPADDING", (0, i), (0, i), 1 if kind == "code" else 4),
            ]
        else:
            style += [
                ("BACKGROUND", (0, i), (0, i), colors.HexColor("#EEF2FF")),
                ("TOPPADDING", (0, i), (0, i), 3),
                ("BOTTOMPADDING", (0, i), (0, i), 7),
            ]
    t.setStyle(TableStyle(style))
    return t


def code_box(s, title, code_text):
    """코드 일부(스니펫)를 보여주는 어두운 코드 블록. code_text: 이미 들여쓰기 포함된 raw 문자열."""
    lines = code_text.strip("\n").split("\n")
    # reportlab Paragraph는 HTML 특수문자를 escape해야 함
    esc = lambda t: t.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
    code_paras = [Paragraph(esc(line).replace(" ", "&nbsp;") or "&nbsp;", s["code_line"]) for line in lines]
    rows = [[Paragraph(title, s["code_title"])]] + [[p] for p in code_paras]
    t = Table(rows, colWidths=[6.2 * inch])
    style = [
        ("BACKGROUND", (0, 0), (-1, -1), CODE_BG),
        ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ("RIGHTPADDING", (0, 0), (-1, -1), 10),
        ("TOPPADDING", (0, 0), (0, 0), 7),
        ("BOTTOMPADDING", (0, 0), (0, 0), 4),
        ("TOPPADDING", (0, 1), (0, -1), 0.5),
        ("BOTTOMPADDING", (0, 1), (0, -1), 0.5),
        ("BOTTOMPADDING", (0, -1), (0, -1), 7),
        ("ROUNDEDCORNERS", [6, 6, 6, 6]),
    ]
    t.setStyle(TableStyle(style))
    return t


def bullet_block(s, number, resume_line, what, why, how, likely_q, english_lines, source_label="이력서 문장"):
    """
    how: list of (text, code_snippet_or_None) 튜플.
    likely_q: list of (question, answer_text, code_snippet_or_None) 튜플.
    source_label: 기본은 "이력서 문장"이지만, 이력서에 직접 없는 프로젝트(예: ThinkThink처럼 다른
    프로젝트의 이력서 불릿이 참조하는 원본)는 "프로젝트 설명" 등으로 바꿔서 쓴다.
    """
    num_chip = Table([[Paragraph(str(number), s["bullet_num"])]], colWidths=[0.28 * inch], rowHeights=[0.28 * inch])
    num_chip.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), BLUE),
        ("ALIGN", (0, 0), (-1, -1), "CENTER"),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
    ]))
    is_ascii = all(ord(ch) < 128 for ch in resume_line)
    quoted = (
        f'<font name="Helvetica-Oblique">"{resume_line}"</font>' if is_ascii
        else f'<i>"{resume_line}"</i>'
    )
    header_row = Table(
        [[num_chip, Paragraph(f'{source_label}: {quoted}', s["resume_line"])]],
        colWidths=[0.4 * inch, 6.0 * inch],
    )
    header_row.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "MIDDLE")]))

    flow = [header_row, Spacer(1, 4)]
    flow.append(Paragraph("무슨 뜻인가 (What)", s["label"]))
    flow.append(Paragraph(what, s["body"]))
    flow.append(Paragraph("왜 이렇게 했는가 (Why)", s["label"]))
    flow.append(Paragraph(why, s["body"]))
    flow.append(Paragraph("실제로 어떻게 만들었는가 (How)", s["label"]))
    for item in how:
        text, snippet = item if isinstance(item, tuple) else (item, None)
        flow.append(Paragraph(f"• {text}", s["body_tight"]))
        if snippet:
            flow.append(Spacer(1, 2))
            flow.append(render_snippet(s, snippet))
            flow.append(Spacer(1, 3))
    if likely_q:
        flow.append(Paragraph("예상 질문 &amp; 답변 포인트", s["label"]))
        for item in likely_q:
            q, a, snippet = item if len(item) == 3 else (item[0], item[1], None)
            flow.append(Paragraph(f"Q. {q}", s["qa_q"]))
            flow.append(Paragraph(a, s["qa_a"]))
            if snippet:
                flow.append(Spacer(1, 2))
                flow.append(render_snippet(s, snippet))
                flow.append(Spacer(1, 3))
    flow.append(Spacer(1, 4))
    flow.append(english_box(s, english_lines))
    flow.append(Spacer(1, 10))
    flow.append(HRFlowable(width="100%", thickness=0.5, color=LINE))
    return flow


def glossary_section(s):
    flow = [PageBreak(), Paragraph("용어 설명 (Glossary)", s["gloss_title"]),
            Paragraph("본문에서 위 첨자 번호로 표시된 전문 용어를 번호 순서대로 설명합니다.", s["doc_sub"])]
    for idx, (term, explanation) in enumerate(_FOOTNOTES, start=1):
        flow.append(Paragraph(f'[{idx}] {term}', s["gloss_term"]))
        flow.append(Paragraph(explanation, s["gloss_def"]))
    return flow


def new_doc(s, filename, title, project_label):
    """모든 프로젝트 PDF가 공유하는 제목/머리말을 만든다. (doc, story) 반환."""
    out_path = OUT_DIR / filename
    doc = SimpleDocTemplate(
        str(out_path), pagesize=letter,
        leftMargin=0.75 * inch, rightMargin=0.75 * inch,
        topMargin=0.7 * inch, bottomMargin=0.7 * inch,
        title=title,
    )
    story = [
        Paragraph(f"{project_label} — 인터뷰 설명 노트", s["doc_title"]),
        Paragraph(
            f"이력서(Resume_TA_Graphics.pdf)의 {project_label} 항목에 적힌 불릿을 하나씩 뜯어서 "
            "설명합니다. 지금은 한국어로 정리하지만, 실제 인터뷰에서는 영어로 말하게 될 걸 가정해서 "
            "각 항목 끝에 실제로 쓸 영어 표현을 박스로 같이 넣었습니다. 낯선 용어는 위 첨자 번호로 "
            "표시했고 문서 끝 '용어 설명'에서 찾아볼 수 있습니다.",
            s["doc_sub"]
        ),
        HRFlowable(width="100%", thickness=1, color=BLUE),
        Spacer(1, 10),
    ]
    return out_path, doc, story


def build_poseidon_skate():
    reset_footnotes()
    s = styles()
    out_path = OUT_DIR / "InterviewPrep_PoseidonSkate.pdf"
    doc = SimpleDocTemplate(
        str(out_path), pagesize=letter,
        leftMargin=0.75 * inch, rightMargin=0.75 * inch,
        topMargin=0.7 * inch, bottomMargin=0.7 * inch,
        title="Poseidon Skate — Interview Prep",
    )

    story = []
    story.append(Paragraph("POSEIDON SKATE — 인터뷰 설명 노트", s["doc_title"]))
    story.append(Paragraph(
        "이력서(Resume_TA_Graphics.pdf)의 POSEIDON SKATE 항목에 적힌 불릿 4개를 "
        "하나씩 뜯어서 설명합니다. 지금은 한국어로 정리하지만, 실제 인터뷰에서는 영어로 "
        "말하게 될 걸 가정해서 각 항목 끝에 실제로 쓸 영어 표현을 박스로 같이 넣었습니다. "
        "낯선 용어는 위 첨자 번호로 표시했고 문서 끝 '용어 설명'에서 찾아볼 수 있습니다. "
        "전체 셰이더 코드는 부록으로 붙어 있습니다.",
        s["doc_sub"]
    ))
    story.append(HRFlowable(width="100%", thickness=1, color=BLUE))
    story.append(Spacer(1, 10))

    # ---- Bullet 1: Ocean/wave/tornado shaders ------------------------------------------------
    story.extend(bullet_block(
        s, 1,
        "Built ocean, wave, and tornado HLSL shaders (flow noise, domain warping, Voronoi caustics) "
        "as a rideable procedural water surface.",
        what=(
            "바다 전체를 텍스처나 애니메이션 없이, 셰이더 코드만으로 실시간 생성한다는 뜻입니다. "
            "파도가 올라오고 흘러가는 모양, 표면의 빛나는 그물 무늬(코스틱), 흰 물결까지 전부 수학적으로 "
            "계산해서 그린 겁니다. 플레이어가 실제로 '탈 수 있는' 웨이브도 같은 노이즈 시스템 위에서 만들어졌습니다."
        ),
        why=(
            f"처음엔 사인파(sine wave)와 {fn('Gerstner wave', '바다 표면을 흉내 내는 고전적인 파라메트릭 파형 모델. 단순 사인파와 달리 정점을 수평으로도 당겨서 파도 골은 완만하고 봉우리는 뾰족하게 만드는데, 여러 개를 겹쳐 복잡한 바다를 표현하는 데 널리 쓰인다. 다만 겹칠수록 반복되는 격자 패턴이 눈에 띄는 한계가 있다.')}를 "
            "겹치는 방식으로 시작했는데, 겹칠수록 눈에 띄는 "
            f"반복 격자 무늬가 계속 남았습니다. 이건 값을 튜닝해서 풀 수 있는 문제가 아니라 방식 자체의 한계라고 "
            f"판단해서, 전체를 {fn('Perlin Noise', '격자점마다 미리 정해둔 랜덤 벡터(그래디언트)를 보간해서 만드는 부드러운 노이즈. Ken Perlin이 1985년에 고안했고, 자연스러운 지형·구름·텍스처 생성에 널리 쓰인다.')} + "
            f"{fn('FBM', 'Fractional Brownian Motion의 약자. 같은 노이즈를 주파수와 진폭을 바꿔가며 여러 겹(옥타브) 겹쳐서, 큰 굴곡 위에 작은 디테일이 자연스럽게 얹힌 결과를 만드는 기법.')}(여러 옥타브를 겹친) 기반 시스템으로 바꿨습니다."
        ),
        how=[
            (
                f"{fn('Flow Noise', 'Ken Perlin과 Fabrice Neyret이 2001년에 제안한 기법. 시간을 노이즈의 3번째 축으로 넣는 대신, 격자점의 그래디언트 방향(각도)을 시간에 따라 회전시켜서 끊김 없이 흐르는 움직임을 만든다.')}(Perlin &amp; Neyret 2001): 시간을 노이즈의 3번째 축으로 쓰는 대신, 2D 격자점마다 할당된 "
                "그래디언트의 '각도'를 시간에 따라 계속 회전시켰습니다. 값을 통째로 바꾸는 게 아니라 각도를 "
                "연속적으로 돌리는 거라, 시간이 지나도 패턴이 끊기지 않고 자연스럽게 흐릅니다.",
                ("RandomGradient2D() — 격자점 그래디언트를 시간에 따라 회전", """float2 RandomGradient2D(float2 p, float time)
{
    float baseAngle = Hash21(p) * 2.0 * PI;
    float rotSpeed = Hash21(p + 7.7) * 2.0 - 1.0;
    float angle = baseAngle + time * rotSpeed;
    return float2(cos(angle), sin(angle));
}"""),
            ),
            (
                f"{fn('도메인 워핑 (Domain Warping)', '노이즈를 샘플링하는 좌표 자체를 다른(보통 더 낮은 주파수의) 노이즈로 먼저 뒤트는 기법. 격자 자체는 그대로 두면서 결과 패턴만 비틀어서, 규칙적인 반복이나 무아레 현상을 깨뜨리는 데 쓰인다.')}: 노이즈 주파수가 메시 정점 간격보다 촘촘해지면서 규칙적인 무아레 "
                "줄무늬가 생겼습니다. 낮은 주파수의 노이즈로 샘플링 좌표 자체를 먼저 뒤틀어서 격자의 규칙적인 "
                "정렬을 흐트러뜨렸습니다.",
                ("GetWarpedPos() — 샘플링 좌표를 먼저 한 번 뒤틂", """float2 GetWarpedPos(float2 posXZ, float time)
{
    float2 scaledPos = posXZ * _NoiseScale;
    float2 warp = float2(
        PerlinNoise2D(scaledPos * _WarpScale + 17.0, time),
        PerlinNoise2D(scaledPos * _WarpScale + 91.0, time)
    ) - 0.5;
    return scaledPos + warp * _WarpStrength;
}"""),
            ),
            (
                f"{fn('유한차분 (Finite Difference)', '미분을 직접 계산하기 어려울 때, 아주 가까운 두 지점의 값 차이를 거리로 나눠서 기울기(변화율)를 근사하는 방법. 셰이더에서는 주변 픽셀/정점의 높이를 몇 번 더 계산해서 경사를 구하는 데 자주 쓰인다.')}: 정점 주변 상하좌우 지점의 높이를 비교해서 "
                "경사를 구하고, 그 경사로 표면 법선을 직접 계산했습니다. 화면 공간 미분(ddx/ddy)을 쓰면 "
                "삼각형 하나당 법선이 고정돼서 각지게 보이는데, 이 방식은 정점마다 다른 값이라 삼각형 안에서도 "
                "부드럽게 이어집니다.",
                ("vert() 일부 — 유한차분으로 경사를 구해 법선 계산", """float eps = 0.05;
float hR = GetHeight(samplePos + float2(eps, 0), flowT);
float hL = GetHeight(samplePos - float2(eps, 0), flowT);
float hU = GetHeight(samplePos + float2(0, eps), flowT);
float hD = GetHeight(samplePos - float2(0, eps), flowT);
float2 gradient = float2(hR - hL, hU - hD) / (2.0 * eps);
...
float3 normalOS = normalize(float3(-gradient.x, 1.0, -gradient.y));"""),
            ),
            (
                f"{fn('Voronoi Noise (Cellular Noise)', '격자 셀마다 무작위 위치에 씨앗 점을 하나씩 두고, 각 지점에서 가장 가까운/두 번째로 가까운 씨앗까지 거리를 비교해서 세포(cell) 모양 무늬를 만드는 노이즈. 둘의 거리 차가 0에 가까우면 셀 경계선이 된다.')} 코스틱: 각 픽셀에서 가장 가까운 씨앗점들을 찾아서, 1등-2등 거리 차이로 셀 경계선을, "
                "2등-3등 거리 차이로 세 셀이 만나는 마디를 뽑아 빛나는 그물 무늬를 만들었습니다.",
                None,
            ),
            (
                f"경사가 가파른 곳은 유한차분으로 구한 기울기 방향으로 정점을 옆으로 당겨서, 둥근 언덕이 아니라 "
                f"날카로운 능선처럼 보이게 했습니다 (문턱은 {fn('smoothstep', '두 값 사이를 S자 곡선으로 부드럽게 전환하는 보간 함수. 경계에서 기울기가 0으로 시작·끝나서 매끄럽게 이어진다.')}이 아니라 일부러 선형 "
                f"{fn('saturate', '값을 0~1 범위로 그냥 잘라내는(clamp) 함수. smoothstep과 달리 경계에서 기울기가 뚝 끊겨서, 부드럽지 않고 각진 느낌을 낸다.')}만 사용 — 표면이 부드럽게가 아니라 "
                "뚝 꺾이는 느낌을 원했기 때문).",
                None,
            ),
        ],
        likely_q=[
            ("왜 Gerstner wave를 쓰지 않고 노이즈 기반으로 바꿨나요?",
             "Gerstner는 여러 파도를 겹칠수록 반복되는 격자 패턴이 눈에 띄게 남아서, 이건 파라미터 튜닝이 "
             "아니라 방식 자체의 한계라고 진단했습니다. 노이즈 기반은 격자 정렬 자체가 안 보이게 설계할 수 있어서 "
             "바꿨습니다.", None),
            ("Flow Noise와 일반 Perlin Noise의 차이가 뭔가요?",
             "일반적인 3D Perlin Noise는 시간을 3번째 축으로 넣어서 시간이 지나면 다른 격자점 조합을 보여주는 "
             "방식인데, 이러면 봉우리가 사라지고 다른 곳에서 새로 솟는 것처럼 보여서 자연스러운 흐름이 "
             "안 느껴졌습니다. Flow Noise는 격자점의 그래디언트 '방향'을 시간에 따라 회전시켜서, 값이 "
             "연속적으로 바뀌니까 흐르는 느낌이 났습니다.",
             ("PerlinNoise2D() 호출부 — RandomGradient2D의 회전하는 그래디언트를 사용", """float n00 = dot(RandomGradient2D(cell + float2(0,0), time), f - float2(0,0));
float n10 = dot(RandomGradient2D(cell + float2(1,0), time), f - float2(1,0));
float n01 = dot(RandomGradient2D(cell + float2(0,1), time), f - float2(0,1));
float n11 = dot(RandomGradient2D(cell + float2(1,1), time), f - float2(1,1));""")),
        ],
        english_lines=[
            "“I built three HLSL shaders for the ocean, the rideable wave, and the tornado — "
            "all procedural, no textures animating the surface.”",
            "“The first version stacked sine and Gerstner waves, but that always left a visible "
            "repeating grid pattern — I treated that as a limitation of the approach itself, not "
            "something I could fix by tuning values, so I moved the whole surface to a "
            "Perlin-noise-based system.”",
            "“I used Flow Noise — instead of adding time as a third noise axis, I rotate each grid "
            "point's gradient angle over time, so the motion reads as continuous flow rather than "
            "the pattern swapping out.”",
            "“For lighting, I derive the surface normal analytically from the height field's slope "
            "using finite differences, instead of screen-space derivatives — that keeps shading "
            "smooth per-vertex instead of flat per-triangle.”",
        ],
    ))

    # ---- Bullet 2: Blender modeling/rigging ---------------------------------------------------
    story.extend(bullet_block(
        s, 2,
        "Modeled and rigged a low-poly Poseidon character in Blender (25-bone skeleton) and "
        "integrated it into Unity via FBX.",
        what=(
            "게임에 등장하는 포세이돈 캐릭터를 처음부터 끝까지 — 모델링, 리깅(뼈대 심기), Unity로 가져오기까지 "
            "직접 담당했다는 뜻입니다."
        ),
        why=(
            "팀에 전담 캐릭터 아티스트가 없는 상황에서, 테크니컬 아티스트로서 아트 파이프라인 전체(모델→리그→엔진 "
            "통합)를 책임지고 끝까지 완결시켜야 했습니다."
        ),
        how=[
            ("로우폴리 스타일로 머리, 머리카락, 선글라스, 렌즈, 총, 삼지창을 각각 별도 머티리얼로 분리해서 모델링 — "
             "Unity에서 부위별로 독립적으로 색/질감을 조절할 수 있게 하기 위함.", None),
            ("25개 본으로 구성된 스켈레톤을 Blender에서 직접 리깅.", None),
            (f"FBX로 내보내서 Unity에서 {fn('Generic 리그', 'Unity가 아바타를 처리하는 두 방식 중 하나. Humanoid는 사람 골격 표준(머리-척추-팔다리)에 맞춰야 하고 그 대신 애니메이션 리타게팅이 가능하다. Generic은 표준에 안 맞는 임의의 본 계층 구조를 그대로 가져오되, 리타게팅 없이 원본 애니메이션만 재생할 수 있다.')}(Humanoid가 아닌)로 사용 — 사람 형태 표준 리그에 안 맞는 "
             "커스텀 캐릭터라 Generic을 선택.", None),
        ],
        likely_q=[
            ("왜 Humanoid가 아니라 Generic 리그를 썼나요?",
             "Unity의 Humanoid 리그는 사람 골격 표준(두 팔, 두 다리, 척추 등)에 맞아야 아바타 매핑이 되는데, "
             "포세이돈은 그 표준에서 벗어난 커스텀 25본 구조라 Generic으로 내보냈습니다. Generic은 Avatar "
             "리타게팅 없이 원본 본 계층 구조를 그대로 가져옵니다.", None),
        ],
        english_lines=[
            "“Since the team didn't have a dedicated character artist, I owned the whole art "
            "pipeline for Poseidon myself — modeling, rigging, and the Unity integration.”",
            "“I modeled it low-poly with separate materials per part — head, hair, sunglasses, "
            "lenses, the gun, the trident — so each part could be tweaked independently in Unity.”",
            "“I rigged a 25-bone skeleton in Blender and exported it as FBX using a Generic rig "
            "in Unity, since the custom skeleton doesn't match Unity's Humanoid bone standard.”",
        ],
    ))

    # ---- Bullet 3: VFX splash-ring shader -----------------------------------------------------
    story.extend(bullet_block(
        s, 3,
        "Authored a VFX splash-ring shader with randomized per-bump timing and Voronoi facet "
        "detailing for landing impacts.",
        what=(
            "플레이어가 착지할 때 생기는 물보라 이펙트를 셰이더 하나로 만들었다는 뜻입니다. 그냥 파티클이 아니라, "
            "직접 만든 지오메트리 위에 셰이더로 모양과 디테일을 그려 넣은 것이 핵심입니다."
        ),
        why=(
            "파티클 시스템만으로는 '꽃잎처럼 솟았다가 사라지는' 통제된 실루엣과, 안쪽의 유리 금 같은 디테일을 "
            "동시에 표현하기 어려워서, 전용 지오메트리 + 커스텀 셰이더 조합을 선택했습니다."
        ),
        how=[
            ("지오메트리: 평평한 쿼드가 아니라, 위아래 뚜껑 없는 열린 원통(휴지심 모양)을 C#에서 32각형으로 "
             "생성 — 아래는 좁고 위로 갈수록 벌어지는 형태.", None),
            (f"애니메이션: 'Expand T' 값 하나를 {fn('MaterialPropertyBlock', 'Unity에서 머티리얼의 셰이더 프로퍼티를 실제 Material 애셋을 복제하지 않고 인스턴스별로 바꿔치기하는 API. 같은 셰이더/머티리얼을 쓰는 여러 오브젝트(예: 스플래시 이펙트 여러 개)가 각자 다른 파라미터 값을 가질 때, 머티리얼을 매번 새로 만들지 않아도 돼서 가볍다.')}으로 0→1까지 약 0.6초간 움직여서 꽃잎이 "
             "자랐다가 줄어들게 함. 끝나면 오브젝트가 스스로 파괴되어 게임플레이 코드는 착지 시점에 프리팹만 "
             "생성하면 됨.",
             ("frag() 일부 — ExpandT 하나로 성장/소멸 진행도 계산", """float growGlobalT = saturate(_ExpandT / 0.5);
float shrinkGlobalT = saturate((_ExpandT - 0.5) / 0.5);
...
float localGrowT = saturate(growGlobalT * growSpeed);
float localShrinkT = saturate(shrinkGlobalT * shrinkSpeed);
float edgeHeight = baseTarget * localGrowT * (1.0 - localShrinkT);""")),
            ("변주(Randomization): 돌기마다 성장 속도·수축 속도·높이 배율을 랜덤화하고, 돌기 간격과 높이도 "
             "둘레를 따라 조금씩 다르게 해서 완벽한 사인파처럼 일제히 피어나지 않게 함.",
             ("frag() 일부 — 봉우리(bump)마다 다른 랜덤 속도/높이", """float bumpIndex = floor((warpedX + _Phase) * _Period);
float growSpeed = lerp(_MinGrowSpeed, _MaxGrowSpeed, Hash21(float2(bumpIndex, 11.0)));
float shrinkSpeed = lerp(_MinShrinkSpeed, _MaxShrinkSpeed, Hash21(float2(bumpIndex, 37.0)));
float heightScale = lerp(_MinHeightScale, _MaxHeightScale, Hash21(float2(bumpIndex, 59.0)));""")),
            (f"{fn('Voronoi 조각 무늬', '위 Gerstner wave 각주 근처의 Voronoi Noise와 같은 개념 — 여기서는 스플래시 표면 안쪽 디테일용으로 다시 쓰였다.')}: 스플래시 표면 안쪽에 유리 금(crack)처럼 보이는 선 무늬를 Voronoi 노이즈로 "
             "추가해서 디테일을 더함.", None),
            ("룩: 부드러움 조절 가능한 툰 경계, 흰 끝부분(tip color), 랜덤하게 뚫리는 구멍까지 아티스트가 "
             "조절할 수 있는 파라미터로 노출.", None),
        ],
        likely_q=[
            ("파티클 시스템 대신 셰이더+커스텀 지오메트리를 쓴 이유는?",
             "꽃잎처럼 솟았다 사라지는 정확한 실루엣과, 표면 안쪽의 유리 금 같은 디테일(Voronoi 패턴)을 "
             "동시에 원했는데, 이건 일반 파티클보다 전용 지오메트리 위에 셰이더로 그리는 쪽이 통제하기 "
             "쉬웠습니다.", None),
        ],
        english_lines=[
            "“The landing splash is one shader drawn on custom geometry I built, not a particle "
            "system — an open cylinder, narrow at the bottom and flaring out at the top.”",
            "“A single 'Expand T' value animates from 0 to 1 over about 0.6 seconds through a "
            "MaterialPropertyBlock, so the petals grow and shrink, then the object destroys itself.”",
            "“Every bump gets its own randomized grow speed, shrink speed, and height scale, so the "
            "splash never blooms in lockstep like a perfect sine wave.”",
            "“I also layered a warped Voronoi pattern inside it for a cracked-glass look, plus a "
            "toon edge with adjustable softness and randomly cut holes.”",
        ],
    ))

    # ---- Bullet 4: Jira/Perforce coordination -------------------------------------------------
    story.extend(bullet_block(
        s, 4,
        "Coordinated a three-week team production using Jira for scheduling/priorities and "
        "Perforce for source control.",
        what=(
            "3주짜리 팀 프로젝트에서 셰이더/아트 작업뿐 아니라, 일정 관리와 버전 관리(소스 컨트롤)까지 "
            "담당했다는 뜻입니다."
        ),
        why=(
            "3주라는 짧은 기간에 여러 명이 동시에 작업하는 팀 프로젝트였기 때문에, 우선순위를 명확히 하고 "
            "충돌 없이 자산을 공유하는 체계가 필요했습니다."
        ),
        how=[
            ("Jira로 작업 항목과 우선순위를 관리해서, 팀이 핵심 게임플레이를 먼저 완성하고 남은 시간을 아트와 "
             "폴리싱에 쓸 수 있도록 일정을 짰습니다.", None),
            (f"{fn('Perforce', '대용량 바이너리 에셋(3D 모델, 텍스처 등)을 다루는 데 특화된 중앙집중식 버전 관리 시스템. 파일을 체크아웃(잠금)해서 수정한 뒤 체크인하는 방식이라, 머지가 불가능한 바이너리 파일을 여러 명이 동시에 건드려 생기는 충돌을 막는다. 게임/아트 업계에서 널리 쓰인다.')}로 소스 코드와 대용량 아트 에셋(모델, 텍스처 등)을 버전 관리 — Git보다 대용량 바이너리 "
             "파일과 체크아웃 기반 잠금(lock) 워크플로우에 적합해서 팀 프로젝트에서 자주 쓰입니다.", None),
        ],
        likely_q=[
            ("Git 대신 Perforce를 쓴 이유는 뭔가요?",
             "Perforce는 대용량 바이너리 에셋(3D 모델, 텍스처, FBX 등)을 다루는 데 Git보다 적합하고, "
             "체크아웃 기반으로 파일을 잠가서 여러 명이 같은 바이너리 파일을 동시에 수정해 생기는 충돌을 "
             "예방할 수 있습니다. 게임/아트 팀에서 업계 표준으로 많이 쓰입니다.", None),
        ],
        english_lines=[
            "“Beyond the shader and art work, I also coordinated the three-week production itself — "
            "scheduling and priorities in Jira, and source control in Perforce.”",
            "“We used Jira to make sure the team finished core gameplay first and used the "
            "remaining time for art and polish.”",
            "“Perforce handles large binary art assets — models, textures — better than Git, with "
            "checkout-based locking that avoids conflicts on files that can't be merged line by "
            "line.”",
        ],
    ))

    # ---- 용어 설명 (Glossary) --------------------------------------------------------------
    story.extend(glossary_section(s))

    doc.build(story)
    print(f"Wrote {out_path}")


def build_carboom():
    reset_footnotes()
    s = styles()
    out_path, doc, story = new_doc(s, "InterviewPrep_Carboom.pdf", "Carboom — Interview Prep", "CARBOOM")

    story.extend(bullet_block(
        s, 1,
        "Building an artist-facing Unreal Engine editor tool (Python) that places space-background "
        "planets by apparent size/clustering via an artist-editable DataAsset — no code required.",
        what=(
            "우주 배경에 행성을 수동으로 하나하나 배치하는 대신, 아티스트가 DataAsset(에디터에서 값만 "
            "바꾸는 데이터 파일)을 조정하면 Python 에디터 툴이 자동으로 자연스럽게 배치해주는 언리얼 "
            "에디터 툴을 만들고 있다는 뜻입니다. 코드를 몰라도 아티스트가 직접 쓸 수 있는 게 핵심입니다."
        ),
        why=(
            "배경은 항상 아레나라는 고정된 시점에서만 보이기 때문에, 실제 3D 거리가 화면에 실제로 보이는 "
            "크기와 일치하지 않습니다. 단순 랜덤 배치로는 균형 잡힌 하늘이 안 나와서, '겉보기 크기' 기준으로 "
            "배치 로직을 새로 설계했습니다. 아래 2~5번 불릿은 포트폴리오 케이스 스터디에 나온 4개 항목"
            "(구도 / 반복 개선 / 군집화 / 락)을 각각 더 깊이 설명합니다."
        ),
        how=[
            (f"{fn('뷰 공간(View-space) 구도', '3D 월드 좌표가 아니라, 특정 카메라/관측 지점에서 봤을 때의 각도·겉보기 크기를 기준으로 계산하는 방식. 이 프로젝트에서는 아레나라는 고정 시점에서 행성이 실제로 화면에 얼마나 크게/가깝게 보이는지를 기준으로 배치 간격과 밀도를 계산한다.')}: 실제 3D 거리 대신, 아레나에서 바라본 "
             "각도와 겉보기 크기를 기준으로 행성 간 최소 간격과 밀도를 계산해서, 멀리 있는 큰 행성과 "
             "가까운 작은 행성이 화면에서 비슷한 크기로 겹쳐 보이는 문제를 해결했습니다.", None),
            (f"{fn('ScaleZones 배열', '거리/크기 구간마다 개수·크기 범위·거리 범위를 각각 독립적으로 갖는 배열. 커브 하나로 전체를 표현하는 대신, 구간(zone)마다 아티스트가 숫자를 직접 넣게 해서 표현력과 편집 편의성을 둘 다 얻었다.')}로 아티스트가 '이 거리대에 이 크기의 행성 몇 개'를 직접 지정합니다.", None),
            ("군집(cluster)은 미리 하나의 '원판'으로 묶어 배치하고, 그 안에서 대장-졸개 크기 계층을 "
             "가우시안 분포로 강제해서 알 무더기처럼 보이지 않게 했습니다.", None),
            (f"{fn('락(Lock) 기능', '아티스트가 마음에 드는 행성 배치 결과 일부를 고정해두는 기능. 락 걸린 행성은 Clear에서 지워지지 않고 다음 Generate에 이미 배치된 것으로 다시 들어간다.')}으로 아티스트가 마음에 드는 행성만 고정하고 나머지만 다시 "
             "배치할 수 있게 했습니다 (자세한 코드는 아래 4번 불릿).", None),
        ],
        likely_q=[
            ("아티스트 친화적인 툴을 만들 때 가장 신경 쓴 부분은?",
             "Python 코드를 전혀 몰라도 DataAsset의 숫자만 바꿔서 결과를 바로 확인할 수 있어야 한다는 "
             "점이었습니다. 그래서 Zone 범위와 개수를 Output Log에 매번 출력해서, 아티스트가 지금 입력한 "
             "값이 실제로 어떻게 읽혔는지 바로 확인할 수 있게 했습니다.", None),
        ],
        english_lines=[
            "“I'm building an artist-facing Unreal Engine editor tool in Python that places "
            "background planets automatically from a DataAsset, so the two artists I work with "
            "never have to touch code.”",
            "“Because the background is only ever seen from one fixed arena viewpoint, I compute "
            "placement by apparent size and angle from that viewpoint, not raw 3D distance.”",
        ],
    ))

    story.extend(bullet_block(
        s, 2,
        "구도 (Composition) — 실제 거리 대신 겉보기 크기로 배치하기",
        source_label="포트폴리오 케이스 스터디",
        what="행성을 3D 공간에 배치할 때, 실제 좌표가 아니라 '아레나에서 봤을 때 얼마나 크게 보이는가'를 "
             "기준으로 간격과 밀도를 계산하는 부분입니다. 멀리 있는 큰 행성과 가까운 작은 행성이 화면에선 "
             f"같은 크기로 보일 수 있기 때문입니다. {fn('입체각(Solid Angle)', '3D 공간의 한 점에서 어떤 도형이 시야에서 차지하는 면적 비율을 각도 단위로 표현한 것. 2D의 평면각(라디안)을 구면으로 확장한 개념으로, 이 프로젝트에서는 행성이 화면에서 차지하는 시각적 비중(visual mass)을 구하는 데 쓰인다.')} 기반 수식 3개"
             "(겉보기 크기, 각거리, 시각적 질량)로 전체 구도를 통제합니다.",
        why="단순 랜덤 3D 배치는 균형이 안 맞는 하늘을 만듭니다 — 아레나는 고정된 한 지점이라, 중요한 건 "
            "3D 거리가 아니라 그 지점에서 본 결과물입니다.",
        how=[
            ("`to_view()`가 행성의 위치·반지름을 아레나 기준 방향 벡터와 겉보기 각반지름(alpha)으로 "
             "변환합니다 — `asin(radius / distance)`로, 실제 크기가 아니라 시야각으로 크기를 표현합니다.",
             ("space_background.py 일부 — 겉보기 크기/시각적 질량 계산", [
                 ("def to_view(location, radius):",
                  "아레나(원점)에서 본 행성의 '방향'과 '겉보기 각반지름'을 계산하는 함수. location은 "
                  "행성의 3D 월드 좌표, radius는 행성의 실제 반지름(스케일 반영값). 이 둘을 '얼마나 멀리, "
                  "얼마나 커 보이는가'로 바꾸는 게 이 함수의 목적 — 이후 모든 구도 계산이 3D 좌표 대신 "
                  "이 함수가 반환하는 값만 쓴다."),
                 ("    distance = vec_length(location)",
                  "아레나(원점)에서 행성까지의 실제 3D 거리. location이 원점을 기준으로 한 벡터이므로, "
                  "벡터의 길이(magnitude)가 곧 거리다."),
                 ("    direction = tuple(value / distance for value in location)",
                  "location 벡터의 각 성분(x, y, z)을 자신의 길이(distance)로 나눠서 길이가 정확히 1인 "
                  "단위 벡터로 만든다. 거리 정보는 지워지고 '어느 방향에 있는지'만 남는다 — 뒤에서 두 "
                  "행성의 각도 차이를 구할 때(angle_between) 이 단위 벡터끼리 내적(dot product)을 "
                  "계산하면 되므로, 거리를 매번 다시 나눌 필요가 없어진다."),
                 ("    alpha = math.asin(min(1.0, radius / distance))",
                  "겉보기 각반지름을 구하는 핵심 줄. 아레나 → 행성 중심까지의 거리를 빗변, 행성의 반지름을 "
                  "대변으로 하는 직각삼각형을 생각하면, asin(대변/빗변)이 바로 '행성 가장자리까지 벌어지는 "
                  "각도'가 된다. min(1.0, ...)은 행성이 카메라에 거의 붙어서 radius/distance가 1을 넘는 "
                  "예외 상황에서 asin의 정의역(−1~1)을 벗어나 에러가 나는 걸 막는 방어 코드다."),
                 ("    return direction, alpha",
                  "단위 방향 벡터와 겉보기 각반지름을 튜플로 반환한다. 이 둘만 있으면 실제 3D 좌표 없이도 "
                  "간격·밀도·겹침을 전부 각도만으로 계산할 수 있다."),
                 ("def view_mass(alpha):",
                  "행성(또는 무리) 하나가 화면에서 차지하는 '시각적 비중'을 숫자 하나로 표현하는 함수. "
                  "이름의 mass는 질량이 아니라 밀도 계산에서 쓰이는 '무게감'을 뜻한다."),
                 ("    return math.pi * alpha * alpha",
                  "원의 넓이 공식(π·r²)을 겉보기 각반지름 alpha에 그대로 적용한 것. alpha를 '각도 단위의 "
                  "반지름'으로 보고 그 원이 차지하는 면적(입체각에 비례)을 근사한다. 값이 클수록 화면에서 "
                  "크고 무겁게 느껴진다는 뜻이며, 이 값이 뒤에서 밀도 계산(local_mass 합산)에 그대로 "
                  "쓰인다."),
             ])),
            ("`fits_composition()`이 두 가지 규칙을 검사합니다: (1) 기하평균 기반 간격 — 두 행성의 "
             "겉보기 반지름의 기하평균만큼 여유를 더해서, 큰 것끼리는 멀리, 작은 것끼리는 거의 붙어도 "
             "되게 하고, (2) 밀도 예산 — 주변이 이미 무거우면(큰 행성 근처) 확률적으로 배치를 거절하되, "
             "딱 잘라 막지는 않아서(하드 컷오프 대신 확률) 큰 행성 주변이 텅 비는 걸 방지합니다.",
             ("space_background.py 일부 — 간격/밀도 규칙", [
                 ("def fits_composition(direction, alpha, layout, size_spacing, density_budget):",
                  "지금 배치하려는 행성(방향 direction, 겉보기 크기 alpha)이 이미 배치된 것들(layout) "
                  "사이에 '구도상' 들어갈 자리가 있는지 참/거짓으로 판단하는 함수. size_spacing, "
                  "density_budget은 DataAsset에서 아티스트가 조절하는 간격/밀도 민감도 값이다."),
                 ("    neighbor_angle = math.radians(NEIGHBOR_ANGLE)",
                  "밀도를 계산할 때 '주변'으로 볼 각도 범위(NEIGHBOR_ANGLE, 도 단위 상수)를 라디안으로 "
                  "변환해둔다. 아래 삼각함수 계산은 전부 라디안 기준이라 미리 바꿔두는 것."),
                 ("    local_mass = 0.0",
                  "지금 후보 위치 주변의 '누적 무게감'을 담을 변수. 아래 for 루프에서 가까운 이웃일수록 "
                  "이 값에 더해진다."),
                 ("    for other in layout:",
                  "이미 배치된 모든 행성/무리(layout)를 하나씩 순회한다. 배치할 때마다 지금까지 놓인 "
                  "전체와 비교하므로, 코드 주석에도 적혀있듯 이 함수는 호출될 때마다 O(n)이고 전체 배치는 "
                  "O(n²)이다 — 지금 행성 개수에서는 문제없지만 개수가 크게 늘면 공간 분할 구조로 바꿔야 "
                  "한다는 걸 인지하고 설계한 부분."),
                 ("        theta = angle_between(direction, other[\"direction\"])",
                  "후보 방향과 이미 놓인 행성의 방향 사이의 각도(라디안)를 구한다 — 두 단위 벡터의 "
                  "내적에 acos를 취한 값."),
                 ("        needed = alpha + other[\"alpha\"] + size_spacing * math.sqrt(alpha * other[\"alpha\"])",
                  "두 행성이 화면에서 겹치지 않으려면 필요한 최소 각거리. 기본적으로 두 겉보기 반지름의 "
                  "합(alpha + other.alpha)은 '딱 맞닿는' 거리이고, 여기에 기하평균(sqrt(alpha·other.alpha))에 "
                  "size_spacing을 곱한 여유를 더한다. 기하평균을 쓰는 이유: 크다+크다는 기하평균도 커서 "
                  "많이 벌어지고, 작다+작다는 기하평균도 작아서 거의 붙어도 되고, 크다+작다는 그 중간이 "
                  "되어 '큰 것끼리는 멀리, 작은 것끼리는 촘촘히'가 수식 하나로 자연스럽게 나온다."),
                 ("        if theta < needed:",
                  "실제 각거리(theta)가 필요한 최소 거리(needed)보다 가까우면 — 즉 화면에서 겹치면."),
                 ("            return False",
                  "겹치는 게 확정이면 더 볼 것도 없이 즉시 '이 자리는 안 된다'고 반환해서, 뒤의 밀도 "
                  "계산까지 가지 않고 함수를 끝낸다(조기 종료로 불필요한 계산을 줄임)."),
                 ("        if theta < neighbor_angle:",
                  "안 겹치더라도, 이 이웃이 '밀도 계산에 포함할 만큼 가까운지'(neighbor_angle 이내인지) "
                  "확인한다."),
                 ("            local_mass += other[\"mass\"] * (1.0 - theta / neighbor_angle)",
                  "가까운 이웃일수록 밀도에 더 많이 기여하도록, 거리에 반비례하는 선형 가중치"
                  "(1 - theta/neighbor_angle: theta가 0이면 가중치 1, neighbor_angle에 가까우면 0)를 "
                  "그 이웃의 시각적 질량(other.mass)에 곱해서 local_mass에 누적한다."),
                 ("    if local_mass <= 0.0:",
                  "주변에 밀도에 기여할 이웃이 하나도 없었다면(누적 무게가 0이면)."),
                 ("        return True",
                  "주변이 전혀 붐비지 않는다는 뜻이므로 밀도 때문에 거절할 이유가 없어 바로 통과시킨다."),
                 ("    kernel_area = math.pi * neighbor_angle * neighbor_angle / 3.0",
                  "방금 쓴 선형 감쇠 가중치(1 - theta/neighbor_angle)를 반지름 neighbor_angle인 원 "
                  "전체에 대해 적분하면 나오는 값(원뿔형 가중치의 '부피'에 해당) — 이걸로 local_mass를 "
                  "나누면 단위 면적당 밀도로 정규화할 수 있다."),
                 ("    local_density = local_mass / kernel_area",
                  "누적된 무게(local_mass)를 커널 면적으로 나눠서, 절대적인 양이 아니라 '단위 면적당 "
                  "얼마나 붐비는가'라는 밀도 값으로 변환한다."),
                 ("    accept_chance = density_budget / local_density",
                  "아티스트가 정한 밀도 예산(density_budget, '평균적으로 허용하는 밀도')을 지금 이 자리의 "
                  "실제 밀도로 나눠서 수락 확률을 만든다. 주변이 평균보다 2배 붐비면 확률은 절반이 되는 "
                  "식 — 밀도가 낮을수록 확률이 1을 넘을 수 있는데, 이는 아래 random() 비교에서 항상 "
                  "참이 되므로 자연히 '항상 통과'로 처리된다."),
                 ("    return random.random() < accept_chance  # chance, not a hard cutoff",
                  "0~1 사이 난수를 뽑아서 accept_chance보다 작으면 통과시킨다. 딱 잘라 막는 if문(hard "
                  "cutoff) 대신 확률을 쓴 이유: 큰 행성 근처를 완전히 막아버리면 그 주변이 영구히 텅 "
                  "비어 보이는데, 확률로 '가끔은' 허용하면 큰 행성 곁에도 작은 행성이 드문드문 섞여서 "
                  "하늘 전체가 더 자연스럽게 채워진다."),
             ])),
        ],
        likely_q=[
            ("왜 하드 컷오프 대신 확률(accept_chance)로 밀도를 제한했나요?",
             "딱 잘라 막으면 이미 큰 행성이 있는 영역 주변이 영구히 텅 비게 됩니다. 확률로 '조금만' "
             "허용하면 큰 행성 근처에도 가끔 작은 행성이 들어가서 하늘 전체가 자연스럽게 채워집니다.",
             None),
        ],
        english_lines=[
            "“Instead of raw 3D distance, I compute spacing and density as angles and solid angle "
            "seen from the fixed arena viewpoint — apparent size, angular distance, and visual mass.”",
            "“Spacing uses a geometric mean of the two apparent radii, and density is a probabilistic "
            "budget rather than a hard cutoff, so crowded areas rarely accept more without leaving "
            "visible gaps around big planets.”",
        ],
    ))

    story.extend(bullet_block(
        s, 3,
        "반복 개선 (Iteration) — 커브로는 표현할 수 없었던 구도 요구사항",
        source_label="포트폴리오 케이스 스터디",
        what="행성 크기를 정하는 방식을 커브(Curve) 하나에서 ScaleZones 배열로 바꾼 설계 변경입니다.",
        why="처음엔 ScaleDistribution 커브로 크기를 가중치 샘플링했는데, 커브로는 '이 거리대에 이 정도 "
            "크기가 몇 개'라는 조건을 표현할 수 없었습니다. 거리 구간을 그래디언트 스톱처럼 비율(0~1)로 "
            "나누는 것도 시도했지만, Blueprint DataAsset은 한 항목을 수정해도 나머지가 자동으로 "
            "재정규화되지 않아 합이 1로 안 맞았습니다.",
        how=[
            ("구간마다 개수(Count)·스케일 범위·거리 범위를 독립적으로 갖는 `ScaleZones` 배열로 바꿔서, "
             "구간끼리 겹치는 것도 허용했습니다 — 전체를 딱 맞게 나눌 필요가 없어서 아티스트가 훨씬 "
             "직관적으로 편집할 수 있습니다.", None),
            ("Blueprint 구조체(struct) 멤버가 `Count_2_ABCD...`처럼 내부적으로 이름이 맹글링되는 문제도 "
             f"만났습니다. {fn('export_text() 폴백', 'Unreal Python API의 get_editor_property()가 Blueprint 구조체의 맹글링된 내부 이름 때문에 실패할 때, 액터/구조체를 텍스트로 직렬화하는 export_text()의 출력 문자열을 직접 파싱해서 값을 찾아내는 우회 방법.')}으로, `get_editor_property()`가 실패하면 "
             "`export_text()`로 직렬화된 문자열을 직접 파싱해서 값을 찾아내는 폴백을 넣었습니다.",
             ("space_background.py 일부 — 맹글링된 구조체 멤버 읽기 폴백", [
                 ("def get_struct_value(struct, name):",
                  "Blueprint에서 만든 구조체(struct)에서 이름이 name인 필드 값을 읽어오는 함수. "
                  "DataAsset의 ScaleZones 배열 항목(Count, MinScale 등)을 읽을 때 전부 이 함수를 거친다."),
                 ("    try:",
                  "일단 정상적인 방법부터 시도한다."),
                 ("        return struct.get_editor_property(name)",
                  "Unreal Python API가 제공하는 표준 방법 — 구조체 필드 이름으로 직접 값을 가져온다. "
                  "대부분의 경우 이 한 줄로 끝난다."),
                 ("    except Exception:",
                  "그런데 Blueprint 구조체는 내부적으로 'Count_2_ABCD1234...'처럼 고유 식별자가 붙은 "
                  "이름으로 저장될 때가 있어서, 정확한 name 문자열을 몰라 위 호출이 예외를 던질 수 있다. "
                  "그 예외를 여기서 잡는다."),
                 ("        pass",
                  "예외를 무시하고 아래의 대안 경로로 넘어간다 — 프로그램을 죽이지 않고 폴백을 시도하는 "
                  "것이 이 함수의 핵심 설계."),
                 ("    text = struct.export_text().strip(\"()\")",
                  "구조체 전체를 'Count_2_ABCD=3,MinScale=1.0,...' 같은 텍스트로 직렬화하는 "
                  "export_text()를 호출한다. 이 텍스트는 보통 괄호로 감싸져 있어서(예: \"(Count=3,...)\"), "
                  "strip(\"()\")로 양 끝 괄호를 제거해 순수한 'key=value,key=value' 문자열만 남긴다."),
                 ("    for pair in text.split(\",\"):",
                  "콤마 기준으로 쪼개서 'key=value' 형태의 조각들을 하나씩 순회한다."),
                 ("        key, _, value = pair.partition(\"=\")",
                  "각 조각을 '=' 기준으로 왼쪽(key)과 오른쪽(value)으로 나눈다. partition은 split과 달리 "
                  "구분자를 포함해 정확히 3개(앞부분, 구분자, 뒷부분)로 나눠주므로 가운데 값(구분자 자체)은 "
                  "쓸 일이 없어 _로 버린다."),
                 ("        if key == name or key.startswith(name + \"_\"):",
                  "key가 찾던 이름과 정확히 같거나(맹글링 안 된 경우), 'name_' 으로 시작하면(맹글링된 "
                  "경우, 예: name='Count'일 때 key='Count_2_ABCD') 찾은 것으로 간주한다."),
                 ("            return float(value)",
                  "찾은 값을 실수로 변환해 반환한다. export_text의 값은 전부 문자열이라 숫자로 쓰려면 "
                  "변환이 필요하다."),
                 ("    raise RuntimeError(f\"Could not find '{name}' in {text}\")",
                  "두 경로(정상 프로퍼티 조회, 텍스트 파싱) 모두 실패하면, 조용히 잘못된 값을 쓰는 대신 "
                  "명확한 에러 메시지와 함께 즉시 실패시킨다 — 아티스트가 DataAsset 필드 이름을 잘못 "
                  "입력했을 때 원인을 바로 알 수 있게 하는 방어적 설계."),
             ])),
        ],
        likely_q=[
            ("왜 처음에 커브 대신 배열(ScaleZones)로 바꿨나요?",
             "커브는 '이 거리대에 이 크기의 행성이 몇 개'라는 조건을 직접 표현할 수 없고, 구간을 비율로 "
             "나누는 방식은 Blueprint DataAsset에서 한 항목만 수정해도 나머지가 자동으로 재정규화되지 "
             "않아서 실제로 아티스트가 쓰기 어려웠습니다. 그래서 구간마다 독립된 숫자를 넣는 배열 구조로 "
             "바꿨습니다.", None),
            ("Blueprint 구조체 값을 읽을 때 왜 export_text() 같은 우회가 필요했나요?",
             "Blueprint에서 만든 구조체 멤버는 내부적으로 고유 식별자가 붙은 이름(예: Count_2_ABCD)으로 "
             "저장되는 경우가 있어서, 보통 쓰는 get_editor_property(name)가 정확한 이름을 몰라 실패합니다. "
             "이 경우 구조체를 통째로 텍스트로 직렬화하는 export_text()의 출력을 파싱해서 우회했습니다.",
             None),
        ],
        english_lines=[
            "“A single sampling curve couldn't express 'this many planets of this size around this "
            "distance,' so I replaced it with an explicit ScaleZones array — each zone has its own "
            "count, scale range, and distance range, and zones can overlap.”",
            "“I also hit Blueprint struct members getting mangled internal names, so I added a "
            "fallback that parses the struct's export_text() output when the normal property lookup "
            "fails.”",
        ],
    ))

    story.extend(bullet_block(
        s, 4,
        "군집화 (Clustering) — '부익부' 뭉침과 알 무더기 문제 해결",
        source_label="포트폴리오 케이스 스터디",
        what="작은 행성들을 자연스러운 무리(cluster)로 묶어 배치하는 로직과, 두 번의 반복 개선 과정입니다.",
        why="첫 로직은 작은 행성을 이미 놓인 작은 행성 근처에 확률적으로 떨어뜨렸는데, 이게 먼저 생긴 "
            "무리로 계속 쏠려서(부익부) 화면이 큰 덩어리 하나 + 흩어진 큰 행성들로 2분할됐습니다. 이를 "
            "고친 뒤에도, 크기가 비슷한 멤버를 원판에 고르게 뿌리니 알 무더기처럼 부자연스러워 보였습니다.",
        how=[
            ("무리를 배치 전에 미리 구성합니다 — `random_cluster_size()`가 무리 크기를 1/n 가중치로 "
             "뽑아서(작은 무리는 많고 큰 무리는 가끔) 무리/큰 행성/중간 행성이 고르게 섞이게 하고, 각 "
             "무리를 하나의 '원판'으로 보고 다른 큰 행성들과 똑같은 간격/밀도 규칙(`fits_composition`)으로 "
             "배치합니다.",
             ("space_background.py 일부 — 1/n 가중치로 무리 크기 뽑기", [
                 ("def random_cluster_size():",
                  "무리(cluster) 하나에 들어갈 멤버 수를 랜덤으로 결정하는 함수. 단순 균등 랜덤이 아니라 "
                  "작은 무리가 더 자주 나오도록 가중치를 준다."),
                 ("    sizes = list(range(CLUSTER_SIZE_MIN, CLUSTER_SIZE_MAX + 1))",
                  "가능한 무리 크기 후보 목록. CLUSTER_SIZE_MIN~MAX(예: 2~7)를 전부 나열한다. "
                  "range(..., MAX+1)인 이유는 range가 끝 값을 포함하지 않기 때문에 MAX까지 포함시키려면 "
                  "+1이 필요하다."),
                 ("    weights = [1.0 / size for size in sizes]",
                  "각 크기 후보에 '크기의 역수'를 가중치로 준다 — 크기 2는 가중치 0.5, 크기 7은 가중치 "
                  "약 0.14로, 작은 숫자일수록 가중치가 커진다. 그 결과 작은 무리가 자주, 큰 무리는 "
                  "가끔 나오는 분포가 된다."),
                 ("    return random.choices(sizes, weights=weights, k=1)[0]",
                  "random.choices는 weights 비율에 따라 sizes에서 k개를 뽑아 리스트로 반환하는 함수. "
                  "여기선 1개만 필요하므로 k=1로 뽑고 [0]으로 그 값을 꺼낸다."),
             ])),
            ("`build_clusters()`가 대장(가장 큰 것) 1개 + 가장 작은 것 1개 + 나머지 랜덤으로 무리를 "
             "구성하고, 대장/최소 크기 비율이 `CLUSTER_MIN_SIZE_RATIO` 미만이면 가장 작은 멤버를 더 "
             "줄여서라도 크기 계층을 강제합니다 — 멤버 크기가 다 비슷하면 알 무더기처럼 보이기 때문입니다.",
             ("space_background.py 일부 — 대장/졸개 크기 계층 강제 (build_clusters 내부)", [
                 ("leader = clustered.pop(0)       # largest remaining",
                  "클러스터 후보 목록(clustered)은 이 지점에서 이미 크기 내림차순으로 정렬돼 있다 "
                  "(정렬 코드는 바로 윗부분에 있음). pop(0)으로 맨 앞, 즉 '현재 남은 것 중 가장 큰 것'을 "
                  "꺼내서 이 무리의 대장으로 삼는다."),
                 ("smallest = clustered.pop()      # smallest remaining",
                  "인자 없는 pop()은 리스트의 마지막 요소를 꺼낸다. 내림차순 정렬이므로 마지막 요소가 "
                  "곧 '남은 것 중 가장 작은 것' — 이걸 졸개(최소 멤버)로 삼는다."),
                 ("others = random.sample(clustered, min(size - 2, len(clustered)))",
                  "대장과 최소 멤버를 뺀 나머지 자리(목표 무리 크기 size에서 2를 뺀 수)만큼, 남은 후보 "
                  "중에서 무작위로 뽑는다. min(size-2, len(clustered))는 남은 후보 수가 부족한 극단적인 "
                  "경우에도 범위를 벗어나는 요청(인덱스 에러)을 내지 않도록 하는 안전장치."),
                 ("for item in others:\n    clustered.remove(item)",
                  "방금 무작위로 뽑은 멤버들을 원래 후보 목록(clustered)에서 제거한다 — 다음 while 반복"
                  "(다음 무리를 만들 때)에서 같은 행성이 중복으로 뽑히지 않게 하기 위함."),
                 ("if leader[\"scale\"] / smallest[\"scale\"] < CLUSTER_MIN_SIZE_RATIO:",
                  "대장과 최소 멤버의 크기 비율이 미리 정한 최소 비율(CLUSTER_MIN_SIZE_RATIO, 예: 3배)보다 "
                  "작은지 확인한다 — 즉 '대장이 충분히 크지 않은지'를 검사."),
                 ("    smallest[\"scale\"] = leader[\"scale\"] / CLUSTER_MIN_SIZE_RATIO",
                  "비율이 부족하면, 최소 멤버 쪽의 크기를 강제로 더 줄여서 비율을 정확히 "
                  "CLUSTER_MIN_SIZE_RATIO로 맞춘다. 대장을 키우지 않고 졸개를 줄이는 쪽을 택한 이유는, "
                  "대장은 이미 그 구간(zone)에서 정해진 크기 범위를 따르고 있어서 건드리면 Zone 설정과 "
                  "어긋나기 때문 — 대신 졸개는 '무리 안에서의 상대적 크기'일 뿐이라 조정 여지가 있다."),
                 ("    smallest[\"radius\"] = planet_radius(smallest[\"scale\"])",
                  "scale 값만 바꾸고 끝나는 게 아니라, 그 scale에 대응하는 실제 반지름(radius)도 다시 "
                  "계산해서 갱신한다 — 이후 충돌 검사(has_space)나 겉보기 크기 계산(to_view)이 scale이 "
                  "아니라 radius를 직접 쓰기 때문에, 이 줄을 빠뜨리면 충돌 판정이 예전 크기 기준으로 "
                  "어긋나는 버그가 생긴다."),
                 ("members = [leader] + others + [smallest]",
                  "대장, 무작위로 뽑은 나머지, 최소 멤버를 하나의 리스트로 합쳐서 이 무리의 최종 멤버 "
                  "목록을 만든다. 순서상 leader가 항상 0번 인덱스에 오는데, 이는 뒤의 place_cluster()가 "
                  "'0번째 멤버 = 대장'이라고 가정하고 배치 순서를 정하기 때문이다."),
             ])),
            (f"{fn('가우시안 산포 (Gaussian scatter)', '무리 안에서 멤버들을 흩뿌릴 때, 원판 안에 균등하게 뿌리는 대신 중심은 밀도 높고 가장자리로 갈수록 밀도가 낮아지는 정규분포(가우시안)로 뽑는 방식. 균등 분포는 격자처럼 고르게 보여 부자연스럽고, 가우시안은 자연스러운 뭉침을 만든다.')}로 멤버를 흩뿌립니다 — 원판에 균등하게 뿌리면 간격이 고르게 꽉 차서 "
             "격자처럼 보이지만, 가우시안은 중심에 밀집하고 가장자리로 갈수록 듬성해져서 자연스럽습니다. "
             "여기에 무리마다 살짝 타원형(최대 1.8배 늘림)으로 비틀어서 모든 무리가 완벽한 원으로 보이지 "
             "않게 했습니다.",
             ("space_background.py 일부 — 가우시안 산포 + 타원 비틀기", [
                 ("def cluster_offset(cluster, center, sigma):",
                  "무리의 중심 방향(center)으로부터, 멤버 하나가 놓일 '살짝 벗어난 방향'을 하나 뽑는 "
                  "함수. sigma는 얼마나 넓게 퍼질지를 정하는 표준편차(대장은 좁게, 나머지는 넓게 — "
                  "호출하는 쪽에서 다르게 넘겨준다)."),
                 ("    stretch = cluster[\"stretch\"]",
                  "이 무리에 미리 정해둔 타원 비율(1.0~CLUSTER_MAX_STRETCH 사이 랜덤값, build_clusters "
                  "에서 생성)을 가져온다. 1.0이면 완전한 원, 클수록 한쪽으로 길쭉해진다."),
                 ("    limit = cluster[\"alpha_est\"]",
                  "이 무리를 감싸는 '원판'의 반지름(각도 단위) — 이 범위를 넘는 멤버는 무리 밖으로 튀어나가 "
                  "다른 행성과 충돌할 수 있으므로 버려야 한다."),
                 ("    x = random.gauss(0.0, sigma) * stretch",
                  "평균 0, 표준편차 sigma인 정규분포(가우시안)에서 난수를 뽑아 x좌표로 쓰고, 여기에 "
                  "stretch를 곱해 한쪽 축을 길게 늘인다 — 이게 타원형으로 보이게 만드는 부분."),
                 ("    y = random.gauss(0.0, sigma)",
                  "y좌표는 늘이지 않고 그대로 가우시안에서 뽑는다 — x만 늘였으므로 x/y 두 축의 스케일이 "
                  "달라져 결과적으로 타원이 된다."),
                 ("    angle = math.hypot(x, y)",
                  "hypot(x, y)는 sqrt(x²+y²), 즉 중심으로부터 이 점까지의 거리(여기서는 각도 단위 거리). "
                  "가우시안 특성상 중심(0,0) 근처일수록 뽑힐 확률이 높고 멀어질수록 낮아지므로, 결과적으로 "
                  "'중심은 촘촘, 가장자리는 듬성'한 자연스러운 분포가 만들어진다."),
                 ("    if angle > limit:          # discard samples that land outside the disc",
                  "가우시안은 이론상 아무리 멀리도 뽑힐 수 있으므로(꼬리가 무한히 이어짐), 무리의 반지름"
                  "(limit)을 넘는 샘플은 무리 밖으로 나가는 것이니 버린다."),
                 ("        return None",
                  "호출하는 쪽(place_cluster)은 None을 받으면 '이번 샘플은 실패'로 보고 다시 뽑기를 "
                  "시도한다 — 즉 limit을 넘는 샘플은 재시도로 걸러지고, 실제로 채택되는 값은 항상 "
                  "원판 안쪽으로 보장된다."),
                 ("    phi = math.atan2(y, x) + cluster[\"orient\"]",
                  "atan2(y, x)로 (x, y) 지점의 방향(각도)을 구하고, 여기에 무리마다 미리 정해둔 무작위 "
                  "회전값(orient)을 더한다 — 모든 무리의 타원이 전부 같은 방향으로만 늘어나면 부자연스럽게 "
                  "반복되는 패턴처럼 보이므로, 무리마다 타원의 기울어진 방향을 다르게 하기 위함."),
                 ("    return direction_from_axis(center, angle, phi)",
                  "지금까지 구한 2D 극좌표(중심으로부터의 각도 거리 angle, 방향 phi)를, 무리 중심 방향"
                  "(center)을 기준축으로 하는 실제 3D 단위 벡터로 변환해서 반환한다 — 이 변환 함수 덕분에 "
                  "무리 중심이 하늘 어디에 있든(심지어 극 근처든) 같은 2D 산포 로직을 그대로 적용할 수 "
                  "있다."),
             ])),
        ],
        likely_q=[
            ("무리 안에서 거리를 다 다르게 주면 안 되나요? 왜 대장 거리 근처로 맞췄나요?",
             "멤버 거리가 제각각이면 멀리 있는 멤버는 원래 크기와 상관없이 화면에서 더 작게 보여서, "
             "애써 만든 대장/졸개 크기 계층이 거리 차이에 묻혀 흐려집니다. 그래서 졸개들의 거리를 "
             "`CLUSTER_DEPTH_JITTER`만큼의 좁은 범위로 대장 거리 근처에 고정해서, 크기 계층이 화면에서도 "
             "그대로 드러나게 했습니다.", None),
            ("최대 무리 크기를 12에서 7로 줄인 이유는?",
             "에디터에서 시각적으로 확인했을 때 멤버가 12개면 너무 빽빽하게 뭉쳐서 알 무더기처럼 "
             "부자연스러워 보였습니다. 수치적인 기준보다 실제로 눈으로 보고 판단한 결과였고, 7개로 "
             "줄이니 훨씬 자연스러운 밀도로 보였습니다.", None),
        ],
        english_lines=[
            "“Clusters are pre-built before placement with 1/n-weighted sizes, then placed as a "
            "single disc under the same spacing/density rules as a big planet, so clusters, big and "
            "medium planets mix evenly instead of splitting the sky in two.”",
            "“Inside a cluster I force a leader-plus-followers size hierarchy, scatter members with "
            "a Gaussian instead of a uniform fill, and stretch each cluster into a slight ellipse so "
            "it doesn't read as a perfect, grid-like circle.”",
        ],
    ))

    story.extend(bullet_block(
        s, 5,
        "락 (Lock) — 반복 작업 중 마음에 드는 행성을 고정하기",
        source_label="포트폴리오 케이스 스터디",
        what="재생성(Generate)할 때 특정 행성은 그대로 두고 나머지만 다시 배치할 수 있게 하는 기능입니다.",
        why="매번 재생성하면 하늘 전체가 바뀌어서, 배치 결과의 90%가 마음에 들어도 나머지 10%를 고치려면 "
            "전부 다시 굴려야 했습니다. 특정 행성만 그대로 두고 주변만 재배치할 방법이 없었습니다.",
        how=[
            ("최근에 만든 행성은 Blueprint의 Instance Editable bool(Details 패널 체크박스)로 Locked를 "
             "저장하지만, 그 전에 StaticMeshActor로 만든 예전 행성은 해당 프로퍼티가 없습니다. "
             "`is_locked()`가 프로퍼티 조회 실패 시 `BG_Locked` 태그로 대체해서, 두 세대의 행성 액터를 "
             "동시에 지원합니다.",
             ("space_background.py 일부 — 체크박스 또는 태그로 락 상태 판별", [
                 ("def is_locked(actor):",
                  "레벨에 있는 행성 액터 하나(actor)가 락(고정) 상태인지 아닌지를 True/False로 돌려주는 "
                  "함수. 뒤에서 Clear/Generate 양쪽 모두 이 함수로 락 여부를 판단한다."),
                 ("    try:",
                  "먼저 '새 방식'(Blueprint 체크박스 프로퍼티)으로 조회를 시도한다."),
                 ("        if actor.get_editor_property(LOCK_PROPERTY):",
                  "LOCK_PROPERTY(\"Locked\")라는 이름의 Instance Editable bool 프로퍼티 값을 읽는다. "
                  "이 프로퍼티는 최근에 만든 Blueprint 행성(BP_BGPlanet)에만 존재한다."),
                 ("            return True",
                  "프로퍼티가 존재하고 값이 True면 곧바로 락 상태로 확정하고 반환한다."),
                 ("    except Exception:",
                  "오래전에 StaticMeshActor로 만든 행성은 Locked라는 프로퍼티 자체가 없어서 "
                  "get_editor_property 호출이 예외를 던진다. 그 예외를 여기서 잡는다."),
                 ("        pass",
                  "예외를 무시하고 아래의 '옛 방식' 확인으로 넘어간다 — 프로퍼티가 없다고 바로 False를 "
                  "반환하면 안 되는 이유는, 옛날 행성도 태그로 락이 걸려있을 수 있기 때문."),
                 ("    return LOCK_TAG in actor_tags(actor)",
                  "새 방식으로 확인이 안 됐거나(또는 값이 False였거나) 애초에 프로퍼티가 없었던 경우, "
                  "액터의 태그 목록에 LOCK_TAG(\"BG_Locked\")가 있는지로 대체 판단한다. 이렇게 "
                  "'체크박스 우선 → 실패하면 태그' 순서로 설계해서, 새/구 두 세대의 행성 액터를 호출하는 "
                  "쪽(Generate/Clear)은 신경 쓰지 않고 is_locked() 하나만 부르면 되게 만들었다."),
             ])),
            (f"락 걸린 행성은 {fn('BG_Zone 태그', '락 걸린 행성이 어느 ScaleZones 구간의 Count를 차지하고 있는지 기록해두는 액터 태그. 다음 Generate가 Count 예산을 다시 계산할 때, 이미 락으로 고정된 행성이 쓰고 있는 자리를 올바르게 빼고 계산하기 위해 필요하다.')}도 같이 가지고 있어서, 다음 Generate가 어느 구간(zone)의 Count에서 "
             "그 행성을 빼야 하는지 알 수 있습니다. Zone 기능이 생기기 전에 락 걸린 행성은 태그가 없으므로, "
             "`guess_zone()`이 스케일·거리 범위가 가장 잘 맞는 구간을 역으로 추정합니다 — 데이터가 없을 때 "
             "기존 값으로부터 가장 그럴듯한 상태를 복원하는 방어적 설계입니다.",
             ("space_background.py 일부 — 구간 태그가 없을 때 역으로 추정", [
                 ("def guess_zone(zones, location, scale):",
                  "BG_Zone_N 태그가 없는(=Zone 기능이 생기기 전에 락이 걸린) 행성이, zones 목록 중 "
                  "어디에 속한다고 봐야 할지 역으로 추정하는 함수. 입력은 행성의 현재 위치와 크기뿐이고, "
                  "정답을 알려주는 정보는 없다 — '가장 그럴듯한 것'을 점수로 골라낸다."),
                 ("    distance = vec_length(location)",
                  "이 행성의 현재 3D 위치로부터 아레나까지의 거리를 구한다 — 각 zone의 거리 범위와 "
                  "비교하기 위함."),
                 ("    best, best_score = None, None",
                  "지금까지 찾은 '가장 점수가 높은 zone'과 그 점수를 담을 변수. 아직 아무것도 못 찾았으니 "
                  "둘 다 None으로 초기화."),
                 ("    for zone in zones:",
                  "DataAsset에 정의된 모든 zone을 하나씩 검사한다."),
                 ("        in_scale = zone[\"min_scale\"] <= scale <= zone[\"max_scale\"]",
                  "이 행성의 scale이 해당 zone의 스케일 범위 안에 들어가는지 True/False로 확인."),
                 ("        in_dist = zone[\"min_distance\"] <= distance <= zone[\"max_distance\"]",
                  "이 행성까지의 거리가 해당 zone의 거리 범위 안에 들어가는지 True/False로 확인."),
                 ("        score = int(in_scale) + int(in_dist)",
                  "두 조건을 각각 0 또는 1로 바꿔서 더한다 — 둘 다 맞으면 2점, 하나만 맞으면 1점, 둘 다 "
                  "안 맞으면 0점. zone들이 서로 겹칠 수 있어(코드 상단 설계 메모 참고) 완벽히 하나로 "
                  "결정되지 않을 수 있으므로, '더 잘 맞는 쪽'을 점수로 비교하는 방식을 택했다."),
                 ("        if best is None or score > best_score:",
                  "아직 아무 zone도 선택 안 했거나(best is None), 지금 보는 zone의 점수가 지금까지 "
                  "최고 점수보다 높으면."),
                 ("            best, best_score = zone, score",
                  "현재 zone을 '지금까지 중 가장 그럴듯한 정답'으로 갱신한다."),
                 ("    return best",
                  "모든 zone을 다 본 뒤, 점수가 가장 높았던 zone을 반환한다 — 정보가 불완전한 과거 "
                  "데이터로부터 가장 그럴듯한 상태를 복원하는 '최선 추정(best-effort)' 방식의 전형적인 "
                  "예시."),
             ])),
            ("Lock/Unlock은 되돌릴 수 있는 에디터 트랜잭션 하나로 실행되며 몇 개를 (언)락했는지 로그로 "
             "남기고, Clear도 몇 개의 락 걸린 행성을 유지했는지 로그로 남겨서, 아티스트가 락 건 행성이 "
             "실수로 사라지지 않았는지 바로 확인할 수 있게 했습니다.", None),
        ],
        likely_q=[
            ("락 기능에서 가장 까다로웠던 부분은?",
             "행성 액터가 두 세대(옛 StaticMeshActor와 새 Blueprint)로 섞여 있어서, 락 상태를 저장하는 "
             "방식부터 둘로 나뉘어 있었다는 점입니다. 프로퍼티 조회 실패를 태그로 폴백하는 구조로 두 "
             "세대를 하나의 API(`is_locked`/`set_locked`)로 통일해서, 호출하는 쪽(Generate/Clear)은 "
             "행성이 어느 세대인지 신경 쓸 필요가 없게 만들었습니다.", None),
        ],
        english_lines=[
            "“I added a per-planet Locked flag — locked planets survive Clear and get fed back into "
            "the next Generate as already-placed, so an artist can keep what they like and re-roll "
            "only the rest.”",
            "“Since planet actors come from two generations — plain StaticMeshActors and a newer "
            "Blueprint with a Locked checkbox — is_locked()/set_locked() fall back to an actor tag "
            "when the property lookup fails, so both generations work through one API.”",
        ],
    ))

    story.extend(glossary_section(s))
    doc.build(story)
    print(f"Wrote {out_path}")


def build_street_typer():
    reset_footnotes()
    s = styles()
    out_path, doc, story = new_doc(s, "InterviewPrep_StreetTyper.pdf", "Street Typer — Interview Prep", "STREET TYPER")

    story.extend(bullet_block(
        s, 1,
        "Owned original 2D art, UI composition, particles, outlines, camera shake, hit VFX, and "
        "animated feedback for a shipped bilingual typing-combat game.",
        what="타이핑 전투 게임의 2D 아트와 UI, 이펙트, 애니메이션 피드백 전체를 직접 담당했고, 실제로 "
             "플레이어가 플레이할 수 있는 빌드로 출시까지 됐다는 뜻입니다.",
        why="손맛(게임 필)을 결정하는 요소(파티클, 카메라 흔들림, 타격 이펙트, 윤곽선)가 전부 시각적 "
            "요소라서, 프로그래머가 아니라 비주얼을 책임지는 사람이 직접 만들고 튜닝해야 일관된 느낌이 "
            "나옵니다.",
        how=[
            ("타이핑 입력 정확도/타이밍에 따른 히트 피드백(파티클, 카메라 흔들림, 윤곽선 강조)을 직접 "
             "제작해서, 숫자로만 판정되는 타이핑 게임에 시각적 손맛을 더했습니다.", None),
        ],
        likely_q=[],
        english_lines=[
            "“I owned all the 2D art and visual feedback — particles, outlines, camera shake, hit "
            "VFX — for a shipped bilingual typing-combat game.”",
        ],
    ))

    story.extend(bullet_block(
        s, 2,
        "Specified, evaluated, debugged, and integrated an AI-assisted reusable UI shader workflow "
        "for rounded forms, gradients, drop/inner shadows, blur, presets, and Inspector iteration.",
        what=(
            "버튼, 게이지, 카드 같은 UI 요소를 전부 손으로 그리는 대신, 셰이더 하나(UIStyle.shader)와 "
            "컴포넌트 하나(UIStyle.cs)로 모양·그림자·그라디언트를 인스펙터에서 파라미터로 조절할 수 있게 "
            "만든 재사용 가능한 UI 시스템을 가져와서, 이 게임에 맞게 확장하고 통합했다는 뜻입니다."
        ),
        why=(
            "둥근 버튼, 게이지, 카드를 스타일마다 일일이 손으로 그리면 아트 스타일을 통일하기도 어렵고 "
            "시간도 오래 걸립니다. 이미 ThinkThink 프로젝트에서 만들어둔 같은 셰이더 시스템을 그대로 "
            "가져와서, Street Typer의 카드 전투 UI에 맞게 기능을 추가하는 쪽이 효율적이었습니다."
        ),
        how=[
            (f"{fn('SDF (Signed Distance Field)', '각 픽셀에서 도형 경계까지의 거리를 부호(안쪽=음수 또는 양수, 바깥쪽=반대)로 저장해서 도형을 표현하는 방식. 해상도에 독립적으로 매끄러운 둥근 모서리·테두리를 그릴 수 있어서 UI 셰이더에서 자주 쓰인다.')} 기반으로 모서리를 둥글게 그리는 핵심 셰이더(UIStyle.shader)는 그대로 "
             "가져오고, Street Typer 전용으로 4개 기능을 추가했습니다: 모서리마다 다른 반지름(per-corner "
             "radius), 다이아몬드 모양, 중심→테두리 방향의 radial 그라디언트, 안쪽 방향 전용 아웃라인, 체력/"
             "타이머 바처럼 차오르는 게이지 필.", None),
            ("원래 Inspector 필드 9개 그룹(둥근 모서리, 드롭 섀도우, 이너 섀도우, 그라디언트, 엣지 "
             "하이라이트, 머티리얼 타입, 노이즈, 하단 엣지 라인, 프리셋)으로 구성된 시스템을 재사용했고, "
             "완성된 스타일은 UIStylePreset 애셋으로 저장해서 다른 UI에도 바로 적용할 수 있게 했습니다.",
             None),
            (f"셰이더 설계·반복 과정에 {fn('AI 보조 개발', '셰이더 코드 자체를 AI가 대신 작성해준 게 아니라, 파라미터 조합이나 SDF 수식 변형안을 빠르게 탐색하고 반복 실험하는 과정에서 AI 도구를 보조적으로 활용했다는 의미 — 최종 설계 판단과 디버깅, 게임에 맞는 통합은 직접 수행했다.')}를 활용해서 약 1,000줄 이상의 셰이더 코드를 빠르게 반복 "
             "실험했지만, 실제로 어떤 파라미터가 필요한지 정의하고, 나온 결과를 검증·디버깅하고, 게임에 "
             "맞게 통합하는 건 직접 했습니다.", None),
        ],
        likely_q=[
            ("AI 보조 개발이라는 게 정확히 어떤 의미인가요?",
             "셰이더 코드를 AI가 대신 만들어준 게 아니라, 여러 파라미터 조합이나 수식 변형안을 빠르게 "
             "탐색하는 반복 실험 단계에서 AI를 보조 도구로 썼다는 뜻입니다. 어떤 기능이 필요한지 정의하고, "
             "나온 결과가 실제로 의도대로 동작하는지 디버깅하고 게임에 통합하는 판단은 제가 직접 했습니다.",
             None),
            ("기존 셰이더를 재사용하지 않고 처음부터 새로 만들 수도 있었을 텐데, 왜 확장하는 쪽을 택했나요?",
             "ThinkThink에서 만든 UIStyle 시스템이 이미 9개 스타일 그룹과 프리셋 저장/적용 기능까지 "
             "검증된 상태였고, 핵심 셰이더와 컴포넌트는 그대로 쓸 수 있었습니다. Street Typer에 필요했던 "
             "건 새로운 도형(다이아몬드)과 몇 가지 기능(게이지 필 등)뿐이라, 처음부터 새로 만드는 것보다 "
             "기존 시스템을 확장하는 쪽이 훨씬 효율적이었습니다.", None),
        ],
        english_lines=[
            "“I brought over a reusable Unity URP UI shader system I'd already built for ThinkThink "
            "— one shader and one component that let any UI Image become a styled shape just by "
            "tuning parameters in the Inspector — and extended it for Street Typer's card-combat UI.”",
            "“I added per-corner radius, a diamond shape, a radial gradient, a dedicated outline, "
            "and a gauge-fill mode for HP/timer bars — the core shader and component carried over "
            "unchanged.”",
            "“I used AI-assisted tools to iterate faster on parameter combinations, but defining "
            "what the system actually needed, debugging the results, and integrating it into the "
            "game were all done by me.”",
        ],
    ))

    story.extend(bullet_block(
        s, 3,
        "Published a playable build on itch.io and prepared the game for a Steam release.",
        what="실제로 플레이할 수 있는 빌드를 itch.io에 올려서 누구나 플레이해볼 수 있게 했고, Steam "
             "출시도 준비했다는 뜻입니다.",
        why="포트폴리오 프로젝트로 끝내지 않고 실제 플랫폼에 배포해서, 진짜 플레이어 피드백을 받고 "
            "출시 프로세스(스토어 페이지, 빌드 패키징 등)까지 경험하기 위함이었습니다.",
        how=[],
        likely_q=[],
        english_lines=[
            "“I published a playable build on itch.io and prepared it for a Steam release — not "
            "just a portfolio demo, but something people could actually play.”",
        ],
    ))

    story.extend(glossary_section(s))
    doc.build(story)
    print(f"Wrote {out_path}")


def build_too_hot():
    reset_footnotes()
    s = styles()
    out_path, doc, story = new_doc(s, "InterviewPrep_TooHot.pdf", "Too Hot! — Interview Prep", "TOO HOT!")

    story.extend(bullet_block(
        s, 1,
        "Created and integrated the game's 2D shadow treatment, pattern-specific VFX, UI, "
        "animation, hit feedback, and visual hierarchy; tuned width and length controls for "
        "readable shadows across combat spaces.",
        what="10일짜리 게임잼에서 보스 전투 게임의 비주얼(그림자 셰이더, VFX, UI, 애니메이션, 타격 "
             "피드백)을 전부 직접 만들고 통합했다는 뜻입니다.",
        why="10일이라는 짧은 일정 안에 프레임 단위로 손그림 애니메이션을 전부 그릴 시간이 없어서, "
            "애니메이션과 이펙트를 만드는 방식 자체를 바꿔야 했습니다.",
        how=[
            ("캐릭터를 프레임 단위로 그리는 대신, 부위별로 분리한 스켈레탈 리그로 전환해서 애니메이션을 "
             "만들었습니다.", None),
            ("캐릭터의 불 이펙트도 손그림 애니메이션이 아니라 셰이더로 제작해서, 불 프레임을 따로 그릴 "
             "필요가 없게 만들었습니다 — 리그와 셰이더가 움직임과 이펙트 대부분을 담당하고, 아티스트는 "
             "몇 장의 손그림만 그리면 됐습니다.", None),
            ("캐릭터와 전투 공간에 깊이·접지감을 더하는 커스텀 그림자 셰이더를 만들어서, 개별적으로 그린 "
             "그림자 이미지 없이도 2D 아트에 일관된 그림자가 생기게 했고, 폭(width)·길이(length) 값을 "
             "직접 튜닝해서 다양한 전투 공간에서도 그림자가 항상 또렷하게 읽히도록 했습니다.", None),
        ],
        likely_q=[
            ("10일이라는 제약이 구체적으로 어떤 기술적 결정으로 이어졌나요?",
             "프레임 단위 손그림 애니메이션은 시간이 너무 많이 들어서 포기하고, 스켈레탈 리그와 셰이더로 "
             "대체했습니다. 불 이펙트도 같은 이유로 프레임 애니메이션 대신 셰이더로 만들어서, 아티스트의 "
             "실제 작업량을 몇 장의 손그림 수준으로 줄였습니다.", None),
        ],
        english_lines=[
            "“With only a 10-day jam timeline, I couldn't hand-draw frame-by-frame animation, so I "
            "switched the character to a skeletal rig with separated body parts, and built the fire "
            "effect as a shader instead of drawn flame frames.”",
            "“I also built a custom shadow shader so the 2D art reads with consistent depth and "
            "contact, and tuned its width and length so shadows stayed readable across every combat "
            "space.”",
        ],
    ))

    story.extend(bullet_block(
        s, 2,
        "Specified GameplayManager and per-stage ScriptableObject data flow, save-range "
        "safeguards, chapter selection, and clean-state debug controls; reviewed "
        "teammate-authored gameplay implementations.",
        what=(
            "실제 코드는 팀원이 작성했지만, 그 코드가 어떤 구조로 동작해야 하는지(아키텍처 요구사항)를 "
            "제가 설계하고 문서화한 다음, 구현된 결과를 리뷰했다는 뜻입니다."
        ),
        why=(
            "씬마다 따로 대화를 로딩하던 기존 방식은 스테이지가 늘어날수록 관리가 어려워졌고, 세이브 "
            "값이 깨지는 경우(최종 스테이지 범위 밖 값 등)에 대한 복구 로직도 없었습니다."
        ),
        how=[
            (f"씬별로 흩어져 있던 대화 로딩 방식을, 중앙화된 {fn('GameplayManager', '씬 전환이나 개별 오브젝트 생명주기와 무관하게, 게임 전체의 진행 상태(보스, 대화, 진행도, 엔딩 조건)를 한 곳에서 관리하는 매니저 클래스. 여러 씬에 흩어진 로직을 한 곳으로 모아 일관성을 보장한다.')}와 스테이지별 StageData "
             "ScriptableObject로 통합하도록 설계했습니다 — 보스, 대화, 진행도, 엔딩 조건이 전부 이 구조를 "
             "통해 조율됩니다.", None),
            ("최종 스테이지에서 범위를 벗어난 값으로 인한 실패 사례를 찾아내고, 저장값이 깨지거나 예상 "
             "밖의 값일 때 검증하고 복구하는 로직이 필요하다는 요구사항을 정의했습니다.", None),
            ("타이틀 화면부터 매번 처음부터 플레이하지 않고도 원하는 스테이지로 바로 가서 테스트할 수 "
             "있도록, 에디터 전용 챕터 선택 기능과 상태 초기화(clean-state) 컨트롤을 요구사항으로 명시했습니다.",
             None),
        ],
        likely_q=[
            ("프로그래밍을 직접 하지 않았는데 '아키텍처를 설계했다'고 말할 수 있는 근거는?",
             "제가 실제 C# 코드를 작성하지는 않았지만, 어떤 구조(중앙화된 GameplayManager + 스테이지별 "
             "데이터)로 가야 하는지, 어떤 실패 사례를 막아야 하는지, 어떤 디버그 도구가 필요한지를 "
             "구체적인 요구사항으로 정의하고 문서화했습니다. 구현된 결과를 리뷰하고 수정을 요청하는 것도 "
             "제 역할이었습니다 — 설계 의사결정의 책임자였지 타이핑한 사람은 아니라는 뜻입니다.", None),
        ],
        english_lines=[
            "“I didn't write the gameplay code myself, but I directed the architecture: a "
            "centralized GameplayManager and per-stage StageData ScriptableObjects coordinating "
            "boss, dialogue, progression, and ending conditions, replacing scene-specific dialogue "
            "loading.”",
            "“I identified final-stage out-of-range failure cases and specified validation/recovery "
            "requirements for corrupted save values, plus editor-only chapter selection and "
            "clean-state controls so the team could test without replaying from the title screen.”",
        ],
    ))

    story.extend(bullet_block(
        s, 3,
        "Balanced direct art/technical-art execution with a 130+ item P0-P3 backlog, "
        "two-programmer coordination, code review, merges, and final visual integration.",
        what="직접 아트/테크니컬 아트 작업을 하면서 동시에, 130개 넘는 작업을 우선순위별로 관리하고 "
             "프로그래머 2명을 조율하는 프로듀서 역할도 같이 했다는 뜻입니다.",
        why="게임잼처럼 일정이 극도로 짧을 때는, '무엇을 먼저 끝내야 하는지' 우선순위가 명확하지 않으면 "
            "팀이 중요하지 않은 폴리싱에 시간을 쓰다 핵심 기능을 놓치기 쉽습니다.",
        how=[
            ("P0(출시에 꼭 필요 — 대화, 세이브/이어하기, 보스 페이즈, 핵심 보스 패턴)부터 P1(가능하면 "
             "— 스테이지 경고, 전환 연출), P3(여유 있으면 — 카메라 폴리싱)까지 전체 작업을 우선순위별로 "
             "나눈 백로그를 운영했습니다.", None),
            ("예를 들어 데미지 숫자 표시는 이미 보스 체력바로 결과가 전달되고 있어서 중복이라고 판단해 "
             "제외하고, 남은 시간을 타격감을 살리는 카메라 반응에 재배치했습니다 — 우선순위 판단 자체가 "
             "제작 방향을 결정했습니다.", None),
            ("완성된 시스템은 메인 브랜치에 합치기 전에 리뷰했고, 리뷰·재작업·테스트·완료까지 모든 항목을 "
             "추적했습니다.", None),
        ],
        likely_q=[
            ("130개 넘는 작업을 어떻게 우선순위화했나요?",
             "P0(출시에 꼭 필요), P1(가능하면 포함), P3(시간이 남으면)로 나눴습니다. 예를 들어 데미지 "
             "숫자 표시는 보스 체력바가 이미 같은 정보를 주고 있어서 불필요하다고 판단해 제외하고, 그 "
             "시간을 카메라 반응(타격감)에 다시 투자했습니다 — 단순 일정 관리가 아니라 어떤 걸 만들지 "
             "결정하는 제작 판단이었습니다.", None),
        ],
        english_lines=[
            "“I maintained a cross-discipline backlog of 130+ tasks from P0 (must ship — dialogue, "
            "save/continue, boss phases) to P3 (defer if needed — camera polish), while also doing "
            "hands-on art and technical-art work myself.”",
            "“I rejected redundant damage numbers because the boss HP bar already communicated the "
            "result, and redirected that time to camera response for stronger hit feedback — "
            "prioritization calls that shaped what actually got built.”",
        ],
    ))

    story.extend(glossary_section(s))
    doc.build(story)
    print(f"Wrote {out_path}")


def build_new_manzo():
    reset_footnotes()
    s = styles()
    out_path, doc, story = new_doc(s, "InterviewPrep_NewManzo.pdf", "New MANZO — Interview Prep", "NEW MANZO")

    story.extend(bullet_block(
        s, 1,
        "Implemented procedural leg animation for a multi-legged boss using ground raycasts and "
        "step-arc motion.",
        what="다리가 여러 개인 게 보스가 걸을 때, 미리 그려둔 애니메이션이 아니라 코드로 매 순간 발 "
             "위치를 계산해서 걷는 것처럼 보이게 만들었다는 뜻입니다.",
        why="몸 전체가 이동할 때 발이 그냥 몸을 따라가기만 하면, 바닥에 붙어 걷는 느낌이 아니라 둥둥 "
            "떠다니는 것처럼 보여서 어색했습니다.",
        how=[
            (f"발 목표 지점을 몸의 이동과 분리하고, 디딘 발과 목표 지점 사이 거리가 문턱값을 넘으면 그제야 "
             f"번갈아가며(alternating) 다리 그룹을 다음 위치로 옮기는 방식으로 설계했습니다 — {fn('IK (Inverse Kinematics)', '관절의 각도를 하나하나 지정하는 대신, 발 끝 같은 말단 목표 위치를 먼저 정하고 그 목표에 맞게 나머지 관절 각도를 거꾸로 계산하는 애니메이션 기법. 걷는 다리처럼 발이 바닥에 닿아야 하는 경우에 자주 쓰인다.')} 기반 발 "
             "목표를 지면 레이캐스트, 이동 속도 예측(velocity lead), 스텝 아크(step arc), 리치 "
             "제한(reach clamp), 몸체 정렬과 함께 조합했습니다.", None),
            ("시작 시점에 발이 바로 유효한 바닥 위치로 스냅되도록 했고, 다리 그룹과 문턱값을 인스펙터에서 "
             "조절할 수 있게 노출해서 애니메이션 튜닝이 가능하게 했습니다.", None),
        ],
        likely_q=[
            ("왜 미리 제작한 애니메이션 대신 절차적(procedural) 방식을 택했나요?",
             "보스가 전투 중 다양한 방향/속도로 움직이는데, 모든 이동 패턴에 맞는 다리 애니메이션을 "
             "전부 손으로 만드는 건 비현실적이었습니다. 절차적으로 지면과 이동 상태에 맞춰 발 위치를 "
             "계산하면, 어떤 움직임에도 자연스럽게 반응합니다.", None),
        ],
        english_lines=[
            "“A large multi-legged boss looked detached when its feet simply inherited the moving "
            "body's transform, so I detached the foot targets and only moved alternating leg "
            "groups once the planted distance crossed a threshold.”",
            "“I combined ground raycasts, velocity lead, step arcs, reach clamps, and body alignment "
            "— feet snap to valid ground at startup, and the groups/thresholds are exposed in the "
            "Inspector for tuning.”",
        ],
    ))

    story.extend(bullet_block(
        s, 2,
        "Built raycasting-based underwater visibility and post-processing for atmospheric "
        "rendering.",
        what="수중 환경에서 시야가 거리에 따라 흐려지는 효과와 전체 화면 후처리(포스트프로세싱)를 "
             "레이캐스팅 기반으로 만들어서, 심해다운 분위기를 냈다는 뜻입니다.",
        why="게임의 핵심 톤이 '심해로 갈수록 어둡고 불안해지는' 분위기였기 때문에, 단순한 안개 효과보다 "
            "더 정교한 시야 제어가 필요했습니다.",
        how=[],
        likely_q=[],
        english_lines=[
            "“I built raycasting-based underwater visibility and post-processing to support the "
            "game's atmospheric, deep-sea horror tone.”",
        ],
    ))

    story.extend(bullet_block(
        s, 3,
        "Contributed fish-schooling AI and beat-linked hunting; built Unity editor tools for scene "
        "setup, area editing, and UI style presets. Repository lead contributor with 417 commits.",
        what="물고기 떼가 자연스럽게 무리 지어 헤엄치는 AI와, 리듬(비트)에 맞춰 사냥하는 게임플레이를 "
             "만들었고, 반복적인 씬 설정 작업을 줄여주는 에디터 툴도 직접 제작했다는 뜻입니다. 저장소 "
             "전체 커밋의 상당 부분을 직접 기여했습니다.",
        why=(
            "물고기마다 경로를 일일이 손으로 지정하는 건 현실적이지 않고, 그렇게 만들면 움직임이 "
            "기계적으로 보입니다. 또 보스 씬·구역·UI 스타일을 매번 수동으로 설정하면 설정이 틀어지거나 "
            "누락되기 쉬워서, 반복 작업을 에디터 툴로 옮길 필요가 있었습니다."
        ),
        how=[
            (f"{fn('로컬 스티어링 (Local Steering Behaviors)', '전체 무리의 경로를 미리 정하는 대신, 각 개체가 주변 이웃과의 거리·방향만 보고 분리(separation)·정렬(alignment)·응집(cohesion) 같은 단순한 규칙을 따르게 해서, 결과적으로 무리 전체가 자연스럽게 움직이는 것처럼 보이게 만드는 기법 (Boids 알고리즘 계열).')}을 조합해서 물고기 무리를 구현했습니다 — 리더/팔로워 역할, "
             "그룹 스폰, 구역 제약, 분리·응집·장애물 회피를 데이터(FishData)로 관리해서 종류별로 재사용 "
             "가능하게 만들었습니다.", None),
            ("사냥 모드는 비트 시스템과 연동해서, 박자에 맞춰 사냥하는 재미를 추가했습니다.", None),
            ("보스 씬 빌더, 구역(영역) 편집기, UI 스타일 프리셋 같은 에디터 툴을 만들어서, 같은 설정을 "
             "매번 손으로 반복하지 않고 알려진 설정값에서 다시 빌드할 수 있게 했습니다.", None),
            ("FMOD 콜백은 Unity 메인 스레드가 아닌 오디오 스레드에서 호출될 수 있어서, 씬/게임플레이 API를 "
             "직접 건드리면 안전하지 않습니다. 콜백에서는 데이터만 저장해두고, Update에서 가장 최신 값만 "
             "읽어서 처리하도록 분리했습니다.",
             ("FmodBeatDriver — 오디오 스레드에서 메인 스레드로 안전하게 데이터 전달", """// Audio thread: publish data only
_latestBeat = new BeatSnapshot(beat, bar, timelineMs);
Interlocked.Increment(ref _latestBeatSeq);

// Unity main thread
int seq = Volatile.Read(ref _latestBeatSeq);
if (seq == _handledBeatSeq) return;
_handledBeatSeq = seq;
BeatSystem.Instance?.OnFmodBeat(_latestBeat);""")),
        ],
        likely_q=[
            ("물고기 무리를 왜 경로 지정이 아니라 스티어링 방식으로 구현했나요?",
             "물고기마다 경로를 일일이 지정하면 작업량이 비현실적이고 움직임도 기계적으로 보입니다. "
             "로컬 스티어링은 각 개체가 주변 이웃만 보고 단순한 규칙을 따르는데도 전체적으로는 자연스러운 "
             "무리 움직임이 나와서, 사냥 가능한 생동감 있는 물고기를 적은 코드로 구현할 수 있었습니다.",
             None),
            ("FMOD 콜백 처리에서 왜 바로 게임플레이 코드를 호출하면 안 되나요?",
             "FMOD의 오디오 콜백은 Unity 메인 스레드가 아니라 별도 오디오 스레드에서 호출될 수 있는데, "
             "Unity의 씬/게임오브젝트 API는 메인 스레드에서만 안전합니다. 그래서 콜백에서는 가벼운 "
             "스냅샷 데이터만 저장하고, 실제 게임플레이 반응은 메인 스레드의 Update에서 그 데이터를 읽어 "
             "처리하도록 분리했습니다.",
             ("FmodBeatDriver — 오디오 스레드에서 메인 스레드로 안전하게 데이터 전달", """// Audio thread: publish data only
_latestBeat = new BeatSnapshot(beat, bar, timelineMs);
Interlocked.Increment(ref _latestBeatSeq);

// Unity main thread
int seq = Volatile.Read(ref _latestBeatSeq);
if (seq == _handledBeatSeq) return;
_handledBeatSeq = seq;
BeatSystem.Instance?.OnFmodBeat(_latestBeat);""")),
        ],
        english_lines=[
            "“I composed local steering behaviors — leader/follower roles, group spawning, zone "
            "constraints, separation, cohesion, and avoidance — around shared FishData, so schools "
            "feel alive without authored paths.”",
            "“FMOD callbacks can arrive off Unity's main thread, so I only capture callback data "
            "there and consume the newest immutable snapshot during Update, gated by an "
            "incrementing sequence number.”",
            "“I also built editor tools — scene builders, zone editors, UI style presets — so "
            "repeated setup could be rebuilt from known settings instead of manual, driftable scene "
            "edits. I was the repository's lead contributor at 417 commits.”",
        ],
    ))

    story.extend(glossary_section(s))
    doc.build(story)
    print(f"Wrote {out_path}")


def build_manzo():
    reset_footnotes()
    s = styles()
    out_path, doc, story = new_doc(s, "InterviewPrep_Manzo.pdf", "MANZO — Interview Prep", "MANZO")

    story.extend(bullet_block(
        s, 1,
        "Built a custom C++/OpenGL renderer with layer-sorted draw queues and a framebuffer-based "
        "post-processing pipeline for bloom, underwater distortion, god rays, ripples, and "
        "transitions.",
        what="게임 엔진을 Unity 같은 기성 엔진이 아니라 C++과 OpenGL로 직접 만들었고, 그 안의 렌더러도 "
             "직접 설계했다는 뜻입니다. 그림을 그리는 순서(레이어)와 화면 전체 효과(포스트프로세싱) "
             "파이프라인이 핵심입니다.",
        why="배경, 월드, UI, 화면 효과는 각각 그려지는 순서와 렌더 타겟(그림을 그릴 대상 버퍼)이 달라야 "
            "해서, 이를 명시적으로 분리하는 구조가 필요했습니다.",
        how=[
            (f"{fn('레이어 기반 draw queue', '그리기 명령(draw call)을 즉시 실행하지 않고, 어떤 레이어(배경/월드/UI 등)에 속하는지에 따라 분류해서 큐에 쌓아뒀다가, 프레임이 끝날 때 레이어 순서대로 한꺼번에 실행하는 방식. 그리는 순서(페인터스 알고리즘)를 코드 작성 순서가 아니라 레이어 값 하나로 제어할 수 있게 해준다.')}: `all_draw_calls`는 "
             "`vector<vector<unique_ptr<BaseDrawCall>>>` 구조로, 바깥쪽 인덱스가 `DrawLayer` 열거형"
             "(Background → DrawFirst → Draw → DrawPlayer → DrawPlayerTop → DrawDialog → DrawUI → "
             "DrawLast)입니다. `AddDrawCall`은 draw call의 레이어 번호만큼 벡터를 늘린 뒤 그 레이어의 "
             "버킷에 넣기만 하고, 실제로 그리는 건 `RenderAll()`이 레이어 순서대로 순회하면서 "
             "`dynamic_cast`로 실제 타입(스프라이트 사각형/선/원)을 판별해 알맞은 Draw 함수를 호출합니다.",
             ("Render.h / Render.cpp 일부 — 레이어별 큐에 쌓고, 레이어 순서대로 비우기", """// Render.h
enum class DrawLayer {
    DrawBackground = 0, DrawFirst, Draw, DrawPlayer,
    DrawPlayerTop, DrawDialog, DrawUI, DrawLast
};
std::vector<std::vector<std::unique_ptr<BaseDrawCall>>> all_draw_calls;

// Render.cpp
void Render::AddDrawCall(std::unique_ptr<BaseDrawCall> drawCall) {
    int layer = static_cast<int>(drawCall->sorting_layer);
    if (layer >= all_draw_calls.size())
        all_draw_calls.resize(layer + 1);
    all_draw_calls[layer].push_back(std::move(drawCall));
}
// RenderAll(): for each layer, for each call -> dynamic_cast to
// DrawCall / LineDrawCall / LineDrawCallPro / CircleDrawCall, call the matching Draw*()""")),
            (f"{fn('DrawCall 다형성 (polymorphism)', '하나의 베이스 타입(BaseDrawCall)을 상속받는 여러 구체 타입(일반 스프라이트, 선, 원)을 같은 레이어 큐에 섞어 넣고, 실제로 그릴 때 타입을 구분해서 처리하는 객체지향 설계. 렌더러 입장에서는 레이어 순서대로 그린다는 로직 하나만 알면 되고, 구체적으로 뭘 그리는지는 각 타입이 책임진다.')} 구조: `BaseDrawCall`을 상속한 `DrawCall`(스프라이트 또는 "
             "일반 텍스처를 `std::variant<Sprite*, GLTexture*>`로 보관), `LineDrawCall`/`LineDrawCallPro`"
             "(충돌 디버그 선, 두께·알파 포함), `CircleDrawCall`(원형 UI)까지 한 큐에 섞어 넣을 수 있게 "
             "설계했습니다. 예를 들어 쿨타임 같은 원형 진행 UI(`DrawCircleProgress`)도 이 선 그리기 "
             "파이프라인을 재사용해서, 호를 여러 개의 짧은 선분으로 쪼개 그리는 방식으로 구현했습니다.",
             None),
            ("배경은 `AddBackgroundDrawCall`/`DrawBackground`로 별도 리스트에 모아, 레이어 큐를 순회하기 "
             "전에 먼저 그립니다 — 배경이 항상 레이어 큐의 어떤 항목보다도 뒤(가장 아래)에 깔리는 게 "
             "보장되고, 레이어 정렬 로직 자체에 배경을 위한 특수 케이스를 넣을 필요가 없어집니다.", None),
            (f"{fn('핑퐁 프레임버퍼 (Ping-pong Framebuffer)', '포스트프로세싱 효과를 여러 단계 체인으로 연결할 때, 프레임버퍼 2개를 번갈아 쓰는 기법. 한쪽에 그린 결과를 다음 패스가 읽어서 다른 쪽에 그리고, 또 그 결과를 다음 패스가 읽는 식으로 핑퐁(탁구공)처럼 주고받는다. 프레임버퍼를 N개 새로 만들 필요 없이 2개만으로 임의 개수의 패스를 체인으로 연결할 수 있다.')}: `postProcessFramebuffer[2]` 두 개를 번갈아(`horizontal = !horizontal`) "
             "쓰면서, 한 패스가 그린 결과를 다음 패스가 입력 텍스처로 읽어 체인을 만듭니다. 게임 상태"
             "(Title/Mode1/Mode2)에 따라 몇 개의 패스를, 어떤 셰이더로 돌릴지(수중 왜곡→블룸→갓레이, "
             "또는 타이틀 그라디언트→리플, 또는 블룸→웨이브 전환)를 switch문으로 고르고, 마지막엔 기본 "
             "프레임버퍼(화면)에 패스스루 셰이더로 그려 넘깁니다.",
             ("Render.cpp 일부 — ApplyPostProcessing() 핑퐁 체인", """bool horizontal = true;
for (int i = 0; i < num_passes; i++) {
    postProcessFramebuffer[horizontal].Bind();
    glClear(GL_COLOR_BUFFER_BIT);

    GLShader* shader = /* switch(i): pick bloom / distortion / god ray / ... */;
    shader->Use();

    glActiveTexture(GL_TEXTURE0);
    // read the OTHER buffer's result as this pass's input
    glBindTexture(GL_TEXTURE_2D,
        postProcessFramebuffer[!horizontal].GetColorAttachment());

    /* shader->SendUniform(...) per-effect params */
    RenderQuad();   // fullscreen quad
    shader->Use(false);
    horizontal = !horizontal;
}
// final pass-through blit to the default framebuffer (the screen)""")),
            ("충돌 디버그 선은 `draw_collision_calls`라는 별도 리스트에 모아뒀다가, "
             "`ShowCollision` 게임 상태 컴포넌트가 켜져 있을 때만 메인 패스 이후에 추가로 그려서, 평소 "
             "플레이에는 전혀 영향이 없고 디버그 모드에서만 비용이 발생하게 했습니다.", None),
        ],
        likely_q=[
            ("레이어 기반 draw queue와 프레임버퍼 체인을 쓴 이유는?",
             "월드, UI, 화면 효과가 각각 다른 순서/렌더 타겟을 요구했는데, 이걸 하나의 그리기 루프에 "
             "뒤섞으면 효과가 서로 침범하거나 순서가 꼬이기 쉬웠습니다. 레이어별 큐와 체인 형태의 "
             "프레임버퍼 파이프라인으로 명시적으로 분리하니, 효과를 독립적으로 켜고 끄면서도 그리는 "
             "순서는 항상 보장됐습니다.", None),
            ("포스트프로세싱 효과를 체인으로 연결할 때 프레임버퍼를 왜 2개만 쓰나요? 더 필요하지 않나요?",
             "체인에 들어가는 패스 개수(예: 수중 왜곡→블룸→갓레이, 3단계)는 게임 상태에 따라 다르지만, "
             "핑퐁 방식은 '방금 그린 결과를 다음 패스가 읽고, 그 결과를 또 다음 패스가 읽는' 구조라 "
             "프레임버퍼 2개만 번갈아 쓰면 몇 단계든 체인을 만들 수 있습니다. 패스 수만큼 프레임버퍼를 "
             "새로 만들 필요가 없어서 메모리도 아낄 수 있습니다.",
             ("Render.cpp 일부 — ApplyPostProcessing() 핑퐁 체인", """bool horizontal = true;
for (int i = 0; i < num_passes; i++) {
    postProcessFramebuffer[horizontal].Bind();
    glClear(GL_COLOR_BUFFER_BIT);

    GLShader* shader = /* switch(i): pick bloom / distortion / god ray / ... */;
    shader->Use();

    glActiveTexture(GL_TEXTURE0);
    glBindTexture(GL_TEXTURE_2D,
        postProcessFramebuffer[!horizontal].GetColorAttachment());

    RenderQuad();
    shader->Use(false);
    horizontal = !horizontal;
}""")),
            ("스프라이트, 선, 원을 어떻게 하나의 렌더러에서 같이 처리하나요?",
             "공통 베이스 타입(BaseDrawCall)을 두고, 구체 타입(DrawCall/LineDrawCall/LineDrawCallPro/"
             "CircleDrawCall)이 각자 자기 그리기 방식을 책임지는 다형성 구조로 설계했습니다. 레이어 큐는 "
             "타입을 몰라도 되고, RenderAll()에서 dynamic_cast로 실제 타입을 판별해 맞는 Draw 함수를 "
             "호출합니다 — 그래서 쿨타임 UI 같은 원형 진행률 표시도 선 그리기 파이프라인을 그대로 재사용해서 "
             "만들 수 있었습니다.", None),
        ],
        english_lines=[
            "“I built the game's custom C++/OpenGL renderer myself. Draw calls are queued into a "
            "vector of per-layer buckets (background, draw, player, dialog, UI...), and RenderAll "
            "drains them in layer order, dynamic_cast-dispatching each one to its concrete draw "
            "function — sprites, debug lines, or circle UI all share the same queue.”",
            "“Post-processing is a ping-pong framebuffer chain — two framebuffers alternate, each "
            "pass reading the other's result as input, so any number of effects (bloom, underwater "
            "distortion, god rays, ripples, transitions) can chain through just two buffers, picked "
            "per game-state with a switch.”",
            "“Background draws run in their own pass before the layer queue, and debug collision "
            "lines are collected separately so they only cost anything when debug mode is on.”",
        ],
    ))

    story.extend(bullet_block(
        s, 2,
        "Implemented reusable particle motion types and integrated shader- and renderer-driven "
        "visual effects into gameplay scenes.",
        what="파티클이 움직이는 방식(모션 타입)을 재사용 가능한 형태로 만들어서, 여러 이펙트가 같은 "
             "파이프라인을 공유하면서도 서로 다른 느낌을 낼 수 있게 했다는 뜻입니다.",
        why="공격 이펙트와 분위기용 이펙트(ambience)를 매번 다른 시스템으로 따로 만들면 유지보수가 "
            "어려워서, 공유 가능한 수명(lifetime) 관리 위에 모션 종류만 바꿔 끼우는 구조가 필요했습니다.",
        how=[],
        likely_q=[],
        english_lines=[
            "“I built reusable particle motion types sharing one lifetime pipeline, so attacks and "
            "ambient effects could both use it with just different motion variants, and integrated "
            "shader/renderer-driven VFX directly into gameplay scenes.”",
        ],
    ))

    story.extend(bullet_block(
        s, 3,
        "Profiled severe frame drops, traced the issue to redundant per-frame collision checks, "
        "and removed the repeated work to stabilize performance. Largest repository contributor: "
        "366 commits.",
        what="보스전에서 프레임이 심하게 떨어지는 문제를 직접 원인 분석해서, 매 프레임 반복되던 불필요한 "
             "충돌 검사를 찾아내고 제거해서 해결했다는 뜻입니다.",
        why="공격과 오브젝트가 많아질수록 느려지는 게 '기능이 많아서 당연히 느리다'가 아니라 구체적인 "
            "버그일 수 있다고 의심하고, 추측으로 기능을 줄이기 전에 먼저 원인을 찾는 게 맞다고 판단했습니다.",
        how=[
            (f"무작정 비주얼이나 게임플레이 범위를 줄이기 전에, 먼저 반복되는 충돌 처리 경로를 "
             f"감사(audit)했습니다. 중복된 브루트포스 방식의 충돌 검사를 찾아내서, 같은 작업이 여러 번 "
             "반복되고 있던 부분을 제거했습니다.", None),
            (f"이동 충돌 자체는 {fn('연속 충돌 감지 (CCD, Continuous Collision Detection)', '한 프레임 동안 물체가 너무 빨리 움직이면, 이전 프레임 위치와 이번 프레임 위치 사이의 얇은 벽을 그냥 통과(터널링)해버릴 수 있다. CCD는 이동 경로 전체를 검사해서, 충돌이 실제로 처음 발생하는 시점(time of impact)을 찾아 그 지점에서 멈추게 하는 기법.')} 방식으로, 이진 탐색(binary search)으로 실제 충돌이 "
             "시작되는 시점(time of impact)을 찾아서 빠른 대시 이동이 얇은 벽을 그냥 통과해버리는 "
             "터널링 문제를 막았습니다.",
             ("Collision.cpp 일부 — 이진 탐색으로 충돌 시점(TOI) 찾기", """float begin = 0.0f, end = 1.0f;
while (end - begin > 0.001f) {
  const float mid = (begin + end) * 0.5f;
  Rect probe = start_rect;
  probe.position += velocity * dt * mid;
  if (probe.IsColliding(other_rect)) end = mid;
  else begin = mid;
}
toi = end;""")),
        ],
        likely_q=[
            ("정확히 몇 퍼센트 성능이 개선됐나요?",
             "정확한 프로파일러 수치를 따로 저장해두지 않아서 근거 없는 퍼센트를 말씀드리진 않겠습니다. "
             "다만 체감상 보스전이 눈에 띄게 안정됐고, 원인은 공격·오브젝트가 늘어날 때마다 반복되던 "
             "중복 충돌 검사였다는 건 명확히 확인했습니다. (실제 면접에서도 추측 수치보다 '원인을 어떻게 "
             "좁혀갔는지' 과정을 설명하는 게 더 신뢰감 있습니다.)", None),
            ("빠른 이동 중 충돌이 뚫리는 문제(터널링)는 어떻게 해결했나요?",
             "이번 프레임과 다음 프레임 위치만 확인하는 대신, 그 사이 이동 경로를 이진 탐색으로 좁혀가면서 "
             "실제로 충돌이 시작되는 시점(Time of Impact)을 찾았습니다. 찾은 시점에서 이동을 멈추게 해서, "
             "리듬 대시처럼 빠른 이동이 얇은 벽을 그냥 통과하는 문제를 막았습니다.",
             ("Collision.cpp 일부 — 이진 탐색으로 충돌 시점(TOI) 찾기", """float begin = 0.0f, end = 1.0f;
while (end - begin > 0.001f) {
  const float mid = (begin + end) * 0.5f;
  Rect probe = start_rect;
  probe.position += velocity * dt * mid;
  if (probe.IsColliding(other_rect)) end = mid;
  else begin = mid;
}
toi = end;""")),
        ],
        english_lines=[
            "“Before cutting scope, I audited the repeated collision paths first and found "
            "redundant brute-force checks running every frame — removing that duplicate work "
            "stabilized the boss encounter.”",
            "“Separately, I solved tunneling on fast dashes with a binary-searched time-of-impact "
            "solver instead of just testing current/next-frame positions, so movement stops at the "
            "actual first contact point.”",
        ],
    ))

    story.extend(glossary_section(s))
    doc.build(story)
    print(f"Wrote {out_path}")


def build_thinkthink():
    reset_footnotes()
    s = styles()
    out_path, doc, story = new_doc(
        s, "InterviewPrep_ThinkThink.pdf",
        "ThinkThink! — UIStyle 셰이더 시스템 Interview Prep", "ThinkThink!",
    )

    story.extend(bullet_block(
        s, 1,
        "UIStyle.shader / UIStyle.cs — 하나의 셰이더와 컴포넌트로 Inspector에서 모서리, 그림자, "
        "그라디언트, 노이즈 등 9개 스타일 그룹을 조절할 수 있는 재사용 가능한 Unity URP UI 셰이더 "
        "시스템. 스트리트 타이퍼로 이식되어 확장된, 원래 시작점이 된 시스템입니다.",
        source_label="프로젝트 설명 (Street Typer 이력서 문장의 출처)",
        what="버튼, 게이지, 카드 같은 UI 요소를 일일이 그림으로 그리는 대신, 셰이더 하나"
             "(UIStyle.shader)와 그걸 제어하는 컴포넌트 하나(UIStyle.cs)만으로 모양·그림자·그라디언트·"
             "노이즈 같은 9가지 스타일 그룹을 Inspector 값 조절만으로 완성할 수 있게 만든 시스템입니다. "
             f"핵심은 {fn('SDF (Signed Distance Field)', '각 픽셀에서 도형 경계까지의 거리를 부호(안쪽/바깥쪽)로 저장해 도형을 표현하는 방식. 해상도에 독립적으로 매끄러운 둥근 모서리·캡슐 형태를 그릴 수 있어 UI 셰이더에서 널리 쓰인다.')} 기반으로 사각형과 캡슐(알약) 모양의 경계를 "
             "수학적으로 계산해서, 해상도가 바뀌어도 모서리가 항상 매끄럽게 유지된다는 점입니다.",
        why="프로젝트마다 버튼·게이지·카드를 새로 그리고 새 셰이더를 짜면 아트 리소스와 셰이더 작업 "
            "시간이 매번 반복 소모됩니다. 하나의 범용 스타일링 셰이더를 만들어두면, 새 프로젝트에서는 "
            "이미지 없이 Inspector 파라미터만 바꿔서 원하는 모양을 바로 만들 수 있고, 완성한 스타일은 "
            "프리셋 에셋으로 저장해 재사용할 수 있습니다. 실제로 이 시스템은 ThinkThink에서 만든 뒤 "
            "스트리트 타이퍼로 그대로 이식되어, 카드 전투 UI에 필요한 다이아몬드 모양·방사형 그래디언트· "
            "윤곽선만 추가로 확장했습니다.",
        how=[
            (f"{fn('sdfRoundedRect', '2D 평면 위의 점 p가 둥근 사각형(라운디드 렉트) 경계로부터 얼마나 떨어져 있는지를 계산하는 함수. q = abs(p) - size + radius로 사각형 안쪽 기준점을 구한 뒤, 바깥쪽 성분은 length(max(q,0))로, 안쪽 오목한 부분은 min(max(q.x,q.y),0)으로 더해서 하나의 거리값을 만든다.')} 함수로 모서리를 둥글게 그립니다 — "
             "`q = abs(p) - size + radius` 로 사각형 중심 기준 거리를 구한 뒤, 바깥쪽 거리와 안쪽 거리를 "
             "조합해 부호 있는 거리값 하나를 반환합니다. 이 값이 0보다 작으면 도형 안쪽, 크면 바깥쪽이라서 "
             "`smoothstep`으로 경계를 부드럽게 앤티앨리어싱할 수 있습니다.",
             ("UIStyle.shader 일부 — 라운디드 렉트 SDF", """// Rounded rectangle SDF
float sdfRoundedRect(float2 p, float2 size, float radius)
{
    float2 q = abs(p) - size + radius;
    return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - radius;
}""")),
            (f"{fn('캡슐(Capsule/Pill) SDF', '좌우 또는 위아래 끝이 완전히 반원으로 둥근 알약 모양의 경계를 계산하는 SDF. 중앙의 직사각형 구간은 거리를 0으로 클리핑하고, 끝부분만 원 중심까지의 거리를 계산해서 자연스럽게 이어 붙인다.')} 두 종류를 만들고, 가로/세로 비율을 보고 자동으로 "
             "고르는 `sdfCapsule`로 감쌌습니다 — if/else 분기 없이 하나의 함수만 호출해도 긴 쪽 방향에 "
             "맞춰 알약 모양이 저절로 결정되어, UIStyle.cs 쪽에서는 가로/세로를 신경 쓸 필요가 없습니다.",
             ("UIStyle.shader 일부 — 캡슐 SDF + 자동 방향 선택", """// Capsule/Pill SDF (Horizontal) — radius = height/2
float sdfCapsuleHorizontal(float2 p, float2 size)
{
    float radius = size.y * 0.5;
    float2 q = abs(p);
    float2 capsuleCenter = float2(max(q.x - (size.x - radius), 0.0), q.y);
    return length(capsuleCenter) - radius;
}

// Smart Capsule SDF — 가로/세로 비율에 따라 자동 선택
float sdfCapsule(float2 p, float2 size)
{
    if (size.x > size.y) return sdfCapsuleHorizontal(p, size);
    else                 return sdfCapsuleVertical(p, size);
}""")),
            ("Drop Shadow, Inner Shadow, Gradient(기본색/그라디언트/라이트/Hue-shift), Edge Highlight, "
             "Material Type, Noise, Bottom Edge Line까지 총 9개 스타일 그룹을 같은 셰이더의 Properties "
             "블록 하나에 모아서, 각 그룹을 독립적으로 켜고 끌 수 있게 설계했습니다. 그림자나 하이라이트는 "
             "같은 SDF 거리값을 오프셋만 다르게 재계산해서 구하므로, 모양 함수(SDF)를 한 번만 정의해두면 "
             "그림자·본체·이너섀도우가 전부 같은 모양 논리를 공유합니다.", None),
            (f"{fn('OnValidate 라이브 프리뷰', 'Unity 에디터가 Inspector 값이 바뀔 때마다 자동으로 호출하는 콜백. Play 모드로 들어가지 않아도 인스펙터에서 슬라이더를 움직이는 즉시 결과를 씬 뷰에서 볼 수 있게 해준다.')}: UIStyle.cs의 `OnValidate()`가 Inspector 값이 바뀔 때마다 "
             "`ApplyStyle()`을 호출해 머티리얼 프로퍼티를 다시 셰이더로 보내고, 에디터에서는 "
             "`EditorUtility.SetDirty`와 `SceneView.RepaintAll()`까지 같이 호출해서 Play 모드 없이도 "
             "씬 뷰가 바로 갱신되게 했습니다. 완성한 조합은 `ApplyPreset(UIStylePreset)`으로 저장해서 "
             "다른 UI 오브젝트에도 한 번에 적용할 수 있습니다.",
             ("UIStyle.cs 일부 — OnValidate 라이브 프리뷰 + 프리셋 적용", """private void OnValidate()
{
    if (!this || !gameObject) return;
    #if UNITY_EDITOR
    if (!Application.isPlaying)
    {
        if (_image != null)
        {
            ApplyStyle();
            UnityEditor.EditorUtility.SetDirty(this);
            UnityEditor.EditorUtility.SetDirty(_image);
            if (UnityEditor.SceneView.lastActiveSceneView != null)
                UnityEditor.SceneView.lastActiveSceneView.Repaint();
            UnityEditor.SceneView.RepaintAll();
        }
    }
    else
    #endif
    { if (_image) ApplyStyle(); }
}

public void ApplyPreset(UIStylePreset presetToApply)
{
    if (!presetToApply) return;
    presetToApply.ApplyTo(this);
    ApplyStyle();
}""")),
        ],
        likely_q=[
            ("왜 셰이더로 UI 모양을 그렸나요? 그냥 이미지(스프라이트)를 쓰면 안 되나요?",
             "이미지는 해상도가 바뀌거나 크기를 늘리면 모서리가 깨지고, 색이나 모양을 바꾸려면 다시 "
             "그려야 합니다. SDF 기반 셰이더는 수학적으로 거리를 계산하기 때문에 어떤 크기에서도 "
             "모서리가 매끄럽고, Inspector 값만 바꾸면 색·모양·그림자를 실시간으로 바꿀 수 있어서 "
             "아트 리소스 제작 시간을 크게 줄일 수 있었습니다.", None),
            ("이 시스템을 어떻게 다른 프로젝트(Street Typer)로 그대로 옮길 수 있었나요?",
             "UIStyle.shader와 UIStyle.cs 핵심 로직 자체는 프로젝트에 종속적인 부분이 없이 범용으로 "
             "설계되어 있어서, .unitypackage로 묶어서 그대로 가져가기만 하면 됐습니다. Street Typer의 "
             "카드 전투 UI에 필요했던 것(모서리 개별 둥글기, 다이아몬드 모양, 방사형 그래디언트, 전용 "
             "윤곽선)만 셰이더에 새 분기로 추가해서 확장했고, 기존 9개 스타일 그룹과 OnValidate 라이브 "
             "프리뷰, 프리셋 구조는 그대로 재사용했습니다.", None),
        ],
        english_lines=[
            "“I built a reusable Unity URP UI shader system — one shader and one component expose "
            "nine style groups (rounding, drop/inner shadow, gradients, edge highlight, material "
            "type, noise, bottom edge line) as Inspector parameters, so new UI can be styled without "
            "drawing new art.”",
            "“The shapes are driven by signed-distance functions — a rounded-rect SDF and a capsule "
            "SDF that auto-picks horizontal or vertical based on aspect ratio — so edges stay smooth "
            "at any resolution.”",
            "“OnValidate re-applies the style and forces a scene-view repaint whenever an Inspector "
            "value changes, so you get a live preview without entering Play mode, and finished looks "
            "save to a preset asset for reuse.”",
            "“This system started in ThinkThink! and I carried it over to Street Typer as-is, only "
            "adding what the new project needed — per-corner radii, a diamond shape, a radial "
            "gradient, and a dedicated outline.”",
        ],
    ))

    story.extend(glossary_section(s))
    doc.build(story)
    print(f"Wrote {out_path}")


if __name__ == "__main__":
    build_poseidon_skate()
    build_carboom()
    build_street_typer()
    build_too_hot()
    build_new_manzo()
    build_thinkthink()
    build_manzo()
