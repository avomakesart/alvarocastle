import { format } from 'date-fns';
import Link from 'next/link';
import React from 'react';
import { PlusIcon } from '../../../assets/icons/PlusIcon';
import { Error, Loader, SideBarLayout, Table } from '../../../components';
import { useCertificatesQuery } from '../../../generated/graphql';
import { useIsAuth } from '../../../hooks';
import { dateConverter, withApollo } from '../../../utils';

const Certificates = () => {
  const { data, error, loading } = useCertificatesQuery({
    variables: { limit: 30, cursor: '' },
    notifyOnNetworkStatusChange: true,
  });

  useIsAuth();

  const certificates = data?.certificates.certificates;

  const certData = certificates?.map((data: any) => {
    const {
      id,
      title,
      issuer,
      companyImg,
      date,
      certId,
      certUrl,
      createdAt,
      updatedAt,
    } = data;

    const certImage = <img src={companyImg} alt={title} />;

    const createdDate = format(dateConverter(createdAt), 'P');
    const updatedDate = format(dateConverter(updatedAt), 'P');
    const certTitle = <Link href={`/admin/certificates/${id}`}>{title}</Link>;

    return {
      id,
      certTitle,
      issuer,
      certImage,
      date,
      certId,
      certUrl,
      createdDate,
      updatedDate,
    };
  }) as any;

  return (
    <SideBarLayout sectionTitle='Certificates'>
      <div className='flex justify-end mb-4'>
        <div className='flex bg-white border border-gray text-black p-3'>
          <PlusIcon />
          <Link href='/admin/certificates/create'>Add</Link>
        </div>
      </div>
      {error && <Error errorType='500' description='Something went wrong' />}
      {loading ? (
        <Loader />
      ) : (
        <Table
          colHeaders={[
            'id',
            'Title',
            'Issuer',
            'Image',
            'Date',
            'Cert ID',
            'URL',
            'Created At',
            'Updated At',
          ]}
          tableData={certData}
        />
      )}
    </SideBarLayout>
  );
};

export default withApollo({ ssr: false })(Certificates);
