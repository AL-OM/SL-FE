import Link from "next/link";
import React from "react";

interface ComponentProps {
  title: string;
  path: string;
  icon?: any;
  isGroup?: boolean;
  onButtonClick?: () => void;
}

type Props = ComponentProps;

const SidebarItem: React.FunctionComponent<Props> = (props) => {
  const arrowIcon = (
    <svg
      sidebar-toggle-item
      className={"w-6 h-6"}
      fill={"currentColor"}
      viewBox={"0 0 20 20"}
      xmlns={"http://www.w3.org/2000/svg"}
    >
      <path
        fill-rule={"evenodd"}
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clip-rule={"evenodd"}
      ></path>
    </svg>
  );

  return (
    <li>
      {props.isGroup ? (
        <button
          type={"button"}
          className={
            "flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          }
          onClick={() => {
            if (props.onButtonClick) {
              props.onButtonClick();
            }
          }}
        >
          {props.icon && props.icon}
          <span
            className={"flex-1 ml-5 text-left whitespace-nowrap"}
            sidebar-toggle-item
          >
            {props.title}
          </span>
          {arrowIcon}
        </button>
      ) : (
        <Link
          className={`p-2 ${
            !props.icon && "pl-8"
          } flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700`}
          href={props.path}
        >
          {props.icon && props.icon}
          <span className={"flex-1 ml-5"}>{props.title}</span>
        </Link>
      )}
    </li>
  );
};

export default SidebarItem;
