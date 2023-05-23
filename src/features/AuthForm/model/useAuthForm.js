import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "shared/api";
import {
  maxLength,
  minLength,
  required,
  validation,
} from "shared/lib/validation";
import { setToken } from "./authSlice";

export function useAuthForm() {
  const dispatch = useDispatch();
  const [signIn] = useLoginMutation();
  const passInput = useRef(null);
  const nameInput = useRef(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [passError, setPassError] = useState("");
  const MSG_1 = "Поле обязательно для заполнения";
  const MSG_2 = "Неверное имя пользователя и/или пароль.";

  // Очищаем поля при вводе
  useEffect(() => {
    if (username) setNameError("");
  }, [username]);
  useEffect(() => {
    if (password) setPassError("");
  }, [password]);

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
    } catch (error) {
      return { error };
    }
  };

  // Основная функция для отправки формы
  const formSubmitHandler = async (e) => {
    e.preventDefault();
    // Валидируем имя и пароль
    const nameError = validateField(username, 10, 64);
    const passError = validateField(password, 8, 15);
    // Если есть ошибки, обрабатываем их
    if (nameError || passError) {
      handleError(nameError, passError);
    } else {
      // Если нет ошибок, пытаемся аутентифицироваться
      const { data, error } = await authenticate(username, password);
      // Если есть данные, сохраняем токен
      if (data) {
        dispatch(setToken({ token: data.auth_token }));
      }
      // Если есть ошибка, обрабатываем ее
      else if (error) {
        const message = error.status === 401 ? MSG_2 : "Ошибка авторизации";
        handleError(" ", message);
      }
    }
    // Очищаем поле пароля
    setPassword("");
  };

  return {
    username,
    password,
    nameError,
    passError,
    nameInput,
    passInput,
    setUsername,
    setPassword,
    formSubmitHandler,
  };
}
