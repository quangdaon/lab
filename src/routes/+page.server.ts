import YAML from 'yaml';
import fs from 'fs';

export function load() {
	var yaml = fs.readFileSync('./data/apps.yaml', 'utf-8');
	var apps = YAML.parse(yaml);
	return {
		apps
	};
}
