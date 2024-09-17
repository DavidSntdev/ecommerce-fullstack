import { useState } from "react";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

interface AdmLoginProps {
  setLogado: (value: boolean) => void;
}

export default function AdmLogin(props: AdmLoginProps) {
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const verify = async (password: string) => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        props.setLogado(true);
        setError("");
      } else {
        setError(data.message || "Senha errada");
      }
    } catch (err) {
      setError("Erro ao tentar fazer login");
    }
  };

  return (
    <div>
      <Input
        placeholder="Enter password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <div style={{ color: "red" }}>{error}</div>}
      <Button onClick={() => verify(password)}>Logar</Button>
    </div>
  );
}
