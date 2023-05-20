import { useState, forwardRef } from "react";
import classes from "../styles.module.scss";

// Отключаем правило eslint для распространения пропсов
/* eslint-disable react/jsx-props-no-spreading */

// Создаем компонент InputPassword с использованием forwardRef
const InputPassword = forwardRef(function InputPassword(
  { label = null, error = null, ...props },
  // Получаем ссылку на элемент input через ref
  ref,
) {
  // Создаем локальное состояние для переключения типа input между password и text
  const [viewPass, setViewPass] = useState(false);

  return (
    // Оборачиваем все в div с классом error, если есть ошибка
    <div className={error ? classes.error : null}>
      <label className={classes.label}>
        {label}
        {/* Создаем input с типом password или text в зависимости от состояния viewPass */}
        <input
          type={viewPass ? "text" : "password"}
          autoComplete="off"
          className={classes.input}
          {...props}
          // Привязываем ссылку на input через ref
          ref={ref}
        />
        {/* Создаем кнопку с классом showPassBtn и иконкой eye или eyeOff в зависимости от состояния viewPass */}
        <button
          type="button"
          className={`${classes.showPassBtn} ${
            viewPass ? classes.eyeOff : classes.eye
          }`}
          // При клике по кнопке меняем состояние viewPass на противоположное
          onClick={() => setViewPass(!viewPass)}
        />
      </label>
      {/* Если есть ошибка, то показываем div с классом errorMessage и текстом из пропса error */}
      {error && <div className={classes.errorMessage}>{error}</div>}
    </div>
  );
});

export default InputPassword;
