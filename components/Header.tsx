import User from "./User";

const Header = () => {
  const linkClass = "hover:underline cursor-pointer";

  return (
    <header className="flex justify-between p-5 text-sm text-gray-700">
      <div className="flex space-x-4 items-center">
        <p className={linkClass}>About</p>
        <p className={linkClass}>Store</p>
      </div>

      <div className="flex space-x-4 items-center">
        <p className={linkClass}>Gmail</p>
        <p className={linkClass}>Images</p>
        <User />
      </div>
    </header>
  );
};

export default Header;
