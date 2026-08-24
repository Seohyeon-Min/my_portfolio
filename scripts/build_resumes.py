from pathlib import Path
import sys
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, KeepTogether

ROOT = Path(__file__).resolve().parents[1]
DOCS = ROOT / "docs"

NAVY = colors.HexColor("#10172A")
BLUE = colors.HexColor("#4263EB")
TEAL = colors.HexColor("#0F8B8D")
BURGUNDY = colors.HexColor("#8B2635")
MUTED = colors.HexColor("#536078")
LINE = colors.HexColor("#DDE3F0")
PALE = colors.HexColor("#F5F7FC")


def styles(accent):
    return {
        "name": ParagraphStyle("name", fontName="Helvetica-Bold", fontSize=22, leading=22, textColor=NAVY),
        "role": ParagraphStyle("role", fontName="Helvetica-Bold", fontSize=9, leading=11, textColor=accent, spaceBefore=3),
        "contact": ParagraphStyle("contact", fontName="Helvetica", fontSize=7.5, leading=10, textColor=MUTED, alignment=TA_LEFT),
        "summary": ParagraphStyle("summary", fontName="Helvetica", fontSize=8.1, leading=11, textColor=NAVY, spaceBefore=7, spaceAfter=7),
        "section": ParagraphStyle("section", fontName="Helvetica-Bold", fontSize=8.2, leading=10, textColor=accent, spaceBefore=5, spaceAfter=3),
        "project": ParagraphStyle("project", fontName="Helvetica-Bold", fontSize=9.2, leading=11, textColor=NAVY, spaceBefore=2),
        "meta": ParagraphStyle("meta", fontName="Helvetica-Bold", fontSize=7.1, leading=9, textColor=accent),
        "bullet": ParagraphStyle("bullet", fontName="Helvetica", fontSize=7.55, leading=9.55, textColor=NAVY, leftIndent=9, firstLineIndent=-6, bulletIndent=0, spaceAfter=1.2),
        "small": ParagraphStyle("small", fontName="Helvetica", fontSize=7.25, leading=9.2, textColor=NAVY),
        "skill": ParagraphStyle("skill", fontName="Helvetica", fontSize=7.15, leading=9.2, textColor=NAVY),
    }


def header(s, role):
    left = [Paragraph("MIN SEOHYEON", s["name"]), Paragraph(role, s["role"])]
    right = Paragraph(
        '<link href="mailto:weare1842@gmail.com">weare1842@gmail.com</link><br/>'
        'Temporary U.S. (206) 990-4593 | +82 10-8655-4365<br/>'
        '<link href="https://github.com/Seohyeon-Min">github.com/Seohyeon-Min</link> | '
        '<link href="https://seohyeon-min.github.io/my_portfolio/">seohyeon-min.github.io/my_portfolio</link>', s["contact"])
    t = Table([[left, right]], colWidths=[4.15*inch, 2.45*inch])
    t.setStyle(TableStyle([("VALIGN", (0,0), (-1,-1), "TOP"), ("ALIGN", (1,0), (1,0), "RIGHT"), ("LEFTPADDING",(0,0),(-1,-1),0), ("RIGHTPADDING",(0,0),(-1,-1),0)]))
    return t


def rule(accent):
    t = Table([[""]], colWidths=[6.6*inch], rowHeights=[1.5])
    t.setStyle(TableStyle([("BACKGROUND", (0,0), (-1,-1), accent), ("LEFTPADDING",(0,0),(-1,-1),0)]))
    return t


def section(title, s, accent):
    return [Paragraph(title.upper(), s["section"]), rule(accent)]


def project(title, meta, bullets, url, s):
    label = f'<link href="{url}">{title}</link>' if url else title
    rows = [[Paragraph(label, s["project"]), Paragraph(meta, s["meta"])]]
    tab = Table(rows, colWidths=[4.35*inch, 2.25*inch])
    tab.setStyle(TableStyle([("VALIGN",(0,0),(-1,-1),"BOTTOM"), ("ALIGN",(1,0),(1,0),"RIGHT"), ("LEFTPADDING",(0,0),(-1,-1),0), ("RIGHTPADDING",(0,0),(-1,-1),0)]))
    body = [tab]
    body += [Paragraph("• " + b, s["bullet"]) for b in bullets]
    return KeepTogether(body)


