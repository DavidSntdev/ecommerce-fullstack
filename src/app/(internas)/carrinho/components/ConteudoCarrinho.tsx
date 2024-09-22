"use client";
import ProdutosItem from "@/app/components/common/ProdutosItem";
import { useCarrinho } from "@/context/CarrinhoContext";
import Produto from "@/core/model/interfaces/Produto";

export default function ConteudoCarrrinho() {
  const { listarCarrinho } = useCarrinho();
  const carrinho = listarCarrinho();

  return (
    <section className="flex flex-col items-center gap-4 py-8 md:py-10">
      {carrinho.length === 0 ? (
        <p className="text-lg text-default-50">Nenhum produto no carrinho</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-5 gap-6">
          {carrinho.map((produto: Produto) => (
            <ProdutosItem
              key={produto.id}
              produto={produto}
              irParaCompra={`/produto/${produto.id}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
