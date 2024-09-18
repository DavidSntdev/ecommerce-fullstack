import { ReactNode } from "react";

export interface PaginaProps {
  children: ReactNode;
  className?: string;
}

export default function Pagina(props: PaginaProps) {
  return (
    <div className="flex min-h-screen max-h-full">
      <main className={`p-7 ${props.className ?? ""}`}>{props.children}</main>
    </div>
  );
}
