import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

async function getStaticProps() {
  const res = await fetch(`https://api.thecatapi.com/v1/images/search`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default function Custom404() {
  const [catImage, setCatImage] = useState<any>([]) as any;
  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      const resp = (await getStaticProps()).props;
      const result = await resp?.data;
      setCatImage(...result);
    };

    getData();

    return () => {};
  }, []);

  return (
    <div className='flex items-center justify-center w-full min-h-screen bg-gray-100'>
      <div className='flex flex-col text-gray-700 lg:flex-row lg:space-x-16 lg:space-x-reverse'>
        <div className='order-1 max-w-md px-2 text-sm md:text-base lg:px-0'>
          <header className='mb-6'>
            <h2 className='text-4xl font-bold leading-none text-gray-400 select-none lg:text-6xl'>
              404.
            </h2>
            <h3 className='text-xl font-light leading-normal lg:text-3xl md:text-3xl'>
              Sorry, we couldn't find this page.
            </h3>
          </header>

          <p className='max-w-sm mb-5 leading-5 md:leading-7'>
            Don't worry, sometimes even we make mistakes. You can find plenty of
            other things on our homepage.
          </p>

          <button
            onClick={() => router.back()}
            className='inline px-4 py-2 text-sm font-medium leading-5 text-white uppercase transition-colors duration-150 bg-black border border-transparent rounded-lg shadow focus:outline-none focus:shadow-outline-blue active:bg-gray-600 hover:bg-gray-700'
          >
            Go Back
          </button>
        </div>

        <div className='max-w-lg min-h-96'>
          <img
            src={catImage.url}
            alt='Cat'
            className='w-full max-w-sm'
            width='400'
          />
        </div>
      </div>
    </div>
  );
}
