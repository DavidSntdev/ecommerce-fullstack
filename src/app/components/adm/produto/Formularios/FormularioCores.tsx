import { Button } from "@nextui-org/button";
import { useState, useEffect, useMemo } from "react";
import Produto from "@/core/model/interfaces/Produto";
import Inputs from "./Inputs/InputsFormularios";
import { FormulariosProps } from "@/core/model/interfaces/PropsProdutos";
import { handleCor } from "@/core/utils/color";

export default function FormularioCores(props: FormulariosProps) {
  const maxCor = 5;
  const minCor = 1;

  const [mostrarInputs, setMostrarInputs] = useState<number>(1);
  const [coresInfo, setCoresInfo] = useState<
    { nome: string; codigo: string }[]
  >([]);

  const coresFields = useMemo(
    () => [
      {
        field: "cor1",
        label: "Cor 01 ( Separe com virgulas o nome da cor )",
        value: props.produto.cor1,
      },
      {
        field: "cor2",
        label: "Cor 02 ( Separe com virgulas o nome da cor )",
        value: props.produto.cor2,
      },
      {
        field: "cor3",
        label: "Cor 03 ( Separe com virgulas o nome da cor )",
        value: props.produto.cor3,
      },
      {
        field: "cor4",
        label: "Cor 04 ( Separe com virgulas o nome da cor )",
        value: props.produto.cor4,
      },
      {
        field: "cor5",
        label: "Cor 05 ( Separe com virgulas o nome da cor )",
        value: props.produto.cor5,
      },
    ],
    [props.produto]
  );

  useEffect(() => {
    const contarImagensPreenchidas = () => {
      return coresFields.reduce(
        (count, { field }) =>
          props.produto[field as keyof Produto] ? count + 1 : count,
        0
      );
    };

    setMostrarInputs(contarImagensPreenchidas() || 1);
  }, [coresFields, props.produto]);

  useEffect(() => {
    const novasCores = handleCor(props.produto);
    setCoresInfo(novasCores);
  }, [props.produto]);

  const handleRemoverCor = () => {
    if (mostrarInputs > minCor) {
      const fieldToRemove = coresFields[mostrarInputs - 1].field;
      props.onChange({
        ...props.produto,
        [fieldToRemove]: null,
      });
      setMostrarInputs(mostrarInputs - 1);
    }
  };

  return (
    <div className="flex flex-col gap-5">
      {coresFields.slice(0, mostrarInputs).map((cor, index) => (
        <div key={index} className="flex gap-5 items-end">
          <Inputs
            type="text"
            placeholder="nomecor code/cor"
            onChange={props.onChange}
            produto={props.produto}
            value={cor.value ?? ""}
            field={cor.field as keyof Produto}
            label={cor.label}
          />
          {coresInfo[index]?.nome && coresInfo[index]?.codigo && (
            <div className="flex flex-col items-center">
              <span style={{ color: coresInfo[index].codigo }}>
                {coresInfo[index].nome}
              </span>
              <span
                style={{ backgroundColor: coresInfo[index].codigo }}
                className="p-5 rounded-xl text-white"
              ></span>
            </div>
          )}
        </div>
      ))}

      <div className="flex w-full items-center justify-center gap-3">
        {mostrarInputs < maxCor && (
          <Button
            className={`w-[250px] bg-red-500 text-default-50 ${
              mostrarInputs < maxCor && "w-[200px] bg-green-700"
            } px-5`}
            onClick={() => {
              if (mostrarInputs < maxCor) setMostrarInputs(mostrarInputs + 1);
            }}
          >
            Adicionar + 1 cor
          </Button>
        )}
        {mostrarInputs > minCor && (
          <Button
            className="bg-red-500 w-[200px] text-default-50"
            onClick={handleRemoverCor}
          >
            Remover a Cor
          </Button>
        )}
      </div>
    </div>
  );
}
