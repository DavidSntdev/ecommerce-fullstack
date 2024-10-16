import { ConteudoCompraProps } from "@/core/model/interfaces/PropsProdutos";
import { handleCor } from "@/core/utils/color";
import { useEffect, useState } from "react";

interface CoresCompraProps extends ConteudoCompraProps {
  setCor: (value: string) => void;
}
export default function CoresProduto(props: CoresCompraProps) {
  const { produto, setCor } = props;
  const [corSelecionada, setCorSelecionada] = useState<number | null>(null);
  const [coresInfo, setCoresInfo] = useState<
    { nome: string; codigo: string }[]
  >([]);

  useEffect(() => {
    const novasCores = handleCor(produto);
    setCoresInfo(novasCores);

    if (novasCores.length > 0) {
      setCorSelecionada(0);
      if (setCor) setCor(novasCores[0].nome);
    }
  }, [produto, setCor]);

  const selecionarCor = (index: number) => {
    setCorSelecionada(index);
    if (setCor) setCor(coresInfo[index].nome);
  };

  return (
    <div className="flex flex-col gap-2">
      {corSelecionada !== null && (
        <div className="text-xl text-rosa05 font-bold flex gap-2">
          Cor:
          <span className="text-rosa04">{coresInfo[corSelecionada].nome}</span>
        </div>
      )}

      <div className="flex gap-2">
        {coresInfo
          .filter((cor) => cor.codigo)
          .map((cor, index) => (
            <div
              key={index}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => selecionarCor(index)}
            >
              <span
                style={{ backgroundColor: cor.codigo }}
                className={`p-5 rounded-xl text-rosa01 border-none ${
                  corSelecionada === index && "ring-2 ring-rosa05"
                }`}
              ></span>
            </div>
          ))}
      </div>
    </div>
  );
}
