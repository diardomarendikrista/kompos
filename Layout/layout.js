import styles from './Layout.module.css';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Layout({ children }) {
	return (
		<>
			<NavBar />
			<div className={styles.space}></div>
			<div className={styles.body}>{children}</div>
			<Footer />
		</>
	);
}
