import { useProjectCategoryQuery } from '../../generated/graphql';
import { useGetIntId } from '../useGetIntId/useGetIntId';

export const useGetProjectCategoryFromUrl = () => {
  const intId = useGetIntId();

  return useProjectCategoryQuery({
    skip: intId === -1,
    variables: { id: intId },
  });
};
