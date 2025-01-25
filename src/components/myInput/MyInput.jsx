import './MyInput.css';

export default function MyInput({ name, type = "text", placeholder, label }) {
  return (
    <div className="input-container">
      {label && <label htmlFor={name}>{label}</label>}
      <input 
        id={name} 
        name={name} 
        type={type} 
        placeholder={placeholder} 
        className="input" 
      />
    </div>
  );
}