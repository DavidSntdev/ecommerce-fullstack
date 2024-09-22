import CompraTexto from "@/app/components/compra/CompraTexto";
import Produto from "@/core/model/interfaces/Produto";
import Image from "next/image";
export interface ConteudoCompraProps {
  produto: Produto;
  size?: number;
}

export default function ConteudoCompra(props: ConteudoCompraProps) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-6 px-10 text-default-50">
      <div className="flex gap-5 w-full flex-col md:flex-row justify-between items-center md:items-stretch">
        <div className="lg:w-1/2 flex justify-center">
          {props.produto.img && (
            <Image
              style={{ objectFit: "contain" }}
              width={300}
              height={300}
              src={props.produto.img}
              alt={props.produto.nome || "Imagem do produto"}
            />
          )}
        </div>
        <CompraTexto produto={props.produto} />
      </div>
      <div>
        <p>{props.produto.descricao}</p>
      </div>
    </section>
  );
}
