import { kGoogleLogoSrc } from "@/helpers/constants";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import ClearIcon from "./ui/ClearIcon";
import MicrophoneIcon from "./ui/MicrophoneIcon";
import SearchIcon from "./ui/SearchIcon";
import User from "./User";

const SearchHeader = () => {
  const router = useRouter();

  const { term } = router.query;

  const [searchText, setSearchText] = useState(term as string);

  const searchHandler = (e: any) => {
    e.preventDefault();
    const term = (searchText ?? "").trim();
    if (term === "") return;

    router.push(`/search?term=${term}`);
  };

  // console.log("SearchHeader", { term, searchText });
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Link href="/">
          <Image
            className=""
            src={kGoogleLogoSrc}
            alt="Google logo"
            width={120}
            height={60}
          />
        </Link>

        <form
          onSubmit={searchHandler}
          className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center"
        >
          <input
            type="text"
            value={searchText}
            onChange={(e: any) => setSearchText(e.target.value)}
            className="w-full focus:outline-none "
          />
          {searchText !== "" && (
            <button type="button" onClick={() => setSearchText("")}>
              <ClearIcon customClass="h-7 text-gray-500 cursor-pointer sm:mr-3" />
            </button>
          )}

          <MicrophoneIcon customClass="h-6 hidden sm:inline-flex text-blue-500 pl-4 border-l-2 border-gray-300 mr-3" />

          <button type="button" onClick={searchHandler}>
            <SearchIcon customClass="h-6 hidden sm:inline-flex text-blue-500" />
          </button>
        </form>
        <User customClass="ml-auto" />
      </div>
    </header>
  );
};

export default SearchHeader;
