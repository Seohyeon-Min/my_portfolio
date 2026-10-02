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
    header_row = Table(
        [[num_chip, Paragraph(f'{source_label}: <font name="Helvetica-Oblique">"{resume_line}"</font>', s["resume_line"])]],
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
            flow.append(code_box(s, snippet[0], snippet[1]))
            flow.append(Spacer(1, 3))
    if likely_q:
        flow.append(Paragraph("예상 질문 &amp; 답변 포인트", s["label"]))
        for item in likely_q:
            q, a, snippet = item if len(item) == 3 else (item[0], item[1], None)
            flow.append(Paragraph(f"Q. {q}", s["qa_q"]))
            flow.append(Paragraph(a, s["qa_a"]))
            if snippet:
                flow.append(Spacer(1, 2))
                flow.append(code_box(s, snippet[0], snippet[1]))
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
            "배치 로직을 새로 설계했습니다."
        ),
        how=[
            (f"{fn('뷰 공간(View-space) 구도', '3D 월드 좌표가 아니라, 특정 카메라/관측 지점에서 봤을 때의 각도·겉보기 크기를 기준으로 계산하는 방식. 이 프로젝트에서는 아레나라는 고정 시점에서 행성이 실제로 화면에 얼마나 크게/가깝게 보이는지를 기준으로 배치 간격과 밀도를 계산한다.')}: 실제 3D 거리 대신, 아레나에서 바라본 "
             "각도와 겉보기 크기를 기준으로 행성 간 최소 간격과 밀도를 계산해서, 멀리 있는 큰 행성과 "
             "가까운 작은 행성이 화면에서 비슷한 크기로 겹쳐 보이는 문제를 해결했습니다.", None),
            ("처음엔 크기를 'ScaleDistribution' 커브 하나로 뽑았는데, 커브는 '이 거리대에 이 정도 크기의 "
             "행성이 몇 개' 같은 조건을 표현할 수 없고, Blueprint DataAsset에서 거리 구간을 비율로 쪼개는 "
             "방식도 한 항목을 수정하면 나머지가 다시 100%로 정규화되지 않아서 관리가 어려웠습니다. 그래서 "
             f"{fn('ScaleZones 배열', '거리/크기 구간마다 개수·크기 범위·거리 범위를 각각 독립적으로 갖는 배열. 커브 하나로 전체를 표현하는 대신, 구간(zone)마다 아티스트가 숫자를 직접 넣게 해서 표현력과 편집 편의성을 둘 다 얻었다.')}로 바꿔서, 구간마다 "
             "개수·크기 범위·거리 범위를 독립적으로 넣고 구간끼리 겹치는 것도 허용했습니다.", None),
            ("군집(cluster) 로직도 처음엔 작은 행성이 이미 배치된 작은 행성 근처에만 계속 붙는 "
             "'부익부' 현상이 있었고, 고친 뒤에도 같은 크기의 멤버들이 균등하게 흩어지면 알 무더기처럼 "
             "부자연스러워 보였습니다. 그래서 군집을 미리 하나의 '원판'으로 묶어 배치하고, 그 안에서 대장-졸개 "
             "크기 계층을 강제했습니다.", None),
            (f"최근에는 {fn('락(Lock) 기능', '아티스트가 마음에 드는 행성 배치 결과 일부를 고정해두는 기능. 락 걸린 행성은 Clear에서 지워지지 않고 다음 Generate에 이미 배치된 것으로 다시 들어간다.')}을 추가했습니다 — 아티스트가 "
             "마음에 드는 행성을 락으로 고정하면, 재생성할 때 그 행성은 그대로 두고 나머지만 다시 배치합니다.",
             ("space_background.py 일부 — 체크박스 또는 태그로 락 상태 판별", """def is_locked(actor):
    # BP planets use the Locked checkbox; old StaticMeshActor planets use a tag.
    try:
        if actor.get_editor_property(LOCK_PROPERTY):
            return True
    except Exception:
        pass
    return LOCK_TAG in actor_tags(actor)""")),
        ],
        likely_q=[
            ("왜 처음에 커브 대신 배열(ScaleZones)로 바꿨나요?",
             "커브는 '이 거리대에 이 크기의 행성이 몇 개'라는 조건을 직접 표현할 수 없고, 구간을 비율로 "
             "나누는 방식은 Blueprint DataAsset에서 한 항목만 수정해도 나머지가 자동으로 재정규화되지 않아서 "
             "실제로 아티스트가 쓰기 어려웠습니다. 그래서 구간마다 독립된 숫자를 넣는 배열 구조로 바꿨습니다.",
             None),
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
            "“The first version used a single curve to sample planet sizes, but that couldn't "
            "express 'this many planets of this size around this distance,' so I replaced it with "
            "an explicit array of zones, each with its own count, scale range, and distance range.”",
            "“I also added a Lock feature — locked planets survive Clear and get fed back into the "
            "next Generate as already-placed, so an artist can keep what they like and re-roll only "
            "the rest.”",
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
            (f"{fn('DrawCall 다형성 (polymorphism)', '하나의 베이스 타입(BaseDrawCall)을 상속받는 여러 구체 타입(일반 스프라이트, 선, 원)을 같은 레이어 큐에 섞어 넣고, 실제로 그릴 때 타입을 구분해서 처리하는 객체지향 설계. 렌더러 입장에서는 \"레이어 순서대로 그린다\"는 로직 하나만 알면 되고, 구체적으로 뭘 그리는지는 각 타입이 책임진다.')} 구조: `BaseDrawCall`을 상속한 `DrawCall`(스프라이트 또는 "
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


if __name__ == "__main__":
    build_poseidon_skate()
    build_carboom()
    build_street_typer()
    build_too_hot()
    build_new_manzo()
    build_manzo()
