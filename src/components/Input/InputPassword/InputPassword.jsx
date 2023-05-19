import { useState } from "react";
import "../styles.scss";

/* eslint-disable react/jsx-props-no-spreading */
export default function InputPassword({
  label = null,
  error = null,
  ...props
}) {
  const [viewPass, setViewPass] = useState(false);

  return (
    <div className={error ? "error" : null}>
      <label className="auth-label">
        {label}
        <input
          type={viewPass ? "text" : "password"}
          autoComplete="off"
          className="auth-input"
          {...props}
        />
        <button
          type="button"
          className={`showPass_btn${viewPass ? " eye-off" : " eye"}`}
          onClick={() => setViewPass(!viewPass)}
        />
      </label>
      {error && <div className="errorMessage">{error}</div>}
    </div>
  );
}
