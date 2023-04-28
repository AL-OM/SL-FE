import { SessionVM } from "../../view-models/session/session-vm";
import { ApiResult } from "../api-result";

export class SignInApiResult extends ApiResult {
  data: SessionVM;

  constructor() {
    super();
    this.data = new SessionVM();
  }
}
