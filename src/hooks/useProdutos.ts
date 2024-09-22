import Backend from "@/backend";
import Produto from "@/core/model/interfaces/Produto";
import { useEffect, useState } from "react";

export default function UseProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [produto, setProduto] = useState<Partial<Produto> | null>(produtos[0]);

  useEffect(() => {
    Backend.produtos.obter().then(setProdutos);
  }, []);

  async function salvar() {
    if (!produto) return;
    await Backend.produtos.salvar(produto as Produto);
    const produtos = await Backend.produtos.obter();
    setProdutos(produtos);
    setProduto(null);
  }

  async function excluir() {
    if (!produto || !produto.id) return;
    await Backend.produtos.excluir(produto.id);
    const produtos = await Backend.produtos.obter();
    setProdutos(produtos);
    setProduto(null);
  }

  return {
    produtos,
    produto,
    salvar,
    excluir,
    cancelar: () => setProduto(null),
    alterarProduto: (produto: Partial<Produto> | null) => setProduto(produto),
  };
}
