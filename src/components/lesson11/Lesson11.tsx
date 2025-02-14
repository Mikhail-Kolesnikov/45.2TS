import React, { useState, useEffect } from "react";
import styles from "./Lesson11.module.css";
import Loader from "./Loader";
import CatFactCard from "./CatFactCard";



interface CatFact {
  id: string;
  fact: string;
  image?: string;
}

const Lesson11: React.FC = () => {
  const [facts, setFacts] = useState<CatFact[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const fetchCatFact = async () => {
    setLoading(true);
    try {
      const factResponse = await fetch("https://catfact.ninja/fact");
      const factData = await factResponse.json();
      const imageResponse = await fetch(
        "https://api.thecatapi.com/v1/images/search?size=med&limit=1"
      );

      const imageData = await imageResponse.json();
      const newFact: CatFact = {
        id: crypto.randomUUID(),
        fact: factData.fact,
        image: imageData[0]?.url || "",
      };

      setFacts((prevFacts) => [...prevFacts, newFact]);
    } catch (error) {
      console.error("Ошибка загрузки данных:", error);
    } finally {
      setLoading(false);
    }
  };

  const clearFacts = () => setFacts([]);
  useEffect(() => {
    fetchCatFact();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Мои кошечки</h1>
      <button onClick={fetchCatFact} className={styles.button}>
        Больше кошек
      </button>
      {facts.length > 0 && (
        <button onClick={clearFacts} className={styles.deleteButton}>
          Убрать кошек
        </button>
      )}
      {loading && <Loader />}
      <div className={styles.factList}>
        {facts.map((fact) => (
          <CatFactCard key={fact.id} fact={fact.fact} image={fact.image} />
        ))}
      </div>
    </div>
  );
};
export default Lesson11;
