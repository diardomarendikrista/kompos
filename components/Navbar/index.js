import styles from './Navbar.module.css';
import Link from 'next/link';

export default function NavBar() {
	return (
		<div className={styles.wrapper}>
			<div>
				<Link href="/add-news">
					<h1><i>KOMPOS<span className='text-danger'>.com</span></i></h1>
				</Link>
			</div>
			<div className="d-flex mb-2">
				<div className="me-3">
					<Link href="/">BERANDA</Link>
				</div>
				<div className="me-3">
					<Link href="/about-us">TENTANG KAMI</Link>
				</div>
			</div>
		</div>
	);
}
