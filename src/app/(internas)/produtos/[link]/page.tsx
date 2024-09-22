"use client";

import UseProdutos from "@/hooks/useProdutos";
import LayoutPrincipal from "@/app/layouts/LayoutPrincipal";
import Produto from "@/core/model/interfaces/Produto";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ConteudoCompra from "./components/ConteudoCompra";

export default function ProdutoCompra() {
  const { produtos } = UseProdutos();
  const { link } = useParams();
  const [produto, setProduto] = useState<Produto | null>(null);

  useEffect(() => {
    if (link) {
      const produtoEncontrado = produtos.find((prod) => prod.link === link);
      setProduto(produtoEncontrado || null);
    }
  }, [link, produtos]);

  if (!produto) {
    return <p className="text-default-50">Carregando...</p>;
  }

  return (
    <LayoutPrincipal>
      <ConteudoCompra produto={produto} />
    </LayoutPrincipal>
  );
}
