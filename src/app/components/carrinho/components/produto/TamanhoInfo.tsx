interface TamanhoProps {
  tamanho?: string;
}

export default function TamanhoInfo(props: TamanhoProps) {
  return (
    <div className="flex items-center gap-2 w-auto">
      <span className="hidden md:flex font-bold text-rosa05/70">Tamanho:</span>
      <span className="text-rosa01">{props.tamanho}</span>
    </div>
  );
}
