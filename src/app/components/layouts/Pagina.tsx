import { ReactNode } from "react";

export interface PaginaProps {
  children: ReactNode;
  className?: string;
}

export default function Pagina(props: PaginaProps) {
  return (
    <div className="flex min-h-screen max-h-full w-screen">
      <main className={`${props.className ?? "w-full"}`}>{props.children}</main>
    </div>
  );
}
