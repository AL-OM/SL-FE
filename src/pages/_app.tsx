import type { AppProps } from "next/app";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "@/core/store";
import "reflect-metadata";
import "@/styles/globals.css";
import "@/styles/spinner.css";
import Spinner from "@/components/spinner/spinner";
import { useRouter } from "next/router";
import routes from "@/core/navigation/routes";
import { LayoutTypeEnum } from "@/core/lib/constants";
import { TheLayout } from "@/components/layout";
import { RouteVM } from "@/core/view-models/session/session-vm";
import Head from "next/head";
import AuthenticationWrapper from "@/components/wrapper/authendication";

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { pathname } = router;

  const renderLayout = (pageInfo: RouteVM) => {
    if (pageInfo) {
      switch (pageInfo.layout) {
        case LayoutTypeEnum.MainLayout:
          return (
            <TheLayout>
              <Component {...pageProps} />
            </TheLayout>
          );

        case LayoutTypeEnum.None:
          return <Component {...pageProps} />;
      }
    }
  };

  const getLayout = () => {
    const pageInfo = routes.find((item) => {
      return item.path === pathname;
    });

    if (pageInfo) {
      return (
        <>
          {pageInfo?.name && (
            <Head>
              <title>{pageInfo.name}</title>
            </Head>
          )}

          {renderLayout(pageInfo)}
        </>
      );
    }

    return <Component {...pageProps} />;
  };

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<Spinner show />}>
        {getLayout()}
        <Spinner />
      </PersistGate>
    </Provider>
  );
}
export default App;
