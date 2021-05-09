import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import { Container } from '../components';
import { Button } from '../components/Button/Button';
import { Input } from '../components/Input/Input';
import { useCreateProjectMutation } from '../generated/graphql';
import { useIsAuth } from '../hooks';
import { withApollo } from '../utils';

interface CreateProjectProps {}

const CreateProject: React.FC<CreateProjectProps> = ({}) => {
  const [value, setValue] = useState('');
  const [createProject] = useCreateProjectMutation();
  const { quill, quillRef } = useQuill();
  const router = useRouter();
  useIsAuth();

  useEffect(() => {
    if (quill) {
      quill.on('text-change', () => {
        setValue(quill?.root.innerHTML as any);
      });
    }
  }, [quill]);

  return (
    <Container title='Create Project'>
      <Formik
        initialValues={{
          title: '',
          headline: '',
          description: '',
          featuredImage: '',
          category: '',
        }}
        onSubmit={async (values) => {
          console.log(values);
          const { errors } = await createProject({
            variables: { input: values },
            update: (cache) => {
              cache.evict({ fieldName: 'projects:{}' });
            },
          });
          if (!errors) router.push('/');
        }}
      >
        {({ values, handleChange }) => (
          <section className='text-gray-700 body-font'>
            <div className='container px-8 pb-24 mx-auto lg:px-4'>
              <div className='flex flex-col w-full p-8 mx-auto mt-10 border rounded-lg md:w-1/2 md:ml-auto md:mt-0'>
                <Form>
                  <div className='relative flex flex-col'>
                    <Input
                      label='Project name'
                      labelColor='white'
                      focusColor='white'
                      textAlign='text-left'
                      htmlFor='Category'
                      type='text'
                      id='title'
                      placeholder='Project title'
                      value={values.title}
                      onChange={handleChange}
                      name='title'
                    />
                  </div>

                  <div className='relative flex flex-col'>
                    <Input
                      label='Project headline'
                      labelColor='white'
                      focusColor='white'
                      textAlign='text-left'
                      htmlFor='Headline'
                      type='text'
                      id='headline'
                      placeholder='Project headline'
                      value={values.headline}
                      onChange={handleChange}
                      name='headline'
                    />
                  </div>

                  <div className='relative flex flex-col'>
                    <Input
                      label='Project featured image'
                      labelColor='white'
                      focusColor='white'
                      textAlign='text-left'
                      htmlFor='Featured image'
                      type='text'
                      id='featuredImage'
                      placeholder='Image url'
                      value={values.featuredImage}
                      onChange={handleChange}
                      name='featuredImage'
                    />
                  </div>

                  <div className='relative flex flex-col'>
                    <Input
                      label='Project category'
                      labelColor='white'
                      focusColor='white'
                      textAlign='text-left'
                      htmlFor='Category'
                      type='text'
                      id='category'
                      placeholder='Project category'
                      value={values.category}
                      onChange={handleChange}
                      name='category'
                    />
                  </div>

                  <div className='w-full flex flex-col h-96 bg-white mb-8'>
                    <div className="h-96 mt-8" ref={quillRef} />
                  </div>

                  <div className='relative flex flex-col'>
                    <Input
                      labelColor='white'
                      focusColor='white'
                      textAlign='text-left'
                      htmlFor='Description'
                      type='text'
                      id='description'
                      placeholder='Description'
                      value={(values.description = value)}
                      onChange={handleChange}
                      style={{ display: 'none' }}
                      name='description'
                    />
                  </div>

                  <Button
                    textColor='white'
                    hasBorder={true}
                    borderColor='white'
                    backgroundColor='black'
                    text='Create Project'
                    style={{ marginTop: '2rem' }}
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

export default withApollo({ ssr: false })(CreateProject);
