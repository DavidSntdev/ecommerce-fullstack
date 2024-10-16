import { ProdutoCarrinhoProps } from "@/core/model/interfaces/PropsProdutos";
import NomeInfo from "./produto/NomeInfo";
import CorInfo from "./produto/CorInfo";
import TamanhoInfo from "./produto/TamanhoInfo";

export default function ProdutoInfo(props: ProdutoCarrinhoProps) {
  return (
    <div className="flex flex-col gap-2 md:w-[250px] items-center md:items-start">
      <span className="hidden md:flex font-bold text-rosa05">Produto</span>
      <div className="flex flex-col">
        <NomeInfo nome={props.produto.nome || "Nome indisponivel"} />
        <CorInfo cor={props.cor} />
        <TamanhoInfo tamanho={props.tamanho} />
      </div>
    </div>
  );
}
