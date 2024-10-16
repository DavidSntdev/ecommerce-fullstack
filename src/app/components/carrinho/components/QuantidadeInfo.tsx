import { useCarrinho } from "@/context/CarrinhoContext";
import { ProdutoCarrinhoProps } from "@/core/model/interfaces/PropsProdutos";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

export default function QuantidadeInfo(props: ProdutoCarrinhoProps) {
  const { atualizarQuantidade } = useCarrinho();

  return (
    <div className="flex flex-col gap-2">
      <span className="hidden md:flex font-bold text-rosa05">Quantidade</span>
      <div className="flex gap-5 justify-center text-rosa01">
        <button
          onClick={() =>
            atualizarQuantidade(props.id || "", (props.quantidade || 1) - 1)
          }
          disabled={(props.quantidade || 1) < 2}
        >
          <CiCircleMinus
            className={`${
              (props.quantidade || 1) < 2 ? "text-rosa04" : "text-rosa01"
            } cursor-pointer`}
            size={25}
          />
        </button>
        <p className="text-xl">{props.quantidade}</p>
        <button
          onClick={() =>
            atualizarQuantidade(props.id || "", (props.quantidade || 1) + 1)
          }
        >
          <CiCirclePlus className="cursor-pointer" size={25} />
        </button>
      </div>
    </div>
  );
}
