import Head from "next/head";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import { generateNonce } from "@/utils/nonce";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home({ nonce } : { nonce: string}) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style nonce={nonce}>{`
          h1 {
            color: blue;
            font-size: 2rem;
          }
          .container {
            background-color: #f5f5f5;
            padding: 20px;
            border-radius: 8px;
          }
        `}</style>
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <div className="container">
          <h1>Welcome to Next.js with CSP and Nonce for Inline Styling</h1>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const nonce = generateNonce();
  return {
    props: { nonce },
  };
}
