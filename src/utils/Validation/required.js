export default function required(message = "Обязательное поле") {
  return (value) => (value ? null : message);
}
