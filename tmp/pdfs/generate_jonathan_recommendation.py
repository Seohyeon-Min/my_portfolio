from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle


ROOT = Path(__file__).resolve().parents[2]
OUTPUT = ROOT / "output" / "pdf" / "Jonathan_Holmes_Recommendation_Seohyeon_Min.pdf"
OUTPUT.parent.mkdir(parents=True, exist_ok=True)

NAVY = colors.HexColor("#172033")
BLUE = colors.HexColor("#3867D6")
MUTED = colors.HexColor("#5C677D")
LINE = colors.HexColor("#D8DFEA")
PALE = colors.HexColor("#F6F8FC")

styles = {
    "eyebrow": ParagraphStyle(
        "eyebrow", fontName="Helvetica-Bold", fontSize=8.5, leading=11,
        textColor=BLUE, spaceAfter=8, tracking=0.8,
    ),
    "title": ParagraphStyle(
        "title", fontName="Helvetica-Bold", fontSize=22, leading=26,
        textColor=NAVY, spaceAfter=5,
    ),
    "subtitle": ParagraphStyle(
        "subtitle", fontName="Helvetica", fontSize=9, leading=13,
        textColor=MUTED,
    ),
    "name": ParagraphStyle(
        "name", fontName="Helvetica-Bold", fontSize=12, leading=15,
        textColor=NAVY,
    ),
    "role": ParagraphStyle(
        "role", fontName="Helvetica", fontSize=9, leading=12,
        textColor=MUTED,
    ),
    "body": ParagraphStyle(
        "body", fontName="Helvetica", fontSize=10.2, leading=15.5,
        textColor=NAVY, spaceAfter=12,
    ),
    "footer": ParagraphStyle(
        "footer", fontName="Helvetica", fontSize=7.5, leading=10,
        textColor=MUTED,
    ),
}

doc = SimpleDocTemplate(
    str(OUTPUT), pagesize=letter,
    leftMargin=0.72 * inch, rightMargin=0.72 * inch,
    topMargin=0.6 * inch, bottomMargin=0.55 * inch,
    title="Recommendation for Seohyeon Min by Jonathan Holmes",
    author="Jonathan Holmes",
    subject="Professional recommendation for Seohyeon Min",
)

story = [
    Paragraph("PROFESSIONAL RECOMMENDATION", styles["eyebrow"]),
    Paragraph("Recommendation for Seohyeon Min", styles["title"]),
    Paragraph("Originally published on LinkedIn on August 9, 2026", styles["subtitle"]),
    Spacer(1, 18),
]

author = Table(
    [[
        Paragraph("Jonathan Holmes", styles["name"]),
        Paragraph("Former instructor of Seohyeon Min", styles["role"]),
    ], [
        Paragraph("Game Designer &amp; Software Engineer", styles["role"]),
        Paragraph('<link href="https://www.linkedin.com/in/crait/">LinkedIn profile</link>', styles["role"]),
    ]],
    colWidths=[3.7 * inch, 2.35 * inch],
)
author.setStyle(TableStyle([
    ("BACKGROUND", (0, 0), (-1, -1), PALE),
    ("BOX", (0, 0), (-1, -1), 0.7, LINE),
    ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ("ALIGN", (1, 0), (1, -1), "RIGHT"),
    ("LEFTPADDING", (0, 0), (-1, -1), 12),
    ("RIGHTPADDING", (0, 0), (-1, -1), 12),
    ("TOPPADDING", (0, 0), (-1, 0), 10),
    ("BOTTOMPADDING", (0, 1), (-1, 1), 10),
]))
story.extend([author, Spacer(1, 20)])

paragraphs = [
    "Teaching so many different students, each year, it's hard for any of them to stick out, especially whenever the there are so many that study diligently and work so hard to be the top. Even with such stiff competition, Seohyeon was able to stand out among her peers in our DigiPen program.",
    "Not only did her grades stand out, but her desire to improve and her constant attention to detail meant that each group project she worked on was able to succeed. Observing her work on a small team, I was able to see her not only work hard on her own tasks, but also help mentor others on her team. I remember a one-on-one conversation that I had with her about leadership and being able to mentor others who could seemingly 'bring a team down.' She understood that every student had their own strengths and that taking her project to the next level meant that everyone on her team needed to succeed. I saw her as a leader because she was able to care just as much about her teammates (regardless of their skill level) as she did about her own work.",
    "Outside of the classroom, she constantly strived to get better, staying connected with other students and looking for outside opportunities to improve. Where there weren't opportunities, she made them: Creating, managing, and participating in game jams helped show that she wasn't just interested in these kinds of larger projects just for the sake of her grades, but because she truly cared about making something great.",
    "Even though she hasn't graduated, yet, I think that it's safe to say that any company would be lucky to hire Seohyeon. I firmly believe that she has a bright future ahead.",
]

for text in paragraphs:
    story.append(Paragraph(text, styles["body"]))

story.extend([
    Spacer(1, 6),
    Table([[""]], colWidths=[6.05 * inch], rowHeights=[0.7], style=TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), LINE),
    ])),
    Spacer(1, 9),
    Paragraph(
        "Source: LinkedIn recommendation provided by Jonathan Holmes for Seohyeon Min. "
        "This document reproduces the recommendation text supplied by the applicant.",
        styles["footer"],
    ),
])

doc.build(story)
print(OUTPUT)
