import { Button, Image, Table } from "antd";
import Column from "antd/es/table/Column";
import ColumnGroup from "antd/es/table/ColumnGroup";
import * as React from "react";
import MainLayout from "src/layouts/main.layout";
import { numberToCurrency } from "src/utils/utils";
import styled from "styled-components";
import jahwaSign from "src/assets/image/jahwa-sign.png";
import { usePDF } from "react-to-pdf";
import { BsDownload } from "react-icons/bs";
import { useTranslation } from "react-i18next";

export interface IWagePageProps {}
const Wrapper = styled.div`
  /* flex: 1; */
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 2px 20px;
  background-color: white;
  border-radius: 4px;

  .title {
    text-align: center;
    font-size: 16px;
    color: #333;
    font-weight: 500;
  }

  .staff-info {
    border-radius: 4px;
    background-color: white;
    display: flex;
  }
  .salary-info {
    padding: 4px 8px;
    border-radius: 4px;
    background-color: white;
    display: flex;
  }
`;

const InfoTable = styled.table`
  /* width: 50%; */
  font-size: 14px;
  tr:first-child {
    text-align: left;
  }
  td {
    /* padding: 4px 4px; */
    font-size: 14px;

    &:first-child {
      width: 120px;
      padding: 2px 4px;
      font-weight: 600;
      color: #131313;
      /* border-right: 1px solid red; */
    }
    &:last-child {
      /* min-width: 300px; */
      text-align: left;
      padding: 2px 12px;
      /* font-style: italic; */
      /* text-decoration: u; */
      /* font-weight: 600; */
      color: #131313;
    }
  }

  td {
    /* border: 1px solid #e6e6e6; */
  }
`;

const StyledTable = styled(Table)`
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

const SumaryTable = styled(Table)`
  border-bottom: 1px solid #888;
  tr {
    color: red;
    td {
      padding: 2px 8px !important;
      border: 1px solid #888;
      &:first-child {
        font-weight: 600;
      }
      &:last-child {
        font-weight: 500;
      }
    }
    &:first-child {
      color: blue;
    }
    &:last-child {
      /* font-size: 16px; */
      color: black;
    }
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

export default function WagePage(props: IWagePageProps) {
  const { t } = useTranslation();
  const [downloadShow, setDownloadShow] = React.useState(true);
  const { toPDF, targetRef } = usePDF({ filename: "jahwa-salary.pdf" });
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

  const handlePDF = () => {
    setDownloadShow(false);
    if (window.confirm("Download PDF?")) {
      setTimeout(() => {
        toPDF();
      }, 500);
      setTimeout(() => {
        setDownloadShow(true);
      }, 5000);
    }
  };
  return (
    <>
      <Wrapper ref={targetRef} style={{ width: "760px" }}>
        <p className="title flex gap-2 justify-center items-center">
          2024-06 - {t("wage.title")}
          {downloadShow && (
            <BsDownload className="cursor-pointer" onClick={handlePDF} />
          )}
        </p>
        <div className="staff-info gap-24 px-2">
          <InfoTable>
            <tbody>
              <tr>
                <td>{t("wage.code")}</td>
                <td>V22202020</td>
              </tr>
              <tr>
                <td>{t("wage.name")}</td>
                <td>Phùng Quốc Hùng</td>
              </tr>
              <tr>
                <td>{t("wage.department")}</td>
                <td>IOS SẢN XUẤT</td>
              </tr>
              <tr>
                <td>{t("wage.position")}</td>
                <td>Staff</td>
              </tr>
              <tr>
                <td>{t("wage.date")}</td>
                <td>20/11/2024</td>
              </tr>
            </tbody>
          </InfoTable>
          <InfoTable>
            <tbody>
              <tr>
                <td>{t("wage.wageRank")}</td>
                <td>S1 06</td>
              </tr>
              <tr>
                <td>{t("wage.bankName")}</td>
                <td>Viettinbank</td>
              </tr>
              <tr>
                <td>{t("wage.bankNumber")}</td>
                <td>0987432123423</td>
              </tr>
              <tr>
                <td>{t("wage.workHour")}</td>
                <td>240</td>
              </tr>
              <tr>
                <td>{t("wage.workDay")}</td>
                <td>30</td>
              </tr>
            </tbody>
          </InfoTable>
        </div>
        <div className="salary-info gap-24">
          <StyledTable
            dataSource={payFor}
            pagination={false}
            rowKey={"payFor"}
            footer={() => (
              <div className="text-base font-semibold">
                {t("wage.totalPay")}:{" "}
                <span className="ml-2 text-blue-600">
                  {numberToCurrency(totalPay)}
                </span>
              </div>
            )}
          >
            <ColumnGroup title={t("wage.payDetail")}>
              <Column
                title={t("wage.paySection")}
                dataIndex="payFor"
                key="payFor"
              />
              <Column
                title={t("wage.amount")}
                dataIndex="amount"
                key="amount"
              />
              <Column title={t("wage.hour")} dataIndex="hour" key="hour" />
              <Column
                title={t("wage.munite")}
                dataIndex="munite"
                key="munite"
              />
            </ColumnGroup>
          </StyledTable>
          <StyledTable
            rowKey={"payFor"}
            dataSource={minus}
            pagination={false}
            footer={() => (
              <div className="text-base font-semibold mt-auto">
                {t("wage.totalDeduct")}:{" "}
                <span className="ml-2 text-red-600">
                  {numberToCurrency(totalMinus)}
                </span>
              </div>
            )}
          >
            <ColumnGroup title={t("wage.deductDetail")}>
              <Column
                title={t("wage.deductSection")}
                dataIndex="payFor"
                key="payFor"
              />
              <Column
                title={t("wage.deducamount")}
                dataIndex="amount"
                key="amount"
              />
            </ColumnGroup>
          </StyledTable>
        </div>
        <div className="salary-sumary bg-white px-2 py-1 mt-4">
          <div className="flex gap-20">
            <SumaryTable
              rowKey={"title"}
              showHeader={false}
              pagination={false}
              dataSource={[
                {
                  key: 1,
                  title: t("wage.totalPayment"),
                  value: numberToCurrency(totalPay),
                },
                {
                  key: 1,
                  title: t("wage.totalDeduction"),
                  value: numberToCurrency(totalMinus),
                },
                {
                  key: 1,
                  title: t("wage.total"),
                  value: numberToCurrency(totalPay - totalMinus),
                },
              ]}
            >
              <Column title="Loại" dataIndex="title" key="title" />
              <Column title="Số tiền" dataIndex="value" key="value" />
            </SumaryTable>
            <StyledTable
              className="text-center w-96"
              pagination={false}
              dataSource={[
                { previos: 0, current: 5, xray: 0, used: 5, left: 1 },
              ]}
            >
              <ColumnGroup title={<p>{t("wage.dayOffStatus")}</p>}>
                <Column
                  title={t("wage.lastYear")}
                  dataIndex="previos"
                  key="previos"
                />
                <Column
                  title={t("wage.thisYear")}
                  dataIndex="current"
                  key="current"
                />
                <Column title={t("wage.X-RAY")} dataIndex="xray" key="xray" />
                <Column title={t("wage.used")} dataIndex="used" key="used" />
                <Column title={t("wage.left")} dataIndex="left" key="left" />
              </ColumnGroup>
            </StyledTable>
          </div>
          <div
            className="text-right pt-4 flex justify-end  items-center gap-4"
            style={{ marginRight: "20%" }}
          >
            <p>JAHWA VINA</p>
            <Image src={jahwaSign} />
          </div>
        </div>
      </Wrapper>
    </>
  );
}
