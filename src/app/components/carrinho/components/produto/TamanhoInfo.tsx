interface TamanhoProps {
  tamanho?: string;
}

export default function TamanhoInfo(props: TamanhoProps) {
  return (
    <div className="flex items-center gap-2 w-auto">
      <span className="hidden md:flex font-bold text-default-500">
        Tamanho:
      </span>
      <span className="text-default-50">{props.tamanho}</span>
    </div>
  );
}
