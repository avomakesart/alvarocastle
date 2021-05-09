import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';
import { gql } from 'urql';
import { Container } from '../../../components';
import { Button } from '../../../components/Button/Button';
import { Input } from '../../../components/Input/Input';
import {
  useCategoryQuery,
  useUpdateCategoryMutation,
} from '../../../generated/graphql';
import { useGetIntId } from '../../../hooks/useGetIntId/useGetIntId';
import { withApollo } from '../../../utils';

interface UpdateCategoryProps {
  id: number;
  title: string;
}

const UpdateCategory: React.FC<UpdateCategoryProps> = ({}) => {
  const router = useRouter();

  const intId = useGetIntId();
  const { data, loading } = useCategoryQuery({
    skip: intId === -1,
    variables: { id: intId },
  });
  const [updateCategory] = useUpdateCategoryMutation();

  if (loading) return <div>Loading...</div>;
  if (!data?.category) return <div>Could not found post.</div>;

  return (
    <>
      <Formik
        initialValues={{
          title: data.category.title,
        }}
        onSubmit={async (values) => {
          await updateCategory({
            variables: { id: intId, ...values },
            update: (cache) => {
              cache.readFragment<UpdateCategoryProps>({
                id: 'Category:' + values.title,
                fragment: gql`
                  fragment _ on Category {
                    id
                    title
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
          <Container title={`Updating category: #${data.category?.id}`}>
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
          </Container>
        )}
      </Formik>
    </>
  );
};

export default withApollo({ ssr: false  })(UpdateCategory);
