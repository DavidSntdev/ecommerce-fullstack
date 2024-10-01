import { ProdutoCarrinhoProps } from "@/core/model/interfaces/PropsProdutos";
import Image from "next/image";

export default function ImagemInfo(props: ProdutoCarrinhoProps) {
  return (
    <div className="relative w-[120px] h-[150px]">
      <Image
        fill
        alt={props.produto.nome || ""}
        className="w-20"
        src={props.produto.img || ""}
      />
    </div>
  );
}