def build(path, role, summary, selected, additional, skill_rows, accent, education=True,
          selected_title="Selected Experience", additional_title="Additional Evidence"):
    s = styles(accent)
    doc = SimpleDocTemplate(str(path), pagesize=letter, rightMargin=.55*inch, leftMargin=.55*inch, topMargin=.42*inch, bottomMargin=.38*inch,
                            title=f"Min Seohyeon - {role}", author="Min Seohyeon")
    story = [header(s, role), Spacer(1, 4), rule(accent), Paragraph(summary, s["summary"])]
    story += section(selected_title, s, accent)
    for p in selected:
        story += [project(*p, s), Spacer(1, 2.2)]
    story += section(additional_title, s, accent)
    for title, text in additional:
        story.append(Paragraph(f"<b>{title}</b> - {text}", s["small"]))
    story += section("Skills", s, accent)
    data = [[Paragraph(f"<b>{k}</b>", s["skill"]), Paragraph(v, s["skill"])] for k,v in skill_rows]
    st = Table(data, colWidths=[1.18*inch, 5.42*inch], hAlign="LEFT")
    st.setStyle(TableStyle([("VALIGN",(0,0),(-1,-1),"TOP"), ("BACKGROUND",(0,0),(0,-1),PALE), ("LEFTPADDING",(0,0),(-1,-1),4), ("RIGHTPADDING",(0,0),(-1,-1),4), ("TOPPADDING",(0,0),(-1,-1),2.5), ("BOTTOMPADDING",(0,0),(-1,-1),2.5), ("LINEBELOW",(0,0),(-1,-2),.35,LINE)]))
    story.append(st)
    if education:
        story += section("Education", s, accent)
        story.append(Paragraph("<b>B.S. Computer Science in Real-Time Interactive Simulation</b> | 2026-Present | Expected Graduation: May 2028<br/>Keimyung University / DigiPen Institute of Technology | GPA 3.958/4.0", s["small"]))
    doc.build(story)


