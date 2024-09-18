import Produto from "@/core/model/Produto";
import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

export interface FormularioProdutoProps {
  produto: Partial<Produto>;
  onChange: (produto: Partial<Produto>) => void;
  onSave: () => void;
  onCancel: () => void;
  onDelete: () => void;
}

export default function FormularioProduto(props: FormularioProdutoProps) {
  return (
    <div className="flex flex-col gap-5 w-[600px]">
      <Input
        type="text"
        label="Link do Produto ( tem que ser unico )"
        placeholder="calca-legging"
        classNames={{ input: "font-bold" }}
        value={props.produto.link}
        onChange={(e) =>
          props.onChange?.({ ...props.produto, link: e.target.value })
        }
        labelPlacement="outside"
      />

      <Input
        type="text"
        label="Nome do Produto"
        placeholder="Calca Legging"
        value={props.produto.nome}
        classNames={{ input: "font-bold" }}
        onChange={(e) =>
          props.onChange?.({ ...props.produto, nome: e.target.value })
        }
        labelPlacement="outside"
      />
      <Input
        type="number"
        label="Preço"
        labelPlacement="outside"
        value={props.produto.price?.toString()}
        classNames={{ input: "font-bold" }}
        onChange={(e) =>
          props.onChange?.({
            ...props.produto,
            price: parseFloat(e.target.value),
          })
        }
        startContent={
          <div className="pointer-events-none flex items-center">
            <span className="text-default-400 text-small">$</span>
          </div>
        }
      />
      <Input
        type="url"
        label="Imagem"
        placeholder="/assets/images/produtos/{url do produto}"
        labelPlacement="outside"
        classNames={{ input: "font-bold" }}
        value={props.produto.img}
        onChange={(e) =>
          props.onChange?.({ ...props.produto, img: e.target.value })
        }
      />
      <Textarea
        label="Descrição do produto"
        value={props.produto.descricao}
        classNames={{ input: "font-bold" }}
        onChange={(e) =>
          props.onChange?.({ ...props.produto, descricao: e.target.value })
        }
        labelPlacement="outside"
      />

      <div className="flex justify-between">
        <div className="flex gap-3">
          <Button color="primary" onClick={props.onSave}>
            Salvar
          </Button>
          <Button className="bg-zinc-500" onClick={props.onCancel}>
            Cancelar
          </Button>
        </div>
        <Button color="danger" onClick={props.onDelete}>
          Excluir
        </Button>
      </div>
    </div>
  );
}
