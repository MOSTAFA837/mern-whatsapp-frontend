import { useState } from "react";
import SidebarHeader from "./header/SidebarHeader";
import Notifications from "./Notifications";
import Search from "./Search";

export default function Sidebar() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="w-[40%] h-full select-none">
      <SidebarHeader />

      <Notifications />

      <Search searchLength={searchResults.length} />
    </div>
  );
}
