import { Avatar, Col, Image, Row } from "antd";
import * as React from "react";
import { AiFillPicture } from "react-icons/ai";
import { FaBorderAll, FaBuilding } from "react-icons/fa6";
import { IoIosFlash } from "react-icons/io";
import { IoNotificationsSharp, IoShareSocial } from "react-icons/io5";
import styled from "styled-components";
import { notificationItems } from "./utils";
import { NewMenu } from "./notifyItem";
import { Wrapper } from "../_components/wrapper";
import { Header } from "../_components/header";
import { Content } from "../_components/content";
import HeaderPanel from "../_components/headerPanel";
import { t } from "i18next";

export interface IMobileHomeProps {}

const NotifyHeader = styled(Header)`
  border-radius: 8px;

  .radio {
    div {
      text-align: center;
      padding: 4px 8px 0;
      color: white;
      font-size: 18px;
      border-top-right-radius: 12px;
      border-top-left-radius: 12px;
      transition: all 0.3s linear;
      width: 100%;
      flex: 1;
      overflow: hidden;

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 4px;

      p {
        font-size: 0px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      &.active {
        font-weight: bold;
        background-color: white;
        color: #6a6af1;
        /* width: 60%; */
        flex: 4;
        p {
          font-size: 16px;
          display: block;
        }
      }

      p {
        display: none;
      }
    }
  }
`;

export default function MobileNotification(props: IMobileHomeProps) {
  const [activeTab, setActiveTab] = React.useState<
    "all" | "social" | "company" | "temporary" | "picture"
  >("all");
  return (
    <Wrapper>
      <NotifyHeader className="header">
        <div className="header-options flex justify-between px-4 py-2 relative z-10">
          <div className="title text-white text-2xl">
            {t("selfNotify.title")}
          </div>
          <div className="options flex gap-4">
            <div>
              <IoNotificationsSharp color="white" size={28} />
            </div>
            <div>
              <IoNotificationsSharp color="white" size={28} />
            </div>
          </div>
        </div>

        <HeaderPanel>
          <Row className="w-full">
            <Col span={12}>
              <div className="">
                <p className="text-blue-600 text-base">
                  {t("selfNotify.socialNews")}: 100
                </p>
              </div>
            </Col>
            <Col span={12}>
              <div className="">
                <p className="text-blue-600 text-base">
                  {t("selfNotify.companyNews")}: 100
                </p>
              </div>
            </Col>
            <Col span={12}>
              <div className="">
                <p className="text-red-600 text-base">
                  {t("selfNotify.temporaryNews")}: 100
                </p>
              </div>
            </Col>
            <Col span={12}>
              <div className="">
                <p className="text-purple-600 text-base">
                  {t("selfNotify.pictureNews")}: 100
                </p>
              </div>
            </Col>
            <Col span={24}>
              <div className="">
                <p className="text-green-600 text-base">
                  {t("selfNotify.all")}: 400
                </p>
              </div>
            </Col>
          </Row>
        </HeaderPanel>
        <div className="radio w-full flex justify-center gap-2 relative z-10">
          <div
            onClick={() => setActiveTab("all")}
            className={`${activeTab === "all" && "active"}`}
          >
            <FaBorderAll />
            <p>{t("selfNotify.all")}</p>
          </div>
          <div
            onClick={() => setActiveTab("social")}
            className={`${activeTab === "social" && "active"}`}
          >
            <IoShareSocial />
            <p>{t("selfNotify.social")}</p>
          </div>
          <div
            onClick={() => setActiveTab("company")}
            className={`${activeTab === "company" && "active"}`}
          >
            <FaBuilding />
            <p>{t("selfNotify.company")}</p>
          </div>
          <div
            onClick={() => setActiveTab("temporary")}
            className={`${activeTab === "temporary" && "active"}`}
          >
            <IoIosFlash />
            <p>{t("selfNotify.temporary")}</p>
          </div>
          <div
            onClick={() => setActiveTab("picture")}
            className={`${activeTab === "picture" && "active"}`}
          >
            <AiFillPicture />
            <p>{t("selfNotify.picture")}</p>
          </div>
        </div>
      </NotifyHeader>
      <Content className="tab">
        <Col span={24}>
          <Row className="w-full">
            {notificationItems.map((newItem, index) => {
              if (activeTab === "all" || activeTab === newItem.type)
                return <NewMenu key={index} newItem={newItem} />;
            })}
          </Row>
        </Col>
      </Content>
    </Wrapper>
  );
}
