/* eslint-disable @next/next/no-img-element */
import { routePaths } from "@/core/navigation/route-paths";
import Link from "next/link";
import React from "react";

const TheHeader = ({ onToggleClick }: any) => {
  const renderLeftHeader = (): React.ReactElement => {
    return (
      <div className={"flex items-center justify-start"}>
        <button
          type={"button"}
          onClick={onToggleClick}
          className={
            "inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          }
        >
          <svg
            className={"w-6 h-6"}
            fill={"currentColor"}
            viewBox={"0 0 20 20"}
            xmlns={"http://www.w3.org/2000/svg"}
          >
            <path
              clip-rule={"evenodd"}
              fill-rule={"evenodd"}
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            />
          </svg>
        </button>
        <a href={"#"} className={"flex ml-2 md:mr-24"}>
          <span
            className={
              "self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white"
            }
          >
            {"Resource Monitoring"}
          </span>
        </a>
      </div>
    );
  };

  return (
    <nav
      className={
        "fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700"
      }
    >
      <div className={"px-3 py-3 lg:px-5 lg:pl-3"}>
        <div className={"flex items-center justify-between"}>
          {renderLeftHeader()}
          <div className={"flex items-center"}>
            <Link href={routePaths.SignIn}>{"Log out"}</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TheHeader;
