import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <h1>Welcome to MyShop 🛍️</h1> 
      <br/>

      <p>Find the best products for you!</p>
       <br/>

      <div className="category-cards">
        <Link to="/mobiles" className="category">Mobiles 📱</Link> 
         <br/>
         <Link to="/furniture" className="category">Furniture 🪑</Link>
         <br/>
         <Link to="/electronics" className="category">Electronics ⚡</Link>
         <br/>
      </div>
    </div>
  );
}
