import { BotoesNavProps } from "@/core/model/interfaces/Props";
import { Button } from "@nextui-org/button";

export default function BotoesNav(props: BotoesNavProps) {
  return (
    <>
      <Button
        color="secondary"
        variant="light"
        onClick={() => {
          props.setPagina((prev) => (prev > 1 ? prev - 1 : prev));
        }}
      >
        Anterior
      </Button>
      <Button
        color="primary"
        variant="light"
        onClick={() => {
          props.setPagina((prev) => (prev < props.totalPag ? prev + 1 : prev));
        }}
      >
        Próximo
      </Button>
    </>
  );
}
