import { ProdutoCarrinhoProps } from "@/core/model/interfaces/PropsProdutos";

export default function TotalInfo(props: ProdutoCarrinhoProps) {
  const total = (props.quantidade || 1) * (props.produto.price || 1);

  return (
    <div className="flex flex-col items-center gap-2">
      <span className="hidden md:flex font-bold text-rosa05">Total</span>
      <div className="flex flex-col text-rosa01">
        <div>R$ {total.toFixed(2)}</div>
      </div>
    </div>
  );
}
