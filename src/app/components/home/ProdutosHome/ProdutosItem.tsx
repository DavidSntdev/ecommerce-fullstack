import Produto from "@/core/model/Produto";
import { Card, CardBody } from "@nextui-org/card";
import Image from "next/image";
import Link from "next/link";

export interface ProdutosItemProps {
  produtos: Produto;
  irParaCompra: string;
}

export default function ProdutosItem(props: ProdutosItemProps) {
  return (
    <Card
      key={props.produtos.id}
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
            alt={props.produtos.nome}
            className="object-cover rounded-none"
            src={props.produtos.img}
          />
        </Link>
        <footer className="flex sm:flex-col justify-between sm:justify-normal gap-1 px-3 py-2 cursor-pointer">
          <Link
            className="flex flex-col sm:flex-row cursor-pointer"
            href={props.irParaCompra}
          >
            <p>{props.produtos.nome}</p>
            <p className="block sm:hidden">R${props.produtos.price}</p>
          </Link>
          <div className="hidden sm:flex flex-row justify-between">
            <p>R$ {props.produtos.price}</p>
          </div>
        </footer>
      </CardBody>
    </Card>
  );
}
