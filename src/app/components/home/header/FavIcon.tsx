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
        className={`cursor-pointer ${
          props.pathname === siteConfig.fav.href
            ? "text-rosa05"
            : "text-rosa03 dark:text-default-900"
        }`}
        size={25}
      />
    </Link>
  );
}
