import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';
import {
  Button,
  CardForm,
  Error,
  Input,
  Loader,
  SelectInput,
  SideBarLayout
} from '../../../../components';
import {
  useCategoriesQuery,
  useCreateSkillMutation
} from '../../../../generated/graphql';
import { useIsAuth } from '../../../../hooks';
import { withApollo } from '../../../../utils';

interface CreateTechnologyProps {}

const CreateTechnology: React.FC<CreateTechnologyProps> = ({}) => {
  const router = useRouter();
  const [createSkill] = useCreateSkillMutation();
  const { data, loading, error } = useCategoriesQuery({
    variables: { limit: 30, cursor: '' },
    notifyOnNetworkStatusChange: true,
  });
  useIsAuth();

  const categories = data?.categories.categories.map(
    (category: any) => category.title
  );

  return (
    <SideBarLayout sectionTitle='Create Category'>
      {error && <Error errorType='500' description='Something went wrong' />}
      {loading && <Loader />}
      <Formik
        initialValues={{
          title: '',
          image: '',
          category: '',
        }}
        onSubmit={async (values) => {
          const { errors } = await createSkill({
            variables: { input: values },
            update: (cache) => {
              cache.evict({ fieldName: 'technologies:{}' });
            },
          });
          if (!errors) router.push('/admin/technologies/create');
        }}
      >
        {({ values, handleChange }) => (
          <CardForm>
            <Form>
              <div className='relative flex flex-col py-4'>
                <Input
                  label='Technology name'
                  htmlFor='Technology image'
                  type='text'
                  id='technology'
                  placeHolder='Tech name'
                  value={values.title}
                  onChange={handleChange}
                  name='title'
                />
              </div>

              <div className='relative flex flex-col py-4'>
                <Input
                  label='Technology Image'
                  htmlFor='Technology Image'
                  type='text'
                  id='image'
                  placeHolder='Tech image'
                  value={values.image}
                  onChange={handleChange}
                  name='image'
                />
              </div>

              <div className='relative flex flex-col py-4'>
                <SelectInput
                  label='Select a category'
                  defaultValue='Show Categories'
                  handleChange={handleChange}
                  data={categories}
                  selectedValue={values.category}
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
          </CardForm>
        )}
      </Formik>
    </SideBarLayout>
  );
};

export default withApollo({ ssr: false })(CreateTechnology);
