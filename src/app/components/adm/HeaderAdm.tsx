import BotaoNovoProduto from "./produto/Botoes/BotaoNovoProduto";
import BotaoVoltar from "./produto/Botoes/BotaoVoltar";
import Produto from "@/core/model/interfaces/Produto";
import { FaShoppingBag } from "react-icons/fa";
import TituloIcone from "../shared/TituloIcone";
import React from "react";

export interface HeaderAdmProps {
  produto: Partial<Produto> | null;
  novoProduto: (produto: Partial<Produto>) => void;
  cancelar: () => void;
}

export default function HeaderAdm(props: HeaderAdmProps) {
  return (
    <div
      className={`flex justify-between items-center ${
        !props.produto ? "w-full" : "w-full md:w-[700px] place-self-center"
      }`}
    >
      <TituloIcone
        icone={FaShoppingBag}
        principal="Produtos"
        secundario="Estoque"
      />
      {!props.produto ? (
        <BotaoNovoProduto novoProduto={props.novoProduto} />
      ) : (
        <BotaoVoltar onCancel={props.cancelar} />
      )}
    </div>
  );
}
