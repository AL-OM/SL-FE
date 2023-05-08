import { toast } from "@/components/toast";
import React from "react";
import DateFormatter from "./components/date-formatter.component";
import CardComponent from "@/components/card/card.component";
import Buttons from "./components/buttons.component";
import TextFields from "./components/text-fields.component";

interface ComponentProps {}

type Props = ComponentProps;

const HomeComponent: React.FunctionComponent<Props> = (props) => {
  const renderToast = () => {
    return (
      <CardComponent title={"TOAST"} containerStyle={"mb-4 basis-1/2"}>
        <button
          onClick={() => {
            toast.warn({
              description: "This is an info toast component",
              title: "Warning",
            });
          }}
          className={"bg-gray-300 px-4 py-2 rounded "}
        >
          show toast
        </button>
      </CardComponent>
    );
  };

  return (
    <div>
      {renderToast()}
      <DateFormatter />
      <Buttons />
      <TextFields />
    </div>
  );
};

export default HomeComponent;
