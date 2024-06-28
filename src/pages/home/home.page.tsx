import { Col, FloatButton, Row, Select } from "antd";
import * as React from "react";
import MainLayout from "src/layouts/main.layout";
import styled, { keyframes } from "styled-components";
import HomeNewItem from "./components/home.new.item";
import { RadioGroup } from "./components/radioGroup";
import Calendar from "react-calendar";
import { FaPersonDigging } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa";
import homeImage from "src/assets/image/doanhnhan.png";
import homeImageBg from "src/assets/image/qqq.png";
import HomeNavigateItem from "./components/home.navigate.item";

import moneyBg from "src/assets/image/money-bg.jpg";
import workerBg from "src/assets/image/worker.jfif";
import relaxBg from "src/assets/image/relax.jfif";
import mirrorBg from "src/assets/image/mirror.webp";
import letterBg from "src/assets/image/letterBG.png";
import contactBg from "src/assets/image/contactBg.jfif";
import { PiNewspaperClippingBold } from "react-icons/pi";
import { useTranslation } from "react-i18next";

export interface ITestProps {}

const Wrapper = styled(Row)`
  height: 100%;
  flex: 1;
  /* overflow: auto; */
  display: flex;
  background-color: white;
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
  border: none;
  /* border-radius: 4px; */
  outline: none !important;

  width: 250px;

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

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Schedule = styled.div``;

const NavigationTab = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export default function Home(props: ITestProps) {
  const [value, onChange] = React.useState<Value>(new Date());
  const [expandCalendar, setExpanCalendar] = React.useState(false);
  const [showNews, setShowNews] = React.useState(false);

  const { t, i18n } = useTranslation();

  return (
    <Wrapper className="">
      <div className="h-full flex-1 relative">
        <MainContent>
          <div
            className="flex gap-4 h-1/2 justify-between"
            style={{
              background: `linear-gradient(
              rgba(2, 215, 231, 0.92) 0%,
              rgba(175, 175, 175, 0.95) 80%,
              rgba(197, 155, 155, 0.97) 100%
            ), url(${homeImageBg}) center center /cover no-repeat`,
            }}
          >
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
            <div
              className="w-1/3 h-full"
              style={{
                background: `url(${homeImage}) center center /cover no-repeat`,
              }}
            ></div>
          </div>
          <NavigationTab className="h-1/2 gap-1 p-1 text-center bg-white">
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
            <Row
              className="h-1/2 overflow-auto"
              // style={{ padding: "4px 5%" }}
            >
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
        </MainContent>

        {/* <div className="flex gap-2 absolute bottom-2 right-2 items-center h-52">
          <div
            onClick={() => {
              setExpanCalendar(!expandCalendar);
            }}
            className="text-gray-600  border-gray-400 bg-white rounded-full border p-3 -mr-16 flex gap-8 cursor-pointer"
          >
            <FaCalendar size={16} />
            qq
          </div>
          <Schedule
            className={`${
              expandCalendar ? "expand " : ""
            }flex gap-2 bottom-2 right-2 items-center h-52`}
          >
            <div
              className="w-48 h-full text-gray-700 p-2 flex-col flex bg-white"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px,rgba(0, 0, 0, 0.23) 0px -2px 4px",
              }}
            >
              <p className="text-center text-xs flex items-center gap-2">
                <FaPersonDigging /> Lịch làm việc
              </p>
              <p className="text-center italic mt-1">
                {value?.toLocaleString().split(",")[0]}
              </p>
              <div className="flex-1 overflow-auto mt-1">
                <div className=" pl-1">1. Đi nhậu bá cháy</div>
                <div className=" pl-1">2. Đi bay cháy phố</div>
                <div className=" pl-1">3. Đi bộ một vòng</div>
                <div className=" pl-1">4. Đi phòng nhà nghỉ</div>
                <div className=" pl-1">5. Đi thi hoa hậu</div>
                <div className=" pl-1">6. Đi show tập kĩ</div>
                <div className=" pl-1">7. Đi Mỹ đấm nhau</div>
                <div className=" pl-1">8. Đi sau người mẫu</div>
                <div className=" pl-1">9. Đi chầu hát đồng</div>
                <div className=" pl-1">10. Đi sông Tô Lịch</div>
                <div className=" pl-1">11. Đi ch... à mà thôi</div>
              </div>

              <div>
                <p></p>
              </div>
            </div>
            <StyledCalendar onChange={onChange} showWeekNumbers value={value} />
          </Schedule>
        </div> */}
      </div>
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
      ></FloatButton>
    </Wrapper>
  );
}
