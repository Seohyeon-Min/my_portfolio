# Activision 2027 Summer Internship - Tech Art (R028075).
# Merges docs/Resume.pdf and docs/Resume_TA_Graphics.pdf into one resume, reworded toward the
# posting's own language ("content creation pipelines and tool sets", "collaborate with artists and
# engineers", "object-oriented programming practices", "production/tracking tools", "traditional art
# foundation", "critique process"). Reuses build() from build_resumes.py so the layout matches.
from build_resumes import build, BLUE, DOCS
from reportlab.lib.units import inch

SITE = "https://seohyeon-min.github.io/my_portfolio/"

selected = [
    ("RUIN FORGE", "2026 - Present (In Progress)", [
        "Building a Blender Geometry Nodes tool that lets environment artists reposition one control object to regenerate a two-layer concrete break, exposed inner surface, and crack placement instead of hand-modeling each variation."
    ], SITE + "portfolio_game/10_RuinForge.html",
       "Technical Artist - Procedural Tools (Personal) | Blender Geometry Nodes / Python", True),
    ("CARBOOM", "2026 - Oct 2026", [
        "Built an artist-facing Unreal Engine Python tool for the content creation pipeline that procedurally places space-background planets from artist-editable DataAsset parameters, so artists iterate on composition without code changes.",
        "Translated composition intent - apparent size, density, and clustering - into reusable placement controls, bridging environment-art direction and procedural content generation.",
        "Collaborated with the team's two artists, refining placement rules from in-editor critique; tracked work in Jira and Perforce."
    ], SITE + "portfolio_game/09_Carboom.html",
       "Gameplay Programmer / Technical Art - Tools | Unreal Engine / Python / C++ / Perforce / Jira", True),
    ("POSEIDON SKATE", "Sep 2026", [
        "Built ocean, wave, and tornado HLSL shaders (flow noise, domain warping, Voronoi caustics) as a rideable procedural water surface.",
        "Modeled and rigged a low-poly Poseidon character in Blender (25-bone skeleton) and integrated it into Unity via FBX.",
        "Authored a VFX splash-ring shader with randomized per-bump timing and Voronoi facet detailing for landing impacts."
    ], SITE + "portfolio_game/08_PoseidonSkate.html",
       "Technical Art / Shader Development · Character Modeling &amp; Rigging | Unity URP / HLSL / C# / Blender / Jira / Perforce", True),
    ("STREET TYPER", "Aug 2026", [
        "Owned original 2D art, UI composition, particles, outlines, camera shake, hit VFX, and animated feedback for a shipped bilingual typing-combat game.",
        "Specified, evaluated, debugged, and integrated an AI-assisted reusable UI shader workflow for rounded forms, gradients, drop/inner shadows, blur, presets, and Inspector iteration."
    ], SITE + "portfolio_game/06_StreetTyper.html",
       "Technical Art / UI / Art | Unity URP / C# / ShaderLab / Notion", True),
    ("TOO HOT!", "Jul 2026", [
        "Created and integrated the game's 2D shadow treatment, pattern-specific VFX, UI, animation, hit feedback, and visual hierarchy; tuned width and length controls for readable shadows across combat spaces.",
        "Specified GameplayManager and per-stage ScriptableObject data flow, save-range safeguards, chapter selection, and clean-state debug controls; reviewed teammate-authored gameplay implementations.",
        "Coordinated two programmers through a 130+ item P0-P3 backlog, communicating priorities and running code review, merges, and final visual integration."
    ], SITE + "portfolio_game/07_TooHot.html",
       "Technical Art / Visual Integration | Unity / ShaderLab / VFX / Notion", True),
    ("NEW MANZO", "Aug 2025 – Sep 2026", [
        "Implemented procedural leg animation for a multi-legged boss using ground raycasts and step-arc motion.",
        "Built raycasting-based underwater visibility and post-processing for atmospheric rendering."
    ], SITE + "portfolio_game/00_NewManzo.html",
       "C# Programmer / Technical Art | Unity / C# / Notion", True),
    ("MANZO", "Sep 2024 – Dec 2025", [
        "Built a custom C++/OpenGL renderer with layer-sorted draw queues and a framebuffer-based post-processing pipeline for bloom, underwater distortion, god rays, ripples, and transitions.",
        "Implemented reusable particle motion types and integrated shader- and renderer-driven visual effects into gameplay scenes.",
        "Profiled severe frame drops, traced the issue to redundant per-frame collision checks, and removed the repeated work to stabilize performance. Largest repository contributor: 366 commits."
    ], SITE + "portfolio_game/01_Manzo.html",
       "Graphics / Engine Programmer | C++ / OpenGL / GLSL / Notion", True),
    ("TEACHING ASSISTANT - GAME DEVELOPMENT PROJECT I", "Spring 2025", [
        "Supported ~30 DigiPen Korea students with C++ implementation and debugging, communicating problems and solutions through actionable technical feedback on team projects."
    ], None, None),
]

additional = [
    ("ART FOUNDATION", "Dragon Head: modeled, sculpted, shaded, and rendered a stylized 3D asset from base mesh through final render.",
     SITE + "portfolio_planning/ArtGallery.html"),
    ("UNREAL VFX", "Edge Drive: placed and adjusted existing VFX assets in Unreal Engine with basic Cascade and Niagara modifications.",
     SITE + "portfolio_game/02_EdgeDirve.html"),
    ("OBJECT-ORIENTED ENGINE CODE", "Double Hit: C++ texture/sprite management, collision, and GameObject/GameComponent architecture.",
     SITE + "portfolio_game/03_DoubleHit.html"),
]

skills = [
    ("Tools &amp; Pipelines", "Blender Geometry Nodes, Python, Unreal Engine editor tooling, DataAsset workflows, C# editor tools and presets"),
    ("3D / Game Engines", "Blender (modeling, rigging), Unity URP, Unreal Engine (Cascade/Niagara VFX), custom C++/OpenGL engine"),
    ("Real-Time Graphics", "HLSL, ShaderLab, GLSL, OpenGL, UI shaders, framebuffer post-processing, procedural animation, RenderDoc"),
    ("Programming", "C++, C#, Python, C, JavaScript; object-oriented programming practices, debugging, performance profiling"),
    ("Production / Tracking", "Jira, Perforce, Git branching and merge review, GitHub Projects/Issues, Notion, CMake, Visual Studio"),
]

if __name__ == "__main__":
    build(
        DOCS / "Resume_Activision_Tech_Art.pdf",
        "TECHNICAL ARTIST | TOOLS, PIPELINES &amp; REAL-TIME VISUALS",
        "Technical artist who builds tools and content creation pipelines for artists - procedural destruction tools in Blender, artist-facing Unreal Engine "
        "editor tools, and real-time shaders in Unity and C++/OpenGL. Collaborates with artists and engineers, communicates problems and solutions clearly, "
        "and turns critique into the next iteration.",
        selected, additional, skills, BLUE,
        additional_title="Additional Projects",
        bullet_size=7.35, project_gap=0, skill_pad=1.5,
        top_margin=.3*inch, bottom_margin=.1*inch,
    )
