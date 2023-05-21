/* import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Импортируем компонент ButtonBig
import Button from "./Button";

// Описываем набор тестов для компонента ButtonBig
describe("ButtonBig", () => {
  // Тест на рендеринг кнопки с текстом и типом
  test("renders button with text and type", () => {
    // Рендерим компонент с пропсами text и type
    render(<Button type="submit">Click me</Button>);

    // Проверяем, что есть элемент button с текстом "Click me"
    expect(
      screen.getByRole("button", { name: "Click me" }),
    ).toBeInTheDocument();
    // Проверяем, что тип кнопки равен submit
    expect(screen.getByRole("button", { name: "Click me" })).toHaveAttribute(
      "type",
      "submit",
    );
  });

  // Тест на рендеринг кнопки с текстом и без типа
  test("renders button with text and without type", () => {
    // Рендерим компонент с пропсом text
    render(<Button>Click me</Button>);

    // Проверяем, что есть элемент button с текстом "Click me"
    expect(
      screen.getByRole("button", { name: "Click me" }),
    ).toBeInTheDocument();
    // Проверяем, что тип кнопки равен button по умолчанию
    expect(screen.getByRole("button", { name: "Click me" })).toHaveAttribute(
      "type",
      "button",
    );
  });

  // Тест на вызов функции onClick при клике на кнопку
  test("calls onClick handler when clicking on button", () => {
    // Создаем мок-функцию для обработчика onClick
    const handleClick = jest.fn();

    // Рендерим компонент с мок-функцией в пропсе onClick
    render(<Button onClick={handleClick} >Click me</Button>);

    // Получаем элемент button по роли button
    const button = screen.getByRole("button");

    // Симулируем клик по кнопке
    userEvent.click(button);

    // Проверяем, что мок-функция была вызвана один раз
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
}); */
