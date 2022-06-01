import Head from 'next/head';
import { useRouter } from 'next/router';

import MaxWidthWrapper from '../max-width-wrapper/max-width-wrapper';

export default function ErrorPage() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>🚧 Ed in the Clouds - Not found</title>
      </Head>

      <MaxWidthWrapper>
        <button
          className="my-16 text-xl tracking-wide duration-150 ease-in-out transform rounded-full shadow-md w-52 h-14 bg-purple hover:scale-110"
          onClick={handleGoBack}
        >
          Go Back
        </button>
      </MaxWidthWrapper>
    </>
  );
}
