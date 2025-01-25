import MyButton from "../../components/myButton/MyButton";

function Lesson07() {
    // interface - типизация объекта
    //объекты можно типизировать через ключевое слово intrface
    //с помощью него мы создаем описание типов объекта
    interface ISuperHero {
        id: number;
        name: string;
        nickname: string;
        superpowers:string[];
        //необязательный ключ в объекте
        age?: number;
    }
    //пример расширения типа через ключевое слово extends
    interface ISpaceHero extends ISuperHero{
        homePlanet:string
    }

    const hero1:ISuperHero ={ 
        id: 1,
        name: 'Bruce Wayne',
        nickname: 'Batman',
        superpowers:[]
        
    };
    // у этого объкта расширенный тип
    const hero2:ISpaceHero={
        name:'Clark Kent',
        nickname: 'Superman',
        id:2,
        superpowers:['super fly', 'super vision'],
        homePlanet:'Crypton'
    };
    //через quick fix >add missing properties можно быстро добавить
    //недостающие для соблюдения типизации свойства в объект
    const hero3:ISuperHero ={
        id: 0,
        name: "",
        nickname: "",
        superpowers: []
    }
    // пример объединения типов 

    interface IDarkMagic {
        isDark:true;
    }
    interface ILightMagic{
        isLight: true;
    }
    interface IMagic extends IDarkMagic, ILightMagic{}
    //пример создания объекта с типом IMagic, котрый наследует 
    //IDarkMagic и ILightMagic
    const magic: IMagic ={
        isDark: true,
        isLight: true
    }
    // пример создания объекта с двумя типами 
    //этот случай хуже подходит для переиспользования
    const magic1:IDarkMagic & ILightMagic={
        isDark: true,
        isLight: true
    }
    // type - типизация объектов
    // альтарнативное ключевое слово для описания объекта
    type User = {
        id: number
        isAdmin:boolean
        name: string 
    }
    // пример объдинения типа через type и &

    type UserProfile = User & {
        info:string
    }

    
    const jane: User =  {
        id: 12,
        isAdmin: false,
        name: "Jane Ostin"
    }
    const neo: UserProfile = {
        id: 1,
        isAdmin: false,
        name: "Neo",
        info: "Programmer in big tech company"
    }

    // дженерики
    // инструмент, с помощью которого мы создаем обобщенные типы
    // работают при создании и использовании функций

    //эта функция ограничена в передаваемых значениях - можно
    //использовать только числа
    //function makeArray(first:number,second:number):number[]{
    //    return[first,second]
    //}

    // с помощью дженерика можно создать универсальную функцию
    function makeArray<T>(first:T,second:T):T[]{
        return[first,second]
    }

    makeArray<number>(12,34)
    makeArray<string>('apple','flower')
    makeArray<boolean>(true,false)

    // ! Типизация массива объектов

    // при типизации массива из объектов мы сначала типизируем один экземпляр 
    //(как вслучае с ISuperHero)
    //потом описываем типизацию массива через обращение к этому
    //экземпляру и использовании квадратных скобок(ISuperHero[])

    const heroes:ISuperHero[] = [hero1, hero3]

  return (
    <div>
      <h2>Typescript part2 🦾</h2>
      <p>
        Все самое интересное 
        происходит в теле функции, и в командной строке
      </p>
      <MyButton func={()=>console.log('click')}/>
    </div>
  );
}

export default Lesson07;
