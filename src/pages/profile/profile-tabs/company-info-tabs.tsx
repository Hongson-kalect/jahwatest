import * as React from "react";
import styled from "styled-components";

export interface ISeftInfoProps {}

// const Wrapper =styled.div`

// `

// export default function SeftInfo (props: ISeftInfoProps) {
//   return (
//     <div>

//     </div>
//   );
// }

export const InfoTable = styled.table`
  font-size: 14px;
  tr:first-child {
    text-align: left;
  }
  td {
    padding: 4px 4px;
    font-size: 14px;

    &:first-child {
      /* width: 100px; */
      padding: 2px 4px;
      font-weight: 600;
      color: #131313;
      /* border-right: 1px solid red; */
    }
    &:last-child {
      /* width: 100px; */
      padding: 4px 8px;
      /* font-style: italic; */
      /* text-decoration: u; */
      /* font-weight: 600; */
      color: #131313;
    }
  }

  td {
    /* border: 1px solid #e6e6e6; */
  }
`;

export function CompanyDetailInfo(props: ISeftInfoProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-green-500 text-2xl font-semibold uppercase my-4">
        Thông tin làm việc chi tiết
      </p>
      <div className="flex justify-evenly w-full">
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
            <td>Mã bộ phận</td>
            <td>IT - 330700</td>
          </tr>
          <tr>
            <td>Chức vụ</td>
            <td>Staff -61</td>
          </tr>
          <tr>
            <td>Nơi làm việc</td>
            <td>JAHWA VINA - 94</td>
          </tr>
        </InfoTable>

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
        </InfoTable>
        <InfoTable>
          <tr>
            <td>Nơi làm việc</td>
            <td>JAHWA VINA - 94</td>
          </tr>
          <tr>
            <td>Mã bộ phận nội bộ</td>
            <td>15</td>
          </tr>
          <tr>
            <td>Nhiệm vụ</td>
            <td>Quản lý - 05</td>
          </tr>
          <tr>
            <td>Bậc lương</td>
            <td>Q6 - Tiểu tốt</td>
          </tr>
          <tr>
            <td>Hệ số lương</td>
            <td>01</td>
          </tr>
          <tr>
            <td>Chức trách</td>
            <td>Nhân viên (Qoèn)</td>
          </tr>
          <tr>
            <td>Lý do thôi việc</td>
            <td>Bị đuổi</td>
          </tr>
        </InfoTable>
      </div>
    </div>
  );
}
