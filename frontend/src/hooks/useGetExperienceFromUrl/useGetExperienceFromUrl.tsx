import { useExperienceQuery } from '../../generated/graphql';
import { useGetIntId } from '../useGetIntId/useGetIntId';

export const useGetExperienceFromUrl = () => {
  const intId = useGetIntId();

  return useExperienceQuery({
    skip: intId === -1,
    variables: { id: intId },
  });
};
