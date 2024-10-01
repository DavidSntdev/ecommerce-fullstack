import { siteConfig } from "@/config/site";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";

type FavIconProps = {
  pathname: string;
};
export default function FavIcon(props: FavIconProps) {
  return (
    <Link href={siteConfig.fav.href}>
      <FaRegHeart
        className="cursor-pointer text-default-50"
        size={25}
        color={props.pathname === siteConfig.fav.href ? "red" : ""}
      />
    </Link>
  );
}
