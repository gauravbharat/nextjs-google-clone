import PaginationButtons from "./PaginationButtons";

const ImageResults = ({ results }: any) => {
  return (
    <div className="mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
        {results?.items?.map((result: any) => (
          <div key={result.link} className="mb-8">
            <div className="group">
              <a href={result.image.contextLink}>
                <img
                  className="transition ease-in-out delay-250 group-hover:shadow-xl group-hover:rounded w-full h-60 object-contain"
                  src={result.link}
                  alt={result.title}
                  width={100}
                  height={50}
                />
              </a>
              <a
                className="group-hover:underline"
                href={result.image.contextLink}
              >
                <h2 className="truncate text-lg">{result.title}</h2>
              </a>
              <a
                className="group-hover:underline"
                href={result.image.contextLink}
              >
                <p className="text-gray-600">{result.displayLink}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="ml-16">
        <PaginationButtons
          formattedTotalResults={
            results.searchInformation.formattedTotalResults
          }
        />
      </div>
    </div>
  );
};

export default ImageResults;
