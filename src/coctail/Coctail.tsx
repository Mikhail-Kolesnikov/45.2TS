//Task #1
//Создать компонент Coctail.tsx и отрисовать как минимум два ключа :
//- Название коктейля
//Фото напитка
//https://www.thecocktaildb.com/api/json/v1/1/random.php
//ИСпользовать useEffect   только для первой отрисовки
//Mikhail Smokotnin

import { useEffect, useState } from "react"



export default function Coctail(): JSX.Element{
    const[nameOfCoctail, setNameOfCoctail] =useState<string>("");
    const [image,setImage] = useState<string>("");


    useEffect(() => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
          .then((response) => response.json())
          .then((data) => {
            if (data.drinks && data.drinks.length > 0) {
              setNameOfCoctail(data.drinks[0].strDrink);
              setImage(data.drinks[0].strDrinkThumb);
            }
          })
          .catch((error) => console.error("Error fetching cocktail:", error));
      }, []); 
    
      return (
        <div>
          <h2>Cocktail of the Day 🍹</h2>
          {nameOfCoctail && image ? (
            <div>
              <h3>{nameOfCoctail}</h3>
              <img
                src={image}
                alt={nameOfCoctail}
                width={300}
                height={300}
                style={{ borderRadius: "8px" }}
              />
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      );
    }

