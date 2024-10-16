import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

export interface QuantidadeProps {
  quantidade: number;
  setQuantidade: (value: number) => void;
}

export default function QuantidadeCompra(props: QuantidadeProps) {
  const quantidadeStyle = props.quantidade < 2 ? "text-rosa01" : "text-rosa05";

  return (
    <div className="flex gap-5 items-center">
      <button
        onClick={() => props.setQuantidade(props.quantidade - 1)}
        disabled={(props.quantidade || 1) < 2}
      >
        <CiCircleMinus
          className={`${quantidadeStyle} cursor-pointer`}
          size={40}
        />
      </button>
      <p className="text-2xl">{props.quantidade}</p>
      <button onClick={() => props.setQuantidade(props.quantidade + 1)}>
        <CiCirclePlus className="cursor-pointer" size={40} />
      </button>
    </div>
  );
}
