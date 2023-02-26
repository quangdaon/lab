import YAML from 'yaml';
import { resolve } from 'path';
import { promises } from 'fs';

const appsPath = resolve('./data/apps.yaml');
const outputPath = resolve('./build');
const { readFile, writeFile } = promises;

const txt = await readFile(appsPath, 'utf-8');
const apps = YAML.parse(txt);
const redirects = apps.map((e) => ({
	source: `/${e.path}/*`,
	target: `https://${e.netlifyId}.netlify.app/:splat`
}));

const sourcePad = Math.max(...redirects.map((e) => e.source.length));
const targetPad = Math.max(...redirects.map((e) => e.target.length));

const rows = redirects
	.map((e) => `${e.source.padEnd(sourcePad)}  ${e.target.padEnd(targetPad)}  200`)
	.join('\n');

await writeFile(resolve(outputPath, '_redirects'), rows, 'utf-8');
