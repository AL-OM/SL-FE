export const example = (): boolean => {
  return true;
};

export const isEmpty = (value: unknown): boolean => {
  return value === undefined || value === "" || value === null;
};
