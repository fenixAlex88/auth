import "../styles.scss";

/* eslint-disable react/jsx-props-no-spreading */
export default function InputText({ label = null, error = null, ...props }) {
  return (
    <div className={error ? "error" : null}>
      <label className="auth-label">
        {label}
        <input
          type="text"
          autoComplete="off"
          className="auth-input"
          {...props}
        />
      </label>
      {error && <div className="errorMessage">{error}</div>}
    </div>
  );
}
