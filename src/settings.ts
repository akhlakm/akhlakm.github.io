export const profile = {
	fullName: 'Akhlak Mahmood',
	title: 'Product Innovation Manager',
	institute: 'Matmerize, Inc.',
	instituteUrl: 'https://www.matmerize.com',
	author_name: 'A. Mahmood', // Author name to be highlighted in the papers section
	research_areas: [],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: '',
	linkedin: 'https://linkedin.com/in/akhlakm',
	x: '',
	bluesky: '',
	github: 'https://github.com/akhlakm',
	gitlab: '',
	scholar: 'https://scholar.google.com/citations?user=S-uoOngAAAAJ',
	inspire: '',
	arxiv: '',
	orcid: '',
}

export const template = {
	website_url: 'https://akhlakm.github.io', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'light', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '' // Repository name starting with /
}

export const seo = {
	default_title: 'Akhlak Mahmood — Polymer Informatics & AI-Accelerated Materials Discovery',
	default_description: 'Materials scientist working on polymer informatics and AI-accelerated materials discovery. Industrial polymer design for packaging, coatings, fuel cells, batteries, and energy storage.',
	default_image: '/og-image.jpg',
}
