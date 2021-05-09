import { useProjectQuery } from '../../generated/graphql';
import { useGetIntId } from '../useGetIntId/useGetIntId';

export const useGetProjectFromUrl = () => {
  const intId = useGetIntId();

  return useProjectQuery({
    skip: intId === -1,
    variables: { id: intId },
  });
};
