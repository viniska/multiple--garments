import React, { useState } from "react";
import { Layout } from "antd";
import MainStructure from "../Main Structure/MainStructure";

const Dashboard = () => {
  const [open, setOpen] = useState(true);

  const handleDrawerToggle = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <Layout>
      <MainStructure open={open} handleDrawerToggle={handleDrawerToggle} />
    </Layout>
  );
};

export default Dashboard;
