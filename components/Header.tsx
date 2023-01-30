import Link from "next/link";
import { useRouter } from "next/router";
import User from "./User";

const Header = () => {
  const router = useRouter();
  const { term } = router.query;
  const linkClass = "hover:underline cursor-pointer";

  return (
    <header className="flex justify-between p-5 text-sm text-gray-700">
      <div className="flex space-x-4 items-center">
        <Link href="https://about.google" className={linkClass}>
          About
        </Link>
        <Link href="https://store.google.com" className={linkClass}>
          Store
        </Link>
      </div>

      <div className="flex space-x-4 items-center">
        <Link href="https://mail.google.com" className={linkClass}>
          Gmail
        </Link>

        <a
          className={linkClass}
          href="#"
          onClick={() =>
            router.push(`/search?term=${term ?? "google"}&searchType=image`)
          }
        >
          Images
        </a>

        <User />
      </div>
    </header>
  );
};

export default Header;
