import { ReactNode } from "react";

export interface PaginaProps {
  children: ReactNode;
  className?: string;
}

export interface BotoesNavProps {
  setPagina: React.Dispatch<React.SetStateAction<number>>;
  totalPag: number;
}
