import { ConteudoCompraProps } from "@/core/model/interfaces/PropsProdutos";
import { separarTamanhos } from "@/core/utils/tamanhos";
import { useEffect, useState } from "react";

interface TamanhoCompraProps extends ConteudoCompraProps {
  setTamanho: (value: string) => void;
}

export default function TamanhoProduto(props: TamanhoCompraProps) {
  const { produto, setTamanho } = props;
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState<number | null>(
    null
  );
  const [tamanhosInfo, setTamanhosInfo] = useState<string[]>([]);

  useEffect(() => {
    const novosTamanhos = separarTamanhos(produto.tamanhos || "");
    setTamanhosInfo(novosTamanhos);

    if (novosTamanhos.length > 0) {
      setTamanhoSelecionado(0);
      if (setTamanho) setTamanho(novosTamanhos[0]);
    }
  }, [produto, setTamanho]);

  const selecionarTamanho = (index: number) => {
    setTamanhoSelecionado(index);
    if (setTamanho) setTamanho(tamanhosInfo[index]);
  };

  return (
    <div className="flex flex-col mt-3">
      {tamanhoSelecionado !== null && (
        <div className="mb-2 text-xl">
          <span className="font-bold text-rosa05 flex gap-2">
            Tamanho:
            <span className="text-rosa04">
              {tamanhosInfo[tamanhoSelecionado]}
            </span>
          </span>
        </div>
      )}

      <div className="flex gap-2 flex-wrap">
        {tamanhosInfo.map((tamanho, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => selecionarTamanho(index)}
          >
            <span
              className={`px-3 py-2 rounded-xl text-default-50 border-none hover:bg-rosa04/80 bg-rosa04 ${
                tamanhoSelecionado === index && "ring-2 ring-rosa05"
              }`}
            >
              {tamanho}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
