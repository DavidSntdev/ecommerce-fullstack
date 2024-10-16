"use client";
import { useCarrinho } from "@/context/CarrinhoContext";
import { ConteudoCompraProps } from "@/core/model/interfaces/PropsProdutos";
import { useEffect, useState } from "react";
import {
  TbShoppingBagCheck,
  TbShoppingBagPlus,
  TbShoppingBagX,
} from "react-icons/tb";

export default function Mochila(props: ConteudoCompraProps) {
  const {
    adicionarProduto,
    carrinhoPorId,
    atualizarQuantidade,
    removerProduto,
    quantidadeProduto,
  } = useCarrinho();
  const [isCarrinho, setIsCarrinho] = useState(false);
  const [mostrarCheck, setMostrarCheck] = useState(false);

  useEffect(() => {
    const carrinho = carrinhoPorId(props.produto.id);
    setIsCarrinho(!!carrinho);
  }, [props.produto.id, carrinhoPorId]);

  const handleCarrinhoClick = {
    adicionar: () => {
      if (isCarrinho) {
        const quantidade = quantidadeProduto(props.produto.id);
        atualizarQuantidade(
          props.produto.id,
          quantidade + (props.quantidade || 1)
        );
      } else {
        adicionarProduto(
          props.produto,
          props.quantidade,
          props.cor || "Padrão",
          props.tamanho || "Sem tamanho"
        );
        setIsCarrinho(true);
      }
      setMostrarCheck(true);

      setTimeout(() => {
        setMostrarCheck(false);
      }, 2000);
    },
    remover: () => {
      removerProduto(props.produto.id);
      setIsCarrinho(false);
      setMostrarCheck(false);
    },
  };

  return isCarrinho ? (
    mostrarCheck ? (
      <TbShoppingBagCheck
        size={props.size || 25}
        onClick={handleCarrinhoClick.remover}
        className="text-green-700 cursor-pointer"
      />
    ) : (
      <div className="flex gap-2">
        <TbShoppingBagPlus
          size={props.size || 25}
          onClick={handleCarrinhoClick.adicionar}
          className="text-rosa03 cursor-pointer"
        />
        <TbShoppingBagX
          size={props.size || 25}
          onClick={handleCarrinhoClick.remover}
          className="text-red-500 cursor-pointer"
        />
      </div>
    )
  ) : (
    <TbShoppingBagPlus
      size={props.size || 25}
      onClick={handleCarrinhoClick.adicionar}
      className="cursor-pointer"
    />
  );
}
