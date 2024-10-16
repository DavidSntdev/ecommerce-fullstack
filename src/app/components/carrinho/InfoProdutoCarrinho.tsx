import { ProdutoCarrinhoProps } from "@/core/model/interfaces/PropsProdutos";
import QuantidadeInfo from "./components/QuantidadeInfo";
import TotalInfo from "./components/TotalInfo";
import RemoverInfo from "./components/RemoverInfo";
import ProdutoInfo from "./components/ProdutoInfo";

export default function InfoProdutoCarrinho(props: ProdutoCarrinhoProps) {
  return (
    <div className="flex w-full lg:flex-row justify-between px-5 py-3 bg-rosa03 rounded-r-2xl">
      <div className="hidden md:flex w-full justify-between">
        <ProdutoInfo
          produto={props.produto}
          cor={props.cor}
          tamanho={props.tamanho}
        />
        <QuantidadeInfo
          produto={props.produto}
          quantidade={props.quantidade}
          id={props.id}
        />
        <TotalInfo produto={props.produto} quantidade={props.quantidade} />
        <RemoverInfo produto={props.produto} id={props.id} />
      </div>
      <div className="flex md:hidden justify-between w-full">
        <div>
          <ProdutoInfo
            produto={props.produto}
            cor={props.cor}
            tamanho={props.tamanho}
          />
        </div>
        <div className="flex md:hidden flex-col justify-between">
          <QuantidadeInfo
            produto={props.produto}
            quantidade={props.quantidade}
            id={props.id}
          />
          <TotalInfo produto={props.produto} quantidade={props.quantidade} />
          <RemoverInfo produto={props.produto} id={props.id} />
        </div>
      </div>
    </div>
  );
}
