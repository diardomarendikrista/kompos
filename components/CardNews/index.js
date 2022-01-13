import React from 'react';
import styles from './CardNews.module.css';
import Link from 'next/link';
// import Image from 'next/image';
// import { imageErrorHandler } from '../../config/utils/globalFunctions';

export default function CardNews({ news }) {
	// const [useDefaultImg, setUseDefaultImg] = React.useState(false);

	// const myLoader = ({ src, width, quality }) => {
	// 	return `${news.imageUrl}/${src}?w=${width}&q=${quality || 75}`;
	// };

	return (
		<div className={styles.card}>
			<div>
				<div className={styles.imagecontainer}>
					{/* {!useDefaultImg ? (
						<Image
							loader={myLoader}
							src={'image.png'}
							alt={news.title}
							width={300}
							height={200}
							onError={() => {
								setUseDefaultImg(true);
							}}
						/>
					) : ( */}
						<img
							src={news.imageUrl ?? ''}
							alt={news.title}
							width={'100%'}
							// onError={(e) => {
							// 	imageErrorHandler(e);
							// }}
						/>
					{/* )} */}
				</div>
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
