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
