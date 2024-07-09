"use client";

// import { getSession, login } from "@/_server/utils/authentication";
// import { useTranslations } from "next-intl";
import * as React from "react";
import jahwaView from "../../../assets/image/jahwa_view.png";
import jahwaLogo from "../../../assets/image/jahwa_logo.jpg";

import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Col, Row } from "antd";
export interface ILoginPageProps {}

const Wrapper = styled(Row)`
  width: 100vw;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${`linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.7) 100%), url(${jahwaView}) center center / cover no-repeat`};
`;

export default function LoginPage(props: ILoginPageProps) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  // const session = await getSession();
  // const t = useTranslations("Index");

  // if (session) {
  //   redirect("/main");
  // }

  // const [username, setUsername] = React.useState("");
  // const [password, setPassword] = React.useState("");
  // const [validateData, setValidateData] = React.useState<
  //   { field: string; message: string | React.ReactNode }[]
  // >([]);

  // const validate = () => {
  //   const val = [];
  //   const usernameRegex = new RegExp("^v\\d{8}$");
  //   const passwordRegex = new RegExp("^\\S*$");
  //   console.log(usernameRegex.test(username.toLowerCase()));
  //   console.log(passwordRegex.test(password));
  //   if (!usernameRegex.test(username.toLocaleLowerCase())) {
  //     val.push({
  //       field: "username",
  //       message: "Mã nhân viên không hợp lệ",
  //     });
  //   }

  //   if (!passwordRegex.test(password)) {
  //     val.push({
  //       field: "password",
  //       message: "Mật khẩu có ký tự trống",
  //     });
  //   }

  //   setValidateData(val);
  //   return val.length;
  // };

  return (
    <Wrapper>
      <Col
        className="relative flex-col p-8 pt-0 rounded-md text-black bg-white items-center"
        lg={8}
        md={12}
        sm={16}
        xs={20}
        // style={{ minWidth: "300px" }}
      >
        <div className="flex justify-center mb-4">
          <div
            className="bg w-1/2 h-16 bg-red-400"
            style={{
              background: `url(${jahwaLogo}) center center / contain no-repeat`,
            }}
          ></div>
        </div>
        <div className="text-2xl font-bold mb-1 text-[#1e0e4b] text-center">
          {t("loginPage.welcome")}
        </div>
        <div className="text-3xl font-bold mb-4 text-[#7747ff] text-center">
          Jahwa "Nương"
        </div>
        <div className=" font-normal mb-4 text-center text-[#1e0e4b]">
          {/* Đăng nhập */}
        </div>
        <form
          className="flex flex-col gap-3 w-full"
          // action={async (formData) => {
          //   "use server";
          //   await login(formData);
          //   redirect("/login");
          // }}
        >
          <div className="block relative">
            <label
              htmlFor="email"
              className="block text-gray-700 cursor-text leading-[140%] font-normal mb-2"
            >
              {t("loginPage.username")}
            </label>
            <input
              // value={username}
              // onChange={(e) => setUsername(e.target.value)}
              type="text"
              id="email"
              className="rounded border border-gray-300 w-full font-semibold leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  caret-green-600 ring-green-600 outline-0"
            />
            <p className="text-sm text-red-600 mt-1">
              {/* {validateData.find((item) => item.field === "username")?.message} */}
            </p>
          </div>
          <div className="block relative">
            <label
              htmlFor="password"
              className="block text-gray-700 cursor-text leading-[140%] font-normal mb-2"
            >
              {t("loginPage.password")}
            </label>

            <input
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              className="font-semibold rounded border border-gray-300 w-full leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 caret-green-600 ring-green-600 outline-0"
            />
            <p className="text-sm text-red-600 mt-1">
              {/* {validateData.find((item) => item.field === "password")?.message} */}
            </p>
          </div>

          <div className="flex gap-2 items-center justify-between px-2">
            <div className="flex items-center gap-2">
              <input
                className="scale-125"
                type="checkbox"
                name="remember"
                id="remember"
              />
              <p className="text-sm text-blue-600 italic">
                {t("loginPage.saveAccount")}
              </p>
            </div>
            <div>
              <a className="text-xs text-[#7747ff] italic" href="#">
                {t("loginPage.forgotAccount")}
              </a>
            </div>
          </div>
          <button
            className="bg-[#7747ff] m-auto px-6 py-2 rounded text-white text-lg w-full"
            onClick={() => navigate("/m/home")}
          >
            {t("loginPage.login")}
          </button>
        </form>
        <div className="text-sm text-center mt-[1.6rem]">
          {t("loginPage.newMember")}{" "}
          <a className="text-sm text-[#7747ff]" href="#">
            {t("loginPage.createPassword")}
          </a>
        </div>
        {/* <pre>{JSON.stringify(session, null, 2)}</pre> */}
      </Col>
    </Wrapper>
  );
}
