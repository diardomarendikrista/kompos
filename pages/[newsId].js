import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../Layout/layout';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { imageErrorHandler } from '../config/utils/globalFunctions';

import axios from '../axios/axios';

export default function DetailPage({ newsData }) {
	const [useDefaultImg, setUseDefaultImg] = React.useState(false);
	const router = useRouter();

	const { newsId } = router.query;
	const deletePost = async () => {
		if (confirm('Yakin menghapus berita ini?')) {
			const { data } = await axios.delete(`/news/${newsId}`);
			if (data) {
				router.push('/');
			}
		}
	};

	if (router.isFallback) {
		return <div>Loading...</div>;
	}

	const myLoader = ({ src, width, quality }) => {
		return `${newsData.imageUrl}/${src}?w=${width}&q=${quality || 75}`;
	};

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
					content={`KOMPOS - ${
						newsData.title ?? 'berita terupdate tergantung yang nulis'
					}`}
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
						{!useDefaultImg ? (
							<Image
								loader={myLoader}
								src={'image.png'}
								alt={newsData.title}
								width={500}
								height={300}
								onError={() => {
									setUseDefaultImg(true);
								}}
							/>
						) : (
							<img
								src={
									newsData.imageUrl ??
									'https://lustersnewfaceofpinkintl.com/wp-content/uploads/2020/04/image-coming-soon.jpg'
								}
								alt={newsData.title}
								style={{ maxHeight: '350px', maxWidth: '100%' }}
								onError={(e) => {
									imageErrorHandler(e);
								}}
							/>
						)}
					</div>
				</div>
				<div className="mb-5">
					<p>{newsData.description ?? ' '}</p>
				</div>
			</div>
		</Layout>
	);
}

// export async function getStaticPaths() {
// 	const { data } = await axios.get('/news');

// 	return {
// 		fallback: true,
// 		paths: data.map((news) => ({
// 			params: {
// 				newsId: news.id.toString(),
// 			},
// 		})),
// 	};
// }

// export async function getStaticProps(context) {
// 	const newsId = context.params.newsId;

// 	try {
// 		const { data } = await axios.get(`/news/${newsId}`);
// 		// console.log(data, 'INI DATA');
// 		return {
// 			props: {
// 				newsData: data,
// 			},
// 		};
// 	} catch (error) {
// 		console.log(error);
// 		return;
// 	}
// }

export async function getServerSideProps(context) {
	const newsId = context.params.newsId;

	try {
		const { data } = await axios.get(`/news/${newsId}`);
		// console.log(data, 'INI DATA');
		if (!data) {
			return {
				redirect: {
					destination: '/no-data',
				},
			};
		}

		if (data?.newsData?.length <= 0) {
			return { notFound: true };
		}

		return {
			props: {
				newsData: data,
			},
		};
	} catch (error) {
		console.log(error);
		return { notFound: true };
	}
}
