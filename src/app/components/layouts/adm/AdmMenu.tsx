import { IconHome, IconShoppingBag } from "@tabler/icons-react";
import MenuItem from "../../components/adm/MenuItem";

export default function AdmMenu() {
  return (
    <aside className="w-72 bg-zinc-900 min-h-screen max-h-full py-5">
      <nav className="flex flex-col gap-2">
        <MenuItem icone={IconHome} texto="Voltar para loja" url="/" />
        <MenuItem
          icone={IconShoppingBag}
          texto="Ver todos os produtos"
          url="/adm"
        />
      </nav>
    </aside>
  );
}
