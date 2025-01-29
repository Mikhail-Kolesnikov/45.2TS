import { useEffect } from "react";
import { fellowship } from "./fellowship";
import "./lesson05.css";

function Lesson05() {
  console.log(fellowship);
  useEffect(()=>{
    console.log('lesson 5 mount')
  },[])
  return (
    <div>
      <h2>React map() components </h2>
      {fellowship.map((hero, index) => (
        <div className="heroCard" key={index}>
          <p className="heroName">{hero.name}</p>
          <p className="heroType">{hero.isDark ? 'Villan 🧌' : 'Hero🦸'}</p>
          <p className="heroAge">{hero.age} years old</p>
          <p className="heroWeapons">{hero.weapons.join(', ')}</p>
          <img className="heroImage" src={hero.image} alt="" />

        </div>
      ))}
    </div>
  );
}
export default Lesson05;
