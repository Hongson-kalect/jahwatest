import * as React from "react";
import { MenuItem } from "src/components/items/home.sidebar";
import styled from "styled-components";
import { Menu, MenuProps } from "antd";
import { AiFillHome, AiOutlineBell, AiOutlineMail } from "react-icons/ai";
import { LuAppWindow, LuUser2 } from "react-icons/lu";
import { FiSettings } from "react-icons/fi";
import {
  FaAngleRight,
  FaMoneyBillAlt,
  FaRegMoneyBillAlt,
} from "react-icons/fa";

import summerLogo from "src/assets/image/summer.jfif";
import { FaRegUser, FaUser, FaUserLarge } from "react-icons/fa6";
import {
  IoIosNotifications,
  IoIosNotificationsOutline,
  IoMdMail,
} from "react-icons/io";
import {
  IoHomeOutline,
  IoNewspaperOutline,
  IoNewspaperSharp,
  IoSettingsOutline,
  IoSettingsSharp,
} from "react-icons/io5";
import {
  RiHome2Fill,
  RiHome2Line,
  RiMoneyDollarCircleFill,
  RiMoneyDollarCircleLine,
} from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { CgUserlane } from "react-icons/cg";
import { CiMail } from "react-icons/ci";
import { useTranslation } from "react-i18next";

export interface IHomeSideBarProps {}

type MenuItem = Required<MenuProps>["items"][number];

const Wrapper = styled.div`
  /* padding: 4px; */
  border-radius: 4px;
  background-color: #061528;
  width: 200px;
  overflow: auto;
  /* background-color: white; */
  display: flex;
  flex-direction: column;
  gap: 6px;
  &.focus-inside {
  }

  box-shadow: -15px -15px 15px rgba(255, 255, 255, 0.2),
    15px 15px 15px rgba(0, 0, 0, 0.1),
    -5px -5px 5px rgba(255, 255, 255, 0.2) inset,
    5px 5px 5px rgba(0, 0, 0, 0.1) inset;
`;

