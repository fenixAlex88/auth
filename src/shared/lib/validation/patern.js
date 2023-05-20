export default function patern(regex, message = "Данные некоректны") {
  return (value) => (regex.test(value) ? null : message);
}
