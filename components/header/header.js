import React from "react";
import SearchBar from "./searchBar";

export default function Header({ title }) {
  return (
    <>
      <div className="w-full h-12 bg-primary shadow-lg">
        <div className="text-xl ml-5 font-bold align-middle flex items-center h-full">
          <SearchBar title={title} />
        </div>
      </div>
    </>
  );
}
