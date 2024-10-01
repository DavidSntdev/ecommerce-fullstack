import Produto from "@/core/model/interfaces/Produto";

export default function BaseProduto({ nome, price }: Partial<Produto>) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xl font-black">{nome}</span>
      <div className="flex gap-2">
        Preço:
        <span className="text-green-400">R$ {price?.toFixed(2)}</span>
      </div>
    </div>
  );
}
