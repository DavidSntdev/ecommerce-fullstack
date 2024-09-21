"use client";

import { ConteudoCompraProps } from "@/app/(internas)/produtos/[link]/components/ConteudoCompra";
import useFavorito from "@/app/data/hooks/useFavorito";
import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function Coracao(props: ConteudoCompraProps) {
  const { adicionarProduto, favoritosPorId, removerProduto } = useFavorito();
  const [isFavorito, setIsFavorito] = useState(false);

  useEffect(() => {
    const favorito = favoritosPorId(props.produto.id);
    setIsFavorito(favorito);
  }, [props.produto.id, favoritosPorId]);

  const handleFavoritoClick = () => {
    if (isFavorito) {
      removerProduto(props.produto.id);
      setIsFavorito(false);
    }
    if (!isFavorito) {
      adicionarProduto(props.produto);
      setIsFavorito(true);
    }
  };

  return isFavorito ? (
    <FaHeart size={25} onClick={handleFavoritoClick} className="text-red-700" />
  ) : (
    <FaRegHeart size={25} onClick={handleFavoritoClick} />
  );
}
