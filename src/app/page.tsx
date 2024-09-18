import Pagina from "./components/layouts/Pagina";
import Conteudo from "./layouts/Conteudo";
import Footer from "./layouts/Footer";
import MenuBar from "./layouts/MenuBar";

export default function PaginaPrincipal() {
  return (
    <Pagina className="w-full">
      <MenuBar />
      <Conteudo />
      <Footer />
    </Pagina>
  );
}
