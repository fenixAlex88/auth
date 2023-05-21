import logoImg from "shared/assets/logo.png";
import { AuthForm } from "features/AuthForm";
import classes from "./styles.module.scss";

function AuthPage() {
  return (
    <div className={classes.container}>
      <div className={classes.auth}>
        <div className={classes.logo}>
          <img src={logoImg} alt="logo" />
        </div>
        <AuthForm />
        <div>
          <a href="/#" className={classes.link}>
            Забыли пароль?
          </a>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
