import Produto from "@/core/model/interfaces/Produto";

export default function NomeInfo({ nome }: Partial<Produto>) {
  return (
    <div className="flex items-center gap-2 w-auto">
      <span className="hidden md:flex font-bold text-default-500">Nome:</span>
      <span className="text-default-50">{nome}</span>
    </div>
  );
}
