import { ElementType } from "react";
import cx from "classnames";
import { TypographyProps } from "./@types";
import { getTypographyClasses } from "./utils";

const defaultTag = "span";

export const TypographyBase = <E extends ElementType = typeof defaultTag>({
  tag,
  className,
  children,
  italic = false,
  weight = "normal",
  variant = "primary",
  size = "M",
  ...props
}: TypographyProps<E>) => {
  const Tag = tag || defaultTag;
  const classes = getTypographyClasses({ size, variant, weight, italic });

  return (
    <Tag className={cx(classes, className)} {...props}>
      {children}
    </Tag>
  );
};
