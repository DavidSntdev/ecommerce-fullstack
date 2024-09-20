"use client";
import UseProdutos from "@/app/data/hooks/useProdutos";
import ProdutosItem from "../shared/ProdutosItem";

export interface ProdutosHomeProps {
  titulo: string;
}

export default function ProdutosHome(props: ProdutosHomeProps) {
  const { produtos } = UseProdutos();
  return (
    <div className="flex flex-col w-full items-center gap-10 pb-32">
      <h1 className="text-5xl text-default-100">{props.titulo}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full gap-3">
        {produtos.slice(0, 5).map((produto) => (
          <ProdutosItem
            key={produto.id}
            produtos={produto}
            irParaCompra={`/produtos/${produto.link}`}
          />
        ))}
      </div>
    </div>
  );
}
