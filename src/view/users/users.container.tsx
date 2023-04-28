/* eslint-disable react-hooks/exhaustive-deps */
import React, { Dispatch, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserVM } from "@/core/view-models/user/user-vm";
import { SessionVM } from "@/core/view-models/session/session-vm";
import { AppProps } from "next/app";
import SignInComponent from "./users.component";
import { AppState, store } from "@/core/store";
import { SignInVM } from "@/core/view-models/auth/sign-in-vm";
import { onThunkSignIn } from "@/view/auth/thunk";
import UserComponent from "./users.component";
import { onSetEnabledSpinner } from "@/core/store/reducer/app/actions";
import { onThunkGetUserRoles } from "./store/thunk";
import { UserRoleService } from "@/core/services/user-role.service";

interface ComponentProps {
  user?: any;
}

type Props = ComponentProps;

const UserContainer: React.FunctionComponent<Props> = (props) => {
  const dispatch: Dispatch<any> = useDispatch();
  const { userRoles } = useSelector((state: AppState) => state.userRole);

  useEffect(() => {
    onGetUserRole();
  }, []);

  const onGetUserRole = () => {
    dispatch(onThunkGetUserRoles());
  };

  return <UserComponent userRoles={userRoles} />;
};

export async function getServerSideProps() {
  const { session } = store.getState().session;
  // const userRoleService = new UserRoleService();
  // const res = await userRoleService.getUserRoles();

  return {
    props: { user: JSON.stringify(session.user) }, // will be passed to the page component as props
  };
}

export default UserContainer;
