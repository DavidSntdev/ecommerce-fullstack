"use client";
import { useState } from "react";
import UseProdutos from "@/hooks/useProdutos";
import TituloInicial from "./components/TituloInicial";
import NavProdutosHome from "./components/NavProdutosHome";
import BotaoLink from "./components/BotaoLink";
import ProdutosHome from "./components/ProdutosHome";
import NavMobile from "./components/NavMobile";

export interface LingeriesHomeProps {
  titulo: string;
  url: string;
}

export default function LingeriesHome(props: LingeriesHomeProps) {
  const [pagina, setPagina] = useState<number>(1);
  const [searchText, setSearchText] = useState<string>("");
  const { produtos } = UseProdutos();

  const produtosEstoque = produtos.filter((produto) => produto.estoque);
  const produtosPorPag = 5;
  const totalPag = Math.ceil(produtosEstoque.length / produtosPorPag);

  const produtosFiltrados = produtosEstoque.filter((produto) =>
    produto.nome.toLowerCase().includes(searchText.toLowerCase())
  );

  const startIndex = (pagina - 1) * produtosPorPag;
  const produtosAtual = produtosFiltrados.slice(
    startIndex,
    startIndex + produtosPorPag
  );

  if (!produtos || produtos.length === 0) {
    return <p className="text-default-50">Carregando os produtos...</p>;
  }

  return (
    <div className="flex flex-col w-full items-center gap-3 pb-32">
      <TituloInicial titulo={props.titulo} />
      <NavProdutosHome
        setPagina={setPagina}
        totalPag={totalPag}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <ProdutosHome produtos={produtosAtual} />
      <NavMobile setPagina={setPagina} totalPag={totalPag} />
      <BotaoLink url={props.url} />
    </div>
  );
}
