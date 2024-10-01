import Link from "next/link";
import { ElementType } from "react";

export interface MenuItemProps {
  icone: ElementType;
  texto: string;
  url: string;
}

export default function MenuItem(props: MenuItemProps) {
  return (
    <Link
      href={props.url}
      className="flex gap-2 px-5 py-3 items-center hover:bg-default-900 rounded-2xl"
    >
      <props.icone className="text-default-50" />
      <span className="text-default-50">{props.texto}</span>
    </Link>
  );
}
