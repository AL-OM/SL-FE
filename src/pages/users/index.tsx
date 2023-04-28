import React, { Dispatch, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserVM } from "@/core/view-models/user/user-vm";
import { SessionVM } from "@/core/view-models/session/session-vm";
import { AppProps } from "next/app";
import SignInContainer from "@/view/users/users.container";
import UserContainer from "@/view/users/users.container";

interface ComponentProps {
  user: any;
}

type Props = AppProps & ComponentProps;

const UsersPage: React.FunctionComponent<Props> = (props) => {
  return <UserContainer />;
};

export async function getServerSideProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default UsersPage;
