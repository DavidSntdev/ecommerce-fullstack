import { useState } from "react";

import AdmLogin from "./components/AdmLogin";
import AdmPage from "./components/AdmPage";

export default function Adm() {
  const [logado, setLogado] = useState<boolean>(true);

  return logado ? <AdmPage /> : <AdmLogin setLogado={setLogado} />;
}
