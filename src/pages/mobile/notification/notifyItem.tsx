import styled from "styled-components";

const NewItems = styled.div``;
type NewItemProps = {
  newItem: {
    id: number;
    title: string;
    description: string;
    uploader: string;
    image: string;
    content: string;
    date: string;
    type: string;
  };
};

export const NewMenu = ({ newItem }: NewItemProps) => {
  return (
    <NewItems>
      <div className="flex gap-4 my-2 bg-white p-0.5">
        <div className="w-1/3 max-w-xs h-20">
          <div
            className="w-full h-20"
            style={{
              background: `url(${newItem.image}) center center /cover no-repeat`,
            }}
          />
        </div>
        <div className="content flex-1 flex flex-col justify-between">
          <p
            className="text-base font-bold line-clamp-1"
            style={{ lineHeight: "16px" }}
          >
            {newItem.title}
          </p>
          <p className="line-clamp-2 mb-1 px-1" style={{ lineHeight: "16px" }}>
            {newItem.description}
          </p>
          <div
            className="creator flex justify-between px-1"
            style={{ fontSize: "11px" }}
          >
            <p className="flex-1 line-clamp-1 font-bold mr-6 text-slate-400">
              {newItem.uploader}
            </p>
            <p className="text-slate-400">{newItem.date}</p>
          </div>
        </div>
      </div>
    </NewItems>
  );
};