export default function HomeSideBar(props: IHomeSideBarProps) {
  const [isHover, setIsHover] = React.useState(false);
  const { t } = useTranslation();

  return (
    <Wrapper>
      {/* <MenuItem
        title="Có gì hot"
        link="/home"
        icon={<RiHome2Line />}
        activeIcon={<RiHome2Fill />}
        className="active"
      /> */}
      <div className="h-32 flex flex-col justify-center items-center">
        <div
          className="w-full flex-1"
          style={{
            background: `url(${summerLogo}) center center / cover no-repeat`,
          }}
        ></div>
        {/* <p className="font-bold text-xl text-green-600 italic mb-2 w-full text-center">
          JAHWA Nương
        </p> */}
      </div>
      <div className="flex flex-col gap-2 px-1">
        <MenuItem
          title={t("sideBar.home")}
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
        <MenuItem
          title={t("sideBar.wage")}
          link="/wage"
          icon={<RiMoneyDollarCircleLine size={20} />}
          activeIcon={<RiMoneyDollarCircleFill size={20} />}
        />
        <MenuItem
          title={t("sideBar.business")}
          link="/business"
          icon={<IoNewspaperOutline size={22} />}
          activeIcon={<IoNewspaperSharp size={22} />}
        />
        <MenuItem
          title={t("sideBar.dayOff")}
          link="/day-off"
          icon={<CgUserlane size={22} />}
        />
        <MenuItem
          title={t("sideBar.profile")}
          link="/profile"
          icon={<FaRegUser size={16} />}
          activeIcon={<FaUser size={16} />}
        />
        <MenuItem
          title={t("sideBar.mail")}
          link="/mail"
          icon={<CiMail size={22} />}
          activeIcon={<IoMdMail size={22} />}
        />
        <MenuItem
          title={t("sideBar.setting")}
          link="/notification"
          icon={<IoSettingsOutline size={22} />}
          activeIcon={<IoSettingsSharp size={22} />}
        />
      </div>
    </Wrapper>
  );

  // return (
  //   <Wrapper
  //     onMouseEnter={() => setIsHover(true)}
  //     onMouseLeave={() => setIsHover(false)}
  //   >
  // <div className="h-32 flex flex-col justify-center items-center mb-4">
  //   <div
  //     className="w-full flex-1"
  //     style={{
  //       background: `url(${summerLogo}) center center / cover no-repeat`,
  //     }}
  //   ></div>
  //   {/* <p className="font-bold text-xl text-green-600 italic mb-2 w-full text-center">
  //     JAHWA Nương
  //   </p> */}
  // </div>
  //     <div
  //       className="flex-1 overflow-auto hidden-scroll"
  //       // style={{ maxHeight: "calc(100vh - 180px)" }}
  //     >
  // <HomeSidebarItem
  //   title="Home"
  //   link="/home/main"
  //   iconL={<IoHomeOutline className="icon"/>}
  //   activeIconL={<AiFillHome className="icon"/>}
  //   childs={[
  //     {
  //       title: "Home1",
  //       iconL: <AiOutlineMail className="icon"/>,
  //       link: "/home/home1",
  //     },
  //     {
  //       title: "Home2",
  //       iconL: <AiOutlineMail className="icon"/>,
  //       link: "/home/home2",
  //     },
  //   ]}
  // />
  // <HomeSidebarItem
  //   title="Thông báo"
  //   link="/notification/main"
  //   iconL={<IoIosNotificationsOutline className="icon"/>}
  //   activeIconL={<IoIosNotifications/>}
  //   childs={[
  //     {
  //       title: "Notify1",
  //       iconL: <AiOutlineMail className="icon"/>,
  //       link: "/notification/notification1",
  //     },
  //     {
  //       title: "Notify2",
  //       iconL: <AiOutlineMail className="icon"/>,
  //       link: "/notification/notification2",
  //     },
  //   ]}
  // />
  // <HomeSidebarItem
  //   title="Bảng lương"
  //   link="/wage/main"
  //   iconL={<FaRegMoneyBillAlt className="icon"/>}
  //   activeIconL={<FaMoneyBillAlt/>}
  //   childs={[
  //     {
  //       title: "Lương năm",
  //       iconL: <AiOutlineMail className="icon"/>,
  //       link: "/wage/year",
  //     },
  //     // {
  //     //   title: "",
  //     //   iconL: <AiOutlineMail className="icon"/>,
  //     //   link: "home1",
  //     // },
  //     // {
  //     //   title: "Child",
  //     //   iconL: <AiOutlineMail className="icon"/>,
  //     //   link: "home2",
  //     // },
  //   ]}
  // />
  // <HomeSidebarItem
  //   title="Công việc"
  //   link="/job/main"
  //   iconL={<LuUser2/>}
  //   activeIconL={<FaUserLarge/>}
  //   childs={[
  //     {
  //       title: "Thông tin nghỉ",
  //       iconL: <AiOutlineMail className="icon"/>,
  //       link: "/job/day-off",
  //     },
  //     {
  //       title: "Thông tin chấm công",
  //       iconL: <AiOutlineMail className="icon"/>,
  //       link: "/job/time",
  //     },
  //   ]}
  // />
  // <HomeSidebarItem
  //   title="Thông tin cá nhân"
  //   link="/profile/main"
  //   iconL={<LuUser2/>}
  //   activeIconL={<FaUserLarge/>}
  //   childs={[
  //     {
  //       title: "Profile1",
  //       iconL: <AiOutlineMail className="icon"/>,
  //       link: "/profile/profile1",
  //     },
  //     {
  //       title: "Profile2",
  //       iconL: <AiOutlineMail className="icon"/>,
  //       link: "/profile/profile2",
  //     },
  //   ]}
  // />
  //     </div>
  //   </Wrapper>
  // );
}
