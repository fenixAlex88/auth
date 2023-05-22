import { useState } from "react";
import { connectClassnames } from "shared/lib/dom";
import classes from "../ui/styles.module.scss";

// Создаем кастомный хук useInputField для работы с input типа password
export function useInputField(type) {
  // Создаем локальное состояние для переключения типа
  const [viewPass, setViewPass] = useState(false);

  // Создаем функцию для обработки клика по кнопке показа пароля
  const handleToggleViewPass = () => {
    // Меняем состояние viewPass на противоположное
    setViewPass(!viewPass);
  };

  // Создаем функцию для получения типа input в зависимости от пропса type и состояния viewPass
  const getInputType = () => {
    if (type === "password") {
      return viewPass ? "text" : "password";
    }
    return type;
  };

  // Создаем функцию для получения класса кнопки показа пароля в зависимости от состояния viewPass
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
