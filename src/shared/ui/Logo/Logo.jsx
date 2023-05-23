import logoImg from "../../assets/logo.png";
import classes from "./styles.module.scss";

export function Logo() {
  return (
    <div className={classes.logo}>
      <img src={logoImg} alt="logo" />
    </div>
  );
}
