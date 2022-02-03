import "../styles/globals.css";
import type { AppProps, AppContext } from "next/app";
import { wrapper } from "../store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
