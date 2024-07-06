import { Col, DatePicker, Row } from "antd";
// import { useTranslation } from "react-i18next";
import styled from "styled-components";

export interface IMobileWageProps {}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100dvh;
`;
const Header = styled.div`
  display: flex;
  position: sticky;
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
const Tab = styled(Row)`
  flex: 1;
  /* overflow: auto; */
  padding: 12px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    #f4fff2 70%,
    #edffee 100%
  );
`;

const StyledTable = styled.table`
  border: 1px solid #aaa;
  /* border-radius */
  th {
    color: white;
    font-size: 16px;
    font-weight: 400;
    background: #706edf !important;
    border-radius: 0 !important;
    padding: 4px !important;
    text-align: center;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
  }
  td {
    color: #4a4a4a;
    border-bottom: 0.1px solid #ddd;
    padding: 2px 6px !important;
    font-size: 15px;

    &:first-child {
      /* border: none; */
      text-align: center;
    }
    &:nth-child(2) {
      text-align: center;
    }
  }
  tr {
    transition: all 0.3s linear;
    &:first-child td {
      border-top: 1px solid gray;
    }

    &:hover {
      background-color: #f6f6f6;
    }
  }
`;

export default function MobileDayOff() {
  // const { t, i18 } = useTranslation();

  return (
    <Wrapper>
      <Header className="header">
        <div className="header-options flex justify-between px-4 py-2 relative z-10">
          <div className="title text-white text-2xl">NGÀY NGHỈ</div>
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
                  <p className="text-blue-600 text-base">Phép năm trước: 100</p>
                </div>
              </Col>
              <Col span={12}>
                <div className="">
                  <p className="text-blue-600 text-base">Phép năm nay: 100</p>
                </div>
              </Col>
              <Col span={12}>
                <div className="">
                  <p className="text-purple-600 text-base">X-RAY: 100</p>
                </div>
              </Col>
              <Col span={12}>
                <div className="">
                  <p className="text-red-600 text-base">Đã sử dụng: 100</p>
                </div>
              </Col>
            </Row>
            <Row className="w-full mt-1">
              <Col span={24}>
                <div className="">
                  <p className="text-green-600 text-xl font-bold">
                    PHÉP CÒN LẠI: 200
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Header>
      <Tab className="tab">
        <Col span={24}>
          <Row className="w-full">
            <Col span={24}>
              <div>
                <p className="text-blue-600 italic underline text-base">
                  Lịch sử nghỉ:
                </p>
                <div className="ml-1 mt-1 rounded-t-lg overflow-hidden">
                  <StyledTable className="w-full">
                    <tbody>
                      <tr>
                        <th>Ngày</th>
                        <th>Loại</th>
                        <th>Lý do</th>
                      </tr>
                      <tr>
                        <td>13/07/2024</td>
                        <td>NP</td>
                        <td>Thừa phép thì nghỉ thôi, hỏi qq</td>
                      </tr>
                      <tr>
                        <td>13/07/2024</td>
                        <td>NP</td>
                        <td>Thừa phép thì nghỉ thôi, hỏi qq</td>
                      </tr>
                      <tr>
                        <td>13/07/2024</td>
                        <td>NP</td>
                        <td>Thừa phép thì nghỉ</td>
                      </tr>
                    </tbody>
                  </StyledTable>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Tab>
    </Wrapper>
  );
}
