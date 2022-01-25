import Link from 'next/link';
import { BsFillExclamationTriangleFill } from 'react-icons/bs';

import MetaData from '@/components/MetaData/MetaData';

import styles from '@/styles/404.module.css';

const NotFoundPage = () => {
  return (
    <MetaData>
      <div className={styles.error}>
        <h1><BsFillExclamationTriangleFill /> 404</h1>
        <p>Sorry, there is nothing here</p>
        <Link href="/">
          Go Back Home
        </Link>
      </div>
    </MetaData>
  );
}

export default NotFoundPage;