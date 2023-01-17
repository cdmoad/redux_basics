import {createSlice} from '@reduxjs/toolkit'

const inv=0;

export const counterSlice=createSlice({
name:"counter",
initialState:{value:inv},
reducers:{
    add:(state,action)=>{
        state.value=action.payload+1
    },
    sub:(state,action)=>{
        state.value=action.payload-1
    }
}

})

export const {add,sub}=counterSlice.actions

export default counterSlice.reducer