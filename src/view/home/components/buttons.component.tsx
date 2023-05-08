import ButtonComponent from "@/components/button/button.component";
import CardComponent from "@/components/card/card.component";
import React from "react";

interface ComponentProps {}

type Props = ComponentProps;

const Buttons: React.FunctionComponent<Props> = (props) => {
  const data = [
    "Default",
    "Alternative",
    "Dark",
    "Light",
    "Green",
    "Red",
    "Yellow",
    "Purple",
  ];

  const renderButtons = (): React.ReactElement[] => {
    return data.map((item) => {
      return (
        <ButtonComponent key={item} buttonType={item.toLowerCase()}>
          {item}
        </ButtonComponent>
      );
    });
  };

  return (
    <CardComponent title={"Buttons Component"} containerStyle={"mt-4"}>
      {renderButtons()}
    </CardComponent>
  );
};

export default Buttons;
