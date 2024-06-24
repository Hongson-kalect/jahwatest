import { calc } from "antd/es/theme/internal";
import * as React from "react";
import HomeHeader from "src/elements/home.header";
import HomeSideBar from "src/elements/home.sidebar";
import styled from "styled-components";

export interface IMainLayoutProps {
  children: React.ReactNode;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  background-color: #dfdfdf;
  height: 100vh;
`;

export default function MainLayout(props: IMainLayoutProps) {
  return (
    <Wrapper>
      <HomeHeader />
      <div
        className="flex flex-1 gap-1 pb-1"
        style={{ height: "calc(100% - 100px)" }}
      >
        <HomeSideBar />
        {props.children}
      </div>
    </Wrapper>
  );
}
