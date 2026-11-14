"""Build the downloadable CV from the same profile data used by the website.

Called by npm run resume:build. Requires reportlab; PDF_PYTHON can select a venv.
"""
import json
import sys
from html import escape

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, KeepTogether

data = json.load(sys.stdin)
profile = data['profile']
projects = data['projects']
output = sys.argv[1]
ink = colors.HexColor('#172326')
muted = colors.HexColor('#4e5e62')
accent = colors.HexColor('#087f75')

def clean(text):
    return text.replace('–', '-').replace('—', '-').replace('’', "'").replace('®', '')

def p(text, style):
    return Paragraph(escape(clean(text)), style)

base = ParagraphStyle('body', fontName='Helvetica', fontSize=9.4, leading=14, textColor=ink, spaceAfter=7)
small = ParagraphStyle('small', parent=base, fontSize=8.5, leading=12, textColor=muted)
title = ParagraphStyle('title', parent=base, fontName='Helvetica-Bold', fontSize=23, leading=28, spaceAfter=9)
heading = ParagraphStyle('heading', parent=base, fontName='Helvetica-Bold', fontSize=11, leading=15, textColor=accent, spaceBefore=17, spaceAfter=10, keepWithNext=True)
role = ParagraphStyle('role', parent=base, fontName='Helvetica-Bold', fontSize=10, leading=14, spaceAfter=3, keepWithNext=True)
meta = ParagraphStyle('meta', parent=small, spaceAfter=5, keepWithNext=True)
bullet = ParagraphStyle('bullet', parent=base, leftIndent=11, firstLineIndent=-9, spaceAfter=5)
story = []

def section(label):
    story.append(p(label.upper(), heading))

def experience(item):
    story.append(p(item['role'], role))
    story.append(p(f"{item['company']} | {item['location']} | {item['period']}", meta))
    story.append(p(item['summary'], base))
    for highlight in item['highlights']:
        story.append(p('- ' + highlight, bullet))
    story.append(Spacer(1, 8))

story += [p(profile['name'].upper(), title), p(profile['role'], role)]
story.append(p(f"{profile['location']} | {profile['email']}", small))
story.append(Paragraph(f'<link href="{profile["website"]}" color="#087f75">{escape(profile["website"].removeprefix("https://"))}</link>  |  <link href="{profile["linkedin"]}" color="#087f75">LinkedIn</link>  |  <link href="{profile["github"]}" color="#087f75">GitHub</link>', small))
section('Profile')
story.append(p(profile['intro'], base))
section('Professional experience')
for item in profile['experience'][:3]:
    experience(item)

story.append(PageBreak())
section('Professional experience / continued')
experience(profile['experience'][3])
section('Selected work')
for project in [projects[0], projects[1]]:
    content = [p(project['title'], role), p(project['description'], base)]
    if project.get('caseStudy'):
        url = profile['website'] + project['caseStudy']
        content.append(Paragraph(f'<link href="{url}" color="#087f75">Public walkthrough and case study</link>', small))
    story.append(KeepTogether(content))
    story.append(Spacer(1, 8))
story.append(p('Dr Kayla packaging systems', role))
story.append(p('Designed coordinated carton systems for seven soap variants and five honey-mixture variants: visual hierarchy, variant colors, packaging copy, and print-ready dielines.', base))
section('Skills')
for group in profile['skillGroups']:
    story.append(p(group['title'] + ': ' + ', '.join(group['items']), small))
section('Education & certifications')
for item in profile['education']:
    story.append(p(f"{item['degree']} | {item['institution']} | {item['period']}", base))
for cert in profile['certifications']:
    label = escape(clean(cert['label']))
    if cert.get('url'):
        story.append(Paragraph(f'<link href="{cert["url"]}" color="#087f75">{label}</link>', small))
    else:
        story.append(p(cert['label'], small))

def page_footer(canvas, doc):
    width, height = A4
    canvas.setStrokeColor(colors.HexColor('#dce5e3'))
    canvas.line(44, height - 26, width - 44, height - 26)
    canvas.line(44, 35, width - 44, 35)
    canvas.setFont('Helvetica', 8)
    canvas.setFillColor(muted)
    canvas.drawString(44, 22, 'Ekezie Chiemelie Isaac | Curriculum Vitae')
    canvas.drawRightString(width - 44, 22, f'{doc.page}')

doc = SimpleDocTemplate(output, pagesize=A4, leftMargin=44, rightMargin=44, topMargin=43, bottomMargin=48,
                        title='Ekezie Chiemelie Isaac - Curriculum Vitae', author=profile['name'])
doc.build(story, onFirstPage=page_footer, onLaterPages=page_footer)
print('Updated the downloadable CV from the portfolio profile data.')
