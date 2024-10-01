import { ConteudoCompraProps } from "@/core/model/interfaces/PropsProdutos";
import InfoProduto from "./components/InfoProduto";
import CoresProduto from "./components/CoresProduto";
import CompraFooter from "./components/CompraFooter";
import { useState } from "react";
import TamanhoProduto from "./components/TamanhosProduto";

export default function CompraTexto(props: ConteudoCompraProps) {
  const [cor, setCor] = useState<string>("");
  const [tamanho, setTamanho] = useState<string>("");
  if (!props.produto) return <div>Produto não disponível</div>;

  return (
    <div className="md:w-full flex flex-col justify-between">
      <div className="flex flex-col">
        <InfoProduto produto={props.produto} />
        <div className="py-6 flex flex-col gap-5">
          <CoresProduto produto={props.produto} setCor={setCor} />
          {props.produto.tamanhos && (
            <TamanhoProduto produto={props.produto} setTamanho={setTamanho} />
          )}
        </div>
      </div>
      <CompraFooter produto={props.produto} cor={cor} tamanho={tamanho} />
    </div>
  );
}
