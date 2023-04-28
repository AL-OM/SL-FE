import { LayoutTypeEnum } from "../lib/constants";
import { RouteVM } from "../view-models/session/session-vm";
import { routePaths } from "./route-paths";

const routes: RouteVM[] = [
  {
    path: "/",
    exact: true,
    layout: LayoutTypeEnum.MainLayout,
    name: "Dashboard",
  },
  {
    path: routePaths.UserRoles,
    name: "UserRoles",
    layout: LayoutTypeEnum.MainLayout,
  },
  {
    path: routePaths.SignIn,
    name: "SignIn",
    exact: true,
    layout: LayoutTypeEnum.None,
  },
];

export default routes;
