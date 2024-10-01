import { ConteudoCompraProps } from "@/core/model/interfaces/PropsProdutos";
import { Image } from "@nextui-org/image";
import { useState } from "react";

export default function CompraImagem(props: ConteudoCompraProps) {
  const [imagemAtiva, setImagemAtiva] = useState(1);

  const imagens = [
    props.produto.img,
    props.produto.img2,
    props.produto.img3,
    props.produto.img4,
    props.produto.img5,
  ].filter(Boolean);

  const imagemSelecionada = imagens[imagemAtiva - 1] || imagens[0];

  return (
    <div className="w-[85%] md:w-[70%] lg:w-auto flex flex-col lg:flex-row justify-center gap-5">
      <div className="lg:w-2/12 flex lg:flex-col gap-3 order-2">
        {imagens.map((img, index) => (
          <button
            key={index}
            onClick={() => setImagemAtiva(index + 1)}
            className="flex items-center"
          >
            <Image
              src={img || ""}
              isZoomed
              alt={`Imagem ${index + 1}`}
              radius="md"
              style={{ objectFit: "contain" }}
            />
          </button>
        ))}
      </div>
      <div className="lg:w-10/12 lg:order-2">
        <Image
          isBlurred
          style={{ objectFit: "contain" }}
          className="rounded-lg"
          src={imagemSelecionada || ""}
          alt={props.produto.nome || "Imagem do produto"}
        />
      </div>
    </div>
  );
}
