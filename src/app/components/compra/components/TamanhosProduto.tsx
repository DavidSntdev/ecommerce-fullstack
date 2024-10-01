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
          <span className="font-bold text-default-400 flex gap-2">
            Tamanho:
            <span className="text-default-50">
              {tamanhosInfo[tamanhoSelecionado]}
            </span>
          </span>
        </div>
      )}

      <div className="flex gap-2">
        {tamanhosInfo.map((tamanho, index) => (
          <div
            key={index}
            className="flex flex-col flex-wrap items-center cursor-pointer"
            onClick={() => selecionarTamanho(index)}
          >
            <span
              className={`px-3 py-2 rounded-xl text-default-50 border-1 border-default-50 hover:bg-default-800 bg-default-foreground ${
                tamanhoSelecionado === index ? "ring-2 ring-indigo-500" : ""
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
