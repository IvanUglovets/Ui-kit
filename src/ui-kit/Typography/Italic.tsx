import { TypographyProps } from "./@types";
import { TypographyBase } from "./Base";

export const TypographyItalic = ({
  className,
  children,
  ...props
}: TypographyProps) => {
  return (
    <TypographyBase italic {...props}>
      {children}
    </TypographyBase>
  );
};
