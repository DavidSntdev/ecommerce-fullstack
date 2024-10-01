interface VerificarProdutoProps {
  verificar: string;
  resultado: boolean;
}

export default function VerificarProduto(props: VerificarProdutoProps) {
  return (
    <div className="flex gap-2">
      {props.verificar}
      <span
        className={`${props.resultado ? "text-green-500" : "text-red-500"}`}
      >
        {props.resultado ? "sim" : "não"}
      </span>
    </div>
  );
}
