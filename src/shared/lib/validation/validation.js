export default function validation(value, validators) {
  let validationResult = null;
  let i = 0;
  while (validationResult === null && i < validators.length) {
    const res = validators[i](value);
    if (res) validationResult = res;
    i += 1;
  }
  return validationResult;
}
