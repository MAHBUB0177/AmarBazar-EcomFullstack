import { Button, Dropdown, Flex, Form, Input, Space } from "antd";
import {
  LogoutOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

const CustomHeader = ({ collapsed }) => {
  
  const navigate = useNavigate();
    const items = [
        {
          label: "Profile",
          key: "/dashboard/profile",
          icon: <UserOutlined />,
        },
        {
          label: "Logout",
          key: "2",
          icon: <LogoutOutlined />,
        },
      ];

      const handleMenuClick = (e) => {
        if (e.key === "2") {
          _handelLogout();
        } else {
          navigate(`${e.key}`);
        }
      };
    const menuProps = {
        items,
        onClick: handleMenuClick,
      };
    const _handelLogout = () => {
        // dispatch(setAuth({}));
        // dispatch(setUser({}));
        localStorage.setItem('token',JSON.stringify(''))
        localStorage.setItem('refreshtoken',JSON.stringify(''))
        navigate(`/`);
      };

  const onFinish = (e) => {
    console.log("first");
  };
  return (
    <div className="flex flex-row justify-between  bg-white shadow-md px-10">
      <div className="py-3">
        <Link to="/dashboard">
          <Flex className=" " horizontal>
            <FaCartShopping className="mt-[8px] text-2xl" />
            <p className="text-2xl font-semibold ">Amar Bazar</p>
          </Flex>
        </Link>
      </div>

      <div className="pt-4 hidden md:block">
        <Form onFinish={onFinish}>
          <Form.Item>
            <Input
              value={""}
              className="border-2 border-pink-500 caret-pink-500 lg:w-96 p-2"
              style={{
                borderRadius: "50px",
              }}
              suffix={
                <SearchOutlined
                  style={{ fontSize: "20px", color: "purple" }}
                  onClick={onFinish}
                />
              }
              placeholder="PNR/TICKET NO/Booking ID"
              // onChange={(e) => {
              //   setSearchTerm(e.target.value);
              // }}
            />
          </Form.Item>
        </Form>
      </div>

      <div className="hidden md:block">  <a href="#">
          <div className="text-md">
            <Space wrap>
              <Dropdown.Button
                menu={menuProps}
                icon={<UserOutlined  style={{color:'red',}}/>}
                placement="bottomRight"
                arrow
                size="large"
              >
              <h2  style={{color:'purple'}}> Mahbub </h2>
              </Dropdown.Button>
            </Space>
          </div>
        </a></div>
    </div>
  );
};

export default CustomHeader;
