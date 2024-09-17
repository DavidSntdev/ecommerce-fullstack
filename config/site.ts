export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "carrinho",
      href: "/carrinho",
    },
    {
      label: "favoritos",
      href: "/favoritos",
    },
  ],

  cart: { label: "carrinho", href: "/carrinho" },
  fav: { label: "favoritos", href: "/favoritos" },

  links: {
    github: "https://github.com/DavidSntdev",
  },
};
