const DEFAULT_MIN_CHAR_COUNT = 1;

export default function minLength(minCharCount = DEFAULT_MIN_CHAR_COUNT) {
  if (minCharCount < 1) {
    throw new Error(
      `Валидатор minLength ожидает положительное минимальное значение длины строки, получил ${minCharCount}`,
    );
  }
  return (value) =>
    value.length >= minCharCount
      ? null
      : `Количество символов должно быть больше ${minCharCount}`;
}
