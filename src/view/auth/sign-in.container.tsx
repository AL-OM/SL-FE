import React, { Dispatch, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SignInComponent from "./sign-in.component";
import { AppState, store } from "@/core/store";
import { SignInVM } from "@/core/view-models/auth/sign-in-vm";
import { onThunkSignIn } from "@/view/auth/thunk";
import { useRouter } from "next/router";
import { onSetEnabledSpinner } from "@/core/store/reducer/app/actions";

interface ComponentProps {
  user?: any;
}

type Props = ComponentProps;

const SignInContainer: React.FunctionComponent<Props> = (props) => {
  const dispatch: Dispatch<any> = useDispatch();
  const { loggedIn, session } = useSelector((state: AppState) => state.session);
  const router = useRouter();

  console.log(loggedIn, session);

  useEffect(() => {
    // dispatch(onSetSession(new SessionVM()));

    if (loggedIn) {
      // history.push(routePaths.UserRoles);
    }
  }, [loggedIn]);

  const onSignInClick = (data: SignInVM) => {
    dispatch(onSetEnabledSpinner(true));

    setTimeout(() => {
      dispatch(onSetEnabledSpinner(false));
      dispatch(onThunkSignIn(data));
      router.push("/users");
    }, 1500);
  };

  return <SignInComponent onSignInClick={onSignInClick} />;
};

export async function getServerSideProps() {
  const { session } = store.getState().session;

  return {
    props: { user: JSON.stringify(session.user) }, // will be passed to the page component as props
  };
}

export default SignInContainer;
