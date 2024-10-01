import MenuItem from "@/app/components/adm/MenuItem";
import { FaHome } from "react-icons/fa";

export default function AdmMenu() {
  return (
    <aside className="w-full bg-default-foreground py-5">
      <nav className="flex justify-center gap-2">
        <MenuItem icone={FaHome} texto="Voltar para loja" url="/" />
      </nav>
    </aside>
  );
}
