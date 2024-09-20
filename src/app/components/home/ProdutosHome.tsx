import Produto from "@/core/model/Produto";
import ProdutosItem from "./ProdutosHome/ProdutosItem";

export interface ProdutosHomeProps {
  produtos: Produto[];
  titulo: string;
}

export default function ProdutosHome(props: ProdutosHomeProps) {
  return (
    <div className="flex flex-col w-full items-center gap-10 pb-32">
      <h1 className="text-xl">{props.titulo}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full gap-3">
        {props.produtos.slice(0, 5).map((produto) => (
          <ProdutosItem
            key={produto.id}
            produtos={produto}
            irParaCompra={`/produto/${produto.link}`}
          />
        ))}
      </div>
    </div>
  );
}
