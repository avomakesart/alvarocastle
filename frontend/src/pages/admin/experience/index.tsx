import { format } from 'date-fns';
import Link from 'next/link';
import React from 'react';
import { PlusIcon } from '../../../assets/icons/PlusIcon';
import { TrashIcon } from '../../../assets/icons/TrashIcon';
import { Error, Loader, SideBarLayout, Table } from '../../../components';
import {
  useDeleteExperienceMutation,
  useExperiencesQuery,
} from '../../../generated/graphql';
import { useIsAuth } from '../../../hooks';
import { dateConverter, withApollo } from '../../../utils';

const Experience = () => {
  const { data, error, loading } = useExperiencesQuery({
    variables: { limit: 30, cursor: '' },
    notifyOnNetworkStatusChange: true,
  });

  const [deleteExperience] = useDeleteExperienceMutation();
  useIsAuth();

  const handleDelete = (id: any) => {
    return deleteExperience({
      variables: { id },
      update: (cache) => {
        cache.evict({ id: 'Experience:' + id });
      },
    });
  };

  const experienceData =
    data?.experiences.experience.length === 0
      ? ['No data Yet']
      : (data?.experiences.experience.map((data: any) => {
          const {
            id,
            company,
            position,
            period,
            description,
            createdAt,
            updatedAt,
          } = data;

          const expDescription = (
            <div
              dangerouslySetInnerHTML={{ __html: description.slice(0, 100) }}
            />
          );

          const deleteButton = (
            <button onClick={() => handleDelete(id)}>
              <TrashIcon />
            </button>
          );

          const createdDate = format(dateConverter(createdAt), 'P');
          const updatedDate = format(dateConverter(updatedAt), 'P');

          return {
            id,
            company,
            position,
            period,
            expDescription,
            createdDate,
            updatedDate,
            deleteButton,
          };
        }) as any);

  return (
    <SideBarLayout sectionTitle='Experience'>
      <div className='flex justify-end mb-4'>
        <div className='flex bg-white border border-gray text-black p-3'>
          <PlusIcon />
          <Link href='/admin/experience/create'>Add</Link>
        </div>
      </div>
      {error && <Error errorType='500' description='Something went wrong' />}
      {loading ? (
        <Loader />
      ) : (
        <Table
          colHeaders={[
            'ID',
            'Company',
            'Position',
            'Period',
            'Description',
            'Created At',
            'Updated At',
            'Actions',
          ]}
          tableData={experienceData}
        />
      )}
    </SideBarLayout>
  );
};

export default withApollo({ ssr: true })(Experience);
