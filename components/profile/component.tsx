"use client";
import "@/components/profile/style.scss";
import type { MenuProps } from "antd";
import { Button, Menu } from "antd";
import {
  UserOutlined,
  CreditCardOutlined,
  HistoryOutlined,
} from "@ant-design/icons";
import FormGroup from "../form-group/component";
import React from "react";
type MenuItem = Required<MenuProps>["items"][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
const items: MenuItem[] = [
  getItem("Account", "1", <UserOutlined />),
  getItem("Billing", "2", <CreditCardOutlined />),
  getItem("History", "3", <HistoryOutlined />),
];
export default function ProfileContent() {
  const [selectedMenuIndex, setSelectedMenuIndex] = React.useState(1);

  const renderContent = (index: number) => {

    switch (index) {
      case 1:
        return (
          <div className="profile-selected-view-content">
            <div className="profile-input-row">
              {" "}
              <div className="input-container">
                <FormGroup
                  label={"Name"}
                  notNull={true}
                  className={"first-name-input"}
                  placeholder={null}
                />
              </div>
              <div className="input-container">
                <FormGroup
                  label={"Surname"}
                  notNull={true}
                  className={"first-name-input"}
                  placeholder={null}
                />
              </div>
            </div>
            <div className="profile-input-row">
              {" "}
              <div className="input-container">
                <FormGroup
                  label={"Address"}
                  notNull={true}
                  className={"first-name-input"}
                  placeholder={null}
                />
              </div>
            </div>
            <div className="profile-input-row">
              {" "}
              <div className="input-container">
                <FormGroup
                  label={"Country"}
                  notNull={true}
                  className={"first-name-input"}
                  placeholder={null}
                />
              </div>
            </div>
            <div className="profile-input-row">
              <Button size="large" type="primary">
                Log Out
              </Button>
            </div>
          </div>
        );

      case 2:
        <div className="profile-selected-view-content">
          <div className="profile-input-row">
            {" "}
            <div className="input-container">
              <FormGroup
                label={"Card ID"}
                notNull={true}
                className={"first-name-input"}
                placeholder={null}
              />
            </div>
          </div>
        </div>;
      case 3:
        <div>
          <p>History</p>
        </div>;
        break;
      default:
        <div></div>;
        break;
    }
  };

  return (
    <div className="profile-content-wrapper">
      <div className="profile-content">
        <div className="profile-menu">
          <Menu
          defaultSelectedKeys={["1"]}
           onClick={(e) => setSelectedMenuIndex(parseInt(e.key))}
            mode="inline"
            style={{ width: 260 }}
            items={items}
          />
        </div>
        {renderContent(selectedMenuIndex)}
      </div>
    </div>
  );
}
