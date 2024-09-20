import Conteudo from "./layouts/page/Conteudo";
import Footer from "./layouts/page/Footer";
import MenuBar from "./layouts/page/MenuBar";
import Pagina from "./layouts/Pagina";

export default function PaginaPrincipal() {
  return (
    <Pagina className="w-full max-w-7xl mx-auto">
      <MenuBar />
      <Conteudo />
      <Footer />
    </Pagina>
  );
}
