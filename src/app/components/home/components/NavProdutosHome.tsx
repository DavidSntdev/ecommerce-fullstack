import InputPesquisa from "./InputPesquisa";
import { BotoesNavProps } from "@/core/model/interfaces/Props";
import NavDesktop from "./NavDesktop";

interface NavProdutosHomeProps extends BotoesNavProps {
  searchText: string;
  setSearchText: (value: string) => void;
}

export default function NavProdutosHome(props: NavProdutosHomeProps) {
  return (
    <div className="flex flex-col sm:flex-row px-16 justify-between gap-3 w-full sm:px-10 md:px-3">
      <InputPesquisa
        textInput="Pesquise o nome do produto..."
        searchText={props.searchText}
        setSearchText={props.setSearchText}
      />
      <NavDesktop setPagina={props.setPagina} totalPag={props.totalPag} />
    </div>
  );
}
