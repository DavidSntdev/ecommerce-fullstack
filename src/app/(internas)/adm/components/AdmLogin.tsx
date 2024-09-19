import { Button, Input } from "@nextui-org/react";
import { useState } from "react";

export interface AdmLoginProps {
  setLogado: (value: boolean) => void;
}

export default function AdmLogin(props: AdmLoginProps) {
  const [erro, setErro] = useState<string>("");
  const [tentativa, setTentativa] = useState<string>("");

  const verifySenha = async () => {
    setErro("");

    try {
      const response = await fetch("/api/verifySenha", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tentativa }),
      });

      const data = await response.json();

      if (response.ok) {
        props.setLogado(true);
      } else {
        setErro(data.erro || "Erro desconhecido");
      }
    } catch (error) {
      console.error(error);
      setErro("Erro ao tentar se conectar ao servidor.");
    }
  };

  return (
    <div className="w-full flex p-10 justify-center">
      <div className="w-60 flex flex-col items-center gap-3">
        <Input
          type="password"
          label="Senha"
          labelPlacement="outside"
          value={tentativa}
          onChange={(e) => setTentativa(e.target.value)}
          placeholder="******"
        />
        {erro && <span className="text-center text-red-600">{erro}</span>}
        <Button className="max-w-xl" color="primary" onClick={verifySenha}>
          Logar
        </Button>
      </div>
    </div>
  );
}
