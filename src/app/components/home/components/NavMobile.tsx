import { BotoesNavProps } from "@/core/model/interfaces/Props";
import BotoesNav from "./BotoesNav";

export default function NavMobile(props: BotoesNavProps) {
  return (
    <div className="flex sm:hidden w-full px-16 gap-2 justify-between">
      <BotoesNav setPagina={props.setPagina} totalPag={props.totalPag} />
    </div>
  );
}
