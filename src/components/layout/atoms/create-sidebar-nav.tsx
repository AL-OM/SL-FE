import React from "react";
import { NavVM } from "../nav";
import CreateTheSidebarElement from "./sidebar-group-element";

interface ComponentProps {
  items: NavVM[];
}

type Props = ComponentProps;

const CreateTheSidebarNav: React.FunctionComponent<Props> = (props) => {
  const renderTheSideBarNav = (): React.ReactElement[] => {
    return props.items.map((item) => {
      return <CreateTheSidebarElement key={item.name} nav={item} />;
    });
  };

  return <ul className={"space-y-2 font-medium"}>{renderTheSideBarNav()}</ul>;
};

export default CreateTheSidebarNav;
