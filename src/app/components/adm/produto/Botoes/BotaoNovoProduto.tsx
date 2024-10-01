import Produto from "@/core/model/interfaces/Produto";
import { Button } from "@nextui-org/react";
import { CiCirclePlus } from "react-icons/ci";

interface BotaoNovoProps {
  novoProduto: (produto: Partial<Produto>) => void;
}

export default function BotaoNovoProduto(props: BotaoNovoProps) {
  return (
    <div className="flex gap-5">
      <Button color="primary" onClick={() => props.novoProduto({})}>
        <CiCirclePlus size={50} />
        <span>Novo Produto</span>
      </Button>
    </div>
  );
}
