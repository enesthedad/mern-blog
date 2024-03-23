import { DashSidebar } from "../components/DashSidebar";
import { DashUser } from "../components/DashUser";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
export const Dashboard = () => {
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
    <div className="flex flex-col w-full min-h-screen md:flex-row">
      <div className="w-full md:w-56">
        <DashSidebar />
      </div>
      {tab === "profile" && <DashUser />}
    </div>
  );
};
