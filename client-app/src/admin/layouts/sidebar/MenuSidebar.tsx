import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy,
} from "@fortawesome/free-solid-svg-icons"
import { NavItem, NavLink, Nav } from "reactstrap"
import classNames from "classnames"
import { Link } from "react-router-dom"

import SubMenu from "./SubMenu"

const MenuSidebar = ({ isOpen, toggle }) => (
  <div className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="sidebar-header">
      <span color="info" onClick={toggle} style={{ color: "#fff" }}>
        &times;
      </span>
      <h3>Bootstrap Sidebar</h3>
    </div>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
        {menus.map((v) => 
          !v.isSubmenu ? (
            <NavItem>
              <NavLink tag={Link} to={v.target}>
                {/* <FontAwesomeIcon icon={faHome} className="mr-2" /> */}
                {v.title}
              </NavLink>
            </NavItem>
          ) : <SubMenu title={v.title} items={v.submenus} />
        )}
      </Nav>
    </div>
  </div>
);

const menus = [
  {
    title: 'Trang chủ',
    isSubmenu: false,
    icon: '',
    target: '/admin'
  },
  {
    title: 'Quản lý phim',
    isSubmenu: true,
    icon: '',
    submenus: [
      {
        title: 'Danh sách phim',
        target: '/admin/movie'
      },
      {
        title: 'Thể loại',
        target: '/admin/genre'
      }
    ]
  }
]

const submenus = [
  [
    {
      title: "Home 1",
      target: "Home-1",
    },
    {
      title: "Home 2",
      target: "Home-2",
    },
    {
      title: "Home 3",
      target: "Home-3",
    },
  ],
  [
    {
      title: "Danh sách phim",
      target: "/admin/movie",
    },
    {
      title: "Thể loại",
      target: "admin/genre",
    },
  ],
];

export default MenuSidebar;
