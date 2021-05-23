export const dateConverter = (value: any) => {
  const stringToNumber = Number(value);
  return new Date(stringToNumber);
};
