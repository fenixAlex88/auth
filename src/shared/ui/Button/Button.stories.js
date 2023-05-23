import { Button } from "./Button";
import "../../../../../2/auth/src/app/index.scss";

export default {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    children: "Click me",
  },
};

export const Primary = {
  args: {
    children: "Click me",
  },
};

export const Warning = {
  args: {
    children: "Click me",
    variant: "warning",
  },
};

export const Large = {
  args: {
    children: "Click me",
    size: "large",
  },
};

export const LargeWarning = {
  args: {
    children: "Click me",
    size: "large",
    variant: "warning",
  },
};
