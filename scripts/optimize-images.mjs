import { readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

const root = new URL('../', import.meta.url);
const source = readFileSync(new URL('src/data/designs.ts', root), 'utf8');
const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext } });
const { designs } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`);
const result = spawnSync(process.env.IMAGE_PYTHON || 'python3', [
  fileURLToPath(new URL('scripts/optimize_images.py', root)),
], { input: JSON.stringify(designs), encoding: 'utf8' });
if (result.error) throw result.error;
if (result.status !== 0) throw new Error(result.stderr || 'Image optimization failed. Install Pillow in your Python environment.');
console.log(result.stdout.trim());
