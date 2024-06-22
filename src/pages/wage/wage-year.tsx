import { Modal, Select, Table } from "antd";
import * as React from "react";
import { numberToCurrency } from "src/utils/utils";
import styled from "styled-components";

export interface IWageYearProps {}

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledTable = styled(Table)`
  border: 2px solid #aaa;
  /* border-radius */
  th {
    background: #b7d8d1 !important;
    /* color: white !important; */
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
    font-size: 13px;
    text-align: center;
    &:first-child {
      font-weight: 600;
      border: none;
    }
    &:nth-child(3) {
      font-weight: 600;
      color: #2727b6;
    }
    &:nth-child(9) {
      font-weight: 600;
      color: #d45353;
    }
    &:last-child {
      font-weight: 600;
      color: #32a532;
    }
  }
`;

const tableValue = [
  {
    time: "2024-05",
    type: "Công nhật",
    salary: "8019206",
    bonus: "0",
    tax: "0",
    unTax: "0",
    incomeTax: "0",
    areaTax: "0",
    dedux: "749700",
    sumary: "7269506",
  },
  {
    time: "2024-05",
    type: "Công nhật",
    salary: "8019206",
    bonus: "0",
    tax: "0",
    unTax: "0",
    incomeTax: "0",
    areaTax: "0",
    dedux: "749700",
    sumary: "7269506",
  },
  {
    time: "2024-04",
    type: "Công nhật",
    salary: "8019206",
    bonus: "0",
    tax: "0",
    unTax: "0",
    incomeTax: "0",
    areaTax: "0",
    dedux: "749700",
    sumary: "7269506",
  },
  {
    time: "2024-03",
    type: "Công nhật",
    salary: "8019206",
    bonus: "0",
    tax: "0",
    unTax: "0",
    incomeTax: "0",
    areaTax: "0",
    dedux: "749700",
    sumary: "7269506",
  },
  {
    time: "2024-02",
    type: "Công nhật",
    salary: "8019206",
    bonus: "0",
    tax: "0",
    unTax: "0",
    incomeTax: "0",
    areaTax: "0",
    dedux: "749700",
    sumary: "7269506",
  },
];

const tableColumn = [
  {
    key: 1,
    dataIndex: "time",
    title: "Lương tháng",
    render: (text: string) => <p>{text}</p>,
  },
  {
    key: 2,
    dataIndex: "type",
    title: "Phân loại lương",
    render: (text: string) => <p>{text}</p>,
  },
  {
    key: 3,
    dataIndex: "salary",
    title: "Tổng tiền lương",
    render: (text: string) => <p>{numberToCurrency(Number(text))}</p>,
  },
  {
    key: 4,
    dataIndex: "bonus",
    title: "Tổng tiền thưởng",
    render: (text: string) => <p>{numberToCurrency(Number(text))}</p>,
  },
  {
    key: 5,
    dataIndex: "tax",
    title: "Tiền chịu thuế",
    render: (text: string) => <p>{numberToCurrency(Number(text))}</p>,
  },
  {
    key: 6,
    dataIndex: "unTax",
    title: "Tiền miễn thuế",
    render: (text: string) => <p>{numberToCurrency(Number(text))}</p>,
  },
  {
    key: 7,
    dataIndex: "incomeTax",
    title: "Thuế thu nhập",
    render: (text: string) => <p>{numberToCurrency(Number(text))}</p>,
  },
  {
    key: 8,
    dataIndex: "areaTax",
    title: "Thuế thu nhập vùng",
    render: (text: string) => <p>{numberToCurrency(Number(text))}</p>,
  },
  {
    key: 9,
    dataIndex: "dedux",
    title: "Tổng tiền khấu trừ",
    render: (text: string) => <p>{numberToCurrency(Number(text))}</p>,
  },
  {
    key: 10,
    dataIndex: "sumary",
    title: "Chi trả thực tế",
    render: (text: string) => <p>{numberToCurrency(Number(text))}</p>,
  },
];

export default function WageYear(props: IWageYearProps) {
  return (
    <Wrapper>
      <div className="select bg-white px-4 py-2 rounded flex gap-4 items-center">
        <p>Bảng lương năm:</p>
        <Select
          className="w-24 !shadow-none !outline-none !border-none"
          defaultValue={"2024"}
          options={[
            { value: "2019" },
            { value: "2020" },
            { value: "2021" },
            { value: "2022" },
            { value: "2023" },
            { value: "2024" },
          ]}
        />
      </div>
      <div className="sumary flex-1 overflow-auto bg-white rounded px-4 py-2">
        <StyledTable
          pagination={false}
          dataSource={tableValue}
          columns={tableColumn}
          onRow={(record) => {
            return {
              onClick: () => {
                console.log(record);
              },
            };
          }}
        />
      </div>
      {/* <div className="detail"></div> */}
    </Wrapper>
  );
}
