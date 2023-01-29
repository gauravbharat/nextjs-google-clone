import SearchHeader from "@/components/SearchHeader";
import SearchResults from "@/components/SearchResults";
import dummyResponse from "@/dummy-response";
import Head from "next/head";
import { useRouter } from "next/router";

const SearchPage = (props: any) => {
  const router = useRouter();

  const { term } = router.query;

  console.log("SearchPage", { props });

  return (
    <div>
      <Head>
        <title>Search Page</title>
      </Head>

      {/* Search Header */}
      <SearchHeader />

      {/* Search Results */}
      <SearchResults />
    </div>
  );
};

export const getServerSideProps = async (context: any) => {
  const { term, searchType } = context.query;

  const q = `${term}${!!searchType ? "&searchType=" + searchType : ""}`;

  console.log("SearchPage : getServerSideProps", { term, searchType });

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
