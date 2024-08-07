import { Button, Col, DatePicker, Row } from "antd";
import * as React from "react";
import Calendar from "react-calendar";
import { FaCalendar } from "react-icons/fa6";
import { MdOutlineContentPasteSearch } from "react-icons/md";
import useCustomNaviage from "src/hooks/useCustomNavigate";
import styled from "styled-components";
import { UnderLineSelect } from "../_components/select";
import { Wrapper } from "../_components/wrapper";
import { Header } from "../_components/header";
import { t } from "i18next";
import { Content } from "../_components/content";

export interface IMobileHomeProps {}

const DayDetailTable = styled.table`
  margin-top: 4px;
  td {
    color: #5e5e5e;
    padding: 0px 4px;
    font-size: 12px;

    &:first-child {
      font-weight: bold;
    }
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

export default function MobileWork(props: IMobileHomeProps) {
  const [calendarValue, setCalendarValue] = React.useState(new Date()); //calendarValue

  const onCalendarChange = (date: Date | null) => {
    date && setCalendarValue(date);
  };

  return (
    <Wrapper>
      <Header className="header">
        <div className="header-options flex justify-between px-4 py-2 relative z-10">
          <div className="title text-white text-2xl">{t("work.title")}</div>
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

        <div className="text-center px-2 pb-4">
          <div
            className={" rounded-xl py-2 px-4"}
            style={{
              background:
                "radial-gradient(circle at 100% 20%, rgb(255 255 255) 0%, rgb(240 255 255) 70%, #fddeff 100%)",
            }}
          >
            <Row className="w-full">
              <Col span={12}>
                <div className="">
                  <p className="text-blue-600 text-lg font-bold">
                    {t("work.salaryRank")}
                  </p>
                  <p className="text-blue-600 text-base">P6 - Q1</p>
                </div>
              </Col>
              <Col span={12}>
                <div className="">
                  <p className="text-red-400 text-lg font-bold">
                    {t("work.position")}:
                  </p>
                  <p className="text-red-400 text-base">Nhân viên</p>
                </div>
              </Col>
            </Row>
            <Row className="w-full mt-1">
              <Col span={24}>
                <div className="">
                  <p className="text-green-600 text-xl font-bold">
                    {t("work.location")}:
                  </p>
                  <p className="text-green-600 text-lg"> PLC Xưởng Message</p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Header>
      <Content className="tab">
        <Col span={24}>
          <Row className="w-full">
            <Col span={24}>
              <p className="italic text-blue-600">{t("work.detail")}:</p>
              <Row className="shadow-inner shadow-blue-800 ml-1 rounded-lg bg-white">
                <Col span={12} className="px-2 py-1">
                  <div className="text-sm text-transparent bg-gradient-to-r from-black to-purple-500 bg-clip-text font-bold">
                    {t("work.day")}
                  </div>
                  <div className="text-gray-700 pl-3 text-sm">14.5 Ngày</div>
                </Col>
                <Col span={12} className="px-2 py-1">
                  <div className="text-sm text-transparent bg-gradient-to-r from-black to-purple-500 bg-clip-text font-bold">
                    {t("work.dayOT")}
                  </div>
                  <div className="text-gray-700 pl-3 text-sm">
                    22 giờ 30 phút
                  </div>
                </Col>
                <Col span={12} className="px-2 py-1">
                  <div className="text-sm text-transparent bg-gradient-to-r from-black to-purple-500 bg-clip-text font-bold">
                    {t("work.night")}
                  </div>
                  <div className="text-gray-700 pl-3 text-sm">14 Ngày</div>
                </Col>
                <Col span={12} className="px-2 py-1">
                  <div className="text-sm text-transparent bg-gradient-to-r from-black to-purple-500 bg-clip-text font-bold">
                    {t("work.nightOT")}
                  </div>
                  <div className="text-gray-700 pl-3 text-sm">8 Giờ</div>
                </Col>
                <Col span={12} className="px-2 py-1">
                  <div className="text-sm text-transparent bg-gradient-to-r from-black to-purple-500 bg-clip-text font-bold">
                    {t("work.sunday")}
                  </div>
                  <div className="text-gray-700 pl-3 text-sm">2 Ngày</div>
                </Col>
                <Col span={12} className="px-2 py-1 opacity-30">
                  <div className="text-sm text-transparent bg-gradient-to-r from-black to-purple-500 bg-clip-text font-bold">
                    {t("work.sundayOT")}
                  </div>
                  <div className="text-gray-700 pl-3 text-sm">0</div>
                </Col>
                <Col span={12} className="px-2 py-1 opacity-30">
                  <div className="text-sm text-transparent bg-gradient-to-r from-black to-purple-500 bg-clip-text font-bold">
                    {t("work.fes")}
                  </div>
                  <div className="text-gray-700 pl-3 text-sm">0</div>
                </Col>
                <Col span={12} className="px-2 py-1 opacity-30">
                  <div className="text-sm text-transparent bg-gradient-to-r from-black to-purple-500 bg-clip-text font-bold">
                    {t("work.fesOT")}
                  </div>
                  <div className="text-gray-700 pl-3 text-sm">0</div>
                </Col>
              </Row>

              <p className="italic text-red-600 mt-2">{t("work.calendar")}</p>

              <Row className="shadow-inner shadow-blue-800 ml-1 rounded-lg bg-white">
                <div className="flex w-full justify-between items-center text-indigo-600 gap-2 my-2 mr-2">
                  <p
                    style={{ fontSize: "12px" }}
                    className="mb-1 px-2 text-gray-400 text-center italic"
                  >
                    {t("work.note")}
                  </p>
                  <div className="flex flex-1 justify-end gap-2">
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
                      {t("work.search")}
                    </Button>
                  </div>
                </div>
                <div className="px-2 py-1 flex flex-col items-center">
                  <div className="w-full flex flex-wrap items-center justify-center">
                    <div className="text-center flex flex-col items-center justify-center w-1/4 px-2">
                      <div className="bg-green-400 h-1 w-6"></div>
                      <p
                        style={{ fontSize: "10px" }}
                        className="mb-1 text-green-400"
                      >
                        {t("work.normal")}
                      </p>
                    </div>

                    <div className="text-center flex flex-col items-center justify-center w-1/4 px-2">
                      {" "}
                      <div className="bg-cyan-600 h-1 w-6"></div>
                      <p
                        style={{ fontSize: "10px" }}
                        className="mb-1 text-cyan-600"
                      >
                        {t("work.overtime")}
                      </p>
                    </div>
                    <div className="text-center flex flex-col items-center justify-center w-1/4 px-2">
                      {" "}
                      <div className="bg-red-600 h-1 w-6"></div>
                      <p
                        style={{ fontSize: "10px" }}
                        className="mb-1 text-red-600"
                      >
                        {t("work.offNoP")}
                      </p>
                    </div>
                    <div className="text-center flex flex-col items-center justify-center w-1/4 px-2">
                      {" "}
                      <div className="bg-orange-500 h-1 w-6"></div>
                      <p
                        style={{ fontSize: "10px" }}
                        className="mb-1 text-orange-500"
                      >
                        {t("work.offP")}
                      </p>
                    </div>

                    <div className="text-center flex flex-col items-center justify-center w-1/4 px-2">
                      {" "}
                      <div className="bg-yellow-500 h-1 w-6"></div>
                      <p
                        style={{ fontSize: "10px" }}
                        className="mb-1 text-yellow-500"
                      >
                        {t("work.offhalf")}
                      </p>
                    </div>

                    <div className="text-center flex flex-col items-center justify-center w-1/4 px-2">
                      <div className="bg-pink-500 h-1 w-6"></div>
                      <p
                        style={{ fontSize: "10px" }}
                        className="mb-1 text-pink-500"
                      >
                        {t("work.comeLate")}
                      </p>
                    </div>
                    <div className="text-center flex flex-col items-center justify-center w-1/4 px-2">
                      {" "}
                      <div className="bg-purple-500 h-1 w-6"></div>
                      <p
                        style={{ fontSize: "10px" }}
                        className="mb-1 text-purple-500"
                      >
                        {t("work.leaveSoon")}
                      </p>
                    </div>
                    <div className="text-center flex flex-col items-center justify-center w-1/4 px-2">
                      {" "}
                      <div className="shadow shadow-black h-1 bg-transparent w-6"></div>
                      <p style={{ fontSize: "10px" }} className="text-xs">
                        {t("work.nightShift")}
                      </p>
                    </div>
                  </div>

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
                    onChange={(props) => onCalendarChange(props)}
                    showNavigation={false}
                    showWeekNumbers={false}
                    value={calendarValue}
                  />
                </div>
                <div className="px-2 py-1 flex-1 mt-2">
                  <div className="border px-2 py-1">
                    <p className="underline text-gray-500 text-xs">
                      {t("work.dayDetail")}:
                    </p>

                    <div className="px-1">
                      <DayDetailTable>
                        <tbody>
                          <tr>
                            <td>{t("work.start")}:</td>
                            <td>8:14:16</td>
                          </tr>
                          <tr>
                            <td>{t("work.finish")}:</td>
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
              </Row>
            </Col>
          </Row>
        </Col>
      </Content>
    </Wrapper>
  );
}

const TabCol = styled(Col)`
  height: 160px;
  padding: 12px 24px;
`;

const TabContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 20px;
  border-top-left-radius: 0;
  border-top-right-radius: 40px;
  background-color: white;
  box-shadow: 3px 8px 16px #bebebe, -2px -4px 8px #f7f7f7;
  height: 100%;
  transition: all 0.2s linear;

  &:hover {
    scale: 1.05;
    background-color: #e7e7ff;
  }

  svg {
    fill: #3d3dff;
    font-size: 42px;
    /* width: 64px;
    height: 64px; */
  }
`;

// type ItemProps = {
//   background?: string;
//   display?: React.ReactNode;
//   link: string;
//   title?: string;
// };

// function TabMenu(props: ItemProps) {
//   const navigate = useCustomNaviage();

//   const handleNavigate = () => {
//     navigate(props.link);
//   };
//   return (
//     <TabCol xs={12} md={8} lg={6} xxl={4}>
//       <TabContent onClick={handleNavigate}>
//         <div className="display" style={{ fontSize: "36px" }}>
//           {props.display}
//         </div>
//         <p className="p-1 text-center text-lg font-semibold text-gray-700 line-clamp-1">
//           {props.title}
//         </p>
//       </TabContent>
//     </TabCol>
//   );
// }
