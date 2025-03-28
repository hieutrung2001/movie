import React, { useState } from "react"
import classNames from "classnames"
import { Collapse, NavItem, NavLink } from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

const SubMenu = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggle = () => setCollapsed(!collapsed);
  const { title, items } = props;

  return (
    <div className="pr-0">
      <NavItem
        onClick={toggle}
        className={classNames({ "menu-open": !collapsed })}
        style={{ "width": "fit-content" }}
      >
        <NavLink className="dropdown-toggle">
          {' '}{title}
        </NavLink>
      </NavItem>
      <Collapse
        isOpen={!collapsed}
        navbar
        className={classNames("items-menu", { "mb-1": !collapsed })}
      >
        {items.map((item, index) => (
          <NavItem key={index} className="pl-4">
            <NavLink tag={Link} to={item.target}>
              {item.title}
            </NavLink>
          </NavItem>
        ))}
      </Collapse>
    </div>
  );
};

export default SubMenu;
