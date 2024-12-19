import { getRepositoryDetails } from '../../utils';

export interface Project {
	name: string;
	demoLink: string;
	tags?: string[];
	description?: string;
	postLink?: string;
	demoLinkRel?: string;
	[key: string]: any;
}

export const projects: Project[] = [
	{
		name: 'Blog',
		description: 'A blog that sharing web development resources and tutorials',
		demoLink: '#',
		tags: ['Blog']
	},
	{
		name: 'Example.com',
		description: 'Example website',
		demoLink: 'https://example.com',
		demoLinkRel: 'nofollow noopener noreferrer',
		tags: ['HTML', 'CSS']
	},
	{
		...(await getRepositoryDetails('cloudflare/workers-rs')),
		name: 'Workers-rs',
		demoLink: 'https://github.com/cloudflare/workers-rs',
		postLink: 'https://github.com/cloudflare/workers-rs',
		tags: ['Rust']
	}
];
