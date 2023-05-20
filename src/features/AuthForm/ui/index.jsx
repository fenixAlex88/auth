import { InputPassword, InputText } from "shared/ui/Inputs";
import { ButtonBig } from "shared/ui/Buttons";
import "./styles.scss";
import { useAuthForm } from "../model/useAuthForm";

export function AuthForm() {
  const {
    email,
    pass,
    emailError,
    passError,
    emailInput,
    passInput,
    setEmail,
    setPass,
    formSubmitHandler,
  } = useAuthForm();

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
