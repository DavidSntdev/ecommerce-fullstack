export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Leide Lingeries",
  description: "Uma loja para você encontrar as melhores lingeries do mercado",
  navItems: [
    {
      label: "Produtos",
      href: "/produtos",
    },
    {
      label: "Sobre Mim",
      href: "/sobre",
    },
  ],
  navMenuItems: [
    {
      label: "Pagina Inicial",
      href: "/",
    },
    {
      label: "Produtos",
      href: "/produtos",
    },
    {
      label: "Carrinho",
      href: "/carrinho",
    },
    {
      label: "Favoritos",
      href: "/favoritos",
    },
    {
      label: "Sobre Mim",
      href: "/sobre",
    },
  ],
  cart: {
    label: "carrinho",
    href: "/carrinho",
  },

  fav: {
    label: "favoritos",
    href: "/favoritos",
  },

  links: {
    github: "https://github.com/DavidSntdev",
  },
};
