import { FormulariosProps } from "@/core/model/interfaces/PropsProdutos";
import { Textarea } from "@nextui-org/input";

export default function FormularioDescricao(props: FormulariosProps) {
  return (
    <Textarea
      label="Descrição do produto"
      value={props.produto.descricao ?? ""}
      classNames={{ input: "font-bold" }}
      onChange={(e) =>
        props.onChange?.({ ...props.produto, descricao: e.target.value })
      }
      labelPlacement="outside"
    />
  );
}
