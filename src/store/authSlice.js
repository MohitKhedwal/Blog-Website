import { createSlice } from "@reduxjs/toolkit";



// at stating no user is authorezed and they have no user data
const initialState={
    status:false,
    userData:null,
}

const authSlice=createSlice({
    name:"auth",
    initialState,

    // A reducer in React is a function that specifies how the application's state changes in response to certain actions. It takes the current state and an action as arguments, and returns a new state based on that action. The reducer function is pure, meaning it should not modify the state directly but instead return a new state object
    reducers:{
        //login
        enter:(state,action)=>{
            state.status=true;
            state.userData=action.payload.userData;
        },
        //logout
        exit:(state)=>{
            state.status=false;
            state.userData=null;
        }
      
    }

})

export const {enter,exit}=authSlice.actions
export default authSlice.reducer