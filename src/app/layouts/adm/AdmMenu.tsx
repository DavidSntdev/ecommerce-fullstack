import MenuItem from "@/app/components/adm/MenuItem";
import { FaHome, FaShoppingBag } from "react-icons/fa";

export default function AdmMenu() {
  return (
    <aside className="w-72 bg-default-900 min-h-screen max-h-full py-5">
      <nav className="flex flex-col gap-2">
        <MenuItem icone={FaHome} texto="Voltar para loja" url="/" />
        <MenuItem
          icone={FaShoppingBag}
          texto="Ver todos os produtos"
          url="/adm"
        />
      </nav>
    </aside>
  );
}
