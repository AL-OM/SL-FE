import { GetUserRolesApiResult } from "../data-transfer/user-role/get-user-roles.api-result";
import ApiService from "./api.service";

export class UserRoleService extends ApiService {
  public getUserRoles() {
    return this.apiGet<GetUserRolesApiResult>(`/user-roles`, null, true);
  }
}
