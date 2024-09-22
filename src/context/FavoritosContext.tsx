"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import Favoritos from "@/core/model/classes/Favoritos";
import Produto from "@/core/model/interfaces/Produto";

const FavoritosContext = createContext<{
  adicionarProduto: (produto: Produto) => void;
  removerProduto: (id: string) => void;
  listarFavoritos: () => Produto[];
  favoritosPorId: (id: string) => boolean;
} | null>(null);

export const useFavoritos = () => {
  const context = useContext(FavoritosContext);
  if (!context) {
    throw new Error(
      "useFavoritos deve ser usado dentro de um FavoritosProvider"
    );
  }
  return context;
};

interface FavoritosProviderProps {
  children: ReactNode;
}

export const FavoritosProvider = ({ children }: FavoritosProviderProps) => {
  const [favorito, setFavorito] = useState<Favoritos | null>(null);

  useEffect(() => {
    const storedFavoritos = localStorage.getItem("favoritos");
    const novosFavoritos = storedFavoritos
      ? new Favoritos(JSON.parse(storedFavoritos))
      : new Favoritos();
    setFavorito(novosFavoritos);
  }, []);

  useEffect(() => {
    if (favorito) {
      localStorage.setItem(
        "favoritos",
        JSON.stringify(favorito.listarFavoritos())
      );
    }
  }, [favorito]);

  const adicionarProduto = (produto: Produto) => {
    if (favorito) {
      favorito.adicionarProduto(produto);
      setFavorito(new Favoritos(favorito.listarFavoritos()));
    }
  };

  const removerProduto = (id: string) => {
    if (favorito) {
      favorito.removerProduto(id);
      setFavorito(new Favoritos(favorito.listarFavoritos()));
    }
  };

  const listarFavoritos = () => {
    return favorito ? favorito.listarFavoritos() : [];
  };

  const favoritosPorId = (id: string) => {
    return favorito ? favorito.favoritosPorId(id) : false;
  };

  return (
    <FavoritosContext.Provider
      value={{
        adicionarProduto,
        removerProduto,
        listarFavoritos,
        favoritosPorId,
      }}
    >
      {children}
    </FavoritosContext.Provider>
  );
};

