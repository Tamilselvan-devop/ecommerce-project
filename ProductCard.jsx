export default function ProductCard({ product }) {
  return (
    <div className="card">
      <img
        src={product.image_url || "https://via.placeholder.com/200"}
        alt={product.name}
      />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <p>⭐ {product.rating}</p>
      <button>Add to Cart</button>
    </div>
  );
}
