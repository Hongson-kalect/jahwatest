import { Tooltip } from "antd";
import * as React from "react";
import { RiLogoutBoxRFill } from "react-icons/ri";
import styled from "styled-components";

export interface IHeaderOptionProps {
  icon: React.ReactNode;
  title: string;
  link: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default function HeaderOption(props: IHeaderOptionProps) {
  return (
    <Wrapper>
      <Tooltip title={props.title} placement="bottomLeft">
        {props.icon}
      </Tooltip>
      {/* <p className="text-xs font-semibold">Đăng xuất</p> */}
    </Wrapper>
  );
}
