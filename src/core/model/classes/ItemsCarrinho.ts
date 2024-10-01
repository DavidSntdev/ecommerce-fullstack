import Carrinho from "../interfaces/Carrinho";
import Produto from "../interfaces/Produto";

interface ProdutoCarrinho extends Produto {
  quantidade: number;
  cor: string;
  tamanho: string;
}

class ItemsCarrinho implements Carrinho {
  carrinho: ProdutoCarrinho[];

  constructor(carrinho: ProdutoCarrinho[] = []) {
    this.carrinho = carrinho;
  }

  adicionarProduto(
    produto: Produto,
    quantidade: number = 1,
    cor: string = "Padrão",
    tamanho: string = "Sem tamanho"
  ): void {
    const produtoExistente = this.carrinho.find(
      (item) => item.id === produto.id
    );
    if (produtoExistente) {
      produtoExistente.quantidade += quantidade;
    } else {
      this.carrinho.push({ ...produto, quantidade, cor, tamanho });
    }
  }

  removerProduto(id: string): void {
    this.carrinho = this.carrinho.filter((produto) => produto.id !== id);
  }

  atualizarQuantidade(id: string, quantidade: number): void {
    const produto = this.carrinho.find((item) => item.id === id);
    if (produto) {
      produto.quantidade = quantidade;
      if (produto.quantidade <= 0) {
        this.removerProduto(id);
      }
    }
  }

  listarCarrinho(): ProdutoCarrinho[] {
    return this.carrinho;
  }

  quantidadeProduto(id: string): number {
    const produto = this.carrinho.find((item) => item.id === id);
    return produto ? produto.quantidade : 0;
  }
}

export default ItemsCarrinho;
