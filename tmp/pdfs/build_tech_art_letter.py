from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable
from pypdf import PdfReader

root = Path(__file__).resolve().parents[2]
out = root / 'output/pdf/CoverLetter_Epic_Tech_Art_Intern.pdf'
out.parent.mkdir(parents=True, exist_ok=True)
navy = colors.HexColor('#172335')
muted = colors.HexColor('#526072')
styles = {
    'name': ParagraphStyle('name', fontName='Helvetica-Bold', fontSize=21, leading=25, textColor=navy),
    'contact': ParagraphStyle('contact', fontName='Helvetica', fontSize=9, leading=14, textColor=muted),
    'meta': ParagraphStyle('meta', fontName='Helvetica', fontSize=10, leading=15, textColor=muted),
    'body': ParagraphStyle('body', fontName='Helvetica', fontSize=10.5, leading=16, textColor=navy, spaceAfter=13),
}
story = [Paragraph('MIN SEOHYEON', styles['name']), Spacer(1, 6),
         Paragraph('<link href="mailto:weare1842@gmail.com">weare1842@gmail.com</link> | <link href="https://github.com/Seohyeon-Min">GitHub</link> | <link href="https://seohyeon-min.github.io/my_portfolio/">Portfolio</link>', styles['contact']),
         Spacer(1, 15), HRFlowable(width='100%', thickness=1, color=navy), Spacer(1, 18),
         Paragraph('September 14, 2026<br/>Rocket League Hiring Team<br/>Epic Games | Cary, NC<br/><b>Re: Tech Art Intern (R27408)</b>', styles['meta']), Spacer(1, 20)]
paragraphs = [
    'Dear Rocket League Hiring Team,',
    'My experience making both game art and the systems that bring it into playable builds is what draws me to technical art. I am applying for the Tech Art Intern position (R27408). I study Computer Science in Real-Time Interactive Simulation through Keimyung University and DigiPen, and I am excited by the opportunity to help Rocket League artists create and iterate on content while keeping the game responsive.',
    'In MANZO, I built an OpenGL/GLSL post-processing pipeline for bloom, underwater distortion, god rays, and transitions. I also investigated severe frame drops during boss fights, traced them to redundant per-frame collision checks, and removed the repeated work to stabilize gameplay. Working on both visual effects and performance issues taught me to look beyond the final image and investigate the systems that determine how a game feels in motion.',
    'In Street Typer, I created original 2D art and combat effects while integrating and debugging an AI-assisted Unity UI shader workflow. I worked on reusable presets and Inspector controls for rounded forms, gradients, and blur, allowing UI styling to be adjusted through parameters instead of separate hand-made images. This connected my art work with a practical technical goal: making visual changes easier to repeat and refine.',
    'I would bring hands-on C++, C#, and shader experience, along with experience integrating teammates\' work into playable games. The opportunity to work directly with technical artists, rendering engineers, and environment artists is especially appealing to me. I would welcome the chance to contribute to Rocket League\'s materials and content workflows while learning from the team.',
    'Thank you for considering my application.',
    'Sincerely,<br/>Min Seohyeon',
]
story.extend(Paragraph(p, styles['body']) for p in paragraphs)
SimpleDocTemplate(str(out), pagesize=letter, leftMargin=54, rightMargin=54, topMargin=43, bottomMargin=43, title='Min Seohyeon - Epic Games Tech Art Intern Cover Letter', author='Min Seohyeon').build(story)
doc = PdfReader(out)
assert len(doc.pages) == 1, f'Expected one page, got {len(doc.pages)}'
print(str(out))
print('Pages:', len(doc.pages))
