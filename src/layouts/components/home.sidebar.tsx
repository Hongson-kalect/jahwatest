import * as React from "react";
import { MenuItem } from "src/components/items/home.sidebar";
import styled from "styled-components";
import { Avatar, Button, Col, MenuProps, Row } from "antd";

import summerLogo from "src/assets/image/summer.jfif";
import { FaRegUser, FaUser } from "react-icons/fa6";
import {
  IoHomeOutline,
  IoLogOutOutline,
  IoNewspaperOutline,
  IoNewspaperSharp,
} from "react-icons/io5";
import {
  RiHome2Fill,
  RiHome2Line,
  RiMoneyDollarCircleFill,
  RiMoneyDollarCircleLine,
} from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { CgUserlane } from "react-icons/cg";
import { useTranslation } from "react-i18next";

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

export default function HomeSideBar() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  //   const [language, setLanguage] = React.useState(() => {
  //     return localStorage.getItem("language") || "vi";
  //   });

  //   React.useEffect(() => {
  //     localStorage.setItem("language", language || "vi");
  //     i18n.changeLanguage(language || "vi");
  //   }, [language]);

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
      </Col>
    </Wrapper>
  );
}
