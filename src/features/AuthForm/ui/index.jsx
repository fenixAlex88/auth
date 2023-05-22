import { InputField } from "shared/ui/InputField";
import { Button } from "shared/ui/Button";
import { useAuthForm } from "../model";
import classes from "./styles.module.scss";

export function AuthForm() {
  const {
    name,
    pass,
    nameError,
    passError,
    nameInput,
    passInput,
    setName,
    setPass,
    formSubmitHandler,
  } = useAuthForm();

  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <h1 className={classes.title}>Добро пожаловать!</h1>
      <InputField
        value={name}
        placeholder="Имя пользователя"
        label="Имя пользователя"
        error={nameError}
        ref={nameInput}
        onChange={(e) => setName(e.target.value)}
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
