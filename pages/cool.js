import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export async function getServerSideProps() {
  return { props: { foo: "bar" } };
}

export default function Cool() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Coooool" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  );
}
