import Head from 'next/head';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

import styles from '@/styles/MetaData.module.css';

const MetaData = ({
  title,
  description,
  keywords,
  children
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

MetaData.defaultProps = {
  title: 'Events In - ',
  description: 'Search for events happening around you',
  keywords: ['eventsin', 'events-in', 'events-in']
};

export default MetaData;