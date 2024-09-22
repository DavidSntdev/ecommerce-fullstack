import LayoutPrincipal from "@/app/layouts/LayoutPrincipal";
import ConteudoCarrrinho from "./components/ConteudoCarrinho";
import Titulo from "@/app/components/shared/Titulos";

export default function FavoritoPag() {
  return (
    <LayoutPrincipal className="py-10">
      <Titulo titulo="Carrinho" />
      <ConteudoCarrrinho />
    </LayoutPrincipal>
  );
}
