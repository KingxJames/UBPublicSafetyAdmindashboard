import React, { useState } from "react";
import UBCardDataStats from "../../../common/UBCardDataStats/UBCardDataStats";
import UBVisitorsAnalyticsChart from "../../../common/UBVisitorsAnalyticsChart/UBVisitorsAnalyticsChart";
import UBChats from "../../../common/UBChats/UBChats";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import AssessmentIcon from "@mui/icons-material/Assessment";
import GroupIcon from "@mui/icons-material/Group";

// Mock data - replace with API data if available
const initialData = {
  stats: [
    { title: "Total views", total: "3,456", icon: <RemoveRedEyeIcon /> },
    { title: "Total messages sent", total: "452", icon: <MarkEmailReadIcon /> },
    { title: "Total Reports", total: "250", icon: <AssessmentIcon /> },
    { title: "Total Users", total: "36", icon: <GroupIcon /> },
  ],
};

export const UBDashboard: React.FC = () => {
  const [data, setData] = useState(initialData);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        {data.stats.map((stat, index) => (
          <UBCardDataStats
            key={index}
            title={stat.title}
            total={stat.total}
          >
            {stat.icon}
          </UBCardDataStats>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="col-span-12 md:col-span-7">
          <UBVisitorsAnalyticsChart />
        </div>
        <div className="col-span-12 md:col-span-5">
          <UBChats />
        </div>
      </div>
    </>
  );
};
