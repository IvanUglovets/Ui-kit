export enum SIZES {
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
}

export enum VARIANTS {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export const sizes = [
  `${SIZES.L}`,
  `${SIZES.M}`,
  `${SIZES.S}`,
  `${SIZES.XL}`,
] as const;

export const variants = [
  `${VARIANTS.PRIMARY}`,
  `${VARIANTS.SECONDARY}`,
] as const;
