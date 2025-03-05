import styles from "./products.module.css";

export interface Iproduct {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

import { useEffect, useState } from "react";
import ProductCard from "../productCard/ProductCard";
import Cart from "../cart/Cart";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { loadProducts } from "../../features/products/productsAction";

export default function Produkts(): JSX.Element {
  //const [products, setProducts] = useState<Iproduct[]>([]);
  const dispatch = useAppDispatch()
  const {products, isLoading} = useAppSelector(state=>state.products)
  // const getProducts = async () => {
  //   const res = await fetch("https://fakestoreapi.com/products");
  //   const data = await res.json();
  //   setProducts(data);
  // };

  useEffect(() => {
    dispatch(loadProducts())
    //getProducts();
  }, []);

  return (
    <>
    <Cart/>
    <div className={styles.gridContainer}>
      <h2>Produkts🍇</h2>
      {products.map((el) => (
        <ProductCard
          key={el.id}
          title={el.title}
          price={el.price}
          id={el.id}
          image={el.image}
        />
      ))}
    </div>
    </>
  );
}
