import {
  AppStates,
  AppActionTypes,
  SET_ENABLED_SPINNER,
  SET_SIDEBAR_SHOW,
} from "./types";

const initialState: AppStates = {
  isEnabledSpinner: false,
  sidebarShow: "responsive",
};

export const appReducer = (
  state = initialState,
  action: AppActionTypes
): AppStates => {
  switch (action.type) {
    case SET_ENABLED_SPINNER: {
      return {
        ...state,
        isEnabledSpinner: action.payload,
      };
    }
    case SET_SIDEBAR_SHOW: {
      return {
        ...state,
        sidebarShow: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
