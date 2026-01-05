import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import"./Electronics.css";

export default function Electronics() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // 🔹 Temporary local data (for testing before backend connect)
    const sampleElectronics = [
      { id: 1, name: "LED TV 43 inch", price: 30000, image: "/images/tv.jpg" },
      { id: 2, name: "Washing Machine", price: 18000, image: "/images/wm.jpg" },
      { id: 3, name: "Microwave Oven", price: 12000, image: "/images/oven.jpg" },
    ];

    // 🔹 Set the sample electronics data
    setProducts(sampleElectronics);
  }, []);

  return (
    <div className="page">
      <h2>Electronics ⚡</h2>
      <div className="grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
