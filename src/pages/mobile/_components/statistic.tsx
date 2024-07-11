import { CSSProperties } from "react";
import styled from "styled-components";

export interface IStatisticProps {
  type?: "primary" | "error";
  title: string;
  content: React.ReactNode;
  className?: string;
  style?: CSSProperties;
}

const StyledStatistic = styled.div`
  font-size: 0.625rem;
  .title {
    font-size: 1.4em;
  }
  .content {
    font-size: 1.4em;
  }
  span {
    font-size: 0.9em;
  }
`;

export default function Statistic(props: IStatisticProps) {
  return (
    <StyledStatistic className={props.className} style={props.style}>
      <div
        className={`title ${
          props.type === "primary"
            ? "from-black to-purple-500"
            : props.type === "error"
            ? "from-purple-800 to-red-800"
            : "from-black to-black"
        } bg-gradient-to-r text-transparent bg-clip-text font-bold`}
      >
        {props.title}
      </div>
      <div className="content text-gray-700 px-3 text-sm">{props.content}</div>
    </StyledStatistic>
  );
}
