import { useEffect, useState } from "react";

export default function Playground(): JSX.Element{
    const[numberOfDogs, setNumberOfDogs]= useState<number>(0)
    const[numberOfBirds, setNumberOfBirds]= useState<number>(10)

    function handleAddDog(): void{
        setNumberOfDogs(numberOfBirds +1)
    }
    function handleAddBird():void{
        setNumberOfBirds(numberOfBirds +1)
    }

    // Component lifcycle - жизненный цикл компонента
 // Этапы жизненого цикла:
  // Mount - первая отрисовка компонента на странице
  // Update - изменение
  // Unmount - когда перестает отрисовываться
   
 // позволяет вызвать функцию
  // на каком-нибудь из этапов жизни компонента

  //1 Пустой массив зависимости

  useEffect(()=>{
    console.log('UseEffect 1 - произойдет только при первой отрисовке')
  },[])

  //2 Без массива зависимостей(вообще)

  useEffect(()=>{
    console.log('UseEffeckt 2 - при первой отрисовке  и при любых изменениях')
  })
//3 - с указанием зависимостей
useEffect(()=>{
    console.log('UseEffect 3- при первичной отрисовке и при изменении переменной numberOfDogs')
},[numberOfDogs])

 return(
    <div>
        <h1>Playground</h1>
        <p>Number of Dogs:{numberOfDogs}</p>
        <p>Number of birds:{numberOfBirds}</p>
        <button type="button" onClick={handleAddDog}>Let the dog in</button>
        <button type="button" onClick={handleAddBird}>New bird</button>
    </div>
 )
}