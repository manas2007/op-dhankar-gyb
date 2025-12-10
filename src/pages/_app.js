import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return <div>
    <Head>
       <title>Give Your Best | Om Prakash Dhankar</title>
        <link rel="icon" href="/assets/images/logo.png" />
    </Head>
    <Component {...pageProps} />
    </div>
}
