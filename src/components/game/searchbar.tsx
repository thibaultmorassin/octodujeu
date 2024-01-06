import usePushSearchParams from "@/hooks/usePushSearchParams";
import { Input } from "../ui/input";
import { useEffect, useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";

export function SearchBar() {
  const { searchParams, pushSearchParams } = usePushSearchParams();

  const [searchValue, setSearchValue] = useState<string>(
    searchParams.get("search") ?? "",
  );
  const debouncedValue = useDebounce<string>(searchValue, 500);

  useEffect(() => {
    pushSearchParams("search", debouncedValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  const handleSearchValue = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setSearchValue(event.target.value);
  };

  return (
    <div>
      <Input
        value={searchValue}
        onChange={handleSearchValue}
        type="search"
        placeholder="Recherche..."
        className="lg:w-[300px]"
      />
    </div>
  );
}
