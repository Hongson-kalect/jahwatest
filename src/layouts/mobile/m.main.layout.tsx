import { Col, FloatButton } from "antd";
import { FaBars } from "react-icons/fa6";
import { MobileNav } from "src/layouts/main.layout";
import { useAppStore } from "src/store/app";
import styled from "styled-components";

export interface IMobileLayoutProps {
  children: React.ReactNode;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100dvh;
  /* padding: 4px; */
`;

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
