from pathlib import Path
import sys
from PIL import Image, ImageDraw
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, KeepTogether

ROOT = Path(__file__).resolve().parents[1]
DOCS = ROOT / "docs"
ASSETS = ROOT / "docs" / ".assets"


def link_icon_path(accent):
    ASSETS.mkdir(parents=True, exist_ok=True)
    rgb = (round(accent.red*255), round(accent.green*255), round(accent.blue*255))
    path = ASSETS / f"link-{rgb[0]:02x}{rgb[1]:02x}{rgb[2]:02x}.png"
    if path.exists():
        return str(path)
    # "external link" glyph: a box with an arrow breaking out of its top-right corner
    scale = 8
    size = 16 * scale
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    w = 2 * scale
    d.rectangle([1*scale, 5*scale, 11*scale, 15*scale], outline=rgb, width=w)
    d.line([7*scale, 9*scale, 15*scale, 1*scale], fill=rgb, width=w)
    d.polygon([(15*scale, 1*scale), (15*scale, 6*scale), (10*scale, 1*scale)], fill=rgb)
    img.save(path)
    return str(path)

NAVY = colors.HexColor("#10172A")
BLUE = colors.HexColor("#4263EB")
TEAL = colors.HexColor("#0F8B8D")
BURGUNDY = colors.HexColor("#8B2635")
FOREST = colors.HexColor("#1F7A4D")
MUTED = colors.HexColor("#536078")
LINE = colors.HexColor("#DDE3F0")
PALE = colors.HexColor("#F5F7FC")
LINKCOLOR = colors.HexColor("#7C4DFF")


def styles(accent, bullet_size=7.4, rolestack_gap=0.8, rolestack_gap_emphasis=2.6):
    bullet_leading = round(bullet_size * 1.237, 2)
    return {
        "name": ParagraphStyle("name", fontName="Helvetica-Bold", fontSize=22, leading=22, textColor=NAVY),
        "role": ParagraphStyle("role", fontName="Helvetica-Bold", fontSize=9, leading=11, textColor=accent, spaceBefore=3),
        "contact": ParagraphStyle("contact", fontName="Helvetica", fontSize=7.5, leading=10, textColor=MUTED, alignment=TA_LEFT),
        "summary": ParagraphStyle("summary", fontName="Helvetica", fontSize=8.1, leading=10.6, textColor=NAVY, spaceBefore=5, spaceAfter=5),
        "section": ParagraphStyle("section", fontName="Helvetica-Bold", fontSize=8.2, leading=10, textColor=accent, spaceBefore=4, spaceAfter=2.5),
        "project": ParagraphStyle("project", fontName="Helvetica-Bold", fontSize=9.2, leading=11, textColor=NAVY, spaceBefore=1),
        "meta": ParagraphStyle("meta", fontName="Helvetica-Bold", fontSize=7.1, leading=9, textColor=accent),
        "bullet": ParagraphStyle("bullet", fontName="Helvetica", fontSize=bullet_size, leading=bullet_leading, textColor=NAVY, leftIndent=9, firstLineIndent=-6, bulletIndent=0, spaceAfter=0.6),
        "small": ParagraphStyle("small", fontName="Helvetica", fontSize=7.25, leading=9.2, textColor=NAVY),
        "quote": ParagraphStyle("quote", fontName="Helvetica-Oblique", fontSize=7.3, leading=9.3, textColor=MUTED, spaceAfter=6),
        "skill": ParagraphStyle("skill", fontName="Helvetica", fontSize=7.15, leading=9.2, textColor=NAVY),
        "rolestack": ParagraphStyle("rolestack", fontName="Helvetica-Oblique", fontSize=6.95, leading=8.4, textColor=MUTED, spaceAfter=rolestack_gap),
        "rolestack_emphasis": ParagraphStyle("rolestack_emphasis", fontName="Helvetica-Oblique", fontSize=6.95, leading=8.4, textColor=MUTED, spaceAfter=rolestack_gap_emphasis),
    }


def header(s, role, content_width=6.6*inch):
    left = [Paragraph("MIN SEOHYEON", s["name"]), Paragraph(role, s["role"])]
    right = Paragraph(
        '<link href="mailto:weare1842@gmail.com">weare1842@gmail.com</link><br/>'
        '<link href="https://github.com/Seohyeon-Min">github.com/Seohyeon-Min</link> | '
        '<link href="https://seohyeon-min.github.io/my_portfolio/">seohyeon-min.github.io/my_portfolio</link><br/>'
        '<link href="https://www.linkedin.com/in/seohyeon-min-781362250/">linkedin.com/in/seohyeon-min</link>', s["contact"])
    t = Table([[left, right]], colWidths=[content_width - 2.45*inch, 2.45*inch])
    t.setStyle(TableStyle([("VALIGN", (0,0), (-1,-1), "TOP"), ("ALIGN", (1,0), (1,0), "RIGHT"), ("LEFTPADDING",(0,0),(-1,-1),0), ("RIGHTPADDING",(0,0),(-1,-1),0)]))
    return t


def rule(accent, content_width=6.6*inch):
    t = Table([[""]], colWidths=[content_width], rowHeights=[1.5])
    t.setStyle(TableStyle([("BACKGROUND", (0,0), (-1,-1), accent), ("LEFTPADDING",(0,0),(-1,-1),0)]))
    return t


def section(title, s, accent):
    return [Paragraph(title.upper(), s["section"]), rule(accent)]


