import "./styles.scss";
import logoImg from "shared/assets/logo.png";
import { AuthForm } from "features/AuthForm";

function AuthPage() {
  return (
    <div className="container">
      <div className="auth">
        <div className="auth-logo">
          <img src={logoImg} alt="" className="logo-img" />
        </div>
        <AuthForm />
        <div>
          <a href="/#" className="auth-link">
            Забыли пароль?
          </a>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
