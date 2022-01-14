import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.body}>
				<div>
					<h1 className="m-0 p-0">
						<i>
							KOMPOS<span className="text-danger">.com</span>
						</i>
					</h1>
					<span className="text-danger">Jernih melihat yang bening bening</span>
					<div className="mt-3 mb-1">dibuat menggunakan</div>
					<div className="d-flex">
						<div className={styles.logo}>
							<img
								src="https://adelanegara.github.io/img/next_logo.png"
								alt="next"
								width={'50px'}
								height={'50px'}
								className="me-2"
							/>
						</div>
						<div className={styles.logo}>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
								alt="js"
								width={'50px'}
								height={'50px'}
							/>
						</div>
					</div>
				</div>
				<div className="d-flex flex-column align-items-end">
					<div className="mb-2">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
							alt="fb"
							width={'40px'}
							height={'40px'}
							className="me-2"
						/>
						<img
							src="https://static.cdnlogo.com/logos/t/96/twitter-icon.svg"
							alt="tw"
							width={'40px'}
							height={'40px'}
							className="me-2"
						/>
						<img
							src="https://cdn.pixabay.com/photo/2021/06/15/12/17/instagram-6338401_960_720.png"
							alt="ig"
							width={'40px'}
							height={'40px'}
							className="me-2"
						/>
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/LINE_logo.svg/2048px-LINE_logo.svg.png"
							alt="line"
							width={'40px'}
							height={'40px'}
							className="me-2"
						/>
					</div>
					<div className="d-flex">
						<div>
							<Link href="/">Halaman Utama</Link> -&nbsp;
						</div>
						<div>
							<Link href="/about-us">Tentang Kami</Link>
						</div>
					</div>
					<div>
						<span className="">
							Ga ada Copyright-Copyrightan 2022 ini cuman website buat belajar.
							All Right Not Reserved
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
