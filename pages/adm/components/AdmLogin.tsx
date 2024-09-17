import { useState } from "react";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

import { verifyLogin } from "@/components/shared/verifyLogin";

interface AdmLoginProps {
  setLogado: (value: boolean) => void;
}

export default function AdmLogin(props: AdmLoginProps) {
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  return (
    <div className="max-w-xl gap-3 mx-auto h-screen flex items-center pt-10 flex-col">
      <Input
        placeholder="Enter password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <div style={{ color: "red" }}>{error}</div>}
      <Button
        color="primary"
        onClick={() => verifyLogin(password, setError, props.setLogado)}
      >
        Logar
      </Button>
    </div>
  );
}
