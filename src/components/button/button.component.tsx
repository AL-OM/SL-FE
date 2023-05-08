import { useMemo } from "react";
import React from "react";

interface ComponentProps {
  children?: any;
  contentContainerStype?: string;
  buttonType?: ButtonTypeEnum | string;
}

type Props = ComponentProps & ButtonProps;

interface ButtonProps extends React.InputHTMLAttributes<HTMLButtonElement> {}

export enum ButtonTypeEnum {
  Default = "default",
  Alternative = "alternative",
  Dark = "dark",
  Light = "light",
  Green = "green",
  Red = "red",
  Yellow = "yellow",
  Purple = "purple",
}

const Button: React.FunctionComponent<Props> = ({
  children,
  contentContainerStype,
  buttonType,
  type = "button",
  ...restProps
}) => {
  let name = "";

  const getClassName = useMemo(() => {
    switch (buttonType) {
      case ButtonTypeEnum.Default:
        name =
          "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800";
        break;

      case ButtonTypeEnum.Alternative:
        name =
          "py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700";
        break;
      case ButtonTypeEnum.Dark:
        name =
          "text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700";
        break;
      case ButtonTypeEnum.Light:
        name =
          "text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700";
        break;
      case ButtonTypeEnum.Green:
        name =
          "focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800";
        break;
      case ButtonTypeEnum.Red:
        name =
          "focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900";
        break;
      case ButtonTypeEnum.Yellow:
        name =
          "focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900";
        break;
      case ButtonTypeEnum.Purple:
        name =
          "focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900";
        break;
      default:
        break;
    }

    return contentContainerStype ? name + " " + contentContainerStype : name;
  }, [buttonType]);

  return (
    <button className={getClassName} {...restProps}>
      {children}
    </button>
  );
};

export default React.memo(Button);
