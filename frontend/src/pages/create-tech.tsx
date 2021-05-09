import React from 'react';
import { Container } from '../components';
import { Button } from '../components/Button/Button';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { useCreateSkillMutation } from '../generated/graphql';
import { useIsAuth } from '../hooks';
import { withApollo } from '../utils';
import { Input } from '../components/Input/Input';

interface CreateTechProps {}

const CreateTech: React.FC<CreateTechProps> = ({}) => {
  const router = useRouter();
  useIsAuth();
  const [createSkill] = useCreateSkillMutation();

  return (
    <Container title='Create Category'>
      <Formik
        initialValues={{
          title: '',
          image: '',
          category: '',
        }}
        onSubmit={async (values) => {
          console.log(values);
          const { errors } = await createSkill({
            variables: { input: values },
            update: (cache) => {
              cache.evict({ fieldName: 'skills:{}' });
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
                      label='Technology name'
                      labelColor='white'
                      focusColor='white'
                      textAlign='text-left'
                      htmlFor='Technology image'
                      type='text'
                      id='technology'
                      placeholder='Tech name'
                      value={values.title}
                      onChange={handleChange}
                      name='title'
                    />
                  </div>

                  <div className='relative flex flex-col'>
                    <Input
                      label='Technology Image'
                      labelColor='white'
                      focusColor='white'
                      textAlign='text-left'
                      htmlFor='Technology Image'
                      type='text'
                      id='image'
                      placeholder='Tech image'
                      value={values.image}
                      onChange={handleChange}
                      name='image'
                    />
                  </div>

                  <div className='relative flex flex-col'>
                    <Input
                      label='Technology Category'
                      labelColor='white'
                      focusColor='white'
                      textAlign='text-left'
                      htmlFor='Technology category'
                      type='text'
                      id='category'
                      placeholder='Tech image'
                      value={values.category}
                      onChange={handleChange}
                      name='category'
                    />
                  </div>

                  <Button
                    textColor='white'
                    hasBorder={true}
                    borderColor='white'
                    backgroundColor='black'
                    text='Create Technology'
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

export default withApollo({ ssr: false })(CreateTech);
