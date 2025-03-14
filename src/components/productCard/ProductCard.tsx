// import styles from './PoductCard.module.css'

import { Link } from "react-router-dom";
import styles from "./productCard.module.css";
import MyButton from "../myButton/MyButton";
import { useCart } from "../../context/CartContext";

interface IProductCardProps {
  title: string;
  image: string;
  id: number;
  price: number;
}

export default function ProductCard({
  title,
  image,
  id,
  price,
}: IProductCardProps): JSX.Element {
  const { addToCart } = useCart();
  return (
    <div className={styles.productCard}>
      {/* <h2>PoductCard</h2> */}
      <h4>{title.length < 30 ? title : title.slice(0, 30) + "..."}</h4>
      <p>{price} Euro</p>

      <div>
        <img src={image} alt="" />
      </div>
      <section>
        <Link to={String(id)}>
          <MyButton text="to product" />
        </Link>
        <MyButton
          func={() => addToCart({ id, title, price, quantity: 1 })}
          text="add to cart"
          variant="danger"
        />
      </section>
    </div>
  );
}
