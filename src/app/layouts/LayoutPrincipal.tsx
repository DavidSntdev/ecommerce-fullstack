import { ReactNode } from "react";
import Footer from "./page/Footer";
import MenuBar from "./page/MenuBar";
import Pagina from "./Pagina";

export interface LayoutPrincipalProps {
  children: ReactNode;
  className?: string;
}

export default function LayoutPrincipal(props: LayoutPrincipalProps) {
  return (
    <Pagina className="w-full mx-auto flex flex-col justify-between">
      <MenuBar />
      <div className={`${props.className} max-w-7xl place-self-center`}>{props.children}</div>
      <Footer />
    </Pagina>
  );
}
