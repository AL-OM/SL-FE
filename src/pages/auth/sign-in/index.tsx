import React, { Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState, store } from "../../../core/store";
import SignInContainer from "@/view/auth/sign-in.container";

interface ComponentProps {
  user: any;
}

type Props = ComponentProps;

const SignInPage: React.FunctionComponent<Props> = (props) => {
  const dispatch: Dispatch<any> = useDispatch();
  const { loggedIn } = useSelector((state: AppState) => state.session);

  return <SignInContainer />;
};

export async function getServerSideProps() {
  const { session, loggedIn } = store.getState().session;

  console.log(session, loggedIn);

  return {
    props: { user: JSON.stringify(session.user) }, // will be passed to the page component as props
  };
}

export default SignInPage;
