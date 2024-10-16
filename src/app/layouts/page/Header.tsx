"use client";
import { usePathname } from "next/navigation";
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
import { ThemeSwitch } from "@/app/components/common/themeSwitch";
import CartIcon from "@/app/components/home/header/CartIcon";
import FavIcon from "@/app/components/home/header/FavIcon";

export default function Header() {
  const pathname = usePathname();

  return (
    <NextUINavbar
      className="py-3 bg-rosa01 dark:bg-default-50"
      maxWidth="xl"
      position="sticky"
    >
      <NavbarContent
        className="hidden lg:flex basis-1/5 sm:basis-full text-rosa03 dark:text-default-900"
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
        <NavbarBrand className="gap-3 w-full lg:justify-center text-rosa05 dark:text-rosa04 text-xl">
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
        <NavbarItem className="hidden lg:flex gap-4">
          <CartIcon pathname={pathname} />
          <FavIcon pathname={pathname} />
        </NavbarItem>
        <ThemeSwitch />
      </NavbarContent>

      <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
        <CartIcon pathname={pathname} />
        <FavIcon pathname={pathname} />
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu className="mt-5">
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link className="text-rosa02" href={item.href}>
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
}
