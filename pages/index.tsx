import Head from "next/head";
import Canvas from "../components/Canvas/Canvas";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        style={{
          width: "100vw",
          height: "100vh",
          padding: "2em",
        }}
      >
        <Canvas />
      </main>
    </>
  );
}
