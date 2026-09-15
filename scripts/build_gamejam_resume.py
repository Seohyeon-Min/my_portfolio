from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.colors import HexColor
from pypdf import PdfReader
import subprocess

root = Path(__file__).resolve().parents[1]
out = root / 'output/pdf/Resume_General_GameJam.pdf'
out.parent.mkdir(parents=True, exist_ok=True)
c = canvas.Canvas(str(out), pagesize=(612,792))
c.setTitle('Min Seohyeon - General / Game Jam Resume')
c.setAuthor('Min Seohyeon')
y = 761
ink = HexColor('#182235')
accent = HexColor('#3156A0')
style = ParagraphStyle('body',fontName='Helvetica',fontSize=8.5,leading=10.6,textColor=ink)
def p(text, size=None, gap=2):
    global y
    s = style if size is None else ParagraphStyle('custom',parent=style,fontSize=size,leading=size*1.24)
    para=Paragraph(text,s); w,h=para.wrap(540,750)
    para.drawOn(c,36,y-h); y-=h+gap
def section(text):
    global y
    y-=5
    c.setFillColor(accent); c.setFont('Helvetica-Bold',9)
    c.drawString(36,y-9,text); y-=13
    c.setStrokeColor(HexColor('#C9D4E7'));c.line(36,y,576,y);y-=5
def project(name, date, role, bullets):
    global y
    c.setFillColor(ink);c.setFont('Helvetica-Bold',9.2);c.drawString(36,y-9,name)
    c.setFont('Helvetica',8);c.drawRightString(576,y-9,date);y-=12
    p('<i>'+role+'</i>',8,gap=2)
    for b in bullets:p('&#8226; '+b,gap=1.6)
    y-=3

p('<b>MIN SEOHYEON</b>',23,gap=2)
p('<b>GAME DEVELOPER | PROGRAMMING · TECHNICAL ART · ART · PRODUCTION</b>',9,gap=4)
p('<link href="mailto:weare1842@gmail.com">weare1842@gmail.com</link>  |  <link href="https://github.com/Seohyeon-Min">github.com/Seohyeon-Min</link>  |  <link href="https://seohyeon-min.github.io/my_portfolio/">Portfolio: seohyeon-min.github.io/my_portfolio</link>',8,gap=5)
p('Game developer who connects gameplay code, shaders, original 2D art, UI/VFX, and team delivery. Built custom C++ engines and Unity games, shipped a 10-day playable project, and organized a 36-hour game jam. Comfortable owning implementation, debugging, visual polish, and production coordination.',gap=2)
section('SKILLS')
p('<b>Programming:</b> C++, C#, Python, JavaScript; Unity / URP, OpenGL / GLSL, HLSL / ShaderLab; gameplay, procedural systems, rendering, collision and lifetime debugging. Unreal Engine: basic Cascade / Niagara VFX setup.',gap=2)
p('<b>Art &amp; delivery:</b> 2D art, UI composition, particles, animation, shader integration; Clip Studio Paint, Spriter Pro, RenderDoc, Git, GitHub Projects / Issues, Notion, CMake; scope, task priorities, reviews and merges.',gap=1)
section('GAME DEVELOPMENT & TEAM DELIVERY')
project('TOO HOT!', 'Jul 2026', 'Project Lead / Technical Art / Visual Integration | Unity · ShaderLab',[
'Created the 2D shadow treatment, pattern-specific VFX, UI, animation and hit feedback; tuned visual hierarchy and shadow controls for readable combat.',
'Directed two programmers through a 130+ item P0-P3 backlog; specified stage data flow, save safeguards and debug controls, reviewed teammate-authored gameplay code, and managed merges and final visual integration.'])
project('STREET TYPER', 'Aug 2026 | 10-day build', 'Producer / Original Art / UI Technical Art | Unity URP · C# · ShaderLab',[
'Scoped and coordinated a bilingual typing-combat game; created original 2D art, UI, particles, outlines, camera shake and animated hit feedback. Published on itch.io and prepared for Steam release.',
'Specified, evaluated, debugged and integrated an AI-assisted reusable UI shader workflow with gradients, rounded forms, shadows, blur and Inspector presets; gameplay code was teammate-authored.'])
project('MANZO', 'Sep 2024 - Dec 2025', 'Production Lead / Graphics & Engine Programmer | C++ · OpenGL · GLSL',[
'Built a custom renderer, layer-sorted draw queues, framebuffer post-processing (bloom, distortion, god rays, ripples), reusable particles, BPM timing and audio-synchronized movement / boss patterns.',
'Fixed severe frame drops from redundant collision checks and dangling-pointer failures through engine-level ownership changes; coordinated integration and final polish. Largest repository contributor: 366 commits.'])
project('NEW MANZO', 'Aug 2025 - Sep 2026', 'Production Lead / Primary C# Programmer / Game Artist | Unity · C#',[
'Led scope, milestones and cross-discipline delivery while implementing fish schooling, obstacle avoidance, beat-linked hunting, raycasting and post-processing. Repository lead contributor: 417 of 585 commits.'])
project('WAVE SIMULATOR', 'Sep 2026', 'Technical Art / Shader Development | Unity URP · HLSL · C#',[
'Built procedural water with animated noise, vertex displacement and layered surface shading; exposed reusable wave / halfpipe geometry controls in C# and produced a playable WebGL build.'])
p('<b>DOUBLE HIT</b> - C++ texture / sprite management, collision, GameObject / GameComponent architecture and shared engine services.',gap=2)
p('<b>BIRD STRIKE</b> - Audio-timeline beat detection, rhythm-synchronized spawning, attack subdivision and movement; original art and audio in a custom engine.',gap=2)
p('<b>THINK THINK</b> - Game design, art and project production. <b>EDGE DRIVE</b> - Placed and adjusted existing Unreal VFX assets with basic Cascade / Niagara modifications.',gap=1)
section('COMMUNITY, TEACHING & INDEPENDENT PRODUCTION')
p('<b>DANGLING GAME JAM | Founder / Producer | Jun 2025</b> - Delivered the university\'s first interdepartmental game jam: 24 participants, 6 teams, 36 hours; every team finished. Managed approvals, ~KRW 800,000 budget and on-site operations; satisfaction 4.87/5 from 23 responses.',gap=3)
p('<b>TEACHING ASSISTANT | DigiPen Korea | Spring 2025</b> - Supported ~30 Game Development Project I students with C++ implementation, debugging and actionable feedback on team projects.',gap=3)
p('<b>PLUSH PRODUCTION | Independent Designer / Vendor &amp; Fulfillment Lead</b> - Generated ~KRW 10 million in revenue; managed paid preorders, manufacturer sourcing / negotiation, sample review, inspection and delivery.',gap=3)
p('<b>JOINT BAND PERFORMANCE | Co-Organizer | May 2025</b> - Coordinated a two-hour show with six acts, including rehearsals, setlists, equipment, show order and post-event logistics.',gap=1)
section('EDUCATION')
p('<b>B.S. Computer Science in Real-Time Interactive Simulation</b> | Expected May 2028<br/>Keimyung University / DigiPen Institute of Technology | GPA 3.958/4.0',gap=0)
assert y>=24, f'Content exceeds page: bottom={y}'
c.save()
doc=PdfReader(out)
assert len(doc.pages)==1
preview=root/'tmp/pdfs/gamejam-preview.png';preview.parent.mkdir(parents=True,exist_ok=True)
subprocess.run(['pdftoppm','-scale-to','1500','-png','-singlefile',str(out),str(preview.with_suffix(''))],check=True)
print(f'{out}\nBottom margin: {y:.1f}pt\n{preview}')
