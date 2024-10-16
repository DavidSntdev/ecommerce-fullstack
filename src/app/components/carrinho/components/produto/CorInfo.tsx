interface CorProps {
  cor?: string;
}

export default function CorInfo(props: CorProps) {
  return (
    <div className="flex items-center gap-2 w-auto">
      <span className="hidden md:flex font-bold text-rosa05/70">Cor:</span>
      <span className="text-rosa01">{props.cor}</span>
    </div>
  );
}
