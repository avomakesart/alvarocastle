import React from 'react';

interface FilterButtonsProps {
  data: string[] | undefined;
  currentData: string[] | string;
  setState: any;
}

export const FilterButtons: React.FC<FilterButtonsProps> = ({
  data,
  currentData,
  setState,
}) => {
  return (
    <div className='flex flex-row justify-center items-center'>
      <span
        className={`cursor-pointer ${
          'all' === currentData ? 'text-white' : 'text-gray-400'
        }`}
        onClick={() => setState('all')}
      >
        All
      </span>
      {data?.map((project) => (
        <span
          className={`ml-4 cursor-pointer ${
            project === currentData ? 'text-white' : 'text-gray-400'
          }`}
          onClick={() => setState(project)}
          key={project}
        >
          {project}
        </span>
      ))}
    </div>
  );
};
