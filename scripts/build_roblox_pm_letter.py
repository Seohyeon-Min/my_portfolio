from pathlib import Path
from build_resumes import build_cover_letter, FOREST

ROOT = Path(__file__).resolve().parents[1]
out = ROOT / 'docs' / 'cover_letters' / 'CoverLetter_Roblox_PM.pdf'
paragraphs = [
    "I have always followed through on the things I believe are worth doing. From starting a business to organizing events and designing and selling merchandise, I have learned how to turn ideas into experiences that people can take part in. Through these projects, I have found great joy and fulfillment in meeting new people and completing something together.",
    "I organized an interdepartmental game jam because I wanted to meet and create alongside students from different majors. I reached out to a professor, student clubs, and department leaders to ask for funding and collaboration. Because our budget was limited, I chose a 36-hour format that preserved the in-person experience I wanted while keeping the event feasible. The event brought together 24 participants across six teams, and every team completed a game. The post-event satisfaction survey received an average score of 4.87 out of 5.",
    "I enjoy bringing people together and communicating across different areas. I have worked in visual art, music composition, programming, event production, and project leadership, so I am comfortable speaking with people who think and work in different ways. As a team lead, I made it a priority to understand my teammates' progress and challenges and to keep information moving. Completing a project together, with everyone contributing to the final result, has been one of the most rewarding parts of my experience.",
    "Roblox is a platform where people from around the world come together to play, create, and connect. I would be proud to help build products that give people the tools to create experiences shaped by their own interests and imaginations. I hope to bring my technical background, creative experience, and record of turning ideas into action to the Product Management Intern role at Roblox, while learning how to connect users' needs with the teams that build for them.",
]
build_cover_letter(out, 'PRODUCT MANAGEMENT', 'September 10, 2026',
                   ['Roblox Hiring Team', 'Product Management Intern - Summer 2027'],
                   paragraphs, 'Seohyeon Min', FOREST)
print(out)
