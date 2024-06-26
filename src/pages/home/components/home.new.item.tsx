import { Col, Image, Row } from "antd";
import * as React from "react";
import styled from "styled-components";

export interface IHomeNewItemProps {}

const Wrapper = styled(Row)`
  padding: 4px 8px;
  flex-wrap: nowrap;
  /* gap: 12px; */
  cursor: pointer;
  transition: all 0.2s linear;

  &:hover {
    background-color: #d5d5d5;
  }
`;

const Title = styled(Col)`
  padding-left: 8px;
  font-size: 14px;
  font-weight: 600;
  color: gray;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-top: 2px;
  position: relative;
`;

export default function HomeNewItem(props: IHomeNewItemProps) {
  return (
    <Wrapper>
      <Col span={8}>
        <Image
          className="rounded-lg"
          src="https://onealsoutdoor.com/wp-content/uploads/2023/01/landscape-design.jpg"
          height={56}
        />
      </Col>
      <Title className="title" span={16}>
        <p className="line-clamp-2 text-xs" style={{ lineHeight: "14px" }}>
          Tin vui cho bệnh nhân ung thư.
        </p>

        <p
          className="absolute bottom-1 text-xs line-clamp-1"
          style={{ fontSize: "10px" }}
        >
          Theo báo lá cải hiệu thuốc ABC mjka;s ka;s
        </p>
      </Title>
    </Wrapper>
  );
}
