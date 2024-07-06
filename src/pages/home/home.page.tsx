import { Button, Col, Row, Select, Table } from "antd";
import * as React from "react";
import Calendar from "react-calendar";
import { FaCalendar, FaCoffee, FaInfoCircle } from "react-icons/fa";
import styled from "styled-components";

import Column from "antd/es/table/Column";
import ColumnGroup from "antd/es/table/ColumnGroup";
import { useTranslation } from "react-i18next";
import { MdOutlineBarChart, MdOutlineContentPasteSearch } from "react-icons/md";

export interface ITestProps {}

const Wrapper = styled(Row)`
  height: 100%;
  flex: 1;
  flex-direction: column;
  /* overflow: auto; */
  display: flex;
  /* background-color: white; */
  border-radius: 4px;
`;

const News = styled(Col)`
  height: 100%;
  border-left: 1px solid gray;
  display: flex;
  flex-direction: column;
  transition: all 0.3s linear;
  animation: increaseWidth 0.3s linear;

  @keyframes increaseWidth {
    from {
      margin-right: -200px;
    }
    to {
      margin-right: 0;
    }
  }
`;

const CustomSelect = styled(Select)`
  border: 1px solid gray;
  border-radius: 4px;
  outline: none !important;
  background-color: #2a4cbc !important;
  .ant-select-selector {
    border: none !important;
    outline: none !important;
    background-color: #2a4cbc !important;
    color: #ffffff;
    font-size: 16px;
  }
`;

const StyledCalendar = styled(Calendar)`
  margin-top: 8px;
  border-radius: 2px;
  outline: none !important;

  width: 100%;
  border: 1px solid #ccc;
  padding: 2px 0px;

  .react-calendar__viewContainer {
    flex: 1;
    .react-calendar__month-view {
      height: 100%;

      & > div:last-child {
        height: 100%;
        & > div:last-child {
          height: 100%;
          display: flex;
          flex-direction: column;
          & > div:last-child {
            flex: 1;
            button {
              padding: 4px !important;
              font-size: 14px;
              border: 0.5px solid #eee;
            }
          }
        }
      }
    }
  }

  /* height: 250px; */
  .react-calendar__month-view__weekNumbers {
    /* hide week number */
    display: none !important;
  }
  .react-calendar__tile {
    padding: 2px !important;
  }
  .react-calendar__navigation {
    margin: 0;
    height: 16%;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const StyledTable = styled.table`
  padding: 2px 40px;
  border-radius: 12px;
  width: 100%;
  tr {
    &:first-child td {
      background-color: #00aaff;
      color: white !important;
      font-weight: bold;
      text-align: center;
      font-size: 15px;
      /* border-radius: 12px; */
      td {
        /* border-radius: 12px; */
      }
    }

    &:last-child td {
      font-size: 12px !important;
      color: red;
      font-weight: 500;
      font-style: italic;
    }
  }
  border-collapse: collapse;
  td {
    border-bottom: 1px solid #ededed;
    padding: 2px;
    text-align: center;
    font-size: 12px;

    &:nth-child(1),
    &:nth-child(3) {
      padding-left: 8px;
      text-align: left !important;
      font-weight: bold;
      color: #333;
    }
  }
`;

const Schedule = styled.div``;

const NavigationTab = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const DayDetailTable = styled.table`
  td {
    color: #333;
    padding: 0px 4px;
    font-size: 12px;

    &:first-child {
      font-weight: bold;
    }
  }
`;

const UnderLineSelect = styled(Select)`
  & .ant-select-selector {
    border: none !important;
    box-shadow: none !important;
    outline: none;
    border-bottom: 1px solid gray !important ;
    border-radius: 0 !important;
  }
  /* outline: none !important; */
