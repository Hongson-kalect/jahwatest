import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "src/store/app";
import styled from "styled-components";

type ItemProps = {
  icon?: React.ReactNode;
  activeIcon?: React.ReactNode;
  title?: string;
  link?: string;
  className?: string;
  subMenu?: {
    title?: string;
    link?: string;
    icon?: React.ReactNode;
    activeIcon?: React.ReactNode;
  }[];
};

const ItemWrapper = styled.div`
  * {
    transition: all 0.2s linear;
  }
  & > div:nth-child(2) {
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;
    margin: 0 0 4px 8px;
  }

  &.active {
    & > div:first-child {
      padding-left: 16px;
      color: white;
      background-color: #0077ff;
    }

    & > div:nth-child(2) {
      border-bottom-right-radius: 12px;
      border-bottom-left-radius: 12px;
      margin: 0 0 4px 8px;
      background-color: #9879e2;
      & > div {
        color: white !important;
        transition: all 0.3s linear;

        &.active {
          padding-left: 26px;
          background-color: #7f60c6 !important;
        }

        &:hover {
          background-color: #a792d7;
        }
      }
    }
  }
`;

const MainMenu = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom-left-radius: 8px;

  font-weight: 500;
  line-height: 16px;
  font-size: 14px;
  padding: 8px 4px 8px 8px;
  color: #484848;
  transition: all 0.3s linear;

  &:hover {
    color: #5f5f5f;
    background-color: #c7dbff67;
  }
`;

const SubMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 2px; */
`;

const SubMenu = styled.div`
  align-items: center;
  display: flex;
  color: #6a6a6a;
  padding: 2px 8px 2px 20px;
  margin: 0 0 0px 0px;
  font-size: 12px;
  transition: all 0.3s linear;
  cursor: pointer;

  &:hover {
    background-color: #9879e288;
  }

  &:last-child {
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }

  &.active {
    padding: 2px 8px 2px 32px;
  }
`;

export const MenuItem = (props: ItemProps) => {
  const navigate = useNavigate();
  const { setShowMobileMenu } = useAppStore();
  const active = React.useMemo(() => {
    return (
      props.link === window.location.pathname.slice(0, props?.link?.length || 0)
    );
  }, [window.location.pathname]);
  const [showChild, setShowChild] = React.useState(active);

  const handleNavigate = (link?: string) => {
    const sideBar = document.getElementsByClassName("mobile-sidebar")[0];
    console.log("sidebar", sideBar);
    if (sideBar) {
      setTimeout(() => {
        setShowMobileMenu(false);
      }, 300);
      sideBar.classList.add("remove");
    }

    if (link) {
      navigate(link);
    }
  };

  React.useEffect(() => {
    if (active) setShowChild(true);
  }, [active]);

  return (
    <ItemWrapper
      className={`${props?.className || ""} ${active ? "active " : ""}`}
    >
      <MainMenu onClick={() => handleNavigate(props.link)}>
        <div className="icon mr-2">
          {active ? props.activeIcon || props.icon : props.icon}
        </div>
        <p>{props.title}</p>
        {props.subMenu && props.subMenu?.length > 0 && (
          <FaAngleRight
            className={`ml-auto hover:bg-purple-300 rounded-full ${
              showChild && "duration-200 rotate-90"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              setShowChild(!showChild);
            }}
          />
        )}
      </MainMenu>

      {showChild && props.subMenu && props.subMenu?.length > 0 && (
        <SubMenuWrapper className="">
          {props.subMenu?.map((item, index) => {
            const active =
              item.link ===
              window.location.pathname.slice(0, item?.link?.length || 0);
            return (
              <SubMenu
                key={index}
                className={`${active ? "active " : ""}`}
                onClick={() => handleNavigate(item.link)}
              >
                <div className="mr-2">
                  {active ? item.activeIcon || item.icon : item.icon}
                </div>
                <p>{item.title}</p>
              </SubMenu>
            );
          })}
        </SubMenuWrapper>
      )}
    </ItemWrapper>
  );
};
