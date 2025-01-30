import styles from './MyButton.module.css'
import cn from 'classnames'
interface IMyButtonProps{
  //тип кнопки, чтобы показыывать разные стили
  variant?: 'primary' | 'danger'
//активная кнопка или нет
  disabled?: boolean
  //необязательные ключи
  text?:string
  type?: "button" | "submit" | "reset"
  func?:()=>void
}



//указали значения по умолчанию для необязательных ключей
export default function MyButton({ func=()=>{}, text ="Click me", type ="submit", variant ='primary', disabled= false }:IMyButtonProps) {
  return (
    <button  className={cn(styles.myButton, {
      [styles.primary]: variant === 'primary',
      [styles.danger]: variant === 'danger',
      [styles.disabled]: disabled === true

    })} 
    type= {type}
    onClick={func}>
      {text}
    </button>
  );
}
