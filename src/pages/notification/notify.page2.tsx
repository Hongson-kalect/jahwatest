import * as React from "react";
import MainLayout from "src/layouts/main.layout";
import styled from "styled-components";

export interface ITestProps {}

const Wrapper = styled.div`
  flex: 1;
  background-color: white;
`;

export default function NotificationPage2(props: ITestProps) {
  return <Wrapper>NotificationPage2 page</Wrapper>;
}
