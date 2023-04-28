import {
  UserRoleState,
  GET_USER_ROLES_SUCCESS,
  UserRolesActionTypes,
} from "./types";

const initialState: UserRoleState = {
  userRoles: [],
};

export const userRolesReducer = (
  state = initialState,
  action: UserRolesActionTypes
): UserRoleState => {
  switch (action.type) {
    case GET_USER_ROLES_SUCCESS: {
      return {
        ...state,
        userRoles: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
