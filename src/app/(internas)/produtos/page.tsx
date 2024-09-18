"use client";

import FormularioProduto from "@/app/components/components/produto/FormularioProduto";
import ListaProduto from "@/app/components/components/produto/ListaProduto";
import Pagina from "@/app/components/layouts/Pagina";
import Titulo from "@/app/components/shared/Titulo";
import UseProdutos from "@/app/data/hooks/useProdutos";
import { Button } from "@nextui-org/button";
import { IconPlus, IconShoppingBag } from "@tabler/icons-react";

export default function Page() {
  const { produto, produtos, excluir, salvar, alterarProduto, cancelar } =
    UseProdutos();

  return (
    <Pagina className="flex flex-col gap-10 w-full">
      <div className="flex justify-between items-center">
        <Titulo
          icone={IconShoppingBag}
          principal="Produtos"
          secundario="Estoque"
        />
        {!produto && (
          <div className="flex gap-5 justify-end">
            <Button color="primary" onClick={() => alterarProduto({})}>
              <IconPlus />
              <span>Novo Produto</span>
            </Button>
          </div>
        )}
      </div>
      {produto ? (
        <FormularioProduto
          produto={produto}
          onChange={alterarProduto}
          onSave={salvar}
          onCancel={cancelar}
          onDelete={excluir}
        />
      ) : (
        <ListaProduto produtos={produtos} onClick={alterarProduto} />
      )}
    </Pagina>
  );
}
