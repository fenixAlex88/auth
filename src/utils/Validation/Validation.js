export const Required = (text, message = true) =>
  text.length === 0 ? message : false;
export const Max = (text, maxLength, message = true) =>
  text.length > maxLength ? message : false;
export const Min = (text, minLength, message = true) =>
  text.length < minLength ? message : false;
