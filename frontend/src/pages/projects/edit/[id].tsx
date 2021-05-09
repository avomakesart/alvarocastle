import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import ReactMde from 'react-mde';
import 'react-mde/lib/styles/css/react-mde-all.css';
import { gql } from 'urql';
import { Container } from '../../../components';
import { Button } from '../../../components/Button/Button';
import { Input } from '../../../components/Input/Input';
import {
  useProjectQuery,
  useUpdateProjectMutation,
} from '../../../generated/graphql';
import { useIsAuth } from '../../../hooks';
import { useGetIntId } from '../../../hooks/useGetIntId/useGetIntId';
import { converter, mdStyles, withApollo } from '../../../utils';

interface UpdateProjectProps {
  id: number;
  title: string;
}

const UpdateProject: React.FC<UpdateProjectProps> = ({}) => {
  const [selectedTab, setSelectedTab] = React.useState<'write' | 'preview'>(
    'write'
  );
  const router = useRouter();
  const intId = useGetIntId();
  const { data, loading } = useProjectQuery({
    skip: intId === -1,
    variables: { id: intId },
  });
  const [updateProject] = useUpdateProjectMutation();
  const [value, setValue] = useState(data?.project?.description);

  useIsAuth();

  if (loading) return <div>Loading...</div>;
  if (!data?.project) return <div>Could not found project.</div>;

  return (
    <>
      <Formik
        initialValues={{
          title: data.project.title,
          headline: data.project.headline,
          description: data.project.description,
          featuredImage: data.project.featuredImage,
          category: data.project.category,
        }}
        onSubmit={async (values) => {
          await updateProject({
            variables: { id: intId, input: { ...values } } as any,
            update: (cache) => {
              cache.readFragment<UpdateProjectProps>({
                id: 'Project:' + values.title,
                fragment: gql`
                  fragment _ on Project {
                    id
                    title
                    headline
                    description
                    featuredImage
                    category
                    createdAt
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
          <Container title={`Updating category: #${data.project?.id}`}>
            <section className='text-gray-700 body-font'>
              <div className='container px-8 pb-24 mx-auto lg:px-4'>
                <div className='flex flex-col w-full p-8 mx-auto mt-10 border rounded-lg md:w-1/2 md:ml-auto md:mt-0'>
                  <Form>
                    <div className='relative flex flex-col'>
                      <Input
                        label='Project title'
                        labelColor='white'
                        focusColor='white'
                        textAlign='text-left'
                        htmlFor='project name'
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
                        label='Headline'
                        labelColor='white'
                        focusColor='white'
                        textAlign='text-left'
                        htmlFor='Headline'
                        type='text'
                        id='headline'
                        placeholder='Headline'
                        value={values.headline}
                        onChange={handleChange}
                        name='headline'
                      />
                    </div>

                    <div className='relative flex flex-col'>
                      <Input
                        label='Project Featured Image'
                        labelColor='white'
                        focusColor='white'
                        textAlign='text-left'
                        htmlFor='image'
                        type='text'
                        id='featuredImage'
                        placeholder={values.featuredImage}
                        value={values.featuredImage}
                        onChange={handleChange}
                        name='featuredImage'
                      />
                    </div>

                    <div className='relative flex flex-col'>
                      <Input
                        label='Project Category'
                        labelColor='white'
                        focusColor='white'
                        textAlign='text-left'
                        htmlFor='image'
                        type='text'
                        id='category'
                        placeholder={values.category}
                        value={values.category}
                        onChange={handleChange}
                        name='category'
                      />
                    </div>
                    <div className='relative text-left'>
                      <div style={mdStyles.editor}>
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
                        labelColor='white'
                        focusColor='white'
                        textAlign='text-left'
                        htmlFor='Description'
                        type='text'
                        id='description'
                        placeholder='Description'
                        value={(values.description = value as any)}
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
                      text='Update project'
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

export default withApollo({ ssr: true })(UpdateProject);
