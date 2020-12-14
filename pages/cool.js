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

export default function Cool(props) {
  console.log(props);
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Coooool" />
        <p className="description">Things that came from SSR:</p>

        <ul>
          {props.theData.cards.map((card) => (
            <li>{card.name}</li>
          ))}
        </ul>

        <Link href="/">Back Home</Link>
      </main>

      <Footer />
    </div>
  );
}