def linked_label(title, url, accent, size=7):
    if not url:
        return title
    link_hex = "%02X%02X%02X" % (round(LINKCOLOR.red*255), round(LINKCOLOR.green*255), round(LINKCOLOR.blue*255))
    icon = link_icon_path(LINKCOLOR)
    return (f'<link href="{url}"><u><font color="#{link_hex}">{title}</font></u> '
            f'<img src="{icon}" width="{size}" height="{size}" valign="0"/></link>')


def project(title, date, bullets, url, role_stack, s, accent, content_width=6.6*inch, emphasis=False):
    label = linked_label(title, url, accent)
    rows = [[Paragraph(label, s["project"]), Paragraph(date, s["meta"])]]
    tab = Table(rows, colWidths=[content_width - 2.25*inch, 2.25*inch])
    tab.setStyle(TableStyle([("VALIGN",(0,0),(-1,-1),"BOTTOM"), ("ALIGN",(1,0),(1,0),"RIGHT"), ("LEFTPADDING",(0,0),(-1,-1),0), ("RIGHTPADDING",(0,0),(-1,-1),0)]))
    body = [tab]
    if role_stack:
        body.append(Paragraph(role_stack, s["rolestack_emphasis"] if emphasis else s["rolestack"]))
    body += [Paragraph("• " + b, s["bullet"]) for b in bullets]
    return KeepTogether(body)


RECOMMENDATION_URL = "https://www.linkedin.com/in/seohyeon-min-781362250/"
RECOMMENDATION_QUOTE = (
    'She was able to care just as much about her teammates as she did about her own work.',
    'Jonathan Holmes, DigiPen Instructor',
)


def build(path, role, summary, selected, additional, skill_rows, accent, education=True,
          selected_title="Experience", additional_title="Additional Evidence", quote=None,
          bullet_size=7.8, project_gap=6.5, skill_pad=3.6):
    s = styles(accent, bullet_size=bullet_size)
    content_width = 6.6*inch
    doc = SimpleDocTemplate(str(path), pagesize=letter, rightMargin=.55*inch, leftMargin=.55*inch, topMargin=.34*inch, bottomMargin=.3*inch,
                            title=f"Min Seohyeon - {role}", author="Min Seohyeon")
    story = [header(s, role, content_width), Spacer(1, 3), rule(accent, content_width), Paragraph(summary, s["summary"])]
    if quote:
        text, attribution = quote
        attribution_label = linked_label(attribution, RECOMMENDATION_URL, accent, size=6.2)
        story.append(Paragraph(f'“{text}” — {attribution_label}', s["quote"]))
    story += section("Skills", s, accent)
    data = [[Paragraph(f"<b>{k}</b>", s["skill"]), Paragraph(v, s["skill"])] for k,v in skill_rows]
    skill_label_width = 1.18*inch
    st = Table(data, colWidths=[skill_label_width, content_width - skill_label_width], hAlign="LEFT")
    st.setStyle(TableStyle([("VALIGN",(0,0),(-1,-1),"TOP"), ("BACKGROUND",(0,0),(0,-1),PALE), ("LEFTPADDING",(0,0),(-1,-1),4), ("RIGHTPADDING",(0,0),(-1,-1),4), ("TOPPADDING",(0,0),(-1,-1),skill_pad), ("BOTTOMPADDING",(0,0),(-1,-1),skill_pad), ("LINEBELOW",(0,0),(-1,-2),.35,LINE)]))
    story.append(st)
    story += section(selected_title, s, accent)
    for p in selected:
        title, date, bullets, url, role_stack, emphasis = (*p, False)[:6]
        story += [project(title, date, bullets, url, role_stack, s, accent, content_width, emphasis), Spacer(1, project_gap)]
    if additional:
        story += section(additional_title, s, accent)
        for item in additional:
            title, text, url = (*item, None)[:3]
            label = linked_label(title, url, accent, size=6.2)
            story.append(Paragraph(f"<b>{label}</b> - {text}", s["small"]))
    if education:
        story += section("Education", s, accent)
        story.append(Paragraph("<b>B.S. Computer Science in Real-Time Interactive Simulation</b> | Expected Graduation: May 2028<br/>Keimyung University / DigiPen Institute of Technology | GPA 3.958/4.0", s["small"]))
    doc.build(story)


def build_cover_letter(path, role, date_str, recipient_lines, paragraphs, closing, accent):
    s = styles(accent)
    letter_styles = {
        "date": ParagraphStyle("date", fontName="Helvetica", fontSize=9, leading=12, textColor=MUTED, spaceBefore=10, spaceAfter=14),
        "recipient": ParagraphStyle("recipient", fontName="Helvetica-Bold", fontSize=9.5, leading=13, textColor=NAVY, spaceAfter=16),
        "body": ParagraphStyle("body", fontName="Helvetica", fontSize=10, leading=15.5, textColor=NAVY, spaceAfter=12),
        "closing": ParagraphStyle("closing", fontName="Helvetica", fontSize=10, leading=15.5, textColor=NAVY, spaceBefore=6),
        "signoff": ParagraphStyle("signoff", fontName="Helvetica-Bold", fontSize=10.5, leading=15, textColor=NAVY, spaceBefore=18),
    }
    doc = SimpleDocTemplate(str(path), pagesize=letter, rightMargin=.85*inch, leftMargin=.85*inch, topMargin=.6*inch, bottomMargin=.6*inch,
                            title=f"Min Seohyeon - Cover Letter - {role}", author="Min Seohyeon")
    story = [header(s, role), Spacer(1, 4), rule(accent), Paragraph(date_str, letter_styles["date"])]
    story.append(Paragraph("<br/>".join(recipient_lines), letter_styles["recipient"]))
    for p in paragraphs:
        story.append(Paragraph(p, letter_styles["body"]))
    story.append(Paragraph("Thank you for considering my application.", letter_styles["closing"]))
    story.append(Paragraph(f"Sincerely,<br/>{closing}", letter_styles["signoff"]))
    doc.build(story)


