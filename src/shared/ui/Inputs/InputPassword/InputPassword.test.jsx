import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Импортируем компонент InputPassword
import InputPassword from "./InputPassword";

// Описываем набор тестов для компонента InputPassword
describe("InputPassword", () => {
  // Тест на рендеринг компонента с пропсами label и error
  test("renders input with label and error", () => {
    // Рендерим компонент с пропсами label и error
    render(
      <InputPassword
        label="Password"
        error="This field is required"
        placeholder="Enter your password"
        value=""
        onChange={() => {}}
        data-testid="inputPassword"
      />,
    );

    // Проверяем, что есть элемент с текстом "Password"
    expect(screen.getByText("Password")).toBeInTheDocument();
    // Проверяем, что есть элемент с текстом "Enter your password"
    expect(
      screen.getByPlaceholderText("Enter your password"),
    ).toBeInTheDocument();
    // Проверяем, что есть элемент с текстом "This field is required"
    expect(screen.getByText("This field is required")).toBeInTheDocument();
    // Проверяем, что есть элемент input по testID
    expect(screen.getByTestId("inputPassword")).toBeInTheDocument();
  });

  // Тест на рендеринг компонента без пропса error
  test("renders input without error", () => {
    // Рендерим компонент без пропса error
    render(<InputPassword label="Password" value="" onChange={() => {}} />);

    // Проверяем, что нет элемента с атрибутом errorMessage
    const nextElement = screen.queryByTestId("errorMessage");
    expect(nextElement).not.toBeInTheDocument();
  });

  // Тест на вызов функции onChange при вводе в input
  test("calls onChange handler when typing in input", () => {
    // Создаем мок-функцию для обработчика onChange
    const handleChange = jest.fn();

    // Рендерим компонент с мок-функцией в пропсе onChange
    render(
      <InputPassword
        label="Password"
        value=""
        onChange={handleChange}
        data-testid="inputPassword"
      />,
    );

    // Получаем элемент input по testID
    const input = screen.getByTestId("inputPassword");

    // Симулируем ввод текста в input
    userEvent.type(input, "qwerty123");

    // Проверяем, что мок-функция была вызвана девять раз (по количеству символов)
    expect(handleChange).toHaveBeenCalledTimes(9);
  });

  // Тест на переключение типа input между password и text при клике на кнопку showPass_btn
  test("toggles input type between password and text when clicking on showPass_btn button", () => {
    // Рендерим компонент с любыми пропсами
    render(
      <InputPassword
        label="Password"
        value="qwerty123"
        onChange={() => {}}
        data-testid="inputPassword"
      />,
    );

    // Получаем элемент input по testID
    const input = screen.getByTestId("inputPassword");

    // Получаем элемент button по роли button
    const button = screen.getByRole("button");

    // Проверяем, что изначально тип input равен password
    expect(input).toHaveAttribute("type", "password");

    // Симулируем клик по кнопке showPass_btn
    fireEvent.click(button);

    // Проверяем, что после клика тип input изменился на text
    expect(input).toHaveAttribute("type", "text");

    // Симулируем еще один клик по кнопке showPass_btn
    fireEvent.click(button);

    // Проверяем, что после второго клика тип input вернулся к password
    expect(input).toHaveAttribute("type", "password");
  });

  // Тест на привязку ссылки на элемент input через ref
  test("binds ref to input element", () => {
    // Создаем ref с помощью React.createRef()
    const ref = React.createRef();

    // Рендерим компонент с ref в пропсе ref
    render(<InputPassword label="Password" value="" onChange={() => {}} ref={ref} data-testid="inputPassword"/>);

    // Получаем элемент input по роли textbox
    const input = screen.getByTestId("inputPassword");

    // Проверяем, что ref.current указывает на элемент button
    expect(ref.current).toBe(input);
  });
});
