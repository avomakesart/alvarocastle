import { dashRemover } from '.';

export const firstCharToUppercase = (value: string) =>
  value.charAt(0).toUpperCase() + dashRemover(value).toString().slice(1);
