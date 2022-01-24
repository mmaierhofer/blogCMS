import React, { useState, useEffect } from "react";
import TabHeader from "../components/header/tabHeader";
import ApiSettings from "../components/settings/apiSettings";
import ChannelSettings from "../components/settings/channelSettings";
import GeneralSettings from "../components/settings/generalSettings";
import ProductFormSettings from "../components/settings/productFormSettings";
import WorkflowSettings from "../components/settings/workflowSettings";

export default function Settings() {
  const tabs = ["General", "API-Keys", "Channels", "Workflow", "Products Form"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  function getActiveTab() {
    if (activeTab === tabs[0]) {
      return <GeneralSettings />;
    } else if (activeTab === tabs[1]) {
      return <ApiSettings />;
    } else if (activeTab === tabs[2]) {
      return <ChannelSettings />;
    } else if (activeTab === tabs[3]) {
      return <WorkflowSettings />;
    } else if (activeTab === tabs[4]) {
      return <ProductFormSettings />;
    }
  }

  return (
    <>
      <div className="page flex-col">
        <div className="flex flex-col w-full h-5/6 items-center">
          <TabHeader
            activeTab={activeTab}
            setActiveTab={(activeTab) => setActiveTab(activeTab)}
            tabs={tabs}
          />
          <div className="w-full">{getActiveTab()}</div>
        </div>
      </div>
    </>
  );
}
