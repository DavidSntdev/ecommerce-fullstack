import { useState } from "react";

import AdmLogin from "./components/AdmLogin";

export default function Adm() {
  const [logado, setLogado] = useState<boolean>(false);

  return logado ? <div></div> : <AdmLogin setLogado={setLogado} />;
}
