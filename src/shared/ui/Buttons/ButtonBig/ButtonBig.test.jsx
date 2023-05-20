import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Импортируем компонент ButtonBig
import ButtonBig from "./ButtonBig";

// Описываем набор тестов для компонента ButtonBig
describe("ButtonBig", () => {
  // Тест на рендеринг кнопки с текстом и типом
  test("renders button with text and type", () => {
    // Рендерим компонент с пропсами text и type
    render(<ButtonBig text="Click me" type="submit" />);

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
    render(<ButtonBig text="Click me" />);

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
    render(<ButtonBig text="Click me" onClick={handleClick} />);

    // Получаем элемент button по роли button
    const button = screen.getByRole("button", { name: "Click me" });

    // Симулируем клик по кнопке
    userEvent.click(button);

    // Проверяем, что мок-функция была вызвана один раз
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
