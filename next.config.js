const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/
});

/** @type {import('next').NextConfig} */
module.exports = withMDX({
	swcMinify: true,
	// pageExtensions: ['js', 'jsx', 'md', 'mdx'],
	images: {
		domains: ['pbs.twimg.com', 'images.unsplash.com'],
		formats: ['image/avif', 'image/webp'],
	},
	webpack: (config, { isServer }) => {
		// if (isServer) {
		// 	require('./utils/rss');
		// }

		return config;
	}
});
