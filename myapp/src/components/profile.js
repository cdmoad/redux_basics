import React from "react";
import {useSelector} from 'react-redux'


function Profile() {

  const user=useSelector((state)=>state.user.value)
  const themeColor=useSelector((state)=>state.theme.value)
  const counter=useSelector((state)=>state.counter.value)
  const gender=useSelector((state)=>state.gender.value)

  return (
    <div style={{color:themeColor}}>
      <h1>Profile page</h1>
      <h2>{counter}</h2>
      <p>Name:{user.name}</p>
      <p>Age:{user.age}</p>
      <p>Email:{user.email}</p>
      <p>Gender:{gender}</p>
    </div>
  );

}

export default Profile;
