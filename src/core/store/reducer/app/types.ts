// Describing the shape of the session's slice of state
export interface AppStates {
  isEnabledSpinner: boolean;
  sidebarShow: any;
}

// Describing the different ACTION NAMES available
export const SET_ENABLED_SPINNER = "SET_ENABLED_SPINNER";
export const SET_SIDEBAR_SHOW = "SET_SIDEBAR_SHOW";

export interface SpinnerSetEnabledAction {
  type: typeof SET_ENABLED_SPINNER;
  payload: boolean;
}
export interface SetSideBarShowAction {
  type: typeof SET_SIDEBAR_SHOW;
  payload: any;
}

export type AppActionTypes = SpinnerSetEnabledAction | SetSideBarShowAction;
