import CardComponent from "@/components/card/card.component";
import TextFieldComponent from "@/components/textField/textField.component";
import React from "react";

interface ComponentProps {}

type Props = ComponentProps;

const TextFields: React.FunctionComponent<Props> = (props) => {
  const renderTextFields = (): React.ReactElement => {
    return (
      <>
        <TextFieldComponent label={"Name"} placeholder={"Enter Your Name"} />
        <br />
        <TextFieldComponent
          errorMessage={"error"}
          label={"Name"}
          placeholder={"Enter Your Name"}
        />
        <br />
        <TextFieldComponent
          successMessage={"success"}
          label={"Name"}
          placeholder={"Enter Your Name"}
        />
      </>
    );
  };

  return (
    <CardComponent title={"Text Fields Component"} containerStyle={"mt-4"}>
      {renderTextFields()}
    </CardComponent>
  );
};

export default TextFields;
