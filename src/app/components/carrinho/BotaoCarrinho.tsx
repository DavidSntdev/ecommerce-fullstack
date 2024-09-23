import { Button } from "@nextui-org/button";
import { IoLogoWhatsapp } from "react-icons/io";

export interface BotaoCarrinhoProps {
  mensagem: string;
}

export default function BotaoCarrinho({ mensagem }: BotaoCarrinhoProps) {
  const mensagemWhatsApp = encodeURIComponent(mensagem);

  return (
    <Button
      as="a"
      href={`https://api.whatsapp.com/send?phone=5511971647488&text=${mensagemWhatsApp}`}
      target="_blank"
      className="sm:w-[400px] w-full rounded-sm py-6 flex gap-2 bg-green-500 dark:bg-green-700 mx-auto"
    >
      Comprar via whatsapp
      <IoLogoWhatsapp
        className="text-green-700 dark:text-green-400"
        size={20}
      />
    </Button>
  );
}
