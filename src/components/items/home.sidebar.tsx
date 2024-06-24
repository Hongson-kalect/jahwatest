import * as React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa";
import { useNavigate, useParams, useRoutes } from "react-router-dom";
import styled from "styled-components";

export interface IHomeSidebarItemProps {
  iconL?: React.ReactNode;
  activeIconL?: React.ReactNode;
  iconR?: React.ReactNode;
  childs?: {
    iconL?: React.ReactNode;
    activeIconL?: React.ReactNode;
    iconR?: React.ReactNode;
    title: React.ReactNode;
    link: string;
  }[];
  title: string;
  link: string;
  expand?: boolean;
}

const Wrapper = styled.div`
  background-color: transparent;
  transition: all 0.3s;
  margin-bottom: 4px;
`;

const MainMenu = styled.div`
  display: flex;
  gap: 2px;
  align-items: center;
  justify-content: space-between;
  padding: 4px 8px;
  cursor: pointer;
  transition: 0.3s;
  color: #ffffff;
  /* color: #333333; */

  &:hover {
    background-color: #a1a1a1;
  }
  &.active {
    /* border-radius: 4px; */
    background-color: white;
    color: black;
    font-weight: 600;
  }
`;

const ChildMenuList = styled.div`
  /* background-color: #272727; */
  padding-left: 4px;
  padding-right: 2px;
  color: white;
  &.active {
    background-color: #e9e9e9;
    padding-left: 4px;
    padding-right: 2px;
    transition: all linear 0.3s;
    overflow: hidden;
  }
`;

const ChildMenu = styled.div`
  display: flex;
  gap: 8px;
  padding: 2px 0px 2px 8px;
  font-size: 13px;
  align-items: center;

  cursor: pointer;
  transition: 0.3s;
  color: #dbdbdb;
  background-color: #57a74c;
  opacity: 0;
  /* transform: translateY(20px);
  transition: opacity 0.3s, transform 0.3s; */
  animation: slide-in 0.3s forwards;

  &:hover {
    background-color: #adadad;
  }
  &.active {
    background-color: #cecece;
    /* border-radius: 4px; */
    border-left: 2px solid gray;
    color: #2e2e2e;
  }
  &.child-active {
    padding-left: 12px;
    background-color: white;
    color: black;
    font: 14px;
    font-weight: 600;

    border-left: 2px solid white;
  }

  &:first-child {
    margin-top: 4px;
  }
  &:last-child {
    margin-bottom: 4px;
  }
`;

export default function HomeSidebarItem(props: IHomeSidebarItemProps) {
  const isActive = React.useMemo(() => {
    const currentLink = window.location.pathname.split("?")[0].split("/")[1];
    console.log(currentLink, props.link);
    return currentLink === props.link.split("/")[1];
  }, [window.location.pathname]);

  const [displayChild, setDisplayChild] = React.useState(false);
  const navigate = useNavigate();

  const handleShowChild = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setDisplayChild(!displayChild);
  };

  const navigateLink = (link: string) => {
    if (props.link) navigate(link);
  };

  React.useEffect(() => {
    if (isActive) setDisplayChild(true);
  }, [isActive]);

  return (
    <Wrapper>
      <MainMenu
        className={`${isActive ? "active" : ""}`}
        onClick={() => navigateLink(props.link)}
      >
        <div className="flex flex-1 gap-2 items-center">
          {isActive ? props.activeIconL || props.iconL : props.iconL}
          <p className="text-sm line-clamp-1">{props.title}</p>
        </div>
        {props.childs ? (
          <div
            className="pl-4 py-1"
            onClick={(event) => handleShowChild(event)}
          >
            <FaAngleRight
              style={{ animationDuration: "0.3s !important" }}
              className={`${displayChild ? "rotate-r-90 " : ""}`}
            />
          </div>
        ) : null}
      </MainMenu>
      <ChildMenuList className={`${isActive ? "active" : ""}`}>
        {props?.childs?.length &&
          displayChild &&
          props.childs.map((child, index) => {
            const currentLink = window.location.pathname.split("?")[0];
            const isChildActive = isActive && currentLink === child.link;

            return (
              <ChildMenu
                key={index}
                className={`${isChildActive ? "child-active" : ""} ${
                  isActive ? "active" : ""
                }`}
                onClick={() => navigateLink(child.link)}
              >
                {isChildActive ? child.activeIconL || child.iconL : child.iconL}
                <p>{child.title}</p>
              </ChildMenu>
            );
          })}
      </ChildMenuList>
    </Wrapper>
  );
}
