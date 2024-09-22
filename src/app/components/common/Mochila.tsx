"use client";
import { ConteudoCompraProps } from "@/app/(internas)/produtos/[link]/components/ConteudoCompra";
import { useCarrinho } from "@/context/CarrinhoContext";
import { useEffect, useState } from "react";
import { TbShoppingBagCheck, TbShoppingBagPlus } from "react-icons/tb";

export default function Mochila(props: ConteudoCompraProps) {
  const { adicionarProduto, carrinhoPorId, removerProduto } = useCarrinho();
  const [isCarrinho, setIsCarrinho] = useState(false);

  useEffect(() => {
    const carrinho = carrinhoPorId(props.produto.id);
    setIsCarrinho(!!carrinho);
  }, [props.produto.id, carrinhoPorId]);

  const handleCarrinhoClick = () => {
    if (isCarrinho) {
      removerProduto(props.produto.id);
      setIsCarrinho(false);
    } else {
      adicionarProduto(props.produto);
      setIsCarrinho(true);
    }
  };

  return isCarrinho ? (
    <TbShoppingBagCheck
      size={props.size || 25}
      onClick={handleCarrinhoClick}
      className="text-green-500 cursor-pointer"
    />
  ) : (
    <TbShoppingBagPlus
      size={props.size || 25}
      onClick={handleCarrinhoClick}
      className="cursor-pointer"
    />
  );
}
