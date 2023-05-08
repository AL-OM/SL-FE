export const cardNumberFormatter = (value: string): string => {
  return value
    .replace(/\s?/g, "")
    .replace(/(\d{4})/g, "$1 ")
    .trim();
};

// 21/08/2019 => 21-08-2019
export const dateFormatterV1 = (date: string): string => {
  return date.split("/").join("-");
};

// 21-08-2019 => 21/08/2019
export const dateFormatterV2 = (date: string): string => {
  return date.split("-").join("/");
};

const addZero = (num: number) => {
  return num > 10 ? `${num}` : `0${num}`;
};

export const dateToDdMmYYY = (value: any, separate?: string) => {
  if (!value) {
    return "";
  }

  const date = new Date(value);

  if (!date) {
    return "";
  }

  const spDate = separateDate(date);

  return `${spDate.day}${separate || "/"}${spDate.month}${separate || "/"}${
    spDate.year
  }`;
};

const separateDate = (date: Date) => {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString();
  const hh = date.getHours();
  const mm = date.getMinutes();

  return { day, month, year, hh, mm };
};
