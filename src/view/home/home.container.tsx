import React from "react";
import HomeComponent from "./home.component";

interface ComponentProps {
  user?: any;
}

type Props = ComponentProps;

const HomeContainer: React.FunctionComponent<Props> = () => {
  return <HomeComponent />;
};

export default HomeContainer;
