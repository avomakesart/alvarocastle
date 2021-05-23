import React, { ReactNode } from 'react';
import { AdminNavBar, AdminContainer, SideBar } from '..';

interface SideBarLayoutProps {
  children: ReactNode | ReactNode;
  sectionTitle?: string;
}

export const SideBarLayout: React.FC<SideBarLayoutProps> = ({
  children,
  sectionTitle,
}) => {
  return (
    <div className='flex overflow-hidden md:h-screen bg-gray-50 dark:bg-gray-900'>
      <SideBar />
      <div className='flex flex-col flex-1'>
        <AdminNavBar />
        <AdminContainer sectionTitle={sectionTitle}>{children}</AdminContainer>
      </div>
    </div>
  );
};
