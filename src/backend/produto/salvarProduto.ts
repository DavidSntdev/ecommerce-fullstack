"use server";
import RepositorioProduto from "./RepositorioProduto";
import { Produto } from "@prisma/client";

export default async function salvarProduto(produto: Partial<Produto>) {
  const novoProduto = {
    ...produto,
  };

  return RepositorioProduto.salvar(novoProduto as Produto);
}
