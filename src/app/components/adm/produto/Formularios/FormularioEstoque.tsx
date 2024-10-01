import { FormulariosProps } from "@/core/model/interfaces/PropsProdutos";
import { Button } from "@nextui-org/button";

export default function FormularioEstoque(props: FormulariosProps) {
  return (
    <div className="flex gap-5 text-default-50 items-center">
      <span className="text-xl">Em estoque:</span>
      <Button
        className="text-default-50"
        style={{ backgroundColor: props.produto.estoque ? "green" : "red" }}
        onClick={() =>
          props.onChange?.({
            ...props.produto,
            estoque: !props.produto.estoque,
          })
        }
      >
        {props.produto.estoque ? "sim" : "nao"}
      </Button>
    </div>
  );
}
