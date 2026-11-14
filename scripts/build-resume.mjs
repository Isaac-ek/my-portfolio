import { readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

const root = new URL('../', import.meta.url);
const loadData = async (file) => {
  const source = readFileSync(new URL(file, root), 'utf8');
  const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext } });
  return import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`);
};
const { profile } = await loadData('src/data/profile.ts');
const { projects } = await loadData('src/data/projects.ts');
const result = spawnSync(process.env.PDF_PYTHON || 'python3', [
  fileURLToPath(new URL('scripts/build_resume.py', root)),
  fileURLToPath(new URL('public/Chiemelie_Isaac_Ekezie_Resume.pdf', root)),
], { input: JSON.stringify({ profile, projects }), encoding: 'utf8' });
if (result.error) throw result.error;
if (result.status !== 0) throw new Error(result.stderr || 'Resume generation failed. Install reportlab in your Python environment.');
console.log(result.stdout.trim());
