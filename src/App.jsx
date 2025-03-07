import Home from "./components/Home";
import Header from "./components/Header";
import Filter from "./components/Filter";
import { useEffect } from "react";
import {
  addCart,
  addProducts,
  setCart,
  setError,
  setLoading,
} from "./lib/slice/productsSlice";
import productService from "./service/product";
import { useDispatch, useSelector } from "react-redux";
import Favorites from "./components/Favorites";
import { Route, Routes } from "react-router-dom";
import { getFromLocal, setToLocal } from "./lib/localConfig";

function App() {
  const dispatch = useDispatch();
  const { cartList } = useSelector((state) => state.products);

  useEffect(() => {
    const getProducts = async () => {
      dispatch(setLoading(true));
      dispatch(setError(null));
      try {
        const { data } = await productService.getAll();
        dispatch(addProducts(data));
      } catch (error) {
        dispatch(setError(error.message));
      } finally {
        dispatch(setLoading(false));
      }
    };
    getProducts();

    const storedCartList = getFromLocal("cartList");
    if (storedCartList) {
      dispatch(setCart(storedCartList));
    }
  }, []);

  useEffect(() => {
      setToLocal("cartList", cartList);
  }, [cartList]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/filter/:q" element={<Filter />} />
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
