import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from './storePage.module.css'
import MyButton from "../myButton/MyButton";
const StorePage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [product, setProduct] = useState<any| null>(null);
    useEffect(() => {
      const fetchProduct = async () => {
        try {
          const response = await fetch(`https://dummyjson.com/products/${id}`);
          const data = await response.json();
          setProduct(data);
        } catch (error) {
          console.error('Error fetching product', error);
        }
      };
      fetchProduct();
    }, [id]);
    if (!product) return <div>Loading...</div>;
    return (
      <div className={styles.productDetails}>
        <h2>{product.title}</h2>
        <img src={product.thumbnail} alt={product.title} />
        <p>{product.description}</p>
        <p>Цена: ${product.price}</p>
        <p>Рейтинг: {product.rating}</p>
        <Link to='../store'><MyButton text="to Store"/></Link>
      </div>
    );
  };
  export default StorePage;