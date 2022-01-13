import { Wrapper, TopSection, BotSection } from './styles';
import Layout from '../../Layout/layout';
import Link from 'next/link';

export default function ErrorNotFound() {
	return (
		<Layout fullWrapper={true}>
			<Wrapper>
				<TopSection>
					<h2>&bull; ERROR &bull;</h2>
					<h1>404</h1>
				</TopSection>
				<BotSection>
					<div className="border-notfound mb-1" />
					<h4>Halaman tidak ditemukan</h4>
				</BotSection>
				<div className="mt-2">
					<Link href="/">
						<button className="btn btn-outline-secondary">
							kembali ke halaman utama
						</button>
					</Link>
				</div>
			</Wrapper>
		</Layout>
	);
}
