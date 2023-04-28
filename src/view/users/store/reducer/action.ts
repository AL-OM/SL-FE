import { UserRoleVM } from "../../../../core/view-models/user-role/user-role-vm";
import { GET_USER_ROLES_SUCCESS, GetUserRolesSuccessAction } from "./types";

export const onGetUserRolesSuccess = (
  payload: UserRoleVM[]
): GetUserRolesSuccessAction => ({
  type: GET_USER_ROLES_SUCCESS,
  payload,
});
