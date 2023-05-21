import { forwardRef, useState } from "react";
import classes from "./styles.module.scss";

// Отключаем правило eslint для распространения пропсов
/* eslint-disable react/jsx-props-no-spreading */

// Создаем компонент InputText с использованием forwardRef
export const InputField = forwardRef(function InputText(
  { type = "text", label = null, error = null, ...props },
  // Получаем ссылку на элемент input через ref
  ref,
) {
  // Для input типа создаем локальное состояние для переключения типа
  const [viewPass, setViewPass] = useState(false);
  return (
    // Оборачиваем все в div с классом error, если есть ошибка
    <div className={error ? classes.error : null}>
      {/* Создаем label с классом auth-label и текстом из пропса label */}
      <label className={classes.label}>
        {label}
        {/* Создаем input с типом text */}
        <input
          type={type === "password" ? (viewPass ? "text" : "password") : type}
          autoComplete="off"
          className={classes.input}
          {...props}
          // Привязываем ссылку на input через ref
          ref={ref}
        />
        {/* Создаем кнопку с классом showPassBtn и иконкой eye или eyeOff в зависимости от состояния viewPass */}
        {type === "password" && (
          <button
            type="button"
            className={`${classes.showPassBtn} ${
              viewPass ? classes.eyeOff : classes.eye
            }`}
            // При клике по кнопке меняем состояние viewPass на противоположное
            onClick={() => setViewPass(!viewPass)}
          />
        )}
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
