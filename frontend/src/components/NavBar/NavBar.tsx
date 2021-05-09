import React, { useState } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Pivot as Hamburger } from 'hamburger-react';
import 'animate.css';

export const NavBar: React.FC<{}> = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const activeLink = (link: string) =>
    router.pathname === link ? 'border-b-4 border-white' : '';

  const handleClose = () => setOpen(false);

  return (
    <>
      <div className='text-white body-font'>
        <div className='flex flex-row justify-between items-center flex-wrap p-8 mx-auto md:items-center md:flex-row'>
          <NextLink href='/'>
            <div className='cursor-pointer pr-2 lg:pr-8 lg:px-6 focus:outline-none'>
              <div className='inline-flex items-center'>
                <h2 className='font-semibold tracking-wider transition duration-1000 ease-in-out transform text-blueGray-500 dark:text-blueGray-200 lg:text-2xl text-bold lg:mr-8'>
                  Alvaro Castle
                </h2>
              </div>
            </div>
          </NextLink>
          <nav className='hidden md:flex flex-wrap items-center justify-center text-base md:ml-auto'>
            <NextLink href='/'>
              <span
                className={`${activeLink(
                  '/'
                )}  cursor-pointer mr-10 text-lg tracking-wide font-normal from-white to-gray-600 hover:text-gray-400`}
              >
                Home
              </span>
            </NextLink>
            <NextLink href='/about'>
              <span
                className={`${activeLink(
                  '/about'
                )} cursor-pointer mr-10 text-lg tracking-wide font-normal from-white to-gray-600 hover:text-gray-400`}
              >
                About
              </span>
            </NextLink>
            <NextLink href='/work'>
              <span
                className={`${activeLink(
                  '/work'
                )}  cursor-pointer mr-10 text-lg tracking-wide font-normal from-white to-gray-600 hover:text-gray-400`}
              >
                Work
              </span>
            </NextLink>
            <NextLink href='/contact'>
              <span
                className={`${activeLink(
                  '/contact'
                )}  cursor-pointer mr-10 text-lg tracking-wide font-normal from-white to-gray-600 hover:text-gray-400`}
              >
                Contact
              </span>
            </NextLink>
          </nav>
          <div className='z-20 md:hidden'>
            <Hamburger label='Show menu' toggled={open} toggle={setOpen} />
          </div>
          {open && (
            <div className='h-full w-full fixed z-10 top-0 left-0 bg-black'>
              <div className='relative top-1/4 w-full text-left ml-8 animate__animated animate__fadeIn animate__delay-0.5s'>
                <NextLink href='/'>
                  <span
                    className='p-2 cursor-pointer no-underline text-6xl bg-gradient-to-br from-white to-gray-700 bg-clip-text  block focus:text-white'
                    style={{ transition: '0.3s' }}
                    onClick={handleClose}
                  >
                    Home
                  </span>
                </NextLink>
                <NextLink href='/about'>
                  <span
                    className='p-2 cursor-pointer pt-8 no-underline text-6xl bg-gradient-to-br from-white to-gray-700 bg-clip-text  block focus:text-white'
                    style={{ transition: '0.3s' }}
                    onClick={handleClose}
                  >
                    About
                  </span>
                </NextLink>
                <NextLink href='/work'>
                  <span
                    className='p-2 cursor-pointer pt-8 no-underline text-6xl bg-gradient-to-br from-white to-gray-700 bg-clip-text  block focus:text-white'
                    style={{ transition: '0.3s' }}
                    onClick={handleClose}
                  >
                    Work
                  </span>
                </NextLink>
                <NextLink href='/contact'>
                  <span
                    className='p-2 cursor-pointer pt-8 no-underline text-6xl bg-gradient-to-br from-white to-gray-700 bg-clip-text  block focus:text-white'
                    style={{ transition: '0.3s' }}
                    onClick={handleClose}
                  >
                    Contact
                  </span>
                </NextLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
