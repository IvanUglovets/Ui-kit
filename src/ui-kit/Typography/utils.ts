import { Optional } from "@/@types";
import { SIZES, VARIANTS } from "../constants";
import { GetTypographyClasses } from "./@types";
import { WEIGHTS } from "./constants";

export const getTypographyClasses = ({
  size,
  variant,
  weight,
  italic,
}: GetTypographyClasses): Record<string, Optional<boolean>> => {
  const classes = {
    "text-black": variant === VARIANTS.PRIMARY,
    "text-gray-500": variant === VARIANTS.SECONDARY,
    "text-xs": size === SIZES.S,
    "text-sm": size === SIZES.M,
    "text-base": size === SIZES.L,
    "text-lg": size === SIZES.XL,
    "font-normal": weight === WEIGHTS.NORMAL,
    "font-medium": weight === WEIGHTS.MEDIUM,
    "font-semibold": weight === WEIGHTS.SEMIBOLD,
    "font-bold": weight === WEIGHTS.BOLD,
    "font-extrabold	": weight === WEIGHTS.EXTRABOLD,
    italic: italic,
  };

  return classes;
};
