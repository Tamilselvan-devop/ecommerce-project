import { Link } from "react-router-dom";
import "./Navbar.css";


export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>🛒 MyShop</h2> 
       <br/>
      <div className="nav-links">
         <br/>
          <br/>
           <br/>
            <br/>
        <Link to="/">Home</Link>
         
        <Link to="/mobiles">Mobiles</Link>
        <Link to="/furniture">Furniture</Link>
        <Link to="/electronics">Electronics</Link>
      </div>
       <br/>

      {/* 🔍 Search Bar */}
<div className="search-bar">
  <input type="text" placeholder="Search products..." />
  <button>Search</button>
</div>




      <div className="auth-links">
         
         
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </nav>
  );
}
