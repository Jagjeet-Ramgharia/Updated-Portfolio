import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Sidebar = () => {
  return (
    <SideBar>
      <Navbar />
    </SideBar>
  );
};
const SideBar = styled.div`
  width: 15rem;
  height: 100vh;
  background-color: var(--sidebar-dark-color);
  position: fixed;
`;

export default Sidebar;
