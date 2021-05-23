import React, { ChangeEventHandler } from 'react';
import { nanoid } from 'nanoid';

interface SelectInputProps {
  label: string;
  handleChange: ChangeEventHandler<HTMLSelectElement>;
  data: any;
  selectedValue: any;
  defaultValue: string;
}

export const SelectInput: React.FC<SelectInputProps> = ({
  defaultValue,
  label,
  handleChange,
  data,
  selectedValue,
}) => {
  return (
    <div className='mt-1 relative rounded-md shadow-sm'>
      <label
        id='listbox-label'
        className='block text-sm font-medium text-gray-700'
      >
        {label}
      </label>
      <div className='mt-1 relative'>
        <select
          name='category'
          value={selectedValue}
          onChange={handleChange}
          className='block w-full p-2 pl-4 sm:text-sm border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-gray-800'
        >
          <option selected disabled value=''>
            {defaultValue}
          </option>
          {data?.map((value: any) => (
            <option
              className='text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9'
              key={nanoid()}
              value={value}
            >
              {value}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
