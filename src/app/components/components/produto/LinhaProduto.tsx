import Produto from "@/core/model/Produto";
import Image from "next/image";

export interface LinhaProdutoProps {
  produto: Produto;
  onClick?: (produto: Produto) => void;
}

export default function LinhaProduto(props: LinhaProdutoProps) {
  return (
    <div
      className="flex bg-zinc-900 gap-2 p-4 rounded-md cursor-pointer w-full"
      onClick={() => props.onClick?.(props.produto)}
    >
      <span>
        <Image
          src={props.produto.img}
          alt={props.produto.nome}
          width={150}
          height={150}
        />
      </span>
      <div className="flex flex-col gap-3">
        <span className="text-xl font-black">{props.produto.nome}</span>
        <span>R$ {props.produto.price.toFixed(2)}</span>
      </div>
    </div>
  );
}
