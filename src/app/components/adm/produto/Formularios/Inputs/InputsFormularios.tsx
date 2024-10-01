import Produto from "@/core/model/interfaces/Produto";
import { Input } from "@nextui-org/input";

export interface InputsProps {
  produto: Partial<Produto>;
  onChange: (produto: Partial<Produto>) => void;
  value?: string | null;
  field: keyof Produto;
  label: string;
  placeholder?: string;
  type: string;
}

export default function Inputs(props: InputsProps) {
  return (
    <Input
      type={props.type}
      label={props.label}
      placeholder={props.placeholder}
      labelPlacement="outside"
      classNames={{ input: "font-bold" }}
      value={props.value ?? ""}
      onChange={(e) =>
        props.onChange?.({
          ...props.produto,
          [props.field as string]: e.target.value,
        })
      }
    />
  );
}
