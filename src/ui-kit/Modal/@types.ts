import { ReactNode } from "react";

export interface IModalProps {
  isOpen: boolean;
  onClose: VoidFunction;
  title?: string;
  children: ReactNode;
}
