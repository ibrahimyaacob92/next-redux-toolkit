import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useSelector } from "react-redux";
import Gamble from "../components/Gamble";

const Gambling: NextPage = () => {
  const { error, value, randomValue } = useSelector(
    (state: any) => state.counter
  );

  return (
    <>
      <Head>
        <title>Gambling huh</title>
      </Head>
      <div>
        {!error && (
          <>
            <p>The random value is {randomValue}</p>
            <p>Current amount is {value}</p>
          </>
        )}
        <Gamble />
        <Link href="/">Go back to Home</Link>
      </div>
    </>
  );
};

export default Gambling;
