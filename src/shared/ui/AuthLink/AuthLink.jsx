import classes from "./styles.module.scss";

export function AuthLink() {
  return (
    <div>
      <a href="/#" className={classes.link}>
        Забыли пароль?
      </a>
    </div>
  );
}
