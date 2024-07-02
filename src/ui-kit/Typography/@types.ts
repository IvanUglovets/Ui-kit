import { ComponentProps, ElementType, ReactNode } from "react";
import { weights } from "./constants";
import { sizes, variants } from "../constants";

interface TypographyBaseProps<E extends ElementType = ElementType> {
  tag?: E;
  className?: string;
  italic?: boolean;
  weight?: (typeof weights)[number];
  variant?: (typeof variants)[number];
  size?: (typeof sizes)[number];
  children?: ReactNode;
}

export type TypographyProps<E extends ElementType = ElementType> =
  TypographyBaseProps<E> & Omit<ComponentProps<E>, keyof TypographyBaseProps>;

export interface GetTypographyClasses
  extends Pick<TypographyBaseProps, "variant" | "size" | "weight" | "italic"> {}
