import MyInput from "../myInput/MyInput";
import MyButton from "../myButton/MyButton";
import './LoginForm.css';

export default function LoginForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Login Form</h2>
      <MyInput name="login" type="text" placeholder="Enter your login" label="Login" />
      <MyInput name="email" type="email" placeholder="Enter your email" label="Email" />
      <MyInput name="password" type="password" placeholder="Enter your password" label="Password" />
      <MyButton type="submit" text="Submit" />
    </form>
  );
}