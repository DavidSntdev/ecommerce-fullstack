import { TituloProps } from "../../shared/Titulos";

export default function TituloInicial(props: TituloProps) {
  return <h1 className="text-5xl text-default-100">{props.titulo}</h1>;
}
