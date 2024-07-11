import { DefaultOptionType } from "antd/es/select";
import { BiSolidReport } from "react-icons/bi";
import { FaUsersCog } from "react-icons/fa";
import {
  FaBuildingUser,
  FaCalendarCheck,
  FaCalendarXmark,
  FaChartLine,
  FaSackDollar,
  FaUser,
} from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import {
  MdEditDocument,
  MdMapsHomeWork,
  MdOutlineNewspaper,
} from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";

import vnFlag from "src/assets/image/vnFlag.jfif";
import krFlag from "src/assets/image/krFlag.png";
import cnFlag from "src/assets/image/cnFlag.png";
import enFlag from "src/assets/image/enFlag.png";

export const menuLList = [
  {
    title: "wage",
    link: "/m/wage",
    icon: <FaSackDollar />,
    type: "personal",
  },
  {
    title: "dayOff",
    link: "/m/day-off",
    icon: <FaCalendarXmark />,
    type: "personal",
  },
  {
    title: "progress",
    link: "/m/work",
    icon: <FaCalendarCheck />,
    type: "personal",
  },
  {
    title: "notification",
    link: "/notification",
    icon: <MdOutlineNewspaper />,
    type: "personal",
  },
  {
    title: "seft",
    link: "/profile",
    icon: <FaUser />,
    type: "personal",
  },
  {
    title: "mail",
    link: "/profile",
    icon: <IoMail />,
    type: "work",
  },
  {
    title: "approval",
    link: "/profile",
    icon: <MdEditDocument />,
    type: "work",
    subMenu: ["list", "request"],
  },
  {
    title: "plan",
    link: "/profile",
    icon: <FaChartLine />,
    type: "work",
  },
  {
    title: "humanMNG",
    link: "/profile",
    icon: <FaUsersCog />,
    type: "work",
  },
  {
    title: "suplierMNG",
    link: "/profile",
    icon: <MdMapsHomeWork />,
    type: "work",
  },
  {
    title: "distributionMNG",
    link: "/profile",
    icon: <SiGooglemaps />,
    type: "work",
  },
  {
    title: "notification",
    link: "/profile",
    icon: <MdOutlineNewspaper />,
    type: "work",
  },
  {
    title: "report",
    link: "/profile",
    icon: <BiSolidReport />,
    type: "work",
  },
  {
    title: "jahwaVN",
    link: "/profile",
    icon: <FaBuildingUser />,
    type: "work",

    subMenu: ["list", "request"],
  },
];

export const languages: DefaultOptionType[] = [
  {
    value: "vi",
    label: (
      <div className="flex gap-1 items-center justify-between">
        <div
          className="h-4 w-6"
          style={{
            background: `url(${vnFlag}) center center /contain no-repeat`,
          }}
        ></div>
        <p className="font-semibold" style={{ fontSize: "12px" }}>
          VN
        </p>
      </div>
    ),
  },
  {
    value: "kr",
    label: (
      <div className="flex gap-1 items-center justify-between">
        <div
          className="h-4 w-6"
          style={{
            background: `url(${krFlag}) center center /contain no-repeat`,
          }}
        ></div>
        <p className="font-semibold" style={{ fontSize: "12px" }}>
          KR
        </p>
      </div>
    ),
  },
  {
    value: "cn",
    label: (
      <div className="flex gap-1 items-center justify-between">
        <div
          className="h-4 w-6"
          style={{
            background: `url(${cnFlag}) center center /contain no-repeat`,
          }}
        ></div>
        <p className="font-semibold" style={{ fontSize: "12px" }}>
          CN
        </p>
      </div>
    ),
  },
  {
    value: "en",
    label: (
      <div className="flex gap-1 items-center justify-between">
        <div
          className="h-4 w-6"
          style={{
            background: `url(${enFlag}) center center /contain no-repeat`,
          }}
        ></div>
        <p className="font-semibold" style={{ fontSize: "12px" }}>
          EN
        </p>
      </div>
    ),
  },
];
