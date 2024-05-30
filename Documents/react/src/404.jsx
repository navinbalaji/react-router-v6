import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function _404() {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("HI");
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }, []);
  return <>Not found 404</>;
}
