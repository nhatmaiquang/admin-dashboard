import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./sidebar.css";

import logo_black from "../../assets/images/logo_black.png";
import logo_white from "../../assets/images/logo_white.png";
import sidebar_items from "../../assets/JsonData/sidebar_routes.json";

const SidebarItem = (props) => {
  const active = props.active ? "active" : "";

  return (
    <div className="sidebar__item">
      <div className={`sidebar__item-inner ${active}`}>
        <i className={props.icon}></i>
        <span>{props.title}</span>
      </div>
    </div>
  );
};

const Sidebar = (props) => {
  const activeItem = sidebar_items.findIndex(
    (item) => item.route === props.location.pathname
  );
  const themeReducer = useSelector((state) => state.ThemeReducer.mode);

  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        {themeReducer === "theme-mode-dark" ? (
          <img src={logo_white} alt="company logo" />
        ) : (
          <img src={logo_black} alt="company logo" />
        )}
      </div>
      {sidebar_items.map((item, index) => (
        <Link to={item.route} key={index}>
          <SidebarItem
            title={item.display_name}
            icon={item.icon}
            active={index === activeItem}
          />
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
