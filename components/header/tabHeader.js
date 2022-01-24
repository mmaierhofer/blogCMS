import React, { useState } from "react";
import { createRandomApiKey } from "../../helper/utilityFunctions";

export default function TabHeader({ activeTab, setActiveTab, tabs }) {
  return (
    <>
      <div className="w-full bg-primary h-20 shadow-md flex">
        <div className="flex justify-around items-center pl-5 h-20">
          {tabs.map((tab) => {
            return (
              <div
                key={createRandomApiKey()}
                className={
                  "h-full flex flex-col items-center justify-center w-32 border-b-2 text-lg cursor-pointer " +
                  (activeTab === tab
                    ? "border-secondary text-secondary"
                    : "border-primary text-white")
                }
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
