import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { InputPassword, InputText } from "../../shared/ui/Inputs";
import { ButtonBig } from "../../shared/ui/Buttons";
import { useLoginMutation } from "../../store/userApi";
import { setUser } from "../../store/slices/userSlice";
import {
  maxLength,
  minLength,
  required,
  validation,
} from "../../shared/lib/validation";
import "./styles.scss";

function AuthForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const passInput = useRef(null);
  const emailInput = useRef(null);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const MSG_1 = "Поле обязательно для заполнения";

  const focusInputByRef = (ref) => {
    ref.current?.focus();
  };

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
      focusInputByRef(invalidEmail ? emailInput : passInput);
    } else {
      try {
        const data = await login().unwrap();
        dispatch(setUser({ email: data.email, token: 777, id: data.id }));
        navigate("/");
      } catch (e) {
        setPassError(e.error);
      }
    }
    setPass("");
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
        ref={emailInput}
      />
      <InputPassword
        value={pass}
        placeholder="Пароль"
        label="Пароль"
        error={passError}
        onChange={(e) => setPass(e.target.value)}
        ref={passInput}
      />
      <ButtonBig text="войти" type="submit" />
    </form>
  );
}

export default AuthForm;
