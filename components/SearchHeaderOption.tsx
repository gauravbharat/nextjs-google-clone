import { useRouter } from "next/router";

const SearchHeaderOption = ({ title, Icon, selected }: any) => {
  const router = useRouter();

  const optionSwitchHandler = () => {
    router.push(
      `/search?term=${router.query.term ?? ""}&searchType=${
        title === "Images" ? "image" : ""
      }`
    );
  };

  return (
    <div
      onClick={optionSwitchHandler}
      className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 cursor-pointer hover:border-blue-500 pb-2 ${
        selected && "text-blue-500 border-blue-500"
      }`}
    >
      <Icon />
      <p>{title}</p>
    </div>
  );
};

export default SearchHeaderOption;
