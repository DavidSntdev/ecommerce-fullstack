import { PrismaClient, Produto } from "@prisma/client";

export default class RepositorioProduto {
  private static db: PrismaClient = new PrismaClient();

  static async obterTodos(): Promise<Produto[]> {
    return await this.db.produto.findMany();
  }
  static async salvar(produto: Produto): Promise<Produto> {
    return await this.db.produto.upsert({
      where: { id: produto.id },
      update: produto,
      create: produto,
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
