import { useCategoryQuery } from '../../generated/graphql';
import { useGetIntId } from '../useGetIntId/useGetIntId';

export const useGetCategoryFromUrl = () => {
  const intId = useGetIntId();

  return useCategoryQuery({
    skip: intId === -1,
    variables: { id: intId },
  });
};
