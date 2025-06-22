import s from "./CurrentCourse.module.css";
import { faLandmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UnityCard } from "../Cards/UnityCard";

export const CurrentCourse = () => {
  const courseName = "Mundos Antiguos y Más allá";

  const unityList = [
    {
      id: 1,
      name: "Unidad 1: Primeras Sociedades Agrícolas y Civilizaciones",
      description: "Explora el surgimiento de las primeras sociedades agrícolas y las civilizaciones antiguas.",
    },
    {
      id: 2,
      name: "Unidad 2: Imperios y Conquistas",
      description: "Sumérgete en la historia de los grandes imperios y sus conquistas.",
    },
  ];

  return (
    <div className={s.container}>
      <span className={s.title}>
        <FontAwesomeIcon size="3x" icon={faLandmark} />
        <h1>{courseName}</h1>
      </span>

      <span>Elige una unidad para comenzar tu aventura histórica:</span>

      <div className={s.unityContainer}>
        <ul className={s.unityList}>
          {unityList?.map((unity, index) => (
            <li key={index}>
              <UnityCard unity={unity} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
