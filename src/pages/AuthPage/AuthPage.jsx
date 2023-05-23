import { AuthWindow } from "../../widgets/AuthWindow/AuthWindow";
import classes from "./styles.module.scss";

function AuthPage() {
  return (
    <div className={classes.container}>
      <AuthWindow />
    </div>
  );
}

export default AuthPage;
