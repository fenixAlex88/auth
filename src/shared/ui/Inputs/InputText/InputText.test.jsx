import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Импортируем компонент InputText
import InputText from "./InputText";

// Описываем набор тестов для компонента InputText
describe("InputText", () => {
  // Тест на рендеринг компонента с пропсами label и error
  test("renders input with label, placeholder and error", () => {
    // Рендерим компонент с пропсами placeholder, label и error
    render(
      <InputText
        label="Name"
        placeholder="Enter your name"
        error="This field is required"
        value=""
        onChange={() => {}}
      />,
    );

    // Проверяем, что есть элемент с текстом "Name"
    expect(screen.getByText("Name")).toBeInTheDocument();
    // Проверяем, что есть элемент с текстом "This field is required"
    expect(screen.getByText("This field is required")).toBeInTheDocument();
    // Проверяем, что есть элемент с текстом "Enter your name"
    expect(screen.getByPlaceholderText("Enter your name")).toBeInTheDocument();
    // Проверяем, что есть элемент input
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  // Тест на рендеринг компонента без пропса error
  test("renders input without error", () => {
    // Рендерим компонент без пропса error
    render(<InputText label="Name" value="" onChange={() => {}} />);

    // Проверяем, что нет элемента с атрибутом errorMessage
    const nextElement = screen.queryByTestId("errorMessage");
    expect(nextElement).not.toBeInTheDocument();
  });

  // Тест на вызов функции onChange при вводе в input
  test("calls onChange handler when typing in input", () => {
    // Создаем мок-функцию для обработчика onChange
    const handleChange = jest.fn();

    // Рендерим компонент с мок-функцией в пропсе onChange
    render(<InputText label="Name" value="" onChange={handleChange} />);

    // Получаем элемент input по роли textbox
    const input = screen.getByRole("textbox");

    // Симулируем ввод текста в input
    userEvent.type(input, "John");

    // Проверяем, что мок-функция была вызвана четыре раза (по количеству символов)
    expect(handleChange).toHaveBeenCalledTimes(4);
  });


  // Тест на привязку ссылки на элемент input через ref
  test("binds ref to input element", () => {
    // Создаем ref с помощью React.createRef()
    const ref = React.createRef();

    // Рендерим компонент с ref в пропсе ref
    render(<InputText label="Name" value="" onChange={() => {}} ref={ref} />);

    // Получаем элемент input по роли textbox
    const input = screen.getByRole("textbox");

    // Проверяем, что ref.current указывает на элемент button
    expect(ref.current).toBe(input);
  });
});
