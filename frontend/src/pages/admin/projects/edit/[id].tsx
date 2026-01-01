import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import {
  Button,
  CardForm,
  Error,
  Input,
  Loader,
  SelectInput,
  SideBarLayout,
} from '../../../../components';
import {
  ProjectCategories,
  useProjectCategoriesQuery,
  useUpdateProjectMutation,
} from '../../../../generated/graphql';
import {
  useGetIntId,
  useGetProjectFromUrl,
  useIsAuth,
} from '../../../../hooks';
import { withApollo } from '../../../../utils';

const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });


const UpdateProject = ({}) => {
  const isSSR = typeof window === 'undefined';
  const { data, error, loading } = useGetProjectFromUrl();
  const description = loading ? 'loading' : data?.project?.description;
  const [value, setValue] = useState(description);
  const {
    data: categoryData,
    error: errorData,
    loading: loadCategories,
  } = useProjectCategoriesQuery({
    variables: {
      limit: 10,
      cursor: '',
    },
    notifyOnNetworkStatusChange: false,
  });
  const [updateProject] = useUpdateProjectMutation();
  const intId = useGetIntId();
  const router = useRouter();
  useIsAuth();

  const projectCategories =
    categoryData?.projectCategories.projectCategories.map(
      (data: ProjectCategories) => data.title
    );

  if (!data?.project) return <div>Could not found project.</div>;

  return (
    <SideBarLayout sectionTitle={`Editing Project: ${data?.project?.title}`}>
      {error && <Error errorType='500' description='Something went wrong' />}
      {loading && <Loader />}
      <Formik
        initialValues={{
          title: data?.project?.title,
          headline: data?.project?.headline,
          headlineImage: data?.project.headlineImage,
          description: data?.project?.description,
          featuredImage: data?.project?.featuredImage,
          category: data?.project?.category,
        }}
        onSubmit={async (values) => {
          await updateProject({
            variables: { id: intId, input: { ...values } },
          });
          router.back();
        }}
      >
        {({ values, handleChange }) => (
          <CardForm>
            <Form>
              <div className='relative flex flex-col pb-4'>
                <Input
                  label='Project name'
                  htmlFor='title'
                  type='text'
                  id='title'
                  placeHolder=''
                  value={values.title}
                  onChange={handleChange}
                  name='title'
                />
              </div>

              <div className='relative flex flex-col py-4'>
                <Input
                  label='Project headline'
                  htmlFor='Headline'
                  type='text'
                  id='headline'
                  placeHolder=''
                  value={values.headline}
                  onChange={handleChange}
                  name='headline'
                />
              </div>

              <div className='relative flex flex-col py-4'>
                <Input
                  label='Project featured image'
                  htmlFor='Featured image'
                  type='text'
                  id='featuredImage'
                  placeHolder='Image url'
                  value={values.featuredImage}
                  onChange={handleChange}
                  name='featuredImage'
                />
              </div>

              <div className='relative flex flex-col py-4'>
                <Input
                  label='Project headline image'
                  htmlFor='headlineImage'
                  type='text'
                  id='headlineImage'
                  placeHolder='Image url'
                  value={values.headlineImage}
                  onChange={handleChange}
                  name='featuredImage'
                />
              </div>

              <div className='relative flex flex-col py-4'>
                <SelectInput
                  label='Select a category'
                  defaultValue='Show Categories'
                  handleChange={handleChange}
                  data={projectCategories}
                  selectedValue={values.category}
                />
              </div>

              <div className='relative flex flex-col py-4'>
                <label
                  htmlFor='description'
                  className='block text-sm font-medium text-gray-700'
                >
                  Description
                </label>
                <div>
                  {!isSSR && (
                    <React.Suspense fallback={<div>Loading</div>}>
                      <JoditEditor
                        onChange={(content) => setValue(content)}
                        value={value}
                      />
                    </React.Suspense>
                  )}
                </div>

                <Input
                  label='Description'
                  htmlFor='Description'
                  type='text'
                  id='description'
                  placeHolder='Description'
                  value={(values.description = value as string)}
                  onChange={handleChange}
                  name='description'
                  style={{ display: 'none' }}
                  labelStyle={{ display: 'none' }}
                />
              </div>

              <Button
                textColor='white'
                hasBorder={true}
                borderColor='white'
                backgroundColor='black'
                text='Update Project'
              />
            </Form>
          </CardForm>
        )}
      </Formik>
    </SideBarLayout>
  );
};

export default withApollo({ ssr: false })(UpdateProject);
