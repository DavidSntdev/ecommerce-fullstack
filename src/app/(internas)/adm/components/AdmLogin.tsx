import { Button, Input } from "@nextui-org/react";

export default function AdmLogin() {
  return (
    <div className="w-full flex p-10 justify-center">
      <div className="w-60 flex flex-col items-center gap-5">
        <Input
          type="password"
          label="Senha"
          labelPlacement="outside"
          placeholder="******"
        />
        <Button className="max-w-xl" color="primary">
          Logar
        </Button>
      </div>
    </div>
  );
}
