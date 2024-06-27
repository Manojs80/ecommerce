import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    data:[],
}

const productSlice = createSlice({
    name:'productSlice',
    initialState,
    reducers:{
        getProduct:(state, action)=>{
          state.data = action.payload            
        }
    }
});

export const {getProduct} = productSlice.actions;
export default productSlice.reducer;
