import Footer from "./page/Footer";
import Header from "./page/Header";
import Pagina from "./Pagina";
import { PaginaProps } from "@/core/model/interfaces/Props";

export default function LayoutPrincipal(props: PaginaProps) {
  return (
    <Pagina className="w-full mx-auto flex flex-col justify-between">
      <div className="flex flex-col items-center">
        <Header />
        <div className={`${props.className} max-w-7xl place-self-center`}>
          {props.children}
        </div>
      </div>
      <Footer />
    </Pagina>
  );
}
