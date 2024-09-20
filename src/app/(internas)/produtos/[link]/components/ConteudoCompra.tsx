import Produto from "@/core/model/Produto";

export default function ConteudoCompra(produto: Produto) {
  return (
    <div className="bg-white">
      <div>{produto.nome}</div>
    </div>
  );
}
