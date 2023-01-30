import ImageResults from "@/components/ImageResults";

import SearchHeader from "@/components/SearchHeader";
import SearchResults from "@/components/SearchResults";
import Head from "next/head";
import { useRouter } from "next/router";

const SearchPage = (props: any) => {
  const router = useRouter();
  const { term, searchType } = router.query;

  const { results } = props;

  console.log("SearchPage", { props });

  return (
    <div>
      <Head>
        <title>{term} - Search page</title>
      </Head>

      {/* Search Header */}
      <SearchHeader />

      {/* Search web and images results */}
      {!!results?.error ? (
        <div className="pl-16 mt-10 text-red-700 text-xl">
          <p>{results.error.status}</p>
          <p>{results.error.message}</p>
        </div>
      ) : (
        <>
          {searchType === "image" ? (
            <ImageResults results={results} />
          ) : (
            <SearchResults results={results} />
          )}
        </>
      )}
    </div>
  );
};

export const getServerSideProps = async (context: any) => {
  const { term, searchType, start = 1 } = context.query;

  const q = `${term}${
    !!searchType ? "&searchType=" + searchType : ""
  }&start=${start}`;

  console.log("SearchPage : getServerSideProps", {
    term,
    searchType,
    start,
  });

  const response =
    await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.GOOGLE_API_CONTEXT_KEY}&q=${q}
  `);

  const results = await response.json(); // dummyResponse(searchType === "image");

  if (!results) {
    return {
      props: {},
    };
  }

  console.log("SearchPage : getServerSideProps", { q, results });

  return {
    props: { results },
  };
};

export default SearchPage;
