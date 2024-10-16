import { ConteudoCompraProps } from "@/core/model/interfaces/PropsProdutos";
import { useState } from "react";
import BotaoCompra from "./BotaoCompra";
import QuantidadeCompra from "./QuantidadeCompra";
import Mochila from "../../common/Mochila";
import Coracao from "../../common/Coracao";

export default function CompraFooter(props: ConteudoCompraProps) {
  const [quantidade, setQuantidade] = useState<number>(1);
  const total = (props.produto.price * quantidade).toFixed(2);

  return (
    <div className="flex w-full flex-col mt-10 gap-5">
      <div>
        <p className="text-green-600 dark:text-green-400 font-bold text-2xl">
          R$ {total}
        </p>
      </div>
      <div className="flex justify-between mt-[-15px] lg:max-w-[550px]">
        <QuantidadeCompra
          quantidade={quantidade}
          setQuantidade={setQuantidade}
        />
        <div className="flex gap-5 items-center">
          <Mochila
            produto={props.produto}
            size={35}
            quantidade={quantidade}
            cor={props.cor}
            tamanho={props.tamanho}
          />
          <Coracao produto={props.produto} size={35} className="text-rosa05" />
        </div>
      </div>
      <BotaoCompra
        produto={props.produto}
        quantidade={props.quantidade}
        cor={props.cor}
        tamanho={props.tamanho}
      />
    </div>
  );
}
