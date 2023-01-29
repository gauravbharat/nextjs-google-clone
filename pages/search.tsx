import SearchHeader from "@/components/SearchHeader";
import SearchResults from "@/components/SearchResults";
import dummyResponse from "@/dummy-response";
import Head from "next/head";
import { useRouter } from "next/router";

const SearchPage = (props: any) => {
  const router = useRouter();
  const { term } = router.query;

  const { results } = props;

  console.log("SearchPage", { props });

  return (
    <div>
      <Head>
        <title>{term} - Search page</title>
      </Head>

      {/* Search Header */}
      <SearchHeader />

      {/* Search Results */}
      <SearchResults results={results} />
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

  // const response =
  //   await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.GOOGLE_API_CONTEXT_KEY}&q=${q}
  // `);

  const results = dummyResponse; //await response.json();

  // console.log("SearchPage : getServerSideProps", { q, results });

  return {
    props: { results },
  };
};

export default SearchPage;
