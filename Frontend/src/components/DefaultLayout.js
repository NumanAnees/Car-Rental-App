import React from "react";
import { Menu, Dropdown, Button, Space } from "antd";
import Logoo from "../pages/logo.png";

function DefaultLayout(props) {
  const user = JSON.parse(localStorage.getItem("user"));
  const menu = (
    <Menu>
      <Menu.Item>
        <a href="https://www.antgroup.com">Home</a>
      </Menu.Item>
      <Menu.Item>
        <a href="https://www.antgroup.com">Bookings</a>
      </Menu.Item>
      <Menu.Item>
        <a href="https://www.aliyun.com">Profile</a>
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          localStorage.removeItem("user");
          window.location.href = "/login";
        }}
      >
        <li>Logout</li>
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      <div className="header box-shadow1">
        <div className="d-flex justify-content-between logo-main">
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "flex",
              }}
            >
              {" "}
              <img
                src={Logoo}
                alt="car"
                style={{
                  width: "35px",
                  height: "35px",
                  marginLeft: "16px",
                  marginTop: "5px",
                  color: "black",
                }}
              />
              <h1
                style={{
                  fontSize: "1.4rem",
                  marginLeft: "10px",
                  marginTop: "10px",
                }}
              >
                Sandhu Cars
              </h1>
            </div>
          </div>
          <Dropdown overlay={menu} placement="bottomCenter">
            <Button>{"Wellcome " + user.username}</Button>
          </Dropdown>
          {/* <button>user</button> */}
        </div>
      </div>
      <div className="content">{props.children}</div>
    </div>
  );
}

export default DefaultLayout;
