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
        color="primary"
        content={quantidadeTotal()}
        isInvisible={quantidadeTotal() < 1 ? true : false}
        shape="circle"
      >
        <TbShoppingCart
          className="cursor-pointer text-default-50"
          size={25}
          color={props.pathname === siteConfig.cart.href ? "#12E3E3" : ""}
        />
      </Badge>
    </Link>
  );
}
