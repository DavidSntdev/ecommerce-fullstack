import { useEffect, useState } from "react";
import Favoritos from "@/core/model/classes/Favoritos";
import Produto from "@/core/model/interfaces/Produto";

export default function useFavorito() {
  const [favorito, setFavorito] = useState<Favoritos>(new Favoritos());

  const carregarFavoritos = () => {
    const favoritosSalvos = localStorage.getItem("favoritos");
    if (favoritosSalvos) {
      const produtos: Produto[] = JSON.parse(favoritosSalvos);
      const favoritos = new Favoritos();
      produtos.forEach((produto) => favoritos.adicionarProduto(produto));
      setFavorito(favoritos);
    }
  };

  useEffect(() => {
    carregarFavoritos();
  }, []);

  const salvarNoLocalStorage = () => {
    const produtosFavoritos = favorito.listarFavoritos();
    localStorage.setItem("favoritos", JSON.stringify(produtosFavoritos));
  };

  const adicionarProduto = (produto: Produto) => {
    favorito.adicionarProduto(produto);
    setFavorito(favorito);
    salvarNoLocalStorage();
  };

  const removerProduto = (id: string) => {
    favorito.removerProduto(id);
    setFavorito(favorito);
    salvarNoLocalStorage();
  };

  const listarFavoritos = () => {
    return favorito.listarFavoritos();
  };

  const favoritosPorId = (id: string): boolean => {
    return favorito.favoritosPorId(id);
  };

  return {
    adicionarProduto,
    removerProduto,
    listarFavoritos,
    favoritosPorId,
  };
}
