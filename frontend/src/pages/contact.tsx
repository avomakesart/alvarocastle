import 'animate.css';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';
import { ArrowMedium } from '../assets/icons/ArrowMedium';
import { Container } from '../components';
import { useCreateContactMutation } from '../generated/graphql';
import { useHover } from '../hooks';
import { withApollo } from '../utils';
import emailjs, { init } from 'emailjs-com';
import Head from 'next/head';

init('user_oyZbnUPFuBoCCXcacNsMz');
interface ContactProps {}

const Contact: React.FC<ContactProps> = ({}) => {
  const [hoverRef, isHovered] = useHover() as any;
  const [createContact] = useCreateContactMutation();

  const router = useRouter();

  return (
    <>
      <Head>
        <title>AC - Contact</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Formik
        initialValues={{
          fullname: '',
          subject: '',
          phone: '',
          message: '',
        }}
        onSubmit={async (values) => {
          console.log(values);
          const { errors } = await createContact({
            variables: { input: values },
          });

          emailjs
            .send('service_c3e6wd9', 'template_gZNCIK0u', {
              to_name: 'Alvaro Castillo',
              fullname: values.fullname,
              subject: values.subject,
              phone: values.phone,
              message: values.message,
            })
            .then(
              (result) => {
                console.log(result.text);
              },
              (error) => {
                console.log(error.text);
              }
            );

          if (!errors) router.push('/');
        }}
      >
        {({ values, handleChange }) => (
          <Container>
            <div className='flex flex-col justify-center md:-mt-10'>
              <Form className='mx-auto'>
                <div className='flex flex-row items-center mb-10 -mt-10'>
                  <p className='text-white text-sm md:text-4xl'>
                    Hi My name is*:
                  </p>
                  <input
                    name='fullname'
                    id='fullname'
                    value={values.fullname}
                    onChange={handleChange}
                    className='bg-transparent text-white ml-6 border-b-2 p-2 focus:outline-none text-sm md:text-4xl border-white max-w-full min-w-48'
                  />
                </div>

                <div className='flex flex-row items-center mb-10'>
                  <p className='text-white text-sm md:text-4xl'>
                    I'm contacting you regarding:
                  </p>
                  <input
                    name='subject'
                    id='subject'
                    value={values.subject}
                    onChange={handleChange}
                    className='bg-transparent text-white ml-6 border-b-2 p-2 focus:outline-none text-sm md:text-4xl border-white max-w-full min-w-48'
                  />
                </div>

                <div className='flex flex-row items-center mb-10'>
                  <p className='text-white text-sm md:text-4xl'>
                    You can reach me at*:
                  </p>
                  <input
                    name='phone'
                    id='phone'
                    value={values.phone}
                    onChange={handleChange}
                    className='bg-transparent text-white ml-6 border-b-2 p-2 focus:outline-none text-sm md:text-4xl border-white max-w-full min-w-48'
                  />
                </div>

                <div className='flex flex-col items-left mb-10'>
                  <p className='text-white text-sm md:text-4xl text-left'>
                    One more thing:
                  </p>
                  <input
                    name='message'
                    id='message'
                    value={values.message}
                    onChange={handleChange}
                    className='bg-transparent text-white mt-1 p-2 focus:outline-none text-sm md:text-4xl border-b-2 border-white max-w-full min-w-48'
                  />
                </div>

                <div className='flex'>
                  <button
                    ref={hoverRef}
                    id=''
                    className='border-none text-5xl text-white tracking-tight text-left justify-start mt-2'
                  >
                    Send
                  </button>
                  {isHovered && (
                    <ArrowMedium
                      color='white'
                      size='12'
                      marginTop='2'
                      marginLeft='4'
                      animationIn='fadeIn animate__delay-0.5s'
                      animationOut='fadeOut'
                    />
                  )}
                </div>
              </Form>
            </div>
          </Container>
        )}
      </Formik>
    </>
  );
};

export default withApollo({ ssr: false })(Contact);
