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
  /* background-color: gray; */
  transition: all 0.3s;
  margin-bottom: 4px;
`;

const MainMenu = styled.div`
  display: flex;
  gap: 2px;
  align-items: center;
  justify-content: space-between;
  background-color: #cce9d0cc;
  padding: 4px 8px;
  cursor: pointer;
  transition: 0.3s;
  /* color: #333333; */

  &:hover {
    background-color: #96ae95;
  }
  &.active {
    /* border-radius: 4px; */
    background-color: green;
    color: white;
    font-weight: 600;
  }
`;

const ChildMenuList = styled.div`
  background-color: #d9d9d9;
  padding-left: 4px;
  padding-right: 2px;
  transition: all linear 0.3s;
  /* height: 0; */
  overflow: hidden;
  /* animation: expand 0.3s forwards; */
`;

const ChildMenu = styled.div`
  display: flex;
  gap: 8px;
  padding: 2px 8px;
  font-size: 13px;
  align-items: center;
  border-left: 2px solid pink;
  cursor: pointer;
  transition: 0.3s;
  color: #333;
  opacity: 0;
  /* transform: translateY(20px);
  transition: opacity 0.3s, transform 0.3s; */
  animation: slide-in 0.3s forwards;

  &:hover {
    background-color: #e4ffdc;
  }
  &.active {
    /* border-radius: 4px; */
    padding-left: 12px;
    font: 14px;
    font-weight: 600;
    background-color: #235823;

    border-left: 2px solid red;
    color: white;
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
      <ChildMenuList className={displayChild ? "scroll" : ""}>
        {props?.childs?.length &&
          displayChild &&
          props.childs.map((child, index) => {
            const currentLink = window.location.pathname.split("?")[0];
            const isChildActive = isActive && currentLink === child.link;

            return (
              <ChildMenu
                key={index}
                className={`${isChildActive ? "active" : ""}`}
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
