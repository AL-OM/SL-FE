import { ButtonHTMLAttributes, useEffect, useMemo, useState } from "react";
import React from "react";

interface ComponentProps {
  label?: string;
  successMessage?: string;
  errorMessage?: string;
}

type Props = ComponentProps & InputProps;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const TextField: React.FunctionComponent<Props> = ({
  label,
  successMessage,
  errorMessage,
  ...restProps
}) => {
  const getInputClassNameFromStatus = useMemo(() => {
    if (!errorMessage && !successMessage) {
      return "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none";
    }

    if (successMessage) {
      return "bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500 focus:outline-none";
    }

    if (errorMessage) {
      return "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500 focus:outline-none";
    }
  }, [errorMessage, successMessage]);

  const getMessageColor = useMemo(() => {
    if (errorMessage) {
      return "text-red-700 dark:text-red-500";
    }

    if (successMessage) {
      return "text-green-700 dark:text-green-500";
    }

    return "";
  }, [errorMessage, successMessage]);

  return (
    <>
      {label && (
        <label className={`block mb-2 text-sm font-medium ${getMessageColor}`}>
          {label}
        </label>
      )}

      <input className={getInputClassNameFromStatus} {...restProps} />

      {(successMessage || errorMessage) && (
        <p className={`mt-2 text-sm ${getMessageColor}`}>
          <span className="font-medium">
            {successMessage ? "Well done! " : "Oops! "}
          </span>
          {errorMessage || successMessage}
        </p>
      )}
    </>
  );
};

export default React.memo(TextField);
