"use server";

import RepositorioProduto from "./RepositorioProduto";

export default async function excluirUsuario(id: string) {
  return RepositorioProduto.excluir(id);
}
