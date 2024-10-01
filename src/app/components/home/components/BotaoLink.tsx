import { Button } from "@nextui-org/button";

interface BotaoLinkProps {
  url: string;
}
export default function BotaoLink(props: BotaoLinkProps) {
  return (
    <div className="hidden sm:flex self-end sm:px-10 md:px-3">
      <Button
        as="a"
        color="primary"
        className="font-bold text-default-50"
        href={props.url}
      >
        Ver Todos os Produtos
      </Button>
    </div>
  );
}
