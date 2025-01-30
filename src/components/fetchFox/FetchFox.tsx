import React, { useEffect, useState } from "react";
import Loader from "../loader/Loader";
import "./fetchFox.css";
import MyButton from "../myButton/MyButton";

interface IFoxData {
  image: string;
  link: string;
}

export default function FetchFox() {
  

  const [imgFox, setImgFox] = useState<string>("");

  const [isLoading, setIsLoading] = useState<boolean>(true);
  

  const getFox = async () => {
    //Включаем Loader
    setIsLoading(true)
    const res = await fetch("https://randomfox.ca/floof/");

    const data: IFoxData = await res.json();

    setImgFox(data.image);
    //выключаем Loader
    setIsLoading(false);
  };
  useEffect(() => {
    getFox();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h2>Fetch fox 😼</h2>
          <div className="fox-wrapper">
            <img src={imgFox} alt="" />
          </div>
          <MyButton func={getFox} text=" I need Fox!" />
        </>
      )}
    </div>
  );
}
