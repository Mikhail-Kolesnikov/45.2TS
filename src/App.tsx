import "./App.css";
import { HashRouter, Link, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Coctail from "./coctail/Coctail";
import FetchFox from "./components/fetchFox/FetchFox";
import Playground from "./playground/Playground";
import UserPage from "./components/userPage/UserPage";
import Lesson09 from "./lessons/lesson09/Lesson09";
import RandomFox from "./lessons/fox/RandomFox";
import Lesson07 from "./lessons/lesson07/Lesson07";
import Lesson08 from "./lessons/lesson08/Lesson08";
import Lesson06 from "./lessons/lesson06/Lesson06";
import Lesson05 from "./lessons/lesson05/Lesson05";
import NoPage from "./components/noPage/NoPage";
import Lesson04 from "./lessons/lesson04/Lesson04";
import HomePage from "./components/homePage/HomePage";
import Lesson12 from "./lessons/lesson12/Lesson12";
import FormGender from "./lessons/formGender.tsx/FormGender";
import Lesson13 from "./lessons/lesson13/Lesson13";
import Homework03 from "./lessons/lesson13/homework03/Homework03";
import Lesson14 from "./lessons/lesson14/Lesson14";
import ProductPage from "./components/productPage/ProductPage";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/cart/Cart";
import Produkts from "./components/products/Products";
import Lesson16 from "./lessons/lesson16/Lesson16";
import Store from "./components/store/Store";
import StorePage from "./components/storePage/StorePage";
import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {
  return (
    //!не забываем импортировать Provider из redux
    //в пропс store передаем наш store из app
    <Provider store={store}>
    <CartProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="fellowship" element={<Lesson05 />} />
            <Route path="cart" element={<Cart />} />
            <Route path="products" element={<Produkts />} />
            <Route path="products/:id" element={<ProductPage />} />
            <Route path="fetch-fox" element={<FetchFox />} />
            <Route path="lesson04" element={<Lesson04 />} />
            <Route path="lesson05" element={<Lesson05 />} />
            <Route path="lesson06" element={<Lesson06 />} />
            <Route path="lesson07" element={<Lesson07 />} />
            <Route path="lesson08" element={<Lesson08 />} />
            <Route path="lesson09" element={<Lesson09 />} />
            <Route path="lesson12" element={<Lesson12 />} />
            <Route path="lesson13" element={<Lesson13 />} />
            <Route path="lesson14" element={<Lesson14 />} />
            <Route path="lesson16" element={<Lesson16 />} />
            <Route path="lesson-15" element={<h2>На этом уроке мы создали <Link to='/products'>корзину для продуктов</Link> с помощью React Context 🛒</h2>} />
            <Route path="lesson14/:id" element={<ProductPage />} />
            <Route path="story" element={<Store />} />
            <Route path="story/:id" element={<StorePage />} />
            <Route path="prooduct/:id" element={<StorePage />} />

            <Route path="Homework03" element={<Homework03 />} />
            <Route path="random-fox" element={<RandomFox />} />
            <Route path="gender party" element={<FormGender />} />
            <Route path="user-page" element={<UserPage />} />
            <Route path="coctail" element={<Coctail />} />
            <Route path="playground" element={<Playground />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </CartProvider>
    </Provider>
  );
}

export default App;
