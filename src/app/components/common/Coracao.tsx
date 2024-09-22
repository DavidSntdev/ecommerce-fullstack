"use client";
import { ConteudoCompraProps } from "@/app/(internas)/produtos/[link]/components/ConteudoCompra";
import { useFavoritos } from "@/context/FavoritosContext";
import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function Coracao(props: ConteudoCompraProps) {
  const { adicionarProduto, favoritosPorId, removerProduto } = useFavoritos();
  const [isFavorito, setIsFavorito] = useState(false);

  useEffect(() => {
    const favorito = favoritosPorId(props.produto.id);
    setIsFavorito(!!favorito);
  }, [props.produto.id, favoritosPorId]);

  const handleFavoritoClick = () => {
    if (isFavorito) {
      removerProduto(props.produto.id);
      setIsFavorito(false);
    } else {
      adicionarProduto(props.produto);
      setIsFavorito(true);
    }
  };

  return isFavorito ? (
    <FaHeart
      size={props.size || 25}
      onClick={handleFavoritoClick}
      className="text-red-700 cursor-pointer"
    />
  ) : (
    <FaRegHeart
      size={props.size || 25}
      onClick={handleFavoritoClick}
      className="cursor-pointer"
    />
  );
}
