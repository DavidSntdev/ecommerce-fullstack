import LinhaProduto from "./LinhaProduto";
import Produto from "@/core/model/interfaces/Produto";

export interface ListaProdutoProps {
  produtos: Produto[];
  onClick?: (produto: Produto) => void;
}

export default function ListaProduto(props: ListaProdutoProps) {
  return (
    <div className="grid grid-cols-4 gap-5 w-full">
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
