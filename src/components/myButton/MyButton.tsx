
interface IMyButtonProps{
  //необязательные ключи
  text?:string
  type?: "button" | "submit" | "reset"
  func:()=>void
}

import "./myButton.css";

//указали значения по умолчанию для необязательных ключей
export default function MyButton({ func, text ="Click me", type ="submit" }:IMyButtonProps) {
  return (
    <button type={type} className="button" onClick={func}>
      {text}
    </button>
  );
}
