import { ReactNode } from "react";

export interface PaginaProps {
  children: ReactNode;
  className?: string;
}

export default function Pagina(props: PaginaProps) {
  return (
    <main className="flex min-h-screen max-h-full">
      <div className={`${props.className}`}>{props.children}</div>
    </main>
  );
}
