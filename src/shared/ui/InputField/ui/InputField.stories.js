import { InputField } from "./InputField";
import "app/index.scss";

export default {
  title: "InputField",
  component: InputField,
  tags: ["autodocs"],
  argTypes: {
    label: "Введите ваше имя:",
  },
};

export const Text = {
  args: {
    label: "Введите ваше имя:",
    placeholder: "Введите ваше имя:",
  },
};

export const TextWithError = {
  args: {
    label: "Введите ваше имя:",
    placeholder: "Введите ваше имя:",
    error: "Неизвестная ошибка",
  },
};

export const Password = {
  args: {
    type: "password",
    label: "Введите ваше имя:",
    placeholder: "Введите ваше имя:",
  },
};

export const PasswordWithError = {
  args: {
    type: "password",
    label: "Введите ваше имя:",
    placeholder: "Введите ваше имя:",
    error: "Неизвестная ошибка",
  },
};
