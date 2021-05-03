import Head from "next/head";
import Image from "next/image";
import Header from "../component/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </div>
  );
}
