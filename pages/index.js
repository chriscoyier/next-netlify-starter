import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Link from "next/link";

export async function getServerSideProps() {
  let theData;
  await fetch("https://assets.codepen.io/3/cards-data.json")
    .then((response) => response.json())
    .then((data) => {
      theData = data;
    });

  return { props: { theData } };
}

export default function Home(props) {
  console.log(props);
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <Link href="/cool">Cool page</Link>
      </main>

      <Footer />
    </div>
  );
}
