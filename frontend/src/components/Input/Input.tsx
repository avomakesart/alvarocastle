import { useField } from 'formik';
import React, { CSSProperties, InputHTMLAttributes, ReactElement } from 'react';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  htmlFor: string;
  onChange: any;
  label?: string | ReactElement;
  labelColor?: string;
  textAlign?: string;
  type: string | any;
  placeholder?: string;
  name: string;
  focusColor?: string;
  id: string;
  style?: CSSProperties;
};

export const Input: React.FC<InputFieldProps> = ({
  htmlFor,
  label,
  type,
  onChange,
  placeholder,
  labelColor,
  focusColor,
  textAlign,
  id,
  style,
  ...props
}) => {
  const [field, { error }] = useField(props);
  return (
    <>
      <label
        htmlFor={htmlFor}
        className={`text-sm leading-7 ${textAlign} text-${labelColor}`}
    >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={field.name}
        placeholder={placeholder}
        onChange={field.onChange}
        value={field.value}
        style={style}
        className={`${
          error &&
          'border-red-500 focus:ring-2 focus:ring-red-200 focus:outline-none'
        } w-full px-4 py-2 mb-4 text-black transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg mr-4text-base focus:border-${focusColor} focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2`}
      />
    </>
  );
};
