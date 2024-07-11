import { Col, Row, Select } from "antd";
import * as React from "react";
import { RiNotification3Fill } from "react-icons/ri";
import jahwaLogo from "src/assets/image/icon3.png";
import HeaderOption from "src/components/items/header.options";
import styled from "styled-components";

import { DefaultOptionType } from "antd/es/select";
import { useTranslation } from "react-i18next";
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import cnFlag from "src/assets/image/cnFlag.png";
import enFlag from "src/assets/image/enFlag.png";
import krFlag from "src/assets/image/krFlag.png";
import vnFlag from "src/assets/image/vnFlag.jfif";
import { HeaderSearch } from "src/components/search/header.search";

export interface IHomeHeaderProps {}

const Wrapper = styled(Row)`
  height: 42px;
  background: linear-gradient(90deg, #af68f2 0%, #30a19a 87%, #ffffff 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const languages: DefaultOptionType[] = [
  {
    value: "vi",
    label: (
      <div className="flex gap-1 items-center justify-between">
        <div
          className="h-4 w-6"
          style={{
            background: `url(${vnFlag}) center center /contain no-repeat`,
          }}
        ></div>
        <p className="font-semibold" style={{ fontSize: "12px" }}>
          VN
        </p>
      </div>
    ),
  },
  {
    value: "kr",
    label: (
      <div className="flex gap-1 items-center justify-between">
        <div
          className="h-4 w-6"
          style={{
            background: `url(${krFlag}) center center /contain no-repeat`,
          }}
        ></div>
        <p className="font-semibold" style={{ fontSize: "12px" }}>
          KR
        </p>
      </div>
    ),
  },
  {
    value: "cn",
    label: (
      <div className="flex gap-1 items-center justify-between">
        <div
          className="h-4 w-6"
          style={{
            background: `url(${cnFlag}) center center /contain no-repeat`,
          }}
        ></div>
        <p className="font-semibold" style={{ fontSize: "12px" }}>
          CN
        </p>
      </div>
    ),
  },
  {
    value: "en",
    label: (
      <div className="flex gap-1 items-center justify-between">
        <div
          className="h-4 w-6"
          style={{
            background: `url(${enFlag}) center center /contain no-repeat`,
          }}
        ></div>
        <p className="font-semibold" style={{ fontSize: "12px" }}>
          EN
        </p>
      </div>
    ),
  },
];

export default function HomeHeader(props: IHomeHeaderProps) {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const [language, setLanguage] = React.useState(() => {
    return localStorage.getItem("language") || "vi";
  });

  React.useEffect(() => {
    localStorage.setItem("language", language || "vi");
    i18n.changeLanguage(language || "vi");
  }, [language]);

  return (
    <Wrapper>
      <Col xs={4} lg={4} className="h-full">
        <Row className="left flex h-full items-end justify-start">
          <Col></Col>
          <Col
            xs={24}
            md={24}
            lg={{ span: 14 }}
            className="h-full"
            style={{
              background: `url(${jahwaLogo}) center center / contain no-repeat`,
            }}
          ></Col>
          <Col
            xs={0}
            md={{ span: 0 }}
            lg={{ span: 6 }}
            // span={8}
            className="text-green-600 font-bold uppercase text-xs -ml-4 mb-1"
          >
            Jahwa vina
          </Col>
        </Row>
      </Col>
      <Col xs={{ span: 10, offset: 2 }} lg={{ span: 12, offset: 0 }}>
        <HeaderSearch />
      </Col>
      <Col xs={8} lg={8} className="overflow-hidden">
        <Row className="options h-full flex justify-center items-center">
          <Col xs={10} md={10} lg={4}>
            <div className="relative">
              <RiNotification3Fill
                color="#ffaa00"
                size={20}
                className="float-right border bg-white rounded-full p-0.5"
              />
              <p
                className="absolute -top-1 right-3 py-0  text-red-600 bg-white rounded-full px-0.5 shadow shadow-black"
                style={{ fontSize: "10px" }}
              >
                24
              </p>
            </div>
          </Col>
          <Col xs={0} md={0} lg={6} className="px-1">
            <div className="flex flex-col text-xs font-semibold w-full ">
              <div className="text-white overflow-ellipsis text-nowrap overflow-hidden">
                Nguyễn Thùy Linh
              </div>
              <div className="overflow-ellipsis text-nowrap overflow-hidden text-gray-200 pl-2">
                nt.linh@jawha.co.kr
              </div>
            </div>
          </Col>
          <Col xs={14} md={14} lg={3}>
            <div className="mr-2 float-right overflow-hidden">
              {/* <Col xs={0} md={0} lg={4}> */}
              <Select
                size="small"
                suffixIcon={null}
                className="w-full rounded-none !outline-none !border-none !shadow-none"
                value={language}
                onChange={(value) => setLanguage(value)}
                options={languages}
              />
              {/* </Col> */}
              {/* <Tooltip className="" title={<div>?? có j hot?</div>}>
                <Avatar
                  onClick={() => setShowOption(!showOption)}
                  className="rounded-full float-right"
                  src="https://mayanhhoangto.com/wp-content/uploads/2022/08/giu-lung-va-dau-thang.jpg"
                />
              </Tooltip> */}
            </div>
          </Col>
          <Col xs={0} md={0} lg={4}>
            <Select
              className="w-full rounded-none"
              value={language}
              onChange={(value) => setLanguage(value)}
              options={languages}
            />
          </Col>
          <Col xs={0} md={0} lg={2}>
            {" "}
            <HeaderOption
              icon={<FaSignOutAlt color="red" size={28} />}
              onClick={() => navigate("/login")}
              title="Đăng xuất"
            />
          </Col>

          {/* <HeaderOption
            icon={
              <div
                className="text-sm font-semibold text-white 
            px-4 py-1.5 rounded-full bg-green-700"
              >
                GW
              </div>
            }
            onClick={() => window.open("https://gw.jahwa.co.kr/", "_blank")}
            title="Đến GW"
          /> */}
        </Row>
      </Col>
    </Wrapper>
  );
}
