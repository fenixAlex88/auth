import { render, screen, fireEvent } from "@testing-library/react";
import { Hlink } from "./Hlink";

// Описываем набор тестов для компонента HLink
describe("Hlink", () => {
  // Тестируем рендер компонента с обязательными пропсами
  test("renders a link with href and text", () => {
    // Рендерим компонент с пропсами href и text
    render(<Hlink href="https://example.com" text="Example" />);
    // Ищем элемент ссылки по тексту
    const linkElement = screen.getByText(/Example/i);
    // Проверяем, что элемент ссылки существует в документе
    expect(linkElement).toBeInTheDocument();
    // Проверяем, что элемент ссылки имеет атрибут href с правильным значением
    expect(linkElement).toHaveAttribute("href", "https://example.com");
  });

  // Тестируем вызов функции onClick при клике по ссылке
  test("calls onClick function with href when clicked", () => {
    // Создаем мок-функцию для пропса onClick
    const mockOnClick = jest.fn();
    // Рендерим компонент с пропсами href, text и onClick
    render(
      <Hlink href="https://example.com" text="Example" onClick={mockOnClick} />,
    );
    // Ищем элемент ссылки по тексту
    const linkElement = screen.getByText(/Example/i);
    // Симулируем клик по элементу ссылки
    fireEvent.click(linkElement);
    fireEvent.click(linkElement);
    fireEvent.click(linkElement);
    // Проверяем, что мок-функция была вызвана один раз с параметром href
    expect(mockOnClick).toHaveBeenCalledTimes(3);
    expect(mockOnClick).toHaveBeenCalledWith("https://example.com");
  });

  // Тестовый случай для проверки стилей компонента в зависимости от пропса variant
  test("applies different styles based on variant prop", () => {
    // Рендерим компонент с пропсом variant равным "primary"
    render(
      <Hlink href="https://example.com" text="Example" variant="primary" />,
    );
    // Ищем элемент ссылки по тексту
    const linkElement = screen.getByText(/Example/i);
    // Проверяем, что элемент ссылки имеет класс primary из модуля стилей
    expect(linkElement).toHaveClass("primary");
  });
});
