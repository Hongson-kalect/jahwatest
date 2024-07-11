import { Col, Modal, Row } from "antd";
import React from "react";
import { IoShareSocialSharp } from "react-icons/io5";
import useCustomNaviage from "src/hooks/useCustomNavigate";
import styled from "styled-components";

const TabCol = styled(Col)`
  height: 160px;
  padding: 12px 24px;
`;

const TabContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 20px;
  border-top-left-radius: 0;
  border-top-right-radius: 40px;
  background-color: white;
  box-shadow: 3px 8px 16px #bebebe, -2px -4px 8px #f7f7f7;
  height: 100%;
  transition: all 0.2s linear;

  &:hover {
    scale: 1.05;
    background-color: #e7e7ff;
  }

  svg {
    fill: #3d3dff;
    font-size: 42px;
  }
`;

type ItemProps = {
  background?: string;
  display?: React.ReactNode;
  link: string;
  title?: string;
  subMenu?: string[];
};

export function MenuItem(props: ItemProps) {
  const navigate = useCustomNaviage();
  const [showSubMenu, setShowSubMenu] = React.useState(false);

  const handleNavigate = () => {
    if (props.subMenu) return setShowSubMenu(true);
    navigate(props.link);
  };
  return (
    <TabCol xs={12} md={8} lg={6} xxl={4}>
      <TabContent onClick={handleNavigate}>
        {props.subMenu && (
          <IoShareSocialSharp className="absolute top-1 left-1 !text-2xl opacity-75" />
        )}
        <div className="display" style={{ fontSize: "36px" }}>
          {props.display}
        </div>
        <p className="p-1 text-center text-lg font-semibold text-gray-700 line-clamp-1">
          {props.title}
        </p>
      </TabContent>
      <StyledModal
        open={showSubMenu}
        onOk={() => setShowSubMenu(false)}
        onCancel={() => setShowSubMenu(false)}
        footer={null}
        closable={false}
      >
        <div
          className="w-full h-full rounded-xl px-1"
          style={{ maxHeight: "66dvh", overflow: "auto" }}
        >
          <Row>
            <SubMenuCol xs={8} md={6} lg={4} xxl={4}>
              <SubMenu onClick={handleNavigate}>
                <div className="display" style={{ fontSize: "36px" }}>
                  {props.display}
                </div>
                <p className="p-1 text-center text-sm font-semibold text-gray-700 line-clamp-2 h-12">
                  {props.title}
                </p>
              </SubMenu>
            </SubMenuCol>
            <SubMenuCol xs={8} md={6} lg={4} xxl={4}>
              <SubMenu onClick={handleNavigate}>
                <div className="display" style={{ fontSize: "36px" }}>
                  {props.display}
                </div>
                <p className="p-1 text-center text-sm font-semibold text-gray-700 line-clamp-2 h-12">
                  {props.title}
                </p>
              </SubMenu>
            </SubMenuCol>
            <SubMenuCol xs={8} md={6} lg={4} xxl={4}>
              <SubMenu onClick={handleNavigate}>
                <div className="display" style={{ fontSize: "36px" }}>
                  {props.display}
                </div>
                <p className="p-1 text-center text-sm font-semibold text-gray-700 line-clamp-2 h-12">
                  dòng chữ gì đấy dài dài hơn tý nữa thì sao
                </p>
              </SubMenu>
            </SubMenuCol>
            <SubMenuCol xs={8} md={6} lg={4} xxl={4}>
              <SubMenu onClick={handleNavigate}>
                <div className="display" style={{ fontSize: "36px" }}>
                  {props.display}
                </div>
                <p className="p-1 text-center text-sm font-semibold text-gray-700 line-clamp-2 h-12">
                  dòng chữ gì đấy dài dài hơn tý nữa thì sao
                </p>
              </SubMenu>
            </SubMenuCol>
            <SubMenuCol xs={8} md={6} lg={4} xxl={4}>
              <SubMenu onClick={handleNavigate}>
                <div className="display" style={{ fontSize: "36px" }}>
                  {props.display}
                </div>
                <p className="p-1 text-center text-sm font-semibold text-gray-700 line-clamp-2 h-12">
                  dòng chữ gì đấy dài dài hơn tý nữa thì sao
                </p>
              </SubMenu>
            </SubMenuCol>
            <SubMenuCol xs={8} md={6} lg={4} xxl={4}>
              <SubMenu onClick={handleNavigate}>
                <div className="display" style={{ fontSize: "36px" }}>
                  {props.display}
                </div>
                <p className="p-1 text-center text-sm font-semibold text-gray-700 line-clamp-2 h-12">
                  dòng chữ gì đấy dài dài hơn tý nữa thì sao
                </p>
              </SubMenu>
            </SubMenuCol>
            <SubMenuCol xs={8} md={6} lg={4} xxl={4}>
              <SubMenu onClick={handleNavigate}>
                <div className="display" style={{ fontSize: "36px" }}>
                  {props.display}
                </div>
                <p className="p-1 text-center text-sm font-semibold text-gray-700 line-clamp-2 h-12">
                  dòng chữ gì đấy dài dài hơn tý nữa thì sao
                </p>
              </SubMenu>
            </SubMenuCol>
            <SubMenuCol xs={8} md={6} lg={4} xxl={4}>
              <SubMenu onClick={handleNavigate}>
                <div className="display" style={{ fontSize: "36px" }}>
                  {props.display}
                </div>
                <p className="p-1 text-center text-sm font-semibold text-gray-700 line-clamp-2 h-12">
                  dòng chữ gì đấy dài dài hơn tý nữa thì sao
                </p>
              </SubMenu>
            </SubMenuCol>
            <SubMenuCol xs={8} md={6} lg={4} xxl={4}>
              <SubMenu onClick={handleNavigate}>
                <div className="display" style={{ fontSize: "36px" }}>
                  {props.display}
                </div>
                <p className="p-1 text-center text-sm font-semibold text-gray-700 line-clamp-2 h-12">
                  dòng chữ gì đấy dài dài hơn tý nữa thì sao
                </p>
              </SubMenu>
            </SubMenuCol>
            <SubMenuCol xs={8} md={6} lg={4} xxl={4}>
              <SubMenu onClick={handleNavigate}>
                <div className="display" style={{ fontSize: "36px" }}>
                  {props.display}
                </div>
                <p className="p-1 text-center text-sm font-semibold text-gray-700 line-clamp-2 h-12">
                  dòng chữ gì đấy dài dài hơn tý nữa thì sao
                </p>
              </SubMenu>
            </SubMenuCol>
            <SubMenuCol xs={8} md={6} lg={4} xxl={4}>
              <SubMenu onClick={handleNavigate}>
                <div className="display" style={{ fontSize: "36px" }}>
                  {props.display}
                </div>
                <p className="p-1 text-center text-sm font-semibold text-gray-700 line-clamp-2 h-12">
                  dòng chữ gì đấy dài dài hơn tý nữa thì sao
                </p>
              </SubMenu>
            </SubMenuCol>
            <SubMenuCol xs={8} md={6} lg={4} xxl={4}>
              <SubMenu onClick={handleNavigate}>
                <div className="display" style={{ fontSize: "36px" }}>
                  {props.display}
                </div>
                <p className="p-1 text-center text-sm font-semibold text-gray-700 line-clamp-2 h-12">
                  dòng chữ gì đấy dài dài hơn tý nữa thì sao
                </p>
              </SubMenu>
            </SubMenuCol>
            <SubMenuCol xs={8} md={6} lg={4} xxl={4}>
              <SubMenu onClick={handleNavigate}>
                <div className="display" style={{ fontSize: "36px" }}>
                  {props.display}
                </div>
                <p className="p-1 text-center text-sm font-semibold text-gray-700 line-clamp-2 h-12">
                  dòng chữ gì đấy dài dài hơn tý nữa thì sao
                </p>
              </SubMenu>
            </SubMenuCol>
            <SubMenuCol xs={8} md={6} lg={4} xxl={4}>
              <SubMenu onClick={handleNavigate}>
                <div className="display" style={{ fontSize: "36px" }}>
                  {props.display}
                </div>
                <p className="p-1 text-center text-sm font-semibold text-gray-700 line-clamp-2 h-12">
                  dòng chữ gì đấy dài dài hơn tý nữa thì sao
                </p>
              </SubMenu>
            </SubMenuCol>
            <SubMenuCol xs={8} md={6} lg={4} xxl={4}>
              <SubMenu onClick={handleNavigate}>
                <div className="display" style={{ fontSize: "36px" }}>
                  {props.display}
                </div>
                <p className="p-1 text-center text-sm font-semibold text-gray-700 line-clamp-2 h-12">
                  {props.title}
                </p>
              </SubMenu>
            </SubMenuCol>
          </Row>
        </div>
      </StyledModal>
    </TabCol>
  );
}

const SubMenuCol = styled(Col)`
  height: 120px;
  padding: 12px 6px;
`;

const SubMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 12px;
  border: 1px solid #5c99c8;
  /* border-top-left-radius: 0; */
  /* border-top-right-radius: 40px; */
  background-color: white;
  box-shadow: 3px 4px 8px #bebebe, -2px -2px 4px #abbbc7;
  height: 100%;
  transition: all 0.2s linear;

  &:hover {
    scale: 1.05;
    background-color: #e7e7ff;
  }

  svg {
    fill: #3d3dff;
    font-size: 36px;
  }
`;

const StyledModal = styled(Modal)`
  .ant-modal-content {
    margin: 0px 8px;
    padding: 8px 4px;
  }
`;
