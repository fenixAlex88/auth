import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "shared/api";
import {
  maxLength,
  minLength,
  required,
  validation,
} from "shared/lib/validation";
import { setToken } from "./slices/authSlice";

export function useAuthForm() {
  const dispatch = useDispatch();
  const [signIn] = useLoginMutation();
  const passInput = useRef(null);
  const nameInput = useRef(null);
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [nameError, setNameError] = useState("");
  const [passError, setPassError] = useState("");
  const MSG_1 = "Поле обязательно для заполнения";

  // Функция для фокуса на элементе по ссылке
  const focusInputByRef = (ref) => {
    ref.current?.focus();
  };

  // Функция для валидации поля
  const validateField = (text, min, max) => {
    return validation(text, [required(MSG_1), minLength(min), maxLength(max)]);
  };

  // Функция для обработки ошибок
  const handleError = (nameError, passError) => {
    setNameError(nameError);
    setPassError(passError);
    focusInputByRef(nameError ? nameInput : passInput);
  };

  // Функция для аутентификации
  const authenticate = async (name, pass) => {
    try {
      const data = await signIn(name, pass).unwrap();
      return { data };
    } catch (e) {
      return { error: e.error };
    }
  };

  // Основная функция для отправки формы
  const formSubmitHandler = async (e) => {
    e.preventDefault();
    // Валидируем имя и пароль
    const nameError = validateField(name, 10, 64);
    const passError = validateField(pass, 8, 15);
    // Если есть ошибки, обрабатываем их
    if (nameError || passError) {
      handleError(nameError, passError);
    } else {
      // Если нет ошибок, пытаемся аутентифицироваться
      const { data, error } = await authenticate(name, pass);
      // Если есть данные, сохраняем токен
      if (data) {
        dispatch(setToken({ token: data.phone }));
      }
      // Если есть ошибка, обрабатываем ее
      if (error) {
        handleError("", error);
      }
    }
    // Очищаем поле пароля
    setPass("");
  };

  return {
    name,
    pass,
    nameError,
    passError,
    nameInput,
    passInput,
    setName,
    setPass,
    formSubmitHandler,
  };
}
