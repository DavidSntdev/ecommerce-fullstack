import { FormulariosProps } from "@/core/model/interfaces/PropsProdutos";
import { Input } from "@nextui-org/input";

export default function FormularioPreco(props: FormulariosProps) {
  return (
    <Input
      type="number"
      label="Preço"
      labelPlacement="outside"
      value={props.produto.price?.toString()}
      classNames={{ input: "font-bold" }}
      onChange={(e) =>
        props.onChange?.({
          ...props.produto,
          price: parseFloat(e.target.value),
        })
      }
      startContent={
        <div className="pointer-events-none flex items-center">
          <span className="text-default-400 text-small">R$</span>
        </div>
      }
    />
  );
}
