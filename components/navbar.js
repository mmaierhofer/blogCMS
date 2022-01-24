import React, { useState } from "react";
import {
  faHome,
  faStream,
  faEuroSign,
  faUsers,
  faCog,
  faQuestion,
  faSignOutAlt,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import SideBarIcon from "./sideBar/sideBarIcon";
import LogoutModule from "./auth/logoutModule";
import { useRouter } from "next/router";

export default function Navbar() {
  const [logoutModuleIsActive, setLogoutModuleIsActive] = useState(false);

  const router = useRouter();

  const getActiveStyle = (link) => {
    return "border-l-2 border-secondary h-3/4";
  };

  return (
    <>
      <div
        className={
          "w-16 fixed top-0 left-0 h-screen bg-primary flex-col justify-around items-center flex shadow-lg"
        }
      >
        <div className="flex flex-col justify-around flex-1 w-full">
          <SideBarIcon
            icon={faHome}
            tooltip="Home"
            link="/"
            currentPath={router.route}
          />
          <SideBarIcon
            icon={faStream}
            tooltip="Posts"
            link="/posts"
            currentPath={router.route}
          />
          <SideBarIcon
            icon={faPlus}
            tooltip="Add Post"
            link="/post/add"
            currentPath={router.route}
          />
          <SideBarIcon
            icon={faUsers}
            tooltip="Users"
            link="/users"
            currentPath={router.route}
          />
          <SideBarIcon
            icon={faCog}
            tooltip="Settings"
            link="/settings"
            currentPath={router.route}
          />
        </div>
        <div className="flex-1 justify-end flex flex-col w-full">
          <div onClick={() => setLogoutModuleIsActive(true)}>
            <SideBarIcon icon={faSignOutAlt} tooltip="Sign Out" link="" />
          </div>
          <SideBarIcon
            icon={faQuestion}
            tooltip="Help"
            link="/help"
            currentPath={router.route}
          />
        </div>
        <LogoutModule
          isActive={logoutModuleIsActive}
          setIsActive={() => setLogoutModuleIsActive(false)}
        />
      </div>
    </>
  );
}
