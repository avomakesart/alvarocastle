import React from 'react';
import NextLink from 'next/link';
import 'animate.css';

interface ProjectsProps {
  categories: string[] | string;
  projects: any;
}

export const Projects: React.FC<ProjectsProps> = ({ categories, projects }) => {
  return (
    <section className='overflow-hidden text-gray-700 p-0 body-font lg:pr-8'>
      <div className='max-w-full py-2 mx-auto'>
        <div className='flex flex-wrap justify-center mx-auto '>
          {categories === 'all'
            ? projects?.map((project: any) => (
                <div
                  className='w-full mt-6 lg:w-2/4 lg:pl-10 lg:py-6 lg:mt-0 cursor-pointer animate__animated animate__fadeIn'
                  key={project.id}
                >
                  <NextLink
                    href='/projects/[id]'
                    as={`/projects/${project.id}`}
                  >
                    <img
                      alt={project.title}
                      className='object-cover object-center max-w-full w-full h-64 lg:h-auto'
                      src={project.featuredImage}
                    />
                  </NextLink>
                </div>
              ))
            : projects
                ?.filter(
                  (isFiltered: any) => isFiltered.category === categories
                )
                .map((project: any) => (
                  <div
                    className='w-full mt-6 lg:w-2/4 lg:pl-10 lg:py-6 lg:mt-0 cursor-pointer animate__animated animate__fadeIn'
                    key={project.id}
                  >
                    <NextLink
                      href='/projects/[id]'
                      as={`/projects/${project.id}`}
                    >
                      <img
                        alt={project.title}
                        className='object-cover object-center max-w-full w-full h-64 lg:h-auto'
                        src={project.featuredImage}
                      />
                    </NextLink>
                  </div>
                ))}
        </div>
      </div>
    </section>
  );
};
