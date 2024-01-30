import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    authData: null
  };

  const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      setAuth: (state, action) => {
        console.log(action.payload,'+++++++++++++++')
        state.authData = action.payload
      }
    }
  })
  
  export const {setAuth} = authSlice.actions
  export default authSlice.reducer;