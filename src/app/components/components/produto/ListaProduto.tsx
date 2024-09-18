import LinhaProduto from "./LinhaProduto";
import Produto from "@/core/model/Produto";

export interface ListaProdutoProps {
  produtos: Produto[];
  onClick?: (produto: Produto) => void;
}

export default function ListaProduto(props: ListaProdutoProps) {
  return (
    <div className="flex flex-col gap-5 w-full">
      {props.produtos.map((produto: Produto) => {
        return (
          <LinhaProduto
            key={produto.id}
            produto={produto}
            onClick={props.onClick}
          />
        );
      })}
    </div>
  );
}
