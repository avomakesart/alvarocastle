import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { gql } from 'urql';
import { Container } from '../../../components';
import { Button } from '../../../components/Button/Button';
import { Input } from '../../../components/Input/Input';
import {
  useExperienceQuery,
  useUpdateExperienceMutation,
} from '../../../generated/graphql';
import { useGetIntId } from '../../../hooks/useGetIntId/useGetIntId';
import { withApollo } from '../../../utils';
import ReactMde from 'react-mde';
import * as Showdown from 'showdown';
import 'react-mde/lib/styles/css/react-mde-all.css';
  
interface UpdateExperienceProps {
  id: number;
  title: string;
}

const UpdateExperience: React.FC<UpdateExperienceProps> = ({}) => {
  const [selectedTab, setSelectedTab] = React.useState<'write' | 'preview'>(
    'write'
  );
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const router = useRouter();
  const intId = useGetIntId();
  const { data, loading } = useExperienceQuery({
    skip: intId === -1,
    variables: { id: intId },
  });
  const [updateExperience] = useUpdateExperienceMutation();
  const [value, setValue] = useState(data?.experience?.description);
  const dateRange = `${startDate.substr(0, 4)} - ${endDate.substr(0, 4)}`;

  const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true,
  });

  const styles = {
    editor: {
      border: '1px solid gray',
      minHeight: '6em',
      background: 'white',
    },
  };

  if (loading) return <div>Loading...</div>;
  if (!data?.experience) return <div>Could not found post.</div>;

  return (
    <>
      <Formik
        initialValues={{
          company: data.experience.company,
          position: data.experience.position,
          description: data.experience.description,
          period: data.experience.period,
        }}
        onSubmit={async (values) => {
          await updateExperience({
            variables: { id: intId, input: { ...values } } as any,
            update: (cache) => {
              cache.readFragment<UpdateExperienceProps>({
                id: 'Experience:' + values.company,
                fragment: gql`
                  fragment _ on Experience {
                    id
                    company
                    position
                    description
                    updatedAt
                  }
                `,
              });
            },
          });
          router.back();
        }}
      >
        {({ values, handleChange }) => (
          <Container title={`Updating category: #${data.experience?.id}`}>
            <section className='text-gray-700 body-font'>
              <div className='container px-8 pb-24 mx-auto lg:px-4'>
                <div className='flex flex-col w-full p-8 mx-auto mt-10 border rounded-lg md:w-1/2 md:ml-auto md:mt-0'>
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
                    <div className='relative text-left'>
                      <div style={styles.editor}>
                        <ReactMde
                          value={value}
                          onChange={setValue}
                          selectedTab={selectedTab}
                          onTabChange={setSelectedTab}
                          generateMarkdownPreview={(markdown) =>
                            Promise.resolve(converter.makeHtml(markdown))
                          }
                        />
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
                        value={values.description}
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
                        value={values.period}
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
          </Container>
        )}
      </Formik>
    </>
  );
};

export default withApollo({ ssr: true })(UpdateExperience);
