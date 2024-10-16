import { motion } from "framer-motion";
import Produto from "@/core/model/interfaces/Produto";
import ProdutosItem from "../../common/ProdutosItem";

interface ProdutosHomeProps {
  produtos: Produto[];
}

export default function ProdutosHome(props: ProdutosHomeProps) {
  if (!props.produtos || props.produtos.length === 0) {
    return <p className="text-default-50">Nenhum produto disponível</p>;
  }

  const produtoVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 0 },
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full gap-2 rounded-sm">
      {props.produtos.map((produto) => (
        <motion.div
          key={produto.id}
          initial="hidden"
          animate="visible"
          className="w-[80%] lg:w-[90%] mx-auto"
          exit="exit"
          variants={produtoVariants}
          transition={{ duration: 0.5 }}
        >
          <ProdutosItem
            key={produto.id}
            produto={produto}
            irParaCompra={`/produtos/${produto.link}`}
          />
        </motion.div>
      ))}
    </div>
  );
}
