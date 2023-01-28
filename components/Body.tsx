import { kGoogleLogoSrc } from "@/helpers/constants";
import Image from "next/image";

const Body = () => {
  const btnClass =
    "transition ease-in-out delay-250 p-3 rounded-md text-sm bg-[#f8f9fa] text-gray-800 hover:ring-1 hover:ring-gray-200 focus-outline-none active:ring-gray-300 hover:shadow-md";

  return (
    <form className="flex flex-col items-center mt-40">
      <Image
        className="w-52 object-cover"
        src={kGoogleLogoSrc}
        alt="Google logo"
        width={300}
        height={150}
      />
      <div className="transition ease-in-out delay-250 flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 hover:shadow-lg focus-within:shadow-lg px-5 py-3 rounded-full items-center sm:max-w-xl lg:max-w-2xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 text-gray-500 mr-3"
        >
          <path
            fillRule="evenodd"
            d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
            clipRule="evenodd"
          />
        </svg>
        <input
          type="text"
          name=""
          id=""
          className="flex-grow focus:outline-none"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 ml-2"
        >
          <path d="M8.25 4.5a3.75 3.75 0 117.5 0v8.25a3.75 3.75 0 11-7.5 0V4.5z" />
          <path d="M6 10.5a.75.75 0 01.75.75v1.5a5.25 5.25 0 1010.5 0v-1.5a.75.75 0 011.5 0v1.5a6.751 6.751 0 01-6 6.709v2.291h3a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5h3v-2.291a6.751 6.751 0 01-6-6.709v-1.5A.75.75 0 016 10.5z" />
        </svg>
      </div>

      <div className="flex flex-col sm:flex-row w-[50%] space-y-2 mt-8 sm:space-y-0 sm:space-x-4 justify-center">
        <button type="button" className={btnClass}>
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
