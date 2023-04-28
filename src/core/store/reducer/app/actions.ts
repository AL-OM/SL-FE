import {
  SpinnerSetEnabledAction,
  SET_ENABLED_SPINNER,
  SetSideBarShowAction,
  SET_SIDEBAR_SHOW,
} from "./types";

export const onSetEnabledSpinner = (
  payload: boolean
): SpinnerSetEnabledAction => ({
  type: SET_ENABLED_SPINNER,
  payload,
});

export const onSetSidebarShow = (payload: any): SetSideBarShowAction => ({
  type: SET_SIDEBAR_SHOW,
  payload,
});
