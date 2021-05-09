import React from 'react';
import { Container } from '../../components';
import { Button } from '../../components/Button/Button';
import { useGetCategoryFromUrl } from '../../hooks/useGetCategoryFromUrl';
import { useDeleteCategoryMutation } from '../../generated/graphql';
import { withApollo } from '../../utils';

interface CategoryProps {}

const Category: React.FC<CategoryProps> = ({}) => {
  const { data, error, loading } = useGetCategoryFromUrl();
  const [deleteCategory] = useDeleteCategoryMutation();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (!data?.category) return <div>Could not found student.</div>;

  return (
    <Container title={`Category: ${data.category.title}`}>
      <div className='flex flex-row justify-between w-1/2'>
        <Button
          backgroundColor='transparent'
          borderColor='white'
          hasBorder
          textColor='white'
          onClick={() =>
            window.location.replace(`/categories/edit/${data.category?.id}`)
          }
          text='Edit'
        />
        <Button
          backgroundColor='transparent'
          borderColor='white'
          hasBorder
          textColor='white'
          onClick={() => deleteCategory({ id: data.category?.id } as any)}
          text='Delete'
        />
      </div>
    </Container>
  );
};

export default withApollo({ ssr: false })(Category);
