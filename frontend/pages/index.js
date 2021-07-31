import Head from "next/head";
import styles from "../styles/Home.module.css";
import WelcomePage from "../components/WelcomePage";
import OlympicsDetails from "../components/OlympicsDetails";

export default function Home() {
  return (
    <div>
      <Head>
        <title> Create Next App </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* welcome screen by jeethendra */}
        <div style={{ height: "100vh" }}>
          <WelcomePage />
        </div>

        {/* olympics details code by monika */}
        <OlympicsDetails />
        
      </main>
    </div>
  );
}
