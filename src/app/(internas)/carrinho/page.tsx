import LayoutPrincipal from "@/app/layouts/LayoutPrincipal";
import Titulo from "@/app/components/shared/Titulos";
import ConteudoCarrinho from "./components/ConteudoCarrinho";

export default function FavoritoPag() {
  return (
    <LayoutPrincipal className="py-4 w-full lg:w-[1000px] mx-auto">
      <Titulo titulo="Carrinho" />
      <ConteudoCarrinho />
    </LayoutPrincipal>
  );
}
