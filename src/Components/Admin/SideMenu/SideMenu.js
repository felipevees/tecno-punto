import React from "react";
import "./SideMenu.css";
import { Link, useLocation } from "react-router-dom";
import { Menu, Icon } from "semantic-ui-react";
import { useAuth } from "../../../hooks";

export function SideMenu(props) {
  const { children } = props;
  const { pathname } = useLocation();

  return (
    <div className="side-menu-admin">
      <MenuLeft pathname={pathname} />
      <div className="content">{children}</div>
    </div>
  );
}

function MenuLeft(props) {
  const { pathname } = props;
  const { auth } = useAuth();

  return (
    <Menu fixed="left" borderless className="side" vertical>
      <Menu.Item as={Link} to={"/admin"} active={pathname === "/admin"}>
        <Icon name="money" /> creditos
      </Menu.Item>
      <Menu.Item as={Link} to={"/admin/clients"} active={pathname === "/admin"}>
        <Icon name="user" /> clientes
      </Menu.Item>

      {auth.me?.is_staff && (
        <Menu.Item
          as={Link}
          to={"/admin/users"}
          active={pathname === "/admin/users"}
        >
          <Icon name="user" /> Usuarios
        </Menu.Item>
      )}
    </Menu>
  );
}
