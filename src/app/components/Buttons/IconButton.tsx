import { useNavigate } from "react-router-dom";
import s from "./IconButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const IconButton = (props: any) => {
  const { title, icon, size, onClick, to, children, solid, href } = props || {};
  const navigate = useNavigate();

  const handleOnClick = () => {
    to && navigate(to);
    onClick && onClick();
    href && (window.location.href = href);
  };

  return (
    <button title={title || ""} className={solid ? s.solid : s.container} onClick={handleOnClick}>
      {icon && <FontAwesomeIcon size={size || 'lg'} icon={icon} />}
      {children}
    </button>
  )
}

