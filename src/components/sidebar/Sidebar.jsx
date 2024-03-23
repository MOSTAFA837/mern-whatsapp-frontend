import { useState } from "react";
import SidebarHeader from "./header/SidebarHeader";
import Notifications from "./Notifications";
import Search from "./search/Search";
import Conversations from "./conversation/Conversations";
import SearchResults from "./search/SearchResults";

export default function Sidebar() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="w-[40%] h-full select-none">
      <SidebarHeader />

      <Notifications />

      <Search
        searchLength={searchResults.length}
        setSearchResults={setSearchResults}
      />

      {searchResults.length > 0 ? (
        <>
          {/*Search results*/}
          <SearchResults searchResults={searchResults} />
        </>
      ) : (
        <>
          {/*Conversations*/}
          <Conversations />
        </>
      )}
    </div>
  );
}
