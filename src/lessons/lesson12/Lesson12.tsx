 import styles from './Lesson12.module.css'

import MyButton from "../../components/myButton/MyButton";
import { useFormik } from 'formik';
interface IFormValues{
    firstname: string;
    lastname:string;
    email:string;
}

export default function Lesson12():JSX.Element {

    //мы вызываем хук useFormik, передав в него объект с настройками для формы
    //и кладем результат в переменную formik для дальнейшей работы
    //обязательные ключи для объекта с настройкамиЮ
    //initialValues начальные настройки
    //onSubmit функция, которая произойдет при событии submit

    const formik = useFormik({
        
        initialValues:{
            firstname: 'Rocky',
            lastname: 'Balboa',
            email: 'knockout@frombalboa.com'
            
        } as IFormValues,

        onSubmit:(values: IFormValues,{resetForm})=>{
            console.log(values)
            resetForm()
        }
    });

    


  return (
    <div>
      <h2>Lesson12 Formik 🥟🥟</h2>
      <form onSubmit={formik.handleSubmit}className={styles.form}>
        <input value={formik.values.firstname} onChange={formik.handleChange} name='firstname' type="text" 
        placeholder="firstname"/>
        <input value={formik.values.lastname} onChange={formik.handleChange} name='lastname' type="text" 
        placeholder="lastname"/>
        <input value={formik.values.email} onChange={formik.handleChange} name='email' type="text" 
        placeholder="email"/>

        <MyButton text="send"/>


      </form>
    </div>
  )
}

// 1. в функцию useFormik передали объект с начальными настройками
// 2. по ключу initialValues - передали начальные значения
// 3. по ключу onSubmit - описали событие для формы после нажатия кнопки
// 4. в результате получили переменную formik для дальнейшего использования
// 5. на событие onSubmit в форме передаем formik.handleSubmit
// 6. на событие onChange в каждом input передаем formik.handleChange
// 7. не забываем прописать каждому input атрибут name со значением как в соответствующем ключе в initialValues
// 8. добавляем formik.values c нужным значением для каждого input в аттрибут value

//Создайте компонент `FormGender.tsx`.

//- В нем сделайте форму с одним `input` для ввода имени.
//- На `onSubmit` передавайте имя в API через URL:
 // `https://api.genderize.io/?name=alla`
//- После `name=` передавайте строку из формы.
//- Выведите данные на странице.