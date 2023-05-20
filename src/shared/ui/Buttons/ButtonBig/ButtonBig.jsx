import classes from "../styles.module.scss";

// Отключаем правило eslint для распространения пропсов
/* eslint-disable react/jsx-props-no-spreading */

function ButtonBig({ text, type = "button", ...props }) {
  return (
    // Создаем элемент button с типом submit или button в зависимости от пропса type
    <button
      type={type === "submit" ? "submit" : "button"}
      className={classes.bigBtn}
      {...props}
    >
      {/* Выводим текст из пропса text внутри button */}
      {text}
    </button>
  );
}

export default ButtonBig;
