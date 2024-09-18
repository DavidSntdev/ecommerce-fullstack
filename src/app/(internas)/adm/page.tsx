"use client";

import Pagina from "@/app/components/layouts/Pagina";
import AdmPagina from "./AdmPage";
import AdmMenu from "@/app/components/layouts/MenuAdm";

export default function Adm() {
  return (
    <Pagina className="flex gap-5">
      <AdmMenu />
      <AdmPagina />
    </Pagina>
  );
}
