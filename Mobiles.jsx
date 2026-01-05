import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import"./Mobiles.css";

import iphone15 from "../assets/images/f1.jpg";

export default function Mobiles() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // 🔹 Temporary local data (for testing before backend connect)
    const sampleMobiles = [
      { id: 1, name: "iPhone 15", price: 79999, image: iphone15},
      { id: 2, name: "Samsung Galaxy S24", price: 69999, image: "/images/s24.jpg" },
      { id: 3, name: "Redmi Note 13", price: 17999, image: "/images/redmi13.jpg" },
    ];

    // 🔹 Set the sample mobiles data
    setProducts(sampleMobiles);
  }, []);

  return (
    <div className="page">
      <h2>Mobiles 📱</h2>
      <div className="grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
