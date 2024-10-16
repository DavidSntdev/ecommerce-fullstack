import { ConteudoCompraProps } from "@/core/model/interfaces/PropsProdutos";
import React from "react";

export default function InfoProduto(props: ConteudoCompraProps) {
  return (
    <>
      <h1 className="text-6xl font-bold text-rosa05">
        {props.produto.nome || "Produto não encontrado"}
      </h1>
      <div className="flex flex-col gap-5 text-rosa03">
        <p className="text-lg">
          R$ <strong>{props.produto.price}</strong>
        </p>
        <p className="max-w-[550px]">{props.produto.descricao}</p>
      </div>
    </>
  );
}
