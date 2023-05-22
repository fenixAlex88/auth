import { forwardRef } from "react";
import PropTypes from "prop-types";
import { useInputField } from "../model/InputField";
import classes from "./styles.module.scss";

// Создаем компонент InputText с использованием forwardRef
export const InputField = forwardRef(function InputText(
  { type = "text", label = null, error = null, ...props },
  // Получаем ссылку на элемент input через ref
  ref,
) {
  // Используем кастомный хук useInputField для получения состояния и функций для input типа password
  const { handleToggleViewPass, getInputType, getShowPassBtnClass } =
    useInputField(type);

  return (
    // Оборачиваем все в div с классом error, если есть ошибка
    <div className={error ? classes.error : null}>
      {/* Создаем label с классом auth-label и текстом из пропса label */}
      <label className={classes.label}>
        {label}
        {/* Создаем input с типом text */}
        <input
          type={getInputType()}
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
            className={getShowPassBtnClass()}
            // При клике по кнопке меняем состояние viewPass на противоположное
            onClick={handleToggleViewPass}
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

InputField.propTypes = {
  type: PropTypes.oneOf(["text", "password"]),
  label: PropTypes.string,
  error: PropTypes.string,
};

InputField.defaultProps = {
  type: "text",
  label: null,
  error: null,
};
