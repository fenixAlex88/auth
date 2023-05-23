import { AuthForm } from "features/AuthForm";
import { AuthLink } from "shared/ui/AuthLink/AuthLink";
import { Logo } from "shared/ui/Logo/Logo";
import classes from "./styles.module.scss";

export function AuthWindow() {
  return (
    <div className={classes.auth}>
      <Logo />
      <AuthForm />
      <AuthLink />
    </div>
  );
}
