import {
  IconHome,
  IconShoppingBag,
  IconShoppingBagEdit,
  IconShoppingBagMinus,
} from "@tabler/icons-react";

import MenuItem from "../components/MenuItem";

export default function MenuAdm() {
  return (
    <aside className="w-72 bg-zinc-900 min-h-screen max-h-full py-5">
      <nav className="flex flex-col gap-2">
        <MenuItem icone={IconHome} texto="inicio" url="/" />
        <MenuItem icone={IconShoppingBag} texto="Produtos" url="/adm" />
        <MenuItem
          icone={IconShoppingBagEdit}
          texto="Gerenciar Produtos"
          url="/adm/gerenciar"
        />
        <MenuItem
          icone={IconShoppingBagMinus}
          texto="Remover Produtos"
          url="/adm/remove"
        />
      </nav>
    </aside>
  );
}
