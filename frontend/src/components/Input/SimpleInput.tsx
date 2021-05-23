import React, { ChangeEventHandler, CSSProperties } from 'react';

interface SimpleInputPros {
  label: string;
  name: string;
  id: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  inputError: string | undefined;
  errorMessage: string | undefined;
  touched: boolean | undefined;
  styles?: CSSProperties;
}

export const SimpleInput: React.FC<SimpleInputPros> = ({ ...props }) => {
  return (
    <div className='flex flex-row items-center mb-10' style={props.styles}>
      <p className='text-white text-sm md:text-4xl'>{props.label}</p>
      <div className='flex flex-col'>
        <input
          name={props.name}
          id={props.id}
          value={props.value}
          onChange={props.onChange}
          className={`bg-transparent text-white ml-6 border-b-2 p-2 focus:outline-none text-sm md:text-4xl ${
            props.inputError ? 'border-red-400' : 'border-white'
          } max-w-full min-w-48`}
        />
        {props.errorMessage && props.touched ? (
          <span className='text-white font-bold tracking-wider pt-2'>
            {props.errorMessage}
          </span>
        ) : null}
      </div>
    </div>
  );
};
