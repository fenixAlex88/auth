const DEFAULT_MIN_CHAR_COUNT = 1;

export default function maxLength(minCharCount = DEFAULT_MIN_CHAR_COUNT) {
  if (minCharCount < 1) {
    throw new Error(
      `Валидатор maxLength ожидает положительное минимальное значение длины строки, получил ${minCharCount}`,
    );
  }
  return (value) =>
    value.length <= minCharCount
      ? null
      : `Количество символов должно быть меньше ${minCharCount}`;
}
