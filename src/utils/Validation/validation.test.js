import validation from "./validation";
import required from "./required";
import minLength from "./minLength";
import maxLength from "./maxLength";
import patern from "./patern";

// описываем набор тестов для функции validation
describe("validation", () => {
  // описываем тест для случая, когда значение проходит все валидаторы
  test("should return null if value passes all validators", () => {
    // вызываем функцию validation с аргументами
    const result = validation("Hello", [
      required(),
      minLength(3),
      maxLength(10),
    ]);
    // проверяем, что результат равен null
    expect(result).toBeNull();
  });

  // описываем тест для случая, когда значение не проходит первый валидатор
  test("should return error message if value fails first validator", () => {
    // вызываем функцию validation с аргументами
    const result = validation("", [required(), minLength(3), maxLength(10)]);
    // проверяем, что результат равен "Required"
    expect(result).toBe("Обязательное поле");
  });

  // описываем тест для случая, когда значение не проходит второй валидатор
  test("should return error message if value fails second validator", () => {
    // вызываем функцию validation с аргументами
    const result = validation("Hi", [required(), minLength(3), maxLength(10)]);
    // проверяем, что результат равен "Min length is 3"
    expect(result).toBe("Количество символов должно быть больше 3");
  });

  // описываем тест для случая, когда значение не проходит третий валидатор
  test("should return error message if value fails third validator", () => {
    // вызываем функцию validation с аргументами
    const result = validation("Hello world", [
      required(),
      minLength(3),
      maxLength(10),
    ]);
    // проверяем, что результат равен "Max length is 10"
    expect(result).toBe("Количество символов должно быть меньше 10");
  });
  // проверяем только на латинские символы
    test("should return null if value passes regExp validators", () => {
    // вызываем функцию validation с аргументами
    const result = validation("Hello", [
      patern(/^[A-Za-z]*$/),
    ]);
    // проверяем, что результат равен null
    expect(result).toBeNull();
  });
  test("should return error message if value fails regExp validators", () => {
    // вызываем функцию validation с аргументами
    const result = validation("1Hello!", [
      patern(/^[A-Za-z]*$/),
    ]);
    // проверяем, что результат равен null
    expect(result).toBe("Данные некоректны");
  });
});
