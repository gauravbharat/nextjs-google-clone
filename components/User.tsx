import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

const User = ({ customClass }: any) => {
  const { data: session } = useSession();

  console.log({ session });

  if (!!session) {
    return (
      <>
        {!!session.user?.image && (
          <Image
            className={`h-10 w-10 rounded-full hover:bg-gray-200 cursor-pointer p-1 ${customClass}`}
            src={session.user?.image}
            alt={session.user.name ?? ""}
            width={50}
            height={50}
            priority
            onClick={() => signOut()}
          />
        )}
      </>
    );
  }

  return (
    <button
      className={`transition ease-in-out delay-250 bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md whitespace-nowrap ${customClass}`}
      onClick={() => signIn()}
    >
      Sign in
    </button>
  );
};

export default User;
