import * as React from "react";
import styled from "styled-components";
import { InfoItem, InfoTable } from "./other-info.tabs";

export interface ISeftInfoProps {}

export function CompanyDetailInfo(props: ISeftInfoProps) {
  return (
    <>
      <InfoItem>
        <p className="font-bold text-blue-500 mb-1">Thông tin cơ bản</p>
        <div
          className="flex bg-white px-2 py-1 ml-2"
          style={{ border: "1px solid gray", borderRadius: "2px" }}
        >
          <InfoTable>
            <tr>
              <td>Mã công ty</td>
              <td>VN532</td>
            </tr>
            <tr>
              <td>Tên công ty</td>
              <td>JAHWA VINA CO,. LTD.</td>
            </tr>
            <tr>
              <td>Nơi kinh doanh khai báo</td>
              <td>JAHWA VINA CO,. LTD.</td>
            </tr>

            <tr>
              <td>Khu vực làm việc</td>
              <td>JAHWA VINA - 00</td>
            </tr>
            <tr>
              <td>Nơi làm việc</td>
              <td>JAHWA VINA - 94</td>
            </tr>
            <tr>
              <td>Mã bộ phận nội bộ</td>
              <td>15</td>
            </tr>
          </InfoTable>
          <InfoTable>
            <tr>
              <td>Mã bộ phận</td>
              <td>IT - 330700</td>
            </tr>
            <tr>
              <td>Chức vụ</td>
              <td>Staff - 61</td>
            </tr>
            <tr>
              <td>Chức trách</td>
              <td>Quản lý</td>
            </tr>
            <tr>
              <td>Thâm niên</td>
              <td>Nô</td>
            </tr>
            <tr>
              <td>Bậc lương</td>
              <td>Q6 - Tiểu tốt</td>
            </tr>
            <tr>
              <td>Hệ số lương</td>
              <td>01</td>
            </tr>
          </InfoTable>
        </div>
      </InfoItem>
      <InfoItem>
        <p className="font-bold text-blue-500 mb-1">Thông tin cơ bản</p>
        <div
          className="flex bg-white px-2 py-1 ml-2"
          style={{ border: "1px solid gray", borderRadius: "2px" }}
        >
          <InfoTable>
            <tr>
              <td>Ngày vào tập đoàn</td>
              <td>2024-06-10</td>
            </tr>
            <tr>
              <td>Ngày vào công ty</td>
              <td>2024-06-10</td>
            </tr>
            <tr>
              <td>Ngày kết thúc thử việc</td>
              <td>2024-08-09</td>
            </tr>
            <tr>
              <td>Ngày biến động nhân sự</td>
              <td>2024-06-10</td>
            </tr>
          </InfoTable>
          <InfoTable>
            <tr>
              <td>Xác nhận kinh nghiệm</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Ngày thay đổi gần đây</td>
              <td>Chiệu</td>
            </tr>
            <tr>
              <td>Ngày thôi việc</td>
              <td>Chiệu</td>
            </tr>
            <tr>
              <td>Lý do thôi việc</td>
              <td>Chiệu</td>
            </tr>
          </InfoTable>
        </div>
      </InfoItem>
    </>
  );
}
