import { Col, DatePicker, Row } from "antd";
import * as React from "react";
import styled from "styled-components";

export interface IMobileHeaderProps {
  title: string;
}

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

export default function MobileHeader(props: IMobileHeaderProps) {
  return (
    <Header className="header">
      <div className="header-options flex justify-between px-4 py-2 relative z-10">
        <div className="title text-white text-2xl">THÀNH TÍCH</div>
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
                <p className="text-blue-600 text-lg font-bold">Bậc lương</p>
                <p className="text-blue-600 text-base">P6 - Q1</p>
              </div>
            </Col>
            <Col span={12}>
              <div className="">
                <p className="text-red-400 text-lg font-bold">Chức vụ:</p>
                <p className="text-red-400 text-base">Nhân viên</p>
              </div>
            </Col>
          </Row>
          <Row className="w-full mt-1">
            <Col span={24}>
              <div className="">
                <p className="text-green-600 text-xl font-bold">Vị trí:</p>
                <p className="text-green-600 text-lg"> PLC Xưởng Message</p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Header>
  );
}
