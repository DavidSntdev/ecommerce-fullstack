import { PrismaClient, Produto } from "@prisma/client";

export default class RepositorioProduto {
  private static db: PrismaClient = new PrismaClient();

  static async obterTodos(): Promise<Produto[]> {
    return await this.db.produto.findMany();
  }
  static async salvar(produto: Produto): Promise<Produto> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { link, id, ...produtoData } = produto;

    if (!link) {
      throw new Error("O campo 'link' é obrigatório.");
    }

    return await this.db.produto.upsert({
      where: { link },
      update: {
        ...produtoData,
      },
      create: {
        ...produtoData,
        link,
      },
    });
  }

  static async obterPorId(id: string): Promise<Produto | null> {
    return await this.db.produto.findUnique({ where: { id } });
  }

  static async excluir(id: string): Promise<void> {
    await this.db.produto.delete({
      where: { id },
    });
  }
}
