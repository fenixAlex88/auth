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
  const [login] = useLoginMutation();
  const passInput = useRef(null);
  const nameInput = useRef(null);
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [nameError, setNameError] = useState("");
  const [passError, setPassError] = useState("");
  const MSG_1 = "Поле обязательно для заполнения";

  const focusInputByRef = (ref) => {
    ref.current?.focus();
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    const invalidName = validation(name, [
      required(MSG_1),
      minLength(10),
      maxLength(64),
    ]);
    const invalidPass = validation(pass, [
      required(MSG_1),
      minLength(8),
      maxLength(15),
    ]);
    if (invalidName || invalidPass) {
      setNameError(invalidName);
      setPassError(invalidPass);
      focusInputByRef(invalidName ? nameInput : passInput);
    } else {
      setNameError("");
      setPassError("");
      try {
        const data = await login().unwrap();
        dispatch(setToken({ token: data.email }));
      } catch (e) {
        setPassError(e.error);
      }
    }
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
