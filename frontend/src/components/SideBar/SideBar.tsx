import NextLink from 'next/link';
import React from 'react';
import { Link } from '..';
// import { HeartIcon, HomeIcon, LightningIcon } from '../../assets/Icons';

interface SideBarProps {}

export const SideBar: React.FC<SideBarProps> = () => {
  return (
    <>
      <aside className='z-10 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0'>
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
  );
};
