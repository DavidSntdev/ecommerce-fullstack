"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import ItemsCarrinho from "@/core/model/classes/ItemsCarrinho";
import Produto from "@/core/model/interfaces/Produto";

const CarrinhoContext = createContext<{
  adicionarProduto: (produto: Produto) => void;
  removerProduto: (id: string) => void;
  listarCarrinho: () => Produto[];
  carrinhoPorId: (id: string) => boolean;
} | null>(null);

export const useCarrinho = () => {
  const context = useContext(CarrinhoContext);
  if (!context) {
    throw new Error("useCarrinho deve ser usado dentro de um CarrinhoProvider");
  }
  return context;
};

interface CarrinhoProviderProps {
  children: ReactNode;
}

export const CarrinhoProvider = ({ children }: CarrinhoProviderProps) => {
  const [carrinho, setCarrinho] = useState<ItemsCarrinho | null>(null);

  useEffect(() => {
    const storedCarrinho = localStorage.getItem("carrinho");
    const novoCarrinho = storedCarrinho
      ? new ItemsCarrinho(JSON.parse(storedCarrinho))
      : new ItemsCarrinho();
    setCarrinho(novoCarrinho);
  }, []);

  useEffect(() => {
    if (carrinho) {
      localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho.listarCarrinho())
      );
    }
  }, [carrinho]);

  const adicionarProduto = (produto: Produto) => {
    if (carrinho) {
      carrinho.adicionarProduto(produto);
      setCarrinho(new ItemsCarrinho(carrinho.listarCarrinho()));
    }
  };

  const removerProduto = (id: string) => {
    if (carrinho) {
      carrinho.removerProduto(id);
      setCarrinho(new ItemsCarrinho(carrinho.listarCarrinho()));
    }
  };

  const listarCarrinho = () => {
    return carrinho ? carrinho.listarCarrinho() : [];
  };

  const carrinhoPorId = (id: string) => {
    return carrinho ? carrinho.carrinho.some((item) => item.id === id) : false;
  };

  return (
    <CarrinhoContext.Provider
      value={{
        adicionarProduto,
        removerProduto,
        listarCarrinho,
        carrinhoPorId,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};
