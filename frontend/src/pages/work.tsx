import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import {
  Container,
  Error,
  FilterButtons,
  Loader,
  Projects,
  Repositories,
} from '../components';
import { useProjectsQuery } from '../generated/graphql';
import { withApollo } from '../utils';

interface WorkProps {}

const Work: React.FC<WorkProps> = ({}) => {
  const { data, error, loading, fetchMore, variables } = useProjectsQuery({
    variables: { limit: 6, cursor: '' },
    notifyOnNetworkStatusChange: true,
  });

  const projects = data?.projects.projects;
  const [repos, setRepos] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[] | string>('all');

  useEffect(() => {
    const getRepos = async () => {
      const getData = await fetch(
        'https://api.github.com/users/avomakesart/repos'
      );
      const resp = await getData.json();

      setRepos(resp);
    };

    getRepos();

    return () => {
      setRepos([]);
    };
  }, []);

  // Filter options
  const sortedRepos = repos.sort(
    (a: any, b: any) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );

  const showCategories = projects
    ?.slice()
    .sort((a, b) => a.category.localeCompare(b.category))
    .map((data) => data.category)
    .filter(
      (arr, index, self) => index === self.findIndex((cat) => cat === arr)
    );

  return (
    <>
      <Head>
        <title>AC - Work</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container
        title='Explore'
        style={{ padding: 24, maxWidth: '100%', marginTop: '6.5rem' }}
      >
        {loading && <Loader />}
        {error && <Error errorType='500' description={error.message} />}

        <FilterButtons
          data={showCategories}
          setState={setCategories}
          currentData={categories}
        />
        <Projects projects={projects} categories={categories} />

        <Repositories repoData={sortedRepos} />
      </Container>
    </>
  );
};

export default withApollo({ ssr: true })(Work);
