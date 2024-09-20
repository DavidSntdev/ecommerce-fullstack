import FormularioProduto from "@/app/components/adm/produto/FormularioProduto";
import ListaProduto from "@/app/components/adm/produto/ListaProduto";
import Titulo from "@/app/components/shared/Titulo";
import UseProdutos from "@/app/data/hooks/useProdutos";
import { FaShoppingBag } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { Button } from "@nextui-org/button";

export default function AdmContent() {
  const { produto, produtos, excluir, salvar, alterarProduto, cancelar } =
    UseProdutos();
  return (
    <div className="flex flex-col gap-5 p-5">
      <div className="flex justify-between items-center">
        <Titulo
          icone={FaShoppingBag}
          principal="Produtos"
          secundario="Estoque"
        />
        {!produto && (
          <div className="flex gap-5 justify-end">
            <Button color="primary" onClick={() => alterarProduto({})}>
              <CiCirclePlus size={50} />
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
    </div>
  );
}
