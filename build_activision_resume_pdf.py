from reportlab.lib import colors
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_RIGHT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from pathlib import Path

OUT = Path('docs/Resume_Activision_Tech_Art.pdf')
BLUE, INK, MUTED, LIGHT, GRID = map(HexColor, ['#395BFF','#101827','#53627E','#F3F6FC','#D8DFED'])

styles = getSampleStyleSheet()
base = ParagraphStyle('base', parent=styles['Normal'], fontName='Helvetica', fontSize=8.35, leading=9.55, textColor=INK, spaceAfter=0)
name = ParagraphStyle('name', parent=base, fontName='Helvetica-Bold', fontSize=23, leading=24, textColor=INK)
title = ParagraphStyle('title', parent=base, fontName='Helvetica-Bold', fontSize=10.2, leading=11.3, textColor=BLUE)
contact = ParagraphStyle('contact', parent=base, fontSize=8.25, leading=10, alignment=TA_RIGHT, textColor=MUTED)
summary = ParagraphStyle('summary', parent=base, fontSize=9.0, leading=10.3, spaceBefore=4, spaceAfter=3)
heading = ParagraphStyle('heading', parent=base, fontName='Helvetica-Bold', fontSize=10.2, leading=11.5, textColor=BLUE, spaceBefore=4.5, spaceAfter=2.4, borderColor=BLUE, borderWidth=0.85, borderPadding=2, borderSide='BOTTOM')
role = ParagraphStyle('role', parent=base, fontName='Helvetica-Bold', fontSize=10.1, leading=11)
date = ParagraphStyle('date', parent=title, fontSize=8.8, leading=10, alignment=TA_RIGHT)
meta = ParagraphStyle('meta', parent=base, fontName='Helvetica-Oblique', fontSize=7.9, leading=9.1, textColor=MUTED, spaceAfter=1)
bul = ParagraphStyle('bul', parent=base, leftIndent=7, firstLineIndent=-7, spaceAfter=0.5)
foot = ParagraphStyle('foot', parent=base, fontSize=8.25, leading=9.5)

def P(text, style=base): return Paragraph(text, style)
def exp(story, role_name, date_text, meta_text, bullets):
    story.append(Table([[P(role_name, role), P(date_text, date)]], colWidths=[5.15*inch, 1.25*inch], style=[('VALIGN',(0,0),(-1,-1),'MIDDLE'),('LEFTPADDING',(0,0),(-1,-1),0),('RIGHTPADDING',(0,0),(-1,-1),0),('TOPPADDING',(0,0),(-1,-1),1.8),('BOTTOMPADDING',(0,0),(-1,-1),0)]))
    story.append(P(meta_text, meta))
    for b in bullets: story.append(P('• ' + b, bul))

