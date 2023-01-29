import { useRouter } from "next/router";
import SearchHeaderOption from "./SearchHeaderOption";
import PhotoIcon from "./ui/PhotoIcon";
import SearchIcon from "./ui/SearchIcon";

const SearchHeaderOptions = () => {
  const router = useRouter();
  const { searchType } = router.query;

  return (
    <div className="flex space-x-8 select-none w-full justify-center text-sm text-gray-700 lg:pl-52 lg:justify-start border-b">
      <SearchHeaderOption
        title="All"
        Icon={SearchIcon}
        selected={searchType !== "image"}
      />
      <SearchHeaderOption
        title="Images"
        Icon={PhotoIcon}
        selected={searchType === "image"}
      />
    </div>
  );
};

export default SearchHeaderOptions;
