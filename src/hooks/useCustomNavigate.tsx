import { useNavigate } from "react-router-dom";

export default function useCustomNaviage() {
  const navigate = useNavigate();
  const customNavigate = (link: string) => {
    const path = window.location.pathname;
    console.log(path, link);
    if (path.split("/")[1] === "m") {
      if (link.split("/")[1] !== "m") {
        navigate("/m" + link);
      } else navigate(link);
    } else navigate(link);
  };
  return customNavigate;
}
