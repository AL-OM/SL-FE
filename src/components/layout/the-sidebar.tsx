import React from "react";
import { useDispatch } from "react-redux";
import sideBarNavigation from "./nav";

// sidebar nav config
import { AppState } from "../../core/store";
import SidebarItem from "./atoms/sidebar-item";
import CreateTheSidebarNav from "./atoms/create-sidebar-nav";

const TheSidebar = () => {
  const dispatch = useDispatch();

  return (
    <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800 overflow-x-hidden">
      <CreateTheSidebarNav items={sideBarNavigation} />
    </div>
  );
};

export default React.memo(TheSidebar);
