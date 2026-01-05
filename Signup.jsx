import { useState } from "react";
import axios from "axios";
import "./Signup.css";

export default function Signup(){
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [msg,setMsg] = useState("");

  const handleSignup = async()=>{
    try{
      const res = await axios.post("http://127.0.0.1:5000/signup",{username,password});
      setMsg(res.data.message);
    }catch(err){
      setMsg("Signup failed");
    }
  }

  return (
    <div className="auth-form">
      <h2>Signup</h2>
      <input type="text" placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
      <button onClick={handleSignup}>Signup</button>
      <p>{msg}</p>
    </div>
  );
}
