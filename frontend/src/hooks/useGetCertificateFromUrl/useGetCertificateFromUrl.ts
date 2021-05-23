import { useCertificateQuery } from '../../generated/graphql';
import { useGetIntId } from '../useGetIntId/useGetIntId';

export const useGetCertificateFromUrl = () => {
  const intId = useGetIntId();

  return useCertificateQuery({
    skip: intId === -1,
    variables: { id: intId },
  });
};
