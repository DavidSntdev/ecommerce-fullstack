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

interface CarrinhoProviderProps {
  children: ReactNode;
}

export const useCarrinho = () => {
  const context = useContext(CarrinhoContext);
  if (!context) {
    throw new Error("useCarrinho deve ser usado dentro de um CarrinhoProvider");
  }
  return context;
};

const CarrinhoContext = createContext<{
  adicionarProduto: (
    produto: Produto,
    quantidade?: number,
    cor?: string,
    tamanho?: string
  ) => void;
  removerProduto: (id: string) => void;
  atualizarQuantidade: (id: string, quantidade: number) => void;
  listarCarrinho: () => (Produto & { quantidade: number } & { cor: string } & {
    tamanho: string;
  })[];
  carrinhoPorId: (id: string) => boolean;
  quantidadeProduto: (id: string) => number;
  quantidadeTotal: () => number;
} | null>(null);

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

  const adicionarProduto = (
    produto: Produto,
    quantidade: number = 1,
    cor: string = "Padrão",
    tamanho: string = "Sem tamanho"
  ) => {
    if (carrinho) {
      carrinho.adicionarProduto(produto, quantidade, cor, tamanho);
      setCarrinho(new ItemsCarrinho(carrinho.listarCarrinho()));
    }
  };

  const removerProduto = (id: string) => {
    if (carrinho) {
      carrinho.removerProduto(id);
      setCarrinho(new ItemsCarrinho(carrinho.listarCarrinho()));
    }
  };

  const atualizarQuantidade = (id: string, quantidade: number) => {
    if (carrinho) {
      carrinho.atualizarQuantidade(id, quantidade);
      setCarrinho(new ItemsCarrinho(carrinho.listarCarrinho()));
    }
  };

  const carrinhoPorId = (id: string) => {
    return carrinho ? carrinho.carrinho.some((item) => item.id === id) : false;
  };

  const listarCarrinho = () => {
    return carrinho ? carrinho.listarCarrinho() : [];
  };

  const quantidadeProduto = (id: string) => {
    return carrinho ? carrinho.quantidadeProduto(id) : 0;
  };

  const quantidadeTotal = () => {
    return carrinho
      ? carrinho
          .listarCarrinho()
          .reduce((total, item) => total + item.quantidade, 0)
      : 0;
  };

  return (
    <CarrinhoContext.Provider
      value={{
        adicionarProduto,
        removerProduto,
        atualizarQuantidade,
        listarCarrinho,
        carrinhoPorId,
        quantidadeProduto,
        quantidadeTotal,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};
