import React from 'react'
import {useDispatch} from 'react-redux'
import {add,sub} from "../features/counter"
import {useSelector} from 'react-redux'


function Counter() {

const counter=useSelector((state)=>state.counter.value)

const dispatch=useDispatch()

function addit(){
dispatch(add(counter))
}

function subit(){
dispatch(sub(counter))
}

  return (
    <div>

<button onClick={addit}>+</button>
<button onClick={subit}>-</button>

    </div>
  )
}

export default Counter