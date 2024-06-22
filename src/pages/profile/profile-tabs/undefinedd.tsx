import * as React from "react";
import styled from "styled-components";
import { InfoItem, InfoTable } from "./other-info.tabs";

export interface ISeftInfoProps {}

export function SeftDetailInfo(props: ISeftInfoProps) {
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
              <td>Mã nhân viên</td>
              <td>V22406013</td>
            </tr>
            <tr>
              <td>Tên nhân viên</td>
              <td>Phùng Quốc Hùng</td>
            </tr>
            <tr>
              <td>Ngày sinh</td>
              <td>11/11/2011</td>
            </tr>
            <tr>
              <td>Giới tính</td>
              <td>Nam</td>
            </tr>
            <tr>
              <td>Email cá nhân</td>
              <td>hungchaykkk@gmail.com</td>
            </tr>
          </InfoTable>
          <InfoTable>
            <tr>
              <td>Nơi sinh</td>
              <td>Đại Đình - Tam Đảo - Vĩnh Phúc</td>
            </tr>
            <tr>
              <td>Thường trú</td>
              <td>Đại Đình - Tam Đảo - Vĩnh Phúc</td>
            </tr>
            <tr>
              <td>Số liên hệ</td>
              <td>0123456789</td>
            </tr>
            <tr>
              <td>Số CMND</td>
              <td>123456789</td>
            </tr>
            <tr>
              <td>Quốc tịch</td>
              <td>Việt Nam</td>
            </tr>
          </InfoTable>
        </div>
      </InfoItem>
      <InfoItem>
        <p className="font-bold text-blue-500 mb-1">Thông tin chi tiết</p>
        <div
          className="flex bg-white px-2 py-1 ml-2"
          style={{ border: "1px solid gray", borderRadius: "2px" }}
        >
          <InfoTable>
            <tr>
              <td>Tên tiếng Hàn</td>
              <td>nila sing a xỏong</td>
            </tr>
            <tr>
              <td>Tên tiếng Anh</td>
              <td>Phung Quoc Hung</td>
            </tr>
            <tr>
              <td>Biệt danh</td>
              <td>Chày Húng</td>
            </tr>
            <tr>
              <td>Tình trạng hôn nhân</td>
              <td>Đã kết hôn</td>
            </tr>
          </InfoTable>
          <InfoTable>
            <tr>
              <td>Trình độ Học vấn</td>
              <td>Đại học</td>
            </tr>
            <tr>
              <td>Chuyên ngành</td>
              <td>CNTT</td>
            </tr>
            <tr>
              <td>Hạng bằng</td>
              <td>Xuất sắc</td>
            </tr>
            <tr>
              <td>Trường cuối cùng</td>
              <td>Trường Đại học cơ sở Nguyễn Trãi</td>
            </tr>
          </InfoTable>
        </div>
      </InfoItem>
      <InfoItem>
        <p className="font-bold text-blue-500 mb-1">Thông tin khác</p>
        <div
          className="flex bg-white px-2 py-1 ml-2"
          style={{ border: "1px solid gray", borderRadius: "2px" }}
        >
          <InfoTable>
            <tr>
              <td>Nhóm</td>
              <td>Nhóm 1</td>
            </tr>
            <tr>
              <td>Nhóm nghề</td>
              <td>Nghề 1</td>
            </tr>
            <tr>
              <td>Phân loại cư trú</td>
              <td>??</td>
            </tr>
            <tr>
              <td>Kiểu phân loại</td>
              <td>???</td>
            </tr>
            <tr>
              <td>Phân loại kỉ niệm</td>
              <td>VIP</td>
            </tr>
            <tr>
              <td>Ngày kỉ niệm</td>
              <td>?????</td>
            </tr>
          </InfoTable>
          <InfoTable>
            <tr>
              <td>Bảo hiểm y tế</td>
              <td>093423312312</td>
            </tr>
            <tr>
              <td>Bảo hiểm xã hội</td>
              <td>102374124</td>
            </tr>
            <tr>
              <td>Phân loại tuyển dụng</td>
              <td>VIP</td>
            </tr>

            <tr>
              <td>Người phụ thuộc</td>
              <td>Ai Rứa?</td>
            </tr>
            <tr>
              <td>Quan hệ phụ thuộc</td>
              <td>Thằng lào</td>
            </tr>
            <tr>
              <td>Liên hệ phụ thuộc</td>
              <td>0234809835</td>
            </tr>
          </InfoTable>
        </div>
      </InfoItem>
    </>
  );
}
