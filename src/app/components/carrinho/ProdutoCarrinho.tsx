import { ProdutoCarrinhoProps } from "@/core/model/interfaces/PropsProdutos";
import ImagemInfo from "./components/ImagemInfo";
import InfoProdutoCarrinho from "./InfoProdutoCarrinho";

export default function ProdutoCarrinho(props: ProdutoCarrinhoProps) {
  return (
    <div key={props.produto.id} className="flex text-rosa01">
      <ImagemInfo produto={props.produto} />
      <InfoProdutoCarrinho
        produto={props.produto}
        quantidade={props.quantidade}
        id={props.id}
        cor={props.cor}
        tamanho={props.tamanho}
      />
    </div>
  );
}
