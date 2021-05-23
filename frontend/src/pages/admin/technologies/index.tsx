import Link from 'next/link';
import React from 'react';
import { PlusIcon } from '../../../assets/icons/PlusIcon';
import { Error, Loader, SideBarLayout, Table } from '../../../components';
import { useSkillsQuery } from '../../../generated/graphql';
import { useIsAuth } from '../../../hooks';
import { withApollo } from '../../../utils';

const Technologies = () => {
  const { data, error, loading } = useSkillsQuery({
    variables: { limit: 30, cursor: '' },
    notifyOnNetworkStatusChange: true,
  });
  useIsAuth();

  const technologies = data?.skills.skills as any;

  return (
    <SideBarLayout sectionTitle='Technologies'>
      <div className='flex justify-end mb-4'>
        <div className='flex bg-white border border-gray text-black p-3 cursor-pointer'>
          <PlusIcon />
          <Link href='/admin/technologies/create'>Add</Link>
        </div>
      </div>
      {error && <Error errorType='500' description='Something went wrong' />}
      {loading && <Loader />}
      {!technologies ? (
        'No data Yet'
      ) : (
        <Table colHeaders={['id']} tableData={technologies} />
      )}
    </SideBarLayout>
  );
};

export default withApollo({ ssr: true })(Technologies);