`;

const DayOffTable = styled(Table)`
  border: 1px solid #aaa;
  /* border-radius */
  th {
    font-size: 12px;
    background: #00aaff !important;
    color: white !important;
    border-radius: 0 !important;
    padding: 4px !important;
    text-align: center;
    border-left: 1px solid gray;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    &:first-child {
      border-left: none;
    }
  }
  td {
    border-left: 0.1px solid gray;
    padding: 1px 8px !important;
    font-size: 14px;

    &:first-child {
      border: none;
    }
  }
  tr:first-child td {
    border-top: 1px solid gray;
  }

  .ant-table-footer {
    padding: 4px 8px;
  }

  .ant-table,
  .ant-spin-nested-loading,
  .ant-spin-container {
    height: 100%;
  }

  .ant-table {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Home() {
  const [value, onChange] = React.useState<Value>(new Date());

  const { t, i18n } = useTranslation();

  return (
    <Wrapper
      className="bg-gray-200  overflow-auto flex-nowrap"
      // gutter={[0, 10]}
    >
      <Col>
        <div className="wrapper p-2 mt-3">
          <div className="flex flex-col relative bg-white">
            <div className="flex justify-center items-center text-gray-400  gap-2 absolute -top-4 right-2 bg-transparent">
              <FaCoffee size={14} />
              <p className="text-center text-xs font-bold italic">Phép năm</p>
            </div>

            <div className="mt-2 px-2 py-1 bg-white">
              <DayOffTable
                className="text-center"
                pagination={false}
                dataSource={[
                  { previos: 0, current: 5, xray: 0, used: 5, left: 1 },
                ]}
              >
                <ColumnGroup title={<p>{t("wage.dayOffStatus")}</p>}>
                  <Column
                    title={t("wage.lastYear")}
                    dataIndex="previos"
                    key="previos"
                  />
                  <Column
                    title={t("wage.thisYear")}
                    dataIndex="current"
                    key="current"
                  />
                  <Column title={t("wage.X-RAY")} dataIndex="xray" key="xray" />
                  <Column title={t("wage.used")} dataIndex="used" key="used" />
                  <Column title={t("wage.left")} dataIndex="left" key="left" />
                </ColumnGroup>
              </DayOffTable>
            </div>
          </div>
        </div>
        <div className="wrapper pt-5">
          <div className=" bg-white relative p-2">
            <div className="flex justify-center items-center text-gray-400  gap-2 absolute -top-4 right-2 bg-transparent">
              <MdOutlineBarChart size={14} />
              <p className="text-center text-xs font-bold italic">
                Thống kê tháng này
              </p>
            </div>
            <StyledTable>
              <tbody className="border">
                <tr>
                  <td>Tiêu chí</td>
                  <td>Ngày</td>
                  <td>Tiêu chí</td>
                  <td>Giờ</td>
                </tr>
                <tr>
                  <td>Làm ngày</td>
                  <td>14.5</td>
                  <td>T/C ngày</td>
                  <td>14.5</td>
                </tr>
                <tr>
                  <td>Làm đêm</td>
                  <td>14.5</td>
                  <td>T/C đêm</td>
                  <td>14.5</td>
                </tr>
                <tr>
                  <td>Chủ nhật</td>
                  <td>14.5</td>
                  <td>T/C Chủ nhật</td>
                  <td>14.5</td>
                </tr>
                <tr>
                  <td>Ngày lễ</td>
                  <td>14.5</td>
                  <td>T/C Ngày lễ</td>
                  <td>14.5</td>
                </tr>
                <tr>
                  <td>Đi muộn (phút/lần)</td>
                  <td>42/2</td>
                  <td>Về sớm (phút/lần)</td>
                  <td>42/2</td>
                </tr>
              </tbody>
            </StyledTable>
          </div>
        </div>

        <div className="wrapper p-2 mt-5">
          <div className="flex flex-col relative bg-white">
            <div className="flex justify-center items-center text-gray-400  gap-2 absolute -top-4 right-2 bg-transparent">
              <FaInfoCircle size={14} />
              <p className="text-center text-xs font-bold italic">
                Chi tiết lịch làm việc
              </p>
            </div>

            <div className="flex justify-end items-center text-indigo-600  gap-2 mt-2 mr-2">
              <UnderLineSelect
                size="small"
                className="w-1/3 "
                options={[{ label: "4/2024", value: "4/2024" }]}
                suffixIcon={<FaCalendar />}
              />
              <Button
                size="small"
                type="primary"
                icon={<MdOutlineContentPasteSearch />}
              >
                Tra cứu
              </Button>
            </div>
            <div className="px-2 py-1 flex items-center">
              <StyledCalendar
                showNeighboringMonth={false}
                // calendarType="islamic"
                tileContent={({ date, view }) => {
                  const day = date.getDate();
                  return (
                    <div className="flex justify-center">
                      <div
                        className={`h-1 w-5/6 flex bg-green-400 ${
                          day > 15 ? "shadow-black r" : "shadow-white"
                        } shadow`}
                      >
                        {date.getDate() === 1 && (
                          <>
                            <div className="bg-cyan-600 flex-1 h-full"></div>
                            <div className="bg-red-600 flex-1 h-full"></div>
                            <div className="bg-orange-500 flex-1 h-full"></div>
                            <div className="bg-pink-500 flex-1 h-full"></div>
                            <div className="bg-gray-500 flex-1 h-full"></div>
                          </>
                        )}
                        {date.getDate() === 2 && (
                          <div className="bg-red-600 flex-1 h-full"></div>
                        )}
                        {date.getDate() === 3 && (
                          <div className="bg-orange-500 flex-1 h-full"></div>
                        )}
                        {date.getDate() === 4 && (
                          <div className="bg-pink-500 flex-1 h-full"></div>
                        )}
                        {date.getDate() === 5 && (
                          <div className="bg-gray-500 flex-1 h-full"></div>
                        )}
                        {date.getDate() === 6 && (
                          <div
                            className="bg-gradient-to-r from-green-400 to-black flex-1 h-full"
                            style={{ fontSize: "20px" }}
                          ></div>
                        )}
                        {date.getDate() === 7 && (
                          <div className="bg-red-600 flex-1 h-full"></div>
                        )}
                        {date.getDate() === 8 && (
                          <div className="bg-cyan-600 flex-1 h-full"></div>
                        )}
                        {date.getDate() === 9 && (
                          <div className="bg-cyan-600 flex-1 h-full"></div>
                        )}
                        {date.getDate() === 18 && (
                          <>
                            <div className="bg-cyan-600 flex-1 h-full"></div>
                            <div className="bg-red-600 flex-1 h-full"></div>
                            <div className="bg-orange-500 flex-1 h-full"></div>
                            <div className="bg-pink-500 flex-1 h-full"></div>
                            <div className="bg-gray-500 flex-1 h-full"></div>
                          </>
                        )}
                      </div>
                    </div>
                  );
                }}
                onChange={onChange}
                showNavigation={false}
                showWeekNumbers={false}
                value={value}
              />

              <div className="w-1/4 flex flex-col items-center justify-center">
                <p
                  style={{ fontSize: "10px" }}
                  className="mb-1 underline italic"
                >
                  Chú thích
                </p>
                <div className="bg-green-400 h-1 w-4"></div>
                <p style={{ fontSize: "10px" }} className="mb-1 text-green-400">
                  Thường
                </p>
                <div className="bg-cyan-600 h-1 w-4"></div>
                <p style={{ fontSize: "10px" }} className="mb-1 text-cyan-600">
                  Tăng ca
                </p>
                <div className="bg-red-600 h-1 w-4"></div>
                <p style={{ fontSize: "10px" }} className="mb-1 text-red-600">
                  Nghỉ KP
                </p>
                <div className="bg-orange-500 h-1 w-4"></div>
                <p
                  style={{ fontSize: "10px" }}
                  className="mb-1 text-orange-500"
                >
                  Nghỉ P
                </p>
                <div className="bg-pink-500 h-1 w-4"></div>
                <p style={{ fontSize: "10px" }} className="mb-1 text-pink-500">
                  Đi muộn
                </p>
                <div className="bg-purple-500 h-1 w-4"></div>
                <p
                  style={{ fontSize: "10px" }}
                  className="mb-1 text-purple-500"
                >
                  Về sớm
                </p>

                <div className="shadow shadow-black h-0.5 bg-transparent w-4"></div>
                <p style={{ fontSize: "10px" }} className="text-xs">
                  Ca đêm
                </p>
              </div>
            </div>
            <div className="px-2 py-1 flex-1 mt-2">
              <div className="border px-2 py-1">
                <p className="underline text-gray-500 text-xs">
                  Chi tiết ngày:
                </p>

                <div className="px-1">
                  <DayDetailTable>
                    <tbody>
                      <tr>
                        <td>Chấm công:</td>
                        <td>8:14:16</td>
                      </tr>
                      <tr>
                        <td>Tan làm:</td>
                        <td>17:51:14</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </DayDetailTable>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>
      {/* <Col className="px-2">
        <div className="wrapper pt-5">
          <div className=" bg-white relative p-2">
            <div className="flex justify-center items-center text-gray-400  gap-2 absolute -top-4 right-2 bg-transparent">
              <MdOutlineBarChart size={14} />
              <p className="text-center text-xs font-bold italic">
                Thống kê tháng này
              </p>
            </div>
            <StyledTable>
              <tbody className="border">
                <tr>
                  <td>Tiêu chí</td>
                  <td>Ngày</td>
                  <td>Tiêu chí</td>
                  <td>Giờ</td>
                </tr>
                <tr>
                  <td>Làm ngày</td>
                  <td>14.5</td>
                  <td>T/C ngày</td>
                  <td>14.5</td>
                </tr>
                <tr>
                  <td>Làm đêm</td>
                  <td>14.5</td>
                  <td>T/C đêm</td>
                  <td>14.5</td>
                </tr>
                <tr>
                  <td>Chủ nhật</td>
                  <td>14.5</td>
                  <td>T/C Chủ nhật</td>
                  <td>14.5</td>
                </tr>
                <tr>
                  <td>Ngày lễ</td>
                  <td>14.5</td>
                  <td>T/C Ngày lễ</td>
                  <td>14.5</td>
                </tr>
                <tr>
                  <td>Đi muộn (phút/lần)</td>
                  <td>42/2</td>
                  <td>Về sớm (phút/lần)</td>
                  <td>42/2</td>
                </tr>
              </tbody>
            </StyledTable>
          </div>
        </div>
      </Col> */}
      {/* <Col className="mt-5">
        <div className="wrapper p-2">
          <div className="flex flex-col relative bg-white">
            <div className="flex justify-center items-center text-gray-400  gap-2 absolute -top-4 right-2 bg-transparent">
              <FaInfoCircle size={14} />
              <p className="text-center text-xs font-bold italic">
                Chi tiết lịch làm việc
              </p>
            </div>

            <div className="flex justify-end items-center text-indigo-600  gap-2 mt-2">
              <UnderLineSelect
                size="small"
                className="w-1/3 "
                options={[{ label: "4/2024", value: "4/2024" }]}
                suffixIcon={<FaCalendar />}
              />
              <Button
                size="small"
                type="primary"
                icon={<MdOutlineContentPasteSearch />}
              >
                Tra cứu
              </Button>
            </div>
            <div className="px-2 py-1 flex items-center">
              <StyledCalendar
                showNeighboringMonth={false}
                // calendarType="islamic"
                tileContent={({ date, view }) => {
                  const day = date.getDate();
                  return (
                    <div className="flex justify-center">
                      <div
                        className={`h-1 w-5/6 flex bg-green-400 ${
                          day > 15 ? "shadow-black r" : "shadow-white"
                        } shadow`}
                      >
                        {date.getDate() === 1 && (
                          <>
                            <div className="bg-cyan-600 flex-1 h-full"></div>
                            <div className="bg-red-600 flex-1 h-full"></div>
                            <div className="bg-orange-500 flex-1 h-full"></div>
                            <div className="bg-pink-500 flex-1 h-full"></div>
                            <div className="bg-gray-500 flex-1 h-full"></div>
                          </>
                        )}
                        {date.getDate() === 2 && (
                          <div className="bg-red-600 flex-1 h-full"></div>
                        )}
                        {date.getDate() === 3 && (
                          <div className="bg-orange-500 flex-1 h-full"></div>
                        )}
                        {date.getDate() === 4 && (
                          <div className="bg-pink-500 flex-1 h-full"></div>
                        )}
                        {date.getDate() === 5 && (
                          <div className="bg-gray-500 flex-1 h-full"></div>
                        )}
                        {date.getDate() === 6 && (
                          <div
                            className="bg-gradient-to-r from-green-400 to-black flex-1 h-full"
                            style={{ fontSize: "20px" }}
                          ></div>
                        )}
                        {date.getDate() === 7 && (
                          <div className="bg-red-600 flex-1 h-full"></div>
                        )}
                        {date.getDate() === 8 && (
                          <div className="bg-cyan-600 flex-1 h-full"></div>
                        )}
                        {date.getDate() === 9 && (
                          <div className="bg-cyan-600 flex-1 h-full"></div>
                        )}
                        {date.getDate() === 18 && (
                          <>
                            <div className="bg-cyan-600 flex-1 h-full"></div>
                            <div className="bg-red-600 flex-1 h-full"></div>
                            <div className="bg-orange-500 flex-1 h-full"></div>
                            <div className="bg-pink-500 flex-1 h-full"></div>
                            <div className="bg-gray-500 flex-1 h-full"></div>
                          </>
                        )}
                      </div>
                    </div>
                  );
                }}
                onChange={onChange}
                showNavigation={false}
                showWeekNumbers={false}
                value={value}
              />

              <div className="w-1/4 flex flex-col items-center justify-center">
                <p
                  style={{ fontSize: "10px" }}
                  className="mb-1 underline italic"
                >
                  Chú thích
                </p>
                <div className="bg-green-400 h-1 w-4"></div>
                <p style={{ fontSize: "10px" }} className="mb-1 text-green-400">
                  Thường
                </p>
                <div className="bg-cyan-600 h-1 w-4"></div>
                <p style={{ fontSize: "10px" }} className="mb-1 text-cyan-600">
                  Tăng ca
                </p>
                <div className="bg-red-600 h-1 w-4"></div>
                <p style={{ fontSize: "10px" }} className="mb-1 text-red-600">
                  Nghỉ KP
                </p>
                <div className="bg-orange-500 h-1 w-4"></div>
                <p
                  style={{ fontSize: "10px" }}
                  className="mb-1 text-orange-500"
                >
                  Nghỉ P
                </p>
                <div className="bg-pink-500 h-1 w-4"></div>
                <p style={{ fontSize: "10px" }} className="mb-1 text-pink-500">
                  Đi muộn
                </p>
                <div className="bg-purple-500 h-1 w-4"></div>
                <p
                  style={{ fontSize: "10px" }}
                  className="mb-1 text-purple-500"
                >
                  Về sớm
                </p>

                <div className="shadow shadow-black h-0.5 bg-transparent w-4"></div>
                <p style={{ fontSize: "10px" }} className="text-xs">
                  Ca đêm
                </p>
              </div>
            </div>
            <div className="px-2 py-1 flex-1 mt-2">
              <div className="border px-2 py-1">
                <p className="underline text-gray-500 text-xs">
                  Chi tiết ngày:
                </p>

                <div className="px-1">
                  {/* <Empty /> */}

      {/* <DayDetailTable>
                    <tbody>
                      <tr>
                        <td>Chấm công:</td>
                        <td>8:14:16</td>
                      </tr>
                      <tr>
                        <td>Tan làm:</td>
                        <td>17:51:14</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </DayDetailTable>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col> */}
      {/* <Col className="mt-0">
        <div className="wrapper p-2">
          <div className="flex flex-col relative bg-white">
            <div className="flex justify-center items-center text-gray-400  gap-2 absolute -top-4 right-2 bg-transparent">
              <FaInfoCircle size={14} />
              <p className="text-center text-xs font-bold italic">Phép năm</p>
            </div>

            <div className="mt-5 px-2 py-1 bg-white">
              <DayOffTable
                className="text-center"
                pagination={false}
                dataSource={[
                  { previos: 0, current: 5, xray: 0, used: 5, left: 1 },
                ]}
              >
                <ColumnGroup title={<p>{t("wage.dayOffStatus")}</p>}>
                  <Column
                    title={t("wage.lastYear")}
                    dataIndex="previos"
                    key="previos"
                  />
                  <Column
                    title={t("wage.thisYear")}
                    dataIndex="current"
                    key="current"
                  />
                  <Column title={t("wage.X-RAY")} dataIndex="xray" key="xray" />
                  <Column title={t("wage.used")} dataIndex="used" key="used" />
                  <Column title={t("wage.left")} dataIndex="left" key="left" />
                </ColumnGroup>
              </DayOffTable>
            </div>
          </div>
        </div>
      </Col> */}
      {/* <Col xs={0} lg={24} className="flex-1">
        <Row
          className="flex justify-between h-full relative"
          style={{
            background: `linear-gradient(
              rgba(2, 215, 231, 0.92) 0%,
              rgba(175, 175, 175, 0.95) 80%,
              rgba(197, 155, 155, 0.97) 100%
            ), url(${homeImageBg}) center center /cover no-repeat`,
          }}
        >
          <Col xs={0} lg={16}>
            <div className="flex gap-4 justify-between">
              <div className="flex flex-col h-full px-8 flex-1 text-center items-center justify-center gap-2">
                <p className="text-6xl font-bold text-center text-blue-700 pt-7 mb-3 ">
                  JAHWA VINA <span className="text-3xl">co.,LTD</span>
                </p>
                <p className="text-xl text-left font-semibold text-red-700">
                  {t("homePage.slogan-1")}
                </p>
                <p className="text-base text-left font-semibold text-blue-900">
                  {t("homePage.slogan-2")}
                </p>
                <p className="text-base text-left font-semibold">
                  {t("homePage.slogan-3")}
                </p>
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div
              className="h-full"
              style={{
                background: `url(${homeImage}) center center /cover no-repeat`,
              }}
            ></div>
          </Col>
        </Row>
      </Col>
      <Col className="flex-1">
        <NavigationTab className="gap-1 p-1 h-full text-center bg-white">
          <Row className="h-1/2">
            <HomeNavigateItem
              background={`linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.9) 100%), url(${moneyBg}) center center / cover no-repeat`}
              title={t("homePage.wageTitle")}
              description={t("homePage.wageDecribe")}
              link="/wage"
            />
            <HomeNavigateItem
              background={`linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.9) 100%), url(${workerBg}) center center / cover no-repeat`}
              title={t("homePage.businessTitle")}
              description={t("homePage.businessDecribe")}
              link="/business"
            />
            <HomeNavigateItem
              background={`linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.9) 100%), url(${relaxBg}) center center / cover no-repeat`}
              title={t("homePage.dayOffTitle")}
              description={t("homePage.dayOffDecribe")}
              link="/day-off"
            />
          </Row>
          <Row className="h-1/2 overflow-auto">
            <HomeNavigateItem
              background={`linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.9) 100%), url(${mirrorBg}) center center / cover no-repeat`}
              title={t("homePage.profileTitle")}
              description={t("homePage.profileDecribe")}
              link="/infomation"
            />
            <HomeNavigateItem
              background={`linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.9) 100%), url(${letterBg}) center center / cover no-repeat`}
              title={t("homePage.mailTitle")}
              description={t("homePage.mailDecribe")}
              link="/infomation"
            />
            <HomeNavigateItem
              background={`linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.9) 100%), url(${contactBg}) center center / cover no-repeat`}
              title={t("homePage.contactTitle")}
              description={t("homePage.contactDecribe")}
              link="/infomation"
            />
          </Row>
        </NavigationTab>
      </Col>

      {showNews && (
        <News span={5}>
          <p className="text-center font-semibold text-lg my-2 italic text-green-600">
            JAHWA NEW
          </p>

          <div className="flex gap-2 px-3 w-full items-center mb-2 pb-2 pl-6   border-b-2 border-gray-300">
            <p className="text-sm font-semibold text-gray-600">Loại tin:</p>
            <CustomSelect
              className="w-32"
              defaultValue={"all"}
              options={[
                { label: "Tất cả", value: "all" },
                { label: "Cộng đồng", value: "social" },
                { label: "Ảnh chia sẻ", value: "image" },
                { label: "Nội bộ", value: "company" },
                { label: "Hiệu suất", value: "immedidate" },
              ]}
            />
          </div>
          <div className="flex-1 overflow-auto pl-2 bg-white">
            <HomeNewItem />
            <HomeNewItem />
            <HomeNewItem />
            <HomeNewItem />
            <HomeNewItem />
            <HomeNewItem />
            <HomeNewItem />
            <HomeNewItem />
            <HomeNewItem />
          </div>
        </News>
      )}

      <FloatButton
        onClick={() => setShowNews(!showNews)}
        type="primary"
        icon={<PiNewspaperClippingBold />}
      ></FloatButton> */}
    </Wrapper>
  );
}
