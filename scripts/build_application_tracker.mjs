import fs from 'node:fs/promises';
import { SpreadsheetFile, Workbook } from '@oai/artifact-tool';

const out = 'C:/Users/gtg06/Documents/GitHub/seohyeon_portfolio/docs/Application_Tracker.xlsx';
const wb = Workbook.create();
const sheet = wb.worksheets.add('Applications');
const rows = [
  ['Internship Application Tracker', '', '', '', '', '', '', ''],
  ['Last updated', '2026-09-10', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['Company', 'Role', 'Category', 'Location', 'Application URL', 'Status', 'Resume', 'Notes'],
  ['Roblox', 'Software Engineer Intern - Summer 2027', 'Software Engineering / Games', 'San Mateo, CA', 'https://careers.roblox.com/jobs/8072713?gh_jid=8072713', 'In progress', 'Resume_Software_Engineer.pdf', 'Gameplay Programmer application at Epic Games was rejected; this is a different Roblox SWE role. F-1 / future sponsorship: verify in application.'],
  ['Roblox', 'Product Management Intern - Summer 2027', 'Product Management / Games', 'San Mateo, CA', 'https://careers.roblox.com/jobs/8143981', 'In progress', 'Resume_Production.pdf', 'PM application; Product Management cover letter prepared.'],
  ['Epic Games', 'Gameplay Programmer Intern', 'Games', 'Cary, NC', 'https://epicgames.com/careers/jobs/6183293004?gh_jid=6183293004', 'Rejected', 'Resume_Gameplay_Engineer.pdf', 'User reported rejection; do not resubmit to the same role.'],
  ['IMC', 'Software Engineer Intern - Summer 2027', 'Software Engineering / Quant', 'Chicago, IL', 'https://job-boards.eu.greenhouse.io/imc/jobs/4823924101', 'To apply', 'Resume_Software_Engineer.pdf', 'C++ preferred; graduation window appears compatible.'],
  ['DV Trading', 'Software Engineer Intern - Summer 2027 (DV Commodities)', 'Software Engineering / Quant', 'New York, NY', 'https://job-boards.greenhouse.io/dvtrading/jobs/4719119005', 'To apply', 'Resume_Software_Engineer.pdf', 'C++/Python; onsite; student visa sponsorship question is explicit.'],
  ['Aquatic Capital Management', 'Software Engineer, Intern - Summer 2027', 'Software Engineering / Quant', 'Chicago, IL', 'https://job-boards.greenhouse.io/aquaticcapitalmanagement/jobs/8489233002', 'To apply', 'Resume_Software_Engineer.pdf', 'C++/Python; graduation window appears compatible.'],
  ['ID.me', 'Software Development Engineer Intern - Summer 2027', 'Software Engineering', 'Mountain View, CA', 'https://job-boards.greenhouse.io/idmeuniversityrecruiting/jobs/7980429003', 'To apply', 'Resume_Software_Engineer.pdf', 'Graduating 2028+; onsite; sponsorship question included.'],
  ['Adobe', '2027 Intern - Software Engineer', 'Software Engineering', 'TBD', 'https://adobe.wd5.myworkdayjobs.com/en-US/external_experienced/job/XMLNAME-2027-Intern---Software-Engineer_R171666', 'To apply', 'Resume_Software_Engineer.pdf', 'Confirm location and sponsorship details.'],
];
sheet.getRange(`A1:H${rows.length}`).values = rows;
sheet.getRange('A1:H1').merge();
sheet.getRange('A1:H1').format = { fill: '#12213A', font: { bold: true, color: '#FFFFFF', size: 16 }, horizontalAlignment: 'center' };
sheet.getRange('A4:H4').format = { fill: '#DDE3F0', font: { bold: true, color: '#12213A' }, wrapText: true };
sheet.getRange(`A5:H${rows.length}`).format = { wrapText: true, verticalAlignment: 'top' };
sheet.getRange('A2:B2').format = { font: { italic: true, color: '#536078' } };
sheet.freezePanes.freezeRows(4);
for (const [col, width] of [['A',22],['B',42],['C',28],['D',20],['E',52],['F',16],['G',30],['H',75]]) sheet.getRange(`${col}:${col}`).format.columnWidth = width;
sheet.getRange(`A1:H${rows.length}`).format.rowHeight = 30;
sheet.getRange('A1:H1').format.rowHeight = 34;
wb.recalculate();
const check = await wb.inspect({ kind: 'table', range: `Applications!A1:H${rows.length}`, include: 'values,formulas', tableMaxRows: 20, tableMaxCols: 8 });
console.log(check.ndjson);
const output = await SpreadsheetFile.exportXlsx(wb);
await output.save(out);
console.log(out);
