import Head from "next/head";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title> Hulu 2.0 </title>
      </Head>
      <Header />
    </div>
  );
}
