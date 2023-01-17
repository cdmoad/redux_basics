import React from "react";
import {useDispatch} from "react-redux"
import {login,logout} from '../features/user'

function Login() {

  const dispatch=useDispatch()

  function handleClick(){
  dispatch(
    login({name:"moad",age:19,email:"moad@gmail.com"})
    )
  }

  function handleClick2(){
    dispatch(
      logout()
      )
    }

  return (
    <div>
      <button onClick={handleClick}>Login</button>
      <button onClick={handleClick2}>Logout</button>
    </div>
  );
}

export default Login;
