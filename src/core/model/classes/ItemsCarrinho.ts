import Carrinho from "../interfaces/Carrinho";
import Produto from "../interfaces/Produto";

class ItemsCarrinho implements Carrinho {
  carrinho: Produto[];

  constructor(carrinho: Produto[] = []) {
    this.carrinho = carrinho;
  }

  adicionarProduto(produto: Produto): void {
    if (!this.carrinho.some((item) => item.id === produto.id)) {
      this.carrinho.push(produto);
    }
  }

  removerProduto(id: string): void {
    this.carrinho = this.carrinho.filter((produto) => produto.id !== id);
  }

  listarCarrinho(): Produto[] {
    return this.carrinho;
  }
}

export default ItemsCarrinho;
