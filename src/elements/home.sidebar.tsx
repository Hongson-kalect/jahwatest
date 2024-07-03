import * as React from "react";
import { MenuItem } from "src/components/items/home.sidebar";
import styled from "styled-components";
import { Avatar, Button, Col, Menu, MenuProps, Row, Select } from "antd";
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
  IoLogOutOutline,
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
import { Navigate, useNavigate } from "react-router-dom";
import { CgUserlane } from "react-icons/cg";
import { CiMail } from "react-icons/ci";
import { useTranslation } from "react-i18next";
import { DefaultOptionType } from "antd/es/select";

import vnFlag from "src/assets/image/vn-flag.jfif";
import krFlag from "src/assets/image/kr-flag.png";
import cnFlag from "src/assets/image/cn-flag.png";
import enFlag from "src/assets/image/en-flag.png";
import { BiLogOutCircle } from "react-icons/bi";

export interface IHomeSideBarProps {}

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

export default function HomeSideBar(props: IHomeSideBarProps) {
  const navigate = useNavigate();
  const [isHover, setIsHover] = React.useState(false);
  const { t, i18n } = useTranslation();

  const [language, setLanguage] = React.useState(() => {
    return localStorage.getItem("language") || "vi";
  });

  React.useEffect(() => {
    localStorage.setItem("language", language || "vi");
    i18n.changeLanguage(language || "vi");
  }, [language]);

  return (
    <Wrapper>
      {/* <MenuItem
        title="Có gì hot"
        link="/home"
        icon={<RiHome2Line />}
        activeIcon={<RiHome2Fill />}
        className="active"
      /> */}

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
              {/* <p
                className="text-blue-400 text-xs opacity-70 text-center"
                style={{ fontSize: "10px" }}
              >
                Tổng quản
              </p> */}
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
          {/* <div className="flex justify-between items-center mt-2">
            <div>
              <Button
                size="small"
                icon={<IoLogOutOutline />}
                type="primary"
                danger
              >
                Đăng xuất
              </Button>
            </div>
          </div> */}
        </div>
      </Col>
      <Col
        span={24}
        style={{ height: "calc(100% - 80px)" }}
        className="flex flex-col gap-2 px-1 pt-2 w-full overflow-auto"
      >
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
        <p className="text-lg font-bold text-pink-500 -mb-1 border-b border-gray-300">
          Cá nhân
        </p>

        <MenuItem
          title={t("sideBar.wage")}
          link="/wage"
          icon={<RiMoneyDollarCircleLine size={20} />}
          activeIcon={<RiMoneyDollarCircleFill size={20} />}
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

        <p className="text-lg font-bold text-pink-500 -mb-1 border-b border-gray-300">
          Công việc
        </p>

        <MenuItem
          title={"Mail"}
          link="/business"
          icon={<IoNewspaperOutline size={22} />}
          activeIcon={<IoNewspaperSharp size={22} />}
        />
        <MenuItem
          title="Phê duyệt"
          link="/business"
          icon={<IoNewspaperOutline size={22} />}
          activeIcon={<IoNewspaperSharp size={22} />}
        />
        <MenuItem
          title="Kế hoạch làm việc"
          link="/business"
          icon={<IoNewspaperOutline size={22} />}
          activeIcon={<IoNewspaperSharp size={22} />}
        />
        <MenuItem
          title="QL Nhân sự"
          link="/business"
          icon={<IoNewspaperOutline size={22} />}
          activeIcon={<IoNewspaperSharp size={22} />}
        />
        <MenuItem
          title="QL Cung ứng"
          link="/business"
          icon={<IoNewspaperOutline size={22} />}
          activeIcon={<IoNewspaperSharp size={22} />}
        />
        <MenuItem
          title="QL Phân phối"
          link="/business"
          icon={<IoNewspaperOutline size={22} />}
          activeIcon={<IoNewspaperSharp size={22} />}
        />
        <MenuItem
          title="Thông báo"
          link="/business"
          icon={<IoNewspaperOutline size={22} />}
          activeIcon={<IoNewspaperSharp size={22} />}
        />
        <MenuItem
          title="Báo cáo"
          link="/business"
          icon={<IoNewspaperOutline size={22} />}
          activeIcon={<IoNewspaperSharp size={22} />}
        />

        <MenuItem
          title="Jahwa Việt Nam"
          link="/business"
          icon={<IoNewspaperOutline size={22} />}
          activeIcon={<IoNewspaperSharp size={22} />}
        />
        {/* <MenuItem
          title={t("sideBar.business")}
          link="/business"
          icon={<IoNewspaperOutline size={22} />}
          activeIcon={<IoNewspaperSharp size={22} />}
        /> */}

        {/* <MenuItem
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
        /> */}
      </Col>
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
