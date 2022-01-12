import React from 'react';
import Head from 'next/head';
import Layout from '../Layout/layout';
import CardNews from '../components/CardNews';

import axios from '../axios/axios';

export default function NewsPage({ news }) {
	return (
		<Layout>
			<Head>
				<title>KOMPOS - Berita siapapun bisa tulis</title>
				<meta
					name="description"
					content="Portal berita terpercaya terupdate tergantung siapa yang input!"
				/>

				<meta property="og:type" content="website" />
				<meta property="og:url" content="http://140.0.152.41:3000/" />
				<meta
					property="og:title"
					content="KOMPOS - Berita siapapun bisa tulis"
				/>
				<meta
					property="og:description"
					content="Portal berita terpercaya terupdate tergantung siapa yang input!"
				/>
				<meta
					property="og:image"
					content="http://4.bp.blogspot.com/-laQY9R4lgyg/UyoTAQmK94I/AAAAAAAAGX8/o1v3cjkZjtU/s1600/iklan+koran+kompas.png"
				/>
			</Head>
			<div>
				<h1>Berita terbaru</h1>
				<hr />
				<div>
					{news &&
						news.map((item, i) => (
							<div key={i} className="mb-2">
								<CardNews news={item} />
								<hr />
							</div>
						))}
				</div>
			</div>
		</Layout>
	);
}

export async function getStaticProps() {
	try {
		const { data } = await axios.get('/news?_sort=id&_order=desc');
		// console.log(data, 'INI DATA');
		return {
			props: {
				news: data,
			},
			revalidate: 1,
		};
	} catch (error) {
		console.log(error);
		return;
	}
}
