import { FormulariosProps } from "@/core/model/interfaces/PropsProdutos";
import Inputs from "./Inputs/InputsFormularios";

export default function FormularioTamanho(props: FormulariosProps) {
  const tamanhos = props.produto.tamanhos
    ? props.produto.tamanhos.split(",").map((tamanho) => tamanho.trim())
    : [];

  return (
    <div className="flex flex-col gap-2">
      <Inputs
        type="text"
        label="Tamanhos do produto (separados por vírgula)"
        placeholder="39, 40, 50, 51"
        field="tamanhos"
        value={props.produto.tamanhos}
        onChange={props.onChange}
        produto={props.produto}
      />
      <div className="flex items-center gap-2">
        {tamanhos.map((tamanho, index) => (
          <span key={index} className="border px-2 py-1 rounded">
            {tamanho}
          </span>
        ))}
      </div>
    </div>
  );
}
