"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Pagination } from "@nextui-org/pagination";
import { useState } from "react";
import UseProdutos from "@/hooks/useProdutos";
import ProdutosItem from "@/app/components/shared/ProdutosItem";
import Titulo from "@/app/components/shared/Titulos";

export default function ProdutosConteudo() {
  const [pagina, setPagina] = useState<number>(1);
  const { produtos } = UseProdutos();

  const produtosPorPag = 10;
  const totalProdutos = produtos.length;
  const totalPages = Math.ceil(totalProdutos / produtosPorPag);

  const handlePageChange = (pag: number) => {
    setPagina(pag);
  };

  const startIndex = (pagina - 1) * produtosPorPag;
  const currentProdutos = produtos.slice(
    startIndex,
    startIndex + produtosPorPag
  );

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-4">
      <Titulo titulo="Lingeries" />
      <AnimatePresence>
        <motion.div
          key={pagina}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full gap-3"
          exit={{ opacity: 0, y: 20 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          {currentProdutos.map((produto) => (
            <ProdutosItem
              key={produto.id}
              produto={produto}
              irParaCompra={`/produtos/${produto.link}`}
            />
          ))}
        </motion.div>
      </AnimatePresence>
      <Pagination
        initialPage={1}
        total={totalPages}
        onChange={handlePageChange}
      />
    </section>
  );
}
