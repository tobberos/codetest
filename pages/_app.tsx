import type { AppProps } from "next/app";
import "../public/css/carslider.css";
import "../public/css/carcard.css";
import "../public/css/carslidermobile.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
