import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useState } from "react";

import ToggleTheme from "./ToggleTheme";
const items = [
  {
    label: "CMS",
    key: "mail",
    icon: <MailOutlined />,
  },
  {
    label: "Admin",
    key: "app",
    icon: <AppstoreOutlined />,
    disabled: true,
  },
  {
    label: "Sign up",
    key: "app",
    icon: <AppstoreOutlined />,
    disabled: true,
  },
  {
    label: "Mr. Admin",
    key: "SubMenu",
    icon: <SettingOutlined />,
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
  {
    label: <ToggleTheme />,
    key: "alipay",
  },
];

const TopNav = () => {
  const [current, setCurrent] = useState("mail");

  const handleClick = (e) => {
    console.log("click", e);
    setCurrent(e.key);
  };

  return (
    <>
      <Menu
        onClick={handleClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
    </>
  );
};

export default TopNav;
