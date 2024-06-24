import * as React from "react";
import styled from "styled-components";
import jahwaLogo from "src/assets/image/jahwa_logo.jpg";
import { RiLogoutBoxRFill } from "react-icons/ri";
import HeaderOption from "src/components/items/header.options";
import { Avatar, Image, Select } from "antd";

import { DefaultOptionType } from "antd/es/select";
import vnFlag from "src/assets/image/vn-flag.jfif";
import krFlag from "src/assets/image/kr-flag.png";
import cnFlag from "src/assets/image/cn-flag.png";
import enFlag from "src/assets/image/en-flag.png";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { HeaderSearch } from "src/components/search/header.search";

export interface IHomeHeaderProps {}

const tinvit = [
  {
    title: "abc def",
  },
  {
    title: "abc def",
  },
  {
    title: "abc def",
  },
  {
    title: "abc def",
  },
  {
    title: "abc def",
  },
];

const Wrapper = styled.div`
  height: 56px;
  padding: 0 12px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const languages: DefaultOptionType[] = [
  {
    value: "vi",
    label: (
      <div className="flex gap-1 items-center justify-between">
        <div
          className="h-4 w-6"
          style={{
            background: `url(${vnFlag}) center center /contain no-repeat`,
          }}
        ></div>
        <p className="font-semibold" style={{ fontSize: "11px" }}>
          VN
        </p>
      </div>
    ),
  },
  {
    value: "kr",
    label: (
      <div className="flex gap-1 items-center justify-between">
        <div
          className="h-4 w-6"
          style={{
            background: `url(${krFlag}) center center /contain no-repeat`,
          }}
        ></div>
        <p className="font-semibold" style={{ fontSize: "11px" }}>
          KR
        </p>
      </div>
    ),
  },
  {
    value: "cn",
    label: (
      <div className="flex gap-1 items-center justify-between">
        <div
          className="h-4 w-6"
          style={{
            background: `url(${cnFlag}) center center /contain no-repeat`,
          }}
        ></div>
        <p className="font-semibold" style={{ fontSize: "11px" }}>
          CN
        </p>
      </div>
    ),
  },
  {
    value: "en",
    label: (
      <div className="flex gap-1 items-center justify-between">
        <div
          className="h-4 w-6"
          style={{
            background: `url(${enFlag}) center center /contain no-repeat`,
          }}
        ></div>
        <p className="font-semibold" style={{ fontSize: "11px" }}>
          EN
        </p>
      </div>
    ),
  },
];

export default function HomeHeader(props: IHomeHeaderProps) {
  const [language, setLanguage] = React.useState("vi");

  return (
    <Wrapper>
      <div className="left bg-white flex h-full w-60 items-end justify-start">
        <div
          className="w-2/5 h-full"
          style={{
            background: `url(${jahwaLogo}) center center / contain no-repeat`,
          }}
        ></div>
        <p className="text-green-600 font-bold uppercase text-xs -ml-4 mb-1">
          Jahwa vina
        </p>
      </div>
      <HeaderSearch />

      <div className="options flex justify-center items-center gap-2">
        <div className="relative">
          <MdOutlineNotificationsActive size={24} color="brown" />
          <p
            className="absolute -top-1.5 right-2 py-0 bg-red-500 text-white rounded-full px-2"
            style={{ fontSize: "10px" }}
          >
            24
          </p>
        </div>
        <div className="flex flex-col text-xs font-semibold w-24 ">
          <div className="text-gray-700 overflow-ellipsis text-nowrap overflow-hidden">
            Tạ Thị Tòm Tem
          </div>
          <div className="overflow-ellipsis text-nowrap overflow-hidden text-gray-400 pl-2">
            tt.thanh@jawha.co.kr
          </div>
        </div>

        <div className="w-8 h-8 overflow-hidden rounded-full">
          <Image
            className="rounded-full"
            src="https://mayanhhoangto.com/wp-content/uploads/2022/08/giu-lung-va-dau-thang.jpg"
          />
        </div>

        <Select
          className="w-20"
          value={language}
          onChange={(value) => setLanguage(value)}
          options={languages}
        />

        <HeaderOption
          icon={
            <div
              className="text-xs font-semibold text-white 
            px-2 py-1 rounded-full bg-green-700"
            >
              GW
            </div>
          }
          link="/home/main"
          title="Đến GW"
        />

        <HeaderOption
          icon={<RiLogoutBoxRFill color="#d32222" size={28} />}
          link="/home/main"
          title="Đăng xuất"
        />
      </div>
    </Wrapper>
  );
}
