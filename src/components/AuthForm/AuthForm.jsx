import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { InputPassword, InputText } from "../Input";
import { Max, Min, Required } from "../../utils/Validation";
import "./styles.scss";
import AuthButton from "../Buttons/AuthButton/AuthButton";
import { useLoginMutation } from "../../store/userApi";
import { setUser } from "../../store/slices/userSlice";

function AuthForm() {
  const dispatch = useDispatch();
  //  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const MSG_1 = "Поле обязательно для заполнения";
  const [login] = useLoginMutation();
  const formSubmitHandler = (e) => {
    e.preventDefault();
    try {
      setEmailError(
        Required(email, MSG_1) ||
          Max(email, 64, "Максимальная длина 64 символа") ||
          Min(email, 10, "Минимальная длина 10 символов"),
      );
      setPassError(
        Required(pass, MSG_1) ||
          Max(pass, 15, "Максимальная длина 15 символа") ||
          Min(pass, 8, "Минимальная длина 8 символов"),
      );
      /* navigate("/"); */
    } catch (e) {
      // console.error(e.message);
    }
  };

  useEffect(async () => {
    if (emailError && passError) {
      const data = await login().unwrap();
      dispatch(setUser({ email: data.email, token: 777, id: data.id }));
    }
  }, [emailError, passError]);

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
