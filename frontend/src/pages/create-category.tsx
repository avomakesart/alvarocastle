import React from 'react';
import { Container } from '../components';
import { Button } from '../components/Button/Button';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { useCreateCategoryMutation } from '../generated/graphql';
import { useIsAuth } from '../hooks/';
import { withApollo } from '../utils';
import { Input } from '../components/Input/Input';

interface CreateCategoryProps {}

const CreateCategory: React.FC<CreateCategoryProps> = ({}) => {
  const router = useRouter();
  useIsAuth();
  const [createCategory] = useCreateCategoryMutation();

  return (
    <Container title='Create Category'>
      <Formik
        initialValues={{
          title: '',
        }}
        onSubmit={async (values) => {
          console.log(values);
          const { errors } = await createCategory({
            variables: { input: values },
            update: (cache) => {
              cache.evict({ fieldName: 'categories:{}' });
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
                      label='Category name'
                      labelColor='white'
                      focusColor='white'
                      textAlign='text-left'
                      htmlFor='Category'
                      type='text'
                      id='category'
                      placeholder='Project category'
                      value={values.title}
                      onChange={handleChange}
                      name='title'
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

export default withApollo({ ssr: false })(CreateCategory);
