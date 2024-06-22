import * as React from "react";
import HomeSidebarItem from "src/components/items/home.sidebar";
import styled from "styled-components";
import { Menu, MenuProps } from "antd";
import { AiFillHome, AiOutlineMail } from "react-icons/ai";
import { LuAppWindow, LuUser2 } from "react-icons/lu";
import { FiSettings } from "react-icons/fi";
import {
  FaAngleRight,
  FaMoneyBillAlt,
  FaRegMoneyBillAlt,
} from "react-icons/fa";

import summerLogo from "src/assets/image/summer.jfif";
import { FaUserLarge } from "react-icons/fa6";
import { IoIosNotifications, IoIosNotificationsOutline } from "react-icons/io";

export interface IHomeSideBarProps {}

type MenuItem = Required<MenuProps>["items"][number];

const Wrapper = styled.div`
  padding: 4px;
  border-radius: 4px;
  /* background-color: black; */
  width: 200px;
  overflow: auto;
  background-color: #101010;
  display: flex;
  flex-direction: column;
  gap: 4px;
  &.focus-inside {
  }
`;

export default function HomeSideBar(props: IHomeSideBarProps) {
  const [isHover, setIsHover] = React.useState(false);

  return (
    <Wrapper
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="h-32 flex flex-col justify-center items-center -m-1">
        <div
          className="w-full flex-1"
          style={{
            background: `url(${summerLogo}) center center / cover no-repeat`,
          }}
        ></div>
        <p className="font-bold text-xl text-green-600 italic mb-2 w-full text-center">
          JAHWA Nương
        </p>
      </div>
      <div
        className="flex-1 overflow-auto hidden-scroll"
        // style={{ maxHeight: "calc(100vh - 180px)" }}
      >
        <HomeSidebarItem
          title="Home"
          link="/home/main"
          iconL={<AiFillHome className="icon" size={20} />}
          iconR={<FaAngleRight />}
          childs={[
            {
              title: "Home1",
              iconL: <AiOutlineMail className="icon" size={18} />,
              link: "/home/home1",
            },
            {
              title: "Home2",
              iconL: <AiOutlineMail className="icon" size={18} />,
              link: "/home/home2",
            },
          ]}
        />
        <HomeSidebarItem
          title="Thông báo"
          link="/notification/main"
          iconL={<IoIosNotificationsOutline className="icon" size={20} />}
          activeIconL={<IoIosNotifications size={20} />}
          childs={[
            {
              title: "Notify1",
              iconL: <AiOutlineMail className="icon" size={18} />,
              link: "/notification/notification1",
            },
            {
              title: "Notify2",
              iconL: <AiOutlineMail className="icon" size={18} />,
              link: "/notification/notification2",
            },
          ]}
        />
        <HomeSidebarItem
          title="Bảng lương"
          link="/wage/main"
          iconL={<FaRegMoneyBillAlt className="icon" size={20} />}
          activeIconL={<FaMoneyBillAlt size={20} />}
          childs={[
            {
              title: "Lương năm",
              iconL: <AiOutlineMail className="icon" size={18} />,
              link: "/wage/year",
            },
            // {
            //   title: "",
            //   iconL: <AiOutlineMail className="icon" size={18} />,
            //   link: "home1",
            // },
            // {
            //   title: "Child",
            //   iconL: <AiOutlineMail className="icon" size={18} />,
            //   link: "home2",
            // },
          ]}
        />
        <HomeSidebarItem
          title="Công việc"
          link="/job/main"
          iconL={<LuUser2 size={20} />}
          activeIconL={<FaUserLarge size={20} />}
          childs={[
            {
              title: "Thông tin nghỉ",
              iconL: <AiOutlineMail className="icon" size={18} />,
              link: "/job/day-off",
            },
            {
              title: "Thông tin chấm công",
              iconL: <AiOutlineMail className="icon" size={18} />,
              link: "/job/time",
            },
          ]}
        />
        <HomeSidebarItem
          title="Thông tin cá nhân"
          link="/profile/main"
          iconL={<LuUser2 size={20} />}
          activeIconL={<FaUserLarge size={20} />}
          childs={[
            {
              title: "Profile1",
              iconL: <AiOutlineMail className="icon" size={18} />,
              link: "/profile/profile1",
            },
            {
              title: "Profile2",
              iconL: <AiOutlineMail className="icon" size={18} />,
              link: "/profile/profile2",
            },
          ]}
        />
      </div>
    </Wrapper>
  );
}
