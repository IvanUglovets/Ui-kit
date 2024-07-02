import { FC } from "react";
import cx from "classnames";
import { ButtonProps } from "./@types";
import { getButtonClasses } from "./utils";

export const Button: FC<ButtonProps> = ({
  variant = "primary",
  size = "M",
  children,
  className,
  onClick,
  ...props
}) => {
  const classes = getButtonClasses({ variant, size });
  return (
    <button
      className={cx(
        "font-medium rounded-lg text-sm px-5 py-2.5",
        classes,
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
