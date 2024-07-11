import { Col, FloatButton, Row } from "antd";
import * as React from "react";
import { FaBars } from "react-icons/fa6";
import { ColFull } from "src/components/grid/row-col";
import HomeHeader from "src/elements/home.header";
import { useAppStore } from "src/store/app";
import styled from "styled-components";
import HomeSideBar from "./components/home.sidebar";

export interface IMainLayoutProps {
  children: React.ReactNode;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  background-color: #dfdfdf;
  height: 100dvh;
`;

export default function MainLayout(props: IMainLayoutProps) {
  const { showMobileMenu, setShowMobileMenu } = useAppStore();

  return (
    <Wrapper>
      <HomeHeader />
      <Row
        className="flex flex-1 gap-1"
        style={{ height: "calc(100% - 50px)" }}
      >
        {/* <Col > */}
        <Col xs={1} lg={0} className="fixed w-1 h-1 z-10">
          {!showMobileMenu && (
            <FloatButton
              onClick={() => setShowMobileMenu(true)}
              icon={<FaBars />}
              type="primary"
              className="top-10 -left-4"
            />
          )}
        </Col>
        {showMobileMenu && <MobileNav close={() => setShowMobileMenu(false)} />}

        <ColFull xs={0} md={0} lg={4}>
          <HomeSideBar />
        </ColFull>
        <div className="h-full flex-1 overflow-auto hide-scroll">
          {props.children}
        </div>
      </Row>
    </Wrapper>
  );
}

const StyledHomeSideBar = styled(HomeSideBar)`
  /* position: relative !important; */
  width: 100% !important;
  height: 100dvh !important;
  z-index: 1;

  .image {
    display: none !important;
  }
`;

const SideBarWrap = styled.div`
  width: 75vw;

  &.float-in {
    animation: floatIn 0.15s linear forwards;
  }

  &.remove {
    animation: floatOut 0.15s ease-in forwards;
  }
  @-webkit-keyframes floatIn {
    0% {
      margin-left: -75vw;
    }
    100% {
      margin-left: 0;
    }
  }
  @-webkit-keyframes floatOut {
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: -100vw;
      display: none;
    }
  }
`;

export const MobileNav = ({ close }: { close: () => void }) => {
  const [closing, setClosing] = React.useState(false);
  const ref = React.useRef<HTMLDivElement | null>(null);

  const handleCloseNav = () => {
    if (!closing) {
      // ref.current?.classList.remove("float-in");
      ref.current?.classList.add("remove");
      setTimeout(() => {
        close();
      }, 150);
      setClosing(true);
    }
  };

  return (
    <SideBarWrap
      ref={ref}
      className="fixed mobile-sidebar inset-0 float-in"
      style={{ zIndex: 10 }}
    >
      <div className="relative h-full" style={{ zIndex: 11 }}>
        <StyledHomeSideBar />
      </div>
      <div
        className="overlay fixed inset-0 bg-black opacity-80"
        onClick={handleCloseNav}
      />
    </SideBarWrap>
  );
};
