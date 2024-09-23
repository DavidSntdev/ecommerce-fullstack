import ProdutosConteudo from "./components/ProdutosConteudo";
import LayoutPrincipal from "@/app/layouts/LayoutPrincipal";

export default function ProdutosPage() {
  return (
    <LayoutPrincipal className="w-full">
      <ProdutosConteudo />
    </LayoutPrincipal>
  );
}
