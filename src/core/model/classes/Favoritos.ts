import Favorito from "../interfaces/Favorito";
import Produto from "../interfaces/Produto";

class Favoritos implements Favorito {
  favorito: Produto[] = [];

  constructor(produtos?: Produto[]) {
    if (produtos) {
      this.favorito = produtos;
    }
  }

  adicionarProduto(produto: Produto): void {
    if (!this.favorito.some((item) => item.id === produto.id)) {
      this.favorito.push(produto);
    }
  }

  removerProduto(id: string): void {
    this.favorito = this.favorito.filter((produto) => produto.id !== id);
  }

  listarFavoritos(): Produto[] {
    return this.favorito;
  }

  favoritosPorId(id: string): boolean {
    return this.favorito.some((produto) => produto.id === id);
  }
}

export default Favoritos;
