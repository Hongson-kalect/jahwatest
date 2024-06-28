import * as React from "react";
import styled from "styled-components";
import { InfoItem, InfoTable } from "./other-info.tabs";
import { useTranslation } from "react-i18next";

export interface ISeftInfoProps {}

export function CompanyDetailInfo(props: ISeftInfoProps) {
  const { t } = useTranslation();
  return (
    <>
      <InfoItem>
        <p className="font-bold text-blue-500 mb-1">
          {t("profile.detail.companyInfo.basicInfo")}
        </p>
        <div
          className="flex bg-white px-2 py-1 ml-2"
          style={{ border: "1px solid gray", borderRadius: "2px" }}
        >
          <InfoTable>
            <tr>
              <td>{t("profile.detail.companyInfo.companyCode")}</td>
              <td>VN532</td>
            </tr>
            <tr>
              <td>{t("profile.detail.companyInfo.companyName")}</td>
              <td>JAHWA VINA CO,. LTD.</td>
            </tr>
            <tr>
              <td>{t("profile.detail.companyInfo.placeOfBusiness")}</td>
              <td>JAHWA VINA CO,. LTD.</td>
            </tr>

            <tr>
              <td>{t("profile.detail.companyInfo.workingArea")}</td>
              <td>JAHWA VINA - 00</td>
            </tr>
            <tr>
              <td>{t("profile.detail.companyInfo.workingPlace")}</td>
              <td>JAHWA VINA - 94</td>
            </tr>
            <tr>
              <td>{t("profile.detail.companyInfo.internalDepartmentCode")}</td>
              <td>15</td>
            </tr>
          </InfoTable>
          <InfoTable>
            <tr>
              <td>{t("profile.detail.companyInfo.departmentCode")}</td>
              <td>IT - 330700</td>
            </tr>
            <tr>
              <td>{t("profile.detail.companyInfo.position")}</td>
              <td>Staff - 61</td>
            </tr>
            <tr>
              <td>{t("profile.detail.companyInfo.responsibility")}</td>
              <td>Quản lý</td>
            </tr>
            <tr>
              <td>{t("profile.detail.companyInfo.overYears")}</td>
              <td>Nô</td>
            </tr>
            <tr>
              <td>{t("profile.detail.companyInfo.wageRank")}</td>
              <td>Q6 - Tiểu tốt</td>
            </tr>
            <tr>
              <td>{t("profile.detail.companyInfo.wageScale")}</td>
              <td>01</td>
            </tr>
          </InfoTable>
        </div>
      </InfoItem>
      <InfoItem>
        <p className="font-bold text-blue-500 mb-1">
          {t("profile.detail.companyInfo.basicInfo")}
        </p>
        <div
          className="flex bg-white px-2 py-1 ml-2"
          style={{ border: "1px solid gray", borderRadius: "2px" }}
        >
          <InfoTable>
            <tr>
              <td>{t("profile.detail.companyInfo.joinGroupDate")}</td>
              <td>2024-06-10</td>
            </tr>
            <tr>
              <td>{t("profile.detail.companyInfo.joinCompanyDate")}</td>
              <td>2024-06-10</td>
            </tr>
            <tr>
              <td>{t("profile.detail.companyInfo.trialEndDate")}</td>
              <td>2024-08-09</td>
            </tr>
            <tr>
              <td>{t("profile.detail.companyInfo.changeToFullTimeDate")}</td>
              <td>2024-06-10</td>
            </tr>
          </InfoTable>
          <InfoTable>
            <tr>
              <td>{t("profile.detail.companyInfo.confirmExperience")}</td>
              <td>2</td>
            </tr>
            <tr>
              <td>{t("profile.detail.companyInfo.lastChangeDate")}</td>
              <td>Chiệu</td>
            </tr>
            <tr>
              <td>{t("profile.detail.companyInfo.lastTerminationDate")}</td>
              <td>Chiệu</td>
            </tr>
            <tr>
              <td>{t("profile.detail.companyInfo.lastTerminationReason")}</td>
              <td>Chiệu</td>
            </tr>
          </InfoTable>
        </div>
      </InfoItem>
    </>
  );
}
