import { Col, Row, Select } from "antd";
import * as React from "react";
import MainLayout from "src/layouts/main.layout";
import styled from "styled-components";
import HomeNewItem from "./components/home.new.item";
import { RadioGroup } from "./components/radioGroup";
import Calendar from "react-calendar";

export interface ITestProps {}

const Wrapper = styled(Row)`
  flex: 1;
  /* overflow: auto; */
  display: flex;
  background-color: white;
  border-radius: 4px;
`;

const News = styled(Col)`
  height: 100%;
  /* overflow: auto; */
  border-left: 1px solid gray;
  /* padding-left: 12px; */
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CustomSelect = styled(Select)`
  border: 1px solid gray;
  border-radius: 4px;
  outline: none !important;
  .ant-select-selector {
    border: none !important;
    outline: none !important;
    background-color: #f1f1f1 !important;
    color: #242424;
    font-size: 16px;
  }
`;

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Home(props: ITestProps) {
  const [value, onChange] = React.useState<Value>(new Date());
  return (
    <Wrapper className="">
      <div className="flex-1 relative">
        <Calendar
          onChange={onChange}
          showWeekNumbers
          value={value}
          className="absolute bottom-0 right-0 w-72"
        />
      </div>
      <News span={6}>
        <p className="text-center font-semibold text-lg my-2 italic text-green-600">
          JAHWA NEW
        </p>

        <div className="flex gap-2 px-3 w-full items-center mb-2 pb-2 pl-6   border-b-2 border-gray-300">
          <p>Loại thông tin:</p>
          <CustomSelect
            className="w-48 text-lg"
            defaultValue={"all"}
            options={[
              { label: "Tất cả", value: "all" },
              { label: "Cộng đồng", value: "social" },
              { label: "Ảnh chia sẻ", value: "image" },
              { label: "Nội bộ", value: "company" },
              { label: "Hiệu suất", value: "immedidate" },
            ]}
          />
        </div>
        <div className="flex-1 overflow-auto pl-2">
          <HomeNewItem />
          <HomeNewItem />
          <HomeNewItem />
          <HomeNewItem />
          <HomeNewItem />
          <HomeNewItem />
          <HomeNewItem />
          <HomeNewItem />
          <HomeNewItem />
        </div>
      </News>
    </Wrapper>
  );
}
