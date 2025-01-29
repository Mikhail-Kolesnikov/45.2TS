import { useState, useEffect } from "react";

export default function RandomFox() {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch("https://randomfox.ca/floof/") 
      .then(response => response.json())
      .then(data => setImageUrl(data.image)) 
      .catch(error => console.error("Error fetching image:", error));
  }, []); 

  return (
    <div>
      <h2>Random Fox 🦊</h2>
      {imageUrl ? (
        <img src={imageUrl} alt="Random Fox" width={400} height={300} style={{ borderRadius: "8px" }} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}