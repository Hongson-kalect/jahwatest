import TextArea from "antd/es/input/TextArea";
import * as React from "react";
import styled from "styled-components";

export interface ISeftInfoProps {}

export const InfoItem = styled.div`
  padding: 4px 8px;

  & + & {
    margin-top: 8px;
  }
  /* border: 1px solid red; */
`;
export const InfoTable = styled.table`
  width: 50%;
  font-size: 14px;
  tr:first-child {
    text-align: left;
  }
  td {
    /* padding: 4px 4px; */
    font-size: 14px;

    &:first-child {
      /* width: 100px; */
      padding: 2px 4px;
      font-weight: 600;
      color: #131313;
      /* border-right: 1px solid red; */
    }
    &:last-child {
      min-width: 300px;
      padding: 2px 12px;
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

// export default function SeftInfo (props: ISeftInfoProps) {
//   return (
//     <div>

//     </div>
//   );
// }

export function OtherDetailInfo(props: ISeftInfoProps) {
  return (
    <>
      <InfoItem>
        <p className="font-bold text-blue-500 mb-1">Nghĩa vụ quân sự</p>
        <div
          className="flex bg-white px-2 py-1 ml-2"
          style={{ border: "1px solid gray", borderRadius: "2px" }}
        >
          <InfoTable>
            <tr>
              <td>Phân loại quân sự</td>
              <td>Chiệu - 00</td>
            </tr>
            <tr>
              <td>Thời gian trong quân sự</td>
              <td>5 năm</td>
            </tr>
            <tr>
              <td>Nơi đầu quân</td>
              <td>Chệu</td>
            </tr>
          </InfoTable>
          <InfoTable>
            <tr>
              <td>By Army</td>
              <td>Chệu</td>
            </tr>

            <tr>
              <td>Cấp bậc quân sự</td>
              <td>Thượng tá</td>
            </tr>

            <tr>
              <td>Mã nghĩa vụ</td>
              <td>Chệu</td>
            </tr>
          </InfoTable>
        </div>
      </InfoItem>
      <InfoItem>
        <p className="font-bold text-blue-500 mb-1">Sức khỏe cá nhân</p>
        <div
          className="flex flex-col bg-white px-2 py-1 ml-2"
          style={{ border: "1px solid gray", borderRadius: "2px" }}
        >
          <div className="flex">
            <InfoTable>
              <tr>
                <td>Chiều cao</td>
                <td>192 cm</td>
              </tr>
              <tr>
                <td>Cân nặng</td>
                <td>43 kg</td>
              </tr>
              <tr>
                <td>Nhóm máu</td>
                <td>X</td>
              </tr>
            </InfoTable>
            <InfoTable>
              <tr>
                <td>Thị lực trái</td>
                <td>10/10</td>
              </tr>

              <tr>
                <td>Thị lực phải</td>
                <td>10/10</td>
              </tr>

              <tr>
                <td>Mù màu</td>
                <td>Màu Sancroxis</td>
              </tr>
            </InfoTable>
          </div>
          <p className="text-sm m-2 font-bold text-gray-700">
            Thông tin khác:{" "}
            <span className="font-normal text-xs">
              Từ bé giờ viêm cúm A t còn không sợ, sợ q j cúm B
            </span>
          </p>
        </div>
      </InfoItem>

      <InfoItem>
        <p className="font-bold text-blue-500 mb-1">Người giới thiệu</p>
        <div
          className="flex bg-white px-2 py-1 ml-2"
          style={{ border: "1px solid gray", borderRadius: "2px" }}
        >
          <InfoTable>
            <tr>
              <td>Tên</td>
              <td>Ning la xing a xỉn</td>
            </tr>
            <tr>
              <td>Nơi làm việc</td>
              <td>Văn phòng chủ tịch nước</td>
            </tr>
          </InfoTable>
          <InfoTable>
            <tr>
              <td>Mối quan hệ</td>
              <td>Đệ của mị</td>
            </tr>

            <tr>
              <td>Chức vụ</td>
              <td>Bảo vệ</td>
            </tr>
          </InfoTable>
        </div>
      </InfoItem>

      <InfoItem>
        <p className="font-bold text-blue-500 mb-1">Hạng mục khác</p>
        <div
          className="flex bg-white px-2 py-1 ml-2"
          style={{ border: "1px solid gray", borderRadius: "2px" }}
        >
          <InfoTable>
            <tr>
              <td>Phân loại thương binh</td>
              <td>Chệu</td>
            </tr>
            <tr>
              <td>Phân loại tàn tật</td>
              <td>Chệu</td>
            </tr>
            <tr>
              <td>Kĩ năng đặc biệt</td>
              <td>Ăn cơm bằng bát</td>
            </tr>
          </InfoTable>
          <InfoTable>
            <tr>
              <td>Mức trợ cấp</td>
              <td>-4 chệu</td>
            </tr>

            <tr>
              <td>Mức độ tàn tật</td>
              <td>Đếu</td>
            </tr>

            <tr>
              <td>Tôn giáo</td>
              <td>Đếu</td>
            </tr>
          </InfoTable>
        </div>
      </InfoItem>
    </>
  );
}
