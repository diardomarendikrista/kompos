import { Wrapper, FullWrapper } from './styles';
import styles from './Layout.module.css';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Layout({ children, fullWrapper }) {
	return (
		<>
			<NavBar />
			<div className={styles.space}></div>
			{!fullWrapper ? (
				<Wrapper>{children}</Wrapper>
			) : (
				<FullWrapper>{children}</FullWrapper>
			)}
			<Footer />
		</>
	);
}
