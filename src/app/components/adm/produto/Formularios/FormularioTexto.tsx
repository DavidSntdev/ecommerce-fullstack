import { FormulariosProps } from "@/core/model/interfaces/PropsProdutos";
import Inputs from "./Inputs/InputsFormularios";
import React from "react";

export default function FormularioTexto(props: FormulariosProps) {
  return (
    <>
      <Inputs
        type="text"
        label="Link do Produto ( tem que ser unico )"
        placeholder="calca-legging"
        field="link"
        onChange={props.onChange}
        produto={props.produto}
        value={props.produto.link}
      />
      <Inputs
        type="text"
        label="Nome do Produto"
        placeholder="Calca Legging"
        field="nome"
        value={props.produto.nome}
        onChange={props.onChange}
        produto={props.produto}
      />
    </>
  );
}
