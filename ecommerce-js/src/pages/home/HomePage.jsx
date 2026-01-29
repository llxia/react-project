import { Header } from "../../components/Header";
import "./HomePage.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { ProductsGrid } from "./ProductsGrid";

export function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState();

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get("/api/products");
      setProducts(res.data);
    };
    getProducts();
  }, []);

  return (
    <>
      <Header cart={cart} />
      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
}
