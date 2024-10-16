import { Button } from "@nextui-org/button";
import { IoLogoWhatsapp } from "react-icons/io";
import { ConteudoCompraProps } from "@/core/model/interfaces/PropsProdutos";

const NUMERO_ZAP = "5511971647488";

export default function BotaoCompra(props: ConteudoCompraProps) {
  const { nome, price: preco } = props.produto;
  const quantidade = props.quantidade || 1;
  const total = (preco * quantidade).toFixed(2);
  const cor = props.cor || "Padrão";
  const tamanho = props.tamanho || "Tamanho não selecionado";

  const gerarMensagemCompra = () => {
    return encodeURIComponent(
      `Quero comprar o Produto:\n${nome}\nValor: R$ ${total}\nCor: ${cor}\nTamanho: ${tamanho}`
    );
  };

  return (
    <div className="flex w-full lg:max-w-[550px] gap-3 items-center">
      <Button
        as="a"
        className="w-full rounded-sm py-6 flex gap-2 bg-green-500 dark:bg-green-700"
        href={`https://api.whatsapp.com/send?phone=${NUMERO_ZAP}&text=${gerarMensagemCompra()}`}
        target="_blank"
      >
        <span className="font-semibold">Comprar via Whatsapp</span>
        <IoLogoWhatsapp
          className="text-green-700 dark:text-green-400"
          size={20}
        />
      </Button>
    </div>
  );
}
