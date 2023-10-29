import { Dropdown, Space, message } from "antd";
import { DownOutlined } from "@ant-design/icons";

import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const StyledDropdown = styled(Dropdown)`
  &.ant-dropdown-submenu-popup {
    background-color: #e2e4dd;
  }
`;

const Practice = () => {
  const items = [
    {
      key: "隨機",
      label: (
        <Link to={"./"} style={{ fontSize: "16px", color: "#314543" }}>
          隨機模式
        </Link>
      ),
    },
    {
      key: "收藏",
      label: (
        <Link to={"collection"} style={{ fontSize: "16px", color: "#314543" }}>
          收藏模式
        </Link>
      ),
    },
  ];

  const onClick = ({ key }) => {
    message.info(`切換至 ${key}模式`);
  };

  return (
    <>
      <h1
        style={{
          paddingTop: "100px",
          textAlign: "center",
          letterSpacing: "2rem",
        }}
      >
        &thinsp;單字練習
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          paddingRight: "10%",
        }}
      >
        <StyledDropdown menu={{ items, onClick }} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()} style={{ fontSize: "20px" }}>
            <Space>
              選擇練習模式
              <DownOutlined />
            </Space>
          </a>
        </StyledDropdown>
      </div>
      <hr width="80%" />
      <Outlet />
    </>
  );
};

export default Practice;
