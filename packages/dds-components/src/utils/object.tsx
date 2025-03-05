export const isEmpty = (obj: object) =>
  Object.keys(obj).length === 0 && obj.constructor === Object;
