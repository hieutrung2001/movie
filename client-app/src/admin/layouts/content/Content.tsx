import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";

import Topbar from "./TopBar";
import { Outlet } from "react-router-dom";

const Content = ({ sidebarIsOpen, toggleSidebar }) => (

  <Container
    fluid
    className={classNames("content", { "is-open": sidebarIsOpen })}
  >
    <Topbar toggleSidebar={toggleSidebar} />
    <Outlet />
  </Container>
);

export default Content;
