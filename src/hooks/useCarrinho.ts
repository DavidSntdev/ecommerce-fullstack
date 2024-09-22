import ItemsCarrinho from "@/core/model/classes/Carrinho";
import Produto from "@/core/model/interfaces/Produto";
import { useState } from "react";

export default function useCarrinho() {
  const [carrinho] = useState(new ItemsCarrinho());

  const adicionarProduto = (produto: Produto) => {
    carrinho.adicionarProduto(produto);
  };

  const removerProduto = (id: string) => {
    carrinho.removerProduto(id);
  };

  const listarCarrinho = () => {
    return carrinho.listarCarrinho();
  };

  return {
    adicionarProduto,
    removerProduto,
    listarCarrinho,
  };
}
