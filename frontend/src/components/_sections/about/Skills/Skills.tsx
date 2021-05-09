import React from 'react';
import { Card, Tab, Tabs, Image } from '../../..';
import { useSkillsQuery } from '../../../../generated/graphql';

interface SkillsProps {}

export const Skills: React.FC<SkillsProps> = ({}) => {
  const { data, error, loading } = useSkillsQuery({
    variables: { limit: 25, cursor: '' },
  });

  return (
    <Tabs color='white'>
      <Tab label='Tech stack' tabName='Tech stack'>
        <Card>
          {!loading && !data && (
            <div className='flex flex-col'>
              <h3>You got query failed for some reason</h3>
              <p>{error?.message}</p>
            </div>
          )}
          <div className='animate__animated animate__fadeIn w-full mt-6 text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
            {data?.skills.skills
              .filter((skill) => skill.category === 'dev')
              .map((skill) => (
                <div key={skill.id} className='flex flex-col items-center'>
                  <Image src={skill.image} alt={skill.title} width='16' />
                  <h3 className='mb-2 mt-2 font-sans text-xl font-bold tracking-tighter text-black'>
                    {skill.title}
                  </h3>
                </div>
              ))}
          </div>
        </Card>
      </Tab>
      <Tab label='Styles' tabName='Styles'>
        <Card>
          {!loading && !data && (
            <div className='flex flex-col'>
              <h3>You got query failed for some reason</h3>
              <p>{error?.message}</p>
            </div>
          )}
          <div className='animate__animated animate__fadeIn w-full mt-6 text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
            {data?.skills.skills
              .filter((skill) => skill.category === 'styles')
              .map((skill) => (
                <div key={skill.id} className='flex flex-col items-center'>
                  <Image src={skill.image} alt={skill.title} width='16' />
                  <h3 className='mb-2 mt-2 font-sans text-xl font-bold tracking-tighter text-black'>
                    {skill.title}
                  </h3>
                </div>
              ))}
          </div>
        </Card>
      </Tab>
      <Tab label='Databases' tabName='Databases'>
        <Card>
          {!loading && !data && (
            <div className='flex flex-col'>
              <h3>You got query failed for some reason</h3>
              <p>{error?.message}</p>
            </div>
          )}
          <div className='animate__animated animate__fadeIn w-full mt-6 text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
            {data?.skills.skills
              .filter((skill) => skill.category === 'database')
              .map((skill) => (
                <div key={skill.id} className='flex flex-col items-center'>
                  <Image src={skill.image} alt={skill.title} width='16' />
                  <h3 className='mb-2 mt-2 font-sans text-xl font-bold tracking-tighter text-black'>
                    {skill.title}
                  </h3>
                </div>
              ))}
          </div>
        </Card>
      </Tab>
      <Tab label='Tools' tabName='Tools'>
        <Card>
          {!loading && !data && (
            <div className='flex flex-col'>
              <h3>You got query failed for some reason</h3>
              <p>{error?.message}</p>
            </div>
          )}
          <div className='animate__animated animate__fadeIn w-full mt-6 text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
            {data?.skills.skills
              .filter((skill) => skill.category === 'tool')
              .map((skill) => (
                <div key={skill.id} className='flex flex-col items-center'>
                  <Image src={skill.image} alt={skill.title} width='16' />
                  <h3 className='mb-2 mt-2 font-sans text-xl font-bold tracking-tighter text-black'>
                    {skill.title}
                  </h3>
                </div>
              ))}
          </div>
        </Card>
      </Tab>
      <Tab label='UX' tabName='UX'>
        <Card>
          {!loading && !data && (
            <div className='flex flex-col'>
              <h3>You got query failed for some reason</h3>
              <p>{error?.message}</p>
            </div>
          )}
          <div className='animate__animated animate__fadeIn w-full mt-6 text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
            {data?.skills.skills
              .filter((skill) => skill.category === 'ux')
              .map((skill) => (
                <div key={skill.id} className='flex flex-col items-center'>
                  <Image src={skill.image} alt={skill.title} width='16' />
                  <h3 className='mb-2 mt-2 font-sans text-xl font-bold tracking-tighter text-black'>
                    {skill.title}
                  </h3>
                </div>
              ))}
          </div>
        </Card>
      </Tab>
    </Tabs>
  );
};
