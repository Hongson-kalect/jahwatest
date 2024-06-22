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
  gap: 8px;
  background-color: #8f8f8f;
  height: 100vh;
`;

export default function MainLayout(props: IMainLayoutProps) {
  return (
    <Wrapper>
      <HomeHeader />
      <div className="flex flex-1 gap-2 px-1 pb-1">
        <HomeSideBar />
        {props.children}
      </div>
    </Wrapper>
  );
}
