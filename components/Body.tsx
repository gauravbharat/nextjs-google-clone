import { kGoogleLogoSrc } from "@/helpers/constants";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import MicrophoneIcon from "./ui/MicrophoneIcon";
import SearchIcon from "./ui/SearchIcon";

const Body = () => {
  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement>(null);

  const searchHandler = (e: any) => {
    e.preventDefault();
    const term = (searchInputRef.current?.value ?? "").trim();
    if (term === "") return;

    router.push(`/search?term=${term}&searchType=`);
  };

  const btnClass =
    "transition ease-in-out delay-250 p-3 rounded-md text-sm bg-[#f8f9fa] text-gray-800 hover:ring-1 hover:ring-gray-200 focus-outline-none active:ring-gray-300 hover:shadow-md";

  return (
    <form className="flex flex-col items-center mt-40" onSubmit={searchHandler}>
      <Image
        className="w-52 object-cover"
        src={kGoogleLogoSrc}
        alt="Google logo"
        width={300}
        height={150}
      />
      <div className="transition ease-in-out delay-250 flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 hover:shadow-lg focus-within:shadow-lg px-5 py-3 rounded-full items-center sm:max-w-xl lg:max-w-2xl">
        <SearchIcon customClass="w-5 h-5 text-gray-500 mr-3" />
        <input
          type="text"
          className="flex-grow focus:outline-none"
          ref={searchInputRef}
        />
        <MicrophoneIcon customClass="w-5 h-5 ml-2" />
      </div>

      <div className="flex flex-col sm:flex-row w-[50%] space-y-2 mt-8 sm:space-y-0 sm:space-x-4 justify-center">
        <button onClick={searchHandler} type="button" className={btnClass}>
          Google Search
        </button>

        <button type="button" className={btnClass}>
          I'm Feeling Lucky
        </button>
      </div>
    </form>
  );
};

export default Body;
