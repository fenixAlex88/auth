import { InputField } from "shared/ui/InputField";
import { Button } from "shared/ui/Button";
import { useAuthForm } from "../model";
import classes from "./styles.module.scss";

export function AuthForm() {
  const {
    username,
    password,
    nameError,
    passError,
    nameInput,
    passInput,
    setUsername,
    setPassword,
    formSubmitHandler,
  } = useAuthForm();

  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <h1 className={classes.title}>Добро пожаловать!</h1>
      <InputField
        value={username}
        placeholder="Имя пользователя"
        label="Имя пользователя"
        error={nameError}
        ref={nameInput}
        onChange={(e) => setUsername(e.target.value)}
      />
      <InputField
        type="password"
        value={password}
        placeholder="Пароль"
        label="Пароль"
        error={passError}
        ref={passInput}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit" size="large" variant="warning">
        войти
      </Button>
    </form>
  );
}
