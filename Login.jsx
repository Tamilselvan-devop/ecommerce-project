import { useState } from "react";
import axios from "axios";
import "./Login.css";

export default function Login(){
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [msg,setMsg] = useState("");

  const handleLogin = async()=>{
    try{
      const res = await axios.post("http://127.0.0.1:5000/login",{username,password});
      setMsg(res.data.message);
    }catch(err){
      setMsg("Invalid credentials");
    }
  }

  return (
    <div className="auth-form">
      <h2>Login</h2>
      <input type="text" placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <p>{msg}</p>
    </div>
  );
}
