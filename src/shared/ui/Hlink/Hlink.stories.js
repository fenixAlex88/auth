import { Hlink } from "./Hlink";
import "app/index.scss";

export default {
  title: "Link",
  component: Hlink,
  tags: ["autodocs"],
  argTypes: {
    href: "/#",
    text: "Click me",
  },
};

export const Primary = {
  args: {
    href: "/#",
    text: "Click me",
    variant: "primary",
  },
};
