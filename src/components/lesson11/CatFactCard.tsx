import React from "react";
import styles from "./CatFactCard.module.css";
interface CatFactCardProps {
  fact: string;
  image?: string;
}
const CatFactCard: React.FC<CatFactCardProps> = ({ fact, image }) => {
  return (
    <div className={styles.card}>
      {image && <img src={image} alt="Cat" className={styles.image} />}
      <p>{fact}</p>
    </div>
  );
};
export default CatFactCard;