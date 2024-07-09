import { Col, DatePicker, Row } from "antd";
// import { useTranslation } from "react-i18next";
import { Wrapper } from "../_components/wrapper";
import { Header } from "../_components/header";
import { Content } from "../_components/content";
import { StyledTable } from "../_components/table";
import { dayOffList } from "./utils";
import HeaderPanel from "../_components/headerPanel";
import { useTranslation } from "react-i18next";

export interface IMobileWageProps {}

export default function MobileDayOff() {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Header className="header">
        <div className="header-options flex justify-between px-4 py-2 relative z-10">
          <div className="title text-white text-2xl">{t("dayOff.title")}</div>
          <div className="options flex gap-2 items-center">
            <DatePicker
              size="large"
              picker="month"
              className="w-32 py-1 bg-white outline-none border-none text-lg font-bold shadow-inner shadow-white text-fuchsia-600"
            />
            {/* <div>
                <FaCalendarAlt color="white" size={20} />
              </div>
              <div className="text-white font-semibold">20/12/2024</div> */}
          </div>
        </div>

        <HeaderPanel>
          <Row className="w-full">
            <Col span={12}>
              <div className="">
                <p className="text-blue-600 text-base">
                  {t("dayOff.lastYear")}: 100
                </p>
              </div>
            </Col>
            <Col span={12}>
              <div className="">
                <p className="text-blue-600 text-base">
                  {t("dayOff.thisYear")}: 100
                </p>
              </div>
            </Col>
            <Col span={12}>
              <div className="">
                <p className="text-purple-600 text-base">X-RAY: 100</p>
              </div>
            </Col>
            <Col span={12}>
              <div className="">
                <p className="text-red-600 text-base">
                  {t("dayOff.used")}: 100
                </p>
              </div>
            </Col>
          </Row>
          <Row className="w-full mt-1">
            <Col span={24}>
              <div className="">
                <p className="text-green-600 text-xl font-bold">
                  {t("dayOff.left")}: 200
                </p>
              </div>
            </Col>
          </Row>
        </HeaderPanel>
      </Header>
      <Content
        className="tab"
        // style={{ height: "calc(100vh - 200px)" }}
      >
        <Col span={24}>
          <Row className="w-full">
            <Col span={24}>
              <div>
                <p className="text-blue-600 italic underline text-base">
                  {t("dayOff.history")}:
                </p>
                <div className="ml-1 mt-1 rounded-t-lg overflow-hidden">
                  <StyledTable className="w-full">
                    <tbody className="relative">
                      <tr className="sticky">
                        <th>{t("dayOff.date")}</th>
                        <th>{t("dayOff.type")}</th>
                        <th>{t("dayOff.reason")}</th>
                      </tr>
                      {dayOffList.map((item, index) => (
                        <tr key={index}>
                          <td>{item.date}</td>
                          <td>{item.type}</td>
                          <td>{item.reason}</td>
                        </tr>
                      ))}
                    </tbody>
                  </StyledTable>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Content>
    </Wrapper>
  );
}
