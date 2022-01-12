import styles from './CardNews.module.css';
import Link from 'next/link';

export default function CardNews({ news }) {
	return (
		<div className={styles.card}>
			<div>
				<img src={news.imageUrl ?? ''} alt={news.title} width={'300px'} />
			</div>
			<div className="ms-2 me-2">
				<div>
					<Link href={`/${news.id}`}>
						<h3 className={styles.title}>{news.title ?? ''}</h3>
					</Link>
				</div>
				<div className={styles.description}>
					<p>{news.description ?? ''}</p>
				</div>
				<div className={styles.detail}>
					<Link href={`/${news.id}`}>baca selengkapnya &gt;&gt;</Link>
				</div>
			</div>
		</div>
	);
}
