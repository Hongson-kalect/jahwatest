import { Image } from "antd";
import * as React from "react";
import styled from "styled-components";

export interface ISeftInfoProps {}

const Wrapper = styled.div`
  display: flex;
  padding: 24px;
  gap: 12px;
  background-color: white;
  border-radius: 4px;
  /* font-weight: 400; */
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
    /* border: 1px solid #e6e6e6; */
  }
`;

export default function SeftInfo(props: ISeftInfoProps) {
  return (
    <Wrapper>
      {/* <div className="w-32"> */}
      <Image
        width={80}
        height={100}
        className="rounded-lg"
        src="https://mayanhhoangto.com/wp-content/uploads/2022/08/giu-lung-va-dau-thang.jpg"
      />
      {/* </div> */}
      <div className="flex gap-4 flex-1 justify-between">
        <Profile>
          <tr>
            <td>Tên</td>
            <td>Hung Chays</td>
          </tr>
          <tr>
            <td>Mã nhân viên</td>
            <td>V22006013</td>
          </tr>
          <tr>
            <td>Giới tính</td>
            <td>Nữ</td>
          </tr>

          <tr>
            <td>Ngày sinh</td>
            <td>01/01/2001</td>
          </tr>
          {/* <tr>
          <td>Điện thoại</td>
          <td>0123456789</td>
        </tr> */}
          {/* <tr>
          <td>CMND</td>
          <td>0123456789</td>
        </tr> */}
          {/* <tr>
          <td>Địa chỉ</td>
          <td>
            xã Đại Đình, huyện Tam Đảo, tỉnh Vĩnh Phúc xã Đại Đình, huyện Tam
            Đảo, tỉnh Vĩnh Phúc
          </td>
        </tr> */}
        </Profile>
        <Profile>
          <tr>
            <td>Bộ phận</td>
            <td>IT</td>
          </tr>
          <tr>
            <td>Chức vụ</td>
            <td>Staff</td>
          </tr>
          <tr>
            <td>Vị trí</td>
            <td>Xưởng 1 - Văn phòng</td>
          </tr>
          <tr>
            <td>Ngày vào</td>
            <td>11/11/2011</td>
          </tr>

          {/* <tr>
          <td>CMND</td>
          <td>0123456789</td>
        </tr>
        <tr>
          <td>Địa chỉ</td>
          <td>
            xã Đại Đình, huyện Tam Đảo, tỉnh Vĩnh Phúc xã Đại Đình, huyện Tam
            Đảo, tỉnh Vĩnh Phúc
          </td>
        </tr> */}
        </Profile>
        <Profile>
          <tr>
            <td>Hế số lương</td>
            <td>G01</td>
          </tr>

          <tr>
            <td>Emai</td>
            <td>hungchay@jahwa.co.kr</td>
          </tr>
          <tr>
            <td>Số điện thoại</td>
            <td>0123456789</td>
          </tr>
          <tr>
            <td>Quê quán</td>
            <td>Đại Đình, Tam Đảo, Vĩnh Phúc</td>
          </tr>

          {/* <tr>
          <td>CMND</td>
          <td>0123456789</td>
        </tr>
        <tr>
          <td>Địa chỉ</td>
          <td>
            xã Đại Đình, huyện Tam Đảo, tỉnh Vĩnh Phúc xã Đại Đình, huyện Tam
            Đảo, tỉnh Vĩnh Phúc
          </td>
        </tr> */}
        </Profile>
      </div>
    </Wrapper>
  );
}
