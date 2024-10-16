"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Pagination } from "@nextui-org/pagination";
import { useState } from "react";
import UseProdutos from "@/hooks/useProdutos";
import Titulo from "@/app/components/shared/Titulos";
import ProdutosItem from "@/app/components/common/ProdutosItem";

export default function ProdutosConteudo() {
  const [pagina, setPagina] = useState<number>(1);
  const { produtos } = UseProdutos();

  const produtosEstoque = produtos.filter((produto) => produto.estoque);
  const produtosPorPag = 10;
  const totalProdutos = produtosEstoque.length;
  const totalPages = Math.ceil(totalProdutos / produtosPorPag);

  const handlePageChange = (pag: number) => {
    setPagina(pag);
  };

  const startIndex = (pagina - 1) * produtosPorPag;
  const currentProdutos = produtosEstoque.slice(
    startIndex,
    startIndex + produtosPorPag
  );

  const produtoVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-4">
      <Titulo titulo="Lingeries" />
      <AnimatePresence mode="wait">
        <motion.div
          key={pagina}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full gap-2"
        >
          {currentProdutos.map((produto) => (
            <motion.div
              key={produto.id}
              initial="hidden"
              animate="visible"
              className="w-[80%] lg:w-[90%] mx-auto"
              exit="exit"
              variants={produtoVariants}
              transition={{ duration: 0.4 }}
            >
              <ProdutosItem
                produto={produto}
                irParaCompra={`/produtos/${produto.link}`}
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
      <Pagination
        classNames={{
          item: `bg-rosa05 text-rosa01 `,
          cursor: "bg-rosa03",
        }}
        initialPage={pagina || 1}
        total={totalPages}
        onChange={handlePageChange}
      />
    </section>
  );
}
