import { Col, DatePicker, Row } from "antd";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { numberToCurrency } from "src/utils/utils";
import { Wrapper } from "../_components/wrapper";
import { minus, payFor } from "./utils";
import { Header } from "../_components/header";
import { Content } from "../_components/content";
import HeaderPanel from "../_components/headerPanel";
import Statistic from "../_components/statistic";

export interface IMobileWageProps {}

export default function MobileWage() {
  const { t } = useTranslation();

  const [totalPay] = React.useState(
    payFor.reduce((a, b) => {
      return a + (b.amount || 0);
    }, 0)
  );
  const [totalMinus] = React.useState(
    minus.reduce((a, b) => {
      return a + (b.amount || 0);
    }, 0)
  );

  return (
    <Wrapper>
      <Header className="header">
        <div className="header-options flex justify-between px-4 py-2 relative z-10">
          <div className="title text-white text-2xl">{t("wage.title")}</div>
          <div className="options flex gap-2 items-center">
            <DatePicker
              size="large"
              picker="month"
              className="w-32 py-1 bg-white outline-none border-none text-lg font-bold shadow-inner shadow-white text-fuchsia-600"
            />
          </div>
        </div>

        <HeaderPanel>
          <Row className="w-full">
            <Col span={12}>
              <div>
                <p className="text-blue-600 text-lg">
                  {t("wage.totalPayment")}
                </p>
                <p className="text-blue-700 text-base">
                  {numberToCurrency(7123456)}
                </p>
              </div>
            </Col>
            <Col span={12}>
              <div>
                <p className="text-red-400 text-lg">{t("wage.totalDeduct")}</p>
                <p className="text-red-500 text-base">
                  {numberToCurrency(2123456)}
                </p>
              </div>
            </Col>
          </Row>
          <Row className="w-full mt-1">
            <Col span={24}>
              <div>
                <p className="text-green-600 text-xl font-bold">
                  {t("wage.total")}
                </p>
                <p className="text-green-700 text-xl">
                  {numberToCurrency(5000000)}
                </p>
              </div>
            </Col>
          </Row>
        </HeaderPanel>
      </Header>
      <Content className="tab">
        <Col span={24}>
          <Row className="w-full">
            <Col span={24}>
              <p className="italic text-blue-600">{t("wage.payDetail")}:</p>
              <Row className="shadow-inner shadow-blue-800 ml-1 rounded-lg bg-white">
                {payFor.map((pay, index) => {
                  return (
                    <Col key={index} span={12} className="px-2 py-1">
                      <Statistic
                        type="primary"
                        title={
                          pay.payFor[0].toUpperCase() +
                          pay.payFor.slice(1).toLowerCase()
                        }
                        content={
                          <>
                            {numberToCurrency(pay.amount)}
                            <span className="text-xs text-green-600 italic">
                              {" "}
                              {(pay.hour !== 0 || pay.munite !== 0) &&
                                `(${pay.hour ? pay.hour + "h" : ""}${
                                  pay.munite ? " " + pay.munite + "m" : ""
                                })`}
                            </span>
                          </>
                        }
                      />
                      {/* <div className="text-sm text-transparent bg-gradient-to-r from-black to-purple-500 bg-clip-text font-bold">
                        {pay.payFor[0].toUpperCase() +
                          pay.payFor.slice(1).toLowerCase()}
                      </div>
                      <div className="text-gray-700 px-3 text-sm">
                        {numberToCurrency(pay.amount)}{" "}
                        <span className="text-xs text-green-600 italic">
                          {(pay.hour !== 0 || pay.munite !== 0) &&
                            `(${pay.hour ? pay.hour + "h" : ""}${
                              pay.munite ? " " + pay.munite + "m" : ""
                            })`}
                        </span>
                      </div> */}
                    </Col>
                  );
                })}
                <Col span={24} className="px-2 py-1">
                  <div className="text-blue-600 font-bold text-base">
                    {t("wage.totalPayment")}:{" "}
                    <span className="text-sm">
                      {numberToCurrency(totalPay)}
                    </span>
                  </div>
                </Col>
              </Row>

              <p className="italic text-red-600 mt-2">
                {t("wage.deductDetail")}:
              </p>

              <Row className="shadow-inner shadow-red-800 ml-1 rounded-lg bg-white">
                {minus.map((minusItem, index) => {
                  return (
                    <Col key={index} span={12} className="px-2 py-1">
                      <Statistic
                        type="error"
                        title={
                          minusItem.payFor[0].toUpperCase() +
                          minusItem.payFor.slice(1).toLowerCase()
                        }
                        content={<>{numberToCurrency(minusItem.amount)}</>}
                      />
                    </Col>
                  );
                })}

                <Col span={24} className="px-2 py-1">
                  <div className="text-red-600 font-bold text-base">
                    {t("wage.totalDeduct")}:{" "}
                    <span className="text-sm">
                      {numberToCurrency(totalMinus)}
                    </span>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Content>
    </Wrapper>
  );
}
