"use client";

import Pagina from "@/app/layouts/Pagina";
import AdmPagina from "./components/AdmPagina";
import { useState } from "react";
import AdmLogin from "./components/AdmLogin";

export default function Adm() {
  const [logado, setLogado] = useState<boolean>(false);
  return (
    <Pagina className="flex flex-col w-full">
      {logado ? <AdmPagina /> : <AdmLogin setLogado={setLogado} />}
    </Pagina>
  );
}
