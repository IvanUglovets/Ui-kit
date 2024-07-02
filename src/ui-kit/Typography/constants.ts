export enum WEIGHTS {
  NORMAL = "normal",
  MEDIUM = "medium",
  SEMIBOLD = "semibold",
  BOLD = "bold",
  EXTRABOLD = "extrabol",
}

export const weights = [
  `${WEIGHTS.NORMAL}`,
  `${WEIGHTS.MEDIUM}`,
  `${WEIGHTS.SEMIBOLD}`,
  `${WEIGHTS.BOLD}`,
  `${WEIGHTS.EXTRABOLD}`,
] as const;
