import { FC } from "react";
import { createPortal } from "react-dom";
import { IPortalProps } from "./@types";

export const Portal: FC<IPortalProps> = ({
  target = document.body,
  children,
}) => createPortal(children, target);
