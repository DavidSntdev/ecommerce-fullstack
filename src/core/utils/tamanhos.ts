export function separarTamanhos(tamanhosString: string): string[] {
  return tamanhosString.split(",").map((tamanho) => tamanho.trim());
}
