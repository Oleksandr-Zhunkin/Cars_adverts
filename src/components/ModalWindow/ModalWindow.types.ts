import { ReactNode } from "react";

export interface PropModal {
  children: ReactNode;
  isOpen: boolean;
  closeModal: () => void;
}
