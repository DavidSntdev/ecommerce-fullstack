import { IconHome, IconShoppingBag } from "@tabler/icons-react";
import MenuItem from "../components/MenuItem";

export default function Menu() {
  return (
    <aside className="w-72 bg-zinc-900 min-h-screen max-h-full py-5">
      <nav className="flex flex-col gap-2">
        <MenuItem icone={IconHome} texto="inicio" url="/" />
        <MenuItem icone={IconShoppingBag} texto="Produtos" url="/produtos" />
      </nav>
    </aside>
  );
}
