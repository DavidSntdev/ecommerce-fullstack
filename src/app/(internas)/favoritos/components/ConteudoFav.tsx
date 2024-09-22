"use client";
import ProdutosItem from "@/app/components/shared/ProdutosItem";
import useFavorito from "@/app/data/hooks/useFavorito";
import Produto from "@/core/model/interfaces/Produto";

export default function ConteudoFav() {
  const { listarFavoritos } = useFavorito();
  const favoritos = listarFavoritos();

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <h1>Favoritos</h1>
      {favoritos.length === 0 ? (
        <p className="text-lg text-default-50">Nenhum produto nos favoritos</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoritos.map((produto: Produto) => (
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