def main(build_ta=True, build_prod=True, build_student=False, build_gameplay=False):
    DOCS.mkdir(exist_ok=True)

    ta_selected = [
        ("TEACHING ASSISTANT - GAME DEVELOPMENT PROJECT I", "Spring 2025", [
            "Supported ~30 students across DigiPen Korea's Game Development Project I cohort with C++ implementation, debugging, and technical problem-solving throughout the term.",
            "Diagnosed issues across student projects and delivered clear, actionable technical feedback to help teams identify problems and improve their implementations."
        ], None, None),
        ("MANZO", "Sep 2024 – Dec 2025", [
            "Implemented BPM timing windows, beat/bar counting, and audio-synchronized player movement and boss patterns.",
            "Built layer-sorted draw queues and a framebuffer post-processing pipeline for bloom, underwater distortion, god rays, and transitions.",
            "Diagnosed severe boss-fight frame drops to per-frame redundant collision checks and eliminated them, restoring stable performance.",
            "Eliminated dangling-pointer failures by moving scenario/dialogue ownership into engine-level systems. Largest repository contributor: 366 commits."
        ], "https://seohyeon-min.github.io/my_portfolio/portfolio_game/01_Manzo.html",
           "Graphics / Engine Programmer · Technical Artist · Production Lead  ·  C++ / OpenGL / GLSL", True),
        ("TOO HOT!", "Jul 2026", [
            "Created and integrated the game's 2D shadow treatment, pattern-specific VFX, UI, animation, and hit feedback.",
            "Tuned width and length controls for readable shadows across characters and combat spaces.",
            "Balanced direct art/technical-art execution with a 130+ item P0-P3 backlog and two-programmer coordination.",
            "Reviewed and tested teammate-authored gameplay implementations through final visual integration."
        ], "https://seohyeon-min.github.io/my_portfolio/portfolio_game/07_TooHot.html",
           "Technical Art · Creative / Technical Direction · Producer  ·  Unity / ShaderLab / VFX / UI", True),
        ("STREET TYPER", "Aug 2026", [
            "Owned original 2D art, UI composition, particles, outlines, camera shake, and animated feedback.",
            "Specified and integrated an AI-assisted reusable UI shader workflow for rounded forms, gradients, and blur.",
            "Debugged and iterated the shader workflow's presets and inspector controls; gameplay code was teammate-authored.",
            "Published a playable build on <link href='https://handalhandal.itch.io/streettyper'>itch.io</link> and prepared the game for a Steam release."
        ], "https://seohyeon-min.github.io/my_portfolio/portfolio_game/06_StreetTyper.html",
           "Art · Technical Art · Producer (Team Project)  ·  Unity URP / UI Technical Art", True),
        ("WAVE SIMULATOR", "Sep 2026", [
            "Built a Unity URP water-surface study with custom HLSL, procedural vertex displacement, and layered noise-driven surface motion.",
            "Implemented reusable wave and halfpipe geometry controls in C#, exposing parameters for interactive real-time experimentation."
        ], "https://github.com/Seohyeon-Min/WaveSimulator",
           "Technical Art / Shader Development  ·  Unity URP / HLSL / C#", True),
        ("DOUBLE HIT", "Mar – Jul 2024", [
            "Implemented a custom sprite-file parser loading textures, animation frames, hotspots, and collision shapes from data.",
            "Built the texture manager with filename-based caching, dedup, and an offscreen render-texture mode.",
            "Built the GameObjectManager driving per-frame update/draw and collision dispatch across all live objects."
        ], "https://seohyeon-min.github.io/my_portfolio/portfolio_game/03_DoubleHit.html",
           "Systems Programmer · Art / Audio · Production Lead  ·  C++ / raylib"),
        ("BIRD STRIKE", "Nov – Dec 2023", [
            "Implemented audio-timeline beat detection and rhythm-synchronized crow spawning as the core gameplay loop.",
            "Built dynamic attack subdivision, player/crow movement, and atan2-based direction logic in a custom engine.",
            "Produced original art and audio as sole developer on a two-month project without a commercial engine."
        ], "https://seohyeon-min.github.io/my_portfolio/portfolio_game/04_BirdStrike.html",
           "Gameplay Programmer · Game Designer · Artist · Production Lead"),
        ("NEW MANZO", "Aug 2025 – Sep 2026", [
            "Built raycasting-based underwater visibility and post-processing for atmospheric rendering.",
            "Implemented procedural leg animation for a multi-legged boss using ground raycasts and step-arc motion.",
            "Contributed fish-schooling AI and beat-linked hunting; repository lead contributor with 417 commits."
        ], "https://seohyeon-min.github.io/my_portfolio/portfolio_game/00_NewManzo.html",
           "Primary C# Programmer · Game Artist / Visual Director · Production Lead  ·  Unity / C#", True),
    ]
    # Keep technical-art evidence first; other resume tracks use separate lists.
    ta_by_title = {item[0]: item for item in ta_selected}
    def ta_project(title, bullets, role):
        item = ta_by_title[title]
        return (item[0], item[1], bullets, item[3], role, True)

    ta_selected = [
        ta_project("MANZO", [
            "Built a custom C++/OpenGL renderer with layer-sorted draw queues and a framebuffer-based post-processing pipeline for bloom, underwater distortion, god rays, ripples, and transitions.",
            "Implemented reusable particle motion types and integrated shader- and renderer-driven visual effects into gameplay scenes.",
            "Profiled severe frame drops, traced the issue to redundant per-frame collision checks, and removed the repeated work to stabilize performance. Largest repository contributor: 366 commits."
        ], "Graphics / Engine Programmer | C++ / OpenGL / GLSL"),
        ta_project("STREET TYPER", [
            "Owned original 2D art, UI composition, particles, outlines, camera shake, hit VFX, and animated feedback for a shipped bilingual typing-combat game.",
            "Specified, evaluated, debugged, and integrated an AI-assisted reusable UI shader workflow for rounded forms, gradients, drop/inner shadows, blur, presets, and Inspector iteration; gameplay code was teammate-authored.",
            "Published a playable build on <link href='https://handalhandal.itch.io/streettyper'>itch.io</link> and prepared the game for a Steam release."
        ], "Technical Art / UI / Art | Unity URP / C# / ShaderLab"),
        ta_project("WAVE SIMULATOR", [
            "Built a Unity URP water-surface study with custom HLSL, procedural vertex displacement, and layered noise-driven surface motion.",
            "Implemented reusable wave and halfpipe geometry controls in C#, exposing parameters for interactive real-time experimentation."
        ], "Technical Art / Shader Development | Unity URP / HLSL / C#"),
        ta_project("NEW MANZO", [
            "Implemented procedural leg animation for a multi-legged boss using ground raycasts and step-arc motion.",
            "Built raycasting-based underwater visibility and post-processing for atmospheric rendering.",
            "Contributed fish-schooling AI and beat-linked hunting; built Unity editor tools for scene setup, area editing, and UI style presets. Repository lead contributor with 417 commits."
        ], "C# Programmer / Technical Art | Unity / C#"),
        ta_project("TOO HOT!", [
            "Created and integrated the game's 2D shadow treatment, pattern-specific VFX, UI, animation, hit feedback, and visual hierarchy; tuned width and length controls for readable shadows across combat spaces.",
            "Specified GameplayManager and per-stage ScriptableObject data flow, save-range safeguards, chapter selection, and clean-state debug controls; reviewed teammate-authored gameplay implementations.",
            "Balanced direct art/technical-art execution with a 130+ item P0-P3 backlog, two-programmer coordination, code review, merges, and final visual integration."
        ], "Technical Art / Visual Integration | Unity / ShaderLab / VFX"),
        ta_project("DOUBLE HIT", [
            "Implemented a sprite-file parser loading textures, animation frames, hotspots, and collision shapes from data.",
            "Replaced hardcoded platform placement with a custom level-data parser, allowing layout changes without recompiling C++."
        ], "Systems Programmer | C++ / raylib"),
        ("EDGE DRIVE", "Jan-Feb 2025", [
            "Placed and adjusted existing VFX assets in Unreal Engine, making basic modifications in Cascade and Niagara."
        ], "https://seohyeon-min.github.io/my_portfolio/portfolio_game/02_EdgeDirve.html",
           "VFX Contributor | Unreal Engine"),
        ("TEACHING ASSISTANT - GAME DEVELOPMENT PROJECT I", "Spring 2025", [
            "Supported ~30 DigiPen Korea students with C++ implementation and debugging, providing actionable technical feedback on team projects."
        ], None, None),
    ]
    # Keep the one-page resume focused: detailed case studies first, broader evidence below.
    ta_selected = [item for item in ta_selected if item[0] in {
        "TEACHING ASSISTANT - GAME DEVELOPMENT PROJECT I", "WAVE SIMULATOR", "MANZO", "TOO HOT!", "STREET TYPER"
    }]
    ta_order = {"MANZO": 0, "STREET TYPER": 1, "TOO HOT!": 2, "WAVE SIMULATOR": 3, "TEACHING ASSISTANT - GAME DEVELOPMENT PROJECT I": 4}
    ta_selected.sort(key=lambda item: ta_order.get(item[0], 99))
    ta_add = [
        ("DOUBLE HIT", "Implemented C++ texture/sprite management, collision, GameObject/GameComponent architecture, and shared engine services.",
         "https://seohyeon-min.github.io/my_portfolio/portfolio_game/03_DoubleHit.html"),
        ("BIRD STRIKE", "Implemented audio-timeline beat detection, rhythm-synchronized spawning, dynamic attack subdivision, movement, and original art/audio in a custom engine.",
         "https://seohyeon-min.github.io/my_portfolio/portfolio_game/04_BirdStrike.html"),
        ("NEW MANZO", "Contributed Unity gameplay and technical systems for fish schooling, obstacle avoidance, beat-linked hunting, raycasting, and post-processing; repository lead contributor with 417 commits.",
         "https://seohyeon-min.github.io/my_portfolio/portfolio_game/00_NewManzo.html"),
        ("EDGE DRIVE", "Placed and adjusted existing VFX assets in Unreal Engine with basic Cascade and Niagara modifications.",
         "https://seohyeon-min.github.io/my_portfolio/portfolio_game/02_EdgeDirve.html")
    ]
    ta_skills = [
        ("Graphics / Tools", "OpenGL, GLSL, Unity URP, ShaderLab, RenderDoc; UI shaders, framebuffer post-processing, procedural animation, C# editor tools and presets"),
        ("Unreal Engine", "Basic VFX asset setup and modification with Cascade and Niagara (EDGE DRIVE)"),
        ("Programming", "C++, C#, C, Python, JavaScript; collision performance debugging (MANZO), data-driven asset loading"),
        ("Workflow", "Git branching and merge review, GitHub Projects/Issues, Notion, CMake, Visual Studio; technical feedback and visual integration"),
    ]
    if build_ta:
        ta_role = "TECHNICAL ARTIST | GRAPHICS PROGRAMMER"
        ta_summary = "Technical artist and graphics programmer building real-time visual systems, reusable UI shader workflows, and content tools in Unity and C++/OpenGL. Combines hands-on art integration with rendering implementation, procedural animation, and performance debugging."
        build(DOCS/"Resume_TA_Graphics.pdf", ta_role, ta_summary, ta_selected, ta_add, ta_skills, BLUE)
        build(DOCS/"Resume.pdf", ta_role, ta_summary, ta_selected, ta_add, ta_skills, BLUE)

    if build_gameplay:
        gameplay_selected = [
            ("TEACHING ASSISTANT - GAME DEVELOPMENT PROJECT I", "DIGIPEN KOREA | SPRING 2025", [
                "Supported ~30 students across DigiPen Korea's Game Development Project I cohort with C++ implementation, debugging, and technical problem-solving throughout the term.",
                "Diagnosed issues across student projects and delivered clear, actionable technical feedback to help teams identify problems and improve their implementations."
            ], None, None),
            ("MANZO", "Sep 2024 – Dec 2025", [
                "Implemented BPM timing windows, beat/bar counting, and audio-synchronized player movement and boss patterns.",
                "Built layer-sorted draw queues and a framebuffer post-processing pipeline for bloom, underwater distortion, god rays, and transitions.",
                "Diagnosed severe boss-fight frame drops to per-frame redundant collision checks and eliminated them, restoring stable performance.",
                "Eliminated dangling-pointer failures by moving scenario/dialogue ownership into engine-level systems. Largest repository contributor: 366 commits."
            ], "https://seohyeon-min.github.io/my_portfolio/portfolio_game/01_Manzo.html",
               "Graphics / Engine Programmer · Technical Artist · Production Lead  ·  C++ / OpenGL / GLSL"),
            ("NEW MANZO", "Aug 2025 – Sep 2026", [
                "Designed a Template Method-based boss pattern architecture that fixes shared logic across 21 concrete implementations.",
                "Built a Composite orchestration layer that chains sub-patterns into runtime combos, including combos nested inside combos.",
                "Decoupled projectile motion and spawn behavior into standalone interfaces independent of any concrete projectile.",
                "Primary C# contributor with 418 of 585 repository commits."
            ], "https://seohyeon-min.github.io/my_portfolio/portfolio_game/00_NewManzo.html",
               "Primary C# Programmer · Game Artist / Visual Director · Production Lead  ·  Unity / C#"),
            ("DOUBLE HIT", "Mar – Jul 2024", [
                "Implemented a custom sprite-file parser that loads textures, animation frames, hotspots, and collision shapes from data.",
                "Replaced ~30 hardcoded platform coordinates with a PlatformManager parsing level geometry from a custom .plf format.",
                "Built the GameObjectManager driving per-frame update/draw and pairwise collision dispatch across all live objects.",
                "This implementation became the base Manzo later expanded into rendering, CCD, rhythm, and scenario systems."
            ], "https://seohyeon-min.github.io/my_portfolio/portfolio_game/03_DoubleHit.html",
               "Systems Programmer · Art / Audio · Production Lead  ·  C++ / raylib"),
            ("BIRD STRIKE", "Nov – Dec 2023", [
                "Implemented audio-timeline beat detection and rhythm-synchronized crow spawning as the core gameplay loop.",
                "Built dynamic attack subdivision, player/crow movement, and atan2-based direction logic in a custom engine.",
                "Produced original art and audio as sole developer on a two-month project without a commercial engine."
            ], "https://seohyeon-min.github.io/my_portfolio/portfolio_game/04_BirdStrike.html",
               "Gameplay Programmer · Game Designer · Artist · Production Lead"),
            ("TOO HOT!", "Jul 2026", [
                "Specified GameplayManager and per-stage ScriptableObject data flow, save-range safeguards, and chapter selection.",
                "Reviewed and tested teammate-authored gameplay implementations and clean-state debug controls.",
                "Balanced direct art/technical-art execution with a 130+ item P0-P3 backlog and two-programmer coordination."
            ], "https://seohyeon-min.github.io/my_portfolio/portfolio_game/07_TooHot.html",
               "Technical Art · Creative / Technical Direction · Producer  ·  Unity / ShaderLab"),
            ("STREET TYPER", "Aug 2026", [
                "Specified, evaluated, and integrated a reusable UI shader workflow for rounded forms, gradients, and blur.",
                "Owned original 2D art, UI composition, particles, and hit VFX; gameplay code was teammate-authored.",
                "Published a playable build on <link href='https://handalhandal.itch.io/streettyper'>itch.io</link> and prepared the game for a Steam release."
            ], "https://seohyeon-min.github.io/my_portfolio/portfolio_game/06_StreetTyper.html",
               "Art · Technical Art · Producer (Team Project)  ·  Unity URP"),
        ]
        gameplay_add = []
        gameplay_skills = [
            ("Programming", "C++, C#, C, Python, JavaScript; gameplay/engine architecture, design patterns (Template Method, Composite), collision, debugging, memory/lifetime fixes"),
            ("Systems", "Custom C++ engines (raylib, OpenGL), Unity gameplay systems, boss/pattern frameworks, state and data-driven design, performance debugging"),
            ("Workflow", "Git branching and merge review, GitHub Projects/Issues, Notion, CMake, Visual Studio, WSL, profiling, technical specification"),
        ]
        gameplay_role = "GAMEPLAY ENGINEER"
        gameplay_summary = "Gameplay engineer who builds gameplay and engine-level systems in C++ and Unity — from object/component architectures and boss pattern systems to collision and rendering pipelines — then debugs and optimizes them under real performance constraints."
        build(DOCS/"Resume_Gameplay_Engineer.pdf", gameplay_role, gameplay_summary, gameplay_selected, gameplay_add, gameplay_skills, FOREST)

        # Same project evidence, neutral title — for non-game applications where
        # "Gameplay Engineer" reads as a mismatched intent rather than a strength.
        swe_role = "SOFTWARE ENGINEER"
        swe_summary = "Software engineer who builds systems in C++ and Unity — object/component architectures, state-machine and pattern-based gameplay systems, collision and rendering pipelines — then debugs and optimizes them under real performance constraints."
        build(DOCS/"Resume_Software_Engineer.pdf", swe_role, swe_summary, gameplay_selected, gameplay_add, gameplay_skills, FOREST)

        epic_paragraphs = [
            "I enjoy object-oriented programming, particularly designing and structuring systems with maintainability and reusability in mind. When I write code, I enjoy thinking beyond simply implementing the feature I need at the moment and considering how the code I have already written can be reused. While implementing boss patterns in Unity, I spent considerable time thinking about how to structure them so that I would not have to write everything from scratch whenever I added a new pattern.",
            "I bring the same thinking to C++. For Manzo, I built the game's renderer — a layer-based draw queue and a ping-pong framebuffer pipeline for post-processing effects like bloom and underwater distortion — and later, when boss fights started dropping frames badly, traced the cause to redundant collision checks running every frame and rewrote the logic to remove them. I enjoy that kind of work: not just making something run, but figuring out why it doesn't and fixing it properly.",
            "I also enjoy the process of making games as a team. Working alongside teammates with different responsibilities toward a shared goal, and eventually seeing everyone's work come together into a finished game, is one of the most rewarding parts of game development for me. While developing Too Hot, I reviewed every teammate's code and gave feedback, and just as often took feedback on my own work in return — I care as much about how a team gets to a working build together as I do about my individual contribution.",
            "Since deciding in high school that I wanted to work in the game industry, I have pursued that goal by studying computer science and game development at DigiPen. I am applying for the Gameplay Programmer Intern position at Epic Games because I would like to bring together the two things I have enjoyed throughout that path: programming and building games as part of a team.",
        ]
        build_cover_letter(
            DOCS/"CoverLetter_Epic_Gameplay_Programmer.pdf",
            gameplay_role,
            "August 29, 2026",
            ["Epic Games Hiring Team", "Gameplay Programmer Intern — Fortnite"],
            epic_paragraphs,
            "Seohyeon Min",
            FOREST,
        )

        core_systems_paragraph = "I enjoy object-oriented programming, particularly designing and structuring systems with maintainability and reusability in mind. When I write code, I enjoy thinking beyond simply implementing the feature I need at the moment and considering how the code I have already written can be reused. For Manzo, I built the game's renderer — a layer-based draw queue and a ping-pong framebuffer pipeline for post-processing — and later, when boss fights started dropping frames badly, traced the cause to redundant collision checks running every frame and rewrote the logic to remove them. I enjoy that kind of work: not just making something run, but figuring out why it doesn't and fixing it properly."
        team_paragraph = "I also work well as part of a team with people in different roles. While developing Too Hot, I reviewed every teammate's code and gave feedback, and just as often took feedback on my own work in return — I care as much about how a team gets to a working build together as I do about my individual contribution."

        build_cover_letter(
            DOCS/"CoverLetter_AnaVation.pdf", swe_role, "August 29, 2026",
            ["AnaVation Hiring Team", "Computer Science Intern — Huntsville, AL"],
            [
                core_systems_paragraph,
                team_paragraph,
                "I am applying for the Computer Science Intern position because I want to apply the same systems-building and debugging discipline I've developed in game engines (Manzo, a custom C++ engine with 366 commits) to mission-focused software, in a setting where correctness under real constraints matters as directly as it does in a real-time engine.",
            ],
            "Seohyeon Min", FOREST,
        )

        build_cover_letter(
            DOCS/"CoverLetter_NorthwoodSpace_Embedded.pdf", swe_role, "August 29, 2026",
            ["Northwood Space Hiring Team", "Embedded Software Engineer Intern — Los Angeles / Torrance, CA"],
            [
                core_systems_paragraph,
                team_paragraph,
                "I am applying for the Embedded Software Engineer Intern position because I want to bring my C++ and low-level systems background to hardware-adjacent software, where correctness and performance matter as directly as they do in a real-time game engine. Building Manzo's engine meant working close to the metal — manual memory and lifetime management, frame-budget-constrained collision and rendering code — and I'd like to apply that same rigor to embedded systems at Northwood Space.",
            ],
            "Seohyeon Min", FOREST,
        )

        build_cover_letter(
            DOCS/"CoverLetter_NorthwoodSpace_SWE.pdf", swe_role, "August 29, 2026",
            ["Northwood Space Hiring Team", "Software Engineer Intern, Multiple Teams — Los Angeles / Torrance, CA"],
            [
                core_systems_paragraph,
                team_paragraph,
                "I am applying for the Software Engineer Intern role because I want to take the systems-building and debugging habits I've developed in C++ game engines and apply them to Northwood Space's work on space communications infrastructure — software where reliability isn't optional.",
            ],
            "Seohyeon Min", FOREST,
        )

        build_cover_letter(
            DOCS/"CoverLetter_TELUSDigital.pdf", swe_role, "August 29, 2026",
            ["TELUS Digital Hiring Team", "Software Engineer Intern — Summer 2027"],
            [
                core_systems_paragraph,
                team_paragraph,
                "I am applying for the Software Engineer Intern position because I want to grow as a generalist software engineer alongside my game-focused C++/C# work, and TELUS Digital's scale gives me the chance to work on production systems used by a large user base — a different kind of engineering discipline than shipping a 10-day game jam build, and one I want to build alongside it.",
            ],
            "Seohyeon Min", FOREST,
        )

        build_cover_letter(
            DOCS/"CoverLetter_AutoOwners.pdf", swe_role, "August 29, 2026",
            ["Auto-Owners Insurance Hiring Team", "Software Developer Intern — Lansing, MI"],
            [
                core_systems_paragraph,
                team_paragraph,
                "I am applying for the Software Developer Intern position because I want to develop as a software engineer in a setting outside game development, where I can learn how a long-lived, mission-critical codebase is maintained and grown by a large engineering team over years rather than a 10-day production window.",
            ],
            "Seohyeon Min", FOREST,
        )

        build_cover_letter(
            DOCS/"CoverLetter_Roblox.pdf", gameplay_role, "August 29, 2026",
            ["Roblox Hiring Team", "Software Engineer Intern — San Mateo, CA"],
            [
                core_systems_paragraph,
                team_paragraph,
                "I am applying for the Software Engineer Intern position at Roblox because it sits at the intersection of the two things I care about most: engine-level systems programming and building tools that let a huge number of other creators make things. I've spent the last two years building a custom C++ engine from the ground up — layer-based rendering, framebuffer post-processing, collision, and performance debugging — and I want to bring that engine-building instinct to a platform whose entire product is a creation engine used by millions of people.",
            ],
            "Seohyeon Min", FOREST,
        )

    prod_selected = [
        ("DANGLING GAME JAM", "Jun 2025", [
            "Founded and delivered the university's first interdepartmental game jam: 24 participants, 6 teams, 36 hours.",
            "Owned the event from proposal through closeout, including university approvals and an ~KRW 800,000 budget.",
            "Ran promotion, participant communication, on-site operations, and final submissions; every team finished.",
            "Achieved a 4.87/5 participant satisfaction score across 23 post-event responses."
        ], None, "Founder / Producer / Project Lead"),
        ("PLUSH PRODUCTION", "Independent", [
            "Opened prepaid preorders through Witchform and set production quantities from confirmed paid demand.",
            "Sourced a manufacturer through Taobao, negotiated pricing and schedule, and reviewed physical samples.",
            "Built a factory-to-customer workflow across freight forwarding, defect inspection, and domestic delivery.",
            "Generated ~KRW 10 million in revenue; the public account reached 235 followers and 1,000+ reposts."
        ], "https://x.com/mallang707", "Vendor &amp; Fulfillment Lead · Product Designer"),
        ("TOO HOT!", "Jul 2026", [
            "Directed two gameplay programmers and defined the project's technical structure and priorities.",
            "Owned the integration branch and final merges; reviewed every contribution and requested revisions.",
            "Coordinated gameplay, art, UI, VFX, audio, and presentation through a 130+ item P0-P3 backlog.",
            "Secured an offline booth at a Korean game event for an October 2026 exhibition."
        ], "https://seohyeon-min.github.io/my_portfolio/portfolio_game/07_TooHot.html",
           "Producer · Technical / Creative Direction  ·  Unity / ShaderLab"),
        ("NEW MANZO", "Aug 2025 – Sep 2026", [
            "Led long-term scope, milestones, and delivery planning across a multi-semester team project.",
            "Directed cross-discipline communication and ownership while contributing hands-on technical support.",
            "Repository lead contributor with 417 of 585 commits, driving the project to a completed playable build."
        ], "https://seohyeon-min.github.io/my_portfolio/portfolio_game/00_NewManzo.html",
           "Production Lead · Primary C# Programmer · Game Artist / Visual Director  ·  Unity / C#"),
        ("MANZO", "Sep 2024 – Dec 2025", [
            "Bridged design, art, and engineering across a multi-semester, largely solo-engineered C++ project.",
            "Directly implemented rhythm, rendering, particles, debugging, and Git integration end-to-end.",
            "Owned final presentation and polish; largest repository contributor with 366 commits."
        ], "https://seohyeon-min.github.io/my_portfolio/portfolio_game/01_Manzo.html",
           "Production Lead · Graphics / Engine Programmer · Technical Artist  ·  C++ / OpenGL / GLSL"),
        ("STREET TYPER", "Aug 2026", [
            "Scoped and coordinated a public 10-day team build for a bilingual typing-combat game.",
            "Owned visual direction, UI, VFX, and gameplay readability across the production.",
            "Published the build on <link href='https://handalhandal.itch.io/streettyper'>itch.io</link> and coordinated preparation for a Steam release."
        ], "https://seohyeon-min.github.io/my_portfolio/portfolio_game/06_StreetTyper.html",
           "Producer · Art / Technical Art  ·  Unity URP"),
        ("JOINT BAND PERFORMANCE", "May 2025", [
            "Co-organized a two-hour live performance featuring six acts from DigiPen, BARD, and an independent band.",
            "Coordinated rehearsals, setlists, equipment load-in, show order, and post-event logistics."
        ], None, "Co-Organizer"),
        ("TEACHING ASSISTANT - GAME DEVELOPMENT PROJECT I", "Spring 2025", [
            "Supported ~30 students across DigiPen Korea's Game Development Project I cohort with technical problem-solving.",
            "Diagnosed issues across student projects and delivered clear, actionable feedback throughout the term."
        ], None, None),
    ]
    prod_add = []
    prod_skills = [
        ("Production", "Scope/milestone planning, P0-P3 prioritization, ownership, risk identification, acceptance criteria, review, testing, integration"),
        ("Operations", "Event production, vendor sourcing and negotiation, sample review, preorder planning, fulfillment, customer communication"),
        ("Planning Tools", "Notion, GitHub Projects, GitHub Issues, Witchform, Peing; task documentation, status tracking, review and rework loops"),
        ("Technical", "Unity, C++, C#, OpenGL, GLSL, ShaderLab, Git branching and merge review, CMake; graphics/gameplay debugging"),
    ]
    if build_prod:
        build(DOCS/"Resume_Production.pdf", "PRODUCER | PROJECT LEAD", "Producer and project lead who carries games, events, and physical products from planning through delivery. I align multidisciplinary teams and external partners, negotiate resources and constraints, track execution, resolve delivery risks, and build repeatable operations across production, live events, vendors, logistics, and customer communication.", prod_selected, prod_add, prod_skills, TEAL,
              bullet_size=7.35, project_gap=1.4, skill_pad=2.5)

    if build_student:
        student_selected = [
            ("DANGLING GAME JAM", "FOUNDER / EVENT PRODUCER | 2025", [
                "Founded and delivered the university's first interdepartmental game jam, bringing together 24 participants across 6 teams for a 36-hour event; every team completed and submitted a playable game.",
                "Managed university approvals, an approximately KRW 800,000 budget, promotion, participant communication, scheduling, on-site operations, final submissions, and event materials from proposal through closeout.",
                "Earned a 4.87/5 satisfaction score from 23 post-event responses by creating a structured environment where cross-disciplinary students could collaborate and finish their work."
            ], None, None),
            ("JOINT BAND PERFORMANCE", "CO-ORGANIZER | MAY 2025", [
                "Co-organized a two-hour live performance featuring six acts from DigiPen, BARD, and an independent band, connecting students and performers across separate communities.",
                "Coordinated rehearsals, cross-group announcements, setlists, equipment load-in and setup, show order, venue-day communication, and post-event logistics."
            ], None, None),
            ("PLUSH PRODUCTION", "INDEPENDENT PROJECT / EXTERNAL OPERATIONS", [
                "Generated approximately KRW 10 million in total revenue through prepaid Witchform orders, setting production quantities from confirmed demand to avoid unsold inventory risk.",
                "Sourced and negotiated with a Chinese manufacturer, reviewed samples and revisions, and connected freight forwarding, defect inspection, domestic delivery, and Peing buyer Q&amp;A into a factory-to-customer workflow."
            ], "https://x.com/mallang707", None),
            ("TOO HOT!", "PROJECT LEAD / TECHNICAL PRODUCER | 2026", [
                "Directed two programmers and coordinated gameplay, art, UI, VFX, audio, and presentation through a 130+ item prioritized backlog.",
                "Secured an offline exhibition booth at a Korean game event for October 2026 and coordinated the team's preparation of the project for public presentation."
            ], "https://seohyeon-min.github.io/my_portfolio/portfolio_game/07_TooHot.html", None),
        ]
        student_add = [
            ("NEW MANZO", "Lead long-term scope, milestones, ownership, cross-discipline communication, and delivery planning while contributing hands-on technical support.", "https://seohyeon-min.github.io/my_portfolio/portfolio_game/00_NewManzo.html"),
            ("STREET TYPER", "Scoped and coordinated a public 10-day team build, aligned visual and technical work, published it on itch.io, and support its preparation for Steam release.", "https://seohyeon-min.github.io/my_portfolio/portfolio_game/06_StreetTyper.html"),
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
            "STUDENT LEADER | EVENT &amp; PROJECT ORGANIZER",
            "Student organizer who brought together 24 participants across six game-jam teams and six live acts from DigiPen, BARD, and an independent band. I build the communication and operating structure that helps different student groups work together, then carry each initiative through budgeting, scheduling, on-site execution, and closeout.",
            student_selected,
            student_add,
            student_skills,
            BURGUNDY,
            selected_title="Leadership &amp; Event Experience",
            additional_title="Additional Project Leadership",
        )


if __name__ == "__main__":
    student_only = "--student-leadership-only" in sys.argv
    production_only = "--production-only" in sys.argv
    ta_only = "--ta-only" in sys.argv
    gameplay_only = "--gameplay-only" in sys.argv
    any_only = student_only or production_only or ta_only or gameplay_only
    main(
        build_ta=ta_only or not any_only,
        build_prod=production_only or not any_only,
        build_student=student_only,
        build_gameplay=gameplay_only or not any_only,
    )
