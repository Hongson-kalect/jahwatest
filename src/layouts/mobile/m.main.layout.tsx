import { Col, FloatButton } from "antd";
import React from "react";
import { FaBars } from "react-icons/fa6";
import { useAppStore } from "src/store/app";
import styled from "styled-components";
import HomeSideBar from "../components/sidebar";

export interface IMobileLayoutProps {
  children: React.ReactNode;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100dvh;
`;

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

export default function MobileLayout(props: IMobileLayoutProps) {
  const { showMobileMenu, setShowMobileMenu } = useAppStore();
  return (
    <Wrapper>
      <div className="relative z-20">
        <Col className="fixed w-1 h-1 z-10">
          {!showMobileMenu && (
            <FloatButton
              onClick={() => setShowMobileMenu(true)}
              icon={<FaBars color="" />}
              className="top-10 left-0"
            />
          )}
        </Col>
        {showMobileMenu && <MobileNav close={() => setShowMobileMenu(false)} />}
      </div>
      {props.children}
    </Wrapper>
  );
}
