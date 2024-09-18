"use server";
import RepositorioProduto from "./RepositorioProduto";

import Produto from "@/core/model/Produto";

export default async function salvarProduto(produto: Partial<Produto>) {
  const novoProduto = {
    ...produto,
    id: produto.id,
  };

  return RepositorioProduto.salvar(novoProduto as Produto);
}
