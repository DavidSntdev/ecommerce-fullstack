/*
  Warnings:

  - You are about to drop the column `estoque` on the `Produto` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Produto" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "img" TEXT NOT NULL
);
INSERT INTO "new_Produto" ("descricao", "id", "img", "nome", "price") SELECT "descricao", "id", "img", "nome", "price" FROM "Produto";
DROP TABLE "Produto";
ALTER TABLE "new_Produto" RENAME TO "Produto";
CREATE UNIQUE INDEX "Produto_id_key" ON "Produto"("id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
