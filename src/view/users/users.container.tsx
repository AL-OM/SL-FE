import React, { Dispatch, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState, store } from "@/core/store";
import UserComponent from "./users.component";
import { onThunkGetUserRoles } from "./store/thunk";

interface ComponentProps {
  user?: any;
}

type Props = ComponentProps;

const UserContainer: React.FunctionComponent<Props> = () => {
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
