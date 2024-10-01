"use client";
import BotaoCarrinho from "@/app/components/carrinho/BotaoCarrinho";
import ProdutoCarrinho from "@/app/components/carrinho/ProdutoCarrinho";
import { useCarrinho } from "@/context/CarrinhoContext";

export default function ConteudoCarrinho() {
  const { listarCarrinho } = useCarrinho();
  const carrinho = listarCarrinho();

  const gerarMensagemCarrinho = () => {
    let total = 0;
    let mensagem = "Produtos no carrinho:\n";

    carrinho.forEach((produto) => {
      const quantidade = produto.quantidade || 0;
      const cor = produto.cor || "Padrão";
      const tamanho = produto.tamanho || "Tamanho não selecionado";
      const valorProduto = produto.price * quantidade;

      total += valorProduto;

      mensagem += `${produto.nome}\nQuantidade: ${quantidade}\n`;
      mensagem += `Cor: ${cor}\n`;
      mensagem += `Tamanho: ${tamanho}\n`;
      mensagem += `Preço unitário: R$ ${produto.price?.toFixed(2) || "0.00"}\n`;
      mensagem += `Subtotal: R$ ${valorProduto.toFixed(2)}\n\n`;
    });

    mensagem += `Valor total: R$ ${total.toFixed(2)}`;
    return mensagem;
  };

  return (
    <section className="flex flex-col items-center gap-10 py-10">
      <div className="w-full flex flex-col gap-5 px-5">
        {carrinho.length > 0 ? (
          carrinho.map((produto) => {
            return (
              <ProdutoCarrinho
                key={produto.id}
                produto={produto}
                quantidade={produto.quantidade}
                id={produto.id}
                cor={produto.cor}
                tamanho={produto.tamanho}
              />
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
