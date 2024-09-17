-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "estoque" BOOLEAN NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");
