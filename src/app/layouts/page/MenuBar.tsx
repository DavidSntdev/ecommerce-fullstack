import { siteConfig } from "@/config/site";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import Link from "next/link";
import { TbShoppingCart } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import { ThemeSwitch } from "@/app/components/common/themeSwitch";

export default function MenuBar() {
  return (
    <NextUINavbar
      className="py-3 bg-default-foreground"
      maxWidth="xl"
      position="sticky"
    >
      <NavbarContent
        className="hidden lg:flex basis-1/5 sm:basis-full text-default-100"
        justify="start"
      >
        <div className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link color="foreground" href={item.href}>
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>
      <NavbarContent>
        <NavbarBrand className="gap-3 w-full lg:justify-center text-default-100 text-xl">
          <Link
            className="flex gap-2 lg:flex-col lg:gap-0 items-center justify-center"
            href="/"
          >
            <p className="font-bold text-inherit">Leide</p>
            <p className="font-bold text-inherit lg:mt-[-10px]">Lingeries</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent
        className="hidden lg:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden lg:flex gap-4 text-default-100">
          <Link href={siteConfig.cart.href}>
            <TbShoppingCart className="cursor-pointer" size={25} />
          </Link>
          <Link href={siteConfig.fav.href}>
            <FaRegHeart className="cursor-pointer" size={25} />
          </Link>
        </NavbarItem>
        <ThemeSwitch />
      </NavbarContent>

      <NavbarContent
        className="lg:hidden basis-1 pl-4 text-default-100"
        justify="end"
      >
        <Link href={siteConfig.cart.href}>
          <TbShoppingCart className="cursor-pointer " size={25} />
        </Link>
        <Link href={siteConfig.fav.href}>
          <FaRegHeart className="cursor-pointer" size={25} />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu className="mt-5">
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link className="text-default-600" href={item.href}>
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
}
