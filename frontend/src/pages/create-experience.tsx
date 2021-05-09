import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import 'quill/dist/quill.snow.css';
import React, { useEffect, useState } from 'react';
import { useQuill } from 'react-quilljs';
import { Container } from '../components';
import { Button } from '../components/Button/Button';
import { Input } from '../components/Input/Input';
import { useCreateExperienceMutation } from '../generated/graphql';
import { useIsAuth } from '../hooks';
import { withApollo } from '../utils';

interface CreateExperienceProps {
  dateNumber: number;
}

const CreateExperience: React.FC<CreateExperienceProps> = ({ dateNumber }) => {
  const [value, setValue] = React.useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const router = useRouter();
  useIsAuth();
  const [createExperience] = useCreateExperienceMutation();

  const { quill, quillRef } = useQuill();

  useEffect(() => {
    if (quill) {
      quill.on('text-change', () => {
        setValue(quill?.root.innerHTML as any);
      });
    }
  }, [quill]);


  const dateRange = `${startDate.substr(0, 4)} - ${endDate.substr(0, 4)}`;

  return (
    <Container title='Create Experience'>
      <Formik
        initialValues={{
          company: '',
          position: '',
          period: '',
          description: '',
        }}
        onSubmit={async (values) => {
          console.log(values);
          const { errors } = await createExperience({
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
              <div className='flex flex-col w-full p-8 mx-auto mt-10 border rounded-lg  md:w-1/2 md:ml-auto md:mt-0'>
                <Form>
                  <div className='relative flex flex-col'>
                    <Input
                      label='Company name'
                      labelColor='white'
                      focusColor='white'
                      textAlign='text-left'
                      htmlFor='Company name'
                      type='text'
                      id='company'
                      placeholder='Company name'
                      value={values.company}
                      onChange={handleChange}
                      name='company'
                    />
                  </div>
                  <div className='relative flex flex-col'>
                    <Input
                      label='Position'
                      labelColor='white'
                      focusColor='white'
                      textAlign='text-left'
                      htmlFor='Position'
                      type='text'
                      id='position'
                      placeholder='Position'
                      value={values.position}
                      onChange={handleChange}
                      name='position'
                    />
                  </div>
                  <div className='relative'>
                    {/* <ReactMde
                        value={value}
                        onChange={setValue}
                        selectedTab={selectedTab}
                        onTabChange={setSelectedTab}
                        generateMarkdownPreview={(markdown) =>
                          Promise.resolve(converter.makeHtml(markdown))
                        }
                      /> */}

                    <div className='w-full h-full bg-white'>
                      <div ref={quillRef} />
                    </div>
                  </div>
                  <div className='relative flex flex-col'>
                    <Input
                      label='Description'
                      labelColor='white'
                      focusColor='white'
                      textAlign='text-left'
                      htmlFor='Description'
                      type='text'
                      id='description'
                      placeholder='Description'
                      value={(values.description = value)}
                      onChange={handleChange}
                      name='description'
                    />
                  </div>

                  <div className='relative flex flex-col'>
                    {/* label='Technology Category'
                      labelColor='white'
                      focusColor='white'
                      textAlign='text-left'
                      htmlFor='Technology category' */}
                    <input
                      type='month'
                      id='startDate'
                      placeholder='Started Date'
                      value={startDate}
                      onChange={(e: any) => setStartDate(e.target.value)}
                      name='startDate'
                    />
                  </div>

                  <div className='relative flex flex-col'>
                    <input
                      type='month'
                      id='endDaye'
                      placeholder='End Date'
                      value={endDate}
                      onChange={(e: any) => setEndDate(e.target.value)}
                      name='endDate'
                    />
                  </div>

                  <div className='relative flex flex-col'>
                    <Input
                      label='Period selected'
                      labelColor='white'
                      focusColor='white'
                      textAlign='text-left'
                      htmlFor='Date Selected'
                      type='text'
                      id='date'
                      placeholder={values.period}
                      value={(values.period = dateRange.toString())}
                      onChange={handleChange}
                      name='period'
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

export default withApollo({ ssr: false })(CreateExperience);
