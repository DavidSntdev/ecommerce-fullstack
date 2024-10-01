import Produto from "@/core/model/interfaces/Produto";
import { Image } from "@nextui-org/image";
import BaseProduto from "./Linha/BaseProduto";
import VerificarProduto from "./Linha/VerificarProduto";

export interface LinhaProdutoProps {
  produto: Produto;
  onClick?: (produto: Produto) => void;
}

export default function LinhaProduto(props: LinhaProdutoProps) {
  return (
    <div
      className="flex bg-default-700 hover:bg-default-800  gap-2 rounded-md cursor-pointer w-full"
      onClick={() => props.onClick?.(props.produto)}
    >
      <span>
        <Image
          className="rounded-none rounded-l-md"
          src={props.produto.img}
          alt={props.produto.nome}
          height={200}
          width={150}
        />
      </span>
      <div className="flex flex-col justify-between py-1">
        <BaseProduto {...props.produto} />
        <div className="flex flex-col">
          <VerificarProduto
            verificar="Cor:"
            resultado={props.produto.cor1 ? true : false}
          />
          <VerificarProduto
            verificar="Tamanho:"
            resultado={props.produto.tamanhos ? true : false}
          />
          <VerificarProduto
            verificar="Descrição:"
            resultado={props.produto.descricao ? true : false}
          />
          <VerificarProduto
            verificar="Estoque:"
            resultado={props.produto.estoque}
          />
        </div>
      </div>
    </div>
  );
}
