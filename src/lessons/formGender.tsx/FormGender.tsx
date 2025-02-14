import { useFormik } from "formik";
import { useState } from "react";
import MyButton from "../../components/myButton/MyButton";
import styles from './FormGender.module.css'

interface IGenderData {
  name: string;
  gender: string;
  probability: number;
}
const initial: IGenderData = {
    name: "",
    gender: "",
    probability: 0
}
export default function FormGender(): JSX.Element {
  const [gender, setGender] = useState<IGenderData>(initial);
  const formik = useFormik({
    initialValues: {
      name: '',
    } as {name: string},
    onSubmit: (values: {name: string}, { resetForm }) => {
        getFormGender(values.name);
      console.log(values);
      resetForm();
    },
  });
  const getFormGender = async (name:string): Promise<void> => {
    const res = await fetch(`https://api.genderize.io/?name=${name}`);
    const data = await res.json();
    setGender(data);
  };
  return (
    <div>
      <h2>Gender party :hot_pepper:</h2>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <input
          value={formik.values.name}
          onChange={formik.handleChange}
          name="name"
          type="text"
          placeholder="name"
        />
        <MyButton text="send" />
        <br />
        <span>gender:{gender.gender} </span>
        <br />
        <span>probability: {gender.probability} </span>
      </form>
    </div>
  );
}