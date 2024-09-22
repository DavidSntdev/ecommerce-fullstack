import LayoutPrincipal from "@/app/layouts/LayoutPrincipal";
import ConteudoFav from "./components/ConteudoFav";
import Titulo from "@/app/components/shared/Titulos";

export default function FavoritoPag() {
  return (
    <LayoutPrincipal className="py-4">
      <Titulo titulo="Favoritos" />
      <ConteudoFav />
    </LayoutPrincipal>
  );
}
