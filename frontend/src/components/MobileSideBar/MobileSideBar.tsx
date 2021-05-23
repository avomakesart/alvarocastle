import React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Link } from '../Link/Link';
// import { HeartIcon, HomeIcon, LightningIcon } from '../../assets/Icons';

interface MobileSideBarProps {
  isOpen: boolean;
}

export const MobileSideBar: React.FC<MobileSideBarProps> = ({ isOpen }) => {
  const { pathname } = useRouter();

  return (
    <>
      {isOpen && (
        <>
          <aside className='fixed inset-y-0 z-20 left-0 top-3 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 md:hidden'>
            <div className='py-4 text-gray-500 dark:text-gray-400'>
              <NextLink href='/'>
                <span className='ml-6 text-lg font-bold text-gray-800 dark:text-gray-200'>
                  Alvaro Castle
                </span>
              </NextLink>
              <ul className='mt-6'>
                <li className='relative px-6 py-3'>
                  <Link path='/admin' title='Dashboard' />
                </li>
                <li className='relative px-6 py-3'>
                  <Link path='/admin/certificates' title='Certificates' />
                </li>
                <li className='relative px-6 py-3'>
                  <Link path='/admin/experience' title='Experience' />
                </li>
                <li className='relative px-6 py-3'>
                  <Link path='/admin/projects' title='Projects' />
                </li>
                <li className='relative px-6 py-3'>
                  <Link path='/admin/technologies' title='Technologies' />
                </li>
              </ul>
            </div>
          </aside>
        </>
      )}
    </>
  );
};
