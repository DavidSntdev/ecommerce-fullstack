-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Produto" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "descricao" TEXT,
    "img" TEXT NOT NULL,
    "link" TEXT NOT NULL
);
INSERT INTO "new_Produto" ("descricao", "id", "img", "link", "nome", "price") SELECT "descricao", "id", "img", "link", "nome", "price" FROM "Produto";
DROP TABLE "Produto";
ALTER TABLE "new_Produto" RENAME TO "Produto";
CREATE UNIQUE INDEX "Produto_id_key" ON "Produto"("id");
CREATE UNIQUE INDEX "Produto_link_key" ON "Produto"("link");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
