import Head from 'next/head';

import Container from '@/components/Container';
import Header from '@/components/Header';
import Aside from '@/components/Aside';
import Main from '@/components/Main';
import Article from '@/components/Article';
import Footer from '@/components/Footer';

import { posts } from '../posts.js';

export default function Home({ posts }) {
	return (
		<>
			<Head>
				<title>Blog</title>
				<link rel="icon" href="/favicon.png" type="image/png"/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				<meta
					name="description"
					content="Personal blog by Preet"
				/>
				<meta property="og:title" content="preetjdp.dev" />
				<meta
					property="og:image"
					content="https://avatars.githubusercontent.com/u/41994701"
				/>
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="Al Joseph Condino" />
				<meta
					property="og:description"
					content="Personal blog by Preet"
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@TmPreet" />
				<meta name="twitter:title" content="preetjdp.dev" />
				<meta
					name="twitter:description"
					content="Personal blog by Preet Parekh"
				/>
				<meta
					name="twitter:image"
					content="https://avatars.githubusercontent.com/u/41994701"
				/>
			</Head>
			<Container>
				<Header />
				<Aside />
				<Main>
					{posts && posts.length > 0
						? posts.map((post) => <Article key={post.slug} {...post} />)
						: null}
				</Main>
				<Footer />
			</Container>
		</>
	);
}

export async function getStaticProps() {
	return {
		props: { posts }
	};
}
