import TextArea from "antd/es/input/TextArea";
import * as React from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  return (
    <>
      <InfoItem>
        <p className="font-bold text-blue-500 mb-1">
          {t("profile.detail.otherInfo.armyInfo")}
        </p>
        <div
          className="flex bg-white px-2 py-1 ml-2"
          style={{ border: "1px solid gray", borderRadius: "2px" }}
        >
          <InfoTable>
            <tr>
              <td>{t("profile.detail.otherInfo.armyType")}</td>
              <td>Chiệu - 00</td>
            </tr>
            <tr>
              <td>{t("profile.detail.otherInfo.serviceYear")}</td>
              <td>5 năm</td>
            </tr>
            <tr>
              <td>{t("profile.detail.otherInfo.serviceAt")}</td>
              <td>Chệu</td>
            </tr>
          </InfoTable>
          <InfoTable>
            <tr>
              <td>{t("profile.detail.otherInfo.byArmy")}</td>
              <td>Chệu</td>
            </tr>

            <tr>
              <td>{t("profile.detail.otherInfo.armyRank")}</td>
              <td>Thượng tá</td>
            </tr>

            <tr>
              <td>{t("profile.detail.otherInfo.armyCode")}</td>
              <td>Chệu</td>
            </tr>
          </InfoTable>
        </div>
      </InfoItem>
      <InfoItem>
        <p className="font-bold text-blue-500 mb-1">
          {t("profile.detail.otherInfo.healthInfo")}
        </p>
        <div
          className="flex flex-col bg-white px-2 py-1 ml-2"
          style={{ border: "1px solid gray", borderRadius: "2px" }}
        >
          <div className="flex">
            <InfoTable>
              <tr>
                <td>{t("profile.detail.otherInfo.height")}</td>
                <td>192 cm</td>
              </tr>
              <tr>
                <td>{t("profile.detail.otherInfo.weight")}</td>
                <td>43 kg</td>
              </tr>
              <tr>
                <td>{t("profile.detail.otherInfo.bloodType")}</td>
                <td>X</td>
              </tr>
            </InfoTable>
            <InfoTable>
              <tr>
                <td>{t("profile.detail.otherInfo.leftEye")}</td>
                <td>10/10</td>
              </tr>

              <tr>
                <td>{t("profile.detail.otherInfo.rightEye")}</td>
                <td>10/10</td>
              </tr>

              <tr>
                <td>{t("profile.detail.otherInfo.blindEye")}</td>
                <td>Màu Sancroxis</td>
              </tr>
            </InfoTable>
          </div>
          <p className="text-sm m-2 font-bold text-gray-700">
            {t("profile.detail.otherInfo.otherInfo") + ": "}
            <span className="font-normal text-xs">
              Từ bé giờ viêm cúm A t còn không sợ, sợ q j cúm B
            </span>
          </p>
        </div>
      </InfoItem>

      <InfoItem>
        <p className="font-bold text-blue-500 mb-1">
          {t("profile.detail.otherInfo.introducer")}
        </p>
        <div
          className="flex bg-white px-2 py-1 ml-2"
          style={{ border: "1px solid gray", borderRadius: "2px" }}
        >
          <InfoTable>
            <tr>
              <td>{t("profile.detail.otherInfo.name")}</td>
              <td>Ning la xing a xỉn</td>
            </tr>
            <tr>
              <td>{t("profile.detail.otherInfo.workPlace")}</td>
              <td>Văn phòng chủ tịch nước</td>
            </tr>
          </InfoTable>
          <InfoTable>
            <tr>
              <td>{t("profile.detail.otherInfo.relationship")}</td>
              <td>Đệ của mị</td>
            </tr>

            <tr>
              <td>{t("profile.detail.otherInfo.position")}</td>
              <td>Bảo vệ</td>
            </tr>
          </InfoTable>
        </div>
      </InfoItem>

      <InfoItem>
        <p className="font-bold text-blue-500 mb-1">
          {t("profile.detail.otherInfo.jobInfo")}
        </p>
        <div
          className="flex bg-white px-2 py-1 ml-2"
          style={{ border: "1px solid gray", borderRadius: "2px" }}
        >
          <InfoTable>
            <tr>
              <td>{t("profile.detail.otherInfo.soldierType")}</td>
              <td>Chệu</td>
            </tr>
            <tr>
              <td>{t("profile.detail.otherInfo.speciality")}</td>
              <td>Chệu</td>
            </tr>
            <tr>
              <td>{t("profile.detail.otherInfo.specialSkill")}</td>
              <td>Ăn cơm bằng bát</td>
            </tr>
          </InfoTable>
          <InfoTable>
            <tr>
              <td>{t("profile.detail.otherInfo.allowance")}</td>
              <td>-4 chệu</td>
            </tr>

            <tr>
              <td>{t("profile.detail.otherInfo.injuryLevel")}</td>
              <td>Đếu</td>
            </tr>

            <tr>
              <td>{t("profile.detail.otherInfo.religion")}</td>
              <td>Đếu</td>
            </tr>
          </InfoTable>
        </div>
      </InfoItem>
    </>
  );
}
