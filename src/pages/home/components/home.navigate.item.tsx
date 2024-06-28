import { Col } from "antd";
import * as React from "react";
import { useNavigate } from "react-router-dom";

export interface IHomeNavigateItemProps {
  className?: string;
  dot?: boolean;
  span?: number;
  title?: string;
  description?: string;
  link?: string;
  children?: React.ReactNode;
  background?: string;
}

export default function HomeNavigateItem(props: IHomeNavigateItemProps) {
  const navigate = useNavigate();

  const handleCLick = () => {
    props.link && navigate(props.link);
  };
  return (
    <Col
      onClick={handleCLick}
      span={props.span || 8}
      className={`h-full px-4 py-1 ${props.className}`}
    >
      <div
        className="bg-white rounded-lg flex flex-col cursor-pointer h-full"
        style={{ background: props.background || "black" }}
      >
        {props.dot !== false && (
          <div className="flex px-2 gap-1">
            <div className="">
              <span className="bg-blue-500 inline-block center w-2 h-2 rounded-full"></span>
            </div>
            <div className="circle">
              <span className="bg-purple-500 inline-block center w-2 h-2 rounded-full"></span>
            </div>
            <div className="circle">
              <span className="bg-pink-500 box inline-block center w-2 h-2 rounded-full"></span>
            </div>
          </div>
        )}
        {props.title && (
          <div className="px-1 flex flex-col flex-1 justify-evenly items-center">
            <div className="title text-3xl font-bold text-white italic uppercase">
              {props.title}
            </div>
            <div className="text-base line-clamp-2 px-3 text-blue-200">
              {props.description}
            </div>
          </div>
        )}

        {props.children && (
          <div className="card__content h-full overflow-auto rounded-lg px-2 py-1">
            {props.children}
          </div>
        )}
      </div>
    </Col>
  );
}
