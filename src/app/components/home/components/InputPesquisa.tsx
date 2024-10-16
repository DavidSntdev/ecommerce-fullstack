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
        base: "max-w-full sm:max-w-[16rem] h-10 text-rosa05 dark:text-rosa",
        mainWrapper: "h-full text-rosa05 dark:text-rosa",
        input: "text-small font-bold text-rosa05 dark:text-rosa",
        inputWrapper:
          "h-full font-normal text-rosa05 bg-rosa01 dark:bg-rosa04 dark:text-rosa",
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
