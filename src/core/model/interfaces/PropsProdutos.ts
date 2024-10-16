import Produto from "./Produto";

export interface FormulariosProps {
  produto: Partial<Produto>;
  onChange: (produto: Partial<Produto>) => void;
}

export interface ConteudoCompraProps {
  produto: Produto;
  size?: number;
  quantidade?: number;
  cor?: string;
  tamanho?: string;
  className?: string;
}
export interface ProdutoCarrinhoProps {
  produto: Partial<Produto>;
  quantidade?: number;
  id?: string;
  cor?: string;
  tamanho?: string;
}
