import Conteudo from "./layouts/Conteudo";
import Footer from "./layouts/Footer";
import MenuBar from "./layouts/MenuBar";
import Pagina from "./layouts/Pagina";

export default function PaginaPrincipal() {
  return (
    <Pagina className="w-full">
      <MenuBar />
      <Conteudo />
      <Footer />
    </Pagina>
  );
}
