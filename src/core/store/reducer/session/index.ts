import { SessionVM } from "../../../view-models/session/session-vm";
import {
  SessionState,
  SessionActionTypes,
  SET_SESSION,
  CLEAR_SESSION,
} from "./types";

const initialState: SessionState = {
  loggedIn: false,
  session: new SessionVM(),
};

export const sessionReducer = (
  state = initialState,
  action: SessionActionTypes
): SessionState => {
  switch (action.type) {
    case SET_SESSION: {
      return {
        ...state,
        loggedIn: true,
        session: action.payload,
      };
    }
    case CLEAR_SESSION: {
      return {
        ...state,
        loggedIn: false,
        session: new SessionVM(),
      };
    }
    default: {
      return state;
    }
  }
};
