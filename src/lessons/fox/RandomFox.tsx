import { useState, useEffect } from "react";

export default function RandomFox() {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 123) + 1; 
    setImageUrl(`https://randomfox.ca/images/${randomId}.jpg`);
  }, []); 
  return (
    <div>
      <h2>Random Fox 🦊</h2>
      {imageUrl ? (
        <img src={imageUrl} alt="Random Fox" width={400} height={300} style={{ borderRadius: "8px" }} />
      ) : (
        <p>""</p>
      )}
    </div>
  );
}