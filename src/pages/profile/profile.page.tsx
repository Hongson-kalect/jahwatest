import * as React from "react";
import MainLayout from "src/layouts/main.layout";
import styled from "styled-components";
import SeftInfo from "./components/seft-info";
import Detail from "./components/detail";

export interface IProfileProps {}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  /* background-color: white; */
  border-radius: 4px;
`;

export default function Profile1(props: IProfileProps) {
  return (
    <Wrapper>
      <SeftInfo />
      <Detail />
    </Wrapper>
  );
}
