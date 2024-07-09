import { Avatar, Col, Row } from "antd";
import * as React from "react";
import { IoNotificationsSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
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

export default function MobileProfilePage(props: IMobileHomeProps) {
  const [activeTab, setActiveTab] = React.useState<
    "personal" | "work" | "info"
  >("personal");
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
            <p className="text-xl font-semibold">Jahwa Vina.,co.LTD</p>
            <p>Nguyễn Phúc Hùng</p>
            <p>Chức vụ: Nhân viên</p>
            <p>Bộ Phận: IT</p>
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
            Công ty
          </div>
          <div
            onClick={() => setActiveTab("info")}
            className={`${activeTab === "info" && "active"}`}
          >
            Thông tin
          </div>
        </div>
      </Header>
      <Tab className="tab">
        <Col span={24}>
          <Row className="w-full">
            <div>
              {activeTab === "personal" && (
                <div>
                  <div className="sda">
                    <p className="font-bold text-blue-500 mb-1">
                      Thông tin cá nhân
                    </p>
                    <table>
                      <tr>
                        <td>Mã nhân viên</td>
                        <td>V22406013</td>
                      </tr>
                      <tr>
                        <td>Tên nhân viên</td>
                        <td>Phùng Quốc Hùng</td>
                      </tr>
                      <tr>
                        <td>Ngày sinh</td>
                        <td>11/11/2011</td>
                      </tr>
                      <tr>
                        <td>Giới tính</td>
                        <td>Nam</td>
                      </tr>
                      <tr>
                        <td>Email cá nhân</td>
                        <td>hungchaykkk@gmail.com</td>
                      </tr>
                    </table>
                    <table>
                      <tr>
                        <td>Nơi sinh</td>
                        <td>Đại Đình - Tam Đảo - Vĩnh Phúc</td>
                      </tr>
                      <tr>
                        <td>Thường trú</td>
                        <td>Đại Đình - Tam Đảo - Vĩnh Phúc</td>
                      </tr>
                      <tr>
                        <td>Số liên hệ</td>
                        <td>0123456789</td>
                      </tr>
                      <tr>
                        <td>Số CMND</td>
                        <td>123456789</td>
                      </tr>
                      <tr>
                        <td>Quốc tịch</td>
                        <td>Việt Nam</td>
                      </tr>
                    </table>
                  </div>
                  <div>
                    <p className="font-bold text-blue-500 mb-1">Chi tiết</p>
                    <table>
                      <tr>
                        <td>Tên tiếng Hàn</td>
                        <td>nila sing a xỏong</td>
                      </tr>
                      <tr>
                        <td>Tên tiếng Anh</td>
                        <td>Phung Quoc Hung</td>
                      </tr>
                      <tr>
                        <td>Biệt danh</td>
                        <td>Chày Húng</td>
                      </tr>
                      <tr>
                        <td>Tình trạng hôn nhân</td>
                        <td>Đã kết hôn</td>
                      </tr>
                    </table>
                    <table>
                      <tr>
                        <td>Trình độ Học vấn</td>
                        <td>Đại học</td>
                      </tr>
                      <tr>
                        <td>Chuyên ngành</td>
                        <td>CNTT</td>
                      </tr>
                      <tr>
                        <td>Hạng bằng</td>
                        <td>Xuất sắc</td>
                      </tr>
                      <tr>
                        <td>Trường cuối cùng</td>
                        <td>Trường Đại học cơ sở Nguyễn Trãi</td>
                      </tr>
                    </table>
                  </div>
                </div>
              )}
              {activeTab === "work" && (
                <div>
                  <p className="font-bold text-blue-500 mb-1">
                    Thông tin cơ bản
                  </p>
                  <table>
                    <tr>
                      <td>Mã công ty</td>
                      <td>VN532</td>
                    </tr>
                    <tr>
                      <td>Tên công ty</td>
                      <td>JAHWA VINA CO,. LTD.</td>
                    </tr>
                    <tr>
                      <td>Nơi kinh doanh khai báo</td>
                      <td>JAHWA VINA CO,. LTD.</td>
                    </tr>

                    <tr>
                      <td>Khu vực làm việc</td>
                      <td>JAHWA VINA - 00</td>
                    </tr>
                    <tr>
                      <td>Nơi làm việc</td>
                      <td>JAHWA VINA - 94</td>
                    </tr>
                    <tr>
                      <td>Mã bộ phận nội bộ</td>
                      <td>15</td>
                    </tr>
                  </table>
                  <table>
                    <tr>
                      <td>Mã bộ phận</td>
                      <td>IT - 330700</td>
                    </tr>
                    <tr>
                      <td>Chức vụ</td>
                      <td>Staff - 61</td>
                    </tr>
                    <tr>
                      <td>Chức trách</td>
                      <td>Quản lý</td>
                    </tr>
                    <tr>
                      <td>Thâm niêm</td>
                      <td>Nô</td>
                    </tr>
                    <tr>
                      <td>Bậc lương</td>
                      <td>Q6 - Tiểu tốt</td>
                    </tr>
                    <tr>
                      <td>Hệ số lương</td>
                      <td>01</td>
                    </tr>
                  </table>
                  <p className="font-bold text-blue-500 mb-1">
                    Thông tin cơ bản
                  </p>
                  <table>
                    <tr>
                      <td>Ngày vào tập đoàn</td>
                      <td>2024-06-10</td>
                    </tr>
                    <tr>
                      <td>Ngày vào công ty</td>
                      <td>2024-06-10</td>
                    </tr>
                    <tr>
                      <td>Ngày kết thúc thử việc</td>
                      <td>2024-08-09</td>
                    </tr>
                    <tr>
                      <td>Ngày biến động nhân sự</td>
                      <td>2024-06-10</td>
                    </tr>
                  </table>
                  <table>
                    <tr>
                      <td>Xác nhận kinh nghiệm</td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <td>Ngày thay đổi gần đây</td>
                      <td>Chiệu</td>
                    </tr>
                    <tr>
                      <td>Ngày thôi việc</td>
                      <td>Chiệu</td>
                    </tr>
                    <tr>
                      <td>Lý do thôi việc</td>
                      <td>Chiệu</td>
                    </tr>
                  </table>
                </div>
              )}
              {activeTab === "info" && (
                <div>
                  <p>Nghĩa vụ quân sự</p>
                  <table>
                    <tr>
                      <td>Phân loại quân sự</td>
                      <td>Chiệu - 00</td>
                    </tr>
                    <tr>
                      <td>Thời gian trong quân sự</td>
                      <td>5 năm</td>
                    </tr>
                    <tr>
                      <td>Nơi đầu quân</td>
                      <td>Chệu</td>
                    </tr>
                  </table>
                  <table>
                    <tr>
                      <td>Đơn vị quân sự</td>
                      <td>Chệu</td>
                    </tr>

                    <tr>
                      <td>Cấp bậc quân sự</td>
                      <td>Thượng tá</td>
                    </tr>

                    <tr>
                      <td>Mã nghĩa vụ</td>
                      <td>Chệu</td>
                    </tr>
                  </table>
                  <p>Sức khỏe cá nhân</p>
                  <table>
                    <tr>
                      <td>Chiều cao</td>
                      <td>192 cm</td>
                    </tr>
                    <tr>
                      <td>Cân nặng</td>
                      <td>43 kg</td>
                    </tr>
                    <tr>
                      <td>Nhóm máu</td>
                      <td>X</td>
                    </tr>
                  </table>
                  <table>
                    <tr>
                      <td>Thị lực trái</td>
                      <td>10/10</td>
                    </tr>

                    <tr>
                      <td>Thị lực phải</td>
                      <td>10/10</td>
                    </tr>

                    <tr>
                      <td>Mù màu</td>
                      <td>Màu Sancroxis</td>
                    </tr>
                  </table>
                  <p>Người giới thiệu</p>
                  <table>
                    <tr>
                      <td>Tên</td>
                      <td>Ning la xing a xỉn</td>
                    </tr>
                    <tr>
                      <td>Nơi làm việc</td>
                      <td>Văn phòng chủ tịch nước</td>
                    </tr>
                  </table>
                  <table>
                    <tr>
                      <td>Mối quan hệ</td>
                      <td>Đệ của mị</td>
                    </tr>

                    <tr>
                      <td>Chức vụ</td>
                      <td>Bảo vệ</td>
                    </tr>
                  </table>
                </div>
              )}
            </div>
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
