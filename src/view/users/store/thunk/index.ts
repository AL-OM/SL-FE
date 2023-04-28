import { ThunkActionTypes } from "../../../../core/store/thunk/types";
import { onGetUserRolesSuccess } from "../reducer/action";
import { UserRoleService } from "../../../../core/services/user-role.service";
import { catchHandle } from "../../../../core/lib/catch-helper";
import { GetUserRolesApiResult } from "../../../../core/data-transfer/user-role/get-user-roles.api-result";
import { UserRoleVM } from "@/core/view-models/user-role/user-role-vm";

export const userRolesFakeData: UserRoleVM[] = [
  { id: 0, name: "Admin" },
  { id: 1, name: "Moderator" },
  { id: 2, name: "Clinician" },
  { id: 3, name: "Test 1" },
  { id: 4, name: "Test 2" },
  { id: 5, name: "Test 3" },
  { id: 6, name: "Test 4" },
  { id: 7, name: "Test 5" },
  { id: 8, name: "Test 6" },
  { id: 9, name: "Test 7" },
  { id: 10, name: "Test 8" },
  { id: 11, name: "Test 9" },
  { id: 12, name: "Test 10" },
  { id: 13, name: "Test 11" },
];

export const onThunkGetUserRoles = (): ThunkActionTypes => async (dispatch) => {
  const userRoleService = new UserRoleService();

  try {
    // const res = await userRoleService.getUserRoles();

    const res: GetUserRolesApiResult = {
      success: true,
      data: userRolesFakeData,
    };

    if (res.success) {
      dispatch(onGetUserRolesSuccess(res.data || []));
    } else {
      // toast.warning(res.message);
    }
  } catch (e) {
    catchHandle(e, dispatch);
  }
};
