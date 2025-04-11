import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';
const repoName = 'Research-Project';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		paths: {
			base: dev ? '' : `/${repoName}`
		},
	}
};

export default config;
