import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import {
  Button,
  CardForm,
  DateInput,
  Input,
  SideBarLayout,
} from '../../../../components';
import { useCreateCertificateMutation } from '../../../../generated/graphql';
import { useIsAuth } from '../../../../hooks';
import { withApollo } from '../../../../utils';

const CreateCertificate = () => {
  const router = useRouter();
  const [createCertificate] = useCreateCertificateMutation();
  const [certDate, setCertDate] = useState<any>('');
  useIsAuth();

  return (
    <SideBarLayout sectionTitle='Create Certificate'>
      <Formik
        initialValues={{
          title: '',
          issuer: '',
          companyImg: '',
          date: '',
          certId: '',
          certUrl: '',
        }}
        onSubmit={async (values) => {
          console.log(values);
          const { errors } = await createCertificate({
            variables: { input: values },
            update: (cache) => {
              cache.evict({ fieldName: 'certificates:{}' });
            },
          });
          if (!errors) router.push('/');
        }}
      >
        {({ values, handleChange }) => (
          <CardForm>
            {' '}
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
                text='Create Certificate'
              />
            </Form>
          </CardForm>
        )}
      </Formik>
    </SideBarLayout>
  );
};

export default withApollo({ ssr: false })(CreateCertificate);
