import Produto from "@/core/model/interfaces/Produto";
import { Card, CardBody } from "@nextui-org/card";
import Image from "next/image";
import Link from "next/link";
import Coracao from "./Coracao";

export interface ProdutosItemProps {
  produto: Produto;
  irParaCompra: string;
}

export default function ProdutosItem(props: ProdutosItemProps) {
  return (
    <Card
      key={props.produto.id}
      className="w-[75%] lg:w-[90%] border-1 border-default-800 bg-default-800 text-default-100 rounded-md justify-self-center"
      shadow="md"
    >
      <CardBody className="overflow-visible relative p-0">
        <Link
          className="relative w-full h-[350px] sm:h-[250px]"
          href={props.irParaCompra}
        >
          <Image
            fill
            alt={props.produto.nome}
            className="object-cover rounded-none"
            src={props.produto.img}
          />
        </Link>
        <footer className="flex sm:flex-col justify-between sm:justify-normal gap-2 px-3 py-2 cursor-pointer">
          <Link
            className="flex flex-col sm:flex-row cursor-pointer"
            href={props.irParaCompra}
          >
            <p>{props.produto.nome}</p>
            <p className="block sm:hidden">R${props.produto.price}</p>
          </Link>
          <div className="flex sm:hidden place-self-center">
            <Coracao produto={props.produto} />
          </div>
          <div className="hidden sm:flex flex-row justify-between">
            <p>R$ {props.produto.price}</p>
            <Coracao produto={props.produto} />
          </div>
        </footer>
      </CardBody>
    </Card>
  );
}
