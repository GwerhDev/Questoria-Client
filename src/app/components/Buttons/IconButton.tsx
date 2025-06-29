import { useNavigate } from "react-router-dom";
import s from "./IconButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const IconButton = (props: any) => {
  const { title, icon, size, onClick, to, children } = props || {};
  const navigate = useNavigate();

  const handleOnClick = () => {
    to && navigate(to);
    onClick && onClick();
  };

  return (
    <button title={title || ""} className={s.container} onClick={handleOnClick}>
      {icon && <FontAwesomeIcon size={size || 'lg'} icon={icon} />}
      {children}
    </button>
  )
}

