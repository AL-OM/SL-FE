import { SignInApiResult } from "../data-transfer/auth/sign-in.api-result";
import { SignInReqVM } from "../view-models/auth/sign-in-vm";
import ApiService from "./api.service";

export class AuthService extends ApiService {
  public signIn(data: SignInReqVM) {
    return this.apiPost<SignInApiResult>(`/auth/sign-in`, data, null, false);
  }
}
