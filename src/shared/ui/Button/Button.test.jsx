import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Импортируем компонент Button и его стили
import { Button } from "./Button";
import classes from "./styles.module.scss";

// Описываем набор тестов для компонента Button
describe("Button", () => {
  // Тестируем, что компонент рендерится с дефолтными пропсами
  test("renders with default props", () => {
    // Рендерим компонент с текстом "Default"
    render(<Button>Default</Button>);

    // Получаем элемент button по тексту
    const button = screen.getByText("Default");

    // Проверяем, что элемент button имеет тип "button"
    expect(button).toHaveAttribute("type", "button");

    // Проверяем, что элемент button имеет класс btn из стилей
    expect(button).toHaveClass(classes.btn);
  });

  // Тестируем, что компонент рендерится с пропсом type="submit"
  test("renders with type submit", () => {
    // Рендерим компонент с текстом "Submit" и пропсом type="submit"
    render(<Button type="submit">Submit</Button>);

    // Получаем элемент button по тексту
    const button = screen.getByText("Submit");

    // Проверяем, что элемент button имеет тип "submit"
    expect(button).toHaveAttribute("type", "submit");
  });

  // Тестируем, что компонент рендерится с пропсом size="large"
  test("renders with size large", () => {
    // Рендерим компонент с текстом "Small" и пропсом size="large"
    render(<Button size="large">Large</Button>);

    // Получаем элемент button по тексту
    const button = screen.getByText("Large");

    // Проверяем, что элемент button имеет класс small из стилей
    expect(button).toHaveClass(classes.large);
  });

  // Тестируем, что компонент рендерится с пропсом variant="primary"
  test("renders with variant primary", () => {
    // Рендерим компонент с текстом "Primary" и пропсом variant="primary"
    render(<Button variant="warning">Warning</Button>);

    // Получаем элемент button по тексту
    const button = screen.getByText("Warning");

    // Проверяем, что элемент button имеет класс primary из стилей
    expect(button).toHaveClass(classes.warning);
  });

  // Тест на вызов функции onClick при клике на кнопку
  test("calls onClick handler when clicking on button", () => {
    // Создаем мок-функцию для обработчика onClick
    const handleClick = jest.fn();

    // Рендерим компонент с мок-функцией в пропсе onClick
    render(<Button onClick={handleClick}>Click me</Button>);

    // Получаем элемент button по роли button
    const button = screen.getByRole("button");

    // Симулируем клики по кнопке
    userEvent.click(button);
    userEvent.click(button);
    userEvent.click(button);

    // Проверяем, что мок-функция была вызвана один раз
    expect(handleClick).toHaveBeenCalledTimes(3);
  });
});
