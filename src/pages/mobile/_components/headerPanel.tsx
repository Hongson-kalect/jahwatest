import * as React from "react";

export interface IHeaderPanelProps {
  children?: React.ReactNode;
}

export default function HeaderPanel(props: IHeaderPanelProps) {
  return (
    <div className="text-center px-2 pb-4">
      <div
        className={" rounded-xl py-2 px-4"}
        style={{
          background:
            "radial-gradient(circle at 100% 20%, rgb(255 255 255) 0%, rgb(240 255 255) 70%, #fddeff 100%)",
        }}
      >
        {props.children}
      </div>
    </div>
  );
}
