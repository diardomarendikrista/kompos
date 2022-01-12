import styles from './About.module.css';
import Layout from '../../Layout/layout';

export default function AboutUs() {
	return (
		<Layout>
			<div className={styles.wrapper}>
				<div>
					<h3>Selamat datang di page berita percobaan</h3>
					<p>
						KOMPAS adalah surat kabar nasional Indonesia dari Jakarta yang
						terbit sejak 28 Juni 1965. Surat kabar ini diterbitkan oleh PT
						KOMPAS Media Nusantara yang merupakan bagian dari KOMPAS Gramedia.
						Kantor pusatnya terletak di Menara KOMPAS Lt. 5, Jl. Palmerah
						Selatan No. 21, Gelora, Tanah Abang,
					</p>
					<p>
						Tapi sayang sekali, ini adalah website KOMPOS yang tidak berafiliasi
						sama sekali dengan KOMPAS grup media, ini hanyalah website untuk
						test dan belajar saja terinspirasi dari sana
					</p>
				</div>
			</div>
		</Layout>
	);
}
