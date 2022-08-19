import { Flowbite, Spinner } from "flowbite-react";
import { Suspense } from "react";
import "../styles/globals.css";
import { flowbiteTheme as theme } from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center">
          <Spinner size="lg" /> Loading..
        </div>
      }
    >
      <Flowbite theme={{ theme }}>
        <Component {...pageProps} />
      </Flowbite>
    </Suspense>
  );
}

export default MyApp;
