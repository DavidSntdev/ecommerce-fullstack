import Produto from "@/core/model/interfaces/Produto";
import ProdutosItem from "../../common/ProdutosItem";

interface ProdutosHomeProps {
  produtos: Produto[];
}
export default function ProdutosHome(props: ProdutosHomeProps) {
  if (!props.produtos || props.produtos.length === 0) {
    return <p className="text-default-50">Nenhum produto disponível</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full gap-3">
      {props.produtos.map((produto) => (
        <ProdutosItem
          key={produto.id}
          produto={produto}
          irParaCompra={`/produtos/${produto.link}`}
        />
      ))}
    </div>
  );
}
