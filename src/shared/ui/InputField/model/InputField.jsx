import { useState } from "react";
import { connectClassnames } from "shared/lib/dom";
import classes from "../ui/styles.module.scss";

// Кастомный хук useInputField для работы с input типа password
export function useInputField(type) {
  const [viewPass, setViewPass] = useState(false);

  // Функция для обработки клика по кнопке показа пароля
  const handleToggleViewPass = () => {
    // Меняем состояние viewPass на противоположное
    setViewPass(!viewPass);
  };

  // Функция для получения типа input в зависимости от пропса type и состояния viewPass
  const getInputType = () => {
    if (type === "password") {
      return viewPass ? "text" : "password";
    }
    return type;
  };

  // Функцию для получения класса кнопки показа пароля в зависимости от состояния viewPass
  const getShowPassBtnClass = () =>
    connectClassnames(
      classes.showPassBtn,
      viewPass ? classes.eyeOff : classes.eye,
    );

  // Возвращаем состояние и функции из хука
  return {
    handleToggleViewPass,
    getInputType,
    getShowPassBtnClass,
  };
}
