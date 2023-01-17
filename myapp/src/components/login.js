import React,{useState} from "react";
import {useDispatch} from "react-redux"
import {login,logout} from '../features/user'

function Login() {

  const dispatch=useDispatch()

  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [age,setAge]=useState(0)

  function handleClick(){
  dispatch(
    login({name,age,email})
    )
  }

  function handleClick2(){
    dispatch(
      logout()
      )
    }

  return (
    <div>
      Name :
      <input type="text" onChange={(e)=>setName(e.target.value)}/>
      Email :
      <input type="email" onChange={(e)=>setEmail(e.target.value)}/>
      Age :
      <input type="number" onChange={(e)=>setAge(e.target.value)}/>

      <button onClick={handleClick}>Login</button>
      <button onClick={handleClick2}>Logout</button>
    </div>
  );
}

export default Login;
