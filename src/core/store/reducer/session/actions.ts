import { SessionVM } from "../../../view-models/session/session-vm";
import {
  SET_SESSION,
  SessionSetAction,
  SessionClearAction,
  CLEAR_SESSION,
} from "./types";

export const onSetSession = (payload: SessionVM): SessionSetAction => ({
  type: SET_SESSION,
  payload,
});

export const onClearSession = (): SessionClearAction => ({
  type: CLEAR_SESSION,
});
