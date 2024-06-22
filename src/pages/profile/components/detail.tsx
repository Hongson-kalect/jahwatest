import { Image, Tabs } from "antd";
import * as React from "react";
import styled from "styled-components";
import SeftInfo from "./seft-info";
import { SeftDetailInfo } from "../profile-tabs/seft-info.tabs";
import { CompanyDetailInfo } from "../profile-tabs/company-info-tabs";
import { OtherDetailInfo } from "../profile-tabs/other-info.tabs";

export interface ICompanyInfoProps {}

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  gap: 12px;
  background-color: white;
  border-radius: 4px;
  /* font-weight: 400; */
  padding: 8px;
`;

const Profile = styled.table`
  font-size: 14px;
  tr:first-child {
    text-align: left;
  }
  td {
    padding: 4px 4px;
    font-size: 14px;

    &:first-child {
      width: 100px;
      font-weight: 600;
      color: #131313;
    }
  }

  td {
    border: 1px solid #e6e6e6;
  }
`;

const InforTabs = styled(Tabs)`
  flex: 1;

  &.ant-tabs-nav-list {
    /* margin-bottom: 0px; */
    /* padding: 4px 8px; */
  }

  & .ant-tabs-tab {
    padding: 4px 8px !important;
    background-color: #4b96ff !important;
    /* padding: 0 !important; */
    border-radius: 4px !important;

    &.ant-tabs-tab-active {
      background-color: blue !important;
    }
    div {
      color: white !important;
    }
  }

  .ant-tabs-content-holder {
    display: flex;
  }

  .ant-tabs-content {
    flex: 1;
    background-color: #f3f3f3;
    border-radius: 4px !important;
  }
`;

const infoTabs = [
  {
    key: "seft",
    label: <div>Thông tin cá nhân</div>,
    children: <SeftDetailInfo />,
  },
  {
    key: "company",
    label: <div>Hạng mục công ty</div>,
    children: <CompanyDetailInfo />,
  },
  {
    key: "other",
    label: <div>Thông tin khác</div>,
    children: <OtherDetailInfo />,
  },
  // {
  //   key: "address",
  //   label: <div>Thông tin Liên hệ</div>,
  //   children: <div>Tab thoong tin cas nhaan</div>,
  // },
];

export default function Detail(props: ICompanyInfoProps) {
  const onChange = (key: string) => {
    console.log(key);
  };
  return (
    <Wrapper>
      <InforTabs onChange={onChange} type="card" items={infoTabs} />

      {/* <p className="text-lg font-semibold text-green-900">
        Thông tin công việc
      </p>
      <Wrapper> */}
      {/* <div className="w-32 h-44">
        <Image
          width={120}
          height={180}
          className="rounded-lg"
          src="https://mayanhhoangto.com/wp-content/uploads/2022/08/giu-lung-va-dau-thang.jpg"
        />
      </div> */}

      {/* <Profile>
          <tr>
            <td>Mã nhân sự</td>
            <td>V24406012</td>
          </tr>
          <tr>
            <td>Tài khoản</td>
            <td>dh.son@jahwa.co.kr</td>
          </tr>
          <tr>
            <td>Bộ phận</td>
            <td>IT</td>
          </tr>
          <tr>
            <td>Chức vụ</td>
            <td>Nhân viên quèn</td>
          </tr>
          <tr>
            <td>Ngày vào</td>
            <td>11/11/2024</td>
          </tr>
        </Profile> */}
      {/* </Wrapper> */}
    </Wrapper>
  );
}
