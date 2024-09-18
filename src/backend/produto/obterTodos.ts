"use server";

import RepositorioProduto from "./RepositorioProduto";

export default async function obterTodos() {
  return RepositorioProduto.obterTodos();
}
