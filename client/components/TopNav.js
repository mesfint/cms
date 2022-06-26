import { useState } from "react";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import ToggleTheme from "./ToggleTheme";
import Link from "next/link";

const { SubMenu } = Menu;

const TopNav = () => {
  const [current, setCurrent] = useState("mail");

  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="mail" icon={<MailOutlined />}>
        <Link href="/">
          <a>CMS</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="signup" icon={<AppstoreOutlined />}>
        <Link href="/signup">
          <a>Signup</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="signin" icon={<AppstoreOutlined />}>
        <Link href="/signin">
          <a>Signin</a>
        </Link>
      </Menu.Item>
      <SubMenu
        key="SubMenu"
        icon={<SettingOutlined />}
        title="Dashboard"
        style={{ marginLeft: "auto" }}
      >
        <Menu.ItemGroup title="Management">
          <Menu.Item key="setting:2">
            <Link href="/admin">
              <a>Admin</a>
            </Link>
          </Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
      <Menu.Item>
        <ToggleTheme />
      </Menu.Item>
    </Menu>
  );
};

export default TopNav;

// import {
//   AppstoreOutlined,
//   MailOutlined,
//   SettingOutlined,
// } from "@ant-design/icons";
// import { Menu } from "antd";
// import { useState } from "react";

// import ToggleTheme from "./ToggleTheme";
// import Link from "next/link";

// const items = [
//   {
//     label: (
//       <Link href="/">
//         <a>CMS</a>
//       </Link>
//     ),
//     key: "mail",
//     icon: <MailOutlined />,
//   },
//   {
//     label: (
//       <Link href="/admin">
//         <a>Admin</a>
//       </Link>
//     ),
//     key: "admin",
//     icon: <AppstoreOutlined />,
//   },
//   {
//     label: (
//       <Link href="/signup">
//         <a>Sign up</a>
//       </Link>
//     ),
//     key: "signup",
//     icon: <AppstoreOutlined />,
//   },
//   {
//     label: (
//       <Link href="/signin">
//         <a>Sign In</a>
//       </Link>
//     ),
//     key: "signin",
//     icon: <AppstoreOutlined />,
//   },
//   {
//     label: (
//       <Link href="/dashboard">
//         <a>Dashboard</a>
//       </Link>
//     ),
//     key: "dashboard",
//     style: { marginLeft: "auto" },
//     icon: <SettingOutlined />,
//     children: [
//       {
//         type: "group",
//         label: "Management",
//         children: [
//           {
//             key: "setting:1",
//             label: (
//               <Link href="/admin">
//                 <a>Admin</a>
//               </Link>
//             ),
//           },
//           {
//             label: "Option 2",
//             key: "setting:2",
//           },
//         ],
//       },
//       {
//         type: "group",
//         label: "Item 2",
//         children: [
//           {
//             label: "Option 3",
//             key: "setting:3",
//           },
//           {
//             label: "Option 4",
//             key: "setting:4",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     style: { marginLeft: "right" },
//     label: <ToggleTheme />,
//     key: "alipay",
//   },
// ];

// const TopNav = () => {
//   const [current, setCurrent] = useState("mail");

//   const handleClick = (e) => {
//     console.log("click", e);
//     setCurrent(e.key);
//   };

//   return (
//     <>
//       <Menu
//         onClick={handleClick}
//         selectedKeys={[current]}
//         mode="horizontal"
//         items={items}
//       />
//     </>
//   );
// };
