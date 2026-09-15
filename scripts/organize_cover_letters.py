"""Organize existing letters and build the current Roblox letter from shared prose."""
import ast
from pathlib import Path
from shutil import move
from pypdf import PdfReader
from build_resumes import build_cover_letter, FOREST

ROOT = Path(__file__).resolve().parents[1]
DEST = ROOT / 'docs' / 'cover_letters'
DEST.mkdir(exist_ok=True)
(DEST / 'archive').mkdir(exist_ok=True)
source = ROOT / 'scripts' / 'build_resumes.py'
tree = ast.parse(source.read_text(encoding='utf-8'))
shared = {}
for node in ast.walk(tree):
    if isinstance(node, ast.Assign):
        for target in node.targets:
            if isinstance(target, ast.Name) and target.id in ('core_systems_paragraph', 'team_paragraph'):
                shared[target.id] = ast.literal_eval(node.value).replace(' — ', ' - ')

common = DEST / 'common_paragraphs.md'
if not common.exists():
    common.write_text('\n\n'.join(shared[k] for k in ('core_systems_paragraph', 'team_paragraph')) + '\n', encoding='utf-8')

for pdf in (ROOT / 'docs').glob('CoverLetter_*.pdf'):
    target = DEST / pdf.name
    if pdf.name == 'CoverLetter_Roblox.pdf':
        target = DEST / 'archive' / 'CoverLetter_Roblox_2026-08-29.pdf'
    if target.exists():
        raise FileExistsError(target)
    move(str(pdf), str(target))

for pdf in list(DEST.glob('*.pdf')) + list((DEST / 'archive').glob('*.pdf')):
    pdf.with_suffix('.txt').write_text('\n\n'.join(p.extract_text() for p in PdfReader(pdf).pages), encoding='utf-8')

tail = (
    'I am applying for the Summer 2027 Software Engineer Intern position at Roblox because '
    'I want to build systems that help other people create and share interactive experiences. '
    'I am especially interested in the Engine team and rendering work, where I could build on '
    'my C++ and OpenGL experience while learning how those systems operate at the scale of Roblox. '
    'The opportunity to own a project from implementation and testing through deployment, '
    'with guidance from a mentor and collaboration across teams, is particularly appealing to me. '
    'I would also welcome the chance to contribute to other software engineering teams where '
    'my systems-building and debugging experience would be useful.'
)
(DEST / 'Roblox_company_paragraph.md').write_text(tail + '\n', encoding='utf-8')
paragraphs = common.read_text(encoding='utf-8').strip().split('\n\n') + [tail]
build_cover_letter(DEST / 'CoverLetter_Roblox.pdf', 'SOFTWARE ENGINEER', 'September 10, 2026',
                   ['Roblox Hiring Team', 'Software Engineer Intern - Summer 2027'],
                   paragraphs, 'Seohyeon Min', FOREST)
(DEST / 'CoverLetter_Roblox.txt').write_text('\n\n'.join([
    'September 10, 2026', 'Roblox Hiring Team\nSoftware Engineer Intern - Summer 2027',
    *paragraphs, 'Thank you for considering my application.', 'Sincerely,\nSeohyeon Min'
]) + '\n', encoding='utf-8')
(DEST / 'README.md').write_text('''# Cover letters

- `common_paragraphs.md`: reusable systems/debugging and teamwork paragraphs. Edit these for future letters.
- `Roblox_company_paragraph.md`: company-specific final paragraph for Summer 2027.
- `CoverLetter_Roblox.pdf`: current Roblox upload version; `.txt` is copyable text.
- Other PDFs and TXT files: previously written letters, not evidence of submission.
- `archive/`: previous Roblox draft.
- Epic Gameplay: user reported rejection; do not resubmit to the same role.
- AnaVation and Northwood Space: historical letters retained; excluded from the current application search by the user's aerospace/defense exclusion.

For future applications, reuse the two common paragraphs, add one company/role paragraph, and update recipient, title, and date. Keep every claim grounded in the existing project history.
''', encoding='utf-8')
print('Organized letters:', len(list(DEST.rglob('*.pdf'))))
print('Roblox pages:', len(PdfReader(DEST / 'CoverLetter_Roblox.pdf').pages))
