import Produto from "@/core/model/interfaces/Produto";

export default function NomeInfo({ nome }: Partial<Produto>) {
  return (
    <div className="flex items-center gap-2 w-auto">
      <span className="hidden md:flex font-bold text-rosa05/70">Nome:</span>
      <span className="text-rosa01">{nome}</span>
    </div>
  );
}
