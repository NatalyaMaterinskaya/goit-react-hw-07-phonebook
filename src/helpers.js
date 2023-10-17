export const isExist = (arr, name) =>
  arr.find(item => item.name.toLowerCase() === name.toLowerCase());
