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
      className="flex gap-2 px-5 py-3 items-center hover:bg-black"
      href={props.url}
    >
      <props.icone className="text-zinc-200" />
      <span className="text-zinc-200">{props.texto}</span>
    </Link>
  );
}
