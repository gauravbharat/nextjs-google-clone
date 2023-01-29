import Link from "next/link";
import { useRouter } from "next/router";
import ChevronLeftIcon from "./ui/ChevronLeftIcon";
import ChevronRightIcon from "./ui/ChevronRightIcon";

const PaginationButtons = (props: any) => {
  const router = useRouter();

  const { term, searchType, start = 1 } = router.query;
  const startIndex = Number(start);

  return (
    <div className="text-blue-700 flex px-9 pb-4 justify-between sm:justify-start sm:space-x-44 sm:px-0">
      {startIndex > 10 && (
        <Link
          href={`/search?term=${term}&searchType=${searchType}&start=${
            startIndex - 10
          }`}
        >
          <div className="flex flex-col items-center hover:underline">
            <ChevronLeftIcon customClass="h-5" />
            <p>Previous</p>
          </div>
        </Link>
      )}
      {(props.formattedTotalResults < 90
        ? startIndex < props.formattedTotalResults
        : startIndex < 90) && (
        <Link
          href={`/search?term=${term}&searchType=${searchType}&start=${
            startIndex + 10
          }`}
        >
          <div className="flex flex-col items-center hover:underline">
            <ChevronRightIcon customClass="h-5" />
            <p>Next</p>
          </div>
        </Link>
      )}
    </div>
  );
};

export default PaginationButtons;
