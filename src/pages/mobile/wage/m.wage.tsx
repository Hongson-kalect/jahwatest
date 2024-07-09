import { Col, DatePicker, Row, Table } from "antd";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { numberToCurrency } from "src/utils/utils";
import styled from "styled-components";

export interface IMobileWageProps {}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100dvh;
  /* padding: 4px; */
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
  border: 2px solid #aaa;
  /* border-radius */
  th {
    background: #ccc !important;
    border-radius: 0 !important;
    padding: 4px !important;
    text-align: center;
    border-left: 1px solid gray;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    &:first-child {
      border-left: none;
    }
  }
  td {
    border-left: 0.1px solid gray;
    padding: 1px 8px !important;
    font-size: 15px;

    &:first-child {
      border: none;
    }
  }
  tr:first-child td {
    border-top: 1px solid gray;
  }

  .ant-table-footer {
    padding: 4px 8px;
  }

  .ant-table,
  .ant-spin-nested-loading,
  .ant-spin-container {
    height: 100%;
  }

  .ant-table {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const payFor = [
  {
    payFor: "LCB NGÀY LÀM VIỆC",
    amount: "5,855,000",
    hour: "-",
    munite: "-",
  },
  {
    payFor: "THƯỞNG LÀM ĐÊM",
    amount: "150,000",
    hour: "15",
    munite: "-",
  },
  {
    payFor: "PC SINH HOẠT",
    amount: "358,158",
    hour: "-",
    munite: "-",
  },
  {
    payFor: "THƯỞNG CHUYÊN CẦN",
    amount: "100,000",
    hour: "1",
    munite: "-",
  },
  {
    payFor: "PHC CA ĐÊM_K(30%)",
    amount: "811,947",
    hour: "90",
    munite: "-",
  },
  {
    payFor: "PC TĂNG CA (150%)",
    amount: "969,825",
    hour: "21",
    munite: "30",
  },
  {
    payFor: "PC TĂNG CA ĐÊM (200%)",
    amount: "842,020",
    hour: "14",
    munite: "-",
  },
  {
    payFor: "PC LÀM CHU NHAT (200%)",
    amount: "481,154",
    hour: "8",
    munite: "-",
  },
  {
    payFor: "PC TĂNG CA CN (200%)",
    amount: "60,144",
    hour: "1",
    munite: "-",
  },
  {
    payFor: "PC TĂNG THÊM (150%)",
    amount: "225,541",
    hour: "5",
    munite: "-",
  },
  {
    payFor: "HỖ TRỢ ĂN (150%)",
    amount: "251,803",
    hour: "5",
    munite: "-",
  },
  {
    payFor: "HỖ TRỢ ĂN (200%)",
    amount: "751,803",
    hour: "12",
    munite: "-",
  },
  {
    payFor: "HỖ TRỢ LÀM ĐÊM (150%)",
    amount: "112,770",
    hour: "2",
    munite: "30",
  },
];

const minus = [
  {
    payFor: "LCB NGÀY LÀM VIỆC",
    amount: "5,855,000",
    hour: "-",
    munite: "-",
  },
  {
    payFor: "THƯỞNG LÀM ĐÊM",
    amount: "150,000",
    hour: "15",
    munite: "-",
  },
  {
    payFor: "PC SINH HOẠT",
    amount: "358,158",
    hour: "-",
    munite: "-",
  },
  {
    payFor: "THƯỞNG CHUYÊN CẦN",
    amount: "100,000",
    hour: "1",
    munite: "-",
  },
  {
    payFor: "PHC CA ĐÊM_K(30%)",
    amount: "811,947",
    hour: "90",
    munite: "-",
  },
];
export default function MobileWage(props: IMobileWageProps) {
  const { t, i18 } = useTranslation();
  const [activeTab, setActiveTab] = React.useState<"personal" | "work">(
    "personal"
  );

  const [totalPay] = React.useState(
    payFor.reduce((a, b) => {
      console.log(a, Number(b.amount.replaceAll(",", "")));
      return a + (Number(b.amount.replaceAll(",", "")) || 0);
    }, 0)
  );
  const [totalMinus] = React.useState(
    minus.reduce((a, b) => {
      return a + (Number(b.amount.replaceAll(",", "")) || 0);
    }, 0)
  );

  return (
    <Wrapper>
      <Header className="header">
        <div className="header-options flex justify-between px-4 py-2 relative z-10">
          <div className="title text-white text-2xl">BẢNG LƯƠNG</div>
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
                  <p className="text-blue-600 text-lg">Tổng chi trả</p>
                  <p className="text-blue-700 text-base">
                    {numberToCurrency(7123456)}
                  </p>
                </div>
              </Col>
              <Col span={12}>
                <div className="">
                  <p className="text-red-400 text-lg">Tổng khấu trừ</p>
                  <p className="text-red-500 text-base">
                    {numberToCurrency(2123456)}
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="w-full mt-1">
              <Col span={24}>
                <div className="">
                  <p className="text-green-600 text-xl font-bold">
                    Lương thực lĩnh
                  </p>
                  <p className="text-green-700 text-xl">
                    {numberToCurrency(5000000)}
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
              <p className="italic text-blue-600">Chi tiết chi trả:</p>
              <Row className="shadow-inner shadow-blue-800 ml-1 rounded-lg bg-white">
                <Col span={12} className="px-2 py-1">
                  <div className="text-sm text-transparent bg-gradient-to-r from-black to-purple-500 bg-clip-text font-bold">
                    Lương cơ bản
                  </div>
                  <div className="text-gray-700 pl-3 text-sm">
                    {numberToCurrency(5855000)}
                  </div>
                </Col>
                <Col span={12} className="px-2 py-1">
                  <div className="text-sm text-transparent bg-gradient-to-r from-black to-purple-500 bg-clip-text font-bold">
                    Thưởng làm đêm
                  </div>
                  <div className="text-gray-700 pl-3 text-sm">
                    {numberToCurrency(150000)}
                    {" (15h)"}
                  </div>
                </Col>
                <Col span={12} className="px-2 py-1">
                  <div className="text-sm text-transparent bg-gradient-to-r from-black to-purple-500 bg-clip-text font-bold">
                    PC sinh hoạt
                  </div>
                  <div className="text-gray-700 pl-3 text-sm">
                    {numberToCurrency(358158)}
                  </div>
                </Col>
                <Col span={12} className="px-2 py-1">
                  <div className="text-sm text-transparent bg-gradient-to-r from-black to-purple-500 bg-clip-text font-bold">
                    Thưởng chuyên cần
                  </div>
                  <div className="text-gray-700 pl-3 text-sm">
                    {numberToCurrency(100000)} (1h)
                  </div>
                </Col>
                <Col span={12} className="px-2 py-1">
                  <div className="text-sm text-transparent bg-gradient-to-r from-black to-purple-500 bg-clip-text font-bold">
                    PC ca đêm (30%)
                  </div>
                  <div className="text-gray-700 pl-3 text-sm">
                    {numberToCurrency(811947)} (90h)
                  </div>
                </Col>
                <Col span={12} className="px-2 py-1">
                  <div className="text-sm text-transparent bg-gradient-to-r from-black to-purple-500 bg-clip-text font-bold">
                    PC tăng ca (150%)
                  </div>
                  <div className="text-gray-700 pl-3 text-sm">
                    {numberToCurrency(969825)} (21h30p)
                  </div>
                </Col>
                <Col span={12} className="px-2 py-1">
                  <div className="text-sm text-transparent bg-gradient-to-r from-black to-purple-500 bg-clip-text font-bold">
                    PC tăng ca đêm (200%)
                  </div>
                  <div className="text-gray-700 pl-3 text-sm">
                    {numberToCurrency(358158)} (14h30p)
                  </div>
                </Col>
                <Col span={12} className="px-2 py-1">
                  <div className="text-sm text-transparent bg-gradient-to-r from-black to-purple-500 bg-clip-text font-bold">
                    PC chủ nhật (200%)
                  </div>
                  <div className="text-gray-700 pl-3 text-sm">
                    {numberToCurrency(481154)} (8h)
                  </div>
                </Col>
                <Col span={12} className="px-2 py-1">
                  <div className="text-sm text-transparent bg-gradient-to-r from-black to-purple-500 bg-clip-text font-bold">
                    PC tăng ca CN (200%)
                  </div>
                  <div className="text-gray-700 pl-3 text-sm">
                    {numberToCurrency(358158)} (1h)
                  </div>
                </Col>
                <Col span={12} className="px-2 py-1">
                  <div className="text-sm text-transparent bg-gradient-to-r from-black to-purple-500 bg-clip-text font-bold">
                    Thưởng chuyên cần
                  </div>
                  <div className="text-gray-700 pl-3 text-sm">
                    {numberToCurrency(100000)}
                  </div>
                </Col>
                <Col span={12} className="px-2 py-1">
                  <div className="text-sm text-transparent bg-gradient-to-r from-black to-purple-500 bg-clip-text font-bold">
                    PC tăng ca CN (200%)
                  </div>
                  <div className="text-gray-700 pl-3 text-sm">
                    {numberToCurrency(358158)} (1h)
                  </div>
                </Col>
                <Col span={12} className="px-2 py-1">
                  <div className="text-sm text-transparent bg-gradient-to-r from-black to-purple-500 bg-clip-text font-bold">
                    Thưởng chuyên cần
                  </div>
                  <div className="text-gray-700 pl-3 text-sm">
                    {numberToCurrency(100000)}
                  </div>
                </Col>
                <Col span={12} className="px-2 py-1">
                  <div className="text-sm text-transparent bg-gradient-to-r from-black to-purple-500 bg-clip-text font-bold">
                    PC tăng ca CN (200%)
                  </div>
                  <div className="text-gray-700 pl-3 text-sm">
                    {numberToCurrency(358158)} (1h)
                  </div>
                </Col>
                <Col span={12} className="px-2 py-1">
                  <div className="text-sm text-transparent bg-gradient-to-r from-black to-purple-500 bg-clip-text font-bold">
                    Thưởng chuyên cần
                  </div>
                  <div className="text-gray-700 pl-3 text-sm">
                    {numberToCurrency(100000)}
                  </div>
                </Col>
                <Col span={24} className="px-2 py-1">
                  <div className="text-blue-600 font-bold text-base">
                    Tổng chi trả:{" "}
                    <span className="text-sm">
                      {numberToCurrency(totalPay)}
                    </span>
                  </div>
                </Col>
              </Row>

              <p className="italic text-red-600 mt-2">Chi tiết khấu trừ:</p>

              <Row className="shadow-inner shadow-red-800 ml-1 rounded-lg bg-white">
                <Col span={12} className="px-2 py-1">
                  <div className="text-sm text-transparent bg-gradient-to-r from-purple-800 to-red-800 bg-clip-text font-bold">
                    Lương cơ bản
                  </div>
                  <div className="text-gray-700 pl-3 text-sm">
                    {numberToCurrency(5855000)}
                  </div>
                </Col>
                <Col span={12} className="px-2 py-1">
                  <div className="text-sm text-transparent bg-gradient-to-r from-purple-800 to-red-800 bg-clip-text font-bold">
                    Thưởng làm đêm
                  </div>
                  <div className="text-gray-700 pl-3 text-sm">
                    {numberToCurrency(150000)}
                    {" (15h)"}
                  </div>
                </Col>
                <Col span={12} className="px-2 py-1">
                  <div className="text-sm text-transparent bg-gradient-to-r from-purple-800 to-red-800 bg-clip-text font-bold">
                    PC sinh hoạt
                  </div>
                  <div className="text-gray-700 pl-3 text-sm">
                    {numberToCurrency(358158)}
                  </div>
                </Col>
                <Col span={12} className="px-2 py-1">
                  <div className="text-sm text-transparent bg-gradient-to-r from-purple-800 to-red-800 bg-clip-text font-bold">
                    Thưởng chuyên cần
                  </div>
                  <div className="text-gray-700 pl-3 text-sm">
                    {numberToCurrency(100000)} (1h)
                  </div>
                </Col>
                <Col span={12} className="px-2 py-1">
                  <div className="text-sm text-transparent bg-gradient-to-r from-purple-800 to-red-800 bg-clip-text font-bold">
                    PC ca đêm (30%)
                  </div>
                  <div className="text-gray-700 pl-3 text-sm">
                    {numberToCurrency(811947)} (90h)
                  </div>
                </Col>
                <Col span={12} className="px-2 py-1">
                  <div className="text-sm text-transparent bg-gradient-to-r from-purple-800 to-red-800 bg-clip-text font-bold">
                    PC tăng ca (150%)
                  </div>
                  <div className="text-gray-700 pl-3 text-sm">
                    {numberToCurrency(969825)} (21h30p)
                  </div>
                </Col>
                <Col span={12} className="px-2 py-1">
                  <div className="text-sm text-transparent bg-gradient-to-r from-purple-800 to-red-800 bg-clip-text font-bold">
                    PC tăng ca đêm (200%)
                  </div>
                  <div className="text-gray-700 pl-3 text-sm">
                    {numberToCurrency(358158)} (14h30p)
                  </div>
                </Col>
                <Col span={12} className="px-2 py-1">
                  <div className="text-sm text-transparent bg-gradient-to-r from-purple-800 to-red-800 bg-clip-text font-bold">
                    PC chủ nhật (200%)
                  </div>
                  <div className="text-gray-700 pl-3 text-sm">
                    {numberToCurrency(481154)} (8h)
                  </div>
                </Col>
                <Col span={12} className="px-2 py-1">
                  <div className="text-sm text-transparent bg-gradient-to-r from-purple-800 to-red-800 bg-clip-text font-bold">
                    PC tăng ca CN (200%)
                  </div>
                  <div className="text-gray-700 pl-3 text-sm">
                    {numberToCurrency(358158)} (1h)
                  </div>
                </Col>
                <Col span={12} className="px-2 py-1">
                  <div className="text-sm text-transparent bg-gradient-to-r from-purple-800 to-red-800 bg-clip-text font-bold">
                    Thưởng chuyên cần
                  </div>
                  <div className="text-gray-700 pl-3 text-sm">
                    {numberToCurrency(100000)}
                  </div>
                </Col>
                <Col span={12} className="px-2 py-1">
                  <div className="text-sm text-transparent bg-gradient-to-r from-purple-800 to-red-800 bg-clip-text font-bold">
                    PC tăng ca CN (200%)
                  </div>
                  <div className="text-gray-700 pl-3 text-sm">
                    {numberToCurrency(358158)} (1h)
                  </div>
                </Col>
                <Col span={12} className="px-2 py-1">
                  <div className="text-sm text-transparent bg-gradient-to-r from-purple-800 to-red-800 bg-clip-text font-bold">
                    Thưởng chuyên cần
                  </div>
                  <div className="text-gray-700 pl-3 text-sm">
                    {numberToCurrency(100000)}
                  </div>
                </Col>
                <Col span={12} className="px-2 py-1">
                  <div className="text-sm text-transparent bg-gradient-to-r from-purple-800 to-red-800 bg-clip-text font-bold">
                    PC tăng ca CN (200%)
                  </div>
                  <div className="text-gray-700 pl-3 text-sm">
                    {numberToCurrency(358158)} (1h)
                  </div>
                </Col>
                <Col span={12} className="px-2 py-1">
                  <div className="text-sm text-transparent bg-gradient-to-r from-purple-800 to-red-800 bg-clip-text font-bold">
                    Thưởng chuyên cần
                  </div>
                  <div className="text-gray-700 pl-3 text-sm">
                    {numberToCurrency(100000)}
                  </div>
                </Col>
                <Col span={24} className="px-2 py-1">
                  <div className="text-red-600 font-bold text-base">
                    Tổng khấu trừ:{" "}
                    <span className="text-sm">
                      {numberToCurrency(totalMinus)}
                    </span>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Tab>
    </Wrapper>
  );
}
