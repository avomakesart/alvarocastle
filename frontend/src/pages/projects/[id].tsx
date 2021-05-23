import Head from 'next/head';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Container, Error, Loader, NavBar } from '../../components';
import { useGetProjectFromUrl } from '../../hooks';
import { withApollo } from '../../utils';

interface ProjectProps {}

const Project: React.FC<ProjectProps> = ({}) => {
  const { data, error, loading } = useGetProjectFromUrl();

  if (!data?.project) return <div>Could not found post.</div>;

  return (
    <>
      <Head>
        <title>Project - {data.project.title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NavBar />
      {error && <Error errorType='500' description='Something went wrong.' />}
      {loading && <Loader />}
      <Container title={`${data.project.title}`}>
        <h2 className='mb-20 text-2xl font-semibold text-white tracking-wide sm:text-5xl title-font'>
          {data.project.headline}
        </h2>

        <img src={data.project.headlineImage} alt={data.project.title} />

        <div className='flex flex-col mx-auto mt-10 justify-center'>
          <ReactMarkdown
            allowDangerousHtml
            className='text-white text-left text-2xl'
          >
            {data.project.description}
          </ReactMarkdown>
        </div>
      </Container>
    </>
  );
};

export default withApollo({ ssr: true })(Project);
