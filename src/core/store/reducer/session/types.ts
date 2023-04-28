import { SessionVM } from "../../../view-models/session/session-vm";

// Describing the shape of the session's slice of state
export interface SessionState {
  loggedIn: boolean;
  session: SessionVM;
}

// Describing the different ACTION NAMES available
export const SET_SESSION = "SET_SESSION";
export const CLEAR_SESSION = "CLEAR_SESSION";

export interface SessionSetAction {
  type: typeof SET_SESSION;
  payload: SessionVM;
}

export interface SessionClearAction {
  type: typeof CLEAR_SESSION;
}

export type SessionActionTypes = SessionSetAction | SessionClearAction;
