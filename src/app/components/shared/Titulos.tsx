export interface TituloProps {
  titulo: string;
}
export default function Titulo(props: TituloProps) {
  return (
    <h1 className="text-4xl text-default-50 font-black text-center">
      {props.titulo}
    </h1>
  );
}
