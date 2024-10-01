import Produto from "../model/interfaces/Produto";

export function handleCor(produto: Partial<Produto>) {
  const fields = ["cor1", "cor2", "cor3", "cor4", "cor5"];

  return fields
    .map((field) => {
      const cor = produto[field as keyof Produto];

      if (typeof cor === "string" && cor.trim() !== "") {
        const [nome, codigo] = cor.split(", ");
        if (nome && codigo) {
          return { nome, codigo };
        }
      }

      return null;
    })
    .filter((cor) => cor !== null) as { nome: string; codigo: string }[];
}
