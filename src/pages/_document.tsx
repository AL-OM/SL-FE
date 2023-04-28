/* eslint-disable @next/next/no-title-in-document-head */
import Spinner from "@/components/spinner/spinner";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
