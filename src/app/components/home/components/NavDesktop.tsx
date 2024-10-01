import { BotoesNavProps } from "@/core/model/interfaces/Props";
import BotoesNav from "./BotoesNav";

export default function NavDesktop(props: BotoesNavProps) {
  return (
    <div className="hidden sm:flex gap-2">
      <BotoesNav setPagina={props.setPagina} totalPag={props.totalPag} />
    </div>
  );
}
