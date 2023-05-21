import { InputField } from "shared/ui/InputField";
import { Button } from "shared/ui/Button";
import { useAuthForm } from "../model";
import classes from "./styles.module.scss";

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
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <h1 className={classes.title}>Добро пожаловать!</h1>
      <InputField
        value={email}
        placeholder="Имя пользователя"
        label="Имя пользователя"
        error={emailError}
        ref={emailInput}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        type="password"
        value={pass}
        placeholder="Пароль"
        label="Пароль"
        error={passError}
        ref={passInput}
        onChange={(e) => setPass(e.target.value)}
      />
      <Button type="submit" size="large" variant="warning">
        войти
      </Button>
    </form>
  );
}
