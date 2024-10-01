import { Input } from "@nextui-org/input";
import { SearchIcon } from "../../icons/icons";

interface InputPesquisaProps {
  textInput: string;
  searchText: string;
  setSearchText: (value: string) => void;
}

export default function InputPesquisa(props: InputPesquisaProps) {
  return (
    <Input
      classNames={{
        base: "max-w-full sm:max-w-[16rem] h-10",
        mainWrapper: "h-full",
        input: "text-small font-bold",
        inputWrapper:
          "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
      }}
      placeholder={props.textInput}
      size="sm"
      startContent={<SearchIcon size={18} />}
      type="search"
      value={props.searchText}
      onChange={(e) => props.setSearchText(e.target.value)}
    />
  );
}
