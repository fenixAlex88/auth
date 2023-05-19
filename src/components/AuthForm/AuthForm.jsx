import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { InputPassword, InputText } from "../Input";
import "./styles.scss";
import AuthButton from "../Buttons/AuthButton/AuthButton";
import { useLoginMutation } from "../../store/userApi";
import { setUser } from "../../store/slices/userSlice";
import {
  validation,
  required,
  minLength,
  maxLength,
} from "../../utils/validation";

function AuthForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login] = useLoginMutation();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const MSG_1 = "Поле обязательно для заполнения";

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    const invalidEmail = validation(email, [
      required(MSG_1),
      minLength(10),
      maxLength(64),
    ]);
    const invalidPass = validation(pass, [
      required(MSG_1),
      minLength(8),
      maxLength(15),
    ]);
    if (invalidEmail || invalidPass) {
      setEmailError(invalidEmail);
      setPassError(invalidPass);
    } else {
      try {
        const data = await login().unwrap();
        dispatch(setUser({ email: data.email, token: 777, id: data.id }));
        navigate("/");
      } catch (e) {
        // обрабатываем ошибку
      }
    }
  };

  return (
    <form className="auth-form" onSubmit={formSubmitHandler}>
      <h1 className="auth-title">Добро пожаловать!</h1>
      <InputText
        value={email}
        placeholder="Имя пользователя"
        label="Имя пользователя"
        error={emailError}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputPassword
        value={pass}
        placeholder="Пароль"
        label="Пароль"
        error={passError}
        onChange={(e) => setPass(e.target.value)}
      />
      <AuthButton text="войти" />
    </form>
  );
}

export default AuthForm;
