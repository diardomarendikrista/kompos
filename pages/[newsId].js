import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../Layout/layout';
import Link from 'next/link';
import Head from 'next/head';
import axios from '../axios/axios';

export default function DetailPage({ newsData }) {
	const router = useRouter();

	const { newsId } = router.query;
	const deletePost = async () => {
		if (confirm('Yakin menghapus berita ini?')) {
			const { data } = await axios.delete(`/news/${newsId}`);
			if (data) {
				router.push('/');
			}
		} else {
			// Do nothing!
		}
	};

  if (router.isFallback) {
    return <div>Loading...</div>
  }

	return (
		<Layout>
			<Head>
				<title>
					KOMPOS - {newsData.title ?? 'berita terupdate tergantung yang nulis'}
				</title>
				<meta
					name="description"
					content={
						newsData.description ??
						'Portal berita terpercaya terupdate dan pastinya akurat! (tergantung siapa yang input pastinya!)'
					}
				/>

				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://kompos.vercel.app" />
				<meta
					property="og:title"
					content={`KOMPOS - ${newsData.title ?? 'berita terupdate tergantung yang nulis'}`}
				/>
				<meta
					property="og:description"
					content={
						newsData.description ??
						'Portal berita terpercaya terupdate dan pastinya akurat! (tergantung siapa yang input pastinya!)'
					}
				/>
				<meta
					property="og:image"
					content={
						newsData.imageUrl ??
						'https://lustersnewfaceofpinkintl.com/wp-content/uploads/2020/04/image-coming-soon.jpg'
					}
				/>
			</Head>
			<div>
				<div>
					<Link href="/">&larr; kembali</Link>
				</div>
				<div className="d-flex">
					<h1>{newsData.title ?? ''}</h1>
					<span
						className="text-danger cursor-pointer"
						onClick={() => deletePost()}
					>
						x
					</span>
				</div>
				<div className="mb-2">
					<div className="detail-image">
						<img
							src={
								newsData.imageUrl ??
								'https://lustersnewfaceofpinkintl.com/wp-content/uploads/2020/04/image-coming-soon.jpg'
							}
							alt={newsData.title}
							style={{ maxHeight: '350px', maxWidth: '100%' }}
						/>
					</div>
				</div>
				<div className="mb-5">
					<p>{newsData.description ?? ' '}</p>
				</div>
			</div>
		</Layout>
	);
}

export async function getStaticPaths() {
	const { data } = await axios.get('/news');

	return {
		fallback: false,
		paths: data.map((news) => ({
			params: {
				newsId: news.id.toString(),
			},
		})),
	};
}

export async function getStaticProps(context) {
	const newsId = context.params.newsId;

	try {
		const { data } = await axios.get(`/news/${newsId}`);
		// console.log(data, 'INI DATA');
		return {
			props: {
				newsData: data,
			},
		};
	} catch (error) {
		console.log(error);
		return;
	}
}
