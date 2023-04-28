import { SignInApiResult } from "../../../core/data-transfer/auth/sign-in.api-result";
import { catchHandle } from "../../../core/lib/catch-helper";
import { AuthService } from "../../../core/services/auth.service";
import { onSetSession } from "../../../core/store/reducer/session/actions";
import { ThunkActionTypes } from "../../../core/store/thunk/types";
import {
  SignInReqVM,
  SignInVM,
} from "../../../core/view-models/auth/sign-in-vm";

export const onThunkSignIn =
  (data: SignInVM): ThunkActionTypes =>
  async (dispatch) => {
    const authService = new AuthService();
    const signInReq: SignInReqVM = {
      username: data.username,
      password: data.password,
    };

    try {
      // const res = await authService.signIn(signInReq);

      // Fake
      const res: SignInApiResult = {
        ...new SignInApiResult(),
        success: true,
      };

      if (res.success) {
        dispatch(onSetSession(res.data));
      } else {
        // toast.warn(res.message);
      }
    } catch (e) {
      catchHandle(e, dispatch);
    }
  };
