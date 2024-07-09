import { Avatar, Col, Row } from "antd";
import * as React from "react";

import { UnderLineSelect } from "../../home/home.page";

import { useTranslation } from "react-i18next";
import { Wrapper } from "../_components/wrapper";
import { Header } from "../_components/header";
import { Content } from "../_components/content";
import { languages, menuLList } from "./util";
import { IoNotificationsSharp } from "react-icons/io5";
import { MenuItem } from "./home.Item";

// export interface IMobileHomeProps {}

export default function MobileHome() {
  const [activeTab, setActiveTab] = React.useState<string>(() => {
    const localValue = localStorage.getItem("homeTab") || "";
    return ["personal", "work"].includes(localValue) ? localValue : "personal";
  });
  const [language, setLanguage] = React.useState(
    localStorage.getItem("language") || "vi"
  );

  const { t, i18n } = useTranslation();
  console.log(language);

  React.useEffect(() => {
    localStorage.setItem("language", language || "vi");
    i18n.changeLanguage(language || "vi");
  }, [language]);

  React.useEffect(() => {
    localStorage.setItem("homeTab", activeTab);
  }, [activeTab]);
  return (
    <Wrapper>
      <Header className="header">
        <div className="header-options flex justify-between px-4 py-2 relative z-10">
          <div className="title text-white text-2xl">{t("homePage.title")}</div>
          <div className="options flex gap-4">
            <div>
              <UnderLineSelect
                value={language}
                className="w-20"
                options={languages}
                onChange={(e) => setLanguage(e)}
              />
            </div>
            <div>
              <IoNotificationsSharp color="white" size={28} />
            </div>
          </div>
        </div>
        <div className="user flex items-center px-4 mb-4 gap-4 relative z-10">
          <Avatar
            src="https://th.bing.com/th/id/OIP._nS5D09ektBnLxu3dUy22AHaEK?rs=1&pid=ImgDetMain"
            size={"large"}
            className="w-14 h-14 border-2 border-white"
          ></Avatar>
          <div className="text-white">
            <p className="text-xl font-semibold">Phùng Quốc Hùng</p>
            <p>pq.hung@jahwa.co.kr</p>
          </div>
        </div>
        <div className="radio flex justify-center gap-2 relative z-10">
          <div
            onClick={() => setActiveTab("personal")}
            className={`${activeTab === "personal" && "active"}`}
          >
            {t("common.personal")}
          </div>
          <div
            onClick={() => setActiveTab("work")}
            className={`${activeTab === "work" && "active"}`}
          >
            {t("common.work")}
          </div>
        </div>
      </Header>
      <Content className="tab">
        <Col span={24}>
          <Row className="w-full">
            {menuLList.map((item, index) => {
              if (item.type !== activeTab) return "";
              return (
                <MenuItem
                  key={index}
                  link={item.link}
                  title={t("sidebar." + item.title)}
                  display={item.icon}
                  subMenu={item.subMenu}
                />
              );
            })}
          </Row>
        </Col>
      </Content>
    </Wrapper>
  );
}
