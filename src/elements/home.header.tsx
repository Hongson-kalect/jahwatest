import * as React from "react";
import styled from "styled-components";
import jahwaLogo from "src/assets/image/jahwa_logo.jpg";
import { RiLogoutBoxRFill, RiNotification3Fill } from "react-icons/ri";
import HeaderOption from "src/components/items/header.options";
import { Avatar, Image, Select } from "antd";

import { DefaultOptionType } from "antd/es/select";
import vnFlag from "src/assets/image/vn-flag.jfif";
import krFlag from "src/assets/image/kr-flag.png";
import cnFlag from "src/assets/image/cn-flag.png";
import enFlag from "src/assets/image/en-flag.png";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { HeaderSearch } from "src/components/search/header.search";
import { FaSignOutAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

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
  background: linear-gradient(90deg, #af68f2 0%, #30a19a 87%, #ffffff 100%);
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
        <p className="font-semibold" style={{ fontSize: "12px" }}>
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
        <p className="font-semibold" style={{ fontSize: "12px" }}>
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
        <p className="font-semibold" style={{ fontSize: "12px" }}>
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
        <p className="font-semibold" style={{ fontSize: "12px" }}>
          EN
        </p>
      </div>
    ),
  },
];

export default function HomeHeader(props: IHomeHeaderProps) {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const [language, setLanguage] = React.useState(() => {
    return localStorage.getItem("language") || "vi";
  });

  React.useEffect(() => {
    localStorage.setItem("language", language || "vi");
    i18n.changeLanguage(language || "vi");
  }, [language]);

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
          <RiNotification3Fill
            color="#ffaa00"
            size={32}
            className="border bg-white rounded-full p-0.5"
          />
          <p
            className="absolute -top-2 right-2 py-0  text-red-600 bg-white rounded-full px-2 shadow shadow-black"
            style={{ fontSize: "12px" }}
          >
            24
          </p>
        </div>
        <div className="flex flex-col text-xs font-semibold w-24 ">
          <div className="text-white overflow-ellipsis text-nowrap overflow-hidden">
            Nguyễn Thùy Linh
          </div>
          <div className="overflow-ellipsis text-nowrap overflow-hidden text-gray-200 pl-2">
            nt.linh@jawha.co.kr
          </div>
        </div>

        <div className="w-8 h-8 overflow-hidden rounded-full">
          <Image
            className="rounded-full"
            src="https://mayanhhoangto.com/wp-content/uploads/2022/08/giu-lung-va-dau-thang.jpg"
          />
        </div>

        <Select
          className="w-20 rounded-none"
          value={language}
          onChange={(value) => setLanguage(value)}
          options={languages}
        />

        <HeaderOption
          icon={
            <div
              className="text-sm font-semibold text-white 
            px-4 py-1.5 rounded-full bg-green-700"
            >
              GW
            </div>
          }
          onClick={() => window.open("https://gw.jahwa.co.kr/", "_blank")}
          title="Đến GW"
        />

        <HeaderOption
          icon={<FaSignOutAlt color="red" size={28} />}
          onClick={() => navigate("/login")}
          title="Đăng xuất"
        />
      </div>
    </Wrapper>
  );
}
