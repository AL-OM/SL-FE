import ButtonComponent, {
  ButtonTypeEnum,
} from "@/components/button/button.component";
import CardComponent from "@/components/card/card.component";
import { dateToDdMmYYY } from "@/core/lib/formatters";
import React, { useState } from "react";

interface ComponentProps {}

type Props = ComponentProps;

const DateFormatter: React.FunctionComponent<Props> = () => {
  const [type, setType] = useState<string>("date");
  const [result, setResult] = useState<string>("");
  const dateType = ["dd/mm/yyy", "dd-mm-yyy", "dd-MM-YYYY", "YYY-mm-dd"];
  const [value, setValue] = useState<string>("");

  const getResult = () => {
    setResult(dateToDdMmYYY(value));
  };

  const renderFormatType = () => {
    return dateType.map((item) => {
      return (
        <div className="flex items-center mb-4 " key={item}>
          <input
            id={item}
            type="radio"
            value={item}
            name="default-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor={item}
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            {type === "date" ? item : `${item} hh:mm`}
          </label>
        </div>
      );
    });
  };

  return (
    <CardComponent title={"Convert DateTime"} containerStyle={"basis-1/2"}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          getResult();
        }}
      >
        <ButtonComponent
          onClick={() =>
            setType((prev) => (prev === "date" ? "datetime-local" : "date"))
          }
          type={"button"}
          buttonType={ButtonTypeEnum.Default}
        >
          {`Click to change input type: ${
            type === "date" ? "Date-Time" : "Date"
          }`}
        </ButtonComponent>
        <input
          type={type}
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
          placeholder={"select date"}
          onChange={(e) => {
            setValue(e?.target?.value);
          }}
        />

        <h3 className={"my-2"}>Select type to convert</h3>
        {renderFormatType()}

        <h3 className={"my-2"}>Result: {result}</h3>

        <ButtonComponent
          contentContainerStype={"mt-2"}
          type={"submit"}
          buttonType={ButtonTypeEnum.Default}
        >
          {"Convert"}
        </ButtonComponent>
      </form>
    </CardComponent>
  );
};

export default DateFormatter;
