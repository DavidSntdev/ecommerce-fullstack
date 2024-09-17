import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { TbShoppingCart } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";

import { SearchIcon } from "../commons/icons";
import { ThemeSwitch } from "../commons/theme-switch";

import { siteConfig } from "@/config/site";

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      labelPlacement="outside"
      placeholder="Procure..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <NextUINavbar className="py-3 " maxWidth="xl" position="sticky">
      <NavbarContent
        className="hidden lg:flex basis-1/5 sm:basis-full"
        justify="start"
      >
        <div className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>
      <NavbarContent>
        <NavbarBrand className="gap-3 w-full lg:justify-center">
          <NextLink
            className="flex gap-2 lg:flex-col lg:gap-0 items-center justify-center"
            href="/"
          >
            <p className="font-bold text-inherit ">Leide</p>
            <p className="font-bold text-inherit mt-[-px]">Lingeries</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent
        className="hidden lg:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden lg:flex gap-4">
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
        <NavbarItem className="hidden lg:flex gap-4 text-default-500">
          <NextLink href={siteConfig.cart.href}>
            <TbShoppingCart className="cursor-pointer" size={25} />
          </NextLink>
          <NextLink href={siteConfig.fav.href}>
            <FaRegHeart className="cursor-pointer" size={25} />
          </NextLink>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NextLink className="text-default-500" href={siteConfig.cart.href}>
          <TbShoppingCart
            className="cursor-pointer text-default-500"
            size={25}
          />
        </NextLink>
        <NextLink className="text-default-500" href={siteConfig.fav.href}>
          <FaRegHeart className="cursor-pointer text-default-500" size={25} />
        </NextLink>
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu className="mt-5">
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link className="text-default-600" href={item.href} size="lg">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
