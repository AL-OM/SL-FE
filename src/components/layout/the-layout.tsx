import React, { useEffect, useMemo, useState } from "react";
import TheHeader from "./the-header";
import TheSidebar from "./the-sidebar";
import TheFooter from "./the-footer";
import { AppState } from "@/core/store";
import { useSelector } from "react-redux";
import AuthenticationWrapper from "../wrapper/authendication";
import { useRouter } from "next/router";
import { routePaths } from "@/core/navigation/route-paths";

const TheLayout = ({ children }: any) => {
  const [isOpenSideBar, setIsOpenSideBar] = useState<boolean>(true);
  const { loggedIn } = useSelector((state: AppState) => state.session);
  const router = useRouter();

  useEffect(() => {
    if (!loggedIn) {
      router.push(routePaths.SignIn);
    }
  }, [loggedIn, router]);

  const getSideBarClass = useMemo(() => {
    if (isOpenSideBar) {
      return "w-64 -translate-x-full";
    }
    if (!isOpenSideBar) {
      return "sm:w-0 xl:w-16";
    }
  }, [isOpenSideBar]);

  const onToggleClick = () => {
    setIsOpenSideBar((prev) => !prev);
  };

  if (!loggedIn) {
    return null;
  }

  return (
    <>
      <TheHeader onToggleClick={onToggleClick} />
      <aside
        className={`fixed top-0 left-0 z-40 h-screen pt-20 bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700 ${getSideBarClass} h-screen overflow-x-hidden transition-all duration-300 ease-in-out transform`}
        aria-label={"Sidebar"}
        onClick={() => {
          if (!isOpenSideBar) {
            onToggleClick();
          }
        }}
      >
        <TheSidebar />
      </aside>
      <section
        className={`p-4 ${
          isOpenSideBar ? "sm:ml-64" : "sm:ml-0 xl:ml-16"
        } overflow-x-hidden transition-all duration-300 ease-in-out transform flex flex-col min-h-screen`}
      >
        <div className="mt-14 flex-1 ">{children}</div>
        <TheFooter />
      </section>
    </>
  );
};

export default AuthenticationWrapper(TheLayout);
