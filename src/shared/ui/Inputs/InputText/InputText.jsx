import { forwardRef } from "react";
import classes from "../styles.module.scss";

// Отключаем правило eslint для распространения пропсов
/* eslint-disable react/jsx-props-no-spreading */

// Создаем компонент InputText с использованием forwardRef
const InputText = forwardRef(function InputText(
  { label = null, error = null, ...props },
  // Получаем ссылку на элемент input через ref
  ref,
) {
  return (
    // Оборачиваем все в div с классом error, если есть ошибка
    <div className={error ? classes.error : null}>
      {/* Создаем label с классом auth-label и текстом из пропса label */}
      <label className={classes.label}>
        {label}
        {/* Создаем input с типом text */}
        <input
          type="text"
          autoComplete="off"
          className={classes.input}
          {...props}
          // Привязываем ссылку на input через ref
          ref={ref}
        />
      </label>
      {/* Если есть ошибка, то показываем div с классом errorMessage и текстом из пропса error */}
      {error && (
        <div className={classes.errorMessage} data-testid="errorMessage">
          {error}
        </div>
      )}
    </div>
  );
});

export default InputText;
