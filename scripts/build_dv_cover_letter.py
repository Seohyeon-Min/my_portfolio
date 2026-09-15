from pathlib import Path
from build_resumes import build_cover_letter, FOREST

ROOT = Path(__file__).resolve().parents[1]
common = (ROOT / 'docs' / 'cover_letters' / 'common_paragraphs.md').read_text(encoding='utf-8').strip().split('\n\n')
company = ('I am applying for the Software Engineer Intern position at DV Trading because I want to apply my C++ systems-building and performance-debugging experience to low-latency software. '
           'My experience building a custom engine, tracing frame drops to redundant collision checks, and fixing memory ownership issues has taught me to think carefully about performance and correctness. '
           'I am excited by the opportunity to work in an established codebase, contribute to a focused project, and learn how reliable systems support real-time financial markets.')
out = ROOT / 'docs' / 'cover_letters' / 'CoverLetter_DVTrading.pdf'
build_cover_letter(out, 'SOFTWARE ENGINEER', 'September 10, 2026',
                   ['DV Trading Hiring Team', 'Software Engineer Intern - Summer 2027 (DV Commodities)'],
                   common + [company], 'Seohyeon Min', FOREST)
print(out)
