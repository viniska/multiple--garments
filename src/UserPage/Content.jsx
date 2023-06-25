import React from "react";
import UserList from "./UserList/UserList";
// import RecentOrders from "./UserList/RecentOrders";

const Content = () => {
  return (
    <>
      <UserList />
      {/* <RecentOrders /> */}
      {/* {Array.from({ length: 100 }, (_, index) => (
        <React.Fragment key={index}>
          <br />
        </React.Fragment>
      ))} */}
    </>
  );
};

export default Content;
