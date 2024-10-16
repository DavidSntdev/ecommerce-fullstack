"use client";
import { useFavoritos } from "@/context/FavoritosContext";
import { ConteudoCompraProps } from "@/core/model/interfaces/PropsProdutos";
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

  const styleVazio = props.className ? props.className : "text-rosa01";

  return isFavorito ? (
    <FaHeart
      size={props.size || 25}
      onClick={handleFavoritoClick}
      className="fill-rosa05 cursor-pointer"
    />
  ) : (
    <FaRegHeart
      size={props.size || 25}
      onClick={handleFavoritoClick}
      className={`${styleVazio} cursor-pointer`}
    />
  );
}
