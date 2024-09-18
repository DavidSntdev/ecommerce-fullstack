/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Produto" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "estoque" BOOLEAN NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Produto_id_key" ON "Produto"("id");
