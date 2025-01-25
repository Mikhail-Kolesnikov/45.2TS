import MyButton from "../myButton/MyButton";
import styles from './UserCard.module.css'
interface IUserCardsProps{
  name:string
  age:number 
  
}
//на место props 
function UserCard({name, age}:IUserCardsProps) {
  const handleClick = () =>{
    alert(`Hello, ${name}!`)
  }
  return (
    <div className={styles.user_card}>
      <p>Name:{name}</p>
      <p>Age:{age}</p>
      <div className={styles.button_container}>
      <MyButton type = "button" func={handleClick} text={`Knockout ${name}`}/>
      </div>
    </div>
  )
};
export default UserCard;

