import { HTMLProps, ReactNode } from "react";
import { sizes, variants } from "../constants";

export interface ButtonProps
  extends Omit<HTMLProps<HTMLButtonElement>, "size"> {
  variant?: (typeof variants)[number];
  type?: "submit" | "reset" | "button";
  className?: string;
  size?: (typeof sizes)[number];
  children: ReactNode;
}

export interface GetButtonClasses
  extends Pick<ButtonProps, "variant" | "size"> {}
