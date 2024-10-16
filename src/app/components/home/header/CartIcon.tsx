import { siteConfig } from "@/config/site";
import { useCarrinho } from "@/context/CarrinhoContext";
import { Badge } from "@nextui-org/badge";
import Link from "next/link";
import { TbShoppingCart } from "react-icons/tb";

type CartIconProps = {
  pathname: string;
};
export default function CartIcon(props: CartIconProps) {
  const { quantidadeTotal } = useCarrinho();

  return (
    <Link href={siteConfig.cart.href}>
      <Badge
        className="bg-rosa05 border-none text-rosa01"
        content={quantidadeTotal()}
        isInvisible={quantidadeTotal() < 1 ? true : false}
        shape="circle"
        size="md"
      >
        <TbShoppingCart
          className={`cursor-pointer ${
            props.pathname === siteConfig.cart.href
              ? "text-rosa05"
              : "text-rosa03 dark:text-default-900"
          }`}
          size={25}
        />
      </Badge>
    </Link>
  );
}
