import { Avatar, Col, Image, Row } from "antd";
import * as React from "react";
import { AiFillPicture } from "react-icons/ai";
import { FaBorderAll, FaBuilding } from "react-icons/fa6";
import { IoIosFlash } from "react-icons/io";
import { IoNotificationsSharp, IoShareSocial } from "react-icons/io5";
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
      padding: 4px 8px 0;
      color: white;
      font-size: 18px;
      border-top-right-radius: 12px;
      border-top-left-radius: 12px;
      transition: all 0.3s linear;
      width: 100%;
      flex: 1;
      overflow: hidden;

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 4px;

      p {
        font-size: 0px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      &.active {
        font-weight: bold;
        background-color: white;
        color: #6a6af1;
        /* width: 60%; */
        flex: 4;
        p {
          font-size: 16px;
          display: block;
        }
      }

      p {
        display: none;
      }
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

const news = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  title: `Tin nóng hệ social qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe ${
    i + 1
  }`,
  description:
    "Nội dung này thường chỉ show cho mấy máy màn hình to v beep để có cái nhìn lướt qua về cái tin mới của nó. Còn mấy máy màn hình lỏ lỏ thì mút tay ấy mà đọc?",
  uploader: `Bởi bộ tài nguyên và môi trường, cầm đầu bởi Hùng ${i + 1}`,
  image: `https://wallup.net/wp-content/uploads/2016/01/111509-landscape-nature.jpg?${
    i + 1
  }`,
  content: "JAHWA NƯƠNG",
  date: new Date(Date.now() - i * 1000 * 3600 * 24).toISOString().split("T")[0],
  type: ["social", "company", "temporary", "picture"][
    Math.floor(Math.random() * 4)
  ],
}));

export default function MobileNotification(props: IMobileHomeProps) {
  const [activeTab, setActiveTab] = React.useState<
    "all" | "social" | "company" | "temporary" | "picture"
  >("all");
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
        {/* <div className="user flex items-center px-4 mb-4 gap-4 relative z-10">
          <Avatar
            src="https://th.bing.com/th/id/OIP._nS5D09ektBnLxu3dUy22AHaEK?rs=1&pid=ImgDetMain"
            size={"large"}
            className="w-14 h-14 border-2 border-white"
          ></Avatar>
          <div className="text-white">
            <p className="text-xl font-semibold">Phùng Quốc Hùng</p>
            <p>pq.hung@jahwa.co.kr</p>
          </div>
        </div> */}

        {/* <RotateMenu>
          <p className="text-white">
            <span>Menu thu 1</span>
          </p>
          <p className="text-white">
            <span>Menu thu 2</span>
          </p>
          <p className="text-white">
            <span>Menu thu 3</span>
          </p>
          <p className="text-white">
            <span>Menu thu 4</span>
          </p>
          <p className="text-white">
            <span>Menu thu 5</span>
          </p>
        </RotateMenu> */}

        <div className="radio w-full flex justify-center gap-2 relative z-10">
          <div
            onClick={() => setActiveTab("all")}
            className={`${activeTab === "all" && "active"}`}
          >
            <FaBorderAll />
            <p>Tất cả</p>
          </div>
          <div
            onClick={() => setActiveTab("social")}
            className={`${activeTab === "social" && "active"}`}
          >
            <IoShareSocial />
            <p> Xã hội</p>
          </div>
          <div
            onClick={() => setActiveTab("company")}
            className={`${activeTab === "company" && "active"}`}
          >
            <FaBuilding />
            <p>Công ty</p>
          </div>
          <div
            onClick={() => setActiveTab("temporary")}
            className={`${activeTab === "temporary" && "active"}`}
          >
            <IoIosFlash />
            <p>Tức thời</p>
          </div>
          <div
            onClick={() => setActiveTab("picture")}
            className={`${activeTab === "picture" && "active"}`}
          >
            <AiFillPicture />
            <p>Up ảnh :V</p>
          </div>
        </div>
      </Header>
      <Tab className="tab">
        <Col span={24}>
          <Row className="w-full">
            {news.map((newItem, index) => {
              if (activeTab === "all" || activeTab === newItem.type)
                return <NewMenu key={index} newItem={newItem} />;
            })}
          </Row>
        </Col>
      </Tab>
    </Wrapper>
  );
}

const NewItems = styled.div``;
type NewItemProps = {
  newItem: {
    id: number;
    title: string;
    description: string;
    uploader: string;
    image: string;
    content: string;
    date: string;
    type: string;
  };
};

const NewMenu = ({ newItem }: NewItemProps) => {
  return (
    <NewItems>
      <div className="flex gap-4 my-2 bg-white p-0.5">
        <div className="w-1/3 max-w-xs h-20">
          <div
            className="w-full h-20"
            style={{
              background: `url(${newItem.image}) center center /cover no-repeat`,
            }}
          />
        </div>
        <div className="content flex-1 flex flex-col justify-between">
          <p
            className="text-base font-bold line-clamp-1"
            style={{ lineHeight: "16px" }}
          >
            {newItem.title}
          </p>
          <p className="line-clamp-2 mb-1 px-1" style={{ lineHeight: "16px" }}>
            {newItem.description}
          </p>
          <div
            className="creator flex justify-between px-1"
            style={{ fontSize: "11px" }}
          >
            <p className="flex-1 line-clamp-1 font-bold mr-6 text-slate-400">
              {newItem.uploader}
            </p>
            <p className="text-slate-400">{newItem.date}</p>
          </div>
        </div>
      </div>
    </NewItems>
  );
};
