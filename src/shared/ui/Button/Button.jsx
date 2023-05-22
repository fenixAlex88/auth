import PropTypes from "prop-types";
import { connectClassnames } from "shared/lib/dom";
import classes from "./styles.module.scss";

// Отключаем правило eslint для распространения пропсов
/* eslint-disable react/jsx-props-no-spreading */

export function Button({ children, type, size, variant, ...props }) {
  return (
    // Создаем элемент button с типом submit или button в зависимости от пропса type
    <button
      type={type === "submit" ? "submit" : "button"}
      className={connectClassnames(
        classes.btn,
        size ? classes[size] : null,
        variant ? classes[variant] : null,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit"]),
  size: PropTypes.oneOf(["normal", "large"]),
  variant: PropTypes.oneOf(["primary", "warning"]),
};

Button.defaultProps = {
  type: "button",
  size: "normal",
  variant: "primary",
};
