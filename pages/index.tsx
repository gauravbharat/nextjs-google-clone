import Body from "@/components/Body";
import Header from "@/components/Header";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nextjs - Google Clone</title>
        <meta
          name="description"
          content="Google clone built in Nextjs for educational purposes"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Body */}
      <Body />

      {/* Footer */}
    </>
  );
}
