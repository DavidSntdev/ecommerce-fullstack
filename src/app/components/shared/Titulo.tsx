import { ElementType } from "react";

export interface TituloProps {
  principal: string;
  secundario: string;
  icone: ElementType;
}
export default function Titulo(props: TituloProps) {
  return (
    <div className="flex gap-2 items-center">
      <props.icone size={60} stroke={1} className="text-default-300" />
      <div className="flex flex-col">
        <h1 className="text-2xl text-default-300  font-black">
          {props.principal}
        </h1>
        <h2 className="text-default-500">{props.secundario}</h2>
      </div>
    </div>
  );
}
