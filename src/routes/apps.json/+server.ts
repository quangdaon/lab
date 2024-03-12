import YAML from 'yaml';
import fs from 'fs';
import { json } from '@sveltejs/kit';

export function GET() {
	var yaml = fs.readFileSync('./data/apps.yaml', 'utf-8');
	var apps = YAML.parse(yaml);
	return json(apps);
}

export const prerender = true;
