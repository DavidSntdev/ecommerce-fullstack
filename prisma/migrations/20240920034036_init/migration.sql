-- CreateTable
CREATE TABLE "Produto" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "descricao" TEXT,
    "img" TEXT NOT NULL,
    "link" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Produto_id_key" ON "Produto"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Produto_link_key" ON "Produto"("link");
