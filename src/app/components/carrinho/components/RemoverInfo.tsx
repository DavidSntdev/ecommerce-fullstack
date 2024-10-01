import { useCarrinho } from "@/context/CarrinhoContext";
import { ProdutoCarrinhoProps } from "@/core/model/interfaces/PropsProdutos";
import { CiCircleRemove } from "react-icons/ci";

export default function RemoverInfo(props: ProdutoCarrinhoProps) {
  const { removerProduto } = useCarrinho();

  return (
    <div className="flex flex-col items-center gap-2">
      <span className="hidden md:flex font-bold text-default-500">Excluir</span>
      <CiCircleRemove
        className="cursor-pointer text-default-400"
        size={30}
        onClick={() => removerProduto(props.id || "")}
      />
    </div>
  );
}
