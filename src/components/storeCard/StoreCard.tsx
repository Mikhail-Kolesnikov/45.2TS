import { Link } from 'react-router-dom';
import styles from './StoreCard.module.css'
import MyButton from '../myButton/MyButton';
interface IStoreCardProps {
  id: number;
  title: string;
  description: string;
  price?: number;
  thumbnail: string;
  stock: number;
  children?: React.ReactNode;
}
export default function StoreCard({
  id,
  title,
  description,
  price,
  thumbnail,
  stock,
  children
}: IStoreCardProps): JSX.Element {
  return (
    <div className={styles.productCard}>
      <h4>{title.length < 30 ? title : title.slice(0, 30) + "..."}</h4>
       {children}
      <div>
        <img src={thumbnail} alt="bild" />
      </div>
      <h4>description:{description.length < 30 ? description:description.slice(0,30)+'...'}</h4>
      <p>Stock:{stock}</p>
      <Link to={String (id)}><MyButton text="to product"/></Link>
    </div>
  );
}
