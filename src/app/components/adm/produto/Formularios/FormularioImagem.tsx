import { Button } from "@nextui-org/button";
import { useState, useEffect } from "react";
import Produto from "@/core/model/interfaces/Produto";
import Inputs from "./Inputs/InputsFormularios";
import { FormulariosProps } from "@/core/model/interfaces/PropsProdutos";

export default function FormularioImagem(props: FormulariosProps) {
  const maxImagens = 5;
  const minImagens = 1;

  const [mostrarInputs, setMostrarInputs] = useState<number>(1);

  useEffect(() => {
    const contarImagensPreenchidas = () => {
      return ["img", "img2", "img3", "img4", "img5"].reduce((count, field) => {
        return props.produto[field as keyof Produto] ? count + 1 : count;
      }, 0);
    };

    setMostrarInputs(contarImagensPreenchidas() || 1);
  }, [props.produto]);

  const imagensFields = [
    { field: "img", label: "Imagem 01", value: props.produto.img },
    { field: "img2", label: "Imagem 02", value: props.produto.img2 },
    { field: "img3", label: "Imagem 03", value: props.produto.img3 },
    { field: "img4", label: "Imagem 04", value: props.produto.img4 },
    { field: "img5", label: "Imagem 05", value: props.produto.img5 },
  ];

  const handleRemoverImagem = () => {
    if (mostrarInputs > minImagens) {
      const fieldToRemove = imagensFields[mostrarInputs - 1].field;
      props.onChange({
        ...props.produto,
        [fieldToRemove]: null,
      });
      setMostrarInputs(mostrarInputs - 1);
    }
  };

  return (
    <div className="flex flex-col gap-5">
      {imagensFields.slice(0, mostrarInputs).map((imagem, index) => (
        <Inputs
          type="url"
          key={index}
          onChange={props.onChange}
          produto={props.produto}
          value={imagem.value ?? "/assets/images/produtos/"}
          field={imagem.field as keyof Produto}
          label={imagem.label}
        />
      ))}

      <div className="flex w-full items-center justify-center gap-5">
        {mostrarInputs < maxImagens && (
          <Button
            className={`w-[250px] bg-red-500 text-default-50 ${
              mostrarInputs < maxImagens && "w-[200px] bg-green-700"
            } px-5`}
            onClick={() => {
              if (mostrarInputs < maxImagens)
                setMostrarInputs(mostrarInputs + 1);
            }}
          >
            Adicionar + 1 imagem
          </Button>
        )}
        {mostrarInputs > minImagens && (
          <Button
            className="bg-red-500 w-[200px] text-default-50"
            onClick={handleRemoverImagem}
          >
            Remover Imagem
          </Button>
        )}
      </div>
    </div>
  );
}
