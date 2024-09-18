import Pagina from "./components/layouts/Pagina";
import Conteudo from "./layouts/Conteudo";
import Footer from "./layouts/Footer";
import MenuBar from "./layouts/MenuBar";

export default function PaginaPrincipal() {
  return (
    <Pagina>
      <MenuBar />
      <Conteudo />
      <Footer />
    </Pagina>
  );
}
