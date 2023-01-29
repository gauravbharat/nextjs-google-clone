import SearchHeader from "@/components/SearchHeader";
import SearchResults from "@/components/SearchResults";
import Head from "next/head";
import { useRouter } from "next/router";

const SearchPage = () => {
  const router = useRouter();

  const { term } = router.query;

  // console.log("SearchPage", { router });

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

export default SearchPage;
