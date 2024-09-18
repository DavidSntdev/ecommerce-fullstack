import excluirUsuario from "./produto/excluirProduto";
import obterTodos from "./produto/obterTodos";
import salvarProduto from "./produto/salvarProduto";

// Padrão Facade
export default class Backend {
  static readonly produtos = {
    salvar: salvarProduto,
    obter: obterTodos,
    excluir: excluirUsuario,
  };
}
