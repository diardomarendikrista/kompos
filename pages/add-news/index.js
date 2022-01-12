import React, { useState } from 'react';
import Layout from '../../Layout/layout';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function NewsPage() {
	const [title, setTitle] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const [description, setDescription] = useState('');
	const [loading, setLoading] = useState(false);

	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		if (title && imageUrl && description) {
			const saveData = {
				title,
				imageUrl,
				description,
			};

			setTitle('');
			setImageUrl('');
			setDescription('');

			const response = await fetch('api/add-news', {
				method: 'POST',
				body: JSON.stringify(saveData),
				headers: {
					'Content-Type': 'application/json',
				},
			});

			const data = await response.json();

			console.log(data, 'data hasil push');

			setLoading(false);
			router.push('/');
		} else {
			setLoading(false);
			alert('Harap isi semua form!');
		}
	};

	return (
		<Layout>
			<Head>
				<title>KOMPOS - Tambahkan Berita</title>
				<meta
					name="description"
					content="Menambahkan Berita terupdate terkini dan terpercaya, tergantung siapa yang input pastinya!"
				/>

				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://kompos.vercel.app" />
				<meta
					property="og:title"
					content="KOMPOS - Berita siapapun bisa tulis"
				/>
				<meta
					property="og:description"
					content="Menambahkan Berita terupdate terkini dan terpercaya, tergantung siapa yang input pastinya!"
				/>
				<meta
					property="og:image"
					content="http://4.bp.blogspot.com/-laQY9R4lgyg/UyoTAQmK94I/AAAAAAAAGX8/o1v3cjkZjtU/s1600/iklan+koran+kompas.png"
				/>
			</Head>
			<div className="w-lg-50 m-auto">
				<div className="d-flex justify-content-center mb-2">
					<h1>Tambah berita</h1>
				</div>
				<form onSubmit={(e) => handleSubmit(e)}>
					<div className="form-group mb-2">
						<label htmlFor="title">Judul Berita</label>
						<input
							type="text"
							className="form-control"
							id="title"
							aria-describedby="emailHelp"
							placeholder="Judul Berita"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</div>
					<div className="form-group mb-2">
						<label htmlFor="image">Link Gambar Berita</label>
						<input
							type="text"
							className="form-control"
							id="image"
							placeholder="contoh: http://www.gambar.com"
							value={imageUrl}
							onChange={(e) => setImageUrl(e.target.value)}
						/>
					</div>
					<div className="form-group mb-2">
						<label htmlFor="description">Isi Berita</label>
						<textarea
							type="text"
							className="form-control"
							id="description"
							placeholder="berita hari ini adalah..."
							rows={7}
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						/>
					</div>

					<hr />
					<button
						type="submit"
						className="btn btn-warning mb-5"
						disabled={loading ? true : false}
					>
						{loading ? 'Sedang Mempublish' : 'Publikasikan Berita'}
					</button>
				</form>
			</div>
		</Layout>
	);
}
