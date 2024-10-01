interface CorProps {
  cor?: string;
}

export default function CorInfo(props: CorProps) {
  return (
    <div className="flex items-center gap-2 w-auto">
      <span className="hidden md:flex font-bold text-default-500">Cor:</span>
      <span className="text-default-50">{props.cor}</span>
    </div>
  );
}