story=[]
story.append(Table([[P('MIN SEOHYEON', name), P('weare1842@gmail.com<br/>github.com/Seohyeon-Min<br/>seohyeon-min.github.io/my_portfolio<br/>linkedin.com/in/seohyeon-min', contact)], [P('TECHNICAL ARTIST | TOOLS, SHADERS &amp; REAL-TIME CONTENT PIPELINES', title), '']], colWidths=[4.55*inch, 2.35*inch], style=[('VALIGN',(0,0),(-1,-1),'TOP'),('LEFTPADDING',(0,0),(-1,-1),0),('RIGHTPADDING',(0,0),(-1,-1),0),('TOPPADDING',(0,0),(-1,-1),0),('BOTTOMPADDING',(0,0),(-1,-1),0)]))
story.append(P('<b>Technical Artist</b> who builds artist-facing procedural tools, shaders, and real-time visual systems. Brings a strong 3D art foundation and engineering fluency to improve content-creation workflows, translate visual direction into reusable controls, and collaborate across art and programming.', summary))
story.append(P('TECHNICAL TOOLKIT', heading))
skills=[
    [P('<b>3D &amp; Tech Art</b>',base), P('Blender (modeling, sculpting, rigging, Geometry Nodes), procedural modeling, mesh Boolean/volume-remesh workflows, character integration, VFX',base)],
    [P('<b>Engines &amp; Shaders</b>',base), P('Unity URP, Unreal Engine, HLSL, ShaderLab, OpenGL, GLSL, Niagara/Cascade basics, RenderDoc, framebuffer post-processing',base)],
    [P('<b>Tools &amp; Code</b>',base), P('Python, C#, C++, object-oriented programming, Unreal editor tooling, DataAsset/ScriptableObject workflows, procedural animation',base)],
    [P('<b>Production</b>',base), P('Perforce, Jira, Git, code review, debugging, profiling, Visual Studio, CMake; critique, technical feedback, visual integration',base)],
]
story.append(Table(skills,colWidths=[1.37*inch,5.53*inch],style=[('BACKGROUND',(0,0),(0,-1),LIGHT),('BOX',(0,0),(-1,-1),0.35,GRID),('INNERGRID',(0,0),(-1,-1),0.35,GRID),('VALIGN',(0,0),(-1,-1),'MIDDLE'),('LEFTPADDING',(0,0),(-1,-1),5),('RIGHTPADDING',(0,0),(-1,-1),5),('TOPPADDING',(0,0),(-1,-1),3.4),('BOTTOMPADDING',(0,0),(-1,-1),3.4)]))
story.append(P('TECHNICAL ART EXPERIENCE', heading))
exp(story,'CARBOOM','2026 - Present','Gameplay Programmer / Technical Art - Tools | Unreal Engine / Python / C++ / Perforce / Jira',[
'Built an artist-facing Unreal Engine Python placement tool that distributes space-background planets from artist-editable DataAsset parameters, enabling rapid visual iteration without code changes.',
'Translated composition intent - apparent size, density, and clustering - into reusable placement controls, bridging environment-art direction and procedural content generation.',
'Exposed presets and editable controls that reduce engineering dependency during scene-composition iteration.'])
exp(story,'POSEIDON SKATE','Sep 2026','Technical Art / Shader Development / Character Modeling &amp; Rigging | Unity URP / HLSL / C# / Blender / Jira / Perforce',[
'Built ocean, wave, and tornado HLSL shaders using flow noise, domain warping, and Voronoi caustics for a rideable procedural water surface.',
'Modeled and rigged a low-poly Poseidon character in Blender with a 25-bone skeleton, then integrated the FBX asset into Unity.',
'Authored a landing-impact splash-ring shader with randomized per-bump timing and Voronoi facet detailing.'])
exp(story,'RUIN FORGE','2026 - Present','Technical Artist - Procedural Tools (Personal) | Blender Geometry Nodes / Python',[
'Building a Geometry Nodes tool that lets environment artists reposition a single control object to regenerate layered concrete breaks, exposed inner surfaces, and crack placement instead of hand-modeling each variation.'])
exp(story,'STREET TYPER','Aug 2026','Technical Art / UI / Art | Unity URP / C# / ShaderLab / Notion',[
'Owned original 2D art, UI composition, particles, outlines, camera shake, hit VFX, and animated feedback for a shipped bilingual typing-combat game.',
'Specified, evaluated, debugged, and integrated a reusable UI shader workflow for rounded forms, gradients, shadows, blur, presets, and Inspector iteration.'])
exp(story,'TOO HOT!','Jul 2026','Technical Art / Visual Integration | Unity / ShaderLab / VFX / Notion',[
'Created and integrated 2D shadow treatment, pattern-specific VFX, UI, animation, hit feedback, and visual hierarchy; coordinated a 130+ item P0-P3 backlog, two programmers, code review, merges, and final visual integration.'])
exp(story,'NEW MANZO','Aug 2025 - Sep 2026','C# Programmer / Technical Art | Unity / C# / Notion',[
'Implemented procedural leg animation for a multi-legged boss using ground raycasts and step-arc motion; built raycasting-based underwater visibility and post-processing.'])
exp(story,'MANZO','Sep 2024 - Dec 2025','Graphics / Engine Programmer | C++ / OpenGL / GLSL / Notion',[
'Built a custom C++/OpenGL renderer with layer-sorted draw queues and framebuffer post-processing; profiled frame drops, removed redundant collision checks, and became the largest repository contributor with 366 commits.'])
story.append(P('ADDITIONAL EXPERIENCE &amp; EDUCATION', heading))
story.append(P('<b>Teaching Assistant - Game Development Project I | Spring 2025</b>  Supported approximately 30 DigiPen Korea students with C++ implementation and debugging, providing actionable technical feedback on team projects.',foot))
story.append(P('<b>B.S. Computer Science in Real-Time Interactive Simulation | Expected May 2028</b>  Keimyung University / DigiPen Institute of Technology | GPA 3.958/4.0',foot))

doc=SimpleDocTemplate(str(OUT),pagesize=letter,leftMargin=.58*inch,rightMargin=.58*inch,topMargin=.42*inch,bottomMargin=.38*inch,title='Min Seohyeon Technical Artist Resume',author='Min Seohyeon')
doc.build(story)
print(OUT)
