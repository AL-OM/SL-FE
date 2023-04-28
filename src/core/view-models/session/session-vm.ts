import "reflect-metadata";
import { Type } from "class-transformer";
import { UserVM } from "../user/user-vm";
import { LayoutTypeEnum } from "@/core/lib/constants";

export class SessionVM {
  token: string;
  @Type(() => UserVM)
  user: UserVM;

  constructor() {
    this.token = "";
    this.user = new UserVM();
  }
}

export class RouteVM {
  name?: string;
  path: string;
  exact?: boolean;
  layout?: LayoutTypeEnum;

  constructor() {
    this.name = "";
    this.path = "";
  }
}
