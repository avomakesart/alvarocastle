import Head from 'next/head';
import React, { useState } from 'react';
import { Container, Error, Loader, Projects } from '../../components';
import { useProjectsQuery } from '../../generated/graphql';
import { withApollo } from '../../utils';

interface ProjectsPageProps {}

const ProjectsPage: React.FC<ProjectsPageProps> = ({}) => {
  const { data, error, loading } = useProjectsQuery({
    variables: { limit: 15, cursor: '' },
    notifyOnNetworkStatusChange: true,
  });

  const projects = data?.projects.projects;
  const [categories] = useState<string[] | string>('all');

  return (
    <>
      <Head>
        <title>AC - Work</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container
        title='All the projects'
        style={{ padding: 24, maxWidth: '100%', marginTop: '6.5rem' }}
      >
        {error && (
          <Error errorType='500' description='Sorry something went wrong' />
        )}
        {loading && <Loader />}
        <Projects projects={projects} categories={categories} />
      </Container>
    </>
  );
};

export default withApollo({ ssr: true })(ProjectsPage);
