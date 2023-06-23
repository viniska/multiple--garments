import React from "react";
import DashboardCard from "./PageDashboard/DashboardCard";
import RecentOrders from "./PageDashboard/RecentOrders";

const Content = () => {
  return (
    <>
      <DashboardCard />
      <RecentOrders />
      {/* {Array.from({ length: 100 }, (_, index) => (
        <React.Fragment key={index}>
          <br />
        </React.Fragment>
      ))} */}
    </>
  );
};

export default Content;
