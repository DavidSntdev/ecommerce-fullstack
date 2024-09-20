import ImagemInicial from "@/app/components/home/ImagemInicial";
import ProdutosHome from "@/app/components/home/ProdutosHome";

export default function Conteudo() {
  return (
    <section className="flex flex-col items-center justify-center gap-20 py-0">
      <ImagemInicial
        url="/produtos"
        fundoDesktop="/assets/images/fundo.jpg"
        fundoMobile="/assets/images/fundoMobile.jpg"
        textButton="Ver Produtos"
      />
      <ProdutosHome titulo="Lingeries" />
    </section>
  );
}