def main(build_ta=True, build_prod=True, build_student=False):
    DOCS.mkdir(exist_ok=True)
    ta_selected = [
        ("MANZO", "C++ / OpenGL / GLSL | 2024-2025", [
            "Implemented BPM timing windows, beat/bar counting, and audio-synchronized player movement and boss patterns in a custom C++ engine.",
            "Built layer-sorted draw queues, framebuffer post-processing for bloom, underwater distortion, god rays, ripples, and transitions, plus particles with linear, curved, radial, spray, random, and player-targeted motion.",
            "Moved scenario/dialogue ownership into engine-level systems to eliminate dangling-pointer failures; traced severe boss slowdown to redundant collision checks and removed repeated work. Largest repository contributor: 366 commits."
        ], "https://github.com/Seohyeon-Min/manzo"),
        ("TOO HOT!", "Unity / ShaderLab / VFX / UI | 2026", [
            "Created and integrated the game's 2D shadow treatment, pattern-specific VFX, UI, animation, hit feedback, and visual hierarchy; tuned width and length controls for readable shadows across characters and combat spaces.",
            "Specified GameplayManager and per-stage ScriptableObject data flow, save-range safeguards, chapter selection, and clean-state debug controls; reviewed and tested teammate-authored gameplay implementations.",
            "Balanced direct art/technical-art execution with a 130+ item P0-P3 backlog, two-programmer coordination, code review, merges, and final visual integration."
        ], "https://github.com/Seohyeon-Min/team17_gamejam"),
        ("STREET TYPER", "Unity URP / UI Technical Art | 10-day build, 2026", [
            "Owned original 2D art, UI composition, particles, outlines, camera shake, hit VFX, and animated feedback for a shipped bilingual typing-combat game.",
            "Specified, evaluated, debugged, and integrated an AI-assisted reusable UI shader workflow for rounded forms, gradients, drop/inner shadows, blur, presets, and inspector iteration; gameplay code was teammate-authored.",
            "Published a playable build on <link href='https://handalhandal.itch.io/streettyper'>itch.io</link> and preparing the game for a Steam release."
        ], "https://github.com/Seohyeon-Min/StreetTyper"),
    ]
    ta_add = [
        ("DOUBLE HIT", "Implemented C++ texture/sprite management, collision, GameObject/GameComponent architecture, and shared engine services."),
        ("BIRD STRIKE", "Implemented audio-timeline beat detection, rhythm-synchronized spawning, dynamic attack subdivision, player/crow movement, and atan2 direction logic; also produced original art and audio."),
        ("NEW MANZO", "Contribute Unity gameplay and technical systems for fish schooling, obstacle avoidance, beat-linked hunting, raycasting, and post-processing; repository lead contributor with 417 commits."),
    ]
    ta_skills = [
        ("Graphics", "OpenGL, GLSL, Unity URP, ShaderLab, framebuffer/post-processing, custom shadows, particles, VFX, UI shaders"),
        ("Programming", "C++, C#, C, Python, JavaScript; gameplay and engine architecture, collision, debugging, memory/lifetime fixes"),
        ("Workflow", "Git branching and merge review, GitHub Projects/Issues, Notion, CMake, Visual Studio, WSL, profiling, technical specification"),
    ]
    if build_ta:
        build(DOCS/"Resume_TA_Graphics.pdf", "TECHNICAL ARTIST | GRAPHICS PROGRAMMER", "Technical artist and graphics programmer who works across code, shaders, VFX, UI, and art integration. I directly build C++/OpenGL engine features and Unity visual systems, diagnose rendering and gameplay failures, and translate visual goals into testable technical requirements without obscuring authorship boundaries.", ta_selected, ta_add, ta_skills, BLUE)

    prod_selected = [
        ("DANGLING GAME JAM", "FOUNDER / PRODUCER / PROJECT LEAD | 2025", [
            "Founded and delivered the university's first interdepartmental game jam: 24 participants, 6 teams, and a 36-hour production window; every team completed and submitted a playable game.",
            "Owned the event from proposal through closeout, including university approvals, an approximately KRW 800,000 budget, promotion, participant communication, on-site operations, final submissions, and visual materials.",
            "Achieved a 4.87/5 participant satisfaction score across 23 post-event responses while coordinating cross-disciplinary participants and keeping all six teams on track to finish."
        ], None),
        ("PLUSH PRODUCTION", "PRODUCT DESIGNER / VENDOR & FULFILLMENT LEAD | INDEPENDENT", [
            "Opened prepaid preorders through Witchform and set production quantities from confirmed paid demand, minimizing upfront capital exposure and unsold inventory risk while generating approximately KRW 10 million in total revenue.",
            "Sourced a manufacturer through Taobao, negotiated schedule and unit pricing, commissioned and reviewed physical samples, communicated revisions, and approved mass production at the intended quality and cost.",
            "Built a direct factory-to-customer workflow across freight forwarding, defect inspection, and domestic delivery; centralized order, production, and shipping Q&A through Peing. The public account reached 235 followers and 1,000+ cumulative reposts."
        ], "https://x.com/mallang707"),
        ("TOO HOT!", "TECHNICAL / CREATIVE PRODUCER | 2026", [
            "Directed two gameplay programmers, defined the project's technical structure and implementation priorities, and coordinated gameplay, art, UI, VFX, audio, and presentation through a 130+ item P0-P3 backlog.",
            "Owned the integration branch and final merges; reviewed every code contribution, identified architectural and gameplay issues, gave actionable feedback, requested revisions, and verified fixes in the build.",
            "Turned design risks into concrete system requirements and player-feedback decisions; secured an offline booth at a Korean game event for an October 2026 exhibition."
        ], "https://github.com/Seohyeon-Min/team17_gamejam"),
    ]
    prod_add = [
        ("JOINT BAND PERFORMANCE", "Co-organized a two-hour live show featuring six acts from DigiPen, BARD, and an independent band; coordinated rehearsals, team communication, setlists, equipment load-in, show order, and post-event logistics."),
        ("NEW MANZO", "Lead long-term scope, ownership, milestones, cross-discipline communication, and delivery planning while contributing hands-on technical support; repository lead contributor with 417 commits."),
        ("STREET TYPER", "Scoped and coordinated a public 10-day team build, published it on itch.io, and support its preparation for Steam release while owning visual direction, UI, VFX, and gameplay readability."),
        ("MANZO", "Bridged design, art, and engineering while directly implementing rhythm, rendering, particles, debugging, Git integration, and final presentation; 366 commits."),
    ]
    prod_skills = [
        ("Production", "Scope/milestone planning, P0-P3 prioritization, ownership, risk identification, acceptance criteria, review, testing, integration"),
        ("Operations", "Event production, vendor sourcing and negotiation, sample review, preorder planning, fulfillment, customer communication"),
        ("Planning Tools", "Notion, GitHub Projects, GitHub Issues, Witchform, Peing; task documentation, status tracking, review and rework loops"),
        ("Technical", "Unity, C++, C#, OpenGL, GLSL, ShaderLab, Git branching and merge review, CMake; graphics/gameplay debugging"),
    ]
    if build_prod:
        build(DOCS/"Resume_Production.pdf", "PRODUCER | PROJECT LEAD", "Producer and project lead who carries games, events, and physical products from planning through delivery. I align multidisciplinary teams and external partners, negotiate resources and constraints, track execution, resolve delivery risks, and build repeatable operations across production, live events, vendors, logistics, and customer communication.", prod_selected, prod_add, prod_skills, TEAL)

    if build_student:
        student_selected = [
            ("DANGLING GAME JAM", "FOUNDER / EVENT PRODUCER | 2025", [
                "Founded and delivered the university's first interdepartmental game jam, bringing together 24 participants across 6 teams for a 36-hour event; every team completed and submitted a playable game.",
                "Managed university approvals, an approximately KRW 800,000 budget, promotion, participant communication, scheduling, on-site operations, final submissions, and event materials from proposal through closeout.",
                "Earned a 4.87/5 satisfaction score from 23 post-event responses by creating a structured environment where cross-disciplinary students could collaborate and finish their work."
            ], None),
            ("JOINT BAND PERFORMANCE", "CO-ORGANIZER | MAY 2025", [
                "Co-organized a two-hour live performance featuring six acts from DigiPen, BARD, and an independent band, connecting students and performers across separate communities.",
                "Coordinated rehearsals, cross-group announcements, setlists, equipment load-in and setup, show order, venue-day communication, and post-event logistics."
            ], None),
            ("PLUSH PRODUCTION", "INDEPENDENT PROJECT / EXTERNAL OPERATIONS", [
                "Generated approximately KRW 10 million in total revenue through prepaid Witchform orders, setting production quantities from confirmed demand to avoid unsold inventory risk.",
                "Sourced and negotiated with a Chinese manufacturer, reviewed samples and revisions, and connected freight forwarding, defect inspection, domestic delivery, and Peing buyer Q&A into a factory-to-customer workflow."
            ], "https://x.com/mallang707"),
            ("TOO HOT!", "PROJECT LEAD / TECHNICAL PRODUCER | 2026", [
                "Directed two programmers and coordinated gameplay, art, UI, VFX, audio, and presentation through a 130+ item prioritized backlog.",
                "Secured an offline exhibition booth at a Korean game event for October 2026 and coordinated the team's preparation of the project for public presentation."
            ], "https://github.com/Seohyeon-Min/team17_gamejam"),
        ]
        student_add = [
            ("NEW MANZO", "Lead long-term scope, milestones, ownership, cross-discipline communication, and delivery planning while contributing hands-on technical support."),
            ("STREET TYPER", "Scoped and coordinated a public 10-day team build, aligned visual and technical work, published it on itch.io, and support its preparation for Steam release."),
        ]
        student_skills = [
            ("Event Production", "Proposals, approvals, schedules, run-of-show planning, promotion, participant communication, on-site operations"),
            ("Student Community", "Participant outreach, cross-group communication, multidisciplinary collaboration, feedback collection"),
            ("Operations", "Budgeting, purchasing coordination, vendor negotiation, sample review, logistics, fulfillment, risk management"),
            ("Project Leadership", "Team coordination, task ownership, prioritization, review, actionable feedback, issue resolution"),
            ("Technical Tools", "Notion, GitHub Projects/Issues, Witchform, Peing, Unity, C++, C#, Git review and integration"),
        ]
        build(
            DOCS/"Resume_Student_Leadership.pdf",
            "STUDENT LEADER | EVENT & PROJECT ORGANIZER",
            "Student organizer who brought together 24 participants across six game-jam teams and six live acts from DigiPen, BARD, and an independent band. I build the communication and operating structure that helps different student groups work together, then carry each initiative through budgeting, scheduling, on-site execution, and closeout.",
            student_selected,
            student_add,
            student_skills,
            BURGUNDY,
            selected_title="Leadership & Event Experience",
            additional_title="Additional Project Leadership",
        )


if __name__ == "__main__":
    student_only = "--student-leadership-only" in sys.argv
    production_only = "--production-only" in sys.argv
    ta_only = "--ta-only" in sys.argv
    main(
        build_ta=ta_only or (not student_only and not production_only),
        build_prod=production_only or (not student_only and not production_only and not ta_only),
        build_student=student_only,
    )
