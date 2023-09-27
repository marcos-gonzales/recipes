import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import "@etchteam/next-pagination/dist/index.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      {/* <Login /> */}
      <Component {...pageProps} />
    </SessionProvider>
  );
}
