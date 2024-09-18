"use client";

import Pagina from "@/app/layouts/Pagina";
import AdmPagina from "./components/AdmPagina";

export default function Adm() {
  return (
    <Pagina className="flex gap-5">
      <AdmPagina />
    </Pagina>
  );
}
