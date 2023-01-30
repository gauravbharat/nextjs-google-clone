import Header from "@/components/Header";
import { kGoogleLogoSrc } from "@/helpers/constants";
import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";

const SignInPage = ({ providers }: any) => {
  const handleSignIn = (provider: any) => {
    try {
      signIn(provider.id, { callbackUrl: "/" });
    } catch (error) {
      console.log("SignInPage : handleSignIn", { error });
    }
  };

  return (
    <>
      <Header />

      <div className="mt-40">
        {Object.values(providers).map((provider: any) => (
          <div className="flex flex-col items-center" key={provider.id}>
            <Image
              className="w-52 object-cover"
              src={kGoogleLogoSrc}
              alt="Google logo"
              width={300}
              height={150}
            />
            <p className="text-sm italic my-10 text-center">
              This website is created solely for learning purposes and uses
              Google&apos;s OAuth 2.0.
            </p>
            <button
              className="transition ease-in-out delay-150 bg-red-400 rounded-lg text-white p-3 hover:bg-red-500"
              onClick={() => handleSignIn(provider)}
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const providers = await getProviders();

  console.log("SignInPage : getServerSideProps", { providers });

  return {
    props: { providers },
  };
};

export default SignInPage;
