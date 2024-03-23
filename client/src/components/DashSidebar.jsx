import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";
import { GoSignOut } from "react-icons/go";
import { CiUser } from "react-icons/ci";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
export const DashSidebar = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");
  console.log(tab);
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <Sidebar className="w-full md:w-56">
      <SidebarItems>
        <SidebarItemGroup>
          <Link to="/dashboard?tab=profile">
            <Sidebar.Item
              icon={CiUser}
              active={tab === "profile"}
              label="user"
              labelColor="dark"
            >
              {" "}
              Profile
            </Sidebar.Item>
          </Link>
          <Sidebar.Item
            icon={GoSignOut}
            className="flex flex-row gap-1 cursor-pointer"
          >
            <span>Signout</span>
          </Sidebar.Item>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
};
