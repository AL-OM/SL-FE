import { UserRoleVM } from "../../view-models/user-role/user-role-vm";
import { ApiResult } from "../api-result";

export class GetUserRolesApiResult extends ApiResult {
  data: UserRoleVM[];

  constructor() {
    super();
    this.data = [];
  }
}
