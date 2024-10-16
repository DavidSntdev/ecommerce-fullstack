import { TituloProps } from "../../shared/Titulos";

export default function TituloInicial(props: TituloProps) {
  return (
    <h1 className="text-5xl text-rosa05 dark:text-rosa04">{props.titulo}</h1>
  );
}
