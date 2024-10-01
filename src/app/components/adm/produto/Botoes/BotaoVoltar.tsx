import { Button } from "@nextui-org/button";
import { IoReturnUpBack } from "react-icons/io5";

interface BotaoVoltarProps {
  onCancel: () => void;
}

export default function BotaoVoltar(props: BotaoVoltarProps) {
  return (
    <Button
      className="bg-default-700 text-default-50 hover:bg-default-800"
      onClick={props.onCancel}
    >
      <IoReturnUpBack size={25} />
    </Button>
  );
}
