import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import {
  Button,
  CardForm,
  DateInput,
  Error,
  Input,
  SideBarLayout,
} from '../../../components';
import { useUpdateCertificateMutation } from '../../../generated/graphql';
import { useGetCertificateFromUrl, useGetIntId, useIsAuth } from '../../../hooks';

import { withApollo } from '../../../utils';

interface UpdateCertificateProps {
  id: number;
  title: string;
  date: string;
  certId: string;
  issuer: string;
  companyImg: string;
  certUrl: string;
}

const UpdateCertificate: React.FC<UpdateCertificateProps> = () => {
  const [certDate, setCertDate] = useState<any>('');
  const { data, error, loading } = useGetCertificateFromUrl();
  const [updateCertificate] = useUpdateCertificateMutation();
  const intId = useGetIntId();
  const router = useRouter();

  useIsAuth();

  if (loading) return <div>Loading...</div>;
  if (!data?.certificate) return <div>Could not found post.</div>;

  return (
    <SideBarLayout sectionTitle={data.certificate.title}>
      {error && <Error errorType='500' description='Something went wrong.' />}
      <Formik
        initialValues={{
          title: data.certificate.title,
          issuer: data.certificate.issuer,
          companyImg: data.certificate.companyImg,
          date: data.certificate.date,
          certId: data.certificate.certId,
          certUrl: data.certificate.certUrl,
        }}
        onSubmit={async (values) => {
          console.log(values);

          await updateCertificate({
            variables: { id: intId, ...values } as any,
          });
          router.back();
        }}
      >
        {({ values, handleChange }) => (
          <CardForm>
            <Form>
              <div className='relative flex flex-col mb-6'>
                <Input
                  label='Certificate Title:'
                  htmlFor='Title'
                  type='text'
                  id='certTitle'
                  placeHolder='Awesome course'
                  value={values.title}
                  onChange={handleChange}
                  name='title'
                />
              </div>
              <div className='relative flex flex-col my-6'>
                <Input
                  label='Certificate Issuer'
                  htmlFor='Issuer'
                  type='text'
                  id='certIssuer'
                  placeHolder='Ex: Udemy'
                  value={values.issuer}
                  onChange={handleChange}
                  name='issuer'
                />
              </div>
              <div className='relative flex flex-col my-6'>
                <Input
                  label='Certificate Image'
                  htmlFor='companyImg'
                  type='text'
                  id='certCompanyImg'
                  placeHolder='Cool image/logo url'
                  value={values.companyImg}
                  onChange={handleChange}
                  name='companyImg'
                />
              </div>
              <div className='relative flex flex-col my-6'>
                {console.log(certDate)}
                <DateInput
                  label='Certificate Date:'
                  htmlFor='Date'
                  id='date'
                  placeHolder='Certificate Date'
                  value={certDate}
                  onChange={(e: any) => setCertDate(e)}
                  selected={certDate}
                  name='date'
                />
                <input
                  value={(values.date = certDate)}
                  onChange={handleChange}
                  style={{ display: 'none' }}
                />
              </div>
              <div className='relative flex flex-col my-6'>
                <Input
                  label='Certificate ID:'
                  htmlFor='CertId'
                  type='text'
                  id='certId'
                  placeHolder='Certificate id'
                  value={values.certId}
                  onChange={handleChange}
                  name='certId'
                />
              </div>
              <div className='relative flex flex-col my-6'>
                <Input
                  label='Certificate Url'
                  htmlFor='Certificate URL'
                  type='text'
                  id='certUrl'
                  placeHolder='Certificate URL'
                  value={values.certUrl}
                  onChange={handleChange}
                  name='certUrl'
                />
              </div>
              <Button
                textColor='white'
                hasBorder={true}
                borderColor='white'
                backgroundColor='black'
                text='Update Certificate'
              />
            </Form>
          </CardForm>
        )}
      </Formik>
    </SideBarLayout>
  );
};

export default withApollo({ ssr: true })(UpdateCertificate);
