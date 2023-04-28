// import { toast } from "react-toastify";
import { ApiResult } from "../data-transfer/api-result";
import { onClearSession } from "../store/reducer/session/actions";

export const catchHandle = (e: any, dispatch: any): void => {
  const { message }: ApiResult = e;

  try {
    if (e.response.status) {
      switch (e.response.status) {
        case 401: {
          dispatch(onClearSession());
          // toast.warning("Login session expired");

          break;
        }
        default: {
          // toast.warning(message);
        }
      }
    }
  } catch {
    // toast.warning(message);
  }
};
