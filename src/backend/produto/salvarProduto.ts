"use server";
import Id from "@/core/utils/id";
import RepositorioProduto from "./RepositorioProduto";

import Produto from "@/core/model/interfaces/Produto";

export default async function salvarProduto(produto: Partial<Produto>) {
  const novoProduto = {
    ...produto,
    id: produto.id ?? Id.novo,
  };

  return RepositorioProduto.salvar(novoProduto as Produto);
}
