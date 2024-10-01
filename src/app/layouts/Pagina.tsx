import { PaginaProps } from "@/core/model/interfaces/Props";

export default function Pagina(props: PaginaProps) {
  return (
    <main className="flex min-h-screen max-h-full">
      <div className={`${props.className}`}>{props.children}</div>
    </main>
  );
}
