import { GetButtonClasses } from "./@types";
import { SIZES, VARIANTS } from "../constants";

export const getButtonClasses = ({
  variant,
  size,
}: GetButtonClasses): Record<string, boolean> => {
  const classes = {
    "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none":
      variant === VARIANTS.PRIMARY,
    "text-gray-900 focus:outline-none bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100":
      variant === VARIANTS.SECONDARY,
    "py-0.5 px-1": size === SIZES.S,
    "py-1.5 px-3": size === SIZES.M,
    "py-2.5 px-5": size === SIZES.L,
    "py-4 px-7": size === SIZES.XL,
  };

  return classes;
};
