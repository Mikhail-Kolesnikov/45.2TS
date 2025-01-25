// в первой трети
//компонента происходят импорты из других файлов
//+ работа с неизменяемыми данными

import { useState } from "react";
import './lesson04.css'

function Lesson04() {
  // в второй трети - теле функции мы работаем с изменяемыми данными
  // здесь вызываются функции, происходят асинхронные запросы
  // вызываются специальные методы внутри react
  // код ниже сработал бы в обычном script.js но не
  //обновляет данные на странице в react

  // let count = 1

  //     count ++
  //     console.log(count)
  const [count, setCount] = useState<number>(1);
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const handleSwitcher = () =>{
    setIsVisible(prev => !prev)
    console.log(isVisible)
  }

  const handlePlus = ():void => {
    setCount((prev) => prev + 1);
  };

  //console.log(count);
  const handleMinus = () => {
    setCount((prev) => prev - 1);
  };

  return (
    // в последней трети - после return мы показываем верстку
    //и отображаем данные в тегах

    <div className="counter">
      <h2>UseState() hook 🪝🤛</h2>
      <p>
        Чтобы при изменении переменной, в примере ниже мы видели результат и
        компонент обновился - не достаточно обычной переменной 🙅‍♂️
      </p>
      <p>
        Нужно использовать специальную переменную состояния из встроенной в
        React функции useState()
      </p>
      <div>
        <button onClick={handleSwitcher}>🪄 {!isVisible ? 'show' : 'hide'} counter 🪄</button>
      </div>
      {isVisible &&(
      <div className="counter">
        <button onClick={handleMinus}>-</button>
        <span>{count}</span>
        <button onClick={handlePlus}>+</button>
        <button className="red">red</button>
        <button className="green">green</button>
        <button className="blue">blue</button>
      </div>
      )}
    </div>

  );
}

export default Lesson04;
