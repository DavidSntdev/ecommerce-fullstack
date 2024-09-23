"use client";
import BotaoCarrinho from "@/app/components/carrinho/BotaoCarrinho";
import { useCarrinho } from "@/context/CarrinhoContext";
import Image from "next/image";
import { FaTrashAlt } from "react-icons/fa";

export default function ConteudoCarrinho() {
  const { listarCarrinho, removerProduto } = useCarrinho();
  const carrinho = listarCarrinho();

  const gerarMensagemCarrinho = () => {
    let total = 0;
    let mensagem = "Produtos no carrinho:\n";

    carrinho.forEach((produto) => {
      const produtoCarrinho = carrinho.find((prod) => prod.id === produto.id);
      const quantidade = produtoCarrinho?.quantidade || 0;
      const valorProduto = produto.price * quantidade;
      total += valorProduto;
      mensagem += `${
        produto.nome
      }\nQuantidade: ${quantidade}\nPreço unitário: R$ ${produto.price.toFixed(
        2
      )}\nSubtotal: R$ ${valorProduto.toFixed(2)}\n\n`;
    });

    mensagem += `Valor total: R$ ${total.toFixed(2)}`;
    return mensagem;
  };

  return (
    <section className="flex flex-col items-center gap-4 py-8">
      <div className="w-full flex flex-col gap-3">
        {carrinho.length > 0 ? (
          carrinho.map((produto) => {
            const produtoCarrinho = carrinho.find(
              (produto) => produto.id === produto.id
            );

            return (
              <div
                key={produto.id}
                className=" flex border-1 border-default-400 justify-between text-default-50"
              >
                <div className="flex gap-5 w-[300px]">
                  <div className="relative w-[150px] h-[150px]">
                    <Image
                      fill
                      alt={produto.nome}
                      className="w-20"
                      src={produto.img}
                    />
                  </div>
                  <div className="flex flex-col justify-center w-[150px]">
                    <div>{produto.nome}</div>
                    <div>Quantidade: {produtoCarrinho?.quantidade || 0}</div>
                    <div>
                      R${" "}
                      {(
                        produto.price * (produtoCarrinho?.quantidade || 1)
                      ).toFixed(0)}
                      .00
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center pr-5">
                  <FaTrashAlt
                    className="cursor-pointer text-default-600"
                    size={50}
                    onClick={() => removerProduto(produtoCarrinho?.id || "")}
                  />
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-xl col-span-full place-self-center text-default-50">
            Você não tem produtos no carrinho ainda.
          </p>
        )}
        {carrinho.length > 0 && (
          <BotaoCarrinho mensagem={gerarMensagemCarrinho()} />
        )}
      </div>
    </section>
  );
}
