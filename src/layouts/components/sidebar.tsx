import { Avatar, Button, Col, MenuProps, Row } from "antd";
import * as React from "react";
import { MenuItem } from "src/components/items/home.sidebar";
import styled from "styled-components";

import { useTranslation } from "react-i18next";
import { CiMail } from "react-icons/ci";
import {
  FaRegBuilding,
  FaRegCalendarCheck,
  FaRegCalendarTimes,
  FaUsersCog,
} from "react-icons/fa";
import {
  FaBuildingUser,
  FaChartLine,
  FaRegUser,
  FaUser,
} from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";
import { HiDocumentReport, HiOutlineDocumentReport } from "react-icons/hi";
import { IoMdMail } from "react-icons/io";
import {
  IoDocumentOutline,
  IoHomeOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import { LiaUsersCogSolid } from "react-icons/lia";
import {
  MdEditDocument,
  MdHomeWork,
  MdOutlineHomeWork,
  MdOutlineNewspaper,
} from "react-icons/md";
import { PiNewspaperClipping } from "react-icons/pi";
import {
  RiHome2Fill,
  RiHome2Line,
  RiMoneyDollarCircleFill,
  RiMoneyDollarCircleLine,
} from "react-icons/ri";
import { SiGooglemaps } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import summerLogo from "src/assets/image/summer.jfif";

export interface ISideBarProps {}

type MenuItem = Required<MenuProps>["items"][number];

const Wrapper = styled(Row)`
  /* padding: 4px; */
  /* border-radius: 4px; */
  background-color: white;
  width: 100%;
  height: 100%;
  overflow: auto;
  /* gap: 6px; */
  &.focus-inside {
  }

  box-shadow: -15px -15px 15px rgba(255, 255, 255, 0.2),
    15px 15px 15px rgba(0, 0, 0, 0.1),
    -5px -5px 5px rgba(255, 255, 255, 0.2) inset,
    5px 5px 5px rgba(0, 0, 0, 0.1) inset;
`;

export default function SideBar() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const [language] = React.useState(() => {
    return localStorage.getItem("language") || "vi";
  });

  React.useEffect(() => {
    localStorage.setItem("language", language || "vi");
    i18n.changeLanguage(language || "vi");
  }, [language]);

  return (
    <Wrapper>
      <Col xs={0} lg={24}>
        <div className="image h-20 flex flex-col justify-center items-center">
          <div
            className="w-full flex-1"
            style={{
              background: `url(${summerLogo}) center center / cover no-repeat`,
            }}
          ></div>
        </div>
      </Col>
      <Col xs={24} lg={0} className="" style={{ maxHeight: "80px" }}>
        <div
          className="h-full flex flex-col justify-evenly p-2 border-b bg-gray-600"
          // style={{ background: "white" }}
        >
          <div className="flex items-center gap-3 ">
            <Avatar
              size={"large"}
              src="https://mayanhhoangto.com/wp-content/uploads/2022/08/giu-lung-va-dau-thang.jpg"
            ></Avatar>
            <div className="flex-1">
              <p className="text-sm text-white font-bold line-clamp-1">
                Phùng Văn Hùng
              </p>
              <p className="text-gray-300 text-xs line-clamp-1">
                pv.hung@kk.qq.co
              </p>
            </div>
            <div className="shadow">
              <Button
                onClick={() => navigate("/login")}
                size="small"
                className="h-8 !px-4"
                icon={<IoLogOutOutline />}
                type="primary"
                danger
              ></Button>
            </div>
          </div>
        </div>
      </Col>
      <Col
        span={24}
        style={{ height: "calc(100% - 80px)" }}
        className="flex flex-col gap-2 px-1 pt-2 w-full overflow-auto"
      >
        <MenuItem
          title={t("sidebar.home")}
          link="/home"
          icon={<RiHome2Line size={20} />}
          activeIcon={<RiHome2Fill size={20} />}
          subMenu={[
            {
              title: "Home 1",
              link: "/home/home1",
              icon: <IoHomeOutline size={14} />,
              activeIcon: <RiHome2Fill size={14} />,
            },
            {
              title: "Home 2",
              link: "/home/home2",
              icon: <IoHomeOutline size={14} />,
              activeIcon: <RiHome2Fill size={14} />,
            },
          ]}
        />
        <p className="text-lg font-bold text-pink-500 -mb-1 border-b border-gray-300">
          Cá nhân
        </p>

        <MenuItem
          title={t("sidebar.wage")}
          link="/wage"
          icon={<RiMoneyDollarCircleLine size={20} />}
          activeIcon={<RiMoneyDollarCircleFill size={20} />}
        />
        <MenuItem
          title={t("sidebar.dayOff")}
          link="/day-off"
          icon={<FaRegCalendarTimes size={20} />}
        />
        <MenuItem
          title={t("sidebar.progress")}
          link="/day-off"
          icon={<FaRegCalendarCheck size={20} />}
        />
        <MenuItem
          title={t("sidebar.notification")}
          link="/day-off"
          icon={<MdOutlineNewspaper size={20} />}
        />
        <MenuItem
          title={t("sidebar.seft")}
          link="/profile"
          icon={<FaRegUser size={16} />}
          activeIcon={<FaUser size={16} />}
        />

        <p className="text-lg font-bold text-pink-500 -mb-1 border-b border-gray-300">
          Công việc
        </p>

        <MenuItem
          title={t("sidebar.mail")}
          link="/mail"
          icon={<CiMail size={22} />}
          activeIcon={<IoMdMail size={22} />}
        />
        <MenuItem
          title={t("sidebar.approval")}
          link="/approval"
          icon={<IoDocumentOutline size={22} />}
          activeIcon={<MdEditDocument size={22} />}
        />
        <MenuItem
          title={t("sidebar.plan")}
          link="/plan"
          icon={<FaChartLine size={22} />}
          // activeIcon={<FaChartLine size={22} />}
        />
        <MenuItem
          title={t("sidebar.humanMNG")}
          link="/human-resource"
          icon={<LiaUsersCogSolid size={22} />}
          activeIcon={<FaUsersCog size={22} />}
        />
        <MenuItem
          title={t("sidebar.suplierMNG")}
          link="/supplier"
          icon={<MdOutlineHomeWork size={22} />}
          activeIcon={<MdHomeWork size={22} />}
        />
        <MenuItem
          title={t("sidebar.distributionMNG")}
          link="/distribution"
          icon={<FiMapPin size={22} />}
          activeIcon={<SiGooglemaps size={22} />}
        />
        <MenuItem
          title={t("sidebar.notification")}
          link="/work-new"
          icon={<PiNewspaperClipping className={"rotate-180"} size={22} />}
          activeIcon={<MdOutlineNewspaper size={22} />}
        />
        <MenuItem
          title={t("sidebar.report")}
          link="/report"
          icon={<HiOutlineDocumentReport size={22} />}
          activeIcon={<HiDocumentReport size={22} />}
        />

        <MenuItem
          title={"Jahwa VN"}
          link="/jahwa-vn"
          icon={<FaRegBuilding size={22} />}
          activeIcon={<FaBuildingUser size={22} />}
        />
      </Col>
    </Wrapper>
  );
}
