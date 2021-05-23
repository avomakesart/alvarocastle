import { Form, Formik } from 'formik';
import 'jodit/build/jodit.min.css';
import { useRouter } from 'next/router';
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
  useCreateProjectMutation,
  useProjectCategoriesQuery,
} from '../../../../generated/graphql';
import { useIsAuth } from '../../../../hooks';
import { withApollo } from '../../../../utils';

const JoditReact = React.lazy(() => {
  return import('jodit-react-ts');
});

interface CreateProjectProps {}

const CreateProject: React.FC<CreateProjectProps> = ({}) => {
  const isSSR = typeof window === 'undefined';
  const [value, setValue] = useState('');
  const { data, error, loading } = useProjectCategoriesQuery({
    variables: { limit: 10, cursor: '' },
    notifyOnNetworkStatusChange: true,
  });
  const [createProject] = useCreateProjectMutation();
  const router = useRouter();
  useIsAuth();

  const projectCategories = data?.projectCategories.projectCategories.map(
    (category: any) => category.title
  );

  return (
    <SideBarLayout sectionTitle='Create Project'>
      {error && <Error errorType='500' description='Something went wrong' />}
      {loading && <Loader />}
      <Formik
        initialValues={{
          title: '',
          headline: '',
          headlineImage: '',
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
          <CardForm>
            <Form>
              <div className='relative flex flex-col pb-4'>
                <Input
                  label='Project name'
                  htmlFor='Category'
                  type='text'
                  id='title'
                  placeHolder='Project title'
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
                  placeHolder='Project headline'
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
                  label='Project Headline image'
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
                      <JoditReact
                        onChange={(content) => setValue(content)}
                        defaultValue={value}
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
                  value={(values.description = value as any)}
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
                text='Create Project'
              />
            </Form>
          </CardForm>
        )}
      </Formik>
    </SideBarLayout>
  );
};

export default withApollo({ ssr: false })(CreateProject);
