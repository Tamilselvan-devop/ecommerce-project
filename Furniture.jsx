import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import"./Furniture.css";

export default function Furniture() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // 🔹 Temporary local data (for testing before backend connect)
    const sampleFurniture = [
      { id: 1, name: "Wooden Chair", price: 2500, image: "/images/chair.jpg" },
      { id: 2, name: "Modern Sofa", price: 18000, image: "/images/sofa.jpg" },
      { id: 3, name: "Dining Table", price: 22000, image: "/images/table.jpg" },
    ];

    // 🔹 Set the sample furniture data
    setProducts(sampleFurniture);
  }, []);

  return (
    <div className="page">
      <h2>Furniture 🪑</h2>
      <div className="grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
