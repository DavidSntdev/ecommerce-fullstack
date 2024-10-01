import Produto from "@/core/model/interfaces/Produto";
import FormularioImagem from "./Formularios/FormularioImagem";
import FormularioTexto from "./Formularios/FormularioTexto";
import FormularioBotoes from "./Formularios/FormularioBotoes";
import FormularioEstoque from "./Formularios/FormularioEstoque";
import FormularioCores from "./Formularios/FormularioCores";
import FormularioPreco from "./Formularios/FormularioPreco";
import FormularioDescricao from "./Formularios/FormularioDescricao";
import FormularioTamanho from "./Formularios/FormularioTamanho";

export interface FormularioProdutoProps {
  produto: Partial<Produto>;
  onChange: (produto: Partial<Produto>) => void;
  onSave: () => void;
  onCancel: () => void;
  onDelete: () => void;
}

export default function FormularioProduto(props: FormularioProdutoProps) {
  return (
    <div className="flex flex-col gap-5 w-full md:w-[700px] mx-auto">
      <FormularioTexto onChange={props.onChange} produto={props.produto} />
      <FormularioPreco onChange={props.onChange} produto={props.produto} />
      <FormularioImagem onChange={props.onChange} produto={props.produto} />
      <FormularioCores onChange={props.onChange} produto={props.produto} />
      <FormularioTamanho onChange={props.onChange} produto={props.produto} />
      <FormularioDescricao onChange={props.onChange} produto={props.produto} />
      <FormularioEstoque onChange={props.onChange} produto={props.produto} />
      <FormularioBotoes
        onCancel={props.onCancel}
        onDelete={props.onDelete}
        onSave={props.onSave}
      />
    </div>
  );
}
