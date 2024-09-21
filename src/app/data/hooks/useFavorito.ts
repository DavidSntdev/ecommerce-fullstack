import Favoritos from "@/core/model/classes/Favoritos";
import Produto from "@/core/model/interfaces/Produto";
import { useState } from "react";

export default function useFavorito() {
  const [favorito] = useState(new Favoritos());

  const adicionarProduto = (produto: Produto) => {
    favorito.adicionarProduto(produto);
  };

  const removerProduto = (id: string) => {
    favorito.removerProduto(id);
  };

  const listarFavoritos = () => {
    return favorito.listarFavoritos();
  };

  return {
    adicionarProduto,
    removerProduto,
    listarFavoritos,
  };
}
