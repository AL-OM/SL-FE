import { UserRoleVM } from "../../../../core/view-models/user-role/user-role-vm";

export interface UserRoleState {
  userRoles: UserRoleVM[];
}

export const GET_USER_ROLES_SUCCESS = "GET_USER_ROLES_SUCCESS";

export interface GetUserRolesSuccessAction {
  type: typeof GET_USER_ROLES_SUCCESS;
  payload: UserRoleVM[];
}

export type UserRolesActionTypes = GetUserRolesSuccessAction;
