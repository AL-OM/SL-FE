import { useEffect, useMemo, useState } from "react";
import React from "react";

interface ComponentProps {
  title: string;
  children: any;
  containerStyle?: string;
}

type Props = ComponentProps;

const Card: React.FunctionComponent<Props> = (props) => {
  return (
    <div
      className={`p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ${props.containerStyle}`}
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {props.title}
      </h5>
      {props.children}
    </div>
  );
};

export default React.memo(Card);
