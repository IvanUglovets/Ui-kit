import { ChangeEvent, HTMLProps } from "react";

export interface InputProps
  extends Omit<HTMLProps<HTMLInputElement>, "value" | "onChange"> {
  value: string;
  label?: string;
  onChange: (value: string, e?: ChangeEvent<HTMLInputElement>) => void;
}
