// import styles from './Homework03.module.css'

import { useFormik } from "formik"

import MyButton from "../../../components/myButton/MyButton";
import * as Yup from 'yup'
interface IFormValues{
    username: string;
    email:string;
    confirmPassword:string
}

export const schema = Yup.object().shape({
    username: Yup.string()
      .min(3, 'Имя пользователя должно содержать минимум 3 символа')
      .max(20, 'Имя пользователя должно содержать максимум 20 символов')
      .matches(/^[a-zA-Z0-9_]+$/, 'Разрешены только буквы, цифры и символ "_"')
      .required('Имя пользователя обязательно'),
  
    email: Yup.string()
      .email('Некорректный email')
      .required('Email обязателен'),
  
    password: Yup.string()
      .min(8, 'Пароль должен содержать минимум 8 символов')
      .max(32, 'Пароль должен содержать максимум 32 символа')
      .matches(/[A-Z]/, 'Пароль должен содержать хотя бы одну заглавную букву')
      .matches(/[a-z]/, 'Пароль должен содержать хотя бы одну строчную букву')
      .matches(/\d/, 'Пароль должен содержать хотя бы одну цифру')
      .matches(/[@$!%*?&]/, 'Пароль должен содержать хотя бы один спецсимвол (@$!%*?&)')
      .required('Пароль обязателен'),
  
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Пароли должны совпадать')
      .required('Подтверждение пароля обязательно'),
  });
 
  export const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Некорректный email')
      .required('Email обязателен'),
  
    password: Yup.string()
      .min(8, 'Пароль должен содержать минимум 8 символов')
      .required('Пароль обязателен'),
  });
  
  
 
  
  
  
  export default function RegisterForm(): JSX.Element {
    const formik = useFormik({
      initialValues: {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: schema,
      validateOnChange: false,
      onSubmit: (values) => {
        console.log("Отправленные данные:", values);
      },
    });
  
    return (
      <div>
        <h2>Регистрация</h2>
        <form onSubmit={formik.handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Имя пользователя"
            value={formik.values.username}
            onChange={formik.handleChange}
          />
          {formik.errors.username && <div>{formik.errors.username}</div>}
  
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && <div>{formik.errors.email}</div>}
  
          <input
            type="password"
            name="password"
            placeholder="Пароль"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password && <div>{formik.errors.password}</div>}
  
          <input
            type="password"
            name="confirmPassword"
            placeholder="Подтверждение пароля"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
          />
          {formik.errors.confirmPassword && <div>{formik.errors.confirmPassword}</div>}
  
          <MyButton />
        </form>
        <span>{formik.errors.username}</span>
        <span>{formik.errors.email}</span>
        <span>{formik.errors.password}</span>
        <span>{formik.errors.confirmPassword}</span>
      </div>
    );
  }