import { ConteudoCompraProps } from "@/app/(internas)/produtos/[link]/components/ConteudoCompra";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { IoLogoWhatsapp } from "react-icons/io";
import Coracao from "../common/Coracao";
import Mochila from "../common/Mochila";

export default function CompraTexto(props: ConteudoCompraProps) {
  const [quantidade, setQuantidade] = useState<number>(1);

  const handleMinusClick = () => {
    if (quantidade > 1) setQuantidade((prev) => prev - 1);
  };

  const handlePlusClick = () => setQuantidade((prev) => prev + 1);

  if (!props.produto) return <div>Produto não disponível</div>;

  return (
    <div className="md:w-1/2 flex flex-col justify-between w-full py-5">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-bold">
          {props.produto.nome || "Produto não encontrado"}
        </h1>
        <div className="flex flex-col">
          <p className="text-lg">
            R$ <strong>{props.produto.price}</strong>
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col mt-10 gap-5">
        <div>
          <p className="text-green-600 dark:text-green-400 font-bold text-2xl">
            R${" "}
            {quantidade > 1
              ? (props.produto.price * quantidade).toFixed(0)
              : (props.produto.price * quantidade).toFixed(2)}
            {quantidade > 1 && ".00"}
          </p>
        </div>
        <div className="flex justify-between mt-[-15px]">
          <div className="flex gap-5 items-center">
            <button onClick={handleMinusClick}>
              <CiCircleMinus
                className={`${
                  quantidade < 2 ? "text-default-600" : "text-default-100"
                } cursor-pointer`}
                size={40}
              />
            </button>
            <p className="text-2xl">{quantidade}</p>
            <button onClick={handlePlusClick}>
              <CiCirclePlus className="cursor-pointer" size={40} />
            </button>
          </div>
          <div className="flex sm:hidden items-center">
            <Mochila
              produto={props.produto}
              size={35}
              quantidade={quantidade}
            />
            <Coracao produto={props.produto} size={35} />
          </div>
        </div>
        <div className="flex w-full gap-3 items-center">
          <Button
            as="a"
            className="lg:w-8/12 w-full rounded-sm py-6 flex gap-2 bg-green-500 dark:bg-green-700"
            href={`https://wa.me/5511971647488?text=Quero%20comprar%20${encodeURIComponent(
              quantidade
            )}%20${encodeURIComponent(
              props.produto.nome
            )}%20por%20R$%20${encodeURIComponent(
              quantidade > 1
                ? (props.produto.price * quantidade).toFixed(0)
                : (props.produto.price * quantidade).toFixed(2)
            )}${quantidade > 1 ? ".00" : ""}`}
            target="_blank"
          >
            Comprar via Whatsapp
            <IoLogoWhatsapp
              className="text-green-700 dark:text-green-400"
              size={20}
            />
          </Button>
          <div className="hidden sm:flex gap-5 justify-around">
            <Mochila
              produto={props.produto}
              size={35}
              quantidade={quantidade}
            />
            <Coracao produto={props.produto} size={35} />
          </div>
        </div>
      </div>
    </div>
  );
}
