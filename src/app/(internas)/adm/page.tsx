"use client";

import Pagina from "@/app/components/layouts/Pagina";
import AdmPagina from "./AdmPage";
import AdmMenu from "@/app/components/layouts/MenuAdm";

export default function Adm() {
  return (
    <Pagina className="flex flex-col gap-10 w-full">
      <AdmMenu />
      <AdmPagina />
    </Pagina>
  );
}
