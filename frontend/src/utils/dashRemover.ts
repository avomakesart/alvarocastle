export const dashRemover = (value: string) =>
  value.includes('-') && value.replace(/-/g, ' ');
