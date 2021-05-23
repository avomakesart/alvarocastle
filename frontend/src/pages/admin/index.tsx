import React from 'react';
import { SideBarLayout } from '../../components';
import { useIsAuth } from '../../hooks';
import { withApollo } from '../../utils';

const HomeAdmin = () => {
  useIsAuth();
  return (
    <SideBarLayout sectionTitle='Dashboard'>
      <h1>Admin area</h1>
    </SideBarLayout>
  );
};

export default withApollo({ ssr: true})(HomeAdmin);
