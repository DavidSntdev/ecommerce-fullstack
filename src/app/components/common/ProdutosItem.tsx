import Produto from "@/core/model/interfaces/Produto";
import { Card, CardBody } from "@nextui-org/card";
import Image from "next/image";
import Link from "next/link";
import Coracao from "./Coracao";

export interface ProdutosItemProps {
  produto: Produto;
  irParaCompra: string;
  className?: string;
}

export default function ProdutosItem(props: ProdutosItemProps) {
  return (
    <Card
      key={props.produto.id}
      className={`border-1 ${props.className} border-rosa01 dark:border-rosa03 bg-rosa02 dark:bg-rosa03 dark:hover:bg-rosa02 rounded-md justify-self-center hover:bg-rosa02/75`}
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
            <p className="text-rosa05 dark:text-rosa font-semibold">
              {props.produto.nome}
            </p>
            <p className="block sm:hidden">R${props.produto.price}</p>
          </Link>
          <div className="flex sm:hidden place-self-center">
            <Coracao produto={props.produto} />
          </div>
          <div className="hidden sm:flex flex-row justify-between">
            <p className="text-rosa font-semibold">R$ {props.produto.price}</p>
            <Coracao produto={props.produto} />
          </div>
        </footer>
      </CardBody>
    </Card>
  );
}
