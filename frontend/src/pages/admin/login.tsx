import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';
import { Button, Input } from '../../components';
import { useLoginMutation } from '../../generated/graphql';
import { withApollo } from '../../utils';
import { toast } from 'react-toastify';

const Login = () => {
  const [loginUser] = useLoginMutation();
  const router = useRouter();

  return (
    <>
      <div className='max-w-7xl bg-white mx-auto py-6 sm:px-6 lg:px-8'>
        <div className='px-4 py-6 sm:px-0'>
          <Formik
            initialValues={{
              usernameOrEmail: '',
              password: '',
            }}
            onSubmit={async (values) => {
              const { errors } = await loginUser({
                variables: { ...values },
                update: (cache) => {
                  cache.evict({ fieldName: 'users:{}' });
                },
              });
              if (!errors)
                toast.success(
                  '🙌 Awesome redirecting you to the admin panel!',
                  {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  }
                );
              setTimeout(() => {
                router.push('/admin');
              }, 3000);
            }}
          >
            {({ values, handleChange }) => (
              <section className='text-gray-700 body-font'>
                <div className='container px-8 pb-24 mx-auto lg:px-4'>
                  <div className='flex flex-col w-1/2 p-8 mx-auto mt-10 border rounded-lg md:ml-auto md:mt-0'>
                    <Form>
                      <div className='relative flex flex-col py-4'>
                        <Input
                          label='Username Or Email'
                          htmlFor='usernameOrEmail'
                          type='text'
                          id='usernameOrEmail'
                          placeHolder='John doe'
                          value={values.usernameOrEmail}
                          onChange={handleChange}
                          name='usernameOrEmail'
                        />
                      </div>

                      <div className='relative flex flex-col py-4'>
                        <Input
                          label='Password'
                          htmlFor='password'
                          type='password'
                          id='password'
                          placeHolder='***********'
                          value={values.password}
                          onChange={handleChange}
                          name='password'
                        />
                      </div>

                      <Button
                        textColor='white'
                        hasBorder
                        borderColor='white'
                        backgroundColor='black'
                        text='Login'
                      />
                    </Form>
                  </div>
                </div>
              </section>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default withApollo({ ssr: false })(Login);
