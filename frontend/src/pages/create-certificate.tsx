import React from 'react';
import { withApollo } from '../utils';
import { Container } from '../components';
import { Button } from '../components/Button/Button';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { useCreateCertificateMutation } from '../generated/graphql';
import { useIsAuth } from '../hooks/';
import { Input } from '../components/Input/Input';

interface CreateCertificateProps {}

const CreateCertificate: React.FC<CreateCertificateProps> = ({}) => {
  const router = useRouter();
  useIsAuth();
  const [createCertificate] = useCreateCertificateMutation();

  return (
    <Container title='Create Certificate'>
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
          <section className='text-gray-700 body-font'>
            <div className='container px-8 pb-24 mx-auto lg:px-4'>
              <div className='flex flex-col w-full p-8 mx-auto mt-10 border rounded-lg lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0'>
                <Form>
                  <div className='relative flex flex-col'>
                    <Input
                      label='Certificate Title:'
                      labelColor='white'
                      focusColor='white'
                      textAlign='text-left'
                      htmlFor='Title'
                      type='text'
                      id='certTitle'
                      placeholder='Awesome course'
                      value={values.title}
                      onChange={handleChange}
                      name='title'
                    />
                  </div>
                  <div className='relative flex flex-col'>
                    <Input
                      label='Certificate Issuer'
                      labelColor='white'
                      focusColor='white'
                      textAlign='text-left'
                      htmlFor='Issuer'
                      type='text'
                      id='certIssuer'
                      placeholder='Ex: Udemy'
                      value={values.issuer}
                      onChange={handleChange}
                      name='issuer'
                    />
                  </div>
                  <div className='relative flex flex-col'>
                    <Input
                      label='Certificate Image'
                      labelColor='white'
                      focusColor='white'
                      textAlign='text-left'
                      htmlFor='companyImg'
                      type='text'
                      id='certCompanyImg'
                      placeholder='Cool image/logo url'
                      value={values.companyImg}
                      onChange={handleChange}
                      name='companyImg'
                    />
                  </div>
                  <div className='relative flex flex-col'>
                    {values.date}
                    <Input
                      label='Certificate Date:'
                      labelColor='white'
                      focusColor='white'
                      textAlign='text-left'
                      htmlFor='Date'
                      type='date'
                      id='date'
                      placeholder='Certificate Date'
                      value={values.date}
                      onChange={handleChange}
                      name='date'
                    />
                  </div>
                  <div className='relative flex flex-col'>
                    <Input
                      label='Certificate ID:'
                      labelColor='white'
                      focusColor='white'
                      textAlign='text-left'
                      htmlFor='CertId'
                      type='text'
                      id='certId'
                      placeholder='Certificate id'
                      value={values.certId}
                      onChange={handleChange}
                      name='certId'
                    />
                  </div>
                  <div className='relative flex flex-col'>
                    <Input
                      label='Certificate Url'
                      labelColor='white'
                      focusColor='white'
                      textAlign='text-left'
                      htmlFor='Certificate URL'
                      type='text'
                      id='certUrl'
                      placeholder='Certificate URL'
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
                    text='Create Category'
                  />
                </Form>
              </div>
            </div>
          </section>
        )}
      </Formik>
    </Container>
  );
};

export default withApollo({ ssr: false })(CreateCertificate);
