import CompraImagem from "@/app/components/compra/CompraImagem";
import CompraTexto from "@/app/components/compra/CompraTexto";
import { ConteudoCompraProps } from "@/core/model/interfaces/PropsProdutos";

export default function ConteudoCompra(props: ConteudoCompraProps) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-6 px-5 lg:px-10 text-default-50">
      <div className="flex gap-10 w-full flex-col md:flex-row md:justify-normal md:gap-10 justify-between items-center md:items-stretch py-6">
        <CompraImagem produto={props.produto} />
        <CompraTexto produto={props.produto} />
      </div>
    </section>
  );
}
