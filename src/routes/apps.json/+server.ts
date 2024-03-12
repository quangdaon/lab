import YAML from 'yaml';
import fs from 'fs';

export function GET() {
	var yaml = fs.readFileSync('./data/apps.yaml', 'utf-8');
	var apps = YAML.parse(yaml);
	return new Response(JSON.stringify(apps), {
		headers: { 'Content-Type': 'application/json' }
	});
}
