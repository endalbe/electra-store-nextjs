import Head from 'next/head';
import styles from '../scss/pages/404.module.scss';
import { useRouter } from 'next/router';

const PageNotFound = () => {
	const router = useRouter();

	return (
		<div className={styles.wrapper}>
			<Head>
				<title>404 – Electra</title>
			</Head>
			<div className={styles.infoWrapper}>
				<div className={styles.titlePage}>Page not found</div>
				<div className={styles.text404}>404</div>
				<div className={styles.moreInfoText}>
					The page you are looking for was moved, removed or maybe
					never existed. Please go to the main page.
				</div>

				<button
					type="button"
					onClick={() => router.back()}
					className={styles.goHomeBtn}
				>
					Go back
				</button>
			</div>
		</div>
	);
};

export default PageNotFound;
