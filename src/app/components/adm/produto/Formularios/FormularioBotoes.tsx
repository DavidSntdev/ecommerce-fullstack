import { Button } from "@nextui-org/button";
import { CiCircleRemove } from "react-icons/ci";

export interface FormularioBotoesProps {
  onSave: () => void;
  onCancel: () => void;
  onDelete: () => void;
}

export default function FormularioBotoes(props: FormularioBotoesProps) {
  return (
    <div className="flex justify-between">
      <div className="flex gap-3">
        <Button color="primary" onClick={props.onSave}>
          Salvar
        </Button>
        <Button
          className="bg-default-700 text-default-50 hover:bg-default-800"
          onClick={props.onCancel}
        >
          Cancelar
        </Button>
      </div>
      <Button
        className="bg-red-500 text-white font-bold"
        onClick={props.onDelete}
      >
        <CiCircleRemove size={25} />
        <span>Excluir</span>
      </Button>
    </div>
  );
}
