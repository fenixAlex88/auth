import PropTypes from "prop-types";
import classes from "./styles.module.scss";
import { connectClassnames } from "../../lib/dom";

// Кастомный компонент Hlink, который принимает пропсы href, text и onClick
export function Hlink({ href, text, onClick, variant }) {
  // Функция для обработки клика по ссылке
  const handleClick = (e) => {
    // Предотвращаем дефолтное поведение браузера
    e.preventDefault();
    // Вызываем переданный пропс onClick с параметром href
    if (onClick) {
      onClick(href);
    }
  };

  // Возвращаем JSX элемент ссылки с переданными пропсами
  return (
    <a
      href={href}
      onClick={handleClick}
      className={connectClassnames(
        classes.link,
        variant ? classes[variant] : null,
      )}
    >
      {text}
    </a>
  );
}

// Определяем типы пропсов для компонента Hlink
Hlink.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["primary"]),
};

Hlink.defaultProps = {
  variant: "primary",
  onClick: null,
};
