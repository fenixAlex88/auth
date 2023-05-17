import "../styles.scss";

export default function AuthButton({ text, clickHandler = null }) {
  return (
    <button type="submit" className="auth-btn" onClick={clickHandler}>
      {text}
    </button>
  );
}
