import * as React from "react";
import styled from "styled-components";
import { InfoItem, InfoTable } from "./other-info.tabs";
import { useTranslation } from "react-i18next";

export interface ISeftInfoProps {}

export function SeftDetailInfo(props: ISeftInfoProps) {
  const { t } = useTranslation();
  return (
    <>
      <InfoItem>
        <p className="font-bold text-blue-500 mb-1">
          {t("profile.detail.seftInfo.title")}
        </p>
        <div
          className="flex bg-white px-2 py-1 ml-2"
          style={{ border: "1px solid gray", borderRadius: "2px" }}
        >
          <InfoTable>
            <tr>
              <td>{t("profile.detail.seftInfo.code")}</td>
              <td>V22406013</td>
            </tr>
            <tr>
              <td>{t("profile.detail.seftInfo.name")}</td>
              <td>Phùng Quốc Hùng</td>
            </tr>
            <tr>
              <td>{t("profile.detail.seftInfo.dayOfBirth")}</td>
              <td>11/11/2011</td>
            </tr>
            <tr>
              <td>{t("profile.detail.seftInfo.gender")}</td>
              <td>Nam</td>
            </tr>
            <tr>
              <td>{t("profile.detail.seftInfo.email")}</td>
              <td>hungchaykkk@gmail.com</td>
            </tr>
          </InfoTable>
          <InfoTable>
            <tr>
              <td>{t("profile.detail.seftInfo.address")}</td>
              <td>Đại Đình - Tam Đảo - Vĩnh Phúc</td>
            </tr>
            <tr>
              <td>{t("profile.detail.seftInfo.homeLocation")}</td>
              <td>Đại Đình - Tam Đảo - Vĩnh Phúc</td>
            </tr>
            <tr>
              <td>{t("profile.detail.seftInfo.phone")}</td>
              <td>0123456789</td>
            </tr>
            <tr>
              <td>{t("profile.detail.seftInfo.IDNumber")}</td>
              <td>123456789</td>
            </tr>
            <tr>
              <td>{t("profile.detail.seftInfo.nation")}</td>
              <td>Việt Nam</td>
            </tr>
          </InfoTable>
        </div>
      </InfoItem>
      <InfoItem>
        <p className="font-bold text-blue-500 mb-1">
          {t("profile.detail.seftInfo.detailInfo")}
        </p>
        <div
          className="flex bg-white px-2 py-1 ml-2"
          style={{ border: "1px solid gray", borderRadius: "2px" }}
        >
          <InfoTable>
            <tr>
              <td>{t("profile.detail.seftInfo.koreanName")}</td>
              <td>nila sing a xỏong</td>
            </tr>
            <tr>
              <td>{t("profile.detail.seftInfo.englishName")}</td>
              <td>Phung Quoc Hung</td>
            </tr>
            <tr>
              <td>{t("profile.detail.seftInfo.nickName")}</td>
              <td>Chày Húng</td>
            </tr>
            <tr>
              <td>{t("profile.detail.seftInfo.marriedStatus")}</td>
              <td>Đã kết hôn</td>
            </tr>
          </InfoTable>
          <InfoTable>
            <tr>
              <td>{t("profile.detail.seftInfo.education")}</td>
              <td>Đại học</td>
            </tr>
            <tr>
              <td>{t("profile.detail.seftInfo.specialization")}</td>
              <td>CNTT</td>
            </tr>
            <tr>
              <td>{t("profile.detail.seftInfo.grade")}</td>
              <td>Xuất sắc</td>
            </tr>
            <tr>
              <td>{t("profile.detail.seftInfo.lastSchool")}</td>
              <td>Trường Đại học cơ sở Nguyễn Trãi</td>
            </tr>
          </InfoTable>
        </div>
      </InfoItem>
      <InfoItem>
        <p className="font-bold text-blue-500 mb-1">
          {t("profile.detail.seftInfo.otherInfo")}
        </p>
        <div
          className="flex bg-white px-2 py-1 ml-2"
          style={{ border: "1px solid gray", borderRadius: "2px" }}
        >
          <InfoTable>
            <tr>
              <td>{t("profile.detail.seftInfo.group")}</td>
              <td>Nhóm 1</td>
            </tr>
            <tr>
              <td>{t("profile.detail.seftInfo.workGroup")}</td>
              <td>Nghề 1</td>
            </tr>
            <tr>
              <td>{t("profile.detail.seftInfo.residenceType")}</td>
              <td>??</td>
            </tr>
            <tr>
              <td>{t("profile.detail.seftInfo.devisionType")}</td>
              <td>???</td>
            </tr>
            <tr>
              <td>{t("profile.detail.seftInfo.anniverType")}</td>
              <td>VIP</td>
            </tr>
            <tr>
              <td>{t("profile.detail.seftInfo.anniverDay")}</td>
              <td>?????</td>
            </tr>
          </InfoTable>
          <InfoTable>
            <tr>
              <td>{t("profile.detail.seftInfo.healthInsurance")}</td>
              <td>093423312312</td>
            </tr>
            <tr>
              <td>{t("profile.detail.seftInfo.socialInsurance")}</td>
              <td>102374124</td>
            </tr>
            <tr>
              <td>{t("profile.detail.seftInfo.recruitType")}</td>
              <td>VIP</td>
            </tr>

            <tr>
              <td>{t("profile.detail.seftInfo.dependPerson")}</td>
              <td>Ai Rứa?</td>
            </tr>
            <tr>
              <td>{t("profile.detail.seftInfo.relationShip")}</td>
              <td>Thằng lào</td>
            </tr>
            <tr>
              <td>{t("profile.detail.seftInfo.contact")}</td>
              <td>0234809835</td>
            </tr>
          </InfoTable>
        </div>
      </InfoItem>
    </>
  );
}
