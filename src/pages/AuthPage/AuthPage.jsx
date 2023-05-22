import logoImg from "shared/assets/logo.png";
import { AuthForm } from "features/AuthForm";
import { Hlink } from "shared/ui/Hlink";
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
          <Hlink href="/#" text="Забыли пароль?" />
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
