import Head from 'next/head';
import { useRouter } from 'next/router';

import Layout from '../components/common/layout';

const NotFoundPage: React.FC = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <Layout>
      <Head>
        <title>🚧 Mutatio - Not Found</title>
      </Head>

      <button
        className="mt-16 text-xl tracking-wide duration-150 ease-in-out transform rounded-full shadow-md w-52 h-14 bg-purple hover:scale-110"
        onClick={handleGoBack}
      >
        Go Back
      </button>
    </Layout>
  );
};

export default NotFoundPage;
