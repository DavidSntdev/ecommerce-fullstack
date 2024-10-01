import FormularioProduto from "@/app/components/adm/produto/FormularioProduto";
import ListaProduto from "@/app/components/adm/produto/ListaProduto";
import UseProdutos from "@/hooks/useProdutos";
import HeaderAdm from "@/app/components/adm/HeaderAdm";

export default function AdmContent() {
  const { produto, produtos, excluir, salvar, alterarProduto, cancelar } =
    UseProdutos();
  return (
    <div className="flex flex-col gap-5 p-5 text-default-50">
      <HeaderAdm
        novoProduto={() => alterarProduto({})}
        produto={produto}
        cancelar={cancelar}
      />
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
