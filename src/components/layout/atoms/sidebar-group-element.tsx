import React, { useState } from "react";
import { NavVM } from "../nav";
import SidebarItem from "./sidebar-item";

interface ComponentProps {
  nav: NavVM;
}

type Props = ComponentProps;

const CreateTheSidebarElement: React.FunctionComponent<Props> = (props) => {
  const [isShow, setIsShow] = useState<boolean>(false);

  const renderPropsItem = () => {
    return (props.nav.items || []).map((item) => {
      return <CreateTheSidebarElement key={item.name} nav={item} />;
    });
  };

  const onButtonClick = () => {
    setIsShow((prev) => !prev);
  };

  if (props.nav.component === "group") {
    return (
      <>
        <SidebarItem
          title={props.nav.name}
          path={props.nav.to}
          icon={props.nav.icon}
          isGroup
          onButtonClick={onButtonClick}
        />

        <ul
          id={"dropdown-example"}
          className={`space-y-2 ${
            isShow ? "h-full" : "hidden"
          } overflow-x-hidden transition-all duration-500 ease-in-out transform`}
        >
          {props.nav.items && props.nav.items.length > 0 && renderPropsItem()}
        </ul>
      </>
    );
  }

  return (
    <SidebarItem
      title={props.nav.name}
      path={props.nav.to}
      icon={props.nav.icon}
    />
  );
};

export default CreateTheSidebarElement;
