import { Avatar, Col, FloatButton, Row } from "antd";
import * as React from "react";
import { BiSolidReport, BiUserPin } from "react-icons/bi";
import { FaUsersCog } from "react-icons/fa";
import {
  FaBars,
  FaBuildingUser,
  FaCalendarCheck,
  FaCalendarXmark,
  FaChartLine,
  FaSackDollar,
  FaUser,
} from "react-icons/fa6";
import { IoMail, IoNotificationsSharp } from "react-icons/io5";
import {
  MdEditDocument,
  MdMapsHomeWork,
  MdOutlineNewspaper,
} from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import HomeSideBar from "src/elements/home.sidebar";
import { MobileNav } from "src/layouts/main.layout";
import { useAppStore } from "src/store/app";
import styled from "styled-components";

export interface IMobileHomeProps {}

const Wrapper = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  width: 100vw;
  height: 100dvh;
  /* padding: 4px; */
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 200px;
  background: radial-gradient(
    circle at 100% 20%,
    #859bbf 0%,
    #7e9fdd 30%,
    #7478db 60%,
    #6e50dc 100%
  );
  border-radius: 8px;

  .radio {
    div {
      text-align: center;
      padding: 2px 8px 0;
      color: white;
      font-size: 18px;
      border-top-right-radius: 12px;
      border-top-left-radius: 12px;
      transition: all 0.3s linear;
      width: 120px;
    }

    .active {
      font-weight: bold;
      background-color: white;
      color: #6a6af1;
    }
  }
`;
const Tab = styled.div`
  /* flex: 1; */
  min-height: calc(100dvh - 200px);
  /* overflow: auto; */
  padding: 12px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    #eaeaea 70%,
    #c6c6c6 100%
  );
`;

const menuLList = [
  {
    title: "Bảng lương",
    link: "/m/wage",
    icon: <FaSackDollar />,
    type: "personal",
  },
  {
    title: "Ngày nghỉ",
    link: "/m/day-off",
    icon: <FaCalendarXmark />,
    type: "personal",
  },
  {
    // title: "L/S Chấm công",
    title: "C/V Hiện tại",
    link: "/profile",
    icon: <FaCalendarCheck />,
    type: "personal",
  },
  {
    title: "Thông báo",
    link: "/profile",
    icon: <MdOutlineNewspaper />,
    type: "personal",
  },
  {
    title: "Cá nhân",
    link: "/profile",
    icon: <FaUser />,
    type: "personal",
  },
  {
    title: "Thư từ",
    link: "/profile",
    icon: <IoMail />,
    type: "work",
  },
  {
    title: "Phê duyệt",
    link: "/profile",
    icon: <MdEditDocument />,
    type: "work",
  },
  {
    title: "Kế hoạch",
    link: "/profile",
    icon: <FaChartLine />,
    type: "work",
  },
  {
    title: "QL Nhân lực",
    link: "/profile",
    icon: <FaUsersCog />,
    type: "work",
  },
  {
    title: "QL Cung ứng",
    link: "/profile",
    icon: <MdMapsHomeWork />,
    type: "work",
  },
  {
    title: "QL Phân phối",
    link: "/profile",
    icon: <SiGooglemaps />,
    type: "work",
  },
  {
    title: "Thông báo",
    link: "/profile",
    icon: <MdOutlineNewspaper />,
    type: "work",
  },
  {
    title: "Báo cáo",
    link: "/profile",
    icon: <BiSolidReport />,
    type: "work",
  },
  {
    title: "Jahwa Vietnam",
    link: "/profile",
    icon: <FaBuildingUser />,
    type: "work",
  },
];

export default function MobileHome(props: IMobileHomeProps) {
  const [activeTab, setActiveTab] = React.useState<"personal" | "work">(
    "personal"
  );
  return (
    <Wrapper>
      <Header className="header">
        <div className="header-options flex justify-between px-4 py-2 relative z-10">
          <div className="title text-white text-2xl">JAHWA NƯƠNG</div>
          <div className="options flex gap-4">
            <div>
              <IoNotificationsSharp color="white" size={28} />
            </div>
            <div>
              <IoNotificationsSharp color="white" size={28} />
            </div>
          </div>
        </div>
        <div className="user flex items-center px-4 mb-4 gap-4 relative z-10">
          <Avatar
            src="https://th.bing.com/th/id/OIP._nS5D09ektBnLxu3dUy22AHaEK?rs=1&pid=ImgDetMain"
            size={"large"}
            className="w-14 h-14 border-2 border-white"
          ></Avatar>
          <div className="text-white">
            <p className="text-xl font-semibold">Phùng Quốc Hùng</p>
            <p>pq.hung@jahwa.co.kr</p>
          </div>
        </div>
        <div className="radio flex justify-center gap-2 relative z-10">
          <div
            onClick={() => setActiveTab("personal")}
            className={`${activeTab === "personal" && "active"}`}
          >
            Cá nhân
          </div>
          <div
            onClick={() => setActiveTab("work")}
            className={`${activeTab === "work" && "active"}`}
          >
            Công việc
          </div>
        </div>
      </Header>
      <Tab className="tab">
        <Col span={24}>
          <Row className="w-full">
            {menuLList.map((item, index) => {
              if (item.type !== activeTab) return "";
              return (
                <TabMenu
                  key={index}
                  link={item.link}
                  title={item.title}
                  display={item.icon}
                />
              );
            })}
          </Row>
        </Col>
      </Tab>
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

type ItemProps = {
  background?: string;
  display?: React.ReactNode;
  link: string;
  title?: string;
};

function TabMenu(props: ItemProps) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(props.link);
  };
  return (
    <TabCol xs={12} md={8} lg={6} xxl={4}>
      <TabContent onClick={handleNavigate}>
        <div className="display" style={{ fontSize: "36px" }}>
          {props.display}
        </div>
        <p className="p-1 text-center text-lg font-semibold text-gray-700 line-clamp-1">
          {props.title}
        </p>
      </TabContent>
    </TabCol>
  );
}
