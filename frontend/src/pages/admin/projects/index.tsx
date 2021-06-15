import { format } from 'date-fns';
import Link from 'next/link';
import React from 'react';
import { PlusIcon } from '../../../assets/icons/PlusIcon';
import { Error, Loader, SideBarLayout, Table } from '../../../components';
import { useProjectsQuery } from '../../../generated/graphql';
import { useIsAuth } from '../../../hooks';
import { dateConverter, withApollo } from '../../../utils';

const Projects = () => {
  const { data, error, loading } = useProjectsQuery({
    variables: { limit: 30, cursor: '' },
    notifyOnNetworkStatusChange: true,
  });
  useIsAuth();

  const projects = data?.projects.projects;

  const projectData = projects?.map((item: any) => {
    const {
      id,
      title,
      headline,
      featuredImage,
      category,
      description,
      createdAt,
      updatedAt,
    } = item;

    const projectTitle = (
      <Link href={`/admin/projects/edit/${id}`}>{title}</Link>
    );
    const createdDate = format(dateConverter(createdAt), 'P');
    const updatedDate = format(dateConverter(updatedAt), 'P');
    const projectImg = <img src={featuredImage} alt={title} />;
    const projectDesc = (
      <div dangerouslySetInnerHTML={{ __html: description.slice(0, 100) }} />
    );

    return {
      id,
      projectTitle,
      headline,
      projectImg,
      category,
      projectDesc,
      createdDate,
      updatedDate,
    };
  }) as any;

  return (
    <SideBarLayout sectionTitle='Projects'>
      <div className='flex justify-end mb-4'>
        <div className='flex bg-white border border-gray text-black p-3'>
          <PlusIcon />
          <Link href='/admin/projects/create'>Add</Link>
        </div>
      </div>
      {error && <Error errorType='500' description='Something went wrong' />}
      {loading && <Loader />}
      {data?.projects.projects.length === 0 ? (
        'No data Yet'
      ) : (
        <Table
          colHeaders={[
            'ID',
            'Title',
            'Headline',
            'Featured Image',
            'Category',
            'Description',
            'Created At',
            'Updated At',
          ]}
          tableData={projectData}
        />
      )}
    </SideBarLayout>
  );
};

export default withApollo({ ssr: false })(Projects);
